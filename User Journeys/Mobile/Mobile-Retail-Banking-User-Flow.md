# Mobile Retail Banking Page — User Flow & Journey

**Source:** Figma Dev Hand-off — Retail Banking - Mobile (Node 262:12786)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=262-12786  
**Page Figma Node:** `262:12786` (428 × 13807)  
**Proposed URL:** /solutions/retail-banking/ (responsive — same URL as desktop)  
**Last Updated:** August 12, 2026  
**Design Lead:** Sarah Schaper  
**Desktop Reference:** [Retail Banking User Flow](../Retail-Banking-User-Flow.md)

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Mobile Navigation Header](#3-mobile-navigation-header)
4. [Section 1: Hero](#4-section-1-hero)
5. [Section 2: Logo Bar](#5-section-2-logo-bar)
6. [Section 3: Strategy Band](#6-section-3-strategy-band)
7. [Section 4: Feature Rows (5 stacked)](#7-section-4-feature-rows-5-stacked)
8. [Section 5: Consumer Segments](#8-section-5-consumer-segments)
9. [Section 6: Customer Quotes](#9-section-6-customer-quotes)
10. [Section 7: FAQ Accordion](#10-section-7-faq-accordion)
11. [Section 8: Footer CTA](#11-section-8-footer-cta)
12. [Section 9: Footer](#12-section-9-footer)
13. [Mobile Animations & Interactions](#13-mobile-animations--interactions)
14. [User Flow Diagram](#14-user-flow-diagram)
15. [Open Questions](#15-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Retail Banking page adapts the desktop's 1512px wide, ~10926px tall scrolling narrative into a 428px wide, ~13807px tall mobile-optimized experience. All sections are preserved but reorganized for single-column viewing and touch interaction.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| Side-by-side feature rows (text left + graphic right) | Stacked vertically (text above, graphic below) | 428px viewport |
| 3-column segment card grid | Single-column stacked cards | Touch-friendly layout |
| Two CTAs side-by-side in hero | Two CTAs stacked vertically (full-width 300px) | Thumb accessibility |
| Hover-triggered card unblur | Tap-triggered unblur (no hover on touch) | Touch devices |
| 76px hero headline | 56px hero headline | Mobile readability |
| 42px section headings | 42px section headings (preserved) | Still fits 428px |
| 18px body text | 16px body text | Mobile readability |
| Horizontal logo marquee (5 logos visible) | Narrower marquee (fewer visible at once) | 428px viewport |

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

**Figma Node:** `262:12786` (Retail Banking - Mobile)  
**Dimensions:** 428 × 13807px

### Scroll Order (top to bottom)

| # | Section | Approx Y | Figma Node | Mobile Adaptation |
|---|---------|----------|------------|-------------------|
| 1 | Navigation Header | 0–87 | `302:8168` | Hamburger menu (Nav Mobile instance) |
| 2 | Hero | 0–825 | `262:12787` / `262:12937` | Stacked CTAs, warm gradient bg |
| 3 | Logo Bar | 825–1251 | `262:12980` | Horizontal marquee (narrower) |
| 4 | Strategy Band | 1251–1776 | `262:12998` | Single-column text, centered |
| 5 | Feature Rows (5) | 1776–5527 | `262:13088` | Stacked: heading → body → CTA → graphic |
| 6 | Consumer Segments | 5517–7891 | `262:12823` | Single-column stacked cards + CTA |
| 7 | Customer Quotes | 7889–9105 | `262:13139` / `262:13319` | Full-width quote, swipe carousel |
| 8 | FAQ Accordion | 9105–11504 | `262:13002` | Full-width, same interaction |
| 9 | Footer CTA | 12319–12634 | `262:12945` | Centered CTA over gradient |
| 10 | Footer | 12732–13807 | `280:2116` | Mobile Footer instance |

---

## 3. Mobile Navigation Header

**Figma Node:** `302:8168` (Nav Mobile instance)

- Shared mobile navigation component (hamburger menu)
- Full-width, 428 × 87px
- See: [Mobile Header Navigation User Flow](Mobile-Header-Navigation-User-Flow.md)

| Element | Behavior |
|---------|----------|
| Logo (Nymbus) | Tap → / (homepage) |
| Hamburger icon | Tap → Opens full-screen mobile menu |
| Menu open | Full-screen overlay with nav links + CTAs |

---

## 4. Section 1: Hero

**Figma Nodes:** `262:12787` (Hero background), `262:12937` (content frame)

### Layout
- Full-width warm gradient background (cream/peach organic elliptical shapes)
- Content centered within 396px container (16px side padding)
- CTAs stacked vertically with 30px gap
- Gradient fade-out at bottom (`262:12822` — 428×181px overlay)

### Content

- **Headline:** "WIN THE PRIMARY BANKING RELATIONSHIP."
  - Style: 56px bold uppercase, centered, blur-dissolve-on-load
- **Subtitle:** "Consumers are moving their direct deposit and daily banking to apps that feel faster than your core. Launch the everyday experience they expect on a platform built to move with you."
  - Style: 16px, centered, 396px wide
- **CTA 1:** "Book a Demo" (300×45px, black with white border, full-width)
  - → /contact/
- **CTA 2:** "See the Platform" (300×45px, semi-transparent gray bg, full-width)
  - → /platform/

### Mobile-Specific Notes
- Hero CTAs are stacked (not side-by-side)
- CTA 1 has a white border (not present on desktop)
- CTA 2 uses `rgba(219,219,219,0.6)` background with black text (different from desktop solid black)
- Both CTAs are 300×45px (larger touch targets than desktop 149×37px)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Headline resolves from blur (blur-dissolve-on-load) |
| Scroll in | Content fades in up with ease |
| CTA tap | Navigate to destination |

---

## 5. Section 2: Logo Bar

**Figma Node:** `262:12980` (Frame 2147238561)

### Layout
- 100px top padding before content begins
- Eyebrow text: "TRUSTED BY TOP FINANCIAL INSTITUTIONS" (centered, 14px bold uppercase)
- Horizontal scrolling logo strip (single row, continuous marquee)
- Stat line below: "25 digital banks launched and cores deployed on **Nymbus**"
- Total section height: 426px (vs 275px desktop — more vertical spacing)

### Logos (5 in strip, horizontally scrolling)
Same logos as desktop, displayed at same individual sizes but visible fewer at a time due to 428px viewport.

### Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Default | Continuous horizontal marquee | https://reactbits.dev/animations/logo-loop |
| Scroll in | Section fades in |

---

## 6. Section 3: Strategy Band

**Figma Node:** `262:12998` (Text section)

### Layout
- Single-column text (stacked, not side-by-side as on desktop)
- Content within 396px container, centered
- Top/bottom border lines
- 100px vertical padding

### Content
- **Heading:** "Earn primary, not just an open account." (42px bold, centered)
- **Body:** "Consumers keep their balances where the experience keeps up with their lives. Nymbus gives institutions the platform to deliver modern everyday banking, so the account becomes the relationship, and the relationship stays with you." (16px, centered)

### Mobile Difference
- Desktop: two columns side-by-side (heading left, body right)
- Mobile: single column, stacked vertically, both centered

---

## 7. Section 4: Feature Rows (5 stacked)

**Figma Node:** `262:13088` (Frame 2085665020 — full container, 428×3750px)

All 5 feature rows follow an identical mobile layout: text content stacked above the illustration graphic. Each row:
- Centered heading (42px bold, blur effect)
- Body paragraph (16px, centered)
- Full-width CTA button (300×45px, centered)
- Illustration image below (full-width ~396px)

### Row 1: Account Opening

**Figma Nodes:** `262:13089` (wrapper), `262:13090` (text), `262:13097` (graphic)

| Element | Content |
|---------|---------|
| Heading | From intent to funded. |
| Body | Move applicants from intent to funded with digital account opening built for consumers. Identity verification, funding, and first deposit run in a single flow, so new customers clear the door in minutes instead of a branch visit. |
| CTA | "Explore account opening" → /platform/#account-opening |
| Graphic | `intent-to-funded-flow@2x 1` (396×266) |

### Row 2: Experience

**Figma Nodes:** `262:13099` (wrapper), `262:13100` (text), `262:13107` (graphic)

| Element | Content |
|---------|---------|
| Heading | The experience they'd switch for. |
| Body | Give account holders the mobile-first banking they already expect from a neobank, across iOS, Android, and responsive web, launched as one connected experience instead of a multi-year build across a patchwork of vendors. |
| CTA | "Explore the platform" → /platform/#digital-banking |
| Graphic | `experience-screen@2x 1` (399×267) |

### Row 3: Money Movement

**Figma Nodes:** `262:13109` (wrapper), `262:13110` (text), `262:13117` (graphic)

| Element | Content |
|---------|---------|
| Heading | Move money the way they expect. |
| Body | ACH transfers, bill pay, person-to-person payments, card controls, and mobile check deposit run behind your accounts, so daily banking works the way consumers already expect, without sending them to another app to get it. |
| CTA | "Explore the platform" → /platform/#payments-hub |
| Graphic | `money-movement-loop@2x 1` (396×266) |

### Row 4: Engagement & Insights

**Figma Nodes:** `262:13119` (wrapper), `262:13120` (text), `262:13127` (graphic)

| Element | Content |
|---------|---------|
| Heading | Turn accounts into relationships. |
| Body | Cash flow insights, transaction categorization, alerts, credit monitoring, and rewards run inside the account, turning everyday balances and activity into loyalty, so the primary relationship deepens instead of drifting to a competitor. |
| CTA | "See engagement tools" → /platform/#engage |
| Graphic | `relationship-depth@2x 1` (396×266) |

### Row 5: Managed Operations

**Figma Nodes:** `262:13129` (wrapper), `262:13130` (text), `262:13137` (graphic)

| Element | Content |
|---------|---------|
| Heading | Run the operations behind retail growth. |
| Body | Retail banking creates operational load. Nymbus Managed Services can support onboarding, servicing, contact center, back-office work, compliance workflows, and fraud operations, so your team can scale everyday banking without carrying every function alone. |
| CTA | "Explore managed services" → /managed-services/ |
| Graphic | `multi-surface-spec@2x 1` (398×267) |

### Mobile Feature Row Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each row fades in up with ease (staggered) |
| CTA tap | Navigate to destination |
| Graphics | Static (no hover interaction on mobile) |

---

## 8. Section 5: Consumer Segments

**Figma Node:** `262:12823` (Frame 2147238565)

### Layout
- Centered heading + subtitle (396px wide)
- 3 segment cards stacked vertically (60px gap between cards)
- Each card: 396px wide, rounded 30px, glass texture overlay
- CTA button below all cards
- Border-top and border-bottom on section

### Header Content
- **Heading:** "Built to serve consumers across the relationship." (42px bold, blur-dissolve-on-load)
- **Subtitle:** "Nymbus supports differentiated retail banking experiences across the lifecycle, from the first account a customer opens to the full primary relationship they grow into." (16px)

### Segment Cards (stacked vertically)

| # | Title | Description | Image |
|---|-------|-------------|-------|
| 1 | New account holders | Fast digital account opening and funding for consumers choosing where to start their banking relationship. | Blurred preview (396×396, blur 7.5px) |
| 2 | Everyday banking customers | Accounts, payments, cards, and money movement for consumers managing daily finances on mobile and web. | Blurred preview (396×400, blur 7.5px) |
| 3 | Primary relationships | Insights, engagement, rewards, and connected experiences for customers who make you their main financial home. | Blurred preview (396×400, blur 7.5px) |

### Section CTA
- **Button:** "Explore small business banking" (300×45px) → /solutions/business-banking/

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading resolves from blur, cards stagger fade in up |
| Card tap | Preview image unblurs (blur 7.5px → 0) |
| Card release | Image re-blurs (or stays unblurred — TBD) |
| Section CTA tap | Navigate |

---

## 9. Section 6: Customer Quotes

**Figma Nodes:** `262:13139` (Frame 2147238549), `262:13319` (CustomerQuotes)

### Layout
- Eyebrow / topic label above (56px tall text area)
- Large quote text (full-width, left-aligned)
- Attribution below quote
- Company logos strip at bottom (3 logos, varied opacity)
- Background testimonial masonry grid (hidden — same as desktop)

### Quote Content (visible)
- **Quote:** "Speed to market and cost to serve is what this business is all about. Nymbus affirmed our decision to modernize our entire banking infrastructure and positions us to deliver real, simple banking services to our customers faster and more efficiently than ever before."
- **Attribution:** **Stephen Owen**, President & CEO, First Entertainment Credit Union and CineFi

### Quote Carousel Content (multi-quote — per resolved desktop spec)

| # | Quote | Attribution | Logo |
|---|-------|-------------|------|
| 1 | "Our partnership with Nymbus has enabled us to create a truly digital-first experience..." | Stephen Owen, President & CEO, First Entertainment Credit Union and CineFi | First Entertainment CU |
| 2 | "Businesses need digital banking that fits how they operate today. Nymbus allowed us to make that vision a reality." | Sara Dolan, CFO, MSUFCU | MSUFCU |
| 3 | "This is the most user-friendly banking system I've ever trained on. Fast, simple and intuitive." | Aleda DeMaria, Executive VP, COO, PeoplesBank | PeoplesBank |

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Swipe left/right | Cycles through quotes |
| Auto-advance | Cycles through quotes on timer |
| Logo highlight | Active company logo at full opacity, others at 50% |
| Scroll in | Quote text fades in up |

---

## 10. Section 7: FAQ Accordion

**Figma Node:** `262:13002` (Frame 2147238550), `262:13003` (Group 2085664964)

### Layout
- Section title: "FAQs" (48px bold — slightly smaller than desktop 56px)
- Accordion items (394px wide, 16px side padding)
- Each item: question (bold) + answer text + expand/collapse × icon
- Total section height: 2399px

### FAQ Items (8 questions — same as desktop)

| # | Question |
|---|----------|
| 1 | Can we launch a new retail experience without replacing our core? |
| 2 | How fast can we get a retail product to market? |
| 3 | Which channels does the platform support? |
| 4 | Do we have to staff the operation ourselves? |
| 5 | How does account opening handle identity and compliance? |
| 6 | Can we offer the money movement consumers expect? |
| 7 | How does this connect to the systems we already use? |
| 8 | What makes Nymbus different from a traditional core for retail banking? |

### Mobile-Specific Notes
- Questions wrap to 2–3 lines at 394px width (vs single line on desktop)
- Touch targets: full-width tap area per question row
- Icon position: right-aligned at x=376 (consistent across all items)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Tap question row | Toggles answer visibility (expand/collapse) |
| Expand animation | Slide down with ease, 300ms |
| Collapse animation | Slide up, 250ms |
| Icon | × icon rotated 45° |
| Default state | All collapsed |

---

## 11. Section 8: Footer CTA

**Figma Node:** `262:12945` (CTA Footer)

### Layout
- Positioned over gradient footer background (`262:12852`)
- Large display heading (56px bold uppercase, centered)
- CTA button below (300×45px, centered)
- 396px content width

### Content
- **Heading:** "WIN THE PRIMARY BANKING RELATIONSHIP."
  - Style: 56px bold uppercase, centered
- **CTA:** "Book a demo" (300×45px) → /contact/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading fades in up |
| CTA tap | Navigate to /contact/ |

---

## 12. Section 9: Footer

**Figma Node:** `280:2116` (Mobile Footer Ad instance)

- Shared mobile footer component (428 × 1075px)
- See: [Mobile Footer User Flow](Mobile-Footer-User-Flow.md)

---

## 13. Mobile Animations & Interactions

### Global Mobile Animation Rules

| Animation | Mobile Behavior | Reference |
|-----------|----------------|-----------|
| Scroll reveal | fade in up with ease (same as desktop) | Global |
| Blur-dissolve | Resolves on page load / scroll into viewport | Consistent with desktop |
| Logo marquee | Continuous horizontal scroll | https://reactbits.dev/animations/logo-loop |
| Button tap | Specular highlight flash on press | https://reactbits.dev/components/specular-button |
| FAQ expand | Slide down 300ms ease | — |
| Quote carousel | Swipe gesture + auto-advance | — |
| Segment card | Tap to unblur preview image | — |

### Touch Target Minimums
- All CTAs: 300×45px (exceeds 44×44px minimum)
- FAQ rows: full-width tap area
- Nav hamburger: 44×44px minimum

### Removed Desktop Interactions
- No hover states on any element
- No hover-triggered card animations
- No arrow navigation on carousels (swipe only)
- No sticky nav behavior (header scrolls with page)

---

## 14. User Flow Diagram

```
[User arrives at /solutions/retail-banking/ on mobile]
        |
        v
[Hero — "Win The Primary Banking Relationship"]
        |
        +---> [Tap: Book a Demo] ---> /contact/
        +---> [Tap: See the Platform] ---> /platform/
        |
        v (scroll)
[Logo Bar — Trust Signals + "25 digital banks" stat]
        |
        v (scroll)
[Strategy Band — "Earn primary, not just an open account."]
        |
        v (scroll)
[Feature Row 1: "From intent to funded."]
        +---> [Tap: Explore account opening] ---> /platform/#account-opening
        |
[Feature Row 2: "The experience they'd switch for."]
        +---> [Tap: Explore the platform] ---> /platform/#digital-banking
        |
[Feature Row 3: "Move money the way they expect."]
        +---> [Tap: Explore the platform] ---> /platform/#payments-hub
        |
[Feature Row 4: "Turn accounts into relationships."]
        +---> [Tap: See engagement tools] ---> /platform/#engage
        |
[Feature Row 5: "Run the operations behind retail growth."]
        +---> [Tap: Explore managed services] ---> /managed-services/
        |
        v (scroll)
[Consumer Segments — 3 stacked cards]
  - New account holders (tap to unblur)
  - Everyday banking customers (tap to unblur)
  - Primary relationships (tap to unblur)
        +---> [Tap: Explore small business banking] ---> /solutions/business-banking/
        |
        v (scroll)
[Customer Quotes — Swipe carousel]
  - Stephen Owen / First Entertainment CU
  - Sara Dolan / MSUFCU
  - Aleda DeMaria / PeoplesBank
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

## 15. Open Questions

1. ~~**FAQ default state**~~ — ✅ RESOLVED: All collapsed by default.
2. ~~**Quote carousel**~~ — ✅ RESOLVED: Multi-quote carousel (MSUFCU, PeoplesBank, First Entertainment CU). Swipe navigation on mobile.
3. ~~**Feature row CTA destinations**~~ — ✅ RESOLVED: Per Site-URLs.txt anchors.
4. ~~**Segment card interaction**~~ — ✅ RESOLVED: Tap to unblur preview image (mobile equivalent of desktop hover-to-unblur).
5. ~~**Footer CTA copy mismatch**~~ — ✅ RESOLVED: Changed to "WIN THE PRIMARY BANKING RELATIONSHIP." to match desktop.
6. ~~**Segment section CTA destination**~~ — ✅ RESOLVED: Changed to "Explore small business banking" → /solutions/business-banking/.
