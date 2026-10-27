# DAMATA — UX contract

## Business and data authority
User authorised saving project requests, contacts and files in a local database and forwarding them automatically to +77020818888. User confirmed only ordinary WhatsApp / Business is available; no provider credentials exist. Server saves first; WhatsApp is an optional server-to-server connector, never a client redirect or fabricated delivery success. No deployment or public sharing is authorised.

| Capability | Canonical owner | Source of truth | Allowed variants | Verification |
|---|---|---|---|---|
| Form | app.js shared wizard and server payloadOf | UX-CONTRACT.md | create / retry same key | browser and server.test.cjs |
| File Upload | app.js filePicker/bindFiles; server.cjs validation | UX-CONTRACT.md | optional 0–5 files | browser and server.test.cjs |
| Scrollbar | styles.css global baseline | DESIGN.md | modal / textarea | narrow viewport |
| CRUD | storage.cjs and authenticated admin API | UX-CONTRACT.md | create / read / download | server.test.cjs |

## Submission and failure contract
6 steps shared by all categories. Files persist across steps in memory. Maximum 5 files, 5 MiB each, 20 MiB combined; PDF/JPEG/PNG/DOCX/XLSX/ZIP/DWG. Client validates size/count/extension; server also checks signatures. Files are never executed or unpacked and are stored outside static serving. This is not an antivirus scan. Review includes filenames. Form disables duplicate submission, exposes busy state, keeps answers/files on failure, and retries with the same idempotency key. Native dialog is not closable while the request is outstanding. 60-second timeout; uncertain completion retries idempotently. Successful response must explicitly confirm saved=true and an ID.

## Persistence and access
SQLite data/damata.sqlite; private files data/uploads. Local server binds only loopback. All admin reads/downloads require constant-time bearer-token validation. Default generated token data/admin-token.txt; admin UI keeps it in memory only. Public static routes allowlist assets; raw data/source/keys never served. POST uses same-origin checks and bounded body reading. No public deployment without separate auth, HTTPS, limits/backup and privacy review.

## WhatsApp transport
Optional WHATSAPP_WEBHOOK_URL and WHATSAPP_WEBHOOK_TOKEN come from server environment only. Payload contains complete message, recipient, request ID, answers and base64 attachments. Connector must authenticate and deduplicate by Idempotency-Key; ack {id,accepted:true} means accepted by connector, not delivered in WhatsApp. Missing connector leaves outbox queued in DB. Errors/timeouts/missing ack mark needs_review rather than retrying and risking duplicate notifications. Interrupted sends are also needs_review. Connecting ordinary WhatsApp is not supported; approved business integration is required. No automatic loss/deletion of failed leads.

## Ordinary WhatsApp fallback (latest user decision)
If connector is not configured, success screen offers optional wa.me link to 77020818888 only after server confirms database save. Customer sends manually in WhatsApp. The message carries saved server ID plus all answers, contacts and filenames. Files remain private in the database; this link does not transmit file bytes or expose authenticated downloads. Neither opening the link nor saving proves message delivery. This supersedes the earlier no-client-link presentation only; persistence, limits and server queue remain unchanged.

## Catalogue CMS
Owner catalog-admin.js / catalogue.cjs. Source of truth is versioned SQLite JSON, seed used on first run only. Admin bearer auth and same-origin mutation checks apply to read/save/upload. Product indices 4=image and 5=published, category active flag default true. Uploaded media is intentionally public; projects stay protected. Reject invalid prices, scripts/angle brackets, unsafe media paths, duplicate slugs and published categories without published products. Conflict409 preserves form. Archive uses publication flags instead of hard deletion. Busy locks inputs/tab switch/logout. Unsaved navigation guard and explicit discard confirmation. Native category select. All shared entry points remain in admin shell.

## Current business source of truth
Customer (Kazakhstan company) → direct goods contract → Chinese supplier. DAMATA → assistance/sourcing and full transaction/import accompaniment, not goods purchaser/reseller. All Kazakhstan regions. No blanket DAMATA VAT goods-sale claim. Latest user correction overrides earlier commercial descriptions.
