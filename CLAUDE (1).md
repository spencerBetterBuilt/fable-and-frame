> **Superseded — see [`admin/CLAUDE.md`](./admin/CLAUDE.md).** This was the original pre-build spec (dropped at the repo root). The admin tool has since been built in `admin/` as its own Next.js app, and `admin/CLAUDE.md` is the corrected, up-to-date version of this file plus an "Implementation Status" section documenting what was actually built, key decisions, and known limitations. Left here for history — don't use this copy as the source of truth (it still has the domain typo fixed below, but nothing else that changed during the build).

# Fable & Frame Studios — Booking & CRM Admin Tool (V1)

## Anchor Goal

Build a working V1 web app, deployed at **admin.fableandframestudios.com** (plural "studios" — matches the registered domain, `astro.config.mjs`'s `site:` and the Pixieset client-login link), that lets Fable & Frame Studios (photographer Madyson Call) do three things end-to-end:

1. **Publish available session slots** and let the public **book a time slot, submit their info, and pay a deposit via Stripe Checkout** on a branded booking page.
2. **Track every lead/booking through a simple pipeline** (`Inquired → Booked → Paid → Contract Sent → Shot → Delivered`) in a password-protected admin dashboard.
3. **Hand off contract signing to Pixieset** — this tool does not host or manage e-signatures; after payment, the client is pointed to a Pixieset contract link (manually attached per booking by Madyson/Spencer in V1).

This is being built to replace an ad-hoc Google Form + spreadsheet workflow that broke down under a viral surge of 100+ pet mini-session inquiries. The immediate real-world use case is **pet-themed mini portrait sessions**, but the data model and UI should be generic enough to reuse for other fixed-concept session types later (not weddings — weddings stay a manual/custom process).

This is a small, low-stakes internal tool for a two-person creative business (not a commercial SaaS product). Favor simple, working, and maintainable over robust or "enterprise-correct." Do not over-engineer auth, roles, or infrastructure.

**Definition of done for this first pass:** a person can visit the booking page, pick a slot, fill out the form, get redirected to Stripe Checkout (test mode is fine), and land on a confirmation page — and a separate admin login can view that lead sitting in the pipeline with correct status. Payment webhook wiring, Pixieset link-attachment, and production Stripe keys will be connected in a follow-up pass — stub these clearly rather than blocking the build on them.

---

## Tech Stack

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS, using the design tokens defined below (do not invent new colors/fonts)
- **Database:** SQLite via Prisma ORM for V1 (simple, file-based, zero external setup; easy to swap for Postgres later if this grows)
- **Payments:** Stripe Checkout (hosted page — do not build custom card fields, do not touch raw card data)
- **Auth (admin only):** Simple password-gated session (e.g. a single shared admin password + signed cookie session). No user roles, no multi-user permissions, no OAuth. This is not client-facing security-sensitive data — keep it lightweight.
- **Deployment target:** Vercel (or wherever the main Astro marketing site is hosted — match that platform if there's an existing account/preference)
- **Email:** Stub only in V1 — log intended emails to console with a clear `// TODO: wire up transactional email (Resend or similar)` comment rather than integrating a provider now.

This app is a **separate deployable** from the main Astro marketing site — different subdomain, different framework, no shared build pipeline. It only needs to share the visual design system, not the codebase.

---

## Design System (reuse, don't reinvent)

Pull colors, typography, spacing, and component styles from the project's existing `DESIGN.md`. Key constraints for this tool specifically:

**Public booking page** (client-facing — must feel on-brand):
- Ivory/sage/dusty-blue palette, Cormorant Garamond for headings, Quicksand for body/labels/buttons — same as the marketing site.
- Reuse the primary button style (Ink background, Ivory text, rectangular, no rounding) for the CTA ("Book This Session" / "Continue to Payment").
- Keep it simple and single-column — this is a functional booking flow, not a hero-driven marketing page. Skip film grain, parallax, and ambient glow entirely here; those are marketing-site-only treatments. Flat, clean, and fast is correct for this page.

**Admin dashboard** (internal tool — utilitarian is fine):
- Reuse the color palette and typography for consistency, but this can be a standard data-table-and-form UI. Do not over-invest in polish here — clarity and speed of use for Madyson matter more than editorial styling. A clean table, status badges, and simple forms are enough.

---

## Data Model (Prisma schema, V1)

```prisma
model Lead {
  id          String   @id @default(cuid())
  name        String
  email       String
  phone       String?
  petInfo     String?  // free text: pet name, breed, temperament notes
  status      String   @default("inquired") // inquired | booked | paid | contract_sent | shot | delivered
  createdAt   DateTime @default(now())
  booking     Booking?
}

model Slot {
  id          String   @id @default(cuid())
  date        DateTime
  startTime   String   // e.g. "14:00"
  durationMin Int      @default(30)
  isBooked    Boolean  @default(false)
  booking     Booking?
}

model Booking {
  id                String   @id @default(cuid())
  leadId            String   @unique
  lead              Lead     @relation(fields: [leadId], references: [id])
  slotId            String   @unique
  slot              Slot     @relation(fields: [slotId], references: [id])
  stripeSessionId   String?
  stripePaymentId   String?
  paymentStatus     String   @default("pending") // pending | paid | failed
  contractLink      String?  // manually pasted Pixieset contract URL
  contractStatus    String   @default("not_sent") // not_sent | sent | signed
  createdAt         DateTime @default(now())
}
```

---

## Pages & Routes

### Public
- `/` — Session offer landing/booking page: brief session description, available slots pulled from `Slot` where `isBooked = false`, click a slot to proceed.
- `/book/[slotId]` — Intake form (name, email, phone, pet info) for the selected slot.
- `/book/[slotId]/checkout` — Creates a Stripe Checkout session server-side and redirects to Stripe's hosted page. On success, mark the `Slot.isBooked = true`, create the `Booking`, and set `Lead.status = "booked"`.
- `/book/confirmation` — Simple "You're booked!" page with next steps (contract will follow by email — even though email is stubbed in V1, still show this messaging).

### Admin (behind password gate)
- `/admin/login` — Single shared password form.
- `/admin` — Dashboard: table of all leads/bookings with status, sortable/filterable by status. Click a row to expand/edit.
- `/admin/leads/[id]` — Detail view: lead info, booking info, payment status, manually paste/update the Pixieset contract link, manually advance `status` through the pipeline (dropdown or buttons).
- `/admin/slots` — Slot management: add/edit/delete available slots (date, time, duration).

---

## Core Flows

**Public booking flow:**
1. Visitor lands on `/`, sees available slots.
2. Picks a slot → intake form → submits (creates `Lead`, status `inquired`).
3. Redirected to Stripe Checkout for deposit/full payment.
4. On successful payment (webhook or success-redirect check in V1 — webhook is the correct approach, but a simple success-URL check is an acceptable stub if webhook wiring is deferred to the follow-up pass), `Booking` is created, `Slot.isBooked = true`, `Lead.status = "paid"`.
5. Confirmation page shown.

**Admin flow:**
1. Madyson/Spencer logs into `/admin`.
2. Sees all leads in a pipeline table, filterable by status.
3. Manually pastes the Pixieset contract link once sent, updates `contractStatus` and `Lead.status` as things progress (contract sent → signed → shot → delivered).
4. Manages available slots in `/admin/slots`.

---

## Explicit V1 Scope Boundaries

**Build these:**
- Booking page, intake form, Stripe Checkout redirect, confirmation page
- Slot management (CRUD)
- Admin dashboard with lead/booking table and status pipeline
- Basic password-gated admin auth

**Do NOT build in V1 (stub or skip entirely):**
- Real transactional email sending (console.log placeholder only)
- Pixieset API integration (contract link is manually pasted by a human — there is no public API for this, don't attempt one)
- Bulk/marketing email (Mailchimp/Flodesk is a separate tool, out of scope here)
- Multi-user roles/permissions
- SMS notifications
- Payment plans/partial payment logic beyond a single Stripe Checkout charge
- Automated review requests or post-delivery follow-up sequences

If something outside this scope seems tempting to add "while you're in there," flag it instead of building it.

---

## What I'll Wire Up After This First Pass

- Real Stripe keys + webhook endpoint verification
- A real transactional email provider
- Production deployment/env vars on Vercel
- DNS for admin.fableandframestudio.com

Leave clear `// TODO` comments and a short `.env.example` file listing every environment variable the app expects (`DATABASE_URL`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `ADMIN_PASSWORD`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`) so the handoff is unambiguous.
