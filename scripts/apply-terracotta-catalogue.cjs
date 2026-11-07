const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const seedPath=path.join(root,'catalog.json');
const original=JSON.parse(fs.readFileSync(seedPath,'utf8').replace(/^\uFEFF/,''));
const variants=JSON.parse(fs.readFileSync(path.join(root,'assets/terracotta-variant-sources.json'),'utf8')).images;
const mapping=new Map(variants.map(x=>[x.key,x.asset.replace(/\.jpg$/,'')]));
function update(list){return list.map(c=>({...c,products:c.products.map(p=>{const next=[...p];if(mapping.has(next[4]))next[4]=mapping.get(next[4]);return next})}))}
for(const entry of variants)if(!fs.existsSync(path.join(root,'assets',entry.asset)))throw Error('Missing image: '+entry.asset);
const updated=update(original);
fs.writeFileSync(seedPath,JSON.stringify(updated,null,2)+'\n');
if(fs.existsSync(path.join(root,'data/damata.sqlite'))){
 const store=require('../storage.cjs');
 const cms=require('../catalogue.cjs')(store,updated);
 const current=cms.read();
 const next=update(current.categories);
 if(JSON.stringify(next)!==JSON.stringify(current.categories)){
  const backup=path.join(root,'data/catalogue-before-terracotta-2026-11-07.json');
  if(!fs.existsSync(backup))fs.writeFileSync(backup,JSON.stringify(current,null,2),{flag:'wx'});
  cms.write(current.revision,next);
 }
}
console.log('Updated seed and live catalogue images; custom media retained.');
