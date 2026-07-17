# Fable and Frame Studio — Marketing Site

> This file did not exist at the repo root until 2026-07-10 — the original build brief lived in `fable-frame-claude-code-prompt.md` (which explicitly says it's meant to double as `CLAUDE.md`) but was never copied/renamed here. A separate, misleadingly-named `CLAUDE (1).md` also sits at this root — that one is a stray copy of the **admin app's** original pre-build spec (unrelated to this marketing site), already marked superseded in its own header, and can be ignored. This file is the real one going forward.

## Role

You are acting as a senior brand-and-web engineer building/maintaining a production website for **Fable and Frame Studio**, a premium wedding/elopement/portrait/family photography business led by photographer Madyson Call, based in Montgomery, TX and serving The Woodlands, Conroe, and greater Houston.

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
- **Domain:** `www.fableandframestudio.com` (singular "studio" — corrected 2026-07-11; the original brief incorrectly assumed plural "studios" and this propagated through `astro.config.mjs`, `robots.txt`, and Vercel domain setup until caught) — matches `astro.config.mjs`'s `site:`.

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

### 2026-07-11 — Site went live

- **Git repo initialized** and pushed to GitHub (`spencerBetterBuilt/fable-and-frame`, public — matches `admin/`'s convention).
- **Deployed to Vercel** (team `better-built1`, project `fable-and-frame`), connected to the GitHub repo for auto-deploy on push. `vercel.json` added for true HTTP 301s on the three reserved location slugs (Astro's static `Astro.redirect()` alone only produces a meta-refresh, not a real 301).
- **Domain corrected: singular, not plural.** The original brief incorrectly assumed `fableandframestudios.com` (plural) — the actual registered domain is `fableandframestudio.com` (singular "studio"), confirmed against the live pre-existing site, the business email, and the Mailchimp audience name. Fixed in `astro.config.mjs`, `robots.txt`, and this file; wrong Vercel domain entries removed and replaced. Domain is Cloudflare-DNS-managed; DNS now points at Vercel (CNAME `@` and `www` → `c0abed4b8398d2c0.vercel-dns-017.com`, unproxied) and is live and verified.
- **Contact form wired to Formspree** (Projects/CLI-based, not the classic dashboard form — see `formspree.json`), with a real email-notification action to `mady@fableandframestudio.com`. Verified end-to-end with a live test submission (200, `{"ok":true}`). A hidden `tags` field pre-wires Mailchimp tagging into the existing "Main Contact Form" segment, but the Mailchimp action itself is **not** active — Formspree's current plan doesn't support the Mailchimp plugin, and Spencer chose to defer that decision rather than upgrade now.
- **Real pricing added** to all four service tiers: Weddings $3,000, Family $350 (pulled directly from the old live site's pricing page), Elopements $400, Portraits $275 (confirmed directly with Spencer, since the old site's categories — Wedding/Engagement/Family — don't map 1:1 onto the new site's four tiers; "Engagement" ≠ "Elopement" conceptually).
- **Fixed literal placeholder text that was live in production**: Footer and `schema.ts` were rendering `[PLACEHOLDER EMAIL ADDRESS]`/`[PLACEHOLDER PHONE NUMBER]` verbatim. Now real: `mady@fableandframestudio.com`, `(281) 907-3327`.
- **`/client-login/` rewritten**: it previously linked to a guessed, unconfirmed Pixieset subdomain. There's no single client-portal URL yet (each shoot gets its own individual gallery link) — copy now honestly points people to `/contact/` instead of a fabricated link. Pixieset does support a "Homepage" client-portal feature at `<username>.pixieset.com` that could replace this with a real link — unconfirmed whether Madyson has it toggled on or what her username is.
- **GA4 added** site-wide via `gtag.js` in `BaseLayout.astro` (`G-M3JX8FX4BT`), loaded `async`/`is:inline` so it doesn't block the LCP path.
- **Meta descriptions tightened** on 4 pages (home/about/contact/services) that were running 168–186 characters down to the ~150–160 target.
- **Open naming question, not yet resolved:** the old live site's actual page title and footer copyright both read "Fable and Frame **Studio**" (singular), not "Studios" — matching the now-confirmed singular domain. This new site's brand references (page titles, `schema.ts` business `name`, footer copyright, `PRODUCT.md`/`DESIGN.md`) are all still "Fable & Frame **Studios**" (plural). Only the *domain* was corrected this session per explicit instruction — whether the brand name itself should also be singular has not been asked or resolved. Worth confirming with Spencer before assuming either way.

### 2026-07-16 — Brand name resolved: "Fable and Frame Studio," no ampersand, singular

Spencer confirmed the display brand name should drop the ampersand entirely and go singular, matching the domain's literal spelling — not "Fable & Frame Studios," but **"Fable and Frame Studio."** Rationale: NAP (Name/Address/Phone) consistency across domain, on-page brand references, and future Google Business Profile listing is a real local-pack SEO ranking factor, and this closes that specific inconsistency (see `GOAL.md`, added same day, for the broader SEO-first priority this was pulled from).

Updated everywhere the brand name appeared: `schema.ts` (`name` + `description` fields), `Nav.astro` and `Footer.astro` (site mark + copyright), every page's `<title>`/meta description (`index`, `about`, `portfolio`, `services`, `contact`, `client-login`, `journal/index`, `journal/[slug]`), the `about` hero alt text, one in-copy mention on `/services/`, one in-copy mention in the `elopement-or-wedding-how-to-choose` journal post, and this file's own title/role line, plus `PRODUCT.md`, `DESIGN.md`, and `IMAGE-SHOTLIST.md`'s headers. The primary CTA copy ("Let's tell your story") is unrelated to this and was untouched. Left alone: `fable-frame-claude-code-prompt.md` (archival original brief, not a living doc) and `CLAUDE (1).md` (already marked superseded, unrelated admin-app scope, per this file's own opening note).

**Not yet done:** Google Business Profile (once it exists) and any other external listings (directories, Pixieset, social bios) should match this exact spelling when set up — not yet audited since most don't exist yet.

**Not yet confirmed/verified**:
- Whether the sub-2.5s mobile LCP target has been measured against a real Lighthouse/PageSpeed run.
- Whether `LocalBusiness`/`Photographer` JSON-LD schema (`src/lib/schema.ts`) validates against real schema-testing tools, and whether `aggregateRating` is still correctly stubbed rather than fabricated.
- Real photography — most portfolio/hero/tier slots are still explicitly-labeled placeholders. Full shot list with dimensions/content briefs lives in `IMAGE-SHOTLIST.md`.
- Real testimonials — every `Testimonial` instance still renders an explicit "pending" placeholder; no real client quotes exist yet.
- Pixieset client-portal username/toggle (see above) — needed before `/client-login/` can link anywhere real.
- Mailchimp — deliberately deferred by Spencer; plan upgrade needed before the existing hidden `tags` field does anything.
- Fast-follow, not yet started: Spencer wants subtle, premium Webflow-style micro-animations/interactions added in a future pass — explicitly flagged as a later polish task, not part of this launch.

---

## Closing Out a Session ("Close this chat")

When the user says something like **"Close this chat"** (or an equivalent — "wrap this up," "close out this session"), treat it as a request to leave the project in a state where the next session (yours or a teammate's) can pick up cold, without re-deriving context from the raw conversation. Do this before ending the session:

1. **Review the conversation** for what actually changed or was decided — code shipped, content written, scope decisions made, things confirmed working vs. still open/uncertain. If nothing substantive happened (a pure Q&A session), say so briefly and skip the rest.
2. **Update this file's "Implementation Status" section** with a dated entry (`YYYY-MM-DD`) describing what shipped and why, following the pattern of the existing entry — append, don't rewrite history.
3. **Update the "not yet confirmed/verified" list**: remove anything just resolved or verified, add anything newly discovered.
4. **Write to the auto-memory system** (`~/.claude/projects/<workspace>/memory/`) anything that isn't derivable by re-reading the code — decisions and their reasoning, deadlines, external account/infra details, user preferences or corrections — using the existing `user` / `feedback` / `project` / `reference` memory types and the exclusions already documented in that system (don't duplicate what the code itself already shows). Update `MEMORY.md`'s index to point at anything new or changed.
5. **Summarize what you updated** (which file sections, which memory files) in your final message — don't close out silently.

This is what keeps this file and memory a living record instead of a stale snapshot from whenever the project started.
