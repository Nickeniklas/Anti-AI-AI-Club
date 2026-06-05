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
- Multipage: `index.html` (landing page) + `articles.html` (curated feed). Mobile-first, responsive.
- Shared topnav (`#site-nav`) on both pages — sticky, brand left, links right, yellow "Weigh in" pill CTA.
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
| Topnav | **Built** — sticky, shared with articles.html |
| 1. Hero | **Built** |
| 2. Value Proposition | **Built** |
| 3. Feed Preview | **Built** — 3 teasers + "Read all in the feed" CTA to articles.html |
| 4. The Form | **Built** |
| 5. FAQ | **Built** |
| 6. Footer | **Built** |

**articles.html**

| Section | Status |
|---|---|
| Topnav | **Built** — shared |
| Feed | **Built** — 10 items grouped into 5 collapsible `<details>` sections (Articles & Opinion, Research & Policy, Industry, From the Web, Culture & Repos). Each item: type tag, title, source, editorial note. Groups default closed. |
| Footer | **Built** |

## What still needs doing before launch

- **Re-verify all stats** in `copy.md` before going live — figures move fast
- **Final responsiveness pass** — mobile widths, section spacing; check both pages
- **Add social links to footer** — placeholder comment in both HTML files; Niklas decides which platforms
- **Privacy and Terms pages** — footer links point to `#` on both pages
- **Keep articles.html fresh** — add new items as they come in, remove stale ones

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
4. The Form (main conversion block)
5. FAQ
6. Footer

**articles.html** — page title "Hand-picked articles"
1. Feed — 10 items in 5 collapsible groups (default closed, `<details>`/`<summary>`). Groups: Articles & Opinion, Research & Policy, Industry, From the Web, Culture & Repos.
2. Footer

(Copy for index.html sections is in `copy.md`. Sections cut from the landing page — About/Story, Problem/Solution, What You'll Get, Social Proof, Pricing — are still in `copy.md` marked REMOVED, kept for reference. Articles feed copy lives in `articles.html` directly.)

## Standing rules

- Never fabricate testimonials, user counts, or stats.
- Every number on the live site needs a real, current source. Re-verify before launch. (Figures and sources are in `copy.md`.)
- Same-axis comparisons only: valuation vs valuation, annual spend vs annual spend. Never a stock vs a flow.
- Email is always optional and always the last field. Never make it required, never gate submission on it, never reintroduce a "waitlist" framing that implies a committed newsletter.
- Keep the calm/grounded voice everywhere. No hype, no doom, no urgency manipulation. Let the figures carry it.
- Avoid "nearly quadrupled" and similar reflexive intensifiers unless the exact figure is stated right next to it with a source. The number should do the work, not the adjective.
