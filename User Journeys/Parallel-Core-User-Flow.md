# Parallel Core Page — User Flow & Journey

**Source:** Figma Dev Hand-off — Product Pages | Core (Node 1:4)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=1-4  
**Page Figma Node:** `166:1275` (1512 × 10926)  
**Proposed URL:** /solutions/parallel-core/  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview](#1-page-overview)
2. [Scroll Journey](#2-scroll-journey)
3. [Section: Navigation](#3-section-navigation)
4. [Section: Hero](#4-section-hero)
5. [Section: Logo Bar](#5-section-logo-bar)
6. [Section: Stats / Two-Column Intro](#6-section-stats--two-column-intro)
7. [Section: Use Case Cards (×5)](#7-section-use-case-cards)
8. [Section: Related Resources](#8-section-related-resources)
9. [Section: Customer Quotes](#9-section-customer-quotes)
10. [Section: FAQ Accordion](#10-section-faq-accordion)
11. [Section: Footer CTA](#11-section-footer-cta)
12. [Section: Footer](#12-section-footer)
13. [User Flow Diagram](#13-user-flow-diagram)
14. [Open Questions](#14-open-questions)

---

## 1. Page Overview

The Parallel Core page targets institutions wanting to run a modern core alongside their legacy system. It uses stacked use-case cards with illustrations to show different deployment scenarios (vertical brands, new lines of business, M&A, private-label, sandbox).

**Target audience:** Banks and credit unions looking to launch new products or brands without replacing their existing core system.

---

## 2. Scroll Journey

| # | Section | Y Position | Figma Node | Purpose |
|---|---------|-----------|------------|---------|
| 1 | Navigation (dark) | 0–87 | `166:1362` | Global nav, persistent |
| 2 | Hero + 3D Chrome Blob | 0–847 | `166:1276` / `166:1304` | Value prop + CTAs |
| 3 | Hero CTAs | 459–604 | `166:1312` | Book a demo / Contact sales |
| 4 | Logo Bar | 894–1169 | `166:1713` | Trust signals |
| 5 | Two-Column Intro | 1222–1545 | `166:1320` | Problem/solution framing |
| 6 | Use Case Card 1 | 1675–2151 | `166:1742` | Vertical Brand Launch |
| 7 | Use Case Card 2 | 2201–2681 | `166:1751` | New Line of Business |
| 8 | Use Case Card 3 | 2731–3207 | `166:1782` | M&A Integration |
| 9 | Use Case Card 4 | 3257–3733 | `166:1816` | Private-Label Banking |
| 10 | Use Case Card 5 | 3783–4259 | `166:1825` | Sandbox Innovation |
| 11 | Related Resources | 4354–5597 | `166:1834` | 3-card content grid |
| 12 | Customer Quotes | 5596–6592 | `166:1409` | Social proof carousel |
| 13 | FAQ Accordion | 6592–8305 | `166:1614` | 8 expandable questions |
| 14 | Footer CTA | 8455–10279 | `166:1278` | Gradient CTA section |
| 15 | Footer | 10279+ | `166:1712` | Global footer |

---

## 3. Section: Navigation

**Figma Node:** `166:1362`

- Dark variant of the global navigation component (`Nav dark` instance)
- Full-width, 1512 × 87px

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

| Trigger | Behavior |
|---------|----------|
| Scroll down | Nav hides (slide up) |
| Scroll up / pause | Nav reappears |
| Dropdown hover | Opens mega-menu panel |
| CTA hover | Specular button animation |

---

## 4. Section: Hero

**Figma Nodes:** `166:1276` / `166:1304` (background), `166:1711` (title), `166:1312` (CTAs)

### Layout
- Full-width dark gradient background with organic elliptical shapes
- 3D chrome/holographic cylinder illustration (centered, ~1517 × 1171px)
- Centered headline text overlaid on cylinder
- Two CTA buttons below headline

### Content
- **Headline:** Large display text (~972px wide)
- **Subtitle:** "Powered by the industry's first secure MCP server." (910px wide)
- **CTA 1:** "Book a Demo" (135px) → /contact/
- **CTA 2:** "Explore Platform" (162px) → /platform/

### Hero Cylinder Animation
- **Technology:** Spline 3D (not CSS-only)
- **Behavior:** Ring animates on page load. Non-interactive (user cannot rotate/drag).
- **Load animation sample:** https://super-heliotrope-c29893.netlify.app/
- **Spline references:**
  - https://app.spline.design/community/file/4d9045a4-6c33-4243-9691-7f174de93a07
  - https://app.spline.design/community/file/bfcd6d0e-5785-40b9-9fce-3fe9206d83f3

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Cylinder ring animates (Spline 3D) |
| Scroll in | Text fades in up with ease |
| CTA hover | Arrow grows with ease, specular button effect |
| Background | Gradient ellipses may pulse subtly |

---

## 5. Section: Logo Bar

**Figma Node:** `166:1713`

### Layout
- Eyebrow text: "Trusted by top financial institutions" (centered)
- Horizontal scrolling marquee of logos (duplicated container for infinite loop)
- Subtitle line below

### Logos (5 per loop, greyscale)
| # | Dimensions |
|---|-----------|
| 1 | 66×20 |
| 2 | 93.5×20 |
| 3 | 98×30 |
| 4 | 85.5×15 |
| 5 | 70×40 |

### Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Default | Continuous horizontal marquee | https://reactbits.dev/animations/logo-loop |
| Quote active | Logo turns to color when matched with customer quote | Shared pattern |

---

## 6. Section: Stats / Two-Column Intro

**Figma Nodes:** `166:1320` / `166:1321`

### Layout
- Two text blocks side-by-side within 1164px container
- Left column: ~577px (heading/statement)
- Right column: ~483px (supporting paragraph)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Numbers count up animation |
| Fade in | Content fades in up with ease |

---

## 7. Section: Use Case Cards

**Figma Nodes:** `166:1742` through `166:1825`

### Layout Pattern (Repeated 5×)
- Two-column: text left (480px) + illustration right (~710px)
- Each card: ~1190×476px
- Stacked vertically with ~50px gaps

### Card Content & CTAs

| # | Use Case | CTA Button | CTA Destination | Illustration |
|---|----------|-----------|-----------------|-------------|
| 1 | Vertical Brand Launch | "Explore vertical brands" (211px) | /labs/ | `vertical-brand-launch@2x` |
| 2 | New Line of Business | "Explore new lines" (168px) | /contact/ | `new-line-of-business@2x` |
| 3 | M&A Integration | "Explore M&A" (201px) | /contact/ | 3D block grid + Nymbus logo |
| 4 | Private-Label Banking | "Explore private label" (191px) | /contact/ | `private-label-banking@2x` |
| 5 | Sandbox / Innovation | "Explore sandbox" (214px) | /contact/ | `sandbox-innovation@2x` |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each row fades in up with ease |
| CTA hover | Arrow grows with ease, specular button effect |
| CTA click | Navigates to destination URL |

---

## 8. Section: Related Resources

**Figma Node:** `166:1834` (1512×1243)

### Layout
- Section heading + subheading (centered)
- 3-card horizontal grid (1206px wide, each card 402×680px)
- "Explore all resources" CTA below grid (229px) → /resources/

### Card Structure
- Image/thumbnail area
- Category badge
- Title
- Metadata (author + date)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Cards fade in up staggered |
| Card hover | Subtle lift/shadow |
| Card click | Navigate to resource |
| CTA hover | Arrow grows, specular effect |

---

## 9. Section: Customer Quotes

**Figma Node:** `166:1409`

### Layout
- Large centered quote text (italic/serif)
- Attribution line below
- Company logo strip (3–4 logos)

### Content
- Page-specific quotes (not shared with Primary Core)
- Multiple variants rotate via carousel

### Interactions

| Trigger | Behavior |
|---------|----------|
| Auto-advance | Cycles through quote variants |
| Logo highlight | Active company logo turns to full color |
| Scroll in | Fade in up with ease |
| Transition | Crossfade ~500ms |

---

## 10. Section: FAQ Accordion

**Figma Node:** `166:1614` (768px wide, centered)

### FAQ Items (8 questions)

| # | Question |
|---|----------|
| 1 | Can we launch business banking without replacing our core? |
| 2 | How fast can we launch on a parallel core? |
| 3 | Will this disrupt the core we run today? |
| 4 | Do we have to staff the operation ourselves? |
| 5 | How does business account opening handle KYB and compliance? |
| 6 | How does M&A integration work on a parallel core? |
| 7 | How does this connect to the systems we already use? |
| 8 | How does this connect to the systems we already use? (variant) |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Click question | Expands/collapses answer (300ms ease) |
| Chevron icon | Rotates 45° on expand |
| Multiple open | Independent — multiple can be open simultaneously |
| Default state | All collapsed |
| Scroll in | Section fades in up |

---

## 11. Section: Footer CTA

**Figma Node:** `166:1278` (1517×2471)

### Layout
- Full-width gradient section with layered elliptical shapes (purple/dark tones)
- Background: Multiple overlapping ellipses (3000–4000px) creating depth
- Centered CTA block (934×236)

### Content
- **Heading:** Conversion-focused headline
- **CTA:** "Book a demo" (135px, specular style) → /contact/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | CTA fades in up |
| Button hover | Specular animation, arrow grows |
| Background | Gradients may subtly pulse |

---

## 12. Section: Footer

**Figma Node:** `166:1712`

Standard global footer component (shared across all pages). Multi-column navigation, legal text, social icons, Nymbus logo.

---

## 13. User Flow Diagram

```
[User arrives at /solutions/parallel-core/]
        |
        v
[Hero Section — 3D Cylinder (Spline)]
        |
        +---> [CTA: Book a Demo] ---> /contact/
        +---> [CTA: Explore Platform] ---> /platform/
        |
        v (scroll)
[Logo Bar — Trust Signals]
        |
        v (scroll)
[Stats / Intro Text]
        |
        v (scroll)
[Use Case Cards (×5)]
        |
        +---> Row 1: Vertical Brand Launch
        |       +---> [CTA: "Explore vertical brands"] → /labs/
        |
        +---> Row 2: New Line of Business
        |       +---> [CTA] → /contact/
        |
        +---> Row 3: M&A Integration
        |       +---> [CTA] → /contact/
        |
        +---> Row 4: Private-Label Banking
        |       +---> [CTA] → /contact/
        |
        +---> Row 5: Sandbox / Innovation
        |       +---> [CTA] → /contact/
        |
        v (scroll)
[Related Resources — 3 cards]
        |
        +---> [Card click] → resource page
        +---> [CTA: "Explore all resources"] → /resources/
        |
        v (scroll)
[Customer Quotes Carousel]
  - Page-specific quotes, auto-rotating
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

1. **Resource filtering** — Should the Related Resources section filter by a specific tag? — STILL OPEN (Mike unsure)
2. **Resource card content** — What content populates the 3 link component cards? — STILL OPEN (Mike needs to see the copy to identify)

---

## Appendix: Navigation Entry Points

| Source | Action | Destination |
|--------|--------|-------------|
| Homepage Hero Chatbox | Pill: "Move to a modern core" → "Launch a parallel core" CTA | /solutions/parallel-core/ |
| Header Nav | Solutions dropdown | /solutions/parallel-core/ |

### Animation References

| Animation | Reference |
|-----------|-----------|
| Scroll reveal | fade in up with ease |
| Count-up | https://reactbits.dev/text-animations/count-up |
| Specular button | https://reactbits.dev/components/specular-button |
| Logo marquee | https://reactbits.dev/animations/logo-loop |
| Grain texture | https://reactbits.dev/backgrounds/grainient |
| Cylinder 3D | Spline (see Hero section for links) |
