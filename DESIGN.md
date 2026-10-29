# DAMATA — design context

Russian mobile-first B2B catalogue for direct sourcing of building materials from China. Local site with explicit WhatsApp handoff; no automatic submissions, analytics, CRM or deployment. Prices are illustrative KZT, not offers. Stock images illustrate applications, not completed company projects.

## Visual direction
User-selected reference: https://www.neolith.com/en/neolith-projects/ . Independently implemented charcoal presentation, warm gold highlights, fine navigation rules, architectural photography, generous spacing and serif headings. Procurement content stays practical for economy-segment volume purchasing. No copied stylesheet or unverified company statistics.

## Tokens / runtime ownership
`styles.css :root` owns runtime tokens: ink #f2f0e9, muted #aaa9a1, paper #202220, surface #292b28, dark #171a17, accent #e0cc8a, line #45473f, thumb #77796c, track #252722. Display: Georgia / Times New Roman / serif. Body: Arial / Helvetica / sans-serif. Native fonts prevent loading shifts. Content max 1440px; mobile gutters 20px. Pill controls echo the selected reference.

## Shared behavior
All category pages use catalog.json and app.js shared header, product cards, FAQ, wizard and footer. Distinct paths support deep links through server.cjs. Category filters use buttons with pressed state; category navigation uses anchors. Wizard uses native dialog, back preserves answers, category-specific volume labels, inline accessible errors. Contacts remain in memory and are discarded on close. After validation, lead.js builds one complete message with department, category, product, all project answers, company, contacts, request ID and allowlisted UTM fields. A preview precedes an explicit wa.me link to 77020818888. Only the customer clicks through and sends in WhatsApp. No auto-send, server database or file upload. Project URLs accept http/https only; files attach in WhatsApp. Copy fallback and edit action preserve answers.

## Responsive and accessibility
Mobile at 720px: stacked hero, one-column catalogue and products, two-column filter/choice flows, sticky bottom CTA respecting safe area. Semantic controls, readable contrast, visible keyboard focus, native dialog focus trap and Escape, reduced motion, visible scrollbar. Photographs have fixed geometry. All categories reuse the same visual and behavioral components.

## Commercial content — user supplied, 2026-10-26
The company offers direct China supplies for construction companies, sale with VAT (no rate specified), sourcing, quality checks, delivery, customs clearance and required certification. It acts as the customer's eyes and hands in China and has multi-year experience (no invented year/count). Audiences explicitly include tender participants, developers, contractors, procurement and intermediaries. Shared supply/process/FAQ components carry this message on home and category pages. Catalogue prices remain illustrative; total VAT-inclusive supply composition is confirmed in the quotation. No claim about tax deductions or guaranteed tender results.

## 2026-10-27: DAMATA / submission and catalogue redesign
User-selected brand is DAMATA. Catalogue uses equal filter cells (six desktop, three tablet, two mobile), uniform fully linked cards, visible bottom action, hover/focus/touch treatment and restrained image zoom. All card text wraps without horizontal overflow. Original application tokens stay canonical.

Shared wizard now posts multipart to server.cjs instead of opening a WhatsApp chat. storage.cjs owns durable SQLite + private files, authenticated admin.html/admin.js owns read/download. See UX-CONTRACT.md for explicit states, limits, idempotency and failure behavior. Contacts/files are now persisted as explicitly requested; older notes about in-memory-only storage/WhatsApp links are superseded. User confirmed ordinary WhatsApp only: actual WhatsApp automation remains unconfigured until a business-channel connector is supplied. No pretend delivered state. Generated admin key stays server-local, masked input, memory-only in browser. No publication.

## 2026-10-27: ordinary WhatsApp fallback and process sequence
User clarified that the recipient +77020818888 is an ordinary WhatsApp number. Keep multipart submission and durable database first, then display an optional, explicit wa.me action when no business connector is configured. The customer still presses Send in WhatsApp. Include the saved server ID, all answers/contacts, and filenames. Do not put private file URLs in the message or imply that files were sent through WhatsApp. Six shared process stages: project selection, samples for approval, contract, procurement/quality check, customs/certification, delivery. Header/footer subtitle: direct supply from China; footer promise: China → your project, from sample to delivery with DAMATA.

