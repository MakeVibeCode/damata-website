const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
test('all public variants have independent images and complete escaped specifications',()=>{
 const catalog=JSON.parse(fs.readFileSync('github-preview/catalog.json','utf8')),seen=new Set();assert.equal(catalog.length,8);
 for(const c of catalog){assert.equal(c.products.length,3);for(const p of c.products){assert.ok(p[4],p[0]);assert.ok(!seen.has(p[4]),p[0]+' repeats image');seen.add(p[4]);assert.ok(fs.existsSync('github-preview/assets/'+p[4]+'.jpg'));assert.ok(p[2].split('\n').length>=6,p[0]+' lacks specification');}}
 assert.equal(seen.size,24);assert.ok(fs.existsSync('github-preview/assets/generated-tiles-hall.jpg'));
 const ctx=vm.createContext({esc:s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')});vm.runInContext(fs.readFileSync('product-details.js','utf8'),ctx);
 const render=vm.runInContext('productSpecs',ctx),sample=['Test',1,'Intro\nFormat: 600 × 1200\nFinish: Matte\nUse: Hall\nMaterial: <script>'];
 assert.ok(render(sample,true).includes('600 × 1200'));assert.ok(!render(sample,true).includes('Material'));assert.ok(render(sample).includes('&lt;script&gt;'));assert.ok(!render(sample).includes('<script>'));
 const html=fs.readFileSync('github-preview/index.html','utf8');assert.ok(html.includes('/damata-website/product-details.js?v='));
});
