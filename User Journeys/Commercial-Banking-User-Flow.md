# Commercial Banking Page — User Flow & Journey

**Source:** Figma Dev Hand-off — Commercial Banking Page (Node 222:1329)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=222-1329  
**Page Figma Node:** `222:1329` (1512 × 10926)  
**Proposed URL:** /solutions/commercial-banking/  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Global Animations](#2-global-animations)
3. [Section 1: Navigation](#3-section-1-navigation)
4. [Section 2: Hero](#4-section-2-hero)
5. [Section 3: Logo Bar](#5-section-3-logo-bar)
6. [Section 4: Two-Column Intro](#6-section-4-two-column-intro)
7. [Section 5: Use Case Cards (×5)](#7-section-5-use-case-cards-5)
8. [Section 6: Related Resources](#8-section-6-related-resources)
9. [Section 7: Customer Quotes](#9-section-7-customer-quotes)
10. [Section 8: FAQ Accordion](#10-section-8-faq-accordion)
11. [Section 9: Footer CTA](#11-section-9-footer-cta)
12. [Section 10: Footer](#12-section-10-footer)
13. [User Flow Diagram](#13-user-flow-diagram)
14. [Open Questions](#14-open-questions)

---

## 1. Page Overview & Scroll Journey

The Commercial Banking page targets institutions looking to launch or expand commercial and business banking products on the Nymbus platform. It uses stacked use-case cards with product screenshots to demonstrate capabilities across multi-entity onboarding, commercial controls, payment processing, fraud management, and managed operations.

**Scroll Order (top to bottom):**

| # | Section | Y Position | Figma Node | Purpose |
|---|---------|-----------|------------|---------|
| 1 | Navigation (dark) | 0–87 | `222:1424` | Global nav, persistent |
| 2 | Hero | 0–825 | `222:1337` / `222:1374` | Value proposition + CTAs |
| 3 | Logo Bar | 826–1222 | `222:1766` | Trust signals |
| 4 | Two-Column Intro | 1222–1555 | `222:1382` | Problem/solution framing |
| 5 | Use Case Card 1 | 1675–2151 | `222:1795` | Multi-entity onboarding |
| 6 | Use Case Card 2 | 2201–2681 | `222:1833` | Commercial controls |
| 7 | Use Case Card 3 | 2731–3207 | `222:1864` | Payment depth |
| 8 | Use Case Card 4 | 3257–3733 | `222:1906` | Fraud & exception management |
| 9 | Use Case Card 5 | 3783–4259 | `222:1948` | Managed run sheet |
| 10 | Related Resources | 4354–5597 | `222:1990` | 3-card content grid |
| 11 | Customer Quotes | 5596–6742 | `222:1471` | Social proof carousel |
| 12 | FAQ Accordion | 6742–8455 | `222:1678` | 8 expandable questions |
| 13 | Footer CTA | 8455–10279 | `222:1330` / `222:2018` | Gradient CTA section |
| 14 | Footer | 10279+ | `222:2024` | Global footer |

---

## 2. Global Animations

Consistent with the site-wide pattern:

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Scroll reveal | All components fade in up with ease on scroll | Global pattern |
| Number count-up | Stats count up on scroll into view | https://reactbits.dev/text-animations/count-up |
| Background grain | Grain texture on dark sections | https://reactbits.dev/backgrounds/grainient |
| Button hover | Arrow grows with ease on hover | Global pattern |
| Button style | Specular button style (black) | https://reactbits.dev/components/specular-button |
| Logo marquee | Continuous horizontal scroll | https://reactbits.dev/animations/logo-loop |

---

## 3. Section 1: Navigation

**Figma Node:** `222:1424` (Nav)

### Layout
- Dark variant of the global navigation component (`Nav dark` instance, node `222:1462`)
- Full-width, 1512 × 87px
- Bottom border line (node `222:1463`)

### Nav Items

| Item | Type | Destination |
|------|------|-------------|
| Logo (Nymbus) | Link | / |
| Platform | Dropdown | Sub-links |
| Managed Services | Dropdown | Sub-links |
| Solutions | Dropdown | Sub-links |
| AI | Dropdown | Sub-links |
| Resources | Dropdown | Sub-links |
| Book a Demo | CTA Button | /contact/ |
| Contact Sales | Text link | /contact/ |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll down | Nav hides (slide up) |
| Scroll up / pause | Nav reappears |
| Dropdown hover | Opens mega-menu panel |
| CTA hover | Specular button animation |

---

## 4. Section 2: Hero

**Figma Nodes:** `222:1337` (Group 2117130590 — background), `222:1374` (content frame)

### Layout
- Full-width dark gradient background with Hero frame (`222:1338`, 1512×783)
- Gradient fade rectangle at bottom (node `222:1373`, Y:606, 1512×181)
- Centered content container (1034px wide)
- Content positioned at Y:237

### Content Stack

1. **H1 Headline**
   - Text: [TRUNCATED — verify in Figma node `222:1375`] ("The Next-Generation Banking Platform" is placeholder label)
   - Width: 831px, centered

2. **Body Paragraph**
   - Text: [TRUNCATED — verify in Figma node `222:1377`] ("Powered by the industry's first secure MCP server." is placeholder label)
   - Width: 928px

3. **CTA Buttons** (Frame 77, node `222:1378`, centered at X:358.5)
   - **Button 1:** Instance of Button 5 (149px) → /contact/ (Book a demo)
   - **Button 2:** Instance of Button 6 (161px) → /platform/ (Explore Platform)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Content fades in |
| Scroll | Parallax on background |
| CTA hover | Arrow grows with ease, specular effect |
| Divider line | Vector at Y:825 separates hero from logo bar |

---

## 5. Section 3: Logo Bar

**Figma Node:** `222:1766` (Frame 2147238561, 1513×396)

### Layout
- Eyebrow text centered
- Horizontal scrolling logo marquee (two containers for infinite loop)
- Subtitle line below logos

### Content
- **Eyebrow:** "Trusted by top financial institutions" (node `222:1770`)
- **Subtitle:** [TRUNCATED — verify in Figma node `222:1794`] ("Powered by the industry's first secure MCP server." is placeholder label)

### Logos (5 per loop, greyscale, duplicated for infinite scroll)

| # | Image | Dimensions |
|---|-------|-----------|
| 1 | image 9 | 66×20 |
| 2 | image 5 | 93.5×20 |
| 3 | image 7 | 98×30 |
| 4 | image 13 | 85.5×15 |
| 5 | image 11 | 70×40 |

### Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Default | Continuous horizontal marquee | https://reactbits.dev/animations/logo-loop |
| Quote active | Logo turns to color when customer quote is active | Shared pattern |

---

## 6. Section 4: Two-Column Intro

**Figma Node:** `222:1382` (Frame 58, 1512×333)

### Layout
- Two text blocks side-by-side within 1164px container (node `222:1383`)
- Left column: 577px wide (heading)
- Right column: 482px wide (supporting text)
- Positioned at Y:1222

### Content
- **Left:** [TRUNCATED — verify in Figma node `222:1384`]
- **Right:** [TRUNCATED — verify in Figma node `222:1385`]

*Note: Text labels show placeholder content. Actual copy will frame the commercial banking value proposition.*

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Content fades in up with ease |

---

## 7. Section 5: Use Case Cards (×5)

**Figma Nodes:** `222:1795` through `222:1948`

### Layout Pattern (Repeated 5×)
- Two-column: text left (~480px) + illustration right (~710px)
- Each card: ~1190×476px
- Stacked vertically with ~50px gaps
- Positioned within content guides (X:161–1351)

### Card Content

| # | Figma Node | Illustration Asset | CTA Button Width | CTA Destination |
|---|-----------|-------------------|------------------|-----------------|
| 1 | `222:1795` | `multi-entity-onboarding@2x 1` | 222px | /contact/ |
| 2 | `222:1833` | `commercial-controls@2x 1` | 191px | /contact/ |
| 3 | `222:1864` | `payment-depth@2x 1` | 239px | /contact/ |
| 4 | `222:1906` | `fraud-exception@2x 1` | 205px | /contact/ |
| 5 | `222:1948` | `managed-run-sheet@2x 1` | 233px | /contact/ |

### Card Structure (per card)
- **Heading:** Multi-line title text (nodes `222:1829`, `222:1860`, `222:1902`, `222:1944`, `222:1986`)
- **Body:** Description paragraph (nodes `222:1830`, `222:1861`, `222:1903`, `222:1945`, `222:1987`)
- **CTA:** Button 5 instance (specular style)
- **Illustration:** Full-height product screenshot image on right (~710×476)

*Note: All heading and body text nodes show placeholder labels. Actual copy describes each commercial banking capability.*

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each row fades in up with ease |
| CTA hover | Arrow grows with ease, specular button effect |
| CTA click | Navigates to /contact/ |
| Image | Static product screenshot |

---

## 8. Section 6: Related Resources

**Figma Node:** `222:1990` (Frame 2147238565, 1512×1243)

### Layout
- Section heading + subtitle centered (node `222:1991`, 756px wide)
- 3-card horizontal grid below (node `222:1995`, 1206px total)
- Each card: 402×680px (LinkComponent instances)
- CTA button centered below grid (node `222:2014`, 270px)

### Content
- **Heading:** [TRUNCATED — verify in Figma node `222:1992`]
- **Subtitle:** [TRUNCATED — verify in Figma node `222:1993`]
- **Cards:** 3 × LinkComponent (`222:1996`, `222:2002`, `222:2008`)
- **CTA:** Button 5 (270px) → /resources/ or /insights/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Cards fade in up staggered |
| Card hover | Subtle lift/shadow |
| Card click | Navigate to resource page |
| CTA hover | Arrow grows, specular effect |

---

## 9. Section 7: Customer Quotes

**Figma Node:** `222:1471` (Frame 2147238549, 1514×1146)

### Layout
- Full-width section
- Large centered quote text (node `222:1655`, 1043px wide)
- Attribution line below (node `222:1658`)
- Company logo strip (3–4 logos, node `222:1661`)
- Hidden testimonials masonry grid in background (node `222:1478`, hidden — static, not rendered)

### Content
- **Quote:** "Speed to market and cost to serve is what this business is all about..."
- **Attribution:** "Stephen Owen, CEO, First Entertainment Credit Union"
- **Logos:** 3 financial institution logos in greyscale (image 9, image 7, image 13)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Quote fades in up with ease |
| Logo highlight | Active company logo turns to color |
| Display | Single quote (no carousel on this page) |

---

## 10. Section 8: FAQ Accordion

**Figma Node:** `222:1678` (Frame 2147238550, 1512×1713)

### Layout
- Section heading (node `222:1680`, 369.6px wide)
- Centered container: 768px wide (node `222:1681`)
- 8 expandable accordion items

### FAQ Items

| # | Question | Figma Node |
|---|----------|-----------|
| 1 | Can we launch business banking without replacing our core? | `222:1683` |
| 2 | How fast can we get a commercial product to market? | `222:1693` |
| 3 | Which business segments does the platform support? | `222:1703` |
| 4 | Do we have to staff the operation ourselves? | `222:1713` |
| 5 | How does business account opening handle KYB and compliance? | `222:1723` |
| 6 | Can we offer treasury-grade controls and reporting? | `222:1733` |
| 7 | How does this connect to the systems we already use? | `222:1743` |
| 8 | How does this connect to the systems we already use? (extended) | `222:1753` |

### FAQ Answers (from Figma text nodes)

| # | Answer (truncated) |
|---|-------------------|
| 1 | Yes. Nymbus can run as a parallel core beside the... |
| 2 | A vertical brand or new line can launch on a paral... |
| 3 | Solo operators, microbusinesses, small businesses,... |
| 4 | No. Nymbus Managed Services can run onboarding, se... |
| 5 | Applications can be scored and screened through in... |
| 6 | Yes. Wire and ACH origination, Positive Pay, and R... |
| 7 | Nymbus Connect integrates your tools and partners... |
| 8 | Nymbus Connect integrates your tools and partners... |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Click question row | Expands/collapses answer (300ms ease) |
| Chevron icon | Rotates 45° on expand (node `Icon:transform`) |
| Multiple open | Independent — multiple can be open simultaneously |
| Default state | All collapsed |
| Scroll in | Section fades in up |

---

## 11. Section 9: Footer CTA

**Figma Nodes:** `222:1330` (Gradient Footer, 1517×2471), `222:2018` (CTA Footer content, 902×314)

### Layout
- Full-width gradient section with layered elliptical shapes (purple/dark tones)
- Background: Multiple overlapping ellipses (3600–4156px) creating depth
- Centered CTA block at Y:9745

### Content
- **Heading:** [TRUNCATED — verify in Figma node `222:2019`]
- **CTA:** Button 5 (134px, specular style, node `222:2023`) → /contact/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | CTA fades in up |
| Button hover | Specular animation, arrow grows |
| Background | Gradients may subtly pulse |

---

## 12. Section 10: Footer

**Figma Node:** `222:2024` (Footer instance)

Standard global footer component (shared across all pages). Multi-column navigation, legal text, social icons, Nymbus logo.

---

## 13. User Flow Diagram

```
[User arrives at /solutions/commercial-banking/]
        |
        v
[Hero Section — Dark gradient]
        |
        +---> [CTA: Book a Demo] ---> /contact/
        +---> [CTA: Explore Platform] ---> /platform/
        |
        v (scroll)
[Logo Bar — Trust Signals]
  "Trusted by top financial institutions"
        |
        v (scroll)
[Two-Column Intro — Problem/Solution Framing]
        |
        v (scroll)
[Use Case Cards (×5)]
        |
        +---> Card 1: Multi-Entity Onboarding
        |       +---> [CTA] → /contact/
        |
        +---> Card 2: Commercial Controls
        |       +---> [CTA] → /contact/
        |
        +---> Card 3: Payment Depth
        |       +---> [CTA] → /contact/
        |
        +---> Card 4: Fraud & Exception Management
        |       +---> [CTA] → /contact/
        |
        +---> Card 5: Managed Run Sheet
        |       +---> [CTA] → /contact/
        |
        v (scroll)
[Related Resources — 3 cards]
        |
        +---> [Card click] → resource page
        +---> [CTA: "Explore all resources"] → /resources/
        |
        v (scroll)
[Customer Quote]
  "Speed to market and cost to serve..."
  — Stephen Owen, CEO, First Entertainment Credit Union
        |
        v (scroll)
[FAQ Accordion]
  - 8 questions, multiple can be open, all start collapsed
        |
        v (scroll)
[Footer CTA — Gradient Background]
        |
        +---> [CTA: Book a Demo] ---> /contact/
        |
        v
[Footer]
```

---

## 14. Open Questions

_All questions resolved — none remaining._

### Resolved

1. ~~**Hero copy**~~ — ✅ RESOLVED: Ignore placeholder labels in metadata. Copy in Figma is correct.
2. ~~**Two-column intro copy**~~ — ✅ RESOLVED: Ignore placeholder labels. Copy in Figma is correct.
3. ~~**Use case card headings & body**~~ — ✅ RESOLVED: Ignore placeholder labels. Copy in Figma is correct.
4. ~~**Use case card CTA labels**~~ — ✅ RESOLVED: Button widths are fine as-is.
5. ~~**FAQ item 8 vs item 7**~~ — ✅ RESOLVED: Keep both — they are intentional.
6. ~~**Resource card content**~~ — ✅ RESOLVED: No action needed.
7. ~~**Logo bar subtitle**~~ — ✅ RESOLVED: Ignore placeholder labels. Copy in Figma is correct.
8. ~~**Hidden elements**~~ — ✅ RESOLVED: Remove these from implementation. They are earlier design iterations and should not be rendered.

---

## Appendix: Structural Notes

### Relationship to Parallel Core Page

This page shares the same structural layout as the Parallel Core page (`166:1275`) — same dimensions (1512×10926), same section pattern (Hero → Logo → Intro → Use Case Cards → Resources → Quotes → FAQ → Footer CTA → Footer). The key differences are:

- Commercial banking-specific copy and illustrations
- Product screenshots (`multi-entity-onboarding`, `commercial-controls`, `payment-depth`, `fraud-exception`, `managed-run-sheet`) instead of generic parallel core imagery
- FAQ questions tailored to commercial/business banking buyers
- All use case CTAs route to /contact/ (no /labs/ variant)

### Navigation Entry Points

| Source | Action | Destination |
|--------|--------|-------------|
| Business Banking page | "Explore commercial banking" CTA | /solutions/commercial-banking/ (this page) |
| Header Nav | Solutions dropdown | /solutions/commercial-banking/ |
| Homepage Hero Chatbox | Relevant pill → CTA | Potentially links here |
