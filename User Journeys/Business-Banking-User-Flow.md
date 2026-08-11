# Business Banking Page User Flow & Journey

**Source:** Figma Dev Hand-off — Business Banking Page (Node 166:3165)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=166-3165  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Global Animations](#2-global-animations)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Platform Overview + Demo UI](#4-section-2-platform-overview--demo-ui)
5. [Section 3: Logo Bar](#5-section-3-logo-bar)
6. [Section 4: Strategy Band](#6-section-4-strategy-band)
7. [Section 5: Features (Account Opening / Payments / Controls)](#7-section-5-features-account-opening--payments--controls)
8. [Section 6: Business Segments](#8-section-6-business-segments)
9. [Section 7: Customer Quotes](#9-section-7-customer-quotes)
10. [Section 8: FAQs](#10-section-8-faqs)
11. [Section 9: Footer CTA](#11-section-9-footer-cta)
12. [Section 10: Footer](#12-section-10-footer)

---

## 1. Page Overview & Scroll Journey

The Business Banking page is a single continuous scroll page (1512px wide, ~10925px tall) structured as a vertical narrative guiding prospects from awareness of business banking capabilities through to conversion.

**Target Audience:** Financial institution decision-makers evaluating Nymbus for launching or modernizing business banking offerings.

**Scroll Order (top to bottom):**

| # | Section | Y Position | Purpose |
|---|---------|-----------|---------|
| 1 | Navigation (dark) | 0 | Global nav, persistent |
| 2 | Hero | 0–783 | Value proposition + primary CTA |
| 3 | Platform Overview + Demo UI | 700–1844 | Product showcase + feature cards |
| 4 | Logo Bar | 1844–2119 | Trust signals + stat |
| 5 | Strategy Band | 2212–2632 | Problem framing / positioning |
| 6 | Features (3 rows) | 2632–4472 | Deep capability showcase |
| 7 | Business Segments | 4492–5735 | Segment differentiation |
| 8 | Customer Quotes | 5767–6703 | Social proof |
| 9 | FAQs | 6846–8400 | Objection handling |
| 10 | Footer CTA | 9744–10058 | Final conversion |
| 11 | Footer | 10278–10925 | Navigation + legal |

---

## 2. Global Animations

These apply across the entire Business Banking page (consistent with homepage patterns):

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Scroll reveal | All components fade in up with ease on scroll | Global pattern |
| Background grain | Grain texture on gradient backgrounds | https://reactbits.dev/backgrounds/grainient |
| Button hover | Arrow grows with ease on hover | Global pattern |
| Button style | Specular button style (black) | https://reactbits.dev/components/specular-button |
| Rotating text | Blur-in rotating words in headings | Per-section spec below |

---

## 3. Section 1: Hero

**Figma Node:** `166:3166` (Hero), `166:3445` (content frame), `166:3420` (gradient group)

### Layout
- Full-width warm gradient background (cream/peach organic elliptical shapes)
- Glass board overlay with vertical stripe pattern (translucent)
- Centered content container (1034px wide)
- Navigation bar overlaid at top (dark variant)

### Background Elements
- Warm cream-to-white gradient with large organic elliptical shapes
- Glass board: vertical translucent stripes creating depth effect
- Gradient layers (nodes `166:3421`–`166:3423`): multiple overlapping radial gradients

### Content Stack (top to bottom)

1. **Rotating H1 Title**
   - Text: "BANKING BUILT FOR HOW BUSINESSES ACTUALLY OPERATE."
   - Style: Bold uppercase, large display (approx 117px)
   - Animation: Rotating/blur-dissolve text effect on select words ("FOR", "BUSINESSES", "OPERATE")
   - Words cycle with blur transition (partially visible letters dissolve while new ones resolve)

2. **Primary CTA Button**
   - Text: "Try the demo"
   - Style: Black specular button, centered
   - Link: → /demo/

### Interactions & Animations

| Trigger | Behavior |
|---------|----------|
| Page load | Rotating headline words blur-dissolve through variants |
| Scroll in | Content fades in up with ease |
| CTA hover | Arrow grows with ease, specular highlight |
| Background | Ambient organic gradient (static or slow drift) |

---

## 4. Section 2: Platform Overview + Demo UI

**Figma Node:** `166:3750` (Frame 2147238560), `166:3766` (feature cards row)

### Layout
- Section heading + demo link
- Full-width platform dashboard mockup
- Row of 3 feature cards below

### Heading Content
- **Title:** "Launch modern business banking"
- **Link:** "Try the demo →" → /demo/

### Dashboard Mockup (PlatformOverviewNew)
Interactive business banking dashboard UI showing:
- **Left sidebar:** Navigation (Home, Goals, Transactions, Insights, Payments, Cards, Accounts)
- **Account list:** CASH ($47,922.83), LOANS ($18,456.22), CREDIT
- **Main area:** "Welcome, Ed" greeting
- **Quick actions:** Transfer | Pay Bill | Send Money
- **Balance chart:** Nymbus balance over 6 months — $8,742.33 (↗ 61.02)
- **Accounts panel:** Everyday Checking (••4521), High-Yield Savings (••4522), 12-Month CD (••4523), Visa Signature (••7891), Cashback Mastercard (••3344), Auto Loan (••3310)

### Feature Cards (3 columns)

| Card | Icon | Title | Body |
|------|------|-------|------|
| 1 | Person/onboarding icon | Automated business onboarding | Verify businesses and owners with integrated KYC, KYB, beneficial-ownership, and controlling-party workflows. |
| 2 | Money/envelope icon | Complete commercial money movement | Originate ACH and wires, upload payment files, run Positive Pay, and deposit checks remotely. |
| 3 | Shield/check icon | Granular user controls | Give employees, accountants, and operators the right access with account-level permissions, custom roles, transaction limits, and approval workflows. |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Dashboard mockup fades in up |
| Feature cards | Fade in up with stagger |
| "Try the demo" link | Arrow grows on hover → /demo/ |
| Card hover | Subtle lift/shadow (consistent with homepage cards) |

---

## 5. Section 3: Logo Bar

**Figma Node:** `166:3795` (Frame 2147238561)

### Layout
- Label: "TRUSTED BY TOP FINANCIAL INSTITUTIONS"
- Horizontally scrolling/marquee logo strip (doubled for infinite loop)
- Stat line below

### Logo Content
- MSUFCU
- Vantage West Credit Union
- First Entertainment Credit Union
- PeoplesBank
- Gesa Credit Union

### Stat Line
- "25 digital banks launched and cores deployed on **Nymbus**"

### Interactions & Animations

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Default | Continuous horizontal marquee | https://reactbits.dev/animations/logo-loop |
| Scroll in | Section fades in |
| Stat text | Fade in on scroll |

---

## 6. Section 4: Strategy Band

**Figma Node:** `166:3452` (Frame 58), `166:3455` (content frame)

### Layout
- Two-column text layout
- Left: Bold heading
- Right: Body paragraph
- Separated by horizontal rules above and below

### Content
- **Heading:** "Launch business banking around the customer, not the category."
- **Body:** "Businesses are not one segment. Solo owners, growing operators, and established companies need different experiences, controls, and levels of support. Nymbus gives institutions the platform to serve them all, without building a separate product for each."

### Interactions
- Fade in up on scroll (global animation)

---

## 7. Section 5: Features (Account Opening / Payments / Controls)

**Figma Node:** `166:3617` (Frame 2085665020)

### Layout
- 3 alternating rows (text left / graphic right)
- Each row: label + heading + body + CTA button + dark illustration

### Row 1: Account Opening

**Figma Node:** `166:3618` (Frame 2085665019)

| Element | Content |
|---------|---------|
| Label | ACCOUNT OPENING |
| Heading | From intent to funded. |
| Body | Open and fund business accounts in a single flow, with KYC, KYB, beneficial-ownership, and controlling-party verification decisioned on intake. From sole proprietors to complex commercial entities, the right applicants clear fast and the wrong ones never open. |
| CTA | "Explore account opening" → /platform/#account-opening |
| Graphic | Abstract geometric shapes (rectangles/grid with Nymbus icon center) on dark background |

### Row 2: Payments

**Figma Node:** `166:3656` (Frame 2085665016)

| Element | Content |
|---------|---------|
| Label | PAYMENTS |
| Heading | Money movement businesses run on. |
| Body | Originate ACH and wires, upload payment files, run Positive Pay, and deposit checks remotely. Payment depth scales with the relationship, so a solo operator and a commercial treasury team run on the same platform without a specialized build. |
| CTA | "See business banking tools" → /platform/#payments |
| Graphic | Globe/network visualization with orbital paths and connection nodes on dark background |

### Row 3: Controls

**Figma Node:** `166:3687` (Frame 2085665013)

| Element | Content |
|---------|---------|
| Label | CONTROLS |
| Heading | Controls their finance team expects. |
| Body | Give employees, accountants, and operators the right access with account-level permissions, custom roles, transaction limits, and approval workflows. It's the control depth that turns a business account into a commercial relationship your institution can keep. |
| CTA | "Explore the platform" → /platform/ |
| Graphic | Dial/gauge interface with numbered scale (0, 5, 10, 15, 20) and Nymbus icon on dark background |

### Heading Animation
- Select words in each heading have a blur-dissolve/rotating text effect ("funded", "on", "finance")
- Words partially blur while cycling, similar to hero treatment

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each row fades in up with ease |
| CTA hover | Arrow grows with ease, specular button style |
| Graphics | Static illustrations (dark backgrounds with geometric/abstract art) |
| Text blur | Rotating words resolve on scroll-into-view |

---

## 8. Section 6: Business Segments

**Figma Node:** `166:3394` (Frame 2147238565)

### Layout
- Centered heading + subtext
- 3-column grid: segment title + description + lifestyle photo
- CTA button centered below

### Header Content
- **Heading:** "Built to serve businesses at every stage."
- **Subtext:** "Nymbus supports differentiated business banking experiences across the lifecycle, from solo operators to complex commercial relationships, all on one platform."
- Animation: Rotating/blur text on words "businesses" and "stage" in heading

### Segment Grid (3 columns)

| Column | Title | Description | Photo |
|--------|-------|-------------|-------|
| 1 | Solopreneurs and solo operators | Simple, business-ready banking for one-person businesses that need to open, manage, and move money without commercial complexity. | Woman working at desk/studio |
| 2 | Small business | Accounts, payments, servicing, and digital workflows for owners managing growth, cash flow, and daily operations. | Two women collaborating in plant shop |
| 3 | Commercial business | Deeper controls, permissions, treasury workflows, and operational depth for more complex finance teams. | Business professional in meeting/office |

### CTA
- **Button:** "Explore commercial banking" → /solutions/commercial-banking/ (or /platform/)
- Style: Black specular button, centered

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading fades in, columns stagger fade in up |
| Photos | Rounded corners, subtle hover lift |
| CTA hover | Arrow grows with ease |
| Heading text | Blur-dissolve rotating words |

---

## 9. Section 7: Customer Quotes

**Figma Node:** `166:3381` (CustomerQuotes), `166:3202` (Frame 57 — testimonials grid)

### Layout
- Large centered quote text (bold uppercase)
- Attribution line below
- Divider line
- Company logo below

### Quote Content (visible)
- **Quote:** "Businesses need digital banking that fits how they operate today. Nymbus allowed us to make that vision a reality."
- **Attribution:** Sara Dolan, CFO, MSUFCU
- **Logo:** MSUFCU logo displayed below divider

### Testimonials Grid (hidden/carousel — node `166:3207`)
- 3-column masonry layout of testimonial cards
- 15 total testimonial cards (5 per column, staggered vertically)
- Each card: quote text + avatar + name/title
- Likely used for an animated background or carousel variant

### Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Auto-advance | Cycles through quotes (if multiple) | — |
| Quote change | Logo updates to match active company | — |
| Scroll in | Quote text fades in up | Global |
| Background cards | Masonry grid may scroll/animate behind main quote | https://reactbits.dev/components/masonry |
| Transition | Smooth crossfade between quotes | — |

---

## 10. Section 8: FAQs

**Figma Node:** `166:3533` (Group 2085664964)

### Layout
- Section title: "FAQs"
- Accordion-style expandable items (all shown expanded in design)
- Each item: question (bold) + answer text + collapse/expand icon (×)

### FAQ Items

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

### Interactions

| Trigger | Behavior |
|---------|----------|
| Click question row | Toggles answer visibility (expand/collapse) |
| Expand animation | Slide down with ease, 300ms |
| Collapse animation | Slide up, 250ms |
| Icon | Rotates between + and × states |
| Scroll in | FAQ items fade in up with stagger |
| Default state | First item expanded, rest collapsed (TBD) |

---

## 11. Section 9: Footer CTA

**Figma Node:** `166:3459` (CTA Footer)

### Layout
- Full-width section before footer
- Large display heading (bold uppercase)
- CTA button centered below

### Content
- **Heading:** "BANKING BUILT FOR HOW BUSINESSES ACTUALLY OPERATE."
- **CTA:** "Try the demo" → /demo/
- Style: Black specular button
- Heading mirrors hero treatment (blur-dissolve on select words)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading fades in up |
| CTA hover | Arrow grows with ease, specular highlight |
| Text effect | Rotating blur-dissolve on select words (mirrors hero) |

---

## 12. Section 10: Footer

**Figma Node:** `166:3749` (Footer instance)

### Layout
- Standard site-wide footer component (shared with all pages)
- Full-width, dark gradient background
- Navigation links, legal text, social icons

### Content
- Reuses global footer component
- Standard links: Platform, Solutions, AI, Labs, Resources, Contact
- Legal: Privacy Policy, Terms, etc.

---

## User Journey Flow Diagram

```
[User arrives on Business Banking page]
        |
        v
[Hero - "Banking Built For How Businesses Actually Operate"]
        |
        +---> [Clicks "Try the demo"] ---> [Navigate to /demo/]
        |
        v (scrolls)
[Platform Overview - Dashboard mockup + Feature cards]
        |
        +---> [Clicks "Try the demo" link] ---> [Navigate to /demo/]
        |
        +---> [Reads feature cards] ---> [Understands capabilities]
        |
        v (scrolls)
[Logo Bar - Trust signals + "25 digital banks" stat]
        |
        v (scrolls)
[Strategy Band - "Launch business banking around the customer"]
        |
        v (scrolls)
[Features - Account Opening / Payments / Controls]
        |
        +---> [Clicks "Explore account opening"] ---> [/platform/#account-opening]
        +---> [Clicks "See business banking tools"] ---> [/platform/#payments]
        +---> [Clicks "Explore the platform"] ---> [/platform/]
        |
        v (scrolls)
[Business Segments - Solo / Small / Commercial]
        |
        +---> [Clicks "Explore commercial banking"] ---> [/solutions/commercial-banking/]
        |
        v (scrolls)
[Customer Quote - Social proof from MSUFCU]
        |
        v (scrolls)
[FAQs - Objection handling (8 items)]
        |
        +---> [Clicks any FAQ] ---> [Expands/collapses answer]
        |
        v (scrolls)
[Footer CTA - "Banking Built For How Businesses Actually Operate"]
        |
        +---> [Clicks "Try the demo"] ---> [Navigate to /demo/]
        |
        v
[Footer - Standard navigation]
```

---

## Primary Conversion Paths

| Path | Entry Point | Destination | Intent |
|------|-------------|-------------|--------|
| Demo | Hero CTA / Platform link / Footer CTA | /demo/ | Try the product |
| Account Opening | Features Row 1 CTA | /platform/#account-opening | Explore onboarding |
| Payments | Features Row 2 CTA | /platform/#payments | Explore money movement |
| Platform | Features Row 3 CTA | /platform/ | Full platform overview |
| Commercial Banking | Segments CTA | /solutions/commercial-banking/ | Segment-specific info |

---

## Page Differentiation from Homepage

| Aspect | Homepage | Business Banking |
|--------|----------|-----------------|
| Hero style | Chatbox wizard, dark gradient | Static headline + single CTA, warm gradient |
| Primary CTA | Chatbox interaction | "Try the demo" button |
| Color palette | Dark (deep navy/black) | Warm cream/peach hero → white body |
| Content depth | Broad overview of all offerings | Deep dive on business banking |
| Social proof | Multi-quote carousel | Single focused quote |
| Feature format | Card grid with hover states | Alternating rows with illustrations |
| FAQ section | Not present on homepage | 8-item accordion |

---

## Open Questions

1. ~~**Demo destination**~~ — ✅ RESOLVED: "Try the demo" links to an interactive demo. Link from Ed, TBD end of August 2026.
2. ~~**Quote carousel**~~ — ✅ RESOLVED: Static display (not animated, not a carousel).
3. ~~**Segment CTA destination**~~ — ✅ RESOLVED: "Explore commercial banking" links to /contact/ for now, until the dedicated commercial banking page is ready.
4. ~~**FAQ default state**~~ — ✅ RESOLVED: All FAQs collapsed by default.
5. ~~**Rotating text words**~~ — ✅ RESOLVED: No rotating text on this page. The blur-dissolve animation applies to the images under the three segments (Solopreneurs, Small Business, Commercial Business), not to heading text.