## 2026-10-27: catalogue CMS
Canonical editor: catalog-admin.js, admin.html shared shell, catalogue.cjs SQLite revision store and server.cjs authenticated endpoints. Native category select is intentional. Product arrays extend existing contract with [4] image path and [5] publication flag; defaults preserve seed data. Server validates prices, lengths, paths and publication prerequisites. Photos JPG/PNG max 5 MiB are public catalogue assets under /media; client projects remain private. No hard delete; hiding is reversible. Concurrent writes use revision and return 409; form retains data. Upload/save disable editing, navigation and logout during operation; dirty state blocks tab/logout and warns on page unload. Save then reload site exposes current DB catalogue. New category routes work without code edits.

GitHub publication explicitly authorised. main contains server/CMS code with data and secrets excluded. gh-pages contains static demonstration only, clearly labelled, no collection/persistence or real admin. Public preview source snapshot is build-preview.cjs; separate snapshot rebuild required after editing local catalogue. Sites registration was superseded by user GitHub request and remains unpublished.

## Authoritative business correction — 2026-10-27
Latest explicit user instruction supersedes earlier reseller/VAT wording. DAMATA does not buy or resell goods in its own name. Kazakhstan customer contracts directly with the verified Chinese supplier. DAMATA helps source supplier, approve samples and agree direct contract, then accompanies purchase/performance, quality inspection, logistics, border/customs clearance, required certification and delivery. Nationwide Kazakhstan, all regions. Do not claim DAMATA sells goods with VAT or purchases goods itself. Taxes and costs are transaction-specific; do not invent a legal/tax structure. Applies to hero, shared service/process/FAQ, category notes, metadata and WhatsApp request text.

## Approved full public redesign — 2026-10-27

The user requested a complete, high-end architectural redesign of the whole public website. This supersedes the earlier public charcoal/gold layout. Register: public marketing + shared request dialog; authenticated CMS behavior and its existing styles remain intact.

North star: a precise architectural studio that understands material sourcing at construction scale. A split opening pairs large typographic intent with a commissioned architectural image; cool chalk, petrol ink, fine rules and restrained motion. The dark direct-contract section explains the actual three-party relationship rather than suggesting DAMATA resells goods. Avoid generic metric counters, invented portfolio claims, decorative numbering outside the real process, forced cursor effects and scroll hijacking.

Canonical runtime owner: `design.css :root` for public UI, with documentation mirroring runtime (token ownership model B). `presentation.js` owns shared header/footer, home and category templates, service/process, FAQ and product cards. `app.js` owns catalogue loading/filtering and the unchanged request/validation/persistence workflow. `styles.css` remains the authenticated admin style owner; it is not loaded by the public marketing page.

| Role | Public runtime token | Value / consumer |
|---|---|---|
| Page | --paper | #f2f4f1; public background |
| Surface | --surface | #ffffff; products and fields |
| Ink | --ink | #192f31; text and primary buttons |
| Secondary | --muted | #596966; supporting text |
| Hairline | --line | #cdd4ce; filters, separators, fields |
| Action/focus | --accent | #36594f; hover, selected, focus |
| Subtle fill | --dark | #e7ece7; form notes / hover |
| Dark section | --deep | #182e30; supply and footer |
| Media base | --stone | #dce2da; reserved image background |
| Scrollbar | --thumb / --track / --thumb-hover | #7a8f87 / #e6ebe6 / #526e64 |
| Error | --error | #a7332f; textual form errors |
| Body/display | --sans | locally hosted Manrope, Arial fallbacks |
| Editorial emphasis | --serif | locally hosted Prata, Georgia fallbacks |
| Content | --max / --gutter | 1480px / clamp(22px,4.3vw,80px) |

Fonts are hosted under assets/fonts.css and font files, with OFL licenses included. New imagery: assets/architecture-damata.jpg, built-in image generation; exact prompt and provenance in assets/architecture-damata-source.json. It is explicitly labelled as a visualization, never a DAMATA case study.

Layout: desktop split hero; 3-column catalogue with a two-column fibre-cement card, matching image row heights; 2-column tablet; single-column mobile. Filters become a stable 2-column grid on phones. No content requires hover. A persistent mobile action respects safe areas. Native dialog keeps the established six-step file/contact workflow. Mobile navigation is a nonmodal disclosure: opening focuses its first link, Escape closes and restores trigger focus. Cross-document transitions are progressive enhancement, section reveals and image hover are restrained; reduced motion disables animation.

GitHub Pages remains a clearly labelled static demonstration: no real lead collection, uploads or admin. Server version remains local with SQLite/private uploads. All nine category routes share the public presentation system.

