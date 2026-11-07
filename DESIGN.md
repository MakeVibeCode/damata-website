# DAMATA — design context

## Public release and complete catalogue photo series — 2026-11-07

User explicitly requested all updates online and a working link. Reuse the existing GitHub Pages deployment at https://makevibecode.github.io/damata-website/ from MakeVibeCode/damata-website gh-pages. This supersedes earlier local-only notes. Existing private Sites placeholder remains unused.

Eight category photographs and 24 distinct product-variant photographs now share the approved terracotta/travertine/bronze light. Runtime category map in app.js uses terra-category-*.jpg; product image slot [4] in seed/live catalogue uses terra-variant-*.jpg. Custom /media images are retained. Existing assets are preserved. Full selected prompts and provenance: assets/terracotta-catalogue-sources.json and assets/terracotta-variant-sources.json. All selected images were inspected together; informational-sheet generations were rejected and regenerated as clean photographs. All 32 final JPEG hashes are distinct, 8.98 MB combined.

Online transport is the established static WhatsApp variant: full validated request opens WhatsApp to +77020818888; the customer presses Send. Private database, uploads, admin keys and source provenance are excluded from the static artifact. scripts/build-preview.cjs packages the existing CMS catalogue; scripts/publish-pages.cjs pushes a descendant commit to the existing gh-pages branch and writes release.json for verification. Source changes are committed separately to main.

Verification: syntax checks and existing catalogue, WhatsApp and server suites passed; 32 distinct JPEGs checked. Browser on the prefixed public preview: category filtering, correct new image paths, product detail to preselected quote, inline required-field error, no mobile horizontal overflow, no console errors. Approved hero and warm design remain.


## Current identity — terracotta material world, 2026-11-07

User enthusiastically approved assets/material-studio-hero.jpg and explicitly requested its terracotta character throughout the entire site. Preserve that hero image and composition. This supersedes the neutral warm-monochrome reference palette below.

North star: sculptural travertine, clay plaster, warm bronze and dark walnut, all lit by low sunlight. Shared homepage/category/request surfaces now use sand, rich terracotta and tobacco brown. Company section is clay with pale text and a new matching architectural scene; supply steps are tobacco brown with bronze selections; CTA layers the approved photo beneath a terracotta tint; catalogue/cards, FAQ and dialogs use sand/ivory. Product photos remain recognisable, with only a restrained CSS warmth adjustment on public category imagery. Existing transitions, interactions, request persistence and CMS contracts remain.

Canonical design.css tokens: paper #f3e7d8, surface #fbf3e8, ink #352418, muted #705640, line #d7bfa4, accent #9c4e2d, dark #dfc5a6, deep #302016, stone #dfc6a7, soft #e9d5b9, accent-light #e6bb86, accent-hover #76391f, dark-surface #4b2d1e, muted-inverse #d5bba0, clay #75422d, clay-deep #56311f, bronze #b88750. brand.css remains the public adapter. SVG mark background follows clay. Header/hero remain photographic with white type and CTA.

New project asset: assets/terracotta-material-space.jpg, 313 KB, built-in image_gen; prompt/provenance in assets/terracotta-material-space-source.json. It is an architectural illustration, not a real completed company project. It appears in the company collage and the final illustrative delivery stage. Original approved hero is unchanged.

Verification: tested representative colour contrast and darkened secondary text on sand. Browser: new source image and clay fill, mobile 390px no overflow; delivery stage selects exactly one control and matching new image; quote opens with 9 choices and a sand dialog, Escape closes. Syntax and existing catalogue/WhatsApp/server suites pass after static preview rebuild.


## Latest reference — Online Stores composition, 2026-11-07

User explicitly requested the appearance of https://www.squarespace.com/online-stores and reiterated close visual matching. This supersedes the black moving-gallery opening and graphite/cobalt palette. Reference inspected in a browser: full-bleed warm product still-life, transparent white navigation, centered white heading and rectangular CTA, floating rounded dark subnav, followed by a large framed product showcase. Implement that composition for DAMATA while retaining its content and request behavior.

New home: full-viewport warm material still-life with transparent header → sticky dark pill navigation → framed three-material showcase over the photographic setting → white editorial introduction → paired catalogue imagery → sourcing/services → interactive supply process → quotation/FAQ/footer. Homepage body class store-home controls the overlay header and supports both root and prefixed static paths. Category pages retain a solid header.

Canonical palette in design.css: paper #f8f7f3, surface #fff, ink #24221e, muted #756f65, line #d8d3ca, accent #312d27, dark #e9e3d9, deep #171614, stone #e3ddd2; soft #eeebe4, accent-light #ded5c7, accent-hover #51483b, dark-surface #302c25, muted-inverse #bdb6aa. All typography remains Manrope. Large image cards use two columns; shapes follow the reference with rectangular CTAs and one pill navigation.

