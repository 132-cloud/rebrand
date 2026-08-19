# Mobile Commercial Banking Page — User Flow & Journey

**Source:** Figma Dev Hand-off — Commercial Banking - Mobile (Node 262:12219)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=262-12219  
**Page Figma Node:** `262:12219` (428 × 13834)  
**Proposed URL:** /solutions/commercial-banking/ (responsive — same URL as desktop)  
**Last Updated:** August 12, 2026  
**Design Lead:** Sarah Schaper  
**Desktop Reference:** [Commercial Banking User Flow](../Commercial-Banking-User-Flow.md)

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Mobile Navigation Header](#3-mobile-navigation-header)
4. [Section 1: Hero](#4-section-1-hero)
5. [Section 2: Logo Bar](#5-section-2-logo-bar)
6. [Section 3: Strategy Band](#6-section-3-strategy-band)
7. [Section 4: Use Case Cards (5 stacked)](#7-section-4-use-case-cards-5-stacked)
8. [Section 5: Business Segments](#8-section-5-business-segments)
9. [Section 6: Customer Quotes](#9-section-6-customer-quotes)
10. [Section 7: FAQ Accordion](#10-section-7-faq-accordion)
11. [Section 8: Footer CTA](#11-section-8-footer-cta)
12. [Section 9: Footer](#12-section-9-footer)
13. [Mobile Animations & Interactions](#13-mobile-animations--interactions)
14. [User Flow Diagram](#14-user-flow-diagram)
15. [Open Questions](#15-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Commercial Banking page adapts the desktop's 1512 × 10926px layout into a 428 × 13834px mobile-optimized single-column experience. The desktop has a "Related Resources" section (3-column card grid); on mobile this is replaced by a Business Segments section (3 stacked segment cards). All use case cards are stacked vertically with the illustration below the text content.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation |
|-----------------|-------------------|
| Side-by-side use case cards (text left + graphic right) | Stacked: heading → body → CTA → graphic |
| 3-column Related Resources grid | Replaced by 3-card stacked Business Segments section |
| Two CTAs side-by-side in hero | Two CTAs stacked vertically (300×45px each) |
| Hover interactions on cards | Tap interactions (no hover states) |
| 76px hero headline | 56px hero headline |
| 42px section headings | 42px headings (preserved) |
| 18px body text | 16px body text |
| Horizontal logo marquee | Narrower marquee (fewer logos visible) |

### Mobile Typography Scale

| Style | Desktop | Mobile |
|-------|---------|--------|
| H1 (Hero) | 76px / 78px LH | 56px / 60px LH |
| H2 (Section heads) | 56px / 58px LH | 42px / 48px LH |
| H3 (Card titles) | 42px / 48px LH | 42px / 48px LH |
| H4 (Segment titles) | 24px / 28px LH | 24px / 28px LH |
| Body | 18px / 28px LH | 16px / 28px LH |
| CTA | 14px / 22px LH | 14px / 22px LH |

---

## 2. Page Structure & Scroll Journey

**Figma Node:** `262:12219` (Commercial Banking - Mobile)  
**Dimensions:** 428 × 13834px

| # | Section | Approx Y | Figma Node | Mobile Adaptation |
|---|---------|----------|------------|-------------------|
| 1 | Navigation Header | 0–87 | `302:8170` | Hamburger menu (Nav Mobile) |
| 2 | Hero | 0–825 | `262:12220` / `262:12370` | Stacked CTAs, warm gradient bg |
| 3 | Logo Bar | 825–1251 | `262:12413` | Horizontal marquee |
| 4 | Strategy Band | 1251–1776 | `262:12431` | Single-column, centered |
| 5 | Use Case Cards (5) | 1776–5696 | `262:12521` | Stacked: text above, graphic below |
| 6 | Business Segments | 5696–8126 | `262:12256` | 3 stacked segment cards + CTA |
| 7 | Customer Quotes | 8126–9150 | `262:12572` / `262:12752` | Full-width quote, swipe carousel |
| 8 | FAQ Accordion | 9150–11549 | `262:12435` | Full-width, 8 items collapsed |
| 9 | Footer CTA | 12346–12661 | `262:12378` | Centered CTA over gradient |
| 10 | Footer | 12759–13834 | `280:2037` | Mobile Footer instance |

---

## 3. Mobile Navigation Header

**Figma Node:** `302:8170` (Nav Mobile instance)

Shared mobile navigation component. Full-width, 428 × 87px.  
See: [Mobile Header Navigation User Flow](Mobile-Header-Navigation-User-Flow.md)

| Element | Behavior |
|---------|----------|
| Logo (Nymbus) | Tap → / |
| Hamburger icon | Tap → full-screen mobile menu |

---

## 4. Section 1: Hero

**Figma Nodes:** `262:12220` (Hero background, 428×825), `262:12370` (content frame, 396×602)

### Layout
- Full-width warm gradient background (cream/peach organic elliptical shapes)
- Gradient fade rectangle at bottom (`262:12255`, Y:644, 428×181)
- Content centered within 396px container (16px side padding)
- CTAs stacked vertically with 30px gap, beginning at Y:482

### Content

- **Headline:** "COMMERCIAL BANKING, WITHOUT CORE DISRUPTION."
  - Style: 56px bold uppercase, centered, blur-dissolve-on-load
  - Figma node height: 300px (wraps to ~5 lines at 396px)
- **Subtitle:** "Treasury and cash management relationships move to larger banks because your tools were built for retail, not business. Launch commercial-grade banking on a parallel core, without touching the one you run today."
  - Style: 16px, centered, 396px wide
- **CTA 1:** "Book a Demo" (300×45px, black with white border) → /contact/
- **CTA 2:** "See the Platform" (300×45px, semi-transparent gray bg, black text) → /platform/

### Mobile-Specific Notes
- CTAs are stacked (not side-by-side as desktop)
- CTA 1 has white border (same pattern as other mobile solution pages)
- CTA 2 uses `rgba(219,219,219,0.6)` bg — matches mobile hero CTA pattern site-wide
- Hero headline wraps across ~5 lines at 56px / 396px width (vs 2 lines on desktop at 76px / 831px)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Headline resolves from blur (blur-dissolve-on-load) |
| Scroll in | Content fades in up with ease |
| CTA tap | Navigate to destination |

---

## 5. Section 2: Logo Bar

**Figma Node:** `262:12413` (Frame 2147238561, 428×426)

### Layout
- 100px top padding
- Eyebrow: "TRUSTED BY TOP FINANCIAL INSTITUTIONS" (14px bold uppercase, centered)
- Horizontal scrolling logo marquee (5 logos, continuous loop)
- Stat line: "25 digital banks launched and cores deployed on **Nymbus**"

### Logos (5 in strip)
Same set as all solution pages: image 9, image 5, image 7, image 13, image 11.

### Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Default | Continuous horizontal marquee | https://reactbits.dev/animations/logo-loop |
| Scroll in | Section fades in |

---

## 6. Section 3: Strategy Band

**Figma Node:** `262:12431` (Text section, 428×525)

### Layout
- Single-column text block, centered (396px wide)
- Top and bottom border lines
- 100px vertical padding

### Content
- **Heading:** "Win the commercial relationship, not just the account." (42px bold, centered)
- **Body:** "Complex businesses need depth retail cores were never built for. Multi-user controls, treasury workflows, real-time payment rails, and operating confidence. Nymbus gives institutions a purpose-built commercial platform, delivered without a core replacement." (16px, centered)

### Mobile Difference from Desktop
- Desktop: two-column (heading left, body right, 577px / 482px)
- Mobile: single column, stacked, both centered

---

## 7. Section 4: Use Case Cards (5 stacked)

**Figma Node:** `262:12521` (Frame 2085665020, 428×3920)

All 5 use case cards follow the same mobile layout:
- Centered heading (42px bold, blur effect)
- Body paragraph (16px, centered)
- Full-width CTA button (300×45px, centered)
- Product screenshot below (full-width ~396px × ~266px, rounded 16px corners)

### Card 1: Multi-Entity Onboarding

**Figma Nodes:** `262:12522` (wrapper), `262:12523` (text), `262:12530` (graphic)

| Element | Content |
|---------|---------|
| Heading | Onboard the whole business. |
| Body | Multi-entity onboarding runs KYB, beneficial ownership, identity verification, and document capture in one flow. Complex business structures get onboarded with the same rigor a commercial relationship demands, without a manual back-and-forth that sends prospects to a larger bank. |
| CTA | "Explore account opening" → /platform/#account-opening |
| Graphic | `multi-entity-onboarding@2x 1` (396×266) |

### Card 2: Commercial Controls

**Figma Nodes:** `262:12532` (wrapper), `262:12533` (text), `262:12540` (graphic)

| Element | Content |
|---------|---------|
| Heading | Controls their finance team expects. |
| Body | Multi-user roles, per-account permissions, approval limits, and money-movement limits are configured out of the box. Give a treasury team the entitlements they run on today, so the relationship no longer outgrows what your institution can offer. |
| CTA | "Explore the platform" → /platform/ |
| Graphic | `commercial-controls@2x 1` (399×267) |

### Card 3: Payment Depth

**Figma Nodes:** `262:12542` (wrapper), `262:12543` (text), `262:12550` (graphic)

| Element | Content |
|---------|---------|
| Heading | The payment depth commercial runs on. |
| Body | Real-time ACH, domestic and international wires, bulk templates, NACHA upload, and approval queues run behind your commercial accounts. Treasury reporting for returns, NOCs, and transfers gives finance teams the visibility they'd otherwise leave you to get. |
| CTA | "See business banking tools" → /platform/#payments-hub |
| Graphic | `payment-depth@2x 1` (396×266) |

### Card 4: Fraud & Exception Management

**Figma Nodes:** `262:12552` (wrapper), `262:12553` (text), `262:12560` (graphic)

| Element | Content |
|---------|---------|
| Heading | Protection built for business volume. |
| Body | ACH and Check Positive Pay run with exception review, quick-rule creation, and payee name recognition, backed by fraud monitoring and risk decisioning. Commercial-scale exposure gets contained before it posts, not chased after it clears. |
| CTA | "See fraud and controls" → /platform/#fraud-intelligence |
| Graphic | `fraud-exception@2x 1` (396×266) |

### Card 5: Managed Operations

**Figma Nodes:** `262:12562` (wrapper), `262:12563` (text), `262:12570` (graphic)

| Element | Content |
|---------|---------|
| Heading | Run the operation behind commercial. |
| Body | Commercial banking carries deep operational load. Nymbus Managed Services can support onboarding, servicing, back-office processing, compliance workflows, and fraud operations, built and run by the team behind the platform, so you scale without staffing every function alone. |
| CTA | "Explore managed services" → /managed-services/ |
| Graphic | `managed-run-sheet@2x 1` (396×266) |

### Mobile Use Case Card Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each card fades in up with ease (staggered) |
| CTA tap | Navigate to destination |
| Graphics | Static product screenshots |

---

## 8. Section 5: Business Segments

**Figma Node:** `262:12256` (Frame 2147238565, 428×2430)

This section **replaces the desktop's "Related Resources" 3-card content grid** with 3 stacked business segment cards. The same `LinkComponent` card pattern is used as on other mobile solution pages, with blurred preview images.

### Layout
- Centered heading + subtitle
- 3 segment cards stacked vertically (60px gap between cards, each 396px wide)
- CTA button below all cards
- Border-top and border-bottom on section

### Header Content
- **Heading:** "Serve every business, from SMB to commercial." (42px bold, blur-dissolve-on-load)
- **Subtitle:** "Nymbus supports differentiated experiences across the business lifecycle, so one platform grows the relationship from a small business account to a full commercial and treasury partnership." (18px)

### Segment Cards

| # | Title | Description | Image |
|---|-------|-------------|-------|
| 1 | Small business | Accounts, payments, and cash flow tools for owners managing daily operations and early growth. | Blurred preview (396×396, blur 7.5px) |
| 2 | Growth firms | Role-based approvals, ACH and wire workflows, Positive Pay exceptions, and reporting for businesses that need stronger controls and speed. | Blurred preview (396×400, blur 7.5px) |
| 3 | Commercial businesses | Treasury workflows, multi-entity onboarding, account analysis, and sweep and IOLTA support for complex finance teams. | Blurred preview (396×400, blur 7.5px) |

### Section CTA
- **Button:** "Explore small business banking" (300×45px) → /solutions/business-banking/

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading resolves from blur, cards stagger fade in |
| Card tap | Preview image unblurs (blur 7.5px → 0) |
| Section CTA tap | Navigate to /solutions/business-banking/ |

---

## 9. Section 6: Customer Quotes

**Figma Nodes:** `262:12572` (Frame 2147238549, 429×1024), `262:12752` (CustomerQuotes, 429×717)

### Layout
- Topic label / eyebrow (56px text frame above quote)
- Large quote text (full-width, ~395px, variable height)
- Attribution below
- Company logos strip (3 logos, varied opacity)
- Hidden masonry testimonials grid in background

### Visible Quote Content
- **Quote:** "Speed to market and cost to serve is what this business is all about. Nymbus affirmed our decision to modernize our entire banking infrastructure and positions us to deliver real, simple banking services to our customers faster and more efficiently than ever before."
- **Attribution:** **Stephen Owen**, President & CEO, First Entertainment Credit Union
- **Logos:** 3 company logos (image 9, image 7, image 13) — active at full opacity, others at 50%

### Quote Carousel
Desktop note confirms this page uses a **single static quote** (not a multi-quote carousel) — consistent with the desktop Commercial Banking user flow.

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Quote fades in up |
| Logo highlight | Active company logo at full opacity, others at 50% |
| Display | Single static quote (no carousel) |

---

## 10. Section 7: FAQ Accordion

**Figma Node:** `262:12435` (Frame 2147238550, 428×2399)

### Layout
- Section title: "FAQs" (42px bold, blur-dissolve-on-load)
- 8 accordion items (394px wide, 20px gap between items)
- Each item: question (24px bold) + answer (16px) + expand × icon
- Total section height: 2399px

### FAQ Items (8 questions — commercial-specific)

| # | Question | Answer |
|---|----------|--------|
| 1 | Can we launch commercial banking without replacing our core? | Yes. Nymbus runs as a parallel core beside the system you operate today, so you can enter or expand commercial banking without a full-core conversion. |
| 2 | How fast can we get a commercial product to market? | A dedicated business banking brand or line can launch on a parallel core faster than a traditional core build, with technology, operations, and support connected from the start. |
| 3 | Which business segments does the platform support? | Small businesses, growth firms, and commercial clients, each served with accounts, controls, and treasury depth matched to the segment and its stage. |
| 4 | Do we have to staff the operation ourselves? | No. Nymbus Managed Services can run onboarding, servicing, back-office work, and fraud operations behind your brand, built and operated by the team behind the platform. |
| 5 | How does business account opening handle KYB and compliance? | Multi-entity onboarding runs KYB, identity verification, and beneficial ownership review through integrated solutions, with referred cases reviewed against your rules. You keep regulatory ownership; execution runs underneath. |
| 6 | Can we offer commercial-grade payment tools? | Yes. Multi-user entitlements, approval limits, Positive Pay, and treasury reporting for returns, NOCs, and transfers run behind your commercial accounts, configured to how each client operates. |
| 7 | How does this connect to the systems we already use? | Nymbus Connect integrates your tools and partners through modern APIs, so integration does not require custom middleware for every connection. |
| 8 | What makes Nymbus different from a traditional core for business banking? | The platform is purpose-built for business banking, with the entitlements, payment depth, and treasury workflows complex operations require, delivered alongside your core instead of gated behind it. |

### Mobile-Specific Notes
- Questions wrap to 2–4 lines at 394px width
- Full-width tap areas per question row
- Icon at x=376 (right-aligned, consistent)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Tap question row | Toggles answer (expand/collapse) |
| Expand animation | Slide down, 300ms ease |
| Collapse animation | Slide up, 250ms |
| Icon | × rotated 45° |
| Default state | All collapsed |
| Scroll in | Section fades in, "FAQs" heading resolves from blur |

---

## 11. Section 8: Footer CTA

**Figma Node:** `262:12378` (CTA Footer, 396×315)

### Layout
- Over gradient footer background (`262:12285`)
- 56px bold uppercase heading, centered
- CTA button (300×45px, centered)

### Content
- **Heading:** "COMMERCIAL BANKING WITHOUT CORE DISRUPTION."
  - Note: Figma shows "commercial banking with core disruption." — lowercase and preposition is "with" not "without." This is likely a copy error in the mobile frame. Flagged in Open Questions.
- **CTA:** "Book a demo" (300×45px) → /contact/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading fades in up |
| CTA tap | Navigate to /contact/ |

---

## 12. Section 9: Footer

**Figma Node:** `280:2037` (Mobile Footer Ad instance, 428×1075)

Shared mobile footer component.  
See: [Mobile Footer User Flow](Mobile-Footer-User-Flow.md)

---

## 13. Mobile Animations & Interactions

### Global Mobile Animation Rules

| Animation | Mobile Behavior | Reference |
|-----------|----------------|-----------|
| Scroll reveal | Fade in up with ease | Global |
| Blur-dissolve | Resolves on load / scroll into viewport | Site-wide pattern |
| Logo marquee | Continuous horizontal scroll | https://reactbits.dev/animations/logo-loop |
| Button tap | Specular highlight on press | https://reactbits.dev/components/specular-button |
| FAQ expand | Slide down 300ms ease | — |
| Segment card | Tap to unblur preview image | — |

### Touch Target Minimums
- All CTAs: 300×45px (exceeds 44×44 minimum)
- FAQ rows: full-width tap area
- Nav hamburger: 44×44px minimum

### Removed Desktop Interactions
- No hover states on any element
- No arrow/dot navigation on quote section (single quote, not carousel)
- No sticky nav behavior

---

## 14. User Flow Diagram

```
[User arrives at /solutions/commercial-banking/ on mobile]
        |
        v
[Hero — "Commercial Banking, Without Core Disruption"]
        |
        +---> [Tap: Book a Demo] ---> /contact/
        +---> [Tap: See the Platform] ---> /platform/
        |
        v (scroll)
[Logo Bar — Trust Signals + "25 digital banks" stat]
        |
        v (scroll)
[Strategy Band — "Win the commercial relationship, not just the account."]
        |
        v (scroll)
[Use Case Card 1: "Onboard the whole business."]
        +---> [Tap: Explore account opening] ---> /platform/#account-opening
        |
[Use Case Card 2: "Controls their finance team expects."]
        +---> [Tap: Explore the platform] ---> /platform/
        |
[Use Case Card 3: "The payment depth commercial runs on."]
        +---> [Tap: See business banking tools] ---> /platform/#payments-hub
        |
[Use Case Card 4: "Protection built for business volume."]
        +---> [Tap: See fraud and controls] ---> /platform/#fraud-intelligence
        |
[Use Case Card 5: "Run the operation behind commercial."]
        +---> [Tap: Explore managed services] ---> /managed-services/
        |
        v (scroll)
[Business Segments — 3 stacked cards]
  - Small business (tap to unblur)
  - Growth firms (tap to unblur)
  - Commercial businesses (tap to unblur)
        +---> [Tap: Explore small business banking] ---> /solutions/business-banking/
        |
        v (scroll)
[Customer Quote — Single quote, Stephen Owen / First Entertainment CU]
        |
        v (scroll)
[FAQ Accordion — 8 questions, all collapsed]
        +---> [Tap any FAQ] ---> Expands/collapses answer
        |
        v (scroll)
[Footer CTA]
        +---> [Tap: Book a demo] ---> /contact/
        |
        v
[Mobile Footer]
```

---

## 15. Open Questions (All Resolved)

All questions have been confirmed and resolved:

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Footer CTA copy | ✅ RESOLVED: **"COMMERCIAL BANKING WITHOUT CORE DISRUPTION."** — all-caps, matches hero headline style. The Figma copy was incorrect. |
| 2 | Use Case Card 2 CTA destination | ✅ RESOLVED: **`/platform/`** without anchor is correct. Generic platform explore link — no deep-link needed. |

