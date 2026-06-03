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

| Section | Status |
|---|---|
| 1. Hero | Built |
| 2. Value Proposition | Built |
| 3. Problem / Solution | Built |
| 4. What You'll Get | Built |
| 5. Social Proof | Built |
| 6. About / Story | Built |
| 7. Pricing | Built |
| 8. The Form | Built |
| 9. FAQ | Placeholder |
| 10. Footer | Placeholder |

Section backgrounds for all sections are pre-wired in `styles.css`.

## What still needs doing before launch

- **Wire the form endpoint** — set `action="#"` in the `<form>` to the Formspree URL once the account is set up
- **Build Section 9 — FAQ**
- **Build Section 10 — Footer** (contact/submit links should point to `antibsai@gmail.com`)
- **Re-verify all stats** in `copy.md` — figures move fast; check sources before going live
- **Final responsiveness pass** — mobile widths, section spacing
