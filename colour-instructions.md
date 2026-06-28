
## Colour usage

This file covers two colour systems: the **paper system** for `index.html` (the new standard — dark by default, with a light toggle) and the **legacy system** for `articles.html`, `ai-defaults.html`, and `ai-exposure.html` (light-only, pending migration to the paper system). In both systems, use only the CSS custom properties defined in `styles.css` — never hardcode hex values directly.

---

## Paper system (index.html)

Tokens are listed in full in `CLAUDE.md` → Design tokens (`:root` for dark/default, `html.theme-light` for the light overrides). Both themes are real, supported themes — check contrast in both, not just the default dark one.

### Section backgrounds

| Section | Background | Notes |
|---|---|---|
| Nav, Masthead (left), Exposure teaser, Doors | `--bg` (page background) | `--bg2` is used for subtle hover states (e.g. a door card on hover), not as a section background |
| Masthead right panel (the featured-story mini-hero, currently the "~4 days" stat) | `--panel-bg` | **Stays dark in both themes** — the one fixed-dark panel, and the masthead's visual anchor |
| Form strip | `--surface` | A step apart from `--bg` — lighter than `--bg` in dark mode, "more white" than `--bg` in light mode |
| Footer | `--panel-bg` | Stays dark in both themes, same as the masthead panel — ties the top and bottom of the page together |

### Accent and CTAs

- `--accent` (`#f4c430`, warm yellow) is the single accent colour: primary CTA buttons, the active/checked state of topic chips, the brand dot. It does not change between themes.
- Text on an `--accent` fill is always `--accent-ink` (near-black), in both themes, for contrast.
- Button hover steps to `--accent-dim`.

### Text

- `--ink` / `--ink2` / `--ink3` are the text colours for content on `--bg`, `--bg2`, and `--surface`. Use `--ink` for headings and primary copy, `--ink2` for secondary copy and chip labels, `--ink3` for placeholders and the least important microcopy.
- On `--panel-bg` (masthead panel, footer), use `--panel-fg` / `--panel-dim` instead. Never use `--ink`/`--ink2`/`--ink3` there — those flip to dark in light mode and would be invisible against the always-dark panel.

### What to avoid (paper system)

- **Never hardcode a hex colour in new paper-system CSS.** Every colour that should change between themes is a token; every colour that shouldn't (the panel, the accent) already has its own token.
- **Don't cross the `--ink*` / `--panel-*` text pairs with the wrong background** — `--ink*` is for `--bg`/`--bg2`/`--surface`, `--panel-fg`/`--panel-dim` is for `--panel-bg`. Mixing them works in one theme and breaks in the other.
- **Watch for legacy selectors leaking in.** The pre-redesign stylesheet has some bare-tag/ID rules (e.g. `footer { background: var(--color-ink) }`) using the *legacy* fixed-hex tokens. An ID selector can outrank a `body.redesign .foo` class rule regardless of source order — if a paper-system element keeps an old ID (for JS hooks, anchors, etc.), check that no legacy rule still targets that ID's colour or background.
- **Don't add another "always dark" panel.** `--panel-bg` is reserved for the masthead figure and footer, on purpose — it's what makes those two spots read as a matching pair. More fixed-dark blocks would dilute that.

---

## Legacy system (articles.html, ai-defaults.html, ai-exposure.html)

The palette is defined in `styles.css` as CSS custom properties. Use only those variables in HTML and CSS — never hardcode hex values directly.

### The rule of five sections

The page alternates between four backgrounds to create rhythm without each section looking like a separate site. Never use more than one tinted section in a row.

| Section | Background | Notes |
|---|---|---|
| Hero | `--color-yellow` at 10% opacity | Use `background: rgba(249, 208, 64, 0.10)` — not the full yellow |
| Value Prop, About, FAQ | white (`--color-bg`) | Pure white. Let the copy do the work |
| Form | `--color-ink` (full) | The one fully dark section. High contrast is intentional |
| Footer | `--color-ink` (full) | Matches the form block — ties the bottom of the page together |

### CTAs and interactive elements

- **Primary button** (hero CTA, pricing CTA): full `--color-yellow` background, `--color-ink` text
- **Button hover**: `--color-coral` — already wired in `styles.css`, keep it
- **Waitlist submit button ("Count me in")**: same `--color-yellow` on `--color-ink` background — this is where the contrast pops hardest, which is the point
- **Form focus rings / checkbox accents**: `--color-green`

### Accents within sections

- Small label dots, status tags, or left-border accents on feature items in "What You'll Get": `--color-green`
- FAQ open-state left border on an accordion item: thin `--color-green` border
- Any inline stat callout or pull-quote: consider a `--color-yellow-light` background chip, `--color-ink` text

### Footer colours

The footer is dark (`--color-ink` background). On dark backgrounds:
- Body text: `#aaaaaa` or similar mid-grey (not `--color-ink` — it will be invisible)
- Strapline / brand name: `--color-yellow-light`
- Links and hover states: `--color-rose`
- Legal microcopy: muted grey, ~60% opacity white

### What to avoid

- **Coral as a section background** — `--color-coral` reads as "alert" or "promotional". Keep it for hover states only.
- **Rose as a section background** — works on dark only (footer links). Never use as a light-mode tint.
- **Full-opacity tints on multiple sections** — the washes only work because they are subtle. If any tinted section looks like a coloured block rather than a warm white, dial the opacity down.
- **Yellow text on white** — `--color-yellow` has poor contrast on white backgrounds. Use it only as a fill (buttons, dark-bg text).
- **Mixing tints** — each tinted section uses exactly one colour. Never layer two colour washes.
