# Проверка локальной версии

- `node --check app.js` — успешно.
- `node --check server.cjs` — успешно.
- `audit_project.py . --mode strict` — 0 ошибок, 0 предупреждений; premium-audit.json.
- Главная и 9 /catalog/* — HTTP 200; в каждой категории по 3 комплектации.
- Реальный браузер: главная и страница замков, 390×844 и 320×740; горизонтального переполнения нет.
- Фильтр «Двери и ограждения»: двери, замки, перила.
- Подбор: обязательный выбор, категория замков, объект, город, объём, детали, возврат с сохранением, срок и роль, карточка потребности, контакт.
- Неверный телефон вызывает текстовую ошибку. Валидные демонстрационные контакты формируют карточку.
- JSON заявки скачивается. Нет отправки на сервер или внешним сервисам.
- Карточка товара открывает подбор с категорией и выбранным вариантом.
- Escape закрывает dialog и возвращает фокус на кнопку.
- Локальные изображения загружаются; резервируется геометрия. Есть reduced-motion и системные forced-colors правила.

Ограничения: это локальная демонстрация; реальные цены, модели, технические документы и видео ещё не предоставлены. Мобильная проверка выполнена в браузерном viewport, не на физическом телефоне. CRM, внешние отправки и аналитика не подключены.

## Обновление коммерческих текстов
Добавлены подтверждённые пользователем сведения: продажа товара с НДС, полный цикл, контроль качества в Китае, растаможка, необходимая сертификация, многолетний опыт без выдуманных цифр и работа с участниками тендеров. FAQ и примечания к демонстрационным ценам согласованы с предложением полного цикла.
Проверено: node --check app.js; strict-аудит — без замечаний; на 390 px нет переполнения; новая кнопка открывает пошаговую заявку.

## WhatsApp — 2026-10-27 (заменяет прежнюю выгрузку JSON)
- lead.js: тест проверяет все поля, отдел, кириллицу, спецсимволы, ссылку на проект, рекламные метки и обратное декодирование wa.me URL; номер — 77020818888. PASS.
- Браузер 390×844: путь со страницы замков; компания, должность, проект, ссылка, роль участника тендера, все ответы, контакты и UTM присутствуют в превью и тексте URL.
- Некорректная схема ссылки блокируется; данные сохраняются при редактировании.
- Копирование полного сообщения работает. Горизонтального переполнения нет.
- Никакие тестовые сообщения не отправлялись; приём WhatsApp на реальном телефоне и автодоставка не подтверждены. Файлы не загружаются с сайта, прикрепляются в чате. Отдельной базы заявок пока нет.

## DAMATA — база, файлы, каталог (заменяет предыдущий WhatsApp-переход)
- node --check для app.js, admin.js, server.cjs, storage.cjs — успешно.
- node --test server.test.cjs — успешно: временная база и тестовый приёмник; сохранение PDF, повтор с одним ключом без дубля, server validation, запрет чужого Origin, админ-доступ, приватные файлы, блокировка доступа к raw data, полный message/attachments payload и подтверждение адаптера.
- Браузер: файл project.pdf выбран прямо в форме, сохраняется между шагами, после заполнения контактов создана заявка с вложением в настоящей локальной базе. После перезапуска сервера запись и файл сохранились. В админке заявка читается по ключу, неподключённый WhatsApp обозначен явно.
- Тестовая запись помечена «ТЕСТ» и переведена в needs_review, чтобы она не ушла автоматически при будущем подключении канала.
- Каталог на мобильном viewport 390 px: 2 равные колонки фильтров, карточки целиком ссылки, горизонтального переполнения нет. Desktop hover и keyboard focus реализованы общей CSS-системой; reduced motion отключает перемещение.
- Доставка на реальный WhatsApp не проверялась: у пользователя только обычный WhatsApp / Business, бизнес-API не подключён. Ничего не опубликовано.

## Обновление: обычный WhatsApp и этапы поставки
node --check app.js и node --test server.test.cjs — успешно. node verify-lead.cjs проверяет номер получателя, поля сообщения, сохранённый серверный ID и названия файлов в ссылке WhatsApp без отправки. В браузере подтверждены 6 этапов и новый слоган в футере. Файлы по-прежнему сначала сохраняются в SQLite; wa.me передаёт только текст, ручное нажатие «Отправить» остаётся необходимым.

## CMS и GitHub Pages — 2026-10-27
- node --test server.test.cjs: дополнительно проверены чтение каталога по ключу, загрузка публичного PNG, сохранение цены/фото, скрытие товара, отображение изменений в /catalog.json, конфликт revision409 и запрет HTML в контенте.
- Реальный браузер: редактор «Каталог и цены» открывается; цена временно изменена с 4900 до 4950, на странице товара показано 4950, затем исходная цена восстановлена. Новая позиция добавляется, отмена подтверждается и возвращает 3 исходных товара.
- GitHub: https://github.com/MakeVibeCode/damata-website . main — полный исходный код, gh-pages — только безопасная статическая демонстрация. Нет data/, admin-token, проектов клиентов или секретов.
- GitHub Pages: https://makevibecode.github.io/damata-website/ . GitHub подтвердил built. В браузере открыта главная с 9 категориями, страница замков с 3 товарами и работающим якорем #products; не найдено сломанных изображений.
- На GitHub Pages нет работающей серверной админки/SQLite — для этого нужен отдельный сервер. Публичная форма обозначена демонстрационной и не отправляет/не сохраняет данные.


## Company presentation redesign — 2026-11-07
Replaced the public appearance adapter and home/shared content. No request persistence or CMS logic changed. Syntax checks passed for app, presentation, product details, admin, server and storage. node --test product-catalogue.test.cjs public-whatsapp.test.cjs passed 2 tests; node --test server.test.cjs passed the integration suite. Browser: mobile filter returns 2 facade cards, menu closes after navigation, empty quote choice gives inline validation, variant detail opens and transfers selection into quote step 2. No horizontal overflow at 390 or 320px. Desktop hero/catalogue visually inspected. npm executable unavailable; equivalent package check commands ran directly with node. Python is a Windows Store alias, so the Python skill audit could not run. Publication not performed; existing local preview is current.


## Squarespace reference redesign — 2026-11-07
New centered dark hero and animated gallery, cobalt/mineral palette, sourcing collage, interactive six-stage panel and new CTA/footer. Browser checks passed for gallery pause (animationPlayState paused), matching selected stage 2/6, single pressed stage, loaded images, no document overflow at 390/320px, navigation close, two door/lock results, product detail to preselected quote, inline required-field error and Escape dismissal. Existing server persistence/access-control suite, public WhatsApp suite and catalogue/24-image suite passed. Static preview regenerated locally; no deployment. Python skill audit cannot run on the installed Windows Store alias.


## Cohesion and motion refinement — 2026-11-07
Unified graphite/cool white/cobalt token roles; removed greenish source/product/form fills, separate lavender statement and solid cobalt quote background. Unified Manrope headings and blue emphasis. Expanded existing reveal behavior to headings/content/footer with bounded stagger, added subtle object-position drift, stage image/copy/route transitions, FAQ opening motion and shared hover details. Browser checked matching palette values, stage 4 single selection and animation names, FAQ opening, Manrope quote, mobile form open/Escape, and 390/320px overflow/pending checks. Hero composition retained. Python audit remains unavailable on this host.


## Online Stores reference implementation — 2026-11-07
Replaced the former gallery home with full-bleed generated material photo, transparent header, centered heading/white CTA, sticky pill navigation and framed three-material showcase. Warm monochrome tokens apply across shared sections. Two-column catalogue. Generated image optimised to 212 KB; source prompt saved. Browser 390px: no horizontal overflow, hero image loaded, sticky navigation, facade filter returns 2, quote opens and Escape closes. Final narrow/desktop checks are recorded in chat. Static preview rebuilt; all 3 suites passed.


## Terracotta identity — 2026-11-07
Approved still-life hero preserved; warm tokens applied across catalogue, sourcing, stages, CTA, footer, category/product views and quote dialogs. Added 313 KB matching architectural image with prompt provenance. Source paragraph contrast 5.77:1; filled action 5.39:1; secondary text darkened for sand. Browser: source image loaded, 390px without overflow, stage 6 has a single selected control and new scene, quote has 9 choices on sand surface and closes with Escape. Existing syntax checks and all 3 suites passed. Python skill audit is unavailable on this host as previously recorded.


## Public terracotta catalogue release — 2026-11-07
All 8 category and 24 variant photographs generated and visually inspected as one series; text/diagram generations rejected and replaced by clean photography. 32 distinct JPEG hashes; 8,981,466 bytes combined. Seed and live catalogue migrated through the canonical CMS writer, preserving custom media and a private backup. Public artifact excludes database/admin/env/server files and asset provenance JSON. Existing syntax and 3 suites passed. Browser public-prefix preview: two facade results, correct new category/product URLs, variant detail to quote step 2, required-object error, mobile no overflow and no console errors. Publishing reuses the existing gh-pages audience and source repository.
