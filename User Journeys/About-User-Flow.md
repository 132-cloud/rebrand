# About Page User Flow & Journey

**Source:** Figma Dev Hand-off — About (Node 1:8)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=1-8  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Global Animations](#2-global-animations)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Leadership Intro](#4-section-2-leadership-intro)
5. [Section 3: Leadership Carousel](#5-section-3-leadership-carousel)
6. [Section 4: Board of Directors](#6-section-4-board-of-directors)
7. [Section 5: Investors](#7-section-5-investors)
8. [Section 6: CTA Section](#8-section-6-cta-section)
9. [Section 7: Footer](#9-section-7-footer)
10. [Navigation & Routing](#10-navigation--routing)

---

## 1. Page Overview & Scroll Journey

The About page is a single-scroll corporate page (1512px wide, ~4835px tall) that communicates Nymbus's mission, leadership team, board governance, and investor backing. It builds credibility and trust through a top-down narrative: mission → people → governance → capital.

**Proposed URL:** /about/

**Scroll Order (top to bottom):**

| # | Section | Y Position | Figma Node | Purpose |
|---|---------|-----------|------------|---------|
| 1 | Navigation (dark) | 0–87 | `17:8703` | Global nav, persistent |
| 2 | Hero + Intro | 0–678 | `17:8687` / `17:8704` | Mission statement + positioning |
| 3 | Leadership Intro | 678–1152 | `17:8710` | Section header for team |
| 4 | Leadership Carousel | 1212–1809 | `17:8919` / `17:8945` | Executive team cards |
| 5 | Board of Directors | 1854–2553 | `17:8716` / `17:8726` | Board members grid |
| 6 | Investors | 2638–3307 | `17:8721` / `17:8803` | Investor logos |
| 7 | CTA Section | 3403–4188 | `17:8779` | Conversion prompt |
| 8 | Footer | 4188–4835 | `17:8802` | Global footer |

---

## 2. Global Animations

These apply across the entire About page (inherited from site-wide specs):

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Scroll reveal | All components fade in up with ease on scroll | Global spec |
| Button hover | Arrow grows with ease on hover | Sarah comment on 22:204 |
| Background noise | Animated grain/noise texture on hero gradient | Noise-Animation frame |
| Carousel navigation | Prev/Next arrows with hover state | — |

---

## 3. Section 1: Hero

**Figma Node:** `17:8687` (Hero, 1512×678)

### Layout
- Full-width dark gradient background with layered elliptical light shapes
- Noise/grain animation overlay (frame `17:8699`)
- Content area bounded by vertical guide lines at X=116 and X=1397 (1281px content width)
- Nav dark instance at top (0–87px)

### Background Elements
- `Gradient` frame containing `Lights` with 8 overlapping ellipses creating organic color depth
- `Noise-Animation` frame overlay for grain texture effect

### Content (node `17:8704`, Paragraph frame)

| Element | Content | Node |
|---------|---------|------|
| Eyebrow pill | "About" | `17:8707` |
| H1 Heading | "Nymbus is banking built to move." | `17:8708` |
| Body text | "Legacy systems and vendor roadmaps turn movement into maintenance, so the plan on the whiteboard never reaches production. Nymbus closes that gap, bringing together the infrastructure to launch, the operations to run, and the growth strategy to make the model work in market." | `17:8709` |

### Eyebrow Component
- Rounded rectangle pill (124×46px)
- Text centered within pill
- Used consistently across all sections as a section label

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Content fades in |
| Background | Noise texture animates (subtle grain movement) |
| Scroll | Content remains static, parallax TBD |

---

## 4. Section 2: Leadership Intro

**Figma Node:** `17:8710` (Container:margin, 1511×474)

### Layout
- Left-aligned content within guide lines (X=219 start)
- Content area bounded by vertical lines at X=115.5 and X=1396.5 (node `17:8770`)
- Section height: 474px (Y: 678–1152)

### Content

| Element | Content | Node |
|---------|---------|------|
| Eyebrow pill | "Leadership" | `17:8713` |
| Heading | "Led by banking, product, and growth operators." | `17:8714` |
| Body text | "Institutions do not stall for lack of ambition. Le..." | `17:8715` |

**Note:** Body text is truncated in metadata. Full text should be verified at Figma node `17:8715`.

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Fade in up with ease (global) |

---

## 5. Section 3: Leadership Carousel

**Figma Node:** `17:8919` (Frame 2147238574, 1900×597)

### Layout
- Horizontal scrollable carousel of leadership team cards
- Cards overflow the main 1512px frame (1900px wide), indicating horizontal scroll behavior
- Navigation arrows: Previous + Next buttons (node `17:8945`, positioned at X=1270, Y=1048)
- Each card: 586×597px (image + name + title)
- Cards are spaced with structural guide lines between them

### Card Component Structure

Each leadership card contains:

| Element | Dimensions | Details |
|---------|-----------|---------|
| Photo container | 586×389 | Headshot image (named "Image (Ed Gross)" as placeholder) |
| Name (Heading 4) | 389×87 | Centered name, 32px top padding |
| Title (Paragraph) | 389×39 | Role/title centered below name |

### Leadership Team Members

| # | Name | Title | Node |
|---|------|-------|------|
| 1 | Jeffrey Fonda | Chief Financial Officer | `17:8920` |
| 2 | Ed Gross | Chief Product Officer | `17:8928` |
| 3 | Michelle Prohaska | Chief Banking & Risk Officer | `17:8938` |
| 4 | Jeffery Kendall | Chairman & CEO | `17:8514` (canvas) |
| 5 | David Barone | Chief Strategy & Marketing Officer | `17:8542` (canvas) |
| 6 | Matthew Terry | Chief Technology Officer | `17:8521` (canvas) |
| 7 | Meredythe Miles | EVP, Solutions Consulting | `17:8549` / `17:8553` |
| 8 | Ashlie Jenkins | EVP, Development Services | `17:8528` (canvas) |
| 9 | Aimee Ford | Chief Revenue Officer | `17:8551` / `17:8555` |
| 10 | Matt Trevathan | Chief Artificial Intelligence Officer | `17:8535` (canvas) |

### Navigation Controls

| Element | Node | Size | Position |
|---------|------|------|----------|
| Previous button | `17:8946` | 40×40 | Left arrow icon |
| Next button | `17:8949` | 40×40 | Right arrow icon |

### Carousel Behavior
- **Visible cards on desktop:** 3 at a time
- **Auto-advance:** No — carousel only moves on button click or swipe
- **Navigation:** Previous/Next arrows + swipe on mobile

### Interactions

| Trigger | Behavior | Timing |
|---------|----------|--------|
| Click Previous | Scroll carousel left by one card width | 300ms ease |
| Click Next | Scroll carousel right by one card width | 300ms ease |
| Swipe (mobile) | Navigate between cards | Touch gesture |
| Scroll in | Section fades in up | Global |
| Card hover | Subtle lift/shadow (TBD) | — |

---

## 6. Section 4: Board of Directors

**Figma Nodes:** `17:8716` (header, 1511×405) + `17:8726` (grid, 1135×324)

### Layout
- Section header with eyebrow + heading (Y: 1854–2259)
- Board member grid below (Y: 2229–2553)
- 6 members in a single horizontal row
- Each portrait: 152.66×152.66px (circular/square headshot)
- Content bounded by guide lines (node `17:8773`)

### Section Header

| Element | Content | Node |
|---------|---------|------|
| Eyebrow pill | "Board of Directors" | `17:8719` |
| Heading | "Governed with banking and investor experience." | `17:8720` |

### Board Members Grid

| # | Name | Organization | LinkedIn | Node |
|---|------|-------------|----------|------|
| 1 | Peter Sobiloff | Insight Partners | https://www.linkedin.com/in/peter-sobiloff-7574a/ | `17:8728` |
| 2 | Rilla Delorier | Independent Board Director, Coastal Community Bank | https://www.linkedin.com/in/rilladelorier/ | `17:8735` |
| 3 | AJ Malhotra | Insight Partners | https://www.linkedin.com/in/ajmalhotra1/ | `17:8742` |
| 4 | Rajiv Gihwala | Insight Partners | https://www.linkedin.com/in/rajiv-gihwala-14277731/ | `17:8749` |
| 5 | Casey Callinsky | VyStar Credit Union | https://www.linkedin.com/in/casey-callinsky/ | `17:8756` |
| 6 | April Clobes | MSU Federal Credit Union | https://www.linkedin.com/in/april-clobes-551b6010/ | `17:8763` |

### Grid Card Structure

Each board member card:

| Element | Details |
|---------|---------|
| Portrait | 152.66×152.66px image |
| Name (Heading 4) | Below portrait, centered, 16px top padding |
| Organization (Paragraph) | Below name, centered |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Grid fades in up with ease |
| Member click | Opens LinkedIn profile in new tab |
| Member hover | Subtle scale/lift |

---

## 7. Section 5: Investors

**Figma Nodes:** `17:8721` (header, 1511×405) + `17:8803` (logo grid, 1626×234)

### Layout
- Section header with eyebrow + heading (Y: 2638–3043)
- Investor logo strip below (Y: 3073–3307)
- Logo strip extends beyond frame width (1626px) — may scroll/marquee
- Section bounded by guide lines (node `17:8776`)

### Section Header

| Element | Content | Node |
|---------|---------|------|
| Eyebrow pill | "Investors" | `17:8724` |
| Heading | "Backed by leaders in banking, fintech, and financial services." | `17:8725` |

### Investor Logo Grid

9 logos displayed in a horizontal strip, each in a 154×234px container. Each logo links to the investor's website (opens in new tab):

| # | Investor | URL | Logo Node | Logo Dimensions |
|---|----------|-----|-----------|----------------|
| 1 | PeoplesBank | https://www.bankatpeoples.com/ | `17:8805` | 131×32 |
| 2 | The Banc Funds | https://www.thebancfunds.com/ | `17:8826` | 131×32 |
| 3 | VyStar Credit Union | https://vystarcu.org/ | `17:8828` | 98×32 |
| 4 | Insight Partners | https://www.insightpartners.com/ | `17:8842` | 94×32 |
| 5 | ConnectOne Bank | https://www.connectonebank.com/ | `17:8847` | 131×32 |
| 6 | Michigan State University Federal Credit Union | https://www.msufcu.org/ | `17:8869` | 106×32 |
| 7 | Financial Services Capital | https://www.financialservicescapital.com/ | `17:8885` | 85×32 |
| 8 | Curql | https://www.curql.com/ | `17:8892` | 52×53 |
| 9 | Mendon Venture Partners | https://www.linkedin.com/company/mendon-venture-partners | `17:8894` | 60×32 |

### Navigation Controls

| Element | Node | Size |
|---------|------|------|
| Previous button | `17:8953` | 40×40 |
| Next button | `17:8956` | 40×40 |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Logos fade in |
| Logo click | Opens investor website in new tab |
| Click Previous/Next | Scroll logo strip (if more than visible) |

---

## 8. Section 6: CTA Section

**Figma Node:** `17:8779` (BG, 1512×785)

### Layout
- Full-width gradient background (matches hero gradient style)
- Centered content container (1140×544, node `17:8791`)
- Gradient uses layered elliptical light shapes + noise animation
- Positioned at Y: 3403–4188

### Background
- Same gradient/lights/noise pattern as hero section
- Creates visual bookend framing the page content

### Content

| Element | Content | Node |
|---------|---------|------|
| Heading (H2) | "TALK TO THE PEOPLE BEHIND THE PLATFORM POWERING MODERN BANKING GROWTH." | `17:8797` |
| Body text | "Institutions do not stall for lack of ambition. Le..." | `17:8799` |
| CTA Link | "Talk to an expert" | `17:8801` |

**Note:** Eyebrow pill has been removed from this section (previously showed "Investors" in error — now deleted from Figma).

### CTA Component (LinkComponent)

| Element | Details |
|---------|---------|
| Container | 185×58px (node `17:8800`) |
| Text | "Talk to an expert" |
| Destination | /contact/ |
| Style | Text link with arrow (not specular button) |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Content fades in up with ease |
| CTA hover | Arrow grows with ease (global button spec) |
| CTA click | Navigate to /contact/ |
| Background | Noise texture animates |

---

## 9. Section 7: Footer

**Figma Node:** `17:8802` (Footer instance, 1517×647)

### Layout
- Global footer component instance (shared across all pages)
- Full-width, positioned at Y: 4188–4835
- Contains standard footer navigation, legal links, and branding

### Interactions
- Standard footer behavior (see Footer user journey CSV for details)

---

## 10. Navigation & Routing

### Page URL
- **Proposed:** /about/

### Internal Links (from this page)

| Element | Destination |
|---------|-------------|
| Talk to an expert (CTA) | /contact/ |
| Board member portraits | LinkedIn profiles (new tab) — see Section 4 |
| Investor logos | Investor websites (new tab) — see Section 5 |
| Nav links | Standard header navigation |
| Footer links | Standard footer navigation |

### Inbound Links (to this page)

| Source | Element |
|--------|---------|
| Footer | "About" link in footer navigation |
| Header dropdowns | May appear under "Resources" or "Company" |

---

## User Flow Diagram

```
[User arrives on About page]
        |
        v
[Hero Section]
  - Reads mission: "Nymbus is banking built to move."
  - Understands positioning against legacy systems
        |
        v
[Scrolls to Leadership]
  - Sees "Led by banking, product, and growth operators."
  - Browses leadership carousel
        |
        +---> [Clicks Previous/Next] ---> Views more team members
        |
        v
[Scrolls to Board of Directors]
  - Sees 6 board members with governance credentials
  - Notes investor and banking representation
        |
        +---> [Clicks board member] ---> Opens LinkedIn profile (new tab)
        |
        v
[Scrolls to Investors]
  - Sees 9 investor logos
  - Builds confidence in financial backing
        |
        +---> [Clicks investor logo] ---> Opens investor website (new tab)
        |
        v
[Scrolls to CTA]
  - "TALK TO THE PEOPLE BEHIND THE PLATFORM POWERING MODERN BANKING GROWTH."
        |
        +---> [Clicks "Talk to an expert"] ---> /contact/
        |
        v
[Footer]
  - Standard navigation
```

---

## Open Questions

*All original open questions have been resolved. No outstanding items.*

### Resolved Items

| # | Question | Resolution |
|---|----------|-----------|
| 1 | CTA eyebrow label | Deleted from Figma — no eyebrow on CTA section |
| 2 | Leadership carousel behavior | Manual only (click/swipe), 3 cards visible on desktop |
| 3 | Board member click behavior | Links to LinkedIn profiles (new tab) |
| 4 | Investor logo click behavior | Links to respective websites (new tab) |
| 5 | CTA heading text | Updated to "TALK TO THE PEOPLE BEHIND THE PLATFORM POWERING MODERN BANKING GROWTH." (all caps) |
| 6 | Body text truncation | Ignored — verify in Figma if needed |
| 7 | Leadership photos | Fine as-is (placeholders in naming only) |
