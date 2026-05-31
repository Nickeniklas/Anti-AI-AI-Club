# CLAUDE.md — Anti-AI, AI Club

Project context for building the day-0 pre-launch landing page. Read this before generating or editing anything.

## What this is

A single-page pre-launch landing site for **Anti-AI, AI Club** — a small community/newsletter for the *actual data* on AI. The entire site has ONE job: collect waitlist signups to test whether there's traction. Every section funnels toward the waitlist.

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
- Form posts to a third-party service (Formspree / Buttondown / ConvertKit — TBD by Niklas). The user sets up that account himself; Claude Code only wires the form `action` to the endpoint Niklas provides. Do NOT create accounts.
- Keep it lightweight. No heavy dependencies.

## Build order (do these as separate steps, not all at once)

1. Scaffold: single `index.html`, `styles.css`, `script.js`. Clean CSS reset. No content yet.
2. Build each section one at a time, mobile-first, using the copy below. Confirm look before moving on.
3. Build the **waitlist form LAST and carefully** — it's the only thing that must actually work.
4. Final pass: responsiveness + mobile widths.

## Design direction

- Calm and minimal. Lots of whitespace. One accent colour + one good font (Niklas to pick).
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
8. Waitlist (main conversion block)
9. FAQ
10. Footer

---

## COPY

### 1. Hero
- **Headline:** Two AI companies are now worth what the whole world will spend on AI this year.
- **Subheadline:** A small club for people who want the real data on AI — how fast it's growing, what it's doing to work, and how it's tangled up with power. Critical, calm, and allergic to hype.
- **CTA button:** Join the waitlist
- **Microcopy:** Takes 10 seconds. No spam, just the first issue when we're live.
- BUILD NOTE: headline references Anthropic + OpenAI ≈ $1.82T combined valuation vs ~$2.5T forecast global AI spend in 2026. Re-verify both figures before launch; if they drift, rephrase rather than fudge.

### 2. Value Proposition
- **Heading:** Not anti-AI. Anti-bullshit about AI.
- Body: Most coverage is selling you a dream or selling you dread. We're after a third thing — what's actually true. We track the figures most takes skip: how big and how fast the AI market really is, its real effect on jobs, and how it's used by governments and the powerful.
- Three pillars:
  - **Data over vibes.** Real numbers, with sources. If we can't back it up, we don't print it.
  - **Calm, not doom.** The point is to leave you informed, not anxious.
  - **Critical, not hateful.** AI is part of the world now. That's exactly why the scrutiny matters.

### 3. Problem / Solution
- **Heading:** You don't want hype. You don't want a panic attack either.
- Body: If you're skeptical about AI, your options are bad. Boosters say it'll fix everything. Doomers say it'll end everything. Almost nobody just shows you the numbers and lets you think. So you tune out and get blindsided, or scroll yourself into anxiety without learning anything.
- Resolution: **We're the calm middle.** One small, curated place for the real data on AI's scale, its effect on labour, and its links to power. Read it, get the picture, get on with your day actually informed.

