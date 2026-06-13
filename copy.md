# copy.md — Anti-AI, AI Club

All section copy and the verified stats for the landing page. Read this before writing or editing any section.

- `index.html` is the source of truth for copy that's already built into the page.
- This file holds the working drafts and anything not yet built.
- Durable instructions (positioning, voice, tech, tokens, build order, standing rules) are in `CLAUDE.md`.

---

## COPY

### 1. Masthead

Split layout: headline + CTA on the left (`.mh-l`), an always-dark stat panel on the right (`.mh-r`).

- **Eyebrow:** Critical, calm, not hateful
- **H1:** Not anti-AI.<br>Anti-bullshit<br>about AI.
- **Sub:** We track the data most coverage skips: sourced, dated, updated.
- **CTA:** Tell us what to cover → (links to `#form`)
- **Right panel label:** The figure nobody headlines
- **Animated stat (`#counter`):** $1.82T
- **Right panel description:** Anthropic and OpenAI combined: roughly the **whole world's** 2026 AI budget.
- **Right panel source line:** Anthropic ≈ $965B + OpenAI ≈ $852B (May/Mar 2026 valuations) vs. ≈ $2.5T forecast global AI spend in 2026 (Gartner).
- **Right panel badge:** sourced · dated

### 1b. Featured (front-page story) — Claude Fable 5

First news item to earn a front-page block. Sits between Masthead and Doors.

- **Kicker:** Featured · 9 Jun 2026
- **Heading:** The most capable model yet just shipped to everyone. Here are the numbers nobody's leading with.
- **Lede:** Anthropic released Claude Fable 5, a model from a new tier they call Mythos-class. The launch post is full of capability claims. The parts worth tracking are the access, the price, and the catch.
- **Body:** The honest part is in the fine print. Anthropic says the safeguards are tuned to be cautious, so some harmless requests get caught and silently routed to Claude Opus 4.8. A near-identical model with the cyber safeguards removed, called Mythos 5, goes to a small set of government and infrastructure partners, not to you. The free ride on subscription plans is temporary by design too: available everywhere today, then rationed in two weeks because demand is hard to predict.
- **Closer:** None of that is a scandal. It's just the shape of a frontier launch once you read past the benchmark charts: priced to spread fast, gated where it's dangerous.
- **CTA:** Read Anthropic's announcement → (https://www.anthropic.com/news/claude-fable-5-mythos-5)
- **Stat cards:**
  - **$10 / $50** — Per million input / output tokens. Less than half what the Mythos Preview model cost.
  - **< 5%** — Of sessions hit a safeguard that quietly hands your request to a smaller model.
  - **23 Jun** — The date it gets pulled from Pro, Max, Team and Enterprise plans.

Source: Anthropic, "Claude Fable 5 and Claude Mythos 5," 9 Jun 2026. All figures pulled from that post.

### 2. Doors

Three cards linking to the other pages.

- **Articles** — tag: `7 pieces`. Body: A hand-picked feed: articles, opinions, research. All on AI's actual impact. Link: Browse the feed → (articles.html)
- **AI Defaults** — tag: `Tracked & dated`. Body: What ships switched on, and where the off-toggle actually hides. Link: See what's enabled → (ai-defaults.html)
- **Exposure Heatmap** — tag: `Interactive`. Body: Which jobs and sectors face the most AI disruption, visualised. Link: Explore the map → (ai-exposure.html)

### 3. Form strip (MAIN CONVERSION BLOCK)
- **Heading:** What should we cover?
- **Lede (under heading):** Pick what you'd want us to dig into. Takes ten seconds, no email required.
- **Topic chips** (checkboxes; REQUIRED — at least one must be ticked). On-chip label, then the underlying submitted value:
  - "AI & jobs" → `AI & jobs / the labour market`
  - "economics" → `The real economics (market size, the money, the bubble talk)`
  - "power & surveillance" → `AI & power / politics / surveillance`
  - "copyright" → `Copyright, data, and who owns what`
  - "environment" → `Environmental cost`
  - "hype-checking" → `Hype-checking & broken promises`
  - "just the essentials" → `Just give me the important stuff`
- **Validation message** (shown if no chip is checked): Pick at least one topic.
- **Worry field** (OPTIONAL free text, name `worry`). Placeholder: `what worries you about AI? — optional`
- **Email field** (OPTIONAL, last, name `email`). Placeholder: `email — optional`
- **Submit button:** Send it in
- **Submit error** (network/Formspree failure): Something went wrong, please check your connection and try again.
- **Confirmation:**
  - Got it, thanks for telling us what matters to you. If you left an email, you'll only hear from us when there's something real worth sharing.
  - Want to help shape it more? Send us an article worth reading: antibsai@gmail.com.

### 4. Footer
- Brand line: Anti-AI, AI Club · the numbers behind the hype
- Links: Home · Articles · Submit (mailto: antibsai@gmail.com) · Contact (mailto: antibsai@gmail.com)

---

## REMOVED from index.html — candidates for about.html

These were on the landing page before the paper-system rebuild. They're cut from `index.html` (now leaner and more content-focused) but kept here as drafts for the future `about.html`, which will also house the FAQ. Reskin to the paper system rather than porting as-is.

### Value Proposition
- **Heading:** Not anti-AI. Anti-bullshit about AI.
- Body: Most AI coverage either sells you a dream or sells you dread. We're not doing either. We just track the numbers most people skip: how big the market actually is, what it's doing to jobs, and who's using it for power.
- Three pillars:
  - **Data over vibes.** Real numbers with real sources. If we can't back it up, we don't post it.
  - **Calm, not doom.** We want you informed, not anxious.
  - **Critical, not hateful.** AI is here to stay. That's exactly why it's worth scrutinising.

### FAQ
- **Are you actually anti-AI?** No — the name's half a joke. We're critical of the hype and honest about the harms, but we accept AI is here to stay. Clear eyes, not a crusade.
- **Is this just doom?** No. We skip the rage-bait. The aim is calm and informed, not anxious.
- **What makes you different?** Numbers. We lead with data and sources instead of opinions and vibes.
- **Do I have to give my email?** No. The only thing we ask is which topics you care about. Email is optional, and if you leave one we'll only use it when there's something real worth sending.
- **What do I get right now?** A curated set of articles worth reading, and a say in what this becomes. Regular issues and community come next.
- **Is it free?** Yes at launch. If that changes, the people here early get the heads-up and the best deal.
- **Who's behind it?** A regular person tired of hype who started collecting the good, data-backed critical stuff. You're early enough to shape it.

---

## Verified stats (re-verify right before launch — these move fast)

Every number here has a real source and a date. If a figure can't be sourced, it doesn't go on the site.

### Flagship comparison (valuation vs valuation — a fair, same-axis comparison)
- Anthropic ≈ **$965B** valuation (Series H, May 2026 — Bloomberg, TechCrunch, Al Jazeera).
- OpenAI ≈ **$852B** valuation (round closed March 31, 2026 — Bloomberg, CNBC, OpenAI).
- Combined ≈ **$1.82 trillion** — two AI companies now valued at roughly what the *entire world* is forecast to spend on AI in all of 2026 (~$2.5T, Gartner, Jan 2026).

### Year-over-year spending
- **All AI spending:** ~$1.5T in 2025 → ~$2.5T forecast 2026, about **+44% YoY** (Gartner). Includes infrastructure plus AI built into phones/PCs.
- **AI infrastructure only:** $153B in 2024 → $318B in 2025, **more than doubled** (IDC, April 2026). Narrower, but it's the figure that literally doubled.
- Don't mix the two denominators in one claim.
