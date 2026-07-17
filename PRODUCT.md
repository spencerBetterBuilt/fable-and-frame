# Product

## Register

brand

## Users

Engaged couples, eloping couples, and families in Montgomery, TX and the greater Houston area (The Woodlands, Conroe) researching wedding, elopement, portrait, or family photographers. High-stakes, one-shot purchase category — most arrive via mobile search with local intent, comparing a handful of photographers before making a booking decision they can't redo. They're evaluating both the photographer's artistic sensibility (does this feel like "us") and practical trust signals (pricing clarity, responsiveness, real reviews) before reaching out.

## Product Purpose

A production website for Fable and Frame Studio (photographer Madyson Call) that ranks locally on Google for photography search intent and converts visitors into booked inquiries — without looking or feeling like a commodity vendor. Success is measured on two fronts simultaneously: emotionally compelling enough to feel like a serious photographic artist's site, and structurally engineered (SEO + performance + conversion paths) to actually generate qualified inquiries.

## Brand Personality

Genuine, story-driven, unposed — a serious photographic artist, not a stiff formal vendor. Premium and emotionally powerful, with editorial restraint (Kate Bonin Photography as the mood/tone anchor, not a literal template). Voice is intentionally split by surface: the website itself is personal and artist-led (Madyson by name and personality), while the Google Business Profile deliberately uses studio "we/our" language — same facts, different tone by design.

## Anti-references

Generic SaaS/startup landing page tropes bleeding into the editorial photography aesthetic: gradient-heavy hero sections, icon-grid feature lists, hero-metric stat blocks (big number + label + supporting stats), gradient text as decoration, glassmorphism used as default decoration rather than a rare purposeful accent.

Note: the project brief separately calls for bento-grid layouts, ambient radial glows, and glassmorphism as part of an intentional "SaaS-polish meets editorial photography" blend. That blend is retained for structural/organizational patterns (e.g., bento-grid for portfolio organization) and rare, purposeful accents — but not for the generic tropes above (icon-grid feature cards, hero-metric blocks, gradient text, decorative glass-everywhere). Flagged here explicitly since it's a real tension between two inputs, not silently resolved in either direction.

## Design Principles

- Photography-first, copy-minimal: the site sells photography, so imagery carries the story and copy exists only to explain what a photo can't. A full-bleed hero photo is close to mandatory on every page — a text-only page opener is a fallback, not the default. Every image-driven section should span full viewport width, not sit boxed inside the text column.
  - **Tension worth tracking:** this pushes hard against the "no stock photography" instruction, since only two real photos exist in this repo right now. Until Madyson supplies more real work, most hero/section slots have to run as explicitly-labeled full-bleed placeholders rather than reused or stock imagery — treat "get more real photos" as a top content priority, not a nice-to-have.
- Brand (emotional, premium, artist-led) and Growth (local SEO + conversion) are equally weighted goals. Never let one quietly win — if a choice trades one against the other (an animation that hides the CTA, an SEO tactic that cheapens the aesthetic), flag it explicitly rather than resolving it silently.
- Keep the two brand voices separate by design: personal/Madyson-led on-site, studio "we/our" on the Google Business Profile. Same facts, different tone — don't collapse them.
- Editorial restraint over generic SaaS polish: use structural patterns (bento organization, rare glass/glow accents, parallax, film grain) in service of the photography, never as decoration that could belong to any startup landing page.
- Real specificity, never invented facts: use actual pricing ranges, years shooting, named service areas where known; clearly flag placeholders (fake testimonials, invented numbers, vague "best in Texas" language) rather than fabricating them.
- Performance is a hard constraint, not a nice-to-have: sub-2.5s mobile LCP. If a design element risks blowing that budget, propose a concrete compressed alternative (e.g., poster-frame image standing in for a heavy video hero) instead of silently shipping it heavy or silently downgrading the aesthetic.

## Accessibility & Inclusion

WCAG AA baseline. Respect `prefers-reduced-motion` for parallax, scroll-triggered animation, and any counter/testimonial rotation. Forms must be fully keyboard-navigable with visible focus states. No motion-only affordances (e.g., hover-reveal information with no keyboard/touch equivalent).
