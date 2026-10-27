/* GitHub Pages handoff: no API, database or automatic delivery claim. */
function publicWhatsAppMessage(){return DomataLead.build(answers,category(),{...leadContext,id:leadContext.id||'WEB-'+Date.now()})}
function filePicker(){return ''}
async function finish(){
  const message=publicWhatsAppMessage(),url=DomataLead.url(message);
  $('#quiz-body').innerHTML=`<div class="quiz-top"><span class="eyebrow">DAMATA · WhatsApp</span><button class="close" type="button" aria-label="Закрыть подбор">×</button></div><h2 id="quiz-title" tabindex="-1">Осталось<br><em>нажать «Отправить».</em></h2><p>В WhatsApp уже будет готовый текст со всеми ответами. Получатель: +7 702 081 88 88.</p><a class="pill filled whatsapp-send" href="${esc(url)}" referrerpolicy="no-referrer">Открыть WhatsApp ↗</a><p class="local-note">Сообщение придёт нам после вашего нажатия «Отправить» в WhatsApp. Проект можно прикрепить там же.</p><details class="message-details"><summary>Посмотреть текст заявки</summary><textarea class="message-preview" aria-label="Текст заявки для WhatsApp" readonly>${esc(message)}</textarea></details><button type="button" class="text-link" id="edit-whatsapp">Изменить контакты</button>`;
  $('.close').onclick=closeQuiz;
  $('#edit-whatsapp').onclick=()=>{step=5;renderQuiz();$('#quiz-title').focus()};
  $('#quiz-title').focus();
  // Synchronous navigation from the validated submit gesture works on mobile without popups.
  window.location.assign(url);
}
