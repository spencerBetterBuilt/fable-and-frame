# Image Shot List — Fable and Frame Studio

Every slot on the live site that currently renders a labeled `PlaceholderImage` (or is missing an asset entirely), what shape it needs to be, and what it should show. Send me full-resolution originals straight out of editing (JPG/PNG, no need to pre-resize or pre-compress) — Astro's image pipeline generates the AVIF/WebP + responsive sizes automatically at build time.

**General rule of thumb:** for any full-bleed hero, the long edge should be at least 2400px (more is fine — extra resolution just gets downsampled, it's never wasted). For grid/tile images, 1600–2000px on the long edge is enough. Landscape orientation with generous headroom above/below the main subject travels best, since most slots get cropped by `object-fit: cover` into a shape you won't fully control.

Two real photos already exist in the repo (`getaway-car-wedding.jpg`, `madyson-with-camera.png`) and are already placed on the homepage/about/portfolio hero — you don't need to replace those unless you want a different shot in that spot.

**2026-07-16:** Three more homepage slots filled with real photos from Mady (see table below for what shipped in each). Two other candidates Spencer initially gathered (`Family Portrait.webp`, a posed extended-family group shot, and `Portrait.webp`, a red-backdrop fashion/beauty shot with a cherry prop) were reviewed and **not used** — the family shot didn't match the "candid, not lined-up" brief and the portrait shot's saturated commercial-fashion mood didn't match the brand's editorial-restraint identity. Neither file was added to the repo.

**Open item worth tracking:** the former "Elopements" homepage tile now shows an engagement-ring-reveal photo and is labeled "Engagements" — but `/services/` (priced tier) and `/portfolio/` (filter + category) still say "Elopements," and there's still no real elopement photo in the repo. This was a deliberately narrow, homepage-only change (Spencer's call) — the taxonomy question (does "Engagements" become a real fifth category, replace "Elopements" everywhere, or stay a homepage-only label) is still open.

---

## Homepage (`/`)

| # | Slot | Shape | Content | Status |
|---|------|-------|---------|--------|
| 1 | Engagements category tile *(was "Elopements")* | Square (1:1), min 1200×1200 | ~~An elopement moment~~ — **filled 2026-07-16** with `engagement-ring-reveal.webp`, a real engagement-ring-reveal/kiss photo from Mady. Still no real *elopement* photo in the repo — see open item above. | Done (recategorized) |
| 2 | Portraits category tile | Square (1:1), min 1200×1200 | A couple or solo portrait session, natural light, candid rather than stiffly posed. **Filled 2026-07-16** with `airplane-cockpit-portrait.webp` (black-and-white editorial portrait). | Done |
| 3 | Family category tile | Wide (16:9), min 1920×1080 | A real family moment — motion, laughter, kids included — not a lined-up group pose. **Filled 2026-07-16** with `candid-family-van.webp` (black-and-white candid shot). | Done |

(Journal teaser images reuse the two journal post photos — see Journal section below.)

## About (`/about/`)

| # | Slot | Shape | Content |
|---|------|-------|---------|
| 4 | "Madyson at work on a wedding day" full-bleed strip | Ultra-wide (21:9), min 2400×1029 | Behind-the-scenes: Madyson actually shooting, camera up, mid-session — ideally someone *else's* candid of her working, not a posed camera-holding shot. This is the one image that has to visually prove "artist at work." |

## Portfolio (`/portfolio/`)

One tile already uses the real wedding hero photo. Nine more are placeholders. The "portrait (4:5)" labels below are a floor, not exact — the actual grid cell runs closer to square on most screens, so shoot loose rather than tight-cropped.

| # | Category | Shape | Content |
|---|----------|-------|---------|
| 5 | Weddings | Portrait (4:5), min 1600×2000 | Second wedding moment — different from the hero (e.g. ceremony, reception detail, or a quiet in-between beat). |
| 6 | Weddings | Portrait (4:5), min 1600×2000 | Third wedding moment. |
| 7 | Elopements | Wide (16:9), min 1920×1080 | Elopement landscape/setting shot — the couple small in a real environment. |
| 8 | Elopements | Portrait (4:5), min 1600×2000 | Elopement close moment. |
| 9 | Elopements | Portrait (4:5), min 1600×2000 | Elopement close moment, second. |
| 10 | Portraits | Portrait (4:5), min 1600×2000 | Portrait session moment. |
| 11 | Portraits | Near-square to landscape (varies by screen size — see note) | Portrait session moment, this is the "hero" tile of the grid (spans a 2×2 cell). Shoot loose rather than a tight head-to-waist crop — this tile's actual on-screen shape shifts from roughly square on desktop to noticeably taller on mobile, so it needs margin on all sides to survive being cropped differently at different widths. |
| 12 | Family | Wide (16:9), min 1920×1080 | Family session, wide/environmental. |
| 13 | Family | Portrait (4:5), min 1600×2000 | Family session, closer moment. |

## Services (`/services/`)

| # | Slot | Shape | Content |
|---|------|-------|---------|
| 14 | Services hero | Full-bleed landscape, min 2400px wide | General premium mood shot for the pricing page — could reuse a strong portfolio image once you've sent one, doesn't need to be a dedicated new shoot. |
| 15–18 | 4 tier photos (Weddings / Elopements / Portraits / Family) | Portrait (4:5), min 1200×1500 each | One best-foot-forward photo per category — these can simply reuse the corresponding portfolio photos above rather than needing four separate net-new shots. |

## Contact (`/contact/`)

| # | Slot | Shape | Content |
|---|------|-------|---------|
| 19 | Contact hero | Full-bleed landscape, min 2400px wide | Warm and personal — this is the last thing someone sees before filling out the form, so it should read as inviting/trustworthy rather than just "one more wedding photo." A Madyson-forward or genuinely warm candid works well here. |

## Journal (`/journal/` + individual posts)

| # | Slot | Shape | Content |
|---|------|-------|---------|
| 20 | Journal index hero | Full-bleed landscape, min 2400px wide | A quieter, more editorial mood shot for the planning-notes section — a detail shot (invitation suite, rings, notebook) reads better here than a full wedding scene. |
| 21 | Post: "Elopement or Wedding?" | Used at 3 sizes (16:10 homepage teaser, 4:3 index card, full-bleed post hero) — min 2400px wide covers all three | Per the post's own alt text: couple holding hands, wedding rings visible, shadows cast on green grass. |
| 22 | Post: "Getting Married Near Montgomery, TX" | Same 3 reuse contexts as above | Per the post's own alt text: long reception table set outdoors with wildflower centerpieces and linen napkins. |

---

## Found while compiling this list — not photo shoots, but launch blockers worth flagging

- **Social share image is a broken reference right now.** Both `Seo.astro` (Open Graph/Twitter card meta) and `schema.ts` (LocalBusiness JSON-LD) point to `public/images/fable-and-frame-og.jpg` — that file doesn't exist anywhere in the repo. Anyone who shares the site link on social/iMessage/Slack today gets a broken preview image. Needs a real 1200×630 image before launch (can be a strong hero photo with the wordmark, once real photos are in).
- **`FableandFrame.png`** (1000×1000) sits unused at the repo root. Is this a logo mark? If so it's a natural candidate to build the OG image and favicon variants from — let me know if that's the intent or if it's a stray export.
- **Not images, but same "placeholder" category** — worth having on your radar alongside photos: all 4 service tiers still show literal `[Starting price — TBD]`, and every testimonial slot (homepage ×2, about, services, contact) renders an explicit "real testimonial — pending" placeholder rather than a quote. Real pricing and at least one or two real testimonials will matter as much as the photos for the site feeling finished.
