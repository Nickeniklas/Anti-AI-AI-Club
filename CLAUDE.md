# CLAUDE.md — Anti-AI, AI Club

Project context for building the day-0 pre-launch landing page. Read this before generating or editing anything.

> Section copy and the verified stats live in `copy.md`. Read `copy.md` before writing or editing any section. `index.html` is the source of truth for copy that's already built; `copy.md` holds the drafts and anything not yet built; this file holds the durable instructions. Colour usage rules (section backgrounds, accent rules, what to avoid) are in `colour-instructions.md` — read it before touching any colour or background.

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
- Shared topnav (`#site-nav`) on all four pages — sticky, brand left, links right. Links: Articles, AI Defaults, Heatmap, yellow "Weigh in" pill CTA.
- `ai-exposure.html` renders an ECharts treemap (loaded from a pinned jsDelivr CDN URL) over data hardcoded in `data/ai-exposure.json` — no runtime fetch dependency. The JSON file is the canonical source of numbers and citations; the page's inline `DATA` object is a literal copy of it and must be kept in sync by hand whenever the JSON changes.
- Form posts to Formspree. Endpoint is live: `https://formspree.io/f/mdavorwl`. Only Niklas manages the Formspree account; Claude Code only updates the `action` attribute if the URL ever changes.
- The form stores topic checkboxes, optional worry text, and optional email. Email is NOT required and must never block submission.
- Keep it lightweight. No heavy dependencies.

## Design tokens

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

Full colour usage rules — section backgrounds, accent rules, what to avoid — are in `colour-instructions.md`.

## Current build status

All sections built. The site is at v0.1.

**index.html**

| Section | Status |
|---|---|
| Topnav | **Built** — sticky, shared across all four pages |
| 1. Hero | **Built** |
| 2. Value Proposition | **Built** |
| 3. Feed Preview | **Built** — 3 teasers + "Read all in the feed" CTA to articles.html |
| 4. Defaults Preview | **Built** — 3 entries (GitHub Copilot, Windows 11, Atlassian) + "See the full list" CTA to ai-defaults.html |
| 5. The Form | **Built** |
| 6. FAQ | **Built** |
| 7. Footer | **Built** |

**articles.html**

| Section | Status |
|---|---|
| Topnav | **Built** — shared |
| Feed | **Built** — 10 items grouped into 5 collapsible `<details>` sections (Articles & Opinion, Research & Policy, Industry, From the Web, Culture & Repos). Each item: type tag, title, source, editorial note. Groups default closed. |
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

- **Re-verify all stats** in `copy.md` and `data/ai-exposure.json` before going live — figures move fast
- **Add an SRI hash** to the ECharts CDN `<script>` tag in `ai-exposure.html` (currently flagged with a comment to verify at jsDelivr before go-live)
- **Final responsiveness pass** — mobile widths, section spacing; check all four pages
- **Add social links to footer** — placeholder comment in all HTML files; Niklas decides which platforms
- **Privacy and Terms pages** — footer links point to `#` on all pages
- **Keep articles.html fresh** — add new items as they come in, remove stale ones
- **Keep ai-defaults.html fresh** — add new entries as they surface; re-verify toggle paths and dates per entry
- **Keep ai-exposure.html fresh** — re-verify category and occupation figures against the source datasets periodically; update `data/ai-exposure.json` and the inline `DATA` copy together

## Contact / email

`antibsai@gmail.com` — the real contact address. Used in the form success confirmation, and in footer "Submit an article" and "Contact" links.

## Design direction

- Calm and minimal. Lots of whitespace. Palette and fonts are already locked in Design tokens above — use those, don't invent new ones.
- No stock "glowing AI brain" imagery. No neon. If anything visual, lean editorial/data (clean type, maybe one real chart later).
- Scannable: clear section breaks, short paragraphs.

## Sections (page order)

**index.html**
1. Hero
2. Value Proposition
3. Feed Preview — 3 teasers linking to articles.html
4. Defaults Preview — 3 entries (GitHub Copilot, Windows 11, Atlassian) linking to ai-defaults.html
5. The Form (main conversion block)
6. FAQ
7. Footer

**articles.html** — page title "Hand-picked articles"
1. Feed — 10 items in 5 collapsible groups (default closed, `<details>`/`<summary>`). Groups: Articles & Opinion, Research & Policy, Industry, From the Web, Culture & Repos.
2. Footer

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

All styles live in `styles.css`; none of the four pages has an inline `<style>` block. `ai-exposure.html` does carry an inline `<script>` block: it configures the ECharts treemap and holds a `DATA` object that is a literal, hand-kept-in-sync copy of `data/ai-exposure.json` (so the page renders with no runtime fetch).

(Copy for index.html sections is in `copy.md`. Sections cut from the landing page — About/Story, Problem/Solution, What You'll Get, Social Proof, Pricing — are still in `copy.md` marked REMOVED, kept for reference. Articles feed copy, AI defaults copy, and AI exposure heatmap copy live in their respective HTML files directly; the heatmap's underlying numbers and source citations live in `data/ai-exposure.json`.)

## Standing rules

- Never fabricate testimonials, user counts, or stats.
- Every number on the live site needs a real, current source. Re-verify before launch. (Figures and sources are in `copy.md`.)
- Same-axis comparisons only: valuation vs valuation, annual spend vs annual spend. Never a stock vs a flow.
- Email is always optional and always the last field. Never make it required, never gate submission on it, never reintroduce a "waitlist" framing that implies a committed newsletter.
- Keep the calm/grounded voice everywhere. No hype, no doom, no urgency manipulation. Let the figures carry it.
- Avoid "nearly quadrupled" and similar reflexive intensifiers unless the exact figure is stated right next to it with a source. The number should do the work, not the adjective.
- Avoid em dashes in body copy. Use a comma, a period, or a new sentence instead.
- Don't open section descriptions with "A running list of..." — explain the phenomenon in plain sentences instead. Body copy should tell the visitor what's actually going on, not just name it cleverly.
