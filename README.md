# Anti-AI, AI Club — Pre-launch landing page

A single-page static site. One job: let a visitor weigh in on what we should cover, and optionally leave an email. No framework, no build step.

## File map

| File | Purpose |
|---|---|
| `index.html` | The page. Source of truth for copy that's already built. |
| `styles.css` | All styles. CSS custom properties for every token — no hardcoded hex. |
| `script.js` | Minimal JS. Currently just `'use strict';` — form behaviour goes here when built. |
| `copy.md` | All section copy and verified stats. Read before editing any text. |
| `CLAUDE.md` | Durable instructions for Claude Code. Positioning, rules, build order. |
| `colour-instructions.md` | Colour usage rules. Section backgrounds, accent rules, what to avoid. |

## Dev setup

No build step. Open `index.html` in a browser. That's it.

## Current build status

| Section | Status |
|---|---|
| 1. Hero | Built |
| 2. Value Proposition | Placeholder only |
| 3. Problem / Solution | Placeholder only |
| 4. What You'll Get | Placeholder only |
| 5. Social Proof | Placeholder only |
| 6. About / Story | Placeholder only |
| 7. Pricing | Placeholder only |
| 8. The Form | Placeholder only |
| 9. FAQ | Placeholder only |
| 10. Footer | Placeholder only |

Section backgrounds for all sections are pre-wired in `styles.css` — they'll apply automatically as each section is built.

## What the form needs (when you get there)

- Formspree (or similar) endpoint — Niklas sets up the account and provides the URL; wire it to the form `action`
- At-least-one-checkbox required; worry text and email are both optional
- On success: show the confirmation copy from `copy.md` section 8, not a redirect
