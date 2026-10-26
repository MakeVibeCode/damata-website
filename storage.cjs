const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {DatabaseSync}=require('node:sqlite');
const root=path.resolve(process.env.DAMATA_DATA_DIR||path.join(__dirname,'data'));
fs.mkdirSync(path.join(root,'uploads'),{recursive:true});
const db=new DatabaseSync(path.join(root,'damata.sqlite'));
db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;
CREATE TABLE IF NOT EXISTS leads(id TEXT PRIMARY KEY,request_key TEXT UNIQUE NOT NULL,created_at TEXT NOT NULL,payload TEXT NOT NULL,message TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'queued',last_error TEXT);
CREATE TABLE IF NOT EXISTS files(id TEXT PRIMARY KEY,lead_id TEXT NOT NULL REFERENCES leads(id),name TEXT NOT NULL,mime TEXT NOT NULL,size INTEGER NOT NULL,disk_name TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS outbox(lead_id TEXT PRIMARY KEY REFERENCES leads(id),attempts INTEGER NOT NULL DEFAULT 0,next_attempt INTEGER NOT NULL DEFAULT 0,locked INTEGER NOT NULL DEFAULT 0);`);
// Resume only work not accepted by the connector. Uncertain deliveries require review.
db.exec("UPDATE leads SET status='needs_review' WHERE id IN (SELECT lead_id FROM outbox WHERE locked=1); UPDATE outbox SET locked=0;");
let admin=process.env.DAMATA_ADMIN_TOKEN;
if(!admin){const tokenFile=path.join(root,'admin-token.txt');if(fs.existsSync(tokenFile))admin=fs.readFileSync(tokenFile,'utf8').trim();else{admin=crypto.randomBytes(24).toString('hex');fs.writeFileSync(tokenFile,admin,{mode:0o600})}}
function authorised(header){const value=String(header||'').replace(/^Bearer /,'');return value.length===admin.length&&crypto.timingSafeEqual(Buffer.from(value),Buffer.from(admin))}
function get(id){const lead=db.prepare('SELECT * FROM leads WHERE id=?').get(id);if(!lead)return null;return {...lead,payload:JSON.parse(lead.payload),files:db.prepare('SELECT id,name,mime,size FROM files WHERE lead_id=?').all(id)}}
function save(requestKey,payload,message,uploads){const old=db.prepare('SELECT id FROM leads WHERE request_key=?').get(requestKey);if(old)return get(old.id);const id='DA-'+crypto.randomUUID();const created=new Date().toISOString();const saved=[];
try{for(const file of uploads){const fid=crypto.randomUUID(),diskName=fid+file.extension;fs.writeFileSync(path.join(root,'uploads',diskName),file.buffer,{flag:'wx',mode:0o600});saved.push({...file,id:fid,diskName})}db.exec('BEGIN');db.prepare('INSERT INTO leads(id,request_key,created_at,payload,message) VALUES(?,?,?,?,?)').run(id,requestKey,created,JSON.stringify(payload),message.replace('Номер заявки: '+requestKey,'Номер заявки: '+id));for(const file of saved)db.prepare('INSERT INTO files VALUES(?,?,?,?,?,?)').run(file.id,id,file.name,file.mime,file.buffer.length,file.diskName);db.prepare('INSERT INTO outbox(lead_id) VALUES(?)').run(id);db.exec('COMMIT');return get(id)}catch(error){try{db.exec('ROLLBACK')}catch{}for(const file of saved)try{fs.unlinkSync(path.join(root,'uploads',file.diskName))}catch{}throw error}}
function next(){return db.prepare("SELECT o.lead_id FROM outbox o JOIN leads l ON l.id=o.lead_id WHERE o.locked=0 AND o.next_attempt<=? AND l.status='queued' LIMIT 1").get(Date.now())}
function file(id){return db.prepare('SELECT * FROM files WHERE id=?').get(id)}
module.exports={db,root,authorised,get,save,next,file};
