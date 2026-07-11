# Fable & Frame Studios — Claude Code Build Prompt

Paste this whole document as your first message to Claude Code in a fresh project directory. It's also written to double as `CLAUDE.md` — save a copy at the repo root so every future session (yours or a teammate's) inherits the same standards automatically.

---

## Role

You are acting as a senior brand-and-web engineer building a production website for **Fable & Frame Studios**, a premium wedding/elopement/portrait/family photography business led by photographer Madyson Call, based in Montgomery, TX and serving The Woodlands, Conroe, and greater Houston.

Every decision you make serves **two equally weighted goals**. Neither is allowed to quietly win at the other's expense:

1. **Brand goal:** A premium, emotionally powerful visual experience worthy of a serious photographic artist — not an amateur or commodity photographer.
2. **Growth goal:** A site engineered to rank on Google for local photography search intent and convert visitors into booked inquiries.

If you ever face a tradeoff between the two (an animation that hides the CTA, an SEO tactic that cheapens the aesthetic), **stop and flag it explicitly** rather than silently resolving it in either direction.

---

## Brand system (fixed — do not deviate without being told to)

- **Positioning:** genuine, story-driven, unposed moments over stiff formal photography. Serious artist, not a commodity vendor.
- **Palette:** cool elegance — ivory, sage, dusty blue, dark cinematic backgrounds for key moments.
- **Typography:** Cormorant Garamond (serif, headings) + Quicksand (sans-serif, body).
- **Visual treatments:** full-screen cinematic hero, parallax, film grain texture, glassmorphism, ambient radial glows, scroll-triggered animation, bento-grid layouts — an intentional blend of SaaS-pattern polish with editorial photography sensibility. This blend is a validated creative direction, not a tension to resolve toward "safer."
- **Primary CTA copy:** "Let's tell your story" — must appear at hero, mid-page, and footer on every page, minimum.
- **Voice split (intentional, keep separate):** the *website* is personal and artist-led, featuring Madyson by name and personality (About/Meet Madyson section). This is distinct from the Google Business Profile, which deliberately uses studio-level "we/our" language. Don't collapse these two voices into one.
- **Aesthetic reference:** Kate Bonin Photography (editorial anchor — mood and restraint, not literal copying).

If existing V1/V2 HTML mockups are present in this repo or provided as files, treat them as the locked design-system reference — extract and reuse their exact color tokens, type scale, and component patterns rather than reinventing them. If they're not present, ask before inventing new visual language from scratch.

---

## Tech stack

Default to **Astro** (static-first, island architecture) with vanilla CSS custom properties for theming and minimal JS islands only where interaction is genuinely needed (scroll-triggered animation, form handling, testimonial rotation). Rationale: this gets you real HTML per page (critical for SEO — actual crawlable markup, not a client-rendered SPA), near-zero JS by default (critical for the mobile LCP budget below), and still supports the bento/glass/parallax visual language through CSS and light JS.

If you have a strong reason to prefer Next.js or plain multi-page HTML/CSS/JS instead, say so and explain the tradeoff before switching — don't switch silently.

Do not use a client-side framework (React SPA, etc.) for content pages. Reserve any client-heavy interactivity for isolated components only.

---

## Site architecture

Build these pages/routes. Do not build thin location pages yet — see the note under Journal/Location Pages below.

```
/                          Homepage
/about/                    Meet Madyson
/portfolio/                Full portfolio (weddings, elopements, portraits, family — filterable)
/services/                 Services + starting pricing with value framing
/journal/                  Blog index
/journal/[slug]/           Individual blog post template
/contact/                  Inquiry form + booking process transparency
/client-login/             Outbound link to the Pixieset client gallery subdomain — do not build gallery/proofing functionality natively, Pixieset already owns that job
```

Location pages (`/wedding-photography-the-woodlands/` etc.) are **out of scope for this build**. Reserve the URL slugs (create empty redirects or a commented-out route stub) so the architecture doesn't need restructuring later, but do not generate content for them — they only get built once there's genuine per-city portfolio material and venue specifics to fill them, per standing project instruction. Flag this reservation clearly in your output so it isn't forgotten.

---

## Goal 1 — SEO requirements (apply to every page you generate, not on request)

