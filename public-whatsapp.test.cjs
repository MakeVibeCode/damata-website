const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const Lead=require('./lead.js');
test('public WhatsApp handoff includes every answer and contact without claiming delivery',async()=>{
 const answers={category:'locks',product:'Умный замок',object:'Жилой комплекс',project:'Тестовый ЖК',city:'Астана',volume:'500 комплектов',details:'Код и карта',projectUrl:'https://example.org/project.pdf',timing:'Через 1–3 месяца',role:'Подрядчик / снабжение',company:'ТОО Проверка',name:'Тест',position:'Снабжение',phone:'+7 700 000 00 00'};
 const nodes=new Map(),get=selector=>{if(!nodes.has(selector))nodes.set(selector,{innerHTML:'',focus(){},onclick:null});return nodes.get(selector)};
 let target='';
 const ctx=vm.createContext({DomataLead:Lead,answers,leadContext:{id:'WEB-test-1234',path:'/catalog/locks',source:{utm_campaign:'test'}},category:()=>({name:'Замки',group:'Двери и ограждения'}),$:get,esc:s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;'),closeQuiz(){},renderQuiz(){},window:{location:{assign(url){target=url}}},Date});
 vm.runInContext(fs.readFileSync('public-whatsapp.js','utf8'),ctx);
 await vm.runInContext('finish()',ctx);
 const url=new URL(target);assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/77020818888');
 const text=url.searchParams.get('text');for(const [key,value]of Object.entries(answers))if(key!=='category')assert.ok(text.includes(value),key);
 assert.ok(text.includes('Двери и ограждения'));assert.ok(text.includes('Кампания: test'));assert.ok(text.includes('/catalog/locks'));
 const html=get('#quiz-body').innerHTML;assert.ok(html.includes('после вашего нажатия'));assert.ok(html.includes('readonly'));assert.ok(!html.includes('сохранена'));assert.ok(!html.includes('доставлена'));
 const artifact=fs.readFileSync('github-preview/app.js','utf8');assert.ok(!artifact.includes("fetch('/api/leads'"));assert.ok(!artifact.includes('заявки не отправляются'));assert.ok(artifact.includes('Открыть WhatsApp'));assert.ok(artifact.includes('Сам файл можно добавить в WhatsApp.'));
});
