# Mobile Business Banking User Flow & Journey

**Source:** Figma Dev Hand-off — Business Banking - Mobile (Node 262:11557)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=262-11557
**Last Updated:** August 11, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Platform Overview + Demo UI](#4-section-2-platform-overview--demo-ui)
5. [Section 3: Logo Bar](#5-section-3-logo-bar)
6. [Section 4: Strategy Band](#6-section-4-strategy-band)
7. [Section 5: Features — Account Opening / Payments / Controls](#7-section-5-features--account-opening--payments--controls)
8. [Section 6: Business Segments](#8-section-6-business-segments)
9. [Section 7: Customer Quote](#9-section-7-customer-quote)
10. [Section 8: FAQs](#10-section-8-faqs)
11. [Section 9: Footer CTA](#11-section-9-footer-cta)
12. [Mobile Animations & Interactions](#12-mobile-animations--interactions)
13. [User Journey Scenarios](#13-user-journey-scenarios)
14. [Open Questions](#14-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Business Banking page adapts the desktop's 1512×~10925px layout into a 428×13850px single-column experience. The warm cream/peach hero gradient and dark feature sections are preserved, but multi-column layouts stack vertically and hover-based card interactions are replaced with tap-through navigation.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| Alternating rows (text + illustration) | Stacked: text above, illustration below | 428px viewport |
| 3-column segment grid + photos | Stacked single-column segment cards | Readability |
| Hover-lift on feature cards | Tap-through (no hover) | Touch devices |
| Desktop dashboard mockup (wide) | Cropped/scaled dashboard mockup | Fits viewport |
| Side-by-side strategy band | Single-column text stack | Width constraint |
| Masonry testimonials grid (hidden) | Not rendered on mobile | Performance |

### Design Philosophy
- No hover states — all interactions are tap
- Illustrations stay (dark card graphics) — visual impact on mobile
- FAQ accordion same behavior as desktop — tap to expand/collapse
- CTA buttons full-width (300px, centered) per Figma instances

---

## 2. Page Structure & Scroll Journey

**Figma Node:** `262:11557` (Business Banking - Mobile)
**Dimensions:** 428 × 13850px

| # | Section | Approx Y | Mobile Adaptation |
|---|---------|----------|-------------------|
| 1 | Nav Header | 0–87 | Hamburger menu |
| 2 | Hero | 0–825 | Full-width, stacked |
| 3 | Platform Overview + Demo | 825–2391 | Dashboard + stacked feature cards |
| 4 | Logo Bar | 2291–2717 | Marquee strip |
| 5 | Strategy Band | 2717–3290 | Single-column text |
| 6 | Features (3 rows) | 3290–5758 | Text → illustration, stacked |
| 7 | Business Segments | 5758–8104 | Stacked segment cards + CTA |
| 8 | Customer Quote | 8104–9052 | Full-width quote |
| 9 | FAQs | 9052–11451 | Accordion (tap to expand) |
| 10 | Footer CTA | 11379–12242 | Full-width CTA |
| 11 | Footer | 12775–13850 | 2-column link grid |

---

## 3. Section 1: Hero

**Figma Node:** `262:11558` (Hero), `262:11708` (content frame)
**Dimensions:** 428 × 825px

### Layout
```
┌────────────────────────────────────┐
│ [Nav Header - hamburger]           │
├────────────────────────────────────┤
│                                    │
│  BANKING BUILT FOR HOW             │
│  BUSINESSES ACTUALLY               │
│  OPERATE.                          │
│                                    │
│  [Subtext paragraph]               │
│                                    │
│       [ Try the demo ]             │
│                                    │
└────────────────────────────────────┘
```

### Content

| Ref | Element | Content | Notes |
|-----|---------|---------|-------|
| MBB-1 | H1 Title | "BANKING BUILT FOR HOW BUSINESSES ACTUALLY OPERATE." | Large bold uppercase display |
| MBB-2 | Body text | Supporting paragraph | Below headline |
| MBB-3 | Primary CTA | "Try the demo" → /demo/ | Black specular button, 300px wide, centered |

### Background
- Warm cream/peach gradient with organic elliptical shapes
- Consistent with desktop hero color treatment
- No 3D chrome blob on mobile

### Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Page load | Hero content fades in |
| CTA tap | Navigate to /demo/ |

---

## 4. Section 2: Platform Overview + Demo UI

**Figma Node:** `262:11836` (Frame 2147238560)
**Position:** Y 825–2391

### Heading Content

| Ref | Element | Content |
|-----|---------|---------|
| MBB-4 | Section heading | "Launch modern business banking" |
| MBB-5 | Demo link | "Try the demo" → /demo/ |

### Dashboard Mockup
Full-width business banking platform UI mockup (396px wide), showing:
- Navigation sidebar (Home, Goals, Transactions, Insights, Payments, Cards, Accounts)
- Account list: CASH, LOANS, CREDIT
- Welcome greeting + quick actions
- Balance chart
- Account cards (Checking, Savings, CD, Visa, Mastercard, Auto Loan)

### Feature Cards (Stacked)

On mobile the 3 feature cards stack vertically. Each is a full-width rounded card with icon, title, and body text:

| Ref | Card | Icon | Title | Body | Node |
|-----|------|------|-------|------|------|
| MBB-6 | Card 1 | Person/onboarding | Automated business onboarding | Verify businesses and owners with integrated KYC, KYB, beneficial-ownership, and controlling-party workflows. | `262:11853` |
| MBB-7 | Card 2 | Money/envelope | Complete commercial money movement | Originate ACH and wires, upload payment files, run Positive Pay, and deposit checks remotely. | `262:11861` |
| MBB-8 | Card 3 | Shield/lock | Granular user controls | Give employees, accountants, and operators the right access with account-level permissions, custom roles, transaction limits, and approval workflows. | `262:11870` |

### Interactions
- Cards are static on mobile (no hover)
- "Try the demo" link tap → /demo/
- Dashboard mockup is visual only (not interactive)

---

## 5. Section 3: Logo Bar

**Figma Node:** `262:11907` (Frame 2147238561)
**Position:** Y 2291–2717

### Content
- Label: "Trusted by top financial institutions"
- Logos: MSUFCU, Vantage West, First Entertainment Credit Union, PeoplesBank, Gesa Credit Union
- Stat line: "25 digital banks launched and cores deployed on Nymbus"

### Mobile Behavior
- Continuous horizontal marquee (auto-scroll)
- Logos scaled to fit viewport
- Touch does not interrupt marquee

---

## 6. Section 4: Strategy Band

**Figma Node:** `262:11925` (Text)
**Position:** Y 2717–3290

### Content
- **Heading:** "Launch business banking around the customer, not the category."
- **Body:** "Businesses are not one segment. Solo owners, growing operators, and established companies need different experiences, controls, and levels of support. Nymbus gives institutions the platform to serve them all, without building a separate product for each."

### Mobile Layout
- Single-column: Heading then body text
- Full-width with 16px side padding

---

## 7. Section 5: Features — Account Opening / Payments / Controls

**Figma Node:** `262:11721` (Frame 2085665020)
**Position:** Y 3290–5758

Three feature rows, each stacking label → heading → body → CTA → illustration vertically.

### Row 1: Account Opening

**Figma Node:** `262:11722` (Frame 2085665019)

| Element | Content |
|---------|---------|
| Label | ACCOUNT OPENING |
| Heading | "From intent to funded." |
| Body | "Open and fund business accounts in a single flow, with KYC, KYB, beneficial-ownership, and controlling-party verification decisioned on intake. From sole proprietors to complex commercial entities, the right applicants clear fast and the wrong ones never open." |
| CTA (MBB-9) | "Explore account opening" → /platform/#account-opening |
| Illustration | Abstract rectangular grid with Nymbus icon (dark bg) |

---

### Row 2: Payments

**Figma Node:** `262:11761` (Frame 2085665016)

| Element | Content |
|---------|---------|
| Label | PAYMENTS |
| Heading | "Money movement businesses run on." |
| Body | "Originate ACH and wires, upload payment files, run Positive Pay, and deposit checks remotely. Payment depth scales with the relationship, so a solo operator and a commercial treasury team run on the same platform without a specialized build." |
| CTA (MBB-10) | "See business banking tools" → /platform/#payments |
| Illustration | Globe/network visualization with orbital paths (dark bg) |

---

### Row 3: Controls

**Figma Node:** `262:11793` (Frame 2085665013)

| Element | Content |
|---------|---------|
| Label | CONTROLS |
| Heading | "Controls their finance team expects." |
| Body | "Give employees, accountants, and operators the right access with account-level permissions, custom roles, transaction limits, and approval workflows. It's the control depth that turns a business account into a commercial relationship your institution can keep." |
| CTA (MBB-11) | "Explore the platform" → /platform/ |
| Illustration | Dial/gauge interface with numbered scale (dark bg) |

### Mobile Interaction Notes
- No blur-dissolve rotating text animation on heading words (simplified for mobile)
- CTA buttons: 300px wide, centered
- Illustrations are full-width visual cards (not interactive)

---

## 8. Section 6: Business Segments

**Figma Node:** `262:11594` (Frame 2147238565)
**Position:** Y 5758–8104

### Header Content
- **Heading:** "Built to serve businesses at every stage."
- **Subtext:** "Nymbus supports differentiated business banking experiences across the lifecycle, from solo operators to complex commercial relationships, all on one platform."

### Segment Cards (Stacked — 3 cards)

| Ref | Segment | Description | Photo |
|-----|---------|-------------|-------|
| MBB-12 | Solopreneurs and solo operators | Simple, business-ready banking for one-person businesses that need to open, manage, and move money without commercial complexity. | Woman working at desk/studio |
| MBB-13 | Small business | Accounts, payments, servicing, and digital workflows for owners managing growth, cash flow, and daily operations. | Two women collaborating in plant shop |
| MBB-14 | Commercial business | Deeper controls, permissions, treasury workflows, and operational depth for more complex finance teams. | Business professional in meeting/office |

On mobile, segment cards stack full-width with photo below text (vs side-by-side on desktop).

### CTA

| Ref | Element | Destination |
|-----|---------|-------------|
| MBB-15 | "Explore commercial banking" | /contact/ (until /solutions/commercial-banking/ is ready) |

Button style: Black specular, 300px wide, centered (`262:11621`/`262:11622`)

---

## 9. Section 7: Customer Quote

**Figma Node:** `262:11929` (Frame 2147238549), `262:12109` (CustomerQuotes)
**Position:** Y 8104–9052

### Content
- **Quote:** "Businesses need digital banking that fits how they operate today. Nymbus allowed us to make that vision a reality."
- **Attribution:** Sara Dolan, CFO, MSUFCU
- **Logo:** MSUFCU logo

### Mobile Layout
- Full-width quote text (centered)
- Attribution line below
- Logo below attribution
- Hidden masonry testimonials grid not rendered on mobile

---

## 10. Section 8: FAQs

**Figma Node:** `262:12120` (Frame 2147238550)
**Position:** Y 9052–11451

### Header
- **Label:** "FAQs"

### FAQ Items (8 items, tap to expand/collapse)

| # | Question | Answer |
|---|----------|--------|
| 1 | Can we launch business banking without replacing our core? | Yes. Nymbus can run as a parallel core beside the system you operate today, so you can launch a business offering without touching your primary core. |
| 2 | How fast can we get a business product to market? | A vertical brand or new line can launch on a parallel core faster than a traditional core build, with technology, operations, and support connected from the start. |
| 3 | Which business segments does the platform support? | Solo operators, microbusinesses, small businesses, and commercial clients, each served with accounts, controls, and operational depth matched to the segment. |
| 4 | Do we have to staff the operation ourselves? | No. Nymbus Managed Services can run onboarding, servicing, disputes, and back-office work behind your brand, built and operated by the team behind the platform. |
| 5 | How does business account opening handle KYB and compliance? | Applications can be scored and screened through integrated KYB and identity verification, with referred cases reviewed against your rules. You keep regulatory ownership; execution runs underneath. |
| 6 | Can we offer commercial-grade payment tools? | Yes. Wire and ACH origination, Positive Pay, and Remote Deposit Capture can run behind your business accounts, with your team setting underwriting and exposure limits. |
| 7 | How does this connect to the systems we already use? | Nymbus Connect integrates your tools and partners through modern APIs and event streaming, so new integrations move in days, not through a custom rebuild. |
| 8 | What makes Nymbus different from a traditional core for business banking? | The platform is designed from the ground up to support business banking with the tools and experiences modern businesses expect, plus the differentiated controls and support each segment needs. |

### Mobile FAQ Interactions

| Trigger | Behavior | Timing |
|---------|----------|--------|
| Tap question row | Expands answer (slide down) | 300ms ease-out |
| Tap again | Collapses answer (slide up) | 250ms ease-in |
| Icon | Rotates + → × on expand | 200ms |
| Default state | All collapsed | — |
| Touch target | Full row width × 96px min height | ✓ |

---

## 11. Section 9: Footer CTA

**Figma Node:** `262:11623` (Gradient Footer), `262:11715` (CTA Footer)
**Position:** Y 11379–12242

### Content
- **Heading:** "BANKING BUILT FOR HOW BUSINESSES ACTUALLY OPERATE."
- **CTA (MBB-16):** "Try the demo" → /demo/

### Mobile Layout
- Full-width dark gradient background (warm elliptical shapes)
- Large display heading, centered
- CTA button: 300px wide, centered (`262:11719`/`262:11720`)
- No 3D chrome blob

---

## 12. Mobile Animations & Interactions

### Animation Specifications

| Element | Desktop | Mobile |
|---------|---------|--------|
| Scroll reveal | Fade up | Fade in (no translate) |
| Hero text | Blur-dissolve rotating words | Simplified fade-in |
| Feature heading words | Blur-dissolve on scroll | Simplified fade-in |
| Segment photos | Blur-dissolve animation | Static (fade in on scroll) |
| Logo marquee | Auto-scroll | Auto-scroll (unchanged) |
| FAQ accordion | Slide expand/collapse | Slide expand/collapse (same) |
| Feature card hover | Lift/shadow | No hover |
| CTA hover | Arrow grows | No hover |

### Touch Targets

| Element | Size | Status |
|---------|------|--------|
| CTA buttons | 300×45px | ✓ Compliant |
| FAQ rows | Full width × 96px min | ✓ Compliant |
| Demo link | Full text row | ✓ Compliant |
| Nav hamburger | 44×44px | ✓ Compliant |

---

## 13. User Journey Scenarios

### Scenario MBB-1: Tap Hero CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on mobile Business Banking page |
| **WHEN** | User taps "Try the demo" (MBB-3) |
| **THEN** | Navigates to /demo/ |

**Acceptance Criteria:**
1. Button shows tap feedback
2. Navigation to demo destination
3. Page loads (external link or internal)

---

### Scenario MBB-2: Tap Feature CTA — Account Opening

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Features section |
| **WHEN** | User taps "Explore account opening" (MBB-9) |
| **THEN** | Navigates to /platform/#account-opening |

**Acceptance Criteria:**
1. Tap feedback shown
2. Navigation to /platform/ with scroll to #account-opening

---

### Scenario MBB-3: Tap Feature CTA — Payments

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Payments feature row |
| **WHEN** | User taps "See business banking tools" (MBB-10) |
| **THEN** | Navigates to /platform/#payments |

**Acceptance Criteria:**
1. Navigation to /platform/#payments

---

### Scenario MBB-4: Tap Feature CTA — Platform

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Controls feature row |
| **WHEN** | User taps "Explore the platform" (MBB-11) |
| **THEN** | Navigates to /platform/ |

---

### Scenario MBB-5: Tap Business Segments CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Business Segments section |
| **WHEN** | User taps "Explore commercial banking" (MBB-15) |
| **THEN** | Navigates to /contact/ |

**Acceptance Criteria:**
1. Navigation to /contact/ (temporary destination until commercial banking page ready)

---

### Scenario MBB-6: Expand FAQ Item

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to FAQ section (all collapsed) |
| **WHEN** | User taps FAQ question 1 |
| **THEN** | Answer slides down and becomes visible |

**Acceptance Criteria:**
1. Slide-down animation (300ms ease-out)
2. Icon rotates from + to ×
3. Answer text fully visible
4. Other FAQs remain in their current state

---

### Scenario MBB-7: Collapse FAQ Item

| Step | Detail |
|------|--------|
| **GIVEN** | User has an FAQ item expanded |
| **WHEN** | User taps the same question row again |
| **THEN** | Answer slides up and collapses |

**Acceptance Criteria:**
1. Slide-up animation (250ms ease-in)
2. Icon rotates from × back to +
3. Answer hidden

---

### Scenario MBB-8: Tap Footer CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to bottom of page |
| **WHEN** | User taps "Try the demo" in footer CTA section (MBB-16) |
| **THEN** | Navigates to /demo/ |

---

### Scenario MBB-9: Scroll Through Full Page

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on mobile Business Banking page |
| **WHEN** | User scrolls from top to bottom |
| **THEN** | All sections load and animate into view |

**Acceptance Criteria:**
1. Smooth 60fps scroll
2. Sections fade in on viewport entry
3. Images lazy-load
4. Fixed mobile header persists throughout

---

## 14. Open Questions (All Resolved)

### Inherited from Desktop (Resolved)

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Demo destination | ✅ RESOLVED: "Try the demo" links to interactive demo from Ed's team, link TBD end of August 2026. |
| 2 | Segment CTA destination | ✅ RESOLVED: "Explore commercial banking" → /contact/ until dedicated page ready. |
| 3 | FAQ default state | ✅ RESOLVED: All collapsed by default. |
| 4 | Rotating text words | ✅ RESOLVED: No rotating text. Blur-dissolve applies to segment images only, not headings. On mobile, simplified to fade-in animation. |

### Mobile-Specific (Resolved)

| # | Question | Resolution |
|---|----------|-----------|
| 5 | Dashboard mockup cropping | ✅ RESOLVED: **Full-width scale-down**. Horizontal scroll is poor UX for static mockups. |
| 6 | Feature card tap behavior | ✅ RESOLVED: **Display-only, no tap action**. Feature cards are informational — they do not navigate anywhere. |
| 7 | Segment photo animation | ✅ RESOLVED: **Fade-in on scroll is acceptable**. Simplified from desktop blur-dissolve for mobile performance. |
| 8 | Customer quotes count | ✅ RESOLVED: **Single static quote on mobile** (Sara Dolan / MSUFCU). No carousel. |

---

## Complete URL Map

| Ref | Element | Destination |
|-----|---------|-------------|
| MBB-3 | Hero CTA: Try the demo | /demo/ |
| MBB-5 | Demo link (Platform Overview) | /demo/ |
| MBB-9 | Explore account opening | /platform/#account-opening |
| MBB-10 | See business banking tools | /platform/#payments |
| MBB-11 | Explore the platform | /platform/ |
| MBB-15 | Explore commercial banking | /contact/ |
| MBB-16 | Footer CTA: Try the demo | /demo/ |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 11, 2026 | Initial mobile Business Banking document | Kiro |
