---
name: Fable and Frame Studio
description: Editorial wedding/elopement/portrait photography site — cool, muted elegance with rare dark-cinematic moments
colors:
  ivory: "oklch(97% 0.006 85)"
  ivory-deep: "oklch(94% 0.008 85)"
  ink: "oklch(24% 0.01 85)"
  sage: "oklch(72% 0.045 150)"
  sage-deep: "oklch(38% 0.035 150)"
  dusty-blue: "oklch(68% 0.04 240)"
  dusty-blue-deep: "oklch(32% 0.03 240)"
  cinematic-dark: "oklch(16% 0.012 250)"
  cinematic-dark-deep: "oklch(10% 0.01 250)"
  ivory-on-dark: "oklch(95% 0.008 85)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "normal"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
  body:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Quicksand, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 40px"
  button-primary-hover:
    backgroundColor: "{colors.cinematic-dark}"
    textColor: "{colors.ivory}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 40px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  input-field:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
---

# Design System: Fable and Frame Studio

## 1. Overview

**Creative North Star: "The Golden Hour Archive"**

The feeling of leafing through a beautifully kept film archive at golden hour: warm, nostalgic, unhurried, restrained. Critically, that warmth lives in the *photography and the grain*, not in the UI chrome — the brand system's palette is fixed as cool elegance (ivory, sage, dusty blue, dark cinematic), and this system does not shift it warmer to chase the metaphor literally. The nostalgia comes from generous negative space, serif type set like a printed caption, film grain texture, and letting Madyson's actual images carry the golden-hour light. The chrome stays quiet so the photographs stay loud.

This system explicitly rejects generic SaaS/startup landing-page tropes: no gradient-heavy hero treatments, no icon-grid feature lists, no hero-metric stat blocks (big number + label + supporting stats), no gradient text, and no glassmorphism used as default decoration. Where the brief calls for SaaS-adjacent structural patterns (bento-grid, ambient glow, glassmorphism), they're retained only as organizational tools or rare accents in service of the photography — never as the generic patterns above.

**Key Characteristics:**
- Cool, muted, low-chroma palette (ivory / sage / dusty blue) as the resting state across nearly every page
- Dark cinematic sections reserved for hero and a small number of key emotional moments — never the default
- Serif display type (Cormorant Garamond) carries all emotional weight; sans body (Quicksand) stays quiet and functional
- No shadows, no soft SaaS-bubble rounding; flat, tonal, editorial, rectangular
- Film grain and rare ambient glow as the only atmosphere effects — used deliberately, not everywhere
- Photography-led, copy-minimal: a full-bleed hero photo is close to mandatory on every page, and any section built around imagery spans the full viewport width rather than sitting boxed inside the text column. Copy is trimmed to only what a photo can't say on its own.

**The Photo, Not the Paragraph Rule.** If a section could be replaced by a bigger, better photo and a shorter caption, do that instead. This is a portfolio site; the imagery is the product being sold, not the prose describing it.

## 2. Colors

Full palette strategy: several named roles, each used deliberately, muted and desaturated (filmic, not jewel-toned) so the photography — not the chrome — carries the color.

### Primary
- **Ink** (`oklch(24% 0.01 85)`): primary text and primary button fill on light sections. A warm-tinted near-black, never pure `#000`.

### Secondary
- **Sage** (`oklch(72% 0.045 150)`): muted, desaturated green. Secondary accents — dividers, tags, hover underlines, active nav state.
- **Sage Deep** (`oklch(38% 0.035 150)`): sage's text-safe counterpart — icon strokes, small labels on ivory.

### Tertiary
- **Dusty Blue** (`oklch(68% 0.04 240)`): muted blue-grey. Secondary form focus states, secondary tag category, alternates with sage so no single accent dominates.
- **Dusty Blue Deep** (`oklch(32% 0.03 240)`): text-safe counterpart for links and small UI on ivory.

