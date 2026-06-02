
## Colour usage

The palette is defined in `styles.css` as CSS custom properties. Use only those variables in HTML and CSS — never hardcode hex values directly.

### The rule of five sections

The page alternates between four backgrounds to create rhythm without each section looking like a separate site. Never use more than one tinted section in a row.

| Section | Background | Notes |
|---|---|---|
| Hero | `--color-yellow` at 10% opacity | Use `background: rgba(249, 208, 64, 0.10)` — not the full yellow |
| Value Prop, Problem/Solution | white (`--color-bg`) | Pure white. Let the copy do the work |
| What You'll Get | `--color-green` at 15% opacity | Use `background: rgba(202, 239, 140, 0.15)` |
| Social Proof, About, FAQ | white (`--color-bg`) | White again. Alternating white/tinted creates the rhythm |
| Pricing | `--color-yellow-light` at 15% opacity | Use `background: rgba(245, 236, 137, 0.15)` — warm but not promotional |
| Waitlist | `--color-ink` (full) | The one fully dark section. High contrast is intentional |
| Footer | `--color-ink` (full) | Matches the waitlist block — ties the bottom of the page together |

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
