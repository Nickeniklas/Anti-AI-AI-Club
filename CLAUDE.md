# CLAUDE.md — Anti-AI, AI Club

Project context for building the day-0 pre-launch landing page. Read this before generating or editing anything.

> Section copy and the verified stats live in `copy.md`. Read `copy.md` before writing or editing any section. `index.html` is the source of truth for copy that's already built; `copy.md` holds the drafts and anything not yet built; this file holds the durable instructions. Colour usage rules (section backgrounds, accent rules, what to avoid) are in `colour-instructions.md` — read it before touching any colour or background.

## What this is

A single-page pre-launch landing site for **Anti-AI, AI Club** — a small club for the *actual data* on AI. The site's one job: let an interested visitor weigh in on what we should cover, and optionally leave an email if they want to hear from us. No newsletter is committed to yet. The point right now is to test whether the idea lands and learn what people care about.

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
- Single page. Mobile-first, responsive.
- Form posts to a third-party service (Formspree or similar — TBD by Niklas). The user sets up that account himself; Claude Code only wires the form `action` to the endpoint Niklas provides. Do NOT create accounts.
- The form must store the topic checkboxes and the optional worry text and the optional email. Email is NOT required and must never block submission.
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

| Section | Status |
|---|---|
| 1. Hero | **Built** |
| 2. Value Proposition | **Built** |
| 3. Problem / Solution | **Built** |
| 4. What You'll Get | **Built** |
| 5. Social Proof | **Built** |
| 6. About / Story | **Built** |
| 7. Pricing | **Built** |
| 8. The Form | **Built** |
| 9. FAQ | Placeholder |
| 10. Footer | Placeholder |

Section backgrounds for all sections are pre-wired in `styles.css`. Build sections in order, one at a time. Confirm look before moving on.

## What still needs doing before launch

- **Wire the form endpoint** — `<form action="#">` in `index.html` needs the Formspree URL once Niklas sets up the account. Only Niklas sets up that account; Claude Code only wires the `action`.
- **Build Section 9 — FAQ**
- **Build Section 10 — Footer** (contact/submit links use `antibsai@gmail.com`)
- **Re-verify all stats** in `copy.md` before going live — figures move fast
- **Final responsiveness pass** — mobile widths, section spacing

## Contact / email

`antibsai@gmail.com` — the real contact address. Used in the form success confirmation (`index.html`). Will also be used in footer contact and "Submit an article" links.

## Build order (do these as separate steps, not all at once)

1. ~~Scaffold: single `index.html`, `styles.css`, `script.js`. Clean CSS reset.~~ **Done.**
2. ~~Build each section one at a time, mobile-first, using the copy in `copy.md`.~~ **Sections 1–8 done.**
3. ~~Build the form~~ **Done.** At-least-one-checkbox validation and async Formspree submit are in `script.js`. Endpoint still needs to be set in `action`.
4. Final pass: responsiveness + mobile widths.

## Design direction

- Calm and minimal. Lots of whitespace. Palette and fonts are already locked in Design tokens above — use those, don't invent new ones.
- No stock "glowing AI brain" imagery. No neon. If anything visual, lean editorial/data (clean type, maybe one real chart later).
- Scannable: clear section breaks, short paragraphs.

## Sections (page order)

1. Hero
2. Value Proposition
3. Problem / Solution
4. What You'll Get
5. Social Proof
6. About / Story
7. Pricing
8. The Form (main conversion block)
9. FAQ
10. Footer

(Copy for each section is in `copy.md`.)

## Standing rules

- Never fabricate testimonials, user counts, or stats.
- Every number on the live site needs a real, current source. Re-verify before launch. (Figures and sources are in `copy.md`.)
- Same-axis comparisons only: valuation vs valuation, annual spend vs annual spend. Never a stock vs a flow.
- Email is always optional and always the last field. Never make it required, never gate submission on it, never reintroduce a "waitlist" framing that implies a committed newsletter.
- Keep the calm/grounded voice everywhere. No hype, no doom, no urgency manipulation. Let the figures carry it.
- Avoid "nearly quadrupled" and similar reflexive intensifiers unless the exact figure is stated right next to it with a source. The number should do the work, not the adjective.