### 4. What You'll Get
(Day-one honesty: mark what's live vs planned.)
- **The numbers, in context** *(core idea)* — The figures that matter, explained in a sentence or two. [FLAGSHIP STAT — see Verified Stats below.]
- **Labour & power focus** *(core idea)* — The two things most coverage underplays: what AI does to work, and how it's used by states and the powerful.
- **Curated, by a human** *(live now)* — No algorithm, no firehose. A person reads the noise and picks what's worth your attention. Started with a small article collection.
- **A club of fellow skeptics** *(planned)* — A grounded place to talk with people who share the same wary, data-first view. No flame wars, no cheerleading.

### 5. Social Proof
- Day 0: NO testimonials. Do not fabricate any.
- **Heading:** Get in before there's anything to brag about.
- Body: We're starting with a small pile of hand-picked articles and a clear point of view. The proof comes later, built with people who show up early. Join now and help decide what this becomes — topics, format, tone.
- BUILD NOTE: leave a swappable slot here for a real waitlist count or founding-member quote post-launch.

### 6. About / Story
- **Heading:** Why this exists.
- Body: Every AI newsletter seems to be selling a course or selling fear. Nobody was just laying out the numbers for people who are skeptical but not in denial. This started as a personal pile of interesting articles and a feeling that the public conversation was missing the actual data. Now it's becoming a small club for everyone who feels the same: uneasy about AI, unwilling to pretend it'll vanish, tired of takes with no figures behind them. We're critical because we take it seriously. We're not hateful because this is the world we live in now. We just think you deserve the real picture.

### 7. Pricing
- **Heading:** Free at launch. For real.
- Body: We're not solving monetization on day one and won't pretend to. The waitlist is free, and the first version is free for everyone here early. If a paid tier ever makes sense, founding members hear first and get a fair deal. No surprises.
- CTA: Join free

### 8. Waitlist (MAIN CONVERSION BLOCK — give it room)
- **Heading:** Join the club.
- **Subtext:** Tell us where to point first. Takes about 10 seconds.
- **Field 1 — Email** (required). Placeholder: `you@email.com`
- **Field 2 — "What should we cover? Pick what you care about"** (checkboxes; require at least one):
  - AI & jobs / the labour market
  - The real economics (market size, the money, the bubble talk)
  - AI & power / politics / surveillance
  - Copyright, data, and who owns what
  - Environmental cost
  - Hype-checking & broken promises
  - Just give me the important stuff
- **Field 3 — "What worries you most about AI?"** (OPTIONAL free text). Placeholder: `Optional — one line is fine. Helps us write for you.`
- **Submit button:** Count me in
- **Confirmation (on success):** You're in. We'll send the first issue the moment it's ready — nothing before then. Want to help shape it? Send us an article worth reading: [hello@yourdomain].
- BUILD NOTE: the checkboxes are doubling as market research. Make sure the form service stores the topic picks AND the worry text, not just the email.

### 9. FAQ
- **Are you actually anti-AI?** No — the name's half a joke. We're critical of the hype and honest about the harms, but we accept AI is here to stay. Clear eyes, not a crusade.
- **Is this just doom?** No. We skip the rage-bait. The aim is calm and informed, not anxious.
- **What makes you different?** Numbers. We lead with data and sources instead of opinions and vibes.
- **What do I get right now?** A curated set of articles worth reading and a spot on the waitlist. Regular issues and community come next.
- **How often will you email me?** Rarely, and not yet. First issue lands when there's something real to send.
- **Is it free?** Yes at launch. If that changes, early members get the heads-up and the best deal.
- **Who's behind it?** A regular person tired of hype who started collecting the good, data-backed critical stuff. You're early enough to shape it.

### 10. Footer
- Name: **Anti-AI, AI Club**
- Strapline: The numbers behind the hype. Critical, calm, not hateful.
- Links: Home · About · Join the waitlist · Submit an article · Contact
- Connect: [pick what you'll actually use — RSS / Bluesky / Mastodon / X]
- Legal: Privacy · Terms · © 2026 Anti-AI, AI Club
- Microcopy: We use your email only for the newsletter. Unsubscribe anytime.

---

## Verified stats (re-verify right before launch — these move fast)

Every number here has a real source and a date. If a figure can't be sourced, it doesn't go on the site.

### Flagship comparison (valuation vs valuation — a fair, same-axis comparison)
- Anthropic ≈ **$965B** valuation (Series H, May 2026 — Bloomberg, TechCrunch, Al Jazeera).
- OpenAI ≈ **$852B** valuation (round closed March 31, 2026 — Bloomberg, CNBC, OpenAI).
- Combined ≈ **$1.82 trillion** — two AI companies now valued at roughly what the *entire world* is forecast to spend on AI in all of 2026 (~$2.5T, Gartner, Jan 2026).
- WHY THIS WORKS: it compares a stock of value to a stock of value, not a valuation to an annual wage flow. A data-skeptic reader can't poke a hole in it.

### Year-over-year spending (the "we're only accelerating" point)
Pick ONE definition and label it clearly — these measure different things:
- **All AI spending:** ~$1.5T in 2025 → ~$2.5T forecast 2026, about **+44% YoY** (Gartner). Includes infrastructure plus AI built into phones/PCs.
- **AI infrastructure only:** $153B in 2024 → $318B in 2025, **more than doubled** (IDC, April 2026). Narrower, but it's the figure that literally doubled.
- Use whichever fits the sentence. Don't mix the two denominators in one claim.


## Standing rules
- Never fabricate testimonials, user counts, or stats.
- Every number on the live site needs a real, current source. Re-verify before launch.
- Same-axis comparisons only: valuation vs valuation, annual spend vs annual spend. Never a stock vs a flow.
- Keep the calm/grounded voice everywhere. No hype, no doom, no urgency manipulation. Let the figures carry it.
- Avoid "nearly quadrupled" and similar reflexive intensifiers unless the exact figure is stated right next to it with a source. The number should do the work, not the adjective.
