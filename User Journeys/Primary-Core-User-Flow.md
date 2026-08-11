# Primary Core Page — User Flow & Journey

**Source:** Figma Dev Hand-off — Product Pages | Core (Node 1:4)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=1-4  
**Page Figma Node:** `166:2058` (1512 × 8820)  
**Proposed URL:** /solutions/primary-core/  
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
7. [Section: Bento Grid (Tabbed)](#7-section-bento-grid-tabbed)
8. [Section: Migration Cards](#8-section-migration-cards)
9. [Section: Customer Quotes](#9-section-customer-quotes)
10. [Section: FAQ Accordion](#10-section-faq-accordion)
11. [Section: Footer CTA](#11-section-footer-cta)
12. [Section: Footer](#12-section-footer)
13. [Bento Hover States (Design Reference)](#13-bento-hover-states-design-reference)
14. [User Flow Diagram](#14-user-flow-diagram)
15. [Open Questions](#15-open-questions)

---

## 1. Page Overview

The Primary Core page targets institutions ready for a full core replacement or de novo launch. It uses a tabbed bento grid and migration-focused feature cards to demonstrate platform capabilities.

**Target audience:** Banks and credit unions evaluating a complete core modernization or charter launch on Nymbus infrastructure.

---

## 2. Scroll Journey

| # | Section | Y Position | Figma Node | Purpose |
|---|---------|-----------|------------|---------|
| 1 | Navigation (dark) | 0–87 | `166:2409` | Global nav, persistent |
| 2 | Hero + 3D Chrome Blob | 0–847 | `166:2105` / `166:2133` | Value prop + CTAs |
| 3 | Hero CTAs | 459–604 | `166:2141` | Book a demo / Contact sales |
| 4 | Logo Bar | 894–1169 | `166:2752` | Trust signals |
| 5 | Two-Column Intro | 1222–1545 | `166:2149` | Problem/solution framing |
| 6 | Bento Grid (Tabbed) | 1545–2868 | `166:2191` | Core Replacement / De Novo tabs |
| 7 | Migration Feature Cards | 2918–3848 | `166:2059` | Two-column deep-dive cards |
| 8 | Customer Quotes | 3862–4689 | `166:2460` | Social proof carousel |
| 9 | FAQ Accordion | 4682–6256 | `166:2658` | 7 expandable questions |
| 10 | Footer CTA | — | Present | Gradient CTA section |
| 11 | Footer | 8173+ | `166:2751` | Global footer |

---

## 3. Section: Navigation

**Figma Node:** `166:2409`

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

**Figma Nodes:** `166:2105` / `166:2133` (background), `166:2750` (title), `166:2141` (CTAs)

### Layout
- Full-width dark gradient background with organic elliptical shapes
- 3D chrome/holographic cylinder illustration (centered, ~1517 × 1171px)
- Centered headline text overlaid on cylinder
- Two CTA buttons below headline

### Content
- **Headline:** Large display text (~754px wide)
- **Subtitle:** "Powered by the industry's first secure MCP server." (856px wide)
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

**Figma Node:** `166:2752`

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

**Figma Nodes:** `166:2149` / `166:2150`

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

## 7. Section: Bento Grid (Tabbed)

**Figma Node:** `166:2191` (1199×1323)

### Tab Toggle
- **Node:** `166:2196` (339×45 segmented control)
- Tab 1 (active): "Core Replacement" — filled/highlighted
- Tab 2: "De Novo Launch" — text only
- **Tab switch animation:** Slide

### Bento Grid — "Core Replacement" Tab (Default)

**Node:** `166:2202`

| Position | Card | Dimensions | Content |
|----------|------|-----------|---------|
| Top-left (large) | Feature Hero | 771×413 | Core convergence linework + heading + body |
| Top-right upper | Graph Card | 387.7×200 | Line graph + text |
| Top-right lower | Mosaic Card | 387.7×173 | Colorful mosaic/grid + text |
| Bottom-left | Road Card | 254×199 | Isometric road with particles |
| Bottom-center | Text Card | 291×199 | Heading + body only |
| Bottom-right | Illustration Card | 574×199 | Engine/dashboard diagram |

### Bento Grid — "De Novo Launch" Tab

| Position | Card | Illustration |
|----------|------|-------------|
| Top-left (large) | Charter-to-First-Account | Timeline/journey diagram |
| Top-right upper | Launch Ready | Checklist cards with progress |
| Top-right lower | No Ops to Build | Infrastructure diagram |
| Bottom-left | Platform Isometric | 3D platform view |
| Bottom-center | Text Card | Text only |
| Bottom-right | Guided Path to Launch | Step-by-step milestones |

### Bento Card Interactions

| Trigger | Behavior |
|---------|----------|
| Tab click | Bento grid content slides to new tab |
| Card hover | Gradient activates, illustration visible, text shifts down, glow effects appear (~300ms ease) |
| Card click | No navigation — hover-only (reference Santiago's comments for animations) |
| Scroll in | Cards fade in up with stagger |

---

## 8. Section: Migration Cards

**Figma Node:** `166:2059` (1512×929)

### Layout
- Two-column layout within 1208px container
- Each card: ~578px wide × ~778px tall
- Not clickable, no links

### Card 1 (Left)
- Eyebrow label
- Multi-line heading
- Description paragraph
- Illustration: `nymbus-migration-card@2x` (578×388) — migration process graphic

### Card 2 (Right)
- Eyebrow label
- Multi-line heading
- Description paragraph
- Illustration: Core convergence graphic (445×445) — orbital rings, data points, Nymbus logo badge

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Cards fade in up with stagger |
| Illustration | May have subtle ambient animation |

---

## 9. Section: Customer Quotes

**Figma Node:** `166:2460`

### Layout
- Large centered quote text (italic/serif)
- Attribution line below
- Company logo strip (3–4 logos)

### Content
- Page-specific quotes (not shared with Parallel Core)
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

**Figma Node:** `166:2658` (768px wide, centered)

### FAQ Items (7 questions)

| # | Question |
|---|----------|
| 1 | Can we launch business banking without replacing our core? |
| 2 | How long does a core conversion take? |
| 3 | Can we launch a brand-new institution on Nymbus? |
| 4 | Do we have to staff the operation ourselves? |
| 5 | How does business account opening handle KYB and compliance? |
| 6 | What if we want to launch something new before replacing the core? |
| 7 | How does this connect to the systems we already use? |

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

**Figma Node:** `166:2107`

### Layout
- Full-width gradient section with layered elliptical shapes
- Centered CTA block

### Content
- **Heading:** Conversion-focused headline
- **CTA:** "Book a demo" (specular style) → /contact/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | CTA fades in up |
| Button hover | Specular animation, arrow grows |
| Background | Gradients may subtly pulse |

---

## 12. Section: Footer

**Figma Node:** `166:2751`

Standard global footer component (shared across all pages). Multi-column navigation, legal text, social icons, Nymbus logo.

---

## 13. Bento Hover States (Design Reference)

**Reference Frames:** `20:1117` (Core Replacement), `20:1321` (De Novo Launch)

### Hover Animation Spec

> "On hover the card turns to color: gradient moves, icon shows, arrow shows, text moves down with ease and gets bigger"

| Property | Default | Hover |
|----------|---------|-------|
| Background | Dark/muted | Color gradient (animated) |
| Illustration | Static/faded | Animated/highlighted |
| Text position | Normal | Translates down ~8px |
| Text size | Normal | Scales up slightly |
| Arrow icon | Hidden/small | Visible, grows |
| Grain overlay | Present | Animated grain movement |
| Transition | — | ease, ~300ms |

---

## 14. User Flow Diagram

```
[User arrives at /solutions/primary-core/]
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
[Bento Grid Section]
  - Default: "Core Replacement" tab active
        |
        +---> [Clicks "De Novo Launch" tab] ---> Content slides to new grid
        |
        +---> [Hovers bento card] ---> Card animates (color, movement, glow)
        |     (no click navigation)
        |
        v (scroll)
[Migration Feature Cards]
  - Two informational cards with illustrations
  - Not clickable
        |
        v (scroll)
[Customer Quotes Carousel]
  - Page-specific quotes, auto-rotating
        |
        v (scroll)
[FAQ Accordion]
  - 7 questions, multiple can be open, all start collapsed
        |
        v (scroll)
[Footer CTA]
        |
        +---> [CTA: Book a Demo] ---> /contact/
        |
        v
[Footer]
```

---

## 15. Open Questions

1. **Resource card content** — What content populates the 3 link component cards (tagged by product)? — STILL OPEN (Mike needs to see the copy to identify the section)

---

## Appendix: Navigation Entry Points

| Source | Action | Destination |
|--------|--------|-------------|
| Homepage Hero Chatbox | Pill: "Move to a modern core" → CTA | /solutions/primary-core/ |
| Homepage Hero Chatbox | Pill: "Launch a de novo" → CTA | /solutions/primary-core/#de-novo |
| Header Nav | Solutions dropdown | /solutions/primary-core/ |

### Animation References

| Animation | Reference |
|-----------|-----------|
| Scroll reveal | fade in up with ease |
| Count-up | https://reactbits.dev/text-animations/count-up |
| Specular button | https://reactbits.dev/components/specular-button |
| Logo marquee | https://reactbits.dev/animations/logo-loop |
| Grain texture | https://reactbits.dev/backgrounds/grainient |
| Cylinder 3D | Spline (see Hero section for links) |