New asset: assets/material-studio-hero.jpg (212 KB), generated with built-in image_gen for this project and optimised as JPEG. It depicts travertine, metal, porcelain and fluted panels; it is illustrative, not an exact product photograph or completed project. Full prompt/provenance in assets/material-studio-hero-source.json. Own imagery/copy/implementation, no external Squarespace assets reused. Hero settles subtly at load; existing reveal, stage and reduced-motion behavior remains. Removed former moving gallery from rendered home; its pause controls are absent.

Verified: desktop composition against reference; phone 390px without overflow; background loads; header absolute on home; subnav sticky; quote opens/Escape closes; subnav catalogue link works; facade filter returns two cards. All existing test suites pass after static preview rebuild. No publication.


## Current refinement — palette and motion, 2026-11-07

User approved the moving first screen and requested a cohesive palette and animation across the remaining site. Preserve its composition. This update supersedes the separate lavender/mineral/cobalt section fills and serif invitation below.

Canonical design.css tokens: paper #f5f6f9, surface #fff, ink #17191f, muted #626a79, line #dce0e8, accent #3c51f5, dark #e8ecff, deep #101112, stone #e0e3eb; new supporting roles soft #edf0f6, accent-light #c5ccff, accent-hover #2538c8, dark-surface #1b1e27, muted-inverse #aeb4c1, line-inverse #ffffff26. brand.css aliases the canonical roles. Main palette is graphite/cool white/cobalt throughout; manifesto and sourcing use the same soft surface, journey and quote share graphite with a dividing rule. All public display type uses Manrope. Blue headline emphasis, small eyebrow rule and image treatment repeat across routes.

Motion uses the existing shared observer, after bindExperience prepares reveal targets. Content enters once over 650ms with small, bounded stagger; filtered/product cards stagger by row index. Sourcing/detail photographs adjust object position by at most 12px as they pass through the viewport. Stage image/copy/route animate on selection; FAQ answer and icon respond on opening; cards, sourcing collage and footer share restrained hover reactions. No new continuous decorative loops; the hero gallery retains its pause/offscreen/visibility behavior. Reduced-motion disables reveal movement, image drift and interaction animations. Existing forms, CMS and server contracts are unchanged.

Browser verification: computed section fills share declared tokens; stage 4 selects exactly one button, updates matching copy and plays stage-enter/route-draw; FAQ opens with answer animation; quote uses Manrope. Mobile quote opens/closes; no overflow or pending in-viewport reveals at 390/320px. Corrected hidden mobile line-break whitespace in FAQ title.


## Current direction — Squarespace reference, 2026-11-07

The latest user request supersedes the previous navy architectural hero. Reference reviewed directly: https://www.squarespace.com/go/create-a-website . Adopt its centered oversized typography, black opening and moving visual gallery as composition cues; all implementation, company copy and assets are DAMATA-owned or retained project assets. Company name remains DAMATA TRADING CO., LTD. No platform migration or publication.

North star: a bold materials company making China sourcing tangible. Signature: a continuous, staggered material gallery feeding into an interactive six-stage supply explanation. Homepage sequence: centered black hero + moving material images → lavender statement → filterable catalogue → pale mineral sourcing collage → dark interactive process → cobalt quote invitation → FAQ → oversized DAMATA footer. No fabricated portfolio, testimonials, volume statistics, shipment tracking or delivery guarantees.

Canonical runtime tokens in design.css :root: paper #f6f6f2, surface #fff, ink #17181a, muted #626762, line #d3d4cd, accent #3c51f5, dark #e8eaff, deep #101112, stone #dedfd8. brand.css is the public adapter: electric/brand-red #3c51f5 (legacy semantic name retained for compatibility), brand-red-hover #2538c8, brand-blue #101112, brand-blue-light #30344e, lilac #dce0ff, radius 6px. Typography: Manrope for display/body; Prata only in final invitation emphasis. Original SVG mark retains geometry with cobalt background.

Owners: presentation.js shared templates, supplyStages/stagePanel and bindExperience; app.js bindPresentation invokes bindExperience after rendering. Existing app.js request state, product-details.js, CMS, server/storage remain canonical. Gallery CSS runs at 65s desktop/75s mobile and pauses on hover, focus, explicit pause, offscreen or hidden document. The pause is local to this page; no storage. Reduced-motion disables it; originals remain horizontally scrollable, decorative duplicate group is hidden. Keyboard focus stops the transform and exposes horizontal scrolling. Interactive stage controls are native pressed buttons; one selected stage updates an illustrated panel and live status. This explains the service process; it does not simulate real shipment data.

Responsive: desktop catalogue 4 columns, 3 below 1150px, 2 below 900px; phone has two cards. Stage control list becomes a 2-column button grid above its panel. Mobile collage stacks, quote action stays accessible. Admin UI remains separately styled.

