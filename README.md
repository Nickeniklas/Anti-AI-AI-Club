# Anti-AI, AI Club — Pre-launch landing page

A multipage static site. Landing page (`index.html`) lets visitors weigh in on what to cover and optionally leave an email. Articles page (`articles.html`) is a curated feed of links worth reading. No framework, no build step.

## File map

| File | Purpose |
|---|---|
| `index.html` | Landing page. Source of truth for copy that's already built. |
| `articles.html` | "Hand-picked articles" page. 10 items in 5 collapsible category groups (`<details>`/`<summary>`). Default closed. |
| `styles.css` | All styles for both pages. CSS custom properties for every token — no hardcoded hex. |
| `script.js` | Form validation and async submit handler. |
| `copy.md` | Landing page section copy and verified stats. Read before editing any text. |
| `CLAUDE.md` | Durable instructions for Claude Code. Positioning, rules, build order. |
| `colour-instructions.md` | Colour usage rules. Section backgrounds, accent rules, what to avoid. |

## Dev setup

No build step. Open `index.html` or `articles.html` in a browser.

## Current build status

v0.1 — all sections built and live.

**index.html**

| Section | Status |
|---|---|
| Topnav | Built |
| 1. Hero | Built |
| 2. Value Proposition | Built |
| 3. Feed Preview | Built |
| 4. The Form | Built |
| 5. FAQ | Built |
| 6. Footer | Built |

**articles.html**

| Section | Status |
|---|---|
| Topnav | Built |
| Feed (10 items, 5 collapsible groups) | Built |
| Footer | Built |

## What still needs doing before launch

- **Re-verify all stats** in `copy.md` — figures move fast; check sources before going live
- **Final responsiveness pass** — mobile widths, section spacing; check both pages
- **Add social links to footer** — placeholder comment in both HTML files; platforms TBD
- **Privacy and Terms pages** — footer links point to `#` on both pages