### Neutral
- **Ivory** (`oklch(97% 0.006 85)`): primary page background. Warm-tinted paper, not stark white. Carries a faint paper-grain texture (see Surface Texture below) rather than rendering as a flat, dead fill.
- **Ivory Deep** (`oklch(94% 0.008 85)`): secondary surface — alternating section backgrounds, subtle card/tile separation without a shadow.
- **Cinematic Dark** (`oklch(16% 0.012 250)`): reserved background for hero and key emotional moments (About's opening, a pivotal journal pull-quote, the final contact CTA). Cool-tinted near-black.
- **Cinematic Dark Deep** (`oklch(10% 0.01 250)`): footer and the darkest recesses of a cinematic section, for depth without a shadow.
- **Ivory on Dark** (`oklch(95% 0.008 85)`): text color whenever content sits on Cinematic Dark.

### Surface Texture
Flat-white or flat-Ivory text sections are treated as a bug, not restraint. Every Ivory / Ivory Deep section carries a very faint (2–3% opacity) fractal-noise paper-grain texture — the same noise mechanism as the hero's film grain, just far quieter — so text-only sections read as a printed page, not a CSS fill. Cinematic Dark sections keep their own (slightly stronger, 4–6%) grain per Components §"Film Grain Layer." Never use a photographic or patterned background image behind body text; the grain is texture, not decoration.

### Named Rules
**The Golden Hour Lives In The Photos Rule.** Warmth is delivered by imagery, grain, and serif type — never by nudging the palette toward amber or gold. If a section feels like it needs more warmth, fix it with a better photograph or more generous whitespace, not a new color.

**The One Frame Rule.** Cinematic Dark is a small number of *frames*, not a mode. Budget it like a film director budgets a color grade shift: hero, and at most two or three additional moments per page. If it starts appearing more often than that, it has stopped being a moment.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** Quicksand (with system-ui, sans-serif fallback)

**Character:** A restrained editorial pairing — Cormorant Garamond's high-contrast serif strokes read as printed and considered for anything emotional (headlines, pull-quotes, the primary CTA line), while Quicksand's soft geometric sans stays out of the way for anything functional (body copy, labels, nav, form fields).

### Hierarchy
- **Display** (400, `clamp(2.75rem, 6vw, 5rem)`, 1.05): Hero H1s and the biggest single statement per page. One per page, always.
- **Headline** (500, `clamp(1.75rem, 3.5vw, 2.75rem)`, 1.15): Section H2s (e.g. "Meet Madyson", portfolio category headers, journal post titles).
- **Title** (600, 1.125rem, 1.4, Quicksand): H3s and card/tile titles — sits below Headline, still sans, slightly heavier weight than body to carry hierarchy without switching families.
- **Body** (400, 1rem, 1.65, Quicksand): Paragraph copy. Capped at 65–75ch measure; never full-bleed text blocks.
- **Label** (500, 0.8rem, 1.4, 0.08em letter-spacing, Quicksand, uppercase): Nav items, button text, form field labels, category tags.

### Named Rules
**The Serif-For-Feeling Rule.** Cormorant Garamond only appears where the content is meant to land emotionally (headlines, pull-quotes, the CTA line "Let's tell your story"). It never appears in body copy, form fields, or nav — those stay Quicksand. Mixing the two inside a single block of text is forbidden.

## 4. Elevation

Flat by default. No `box-shadow` anywhere in the system — depth is conveyed through tonal contrast (Ivory vs. Ivory Deep vs. Cinematic Dark) and, in the rare cases that call for it, a soft ambient radial glow behind a hero element or CTA. Glassmorphism (translucent blur panels) is not a default surface treatment; it appears at most once per page, on the nav bar when it sits over a hero image, and nowhere else.

### Shadow Vocabulary
- **Ambient Glow** (`background: radial-gradient(ellipse at center, oklch(72% 0.045 150 / 0.18), transparent 70%)`, applied as a pseudo-element behind an element, never a `box-shadow`): the only "lift" effect in the system. Used behind the primary hero CTA and behind pull-quote moments in Cinematic Dark sections. Never behind portfolio tiles or cards — those stay flat.

### Named Rules
**The Flat-By-Default Rule.** If you reach for a `box-shadow`, stop — use a tonal background shift (Ivory → Ivory Deep) instead. The only exception is the Ambient Glow above, and it is a glow, not a shadow.

## 5. Components

### Buttons
- **Shape:** Rectangular, no rounding (`0px`). Soft-rounded "SaaS bubble" buttons are explicitly rejected.
- **Primary:** Ink background, Ivory text, Label typography, `18px 40px` padding. This is the "Let's tell your story" CTA everywhere it appears (hero, mid-page, footer).
- **Primary Hover:** Background shifts Ink → Cinematic Dark, no scale/transform — a tonal deepening, not a bounce.
- **Ghost:** Transparent background, Ink text, 1px Ink border. Used for secondary actions ("View full portfolio") that shouldn't compete with the primary CTA.
- **On Dark:** Invert to Ivory background / Ink text (primary) or Ivory 1px border / Ivory text (ghost) whenever a button sits on a Cinematic Dark section.

### Cards / Portfolio Tiles
- **Corner Style:** None (`0px`) — photography reads as printed frames, not app cards.
- **Background:** Ivory or Ivory Deep; no border, no shadow.
- **Layout:** Bento-grid for portfolio organization — tiles vary meaningfully in size/span by image orientation and emotional weight (a hero shot spans 2x2, supporting shots span 1x1). Uniform same-size grids are forbidden; that reads as the generic "identical card grid" pattern, not an editorial bento layout.
- **Hover:** A slow (400ms+, ease-out-quart) opacity/scale-free crop reveal or grain-intensity shift — never a shadow pop or lift-on-hover.

### Inputs / Fields
- **Style:** Ivory background, 1px Sage Deep border at rest, `2px` radius, `14px 16px` padding, Body typography.
- **Focus:** Border shifts to Dusty Blue Deep, no glow/shadow — a color shift is the only focus signal besides the browser's native focus-visible outline (never removed).
- **Error:** Border shifts to a desaturated version of Ink (not a new red hue introduced) with inline text below the field — never a color-only signal.

### Navigation
- Transparent over the hero, Label typography, Ivory text on the initial dark/image hero; crossfades to an Ivory background with Ink text once scrolled past the hero. This is the one sanctioned glassmorphism moment (a subtle blur on the transparent state for legibility over moving imagery) — nowhere else in the system.
- Mobile: full-height overlay menu on Cinematic Dark, Display typography for the link list (this is the one place Display appears in a menu context, because it's functioning as a title moment, not body nav).

### Full-Bleed Hero (signature component)
- Every page opens with a full-viewport-width photo hero unless there is a specific, stated reason not to (a pure-utility page like Client Login is the only sanctioned exception). Height: `100vh` on the homepage, `60–80vh` on interior pages where the hero doesn't need to hold as much text.
- Structure: full-bleed `<Picture>` (object-fit: cover) → bottom-anchored scrim gradient for text legibility → optional quiet grain layer → H1 + one line of supporting copy, max.
- Where no real photograph exists yet for a given page, use the same full-bleed treatment with a Placeholder Image filling the frame — never fall back to a plain text-only header. Flag the missing photo; don't skip the hero shape.

### Full-Bleed Image Section
- Any section whose job is to show photography (a portfolio moment, a mid-page gallery break, a single decisive image) spans the full viewport width — `width: 100vw; margin-left: calc(50% - 50vw)` breakout from the content column — never boxed inside the 1200px `.wrap` container.
- Caption or label text sitting on top of a full-bleed image follows the same scrim + Label-typography treatment as the hero, not a separate pattern.

### Film Grain Layer (signature component)
- A fixed, low-opacity (4–6%) noise texture overlay on Cinematic Dark sections and full-bleed hero imagery, applied via a single shared CSS layer (not per-image), GPU-cheap, and disabled entirely under `prefers-reduced-motion` or `prefers-reduced-data` if any animated-grain variant is ever used. Static grain (a repeating background texture) is always the safe default; do not animate it unless there's a specific reason and a measured performance budget for it.

## 6. Do's and Don'ts

### Do:
- **Do** open nearly every page with a full-bleed hero photo (or an explicitly-flagged placeholder standing in for one) — text-only page openers are the fallback, not the default.
- **Do** let any section built around imagery span the full viewport width; only text-centric sections stay inside the 1200px content column.
- **Do** cut copy to the minimum needed to explain the point — if a bigger photo and a shorter caption would do the job, use that instead of another paragraph.
- **Do** apply the faint paper-grain texture to every flat Ivory/Ivory Deep section so text-only areas don't read as a dead CSS fill.
- **Do** keep the palette resting state cool and muted (Ivory / Sage / Dusty Blue) on nearly every page; let the photographs supply color variety.
- **Do** budget Cinematic Dark like a rare color-grade shift — hero plus a small, countable number of moments per page (The One Frame Rule).
- **Do** vary bento-grid tile sizes meaningfully by image orientation and emotional weight; never repeat a uniform grid.
- **Do** use tonal background shifts (Ivory → Ivory Deep → Cinematic Dark) for all depth; reserve Ambient Glow for the primary CTA and rare pull-quote moments only.
- **Do** keep Cormorant Garamond exclusive to emotional moments (headlines, pull-quotes, the CTA line) and Quicksand everywhere functional.

### Don't:
- **Don't** ship a text-only header on a content page without a specific, stated reason — the Full-Bleed Hero is the default.
- **Don't** leave a text section on flat, textureless Ivory — every light section carries the faint paper-grain.
- **Don't** write a second paragraph to explain what a better photo and a one-line caption already would.
- **Don't** introduce a gradient-heavy hero, gradient text, an icon-grid feature list, or a hero-metric stat block (big number + label + supporting stats) — these are the SaaS/startup-landing-page tropes this system explicitly rejects.
- **Don't** use glassmorphism as a default card or section treatment — it is sanctioned in exactly one place (the nav bar over the hero) and nowhere else.
- **Don't** add a `box-shadow` anywhere; use a tonal shift or the Ambient Glow instead.
- **Don't** round corners on buttons, tiles, or cards beyond the `2px` reserved for form inputs — the editorial, printed-frame feel depends on rectangular shapes.
- **Don't** shift the palette warmer (amber/gold) to chase the "Golden Hour" north star literally — that warmth belongs to the photography and grain, not the UI chrome.
- **Don't** use a `border-left`/`border-right` colored stripe as an accent on any card, tag, or callout.
- **Don't** animate layout properties (width, height, top/left) for scroll or hover effects; use transform/opacity only, and respect `prefers-reduced-motion` everywhere choreographed motion appears.
