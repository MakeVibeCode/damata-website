const fs=require('node:fs'),path=require('node:path'),{execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),out=path.join(root,'github-preview');
const remote='https://github.com/MakeVibeCode/damata-website.git';
function git(args,cwd=out){return execFileSync('git',['-c','safe.directory='+out,...args],{cwd,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim()}
for(const name of ['data','admin.html','.env','server.cjs','storage.cjs'])if(fs.existsSync(path.join(out,name)))throw Error('Private source in public artifact: '+name);
if(fs.readdirSync(path.join(out,'assets')).some(n=>n.endsWith('.json')))throw Error('Source provenance in public artifact');
const sourceCommit=git(['rev-parse','HEAD'],root);
const release={sourceCommit,builtAt:new Date().toISOString(),catalogueImages:32};
fs.writeFileSync(path.join(out,'release.json'),JSON.stringify(release,null,2)+'\n');
if(!fs.existsSync(path.join(out,'.git')))git(['init','-b','gh-pages']);
let configured;try{configured=git(['remote','get-url','origin'])}catch{git(['remote','add','origin',remote]);configured=remote}
if(configured!==remote)throw Error('Unexpected deployment remote');
git(['fetch','origin','gh-pages']);
const parent=git(['rev-parse','FETCH_HEAD']);
git(['add','--all']);
const tree=git(['write-tree']);
const commit=git(['-c','user.name=MakeVibeCode','-c','user.email=346271141+MakeVibeCode@users.noreply.github.com','commit-tree',tree,'-p',parent,'-m','Publish terracotta DAMATA catalogue from '+sourceCommit]);
git(['update-ref','refs/heads/gh-pages',commit]);
git(['push','origin','gh-pages:gh-pages']);
const result={...release,publicationCommit:commit,url:'https://makevibecode.github.io/damata-website/'};
fs.writeFileSync(path.join(root,'outputs/publication-result.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result));
