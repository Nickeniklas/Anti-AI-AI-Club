# CLAUDE.md — Anti-AI, AI Club

Project context for building the day-0 pre-launch landing page. Read this before generating or editing anything.

> Section copy and the verified stats live in `copy.md`. Read `copy.md` before writing or editing any section. `index.html` is the source of truth for copy that's already built; `copy.md` holds the drafts and anything not yet built; this file holds the durable instructions. Colour usage rules (section backgrounds, accent rules, what to avoid) are in `colour-instructions.md` — read it before touching any colour or background.

> `index.html` runs the new "paper" design system (dark-default with a light toggle), scoped under `body.redesign` — see Design tokens below. `articles.html`, `ai-defaults.html`, and `ai-exposure.html` still run the legacy light-only `--color-*` system and have not been migrated yet. Don't mix the two: new work on index.html uses paper tokens, new work on the other three pages uses legacy tokens until they're migrated.

## What this is

A multipage pre-launch landing site for **Anti-AI, AI Club** — a small club for the *actual data* on AI. The site's one job: let an interested visitor weigh in on what we should cover, and optionally leave an email if they want to hear from us. No newsletter is committed to yet. The point right now is to test whether the idea lands and learn what people care about.

## Positioning (don't drift from this)

- **Not** "negative AI news for everyone." It's *the place for the actual numbers* — data on AI's real scale, its effect on labour, and how it's tangled up with power/politics.
- Tagline feel: **"Not anti-AI. Anti-bullshit about AI."**
- Skepticism is earned from figures, not vibes. Critical, calm, NOT hateful. The premise: AI is part of the world now, that's exactly why scrutiny matters.
- Scope: general, with a lean toward **labour** and **power/politics** (AI's ties to autocracy, surveillance).

## The one feeling to leave a visitor with

> "This is the calm, grounded take I needed."

This governs every design and copy choice. No urgency tricks. No countdown timers. No doom imagery. No rage-bait. Calm, minimal, confident, data-first.

## Tech stack

- **Static HTML / CSS / JS only.** No framework, no build step, no backend.
- Multipage: `index.html` (landing page) + `articles.html` (curated feed) + `ai-defaults.html` (AI defaults tracker) + `ai-exposure.html` (AI exposure heatmap). Mobile-first, responsive.
- Topnav, brand left, links right (Articles, AI Defaults, Heatmap, yellow "Weigh in" pill CTA), sticky on all four pages. `articles.html`, `ai-defaults.html`, and `ai-exposure.html` share the legacy `#site-nav` markup. `index.html` has its own redesigned `.nav` (paper system) with the same links plus a light/dark theme toggle — bring the other three pages onto this `.nav` when they migrate to the paper system.
- `ai-exposure.html` renders an ECharts treemap (loaded from a pinned jsDelivr CDN URL) over data hardcoded in `data/ai-exposure.json` — no runtime fetch dependency. The JSON file is the canonical source of numbers and citations; the page's inline `DATA` object is a literal copy of it and must be kept in sync by hand whenever the JSON changes.
- Form posts to Formspree. Endpoint is live: `https://formspree.io/f/mdavorwl`. Only Niklas manages the Formspree account; Claude Code only updates the `action` attribute if the URL ever changes.
- The form stores topic checkboxes, optional worry text, and optional email. Email is NOT required and must never block submission.
- Keep it lightweight. No heavy dependencies.

## Design tokens

### Paper system (index.html — the new standard)

Fonts: **Dongle** (headlines/display, `--fd`), **Poppins** (body/UI, `--fb`), **Spline Sans Mono** (labels, tags, mono UI text, `--fm`) — all loaded from Google Fonts.

`index.html` is dark by default and ships a light/dark toggle. Tokens are CSS custom properties on `:root` (dark values) with an `html.theme-light` block overriding them for light mode. The active theme is persisted in `localStorage` (key `theme`) and applied via an inline `<head>` script that runs before paint, so there's no flash of the wrong theme.

| Variable | Dark (default) | Light (`html.theme-light`) | Use |
|---|---|---|---|
| `--accent` | `#f4c430` | same | primary CTA / active chip |
| `--accent-dim` | `#f0b800` | same | accent hover |
| `--accent-ink` | `#1a1916` | same | text on `--accent` fills |
| `--bg` | `#131210` | `#f4f1ea` | page background |
| `--bg2` | `#1a1917` | `#edeae1` | secondary background (e.g. door hover) |
| `--surface` | `#1e1d1a` | `#faf9f5` | raised panels (form strip, cards) |
| `--panel-bg` | `#0c0b09` | `#1a1916` | the dark accent panel (masthead figure, footer) — stays dark in both themes |
| `--panel-fg` | `#f4f1ea` | same | text on `--panel-bg` |
| `--panel-dim` | `rgba(244,241,234,.6)` | same | secondary text on `--panel-bg` |
| `--panel-rule` | `rgba(244,241,234,.12)` | same | borders on `--panel-bg` |
| `--ink` | `#f4f1ea` | `#1a1916` | primary text |
| `--ink2` | `#9c9890` | `#504e48` | secondary text |
| `--ink3` | `#6a6760` | `#8a877f` | tertiary / placeholder text |
| `--rule` / `--rule2` | low/high-opacity white | low/high-opacity black | hairlines, borders |

`--px` / `--py` set section horizontal/vertical padding (`52px` / `60px`, reduced in the `@media (max-width: 900px)` block).

**Scoping:** every paper-system rule in `styles.css` is prefixed `body.redesign` (only `index.html`'s `<body>` carries that class), so it can't leak onto the other three pages. This is a temporary rollout mechanism — when a page is migrated to the paper system, give it `<body class="redesign">`, rebuild its markup against the new atoms (`.btn`, `.tag`, `.mono`, `.eyebrow`, `.nav`/`.theme-toggle`, etc.), and once all four pages are migrated the `body.redesign` prefix can be dropped and the legacy tokens below retired.

**Watch out for legacy ID/tag selectors:** the old stylesheet has some bare-tag and ID selectors (e.g. `footer { background: var(--color-ink) }`) from before the redesign. An ID or bare-tag selector can outrank a two-class `body.redesign .foo` rule regardless of source order — if a paper-system element keeps an old ID/tag for JS hooks or anchors, check that no legacy selector targeting it still sets layout, `background`, or `color`. (One real instance of this — a leftover `#form { padding: 5rem 1.25rem }` silently overriding `.form-strip`'s padding — was found and removed.)

### Legacy system (articles.html, ai-defaults.html, ai-exposure.html — pending migration)

Fonts: **Dongle** (headlines/display), **Poppins** (body/UI) — loaded from Google Fonts.

Palette (defined as CSS custom properties in `styles.css`):
| Variable | Hex | Use |
|---|---|---|
| `--color-green` | `#caef8c` | accent |
| `--color-yellow-light` | `#f5ec89` | accent |
| `--color-yellow` | `#f9d040` | primary CTA |
| `--color-coral` | `#ff9063` | hover / secondary |
| `--color-rose` | `#da6b7d` | accent |
| `--color-ink` | `#1a1a1a` | text |
| `--color-bg` | `#ffffff` | page background |

Grey utility variables (also in `styles.css` — use these, never hardcode hex):
| Variable | Hex | Use |
|---|---|---|
| `--color-text-muted` | `#555555` | body text on light backgrounds |
| `--color-text-faint` | `#888888` | microcopy, secondary labels |
| `--color-text-ghost` | `#cccccc` | decorative elements (e.g. dash prefixes) |
| `--color-text-dark-body` | `#aaaaaa` | body text on dark (ink) backgrounds |

Full colour usage rules for the legacy system — section backgrounds, accent rules, what to avoid — are in `colour-instructions.md`. (Paper-system colour rules for index.html live alongside it there too.)

## Current build status

All sections built. The site is at v0.1.

**index.html** — rebuilt on the paper system (`body.redesign`), dark by default with a light/dark toggle

| Section | Status |
|---|---|
| Topnav | **Built** — own `.nav` (not the shared `#site-nav`), sticky, includes the theme toggle |
| 1. Masthead | **Built** — split layout: headline + CTA on the left, animated `$1.82T` stat panel (always-dark `--panel-bg`) on the right |
| 2. Featured (Fable 5) | **Built** — kept from the previous build, now with 3 stat cards |
| 3. Doors | **Built** — 3 cards linking to articles.html, ai-defaults.html, ai-exposure.html (replaces the old separate Feed Preview and Defaults Preview sections) |
| 4. Form strip | **Built** — compact chip-based topic picker + optional worry/email fields, single row on desktop. Heading has a short lede underneath (`.form-head`/`.form-lede`) explaining the form. Section has an accent left border and a brief `:target` glow (`redesign-form-arrive`) when landed on via a `#form` anchor (the nav/masthead "Weigh in" / "Tell us what to cover" CTAs); page also gets `scroll-behavior: smooth` and the section a `scroll-margin-top` so the jump clears the sticky nav |
| 5. Footer | **Built** — minimal, dark |

Value Proposition and FAQ were dropped from `index.html` in this rebuild (it's leaner and more content-focused now). Both are slated for a future `about.html`, not yet built — see "What still needs doing before launch".

**articles.html**

| Section | Status |
|---|---|
| Topnav | **Built** — shared |
| Feed | **Built** — 7 items grouped into 3 collapsible `<details>` sections (Articles & Opinion, Research & Policy, From the Web). Each item: type tag, title, source, editorial note. Groups default closed. |
| Repos | **Built** — small cards, separate from the feed (`#repos`, `.repo-card`), currently 6 entries. Each card is a non-link container with `.repo-pill` link buttons (e.g. "Repo", "YouTube") for its destination(s) — needed because the odysseus card links to both a repo and a video |
| Footer | **Built** |

**ai-defaults.html**

| Section | Status |
|---|---|
| Topnav | **Built** — shared |
| Header | **Built** — page h1, description, "last checked" datestamp |
| Legend | **Built** — 4 tag types: On by default (coral), Off by default (green), Opt-out is tiered (yellow), Can re-enable after updates (rose) |
| Pattern note | **Built** — callout explaining the two recurring patterns (update resets, tiered opt-out) |
| Entries | **Built** — 5 entries: Windows 11, GitHub Copilot, Atlassian, Microsoft SharePoint, Google Chrome & Search |
| Footer | **Built** |

**ai-exposure.html**

| Section | Status |
|---|---|
| Topnav | **Built** — shared |
| Header | **Built** — page h1, description |
| Toggle | **Built** — switches the treemap between observed and theoretical exposure. Buttons are always active (never disabled). Clicking while drilled into a category resets the view to root and applies the new metric — this is intentional UX, not a bug. Do not re-add disable/greyed-out logic: ECharts breadcrumb clicks don't emit events that can reliably re-enable buttons, so the only correct state is always-on. |
| Legend | **Built** — colour scale from coral (potential largely untapped) to green (AI already highly active), keyed to the observed/theoretical ratio |
| Chart | **Built** — Apache ECharts treemap with drill-down (`nodeClick: 'zoomToNode'`) and breadcrumb navigation; data comes from `data/ai-exposure.json`, duplicated inline as the `DATA` object so the page has no runtime fetch dependency |
| Caption / source notes | **Built** — explains what the colour does and doesn't mean, the separate 57/43 augmentation/automation aggregate, and links back to `_meta.sources` for provenance |
| Footer | **Built** |

## What still needs doing before launch

- **Build `about.html`**, with the FAQ (and consider the Value Prop pillars) that were cut from `index.html` during the paper-system rebuild — reskin them for the leaner frontpage rather than porting as-is
- **Migrate `articles.html`, `ai-defaults.html`, `ai-exposure.html` to the paper system** — one page at a time, following the pattern established on `index.html` (see Design tokens). Until then they keep the legacy `--color-*` tokens and `#site-nav`
- **Re-verify all stats** in `copy.md` and `data/ai-exposure.json` before going live — figures move fast
- **Add an SRI hash** to the ECharts CDN `<script>` tag in `ai-exposure.html` (currently flagged with a comment to verify at jsDelivr before go-live)
- **Final responsiveness pass** — mobile widths, section spacing; check all four pages
- **Add social links to footer** — placeholder comment in all HTML files; Niklas decides which platforms
- **Privacy and Terms pages** — footer links point to `#` on all pages
- **Keep articles.html fresh** — add new items as they come in, remove stale ones
- **Keep ai-defaults.html fresh** — add new entries as they surface; re-verify toggle paths and dates per entry
- **Keep ai-exposure.html fresh** — re-verify category and occupation figures against the source datasets periodically; update `data/ai-exposure.json` and the inline `DATA` copy together
- **Remove dead legacy CSS in `styles.css`** — leftover rules from the pre-redesign single-page layout (`#hero`, `#value-prop`, `#about`, `#faq`, `#topic-form`, `.form-inner`, `.form-heading`, `.form-subtext`, `.form-fieldset`, `.checkbox-list`, `.form-field`, `.form-label`, `.form-helper`, `.btn-form-submit`, `.form-success-link`, the old `@keyframes fadeIn`, etc.) are no longer referenced by any HTML and are safe to delete. Don't treat them as a starting point for `about.html` — that page reskins the cut FAQ/Value Prop content against the paper system from scratch (see above)

## Contact / email

`antibsai@gmail.com` — the real contact address. Used in the form success confirmation, and in footer "Submit an article" and "Contact" links.

## Design direction

- Calm and minimal. Lots of whitespace. Palette and fonts are already locked in Design tokens above — use those, don't invent new ones.
- No stock "glowing AI brain" imagery. No neon. If anything visual, lean editorial/data (clean type, maybe one real chart later).
- Scannable: clear section breaks, short paragraphs.

## Sections (page order)

**index.html** (paper system, `body.redesign`)
1. Masthead — headline + CTA, plus the animated `$1.82T` stat panel
1b. Featured — front-page story block (first news item to earn a full slot; sits between Masthead and Doors)
2. Doors — 3 cards linking to articles.html, ai-defaults.html, ai-exposure.html
3. Form strip — compact topic chips + optional worry/email fields (main conversion block)
4. Footer

Value Proposition and FAQ are no longer on `index.html`; both are slated for a future `about.html` (not yet built).

**articles.html** — page title "Hand-picked articles"
1. Feed — 7 items in 3 collapsible groups (default closed, `<details>`/`<summary>`). Groups: Articles & Opinion, Research & Policy, From the Web.
2. Repos — small cards (`#repos`, `.repo-card`) with `.repo-pill` link buttons, separate from the feed above
3. Footer

**ai-defaults.html** — page title "AI defaults — what's on, and how to turn it off"
1. Header (h1, description, last-checked datestamp)
2. Legend (4 tag types)
3. Pattern note (callout about recurring patterns)
4. Entries (one `<article class="entry">` per product)
5. Footer

**ai-exposure.html** — page title "Where AI actually lands at work."
1. Header (h1, intro copy, metric toggle between "Observed exposure" and "Theoretical capability", metric description)
2. Legend (colour gradient track + labels + legend note explaining the observed/theoretical ratio)
3. Chart (`#exposure-chart` — ECharts treemap of 22 occupational categories with drill-down to individual occupations and breadcrumb navigation)
4. Caption / source notes (what colour does and doesn't mean, the separate 57/43 augmentation/automation aggregate, links to provenance)
5. Footer

All styles live in `styles.css`; none of the four pages has a `<style>` block with substantial CSS. `index.html` carries one small inline `<script>` in `<head>` that applies the saved theme (`localStorage`, key `theme`) before paint to avoid a flash of the wrong theme — keep this minimal and synchronous. `ai-exposure.html` carries a separate inline `<script>` block that configures the ECharts treemap and holds a `DATA` object that is a literal, hand-kept-in-sync copy of `data/ai-exposure.json` (so the page renders with no runtime fetch).

(Copy for index.html sections is in `copy.md`. Sections cut from the landing page — About/Story, Problem/Solution, What You'll Get, Social Proof, Pricing, Value Proposition, FAQ — are still in `copy.md` marked REMOVED, kept for reference for the future `about.html`. Articles feed copy, AI defaults copy, and AI exposure heatmap copy live in their respective HTML files directly; the heatmap's underlying numbers and source citations live in `data/ai-exposure.json`.)

## Standing rules

- Never fabricate testimonials, user counts, or stats.
- Every number on the live site needs a real, current source. Re-verify before launch. (Figures and sources are in `copy.md`.)
- Same-axis comparisons only: valuation vs valuation, annual spend vs annual spend. Never a stock vs a flow.
- Email is always optional and always the last field. Never make it required, never gate submission on it, never reintroduce a "waitlist" framing that implies a committed newsletter.
- Keep the calm/grounded voice everywhere. No hype, no doom, no urgency manipulation. Let the figures carry it.
- Avoid "nearly quadrupled" and similar reflexive intensifiers unless the exact figure is stated right next to it with a source. The number should do the work, not the adjective.
- Avoid em dashes in body copy. Use a comma, a period, or a new sentence instead.
- Don't open section descriptions with "A running list of..." — explain the phenomenon in plain sentences instead. Body copy should tell the visitor what's actually going on, not just name it cleverly.
