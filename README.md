# Anti-AI, AI Club — Pre-launch landing page

A single-page static site. One job: let a visitor weigh in on what we should cover, and optionally leave an email. No framework, no build step.

## File map

| File | Purpose |
|---|---|
| `index.html` | The page. Source of truth for copy that's already built. |
| `styles.css` | All styles. CSS custom properties for every token — no hardcoded hex. |
| `script.js` | Form validation and async submit handler. |
| `copy.md` | All section copy and verified stats. Read before editing any text. |
| `CLAUDE.md` | Durable instructions for Claude Code. Positioning, rules, build order. |
| `colour-instructions.md` | Colour usage rules. Section backgrounds, accent rules, what to avoid. |

## Dev setup

No build step. Open `index.html` in a browser. That's it.

## Current build status

v0.1 — all sections built and live.

| Section | Status |
|---|---|
| 1. Hero | Built |
| 2. Value Proposition | Built |
| 3. About / Story | Built |
| 4. The Form | Built |
| 5. FAQ | Built |
| 6. Footer | Built |

## What still needs doing before launch

- **Re-verify all stats** in `copy.md` — figures move fast; check sources before going live
- **Final responsiveness pass** — mobile widths, section spacing
- **Add social links to footer** — placeholder comment in HTML; platforms TBD
- **Privacy and Terms pages** — footer links currently point to `#`