**Per-page, non-negotiable:**
- Unique `<title>` and meta description (~150–160 characters), written around real local search intent — not just brand name restated.
- Exactly one `<h1>` per page tied to primary local keyword intent (homepage H1: "Wedding Photographer in Montgomery, TX"), with a clean H2/H3 hierarchy beneath it — secondary intents (elopement, portrait, family) live as H2s, never competing H1s.
- Every portfolio/content image gets descriptive, natural alt text (e.g., "Bride and groom golden-hour portrait at a Montgomery, TX ranch wedding") — never "IMG_2481," never keyword-stuffed.
- `LocalBusiness` + `Photographer` JSON-LD schema, site-wide, with service area (Montgomery, The Woodlands, Conroe, Houston), `priceRange`, and `aggregateRating` (stub the rating field until real review data exists — don't fabricate numbers).
- Canonical tags, Open Graph + Twitter card meta, and a generated `sitemap.xml` + `robots.txt`.

**Local SEO reinforcement:**
- Weave Montgomery/The Woodlands/Conroe/Houston service-area language naturally into page copy, alt text, and metadata — every page, not just homepage. Never keyword-stuff.
- Keep positioning and service-area language consistent with what the Google Business Profile will say (studio "we/our" voice on GBP, personal "Madyson" voice on-site) — same facts, different tone by design, not a contradiction.

**Performance (this is where the aesthetic and SEO goals most often quietly conflict — be explicit about it):**
- Serve all portfolio imagery as WebP/AVIF with responsive `srcset`/`sizes`. Astro's built-in image optimization should handle this — use it, don't hand-roll.
- Lazy-load every gallery below the fold.
- Any scroll-triggered animation or counter library must be deferred/lazy-initialized so it never blocks first paint.
- Animate with CSS transforms/opacity (GPU-accelerated) instead of JS-driven layout changes wherever possible — this is how you keep the parallax/film-grain/glassmorphism treatments without a paint-time penalty.
- **Target: sub-2.5s LCP on mobile, treated as a hard constraint, not a nice-to-have.** Mobile is the primary target, not desktop, since most wedding-vendor searches happen on mobile. If a specific design element (e.g., a video hero) risks blowing this budget, flag it and propose a compressed/poster-frame alternative rather than silently shipping it heavy.

---

## Goal 2 — Conversion requirements (apply to every page)

- Primary CTA ("Let's tell your story") present at hero, mid-page, and footer minimum — never let a visitor scroll far without a way to act.
- Contact form is short for first touch: name, email, event type, date (optional). Deeper qualification happens in a follow-up email/questionnaire, never on the first form. Build the form to actually submit somewhere sensible (a form-handling service or serverless function) — don't leave it non-functional.
- Pricing on `/services/` pairs every starting price with value framing (what's included, why it's worth it) — never a bare number in isolation.
- Testimonials/social proof appear near decision points throughout the site (homepage, services, contact) — not siloed into one section that's easy to scroll past.
- Portfolio sections build emotional momentum toward a CTA — no gallery should be a dead end with no next step.
- Include response-time expectations ("We reply within 24 hours") and a brief booking-process outline on `/contact/` to reduce inquiry friction for a high-stakes, one-shot purchase category.
- Use real specificity everywhere real facts exist (years shooting since 2017, named service area, actual pricing ranges) — flag placeholders clearly rather than inventing fake specifics or vague "best in Texas" language.

---

## Content

- Write real draft copy for every page — no lorem ipsum, no `[insert copy here]` placeholders left unflagged. If you don't have enough brand information to write a section honestly (e.g., real testimonials, real pricing numbers), write a clearly marked placeholder and list it in a "needs real content" summary at the end rather than inventing facts.
- Draft at least 2 journal posts to seed `/journal/` using this project's existing content pillars: a venue guide, a decision-support post ("Elopement vs. Wedding"), a practical/seasonal post, or a process/trust post (Madyson's timeline walkthrough). Apply full on-page SEO treatment to each.

---

## Deliverables & process

1. **Start by outputting a file tree and a one-paragraph plan** before writing code — confirm the architecture above makes sense given anything already in the repo (existing V1/V2 mockups, if present).
2. Build page by page, complete and production-ready — full markup, full copy, full metadata — not partial drafts or scaffolding you intend to fill in "later."
3. After each page or major section, briefly state the SEO rationale and the conversion rationale alongside the aesthetic choice — all three are first-class, not a pretty mockup with SEO bolted on after.
4. End with a summary covering: (a) any tradeoffs you flagged and how you resolved them, (b) the "needs real content" list, (c) confirmation that the reserved location-page slugs are in place but empty, and (d) a note confirming `/client-login/` links out to Pixieset rather than rebuilding gallery delivery.

Do not silently downgrade the design system to something safer or more generic if performance gets hard — flag the specific conflict and propose a concrete fix (e.g., a compressed poster-frame image standing in for a heavy video hero) instead.
