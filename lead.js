/* One shared WhatsApp message contract for every category. No network calls. */
var DomataLead = (() => {
  const phone = '77020818888';
  const clean = value => String(value ?? '').trim();
  function build(answers, category, context = {}) {
    const rows = [
      ['Отдел', category?.group || 'Комплексные поставки'],
      ['Направление', category?.name || 'Комплексная поставка'],
      ['Товар / комплектация', answers.product],
      ['Тип объекта', answers.object], ['Название объекта', answers.project],
      ['Город поставки', answers.city], ['Объём', answers.volume],
      ['Что требуется / характеристики', answers.details],
      ['Проект / спецификация (ссылка)', answers.projectUrl],
      ['Срок поставки', answers.timing], ['Роль в проекте', answers.role],
      ['Компания', answers.company], ['Контактное лицо', answers.name],
      ['Должность', answers.position], ['Телефон / WhatsApp', answers.phone]
    ];
    const lines = ['ЗАЯВКА DAMATA', `Номер заявки: ${context.id || 'не указан'}`, '',
      ...rows.filter(([,v]) => clean(v)).map(([label,value]) => `${label}: ${clean(value)}`),
      '', 'Нужен расчёт прямой поставки из Китая с НДС.'];
    if (context.path) lines.push(`Страница входа: ${context.path}`);
    const source = context.source || {};
    const sourceNames = {utm_source:'Источник',utm_medium:'Канал',utm_campaign:'Кампания',utm_content:'Объявление',utm_term:'Ключевая фраза'};
    Object.entries(sourceNames).forEach(([key,label]) => {if(clean(source[key])) lines.push(`${label}: ${clean(source[key]).slice(0,200)}`)});
    return lines.join('\n');
  }
  function url(message) { return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`; }
  return { phone, build, url };
})();
if (typeof module !== 'undefined' && module.exports) module.exports = DomataLead;