Verification: node syntax checks; all three existing tests passed after rebuilding the static preview. Browser: pause sets animation state to paused; stage 2 and 6 render matching copy/image; only one stage retains pressed state; no missing loaded images; mobile navigation closes after selection; door/lock filter returns two cards; product detail transfers chosen variant to quote step 2; validation error stays inline; Escape closes dialog. No horizontal overflow on 390px and 320px screens. Static Python skill audit remains unavailable because local Python resolves only to a Windows Store alias.


## Current public presentation — 2026-11-07

User requested a complete, serious and clear company presentation that encourages enquiries. Current identity: DAMATA TRADING CO., LTD. This section supersedes historical public appearance notes below. Audience: Kazakhstan developers, contractors and procurement teams sourcing construction materials from China. Primary action: request a project-specific quote through the existing wizard.

Direction: full-width architectural image with an integrated navy gradient, large Manrope typography, white catalogue, pale blue-grey partner section and a dark final quote section. The signature is the uninterrupted architectural hero and small CN → KZ route stamp. Existing generated images remain labelled as illustrations; no invented projects, testimonials, scale statistics or delivery promises.

Runtime ownership: design.css :root retains semantic tokens (paper #f5f6f8, surface #fff, ink #152b40, muted #556575, line #d9e0e7, accent #b6382e, deep #102638). brand.css is the single public appearance adapter and owns the four brand colours, 4px base radius and brand shadow. presentation.js owns all shared public templates; app.js owns existing catalogue/request behavior. No new dependencies. Admin and private data contracts stay with existing owners.

Page progression: architectural hero → four concrete supply benefits → filterable eight-direction catalogue → supplier accompaniment → six ordered stages → quotation/contact → FAQ → company footer. Desktop catalogue has four columns (three below 1150px, two below 900px); compact mobile cards have two columns. Mobile partner image follows its explanation. All category routes use the same service, process, quote and footer components. Quote transport, CMS and pricing remain as before; all illustrative prices carry qualification.

Verification: JavaScript syntax checks; product catalogue, public WhatsApp and server test suites passed. Browser checks: desktop presentation, mobile menu, catalogue filtering, validation error, product detail → preselected quote, responsive widths 390 and 320 without horizontal overflow.


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

## DAMATA Export House — approved redesign, 2026-10-30
User requested a new colour direction, European material-company inspiration, a new logo and Export House descriptor. Creative reference reviewed: https://www.cosentino.com/ — architectural imagery, concise catalogue taxonomy and clear professional navigation. Original implementation; no copied CSS, logos or third-party imagery. Brand is DAMATA Export House / экспортный дом. Slogan: “Из Китая. Для вашей стройки.” Geographic descriptor “Китай → Казахстан” explains the sourcing route; do not infer Chinese incorporation or ownership.

Runtime ownership remains model B: `design.css :root` owns shared public semantic colours; `brand.css` is the public brand/layout adapter loaded after it. Core tokens now --paper #f5f6f8, --surface #fff, --ink #152b40, --muted #556575, --line #d9e0e7, --accent #b6382e, --dark #e9eef4, --deep #102638, --stone #dde4eb. Brand-specific tokens in brand.css: --brand-red #b6382e, --brand-red-hover #922a22, --brand-blue #102638, --brand-blue-light #26485f, --radius 12px, --brand-shadow 0 12px 35px #1026380b. Scrollbars: --thumb #8092a4, --track #e9eef4, --thumb-hover #526a80. Public headings now use Manrope emphasis; existing Prata files remain available but the current brand adapter uses the sans face for headline emphasis. Existing readable body/metadata scale is retained.

Original vector mark `assets/damata-export-mark.svg` combines a house roof, D-like frame and outward arrow, set on a cinnabar seal-shaped square. Header/footer use the same image + live DAMATA / EXPORT HOUSE wordmark, and the favicon uses the same SVG. Descriptor is 9–10px at logo size as brand artwork; ordinary body text remains 16px, mobile product specs 15–16px. No invented Chinese characters or national affiliation claims.

Layout now uses a navy split hero framed by light margins, white product cards in a regular three-column desktop/two-column tablet/single-column phone grid, restrained 12px corners, red actions and navy selected filters. Mobile header keeps the full brand and a 48px menu button; the repeated header CTA is hidden because a persistent bottom quote action remains. All eight routes, 24 independent variant images, product sheets, native dialog focus, quote selection and public WhatsApp transport are retained. Reduced motion disables hover lift and inherited animations. The admin style owner styles.css remains unchanged.


## Header company name — 2026-11-07
User supplied GUANGDONG DAMATA TRADING CO., LTD for the public header. Shared presentation.js header uses two live text lines (GUANGDONG DAMATA / TRADING CO., LTD) and the full accessible home-link name. brand.css sizes this header-only wordmark for desktop and mobile; the header quote action hides below 1150px to preserve navigation space.


## Header company name correction — 2026-11-07
Latest user instruction replaces the previous header name with DAMATA TRADING CO., LTD. Public header wordmark reads DAMATA / TRADING CO., LTD, with matching accessible home-link name.
