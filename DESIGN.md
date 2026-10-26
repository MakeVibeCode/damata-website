# DOMATA — design context

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
