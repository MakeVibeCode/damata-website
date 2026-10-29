/* Shared product detail sheet; uses the existing native-dialog interaction model. */
let productOpener=null;
function productSpecs(product,compact=false){
 const lines=String(product[2]||'').split('\n').filter(Boolean),intro=lines.shift()||'';
 const rows=(compact?lines.slice(0,3):lines).map(line=>{const split=line.indexOf(':');return split<0?['Параметры',line]:[line.slice(0,split),line.slice(split+1).trim()]});
 return `<p class="product-intro">${esc(intro)}</p>${rows.length?`<dl class="product-specs">${rows.map(([label,value])=>`<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`:''}`;
}
function closeProduct(){const sheet=document.querySelector('#product-sheet');if(sheet?.open)sheet.close();if(!document.querySelector('#quiz')?.open)document.body.classList.remove('modal-open');productOpener?.focus()}
function openProduct(button){
 const c=catalogue.find(c=>c.id===button.dataset.category),p=c?.products[Number(button.dataset.index)];if(!p)return;
 productOpener=button;let sheet=document.querySelector('#product-sheet');
 if(!sheet){sheet=document.createElement('dialog');sheet.id='product-sheet';sheet.setAttribute('aria-labelledby','product-title');document.body.append(sheet);sheet.addEventListener('cancel',event=>{event.preventDefault();closeProduct()})}
 sheet.innerHTML=`<div class="product-sheet-top"><span class="eyebrow">${esc(c.name)}</span><button type="button" class="close" onclick="closeProduct()" aria-label="Закрыть характеристики">×</button></div><div class="product-sheet-layout"><div class="product-sheet-photo"><img src="${p[4]?image({image:p[4]}):image(c)}" alt="${esc(p[0])} — визуализация варианта" width="1400" height="933"></div><div class="product-sheet-body"><h2 id="product-title" tabindex="-1">${esc(p[0])}</h2>${productSpecs(p)}<p class="spec-disclaimer">Пример комплектации для подбора. Точные размеры, состав и показатели подтвердим по паспорту выбранной модели.</p><div class="product-price">${p[1]>0?`от ${money(p[1])} ₸ / ${esc(c.unit)}`:'Цена по запросу'}</div><button class="pill filled" onclick="quoteProduct(this)" data-quiz="${esc(c.id)}" data-product="${esc(p[0])}">Рассчитать этот вариант ${arrow}</button></div></div>`;
 sheet.showModal();document.body.classList.add('modal-open');document.querySelector('#product-title').focus();
}
function quoteProduct(button){const trigger=productOpener;closeProduct();openQuiz(button);opener=trigger}
