# Image Shot List — Fable & Frame Studios

Every slot on the live site that currently renders a labeled `PlaceholderImage` (or is missing an asset entirely), what shape it needs to be, and what it should show. Send me full-resolution originals straight out of editing (JPG/PNG, no need to pre-resize or pre-compress) — Astro's image pipeline generates the AVIF/WebP + responsive sizes automatically at build time.

**General rule of thumb:** for any full-bleed hero, the long edge should be at least 2400px (more is fine — extra resolution just gets downsampled, it's never wasted). For grid/tile images, 1600–2000px on the long edge is enough. Landscape orientation with generous headroom above/below the main subject travels best, since most slots get cropped by `object-fit: cover` into a shape you won't fully control.

Two real photos already exist in the repo (`getaway-car-wedding.jpg`, `madyson-with-camera.png`) and are already placed on the homepage/about/portfolio hero — you don't need to replace those unless you want a different shot in that spot.

---

## Homepage (`/`)

| # | Slot | Shape | Content |
|---|------|-------|---------|
| 1 | Elopements category tile | Square (1:1), min 1200×1200 | An elopement moment — small/no-guest ceremony or an intimate outdoor couple shot, visually distinct from the wedding-barn hero already in place. |
| 2 | Portraits category tile | Square (1:1), min 1200×1200 | A couple or solo portrait session, natural light, candid rather than stiffly posed. |
| 3 | Family category tile | Wide (16:9), min 1920×1080 | A real family moment — motion, laughter, kids included — not a lined-up group pose. |

(Journal teaser images reuse the two journal post photos — see Journal section below.)

## About (`/about/`)

| # | Slot | Shape | Content |
|---|------|-------|---------|
| 4 | "Madyson at work on a wedding day" full-bleed strip | Ultra-wide (21:9), min 2400×1029 | Behind-the-scenes: Madyson actually shooting, camera up, mid-session — ideally someone *else's* candid of her working, not a posed camera-holding shot. This is the one image that has to visually prove "artist at work." |

## Portfolio (`/portfolio/`)

One tile already uses the real wedding hero photo. Nine more are placeholders:

| # | Category | Shape | Content |
|---|----------|-------|---------|
| 5 | Weddings | Portrait (4:5), min 1600×2000 | Second wedding moment — different from the hero (e.g. ceremony, reception detail, or a quiet in-between beat). |
| 6 | Weddings | Portrait (4:5), min 1600×2000 | Third wedding moment. |
| 7 | Elopements | Wide (16:9), min 1920×1080 | Elopement landscape/setting shot — the couple small in a real environment. |
| 8 | Elopements | Portrait (4:5), min 1600×2000 | Elopement close moment. |
| 9 | Elopements | Portrait (4:5), min 1600×2000 | Elopement close moment, second. |
| 10 | Portraits | Portrait (4:5), min 1600×2000 | Portrait session moment. |
| 11 | Portraits | *Flagged below* | Portrait session moment — this tile spans a 2×2 grid cell (roughly square on-screen) even though the code currently requests a 4:5 portrait crop for it. Shoot with enough width/headroom that it works cropped closer to square; I'll square up the aspect-ratio mismatch in code separately. |
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
