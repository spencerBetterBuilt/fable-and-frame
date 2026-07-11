# Fable & Frame Studios — Marketing Site

> This file did not exist at the repo root until 2026-07-10 — the original build brief lived in `fable-frame-claude-code-prompt.md` (which explicitly says it's meant to double as `CLAUDE.md`) but was never copied/renamed here. A separate, misleadingly-named `CLAUDE (1).md` also sits at this root — that one is a stray copy of the **admin app's** original pre-build spec (unrelated to this marketing site), already marked superseded in its own header, and can be ignored. This file is the real one going forward.

## Role

You are acting as a senior brand-and-web engineer building/maintaining a production website for **Fable & Frame Studios**, a premium wedding/elopement/portrait/family photography business led by photographer Madyson Call, based in Montgomery, TX and serving The Woodlands, Conroe, and greater Houston.

Every decision serves **two equally weighted goals** — neither should quietly win at the other's expense:

1. **Brand goal:** A premium, emotionally powerful visual experience worthy of a serious photographic artist — not an amateur or commodity photographer.
2. **Growth goal:** A site engineered to rank on Google for local photography search intent and convert visitors into booked inquiries.

If a tradeoff between the two comes up (an animation that hides the CTA, an SEO tactic that cheapens the aesthetic), **stop and flag it explicitly** rather than silently resolving it in either direction.

See `PRODUCT.md` (users, positioning, anti-references, design principles) and `DESIGN.md` (color tokens, type scale, component patterns) for the living reference on brand/design specifics — don't reinvent what's already decided there.

## Brand system (fixed — do not deviate without being told to)

- **Positioning:** genuine, story-driven, unposed moments over stiff formal photography. Serious artist, not a commodity vendor.
- **Palette:** cool elegance — ivory, sage, dusty blue, dark cinematic backgrounds for key moments.
- **Typography:** Cormorant Garamond (serif, headings) + Quicksand (sans-serif, body).
- **Visual treatments:** full-screen cinematic hero, parallax, film grain texture, glassmorphism, ambient radial glows, scroll-triggered animation, bento-grid layouts — an intentional blend of SaaS-pattern polish with editorial photography sensibility. Validated creative direction, not a tension to resolve toward "safer."
- **Primary CTA copy:** "Let's tell your story" — must appear at hero, mid-page, and footer on every page, minimum.
- **Voice split (intentional, keep separate):** the *website* is personal and artist-led (About/Meet Madyson section, Madyson by name). The Google Business Profile deliberately uses studio-level "we/our" language. Same facts, different tone — don't collapse them.
- **Aesthetic reference:** Kate Bonin Photography (editorial anchor — mood and restraint, not literal copying).

## Tech stack

- **Framework:** Astro (static-first, island architecture), vanilla CSS custom properties for theming, minimal JS islands only where genuinely needed (scroll-triggered animation, form handling, testimonial rotation). Rationale: real crawlable HTML per page (SEO), near-zero JS by default (mobile LCP budget), still supports the bento/glass/parallax visual language via CSS + light JS.
- **No client-side framework** (React SPA, etc.) for content pages — this is a separate, simpler stack from the `admin/` booking tool (Next.js), and intentionally so; they only share the visual design system, not the codebase.
- **Fonts:** `@fontsource/cormorant-garamond`, `@fontsource/quicksand`.
- **Sitemap:** `@astrojs/sitemap`, configured in `astro.config.mjs` to exclude `/client-login/` and the three reserved location-page slugs (see below) from the generated sitemap.
- **Domain:** `www.fableandframestudios.com` (plural "studios") — matches `astro.config.mjs`'s `site:`.

## Site architecture

```
/                                      Homepage
/about/                                Meet Madyson
/portfolio/                            Full portfolio (weddings, elopements, portraits, family)
/services/                             Services + starting pricing with value framing
/journal/                              Blog index (Astro content collection)
/journal/[slug]/                       Individual blog post
/contact/                               Inquiry form + booking process transparency
/client-login/                         Outbound link to the Pixieset client gallery — does not host gallery/proofing itself
/wedding-photography-the-woodlands/    Reserved slug — redirects to `/`, no content yet
/wedding-photography-conroe/           Reserved slug — redirects to `/`, no content yet
/wedding-photography-houston/          Reserved slug — redirects to `/`, no content yet
```

The three location pages are **intentionally reserved, not built out** — each is a stub that 301-redirects to the homepage (see `src/pages/wedding-photography-*/index.astro`) and is excluded from the sitemap. Do not add real content to them until there's genuine per-city portfolio material and venue specifics to fill them with — this is a standing project instruction, not an oversight.

## Goal 1 — SEO requirements (every page, not on request)

- Unique `<title>` + meta description (~150–160 chars) per page, written around real local search intent.
- Exactly one `<h1>` per page tied to primary local keyword intent; clean H2/H3 hierarchy beneath it.
- Descriptive, natural alt text on every portfolio/content image — never "IMG_2481," never keyword-stuffed.
- `LocalBusiness` + `Photographer` JSON-LD schema site-wide (`src/lib/schema.ts`), service area = Montgomery/The Woodlands/Conroe/Houston, `priceRange`, `aggregateRating` stubbed until real review data exists.
- Canonical tags, Open Graph + Twitter card meta, generated `sitemap.xml` + `robots.txt`.
- Weave service-area language naturally into copy/alt text/metadata on every page, not just the homepage — never keyword-stuff.

**Performance is a hard constraint:** sub-2.5s mobile LCP. WebP/AVIF + responsive `srcset` via Astro's built-in image optimization, lazy-load below-the-fold galleries, CSS-transform/opacity animation over JS layout changes, defer any scroll-trigger/counter libraries. If a design element risks blowing the LCP budget, flag it and propose a compressed alternative (e.g., poster-frame image instead of a heavy video hero) rather than silently shipping it heavy or silently downgrading the aesthetic.

## Goal 2 — Conversion requirements (every page)

- Primary CTA ("Let's tell your story") at hero, mid-page, and footer minimum.
- Contact form stays short for first touch (name, email, event type, date optional) — deeper qualification happens in a follow-up, never on the first form.
- `/services/` pricing always paired with value framing, never a bare number.
- Testimonials/social proof near decision points throughout (homepage, services, contact), not siloed in one section.
- Portfolio sections build toward a CTA — no dead-end galleries.
- `/contact/` includes response-time expectations ("We reply within 24 hours") and a brief booking-process outline.
- Real specificity wherever real facts exist (years shooting, service area, actual pricing) — flag placeholders clearly rather than inventing facts.

## Explicit scope boundaries

**Do NOT build:**
- Content for the three reserved location-page slugs (see above) until real per-city material exists.
- Gallery/proofing functionality — that's Pixieset's job; `/client-login/` just links out.
- A client-side app framework for content pages (that's what `admin/` is for).

If something outside this scope seems tempting to add "while you're in there," flag it instead of building it.

## Implementation Status (as of 2026-07-10)

The site is built and matches the architecture above: all core pages exist with real copy (no lorem ipsum), two journal posts are seeded (`elopement-or-wedding-how-to-choose.md`, `getting-married-near-montgomery-tx-venue-guide.md`), and the three location-page slugs are reserved as 301-redirect stubs exactly per the original brief.

**Not yet confirmed/verified in this pass** (this file was just established — the below is inherited status, not freshly re-audited line-by-line):
- Whether the sub-2.5s mobile LCP target has been measured against a real Lighthouse/PageSpeed run.
- Whether `LocalBusiness`/`Photographer` JSON-LD schema (`src/lib/schema.ts`) validates against real testing tools, and whether `aggregateRating` is still correctly stubbed rather than fabricated.
- The contact form's actual submission backend (brief calls for "a form-handling service or serverless function" — not yet confirmed which one is wired up, or if it's still a stub).
- **No git repository exists for this project yet** (unlike `admin/`, which is its own repo pushed to GitHub) — there's no commit history or remote to check changes against. Worth setting up before this diverges further from what's deployed.
- No `vercel.json`/`netlify.toml` is committed, so the actual deploy target/host for `www.fableandframestudios.com` hasn't been confirmed from this repo alone.

A `dist/` build output and `.astro` cache exist from at least one local build, but that doesn't confirm what's actually live at the production domain.

---

## Closing Out a Session ("Close this chat")

When the user says something like **"Close this chat"** (or an equivalent — "wrap this up," "close out this session"), treat it as a request to leave the project in a state where the next session (yours or a teammate's) can pick up cold, without re-deriving context from the raw conversation. Do this before ending the session:

1. **Review the conversation** for what actually changed or was decided — code shipped, content written, scope decisions made, things confirmed working vs. still open/uncertain. If nothing substantive happened (a pure Q&A session), say so briefly and skip the rest.
2. **Update this file's "Implementation Status" section** with a dated entry (`YYYY-MM-DD`) describing what shipped and why, following the pattern of the existing entry — append, don't rewrite history.
3. **Update the "not yet confirmed/verified" list**: remove anything just resolved or verified, add anything newly discovered.
4. **Write to the auto-memory system** (`~/.claude/projects/<workspace>/memory/`) anything that isn't derivable by re-reading the code — decisions and their reasoning, deadlines, external account/infra details, user preferences or corrections — using the existing `user` / `feedback` / `project` / `reference` memory types and the exclusions already documented in that system (don't duplicate what the code itself already shows). Update `MEMORY.md`'s index to point at anything new or changed.
5. **Summarize what you updated** (which file sections, which memory files) in your final message — don't close out silently.

This is what keeps this file and memory a living record instead of a stale snapshot from whenever the project started.
