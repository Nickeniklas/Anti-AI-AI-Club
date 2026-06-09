# Anti-AI, AI Club — Pre-launch landing page

A multipage static site. Landing page (`index.html`) lets visitors weigh in on what to cover and optionally leave an email. Articles page (`articles.html`) is a curated feed of links worth reading. AI Defaults page (`ai-defaults.html`) tracks AI features that ship enabled by default, with instructions for turning them off. AI Exposure page (`ai-exposure.html`) is an interactive treemap showing where AI shows up across occupational categories, sourced from the Anthropic Economic Index. No framework, no build step.

## File map

| File | Purpose |
|---|---|
| `index.html` | Landing page. Source of truth for copy that's already built. |
| `articles.html` | "Hand-picked articles" page. 10 items in 5 collapsible category groups (`<details>`/`<summary>`). Default closed. |
| `ai-defaults.html` | AI defaults tracker. One `<article class="entry">` per product. Coloured status tags (on/off/tiered/resets). All styles in `styles.css`. |
| `ai-exposure.html` | AI exposure heatmap. ECharts treemap with an observed/theoretical toggle and drill-down into occupations. Data is hardcoded inline (no runtime fetch), kept in sync by hand with `data/ai-exposure.json`. |
| `data/ai-exposure.json` | Canonical data and source citations for the exposure heatmap (`_meta.sources`, per-category observed/theoretical figures, occupation breakdowns). Edit here first, then mirror changes into the inline `DATA` object in `ai-exposure.html`. |
| `styles.css` | All styles for all pages. CSS custom properties for every token — no hardcoded hex. |
| `script.js` | Form validation and async submit handler. |
| `copy.md` | Landing page section copy and verified stats. Read before editing any text. |
| `CLAUDE.md` | Durable instructions for Claude Code. Positioning, rules, build order. |
| `colour-instructions.md` | Colour usage rules. Section backgrounds, accent rules, what to avoid. |

## Dev setup

No build step. Open `index.html`, `articles.html`, `ai-defaults.html`, or `ai-exposure.html` in a browser.

## Current build status

v0.1 — all sections built and live.

**index.html**

| Section | Status |
|---|---|
| Topnav | Built |
| 1. Hero | Built |
| 2. Value Proposition | Built |
| 3. Feed Preview (articles) | Built |
| 4. Defaults Preview | Built |
| 5. The Form | Built |
| 6. FAQ | Built |
| 7. Footer | Built |

**articles.html**

| Section | Status |
|---|---|
| Topnav | Built |
| Feed (10 items, 5 collapsible groups) | Built |
| Footer | Built |

**ai-defaults.html**

| Section | Status |
|---|---|
| Topnav | Built |
| Header + legend + pattern note | Built |
| Entries (5 products) | Built |
| Footer | Built |

**ai-exposure.html**

| Section | Status |
|---|---|
| Topnav | Built |
| Header + observed/theoretical toggle | Built |
| Legend (colour gradient + note) | Built |
| Chart (ECharts treemap, 22 categories, drill-down + breadcrumb) | Built |
| Caption + source notes | Built |
| Footer | Built |

## What still needs doing before launch

- **Re-verify all stats** in `copy.md` and `data/ai-exposure.json` — figures move fast; check sources before going live
- **Add an SRI hash** to the ECharts CDN `<script>` tag in `ai-exposure.html` (flagged with a comment to verify at jsDelivr before go-live)
- **Final responsiveness pass** — mobile widths, section spacing; check all four pages
- **Add social links to footer** — placeholder comment in all HTML files; platforms TBD
- **Privacy and Terms pages** — footer links point to `#` on all pages
- **Keep ai-defaults.html fresh** — add new entries as they surface; re-verify toggle paths
- **Keep ai-exposure.html fresh** — re-verify category and occupation figures periodically; update `data/ai-exposure.json` and the inline `DATA` copy together
