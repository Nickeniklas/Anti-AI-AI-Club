# Anti-AI, AI Club — Pre-launch landing page

A multipage static site. Landing page (`index.html`) lets visitors weigh in on what to cover and optionally leave an email; it runs a new dark-by-default "paper" design system with a light/dark toggle. It also embeds a compact, non-interactive preview of the exposure treemap (the eight most-exposed categories) that links through to the full page. Articles page (`articles.html`) is a curated feed of links worth reading. AI Defaults page (`ai-defaults.html`) tracks AI features that ship enabled by default, with instructions for turning them off. AI Exposure page (`ai-exposure.html`) is an interactive treemap showing where AI shows up across occupational categories, sourced from the Anthropic Economic Index. No framework, no build step.

`articles.html`, `ai-defaults.html`, and `ai-exposure.html` still run the older light-only design system and haven't been migrated to the paper system yet — see CLAUDE.md for the rollout plan.

## File map

| File | Purpose |
|---|---|
| `index.html` | Landing page. Source of truth for copy that's already built. Loads ECharts + `data/ai-exposure.js` for the front-page treemap preview. |
| `articles.html` | "Hand-picked articles" page. 7 items in 3 collapsible category groups (`<details>`/`<summary>`), default closed, plus a separate Repos section of small linked cards. |
| `ai-defaults.html` | AI defaults tracker. One `<article class="entry">` per product. Coloured status tags (on/off/tiered/resets). All styles in `styles.css`. |
| `ai-exposure.html` | AI exposure heatmap. ECharts treemap with an observed/theoretical toggle and drill-down into occupations. Reads its data from the shared `data/ai-exposure.js` (no runtime fetch). In theoretical view, occupation cells hide their `%` (the theoretical figure only exists at the category level); the observed value is still in the tooltip. |
| `data/ai-exposure.js` | Shared dataset (`window.AI_EXPOSURE_DATA`) loaded by both `ai-exposure.html` and the `index.html` preview. A literal copy of the numbers in `data/ai-exposure.json`. |
| `data/ai-exposure.json` | Canonical data and source citations for the exposure heatmap (`_meta.sources`, per-category observed/theoretical figures, occupation breakdowns). Edit here first, then mirror changes into `data/ai-exposure.js`. |
| `styles.css` | All styles for all pages. CSS custom properties for every token — no hardcoded hex. Two token systems live side by side: the new "paper" tokens (`body.redesign`, index.html, dark/light) and the legacy `--color-*` tokens (other three pages). |
| `script.js` | Theme toggle, scroll reveal, masthead counter animation, the form's validation + async submit handler, and the front-page exposure treemap preview (top 8 categories, observed only, no drill-down, repaints on theme toggle). |
| `copy.md` | Landing page section copy and verified stats. Read before editing any text. |
| `CLAUDE.md` | Durable instructions for Claude Code. Positioning, rules, build order. |
| `colour-instructions.md` | Colour usage rules. Section backgrounds, accent rules, what to avoid. |

## Dev setup

No build step. Open `index.html`, `articles.html`, `ai-defaults.html`, or `ai-exposure.html` in a browser.

## Current build status

v0.1 — all sections built and live.

**index.html** (paper design system, dark by default with a light/dark toggle)

| Section | Status |
|---|---|
| Topnav | Built — own `.nav`, includes the theme toggle |
| 1. Masthead | Built — headline + CTA on the left; right panel is a mini-hero for the current featured story (animated headline stat, label, blurb, link out — currently the Fable/Mythos recall, "~4 days"). Rotates as new stories earn the slot; the outgoing one is archived to articles.html "Previously featured" |
| 2. Exposure teaser | Built — compact preview of the exposure treemap (top 8 categories, observed only, no drill-down); links to the full heatmap page |
| 3. Doors (links to Articles + AI Defaults) | Built — 2 cards; no Heatmap door (the exposure teaser covers it) |
| 4. Form strip | Built — short lede under the heading explaining the form; accent left border + brief glow when landed on via the "Weigh in" anchor |
| 5. Footer | Built — includes an Instagram link |

Value Proposition and FAQ were dropped from `index.html` in the paper-system rebuild; both are slated for a future `about.html` (not yet built).

**articles.html**

| Section | Status |
|---|---|
| Topnav | Built |
| Previously featured (archived front-page story) | Built |
| Feed (7 items, 3 collapsible groups) | Built |
| Repos (6 small linked cards, separate from the feed) | Built |
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

- **Build `about.html`** with the FAQ (and consider the Value Prop pillars) cut from `index.html` during the paper-system rebuild — reskin for the leaner frontpage
- **Migrate `articles.html`, `ai-defaults.html`, `ai-exposure.html`** to the paper design system, one page at a time (see CLAUDE.md → Design tokens)
- **Re-verify all stats** in `copy.md` and `data/ai-exposure.json` — figures move fast; check sources before going live
- **Add an SRI hash** to the ECharts CDN `<script>` tags (now in both `ai-exposure.html` and `index.html` — flagged with a comment to verify at jsDelivr before go-live)
- **Final responsiveness pass** — mobile widths, section spacing; check all four pages
- **Add more social links to footer** — Instagram is live in all four footers; add others if/when more platforms are chosen
- **Privacy and Terms pages** — footer links point to `#` on all pages
- **Keep articles.html fresh** — add new items as they come in, remove stale ones
- **Keep ai-defaults.html fresh** — add new entries as they surface; re-verify toggle paths
- **Keep ai-exposure.html fresh** — re-verify category and occupation figures periodically; update `data/ai-exposure.json` and `data/ai-exposure.js` together (the front-page preview reads the same shared file, so both pages update at once)
- **Remove dead legacy CSS in `styles.css`** — pre-redesign single-page rules (`#hero`, `#value-prop`, `#about`, `#faq`, `#topic-form`, `.form-inner`, `.checkbox-list`, etc.) that no current HTML references — see CLAUDE.md