## Mobile readability and catalogue imagery — 2026-10-27

User rejected microscopic phone text and the abstract opening. The headline now explicitly says “Для строительных компаний. Напрямую из Китая.” Public typography uses runtime-owned `--text-meta:14px`, `--text-body:16px`, `--text-lead:18px` throughout shared templates; catalogue titles are 26px and card links 16px on phones. Card price and title stack instead of competing for width. Filters remain two columns with 14px labels and 54px minimum height. The demo notice is the sole 12px annotation; primary content never depends on it. Mobile inputs remain at least 16px. The authenticated CMS typography is unchanged.

The actual six-stage process uses large 28px mobile headings and 42px sequence numerals. Runtime colours: `--stage-select:#315e50`, `--stage-samples:#88551f`, `--stage-contract:#345f89`, `--stage-quality:#66558a`, `--stage-customs:#98533b`, `--stage-delivery:#28686a`. Sequence and titles communicate meaning independently of colour. All stage descriptions use 16px body type. Desktop stage headings are 27px.

Seven generated visual references are under `assets/generated-*.jpg`: bamboo panel lobby, shared entrance lobby, apartment door, electronic lock, staircase railings, ordinary panel radiator and open residential lift. Prompts/provenance: `assets/generated-catalogue-sources.json`. `app.js` owns the shared image mapping; explicit CMS `/media/` photos still take precedence. Images illustrate product types, not exact available models or DAMATA portfolio claims. Public application areas use the shared-lobby image.

The latest user instruction defers server hosting and public admin: continue publishing the static GitHub Pages demo, with real lead/file submission disabled. Do not describe this release as enabling online persistence.

## Public WhatsApp and shorter photo-led pages — 2026-10-27

Latest request enables real manual WhatsApp handoff on GitHub Pages, superseding the earlier non-sending demo form. Public validation and six-step selection remain canonical in app.js; `public-whatsapp.js` is injected by build-preview.cjs as the public transport variant. Final action is “Открыть WhatsApp”, navigates to the exact recipient 77020818888 with all answers, company/contact fields, project link, page and UTM source. The customer presses Send inside WhatsApp. No delivery, database save or automatic file transfer is claimed. The recovery screen retains the message in a readonly field, a reopen link and edit-contact action. No private files are collected on Pages; project files are attached inside WhatsApp. The localhost server transport remains unchanged.

Public pages prioritise imagery and short decisions: no introductory essay, repeated specification section or oversized duplicate footer invitation. Service description is one sentence plus direct-contract diagram and three short benefits. Each process stage has one concise sentence. FAQ has four collapsed answers. The project CTA uses the generated shared-lobby photograph rather than a wireframe. Brand, large readable type and all category/photo links are retained. Prices remain illustrative; images are labelled illustrations rather than exact products/portfolio.

## Catalogue scope — 2026-10-29
User removed intercom/security and staircase railing directions. Replace security with aluminium composite panels (АКП), route `/catalog/acp`, facade group. Eight public directions remain. Door/lock filter is now “Двери и замки”. ACP prices are unconfirmed: zero seed placeholders render “По запросу”, never a zero-price offer, in shared cards/detail/products. Retire old generated security/railings route entries when rebuilding. Existing saved lead records remain intact.

## Distinct product variants and detail sheets — 2026-10-29
All 24 variants now have distinct generated assets under `assets/variant-*.jpg`, and porcelain uses `assets/generated-tiles-hall.jpg` in its catalogue/hero. Provenance and prompts are in `assets/product-variant-sources.json`. Product array slot [4] remains the existing canonical image contract. Slot [2] is newline-separated description/specification text supported by the CMS; `product-details.js/productSpecs` renders its first line as introduction, then escaped label/value rows. Three rows on comparison cards, full specification in the detail sheet. Example geometry is explicitly marked “пример”; density, fire performance, heat output, pressure and similar unconfirmed performance are deferred to manufacturer documents/project rather than invented.

`product-details.js` owns the shared native product dialog. Photo/title/details controls open the selected product. Native modal focus/inert behavior, Escape, explicit close, restored trigger focus and body scroll lock reuse the existing request-dialog model. “Рассчитать этот вариант” closes the product sheet, passes its category and product into the existing wizard, and preserves the original visible trigger for later focus restoration. No nested open modals. On mobile, photo and specs stack; readable 16px full specification, at least 44px actions and internal dialog scrolling remain mandatory.
