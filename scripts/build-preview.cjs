const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),out=path.join(root,'github-preview'),prefix='/damata-website';
fs.mkdirSync(path.join(out,'assets'),{recursive:true});
for(const name of fs.readdirSync(path.join(root,'assets')))if(/\.(jpg|png|svg|json|css|woff2?|ttf|txt)$/.test(name)){let content=fs.readFileSync(path.join(root,'assets',name));if(name.endsWith('.css'))content=Buffer.from(content.toString().replaceAll('/assets/',prefix+'/assets/'));fs.writeFileSync(path.join(out,'assets',name),content)}
let catalog=JSON.parse(fs.readFileSync(path.join(root,'catalog.json'),'utf8').replace(/^\uFEFF/,''));
const dbPath=path.join(root,'data','damata.sqlite');if(fs.existsSync(dbPath)){const {DatabaseSync}=require('node:sqlite');const db=new DatabaseSync(dbPath,{readOnly:true});const row=db.prepare('SELECT data FROM catalogue WHERE id=1').get();if(row)catalog=JSON.parse(row.data);db.close()}
catalog=catalog.filter(c=>c.active!==false).map(c=>({...c,products:c.products.filter(p=>p[5]!==false)}));
for(const c of catalog)for(const image of [c.image,...c.products.map(p=>p[4])])if(image?.startsWith('/media/')){const file=path.basename(image);fs.mkdirSync(path.join(out,'media'),{recursive:true});fs.copyFileSync(path.join(root,'data','media',file),path.join(out,'media',file))}
fs.writeFileSync(path.join(out,'catalog.json'),JSON.stringify(catalog,null,2));
let app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const start=app.indexOf('async function finish(){'),end=app.indexOf('function fileSummary()',start);
app=app.slice(0,start)+`async function finish(){if(completed)return;completed=true;$('#quiz-body').innerHTML=\`<div class="quiz-top"><span class="eyebrow">Демонстрация DAMATA</span><button class="close" aria-label="Закрыть">×</button></div><h2 id="quiz-title" tabindex="-1">Подбор<br><em>готов.</em></h2><p>Это демонстрационная версия для просмотра. Данные не отправлены и не сохранены. Приём реальных заявок и проектов будет подключён на серверной версии.</p>\${summary()}<button id="finish-close" type="button" class="pill filled">Готово</button>\`;$('.close').onclick=closeQuiz;$('#finish-close').onclick=closeQuiz;$('#quiz-title').focus()}\n`+app.slice(end);
app=app.replace('if(step===2)bindFiles();','');
app=app.replaceAll('Отправить заявку','Посмотреть подбор');
app=app.replace('Нажимая «Посмотреть подбор», вы передаёте DAMATA заполненные данные, контакты и выбранные файлы для подготовки расчёта. Переходить в WhatsApp не нужно.','Демонстрация: не вводите реальные контактные данные. Форма показывает подбор, ничего не отправляет и не сохраняет.');
app=app.replace('const id=location.pathname.split(\'/\').filter(Boolean)[1];',"const id=location.pathname.match(/\\/catalog\\/([^/]+)/)?.[1];");
app=app.replace("?c.image:`/assets/",`?'${prefix}'+c.image:\`/assets/`);
app=app.replaceAll('/assets/',prefix+'/assets/').replaceAll('/catalog/',prefix+'/catalog/').replace("/\\/catalog\\/([^/]+)/", "/\\/catalog\\/([^/]+)/");
app=app.replaceAll('href="/#','href="'+prefix+'/#').replaceAll('href="/"','href="'+prefix+'/"').replaceAll("fetch('/catalog.json')",`fetch('${prefix}/catalog.json')`);
app+='\nfunction filePicker(){return `<div class="local-note">В демонстрационной версии загрузка файлов отключена. Рабочая форма с проектами и база доступны в серверной версии DAMATA.</div>`}\n';
app=app.replace('Заявки и файлы отправляются с сайта и сохраняются в локальной базе SQLite. Автоматическая передача уведомлений в WhatsApp требует подключения бизнес-канала. Статус передачи доступен в разделе заявок для менеджера.','Это публичная демонстрация. Приём заявок, загрузка проектов и админка в этой версии отключены.');
fs.writeFileSync(path.join(out,'app.js'),app);
let presentation=fs.readFileSync(path.join(root,'presentation.js'),'utf8').replaceAll('/assets/',prefix+'/assets/').replaceAll('/catalog/',prefix+'/catalog/').replaceAll('href="/#','href="'+prefix+'/#').replaceAll('href="/"','href="'+prefix+'/"');fs.writeFileSync(path.join(out,'presentation.js'),presentation);
fs.copyFileSync(path.join(root,'design.css'),path.join(out,'design.css'));
fs.copyFileSync(path.join(root,'lead.js'),path.join(out,'lead.js'));
let css=fs.readFileSync(path.join(root,'styles.css'),'utf8');css+='\n.preview-note{position:fixed;z-index:50;left:50%;bottom:14px;transform:translateX(-50%);padding:7px 16px;border:1px solid #e0cc8a66;border-radius:30px;background:#171a17ed;color:#e0cc8a;font:10px Arial;text-align:center;max-width:90%;box-shadow:0 5px 20px #0004}@media(max-width:720px){.preview-note{bottom:82px;width:max-content;max-width:92%;font-size:9px}}';fs.writeFileSync(path.join(out,'styles.css'),css);
let html=fs.readFileSync(path.join(root,'index.html'),'utf8').replaceAll('href="/styles.css"',`href="${prefix}/styles.css"`).replaceAll('href="/design.css"',`href="${prefix}/design.css"`).replaceAll('href="/assets/fonts.css"',`href="${prefix}/assets/fonts.css"`).replaceAll('src="/presentation.js"',`src="${prefix}/presentation.js"`).replaceAll('src="/lead.js"',`src="${prefix}/lead.js"`).replaceAll('src="/app.js"',`src="${prefix}/app.js"`);html=html.replace('<body>','<body><div class="preview-note">Демонстрация · цены примерные · заявки не отправляются</div>');
fs.writeFileSync(path.join(out,'index.html'),html);fs.writeFileSync(path.join(out,'404.html'),html);
for(const c of catalog){const dir=path.join(out,'catalog',c.id);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),html)}
fs.writeFileSync(path.join(out,'.nojekyll'),'');console.log('Static preview built: '+out+' ('+catalog.length+' categories). No database, keys, admin files or customer projects included.');
