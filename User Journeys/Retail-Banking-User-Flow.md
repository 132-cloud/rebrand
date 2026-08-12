# Retail Banking Page — User Flow & Journey

**Source:** Figma Dev Hand-off — Retail Banking Page (Node 222:2025)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=222-2025  
**Page Figma Node:** `222:2025` (1512 × 10926)  
**Proposed URL:** /solutions/retail-banking/  
**Last Updated:** August 12, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview](#1-page-overview)
2. [Scroll Journey](#2-scroll-journey)
3. [Section: Navigation](#3-section-navigation)
4. [Section: Hero](#4-section-hero)
5. [Section: Logo Bar](#5-section-logo-bar)
6. [Section: Strategy Band](#6-section-strategy-band)
7. [Section: Features (5 rows)](#7-section-features-5-rows)
8. [Section: Consumer Segments](#8-section-consumer-segments)
9. [Section: Customer Quotes](#9-section-customer-quotes)
10. [Section: FAQ Accordion](#10-section-faq-accordion)
11. [Section: Footer CTA](#11-section-footer-cta)
12. [Section: Footer](#12-section-footer)
13. [User Flow Diagram](#13-user-flow-diagram)
14. [Open Questions](#14-open-questions)

---

## 1. Page Overview

The Retail Banking page targets financial institutions looking to launch or modernize consumer-facing banking experiences. It uses a vertical narrative of alternating feature rows and a consumer-segment card grid to demonstrate how Nymbus enables institutions to win and retain primary banking relationships with everyday consumers.

**Target audience:** Banks and credit unions evaluating Nymbus for launching modern retail/consumer banking products, digital-first experiences, or winning primary deposit relationships.

---

## 2. Scroll Journey

| # | Section | Y Position | Figma Node | Purpose |
|---|---------|-----------|------------|---------|
| 1 | Navigation (dark) | 0–87 | `222:2121` | Global nav, persistent |
| 2 | Hero | 0–787 | `222:2033` / `222:2070` | Value prop + CTAs |
| 3 | Logo Bar | 826–1101 | `222:2461` | Trust signals + stat |
| 4 | Strategy Band | 1222–1555 | `222:2079` | Problem/solution framing |
| 5 | Feature Row 1: Account Opening | 1675–2151 | `222:2490` | Digital account opening |
| 6 | Feature Row 2: Experience | 2201–2681 | `222:2528` | Mobile-first banking experience |
| 7 | Feature Row 3: Money Movement | 2731–3207 | `222:2559` | Payments & transfers |
| 8 | Feature Row 4: Engagement | 3257–3733 | `222:2601` | Relationship deepening |
| 9 | Feature Row 5: Operations | 3783–4259 | `222:2643` | Managed services |
| 10 | Consumer Segments | 4354–5597 | `222:2685` | Lifecycle segmentation |
| 11 | Customer Quotes | 5596–6586 | `222:2168` / `222:2349` | Social proof |
| 12 | FAQ Accordion | 6586–8299 | `222:2373` | Objection handling (8 items) |
| 13 | Footer CTA | 9745–10059 | `222:2713` | Final conversion |
| 14 | Footer | 10279–10926 | `222:2719` | Global footer |

---

## 3. Section: Navigation

**Figma Node:** `222:2121` (Nav dark instance: `222:2159`)

- Dark variant of the global navigation component
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

**Figma Nodes:** `222:2033` (Hero wrapper), `222:2070` (content frame), `222:2034` (background)

### Layout
- Full-width warm gradient background (cream/peach organic elliptical shapes — same treatment as Business Banking page)
- Glass board overlay with vertical stripe pattern (translucent)
- Centered content container (1034px wide)
- Navigation bar overlaid at top (dark variant)

### Content

- **Headline:** "WIN THE PRIMARY BANKING RELATIONSHIP."
  - Style: Bold uppercase, 76px display
  - Animation: Static blur in Figma — implements as blur-dissolve-on-load (consistent with other hero sections across the site: text resolves from blurred to clear on page load)
- **Subtitle:** "Consumers are moving their direct deposit and daily banking to apps that feel faster than your core. Launch the everyday experience they expect on a platform built to move with you."
  - Style: 24px, centered, 760px wide
- **CTA 1:** "Book the demo" (149px) → /contact/
- **CTA 2:** "See the platform" (161px) → /platform/

### Interactions & Animations

| Trigger | Behavior |
|---------|----------|
| Page load | Headline text resolves from blur (blur-dissolve, consistent with site-wide hero pattern) |
| Scroll in | Content fades in up with ease |
| CTA hover | Arrow grows with ease, specular button effect |
| Background | Ambient organic gradient (static or slow drift) |

---

## 5. Section: Logo Bar

**Figma Node:** `222:2461` (Frame 2147238561)

### Layout
- Eyebrow text: "TRUSTED BY TOP FINANCIAL INSTITUTIONS" (centered, uppercase, 14px bold)
- Horizontally scrolling marquee of logos (duplicated container for infinite loop)
- Stat line below logos

### Logos (5 per loop, greyscale)
| # | Logo | Dimensions |
|---|------|-----------|
| 1 | image 9 | 66×20 |
| 2 | image 5 | 93.5×20 |
| 3 | image 7 | 98×30 |
| 4 | image 13 | 85.5×15 |
| 5 | image 11 | 70×40 |

### Stat Line
- "25 digital banks launched and cores deployed on **Nymbus**"

### Interactions & Animations

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Default | Continuous horizontal marquee | https://reactbits.dev/animations/logo-loop |
| Scroll in | Section fades in |
| Quote active | Logo turns to color when matched with customer quote | Shared pattern |

---

## 6. Section: Strategy Band

**Figma Node:** `222:2079` (Frame 58)

### Layout
- Two-column text layout with top and bottom border lines
- Left column: 577px (bold heading)
- Right column: 482px (body paragraph)
- Container: 1164px wide, centered, 100px vertical padding

### Content
- **Heading:** "Earn primary, not just an open account."
- **Body:** "Consumers keep their balances where the experience keeps up with their lives. Nymbus gives institutions the platform to deliver modern everyday banking, so the account becomes the relationship, and the relationship stays with you."

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Content fades in up with ease |

---

## 7. Section: Features (5 rows)

**Container Figma Node:** `222:2164` (Group 46705805 — 1280px wide, vertical border lines)

All 5 feature rows follow an identical layout pattern: text content on the left (~480px) + illustration on the right (~710px). Each row includes:
- Bold heading (42px)
- Body paragraph (18px)
- CTA button (specular black style)
- Dark illustration card

### Row 1: Account Opening

**Figma Nodes:** `222:2490` (wrapper), `222:2522` (text), `222:2491` (graphic)

| Element | Content |
|---------|---------|
| Heading | From intent to funded. |
| Body | Move applicants from intent to funded with digital account opening built for consumers. Identity verification, funding, and first deposit run in a single flow, so new customers clear the door in minutes instead of a branch visit. |
| CTA | "Explore account opening" → /platform/#account-opening |
| Graphic | `intent-to-funded-flow@2x 1` (710×476) — Account opening flow diagram |

### Row 2: Experience

**Figma Nodes:** `222:2528` (wrapper), `222:2553` (text), `222:2529` (graphic)

| Element | Content |
|---------|---------|
| Heading | The experience they'd switch for. |
| Body | Give account holders the mobile-first banking they already expect from a neobank, across iOS, Android, and responsive web, launched as one connected experience instead of a multi-year build across a patchwork of vendors. |
| CTA | "Explore the platform" → /platform/#digital-banking |
| Graphic | `experience-screen@2x 1` (715×480) — Mobile banking screens |

### Row 3: Money Movement

**Figma Nodes:** `222:2559` (wrapper), `222:2595` (text), `222:2560` (graphic)

| Element | Content |
|---------|---------|
| Heading | Move money the way they expect. |
| Body | ACH transfers, bill pay, person-to-person payments, card controls, and mobile check deposit run behind your accounts, so daily banking works the way consumers already expect, without sending them to another app to get it. |
| CTA | "Explore the platform" → /platform/#payments-hub |
| Graphic | `money-movement-loop@2x 1` (710×476) — Circular money movement diagram |

### Row 4: Engagement & Insights

**Figma Nodes:** `222:2601` (wrapper), `222:2637` (text), `222:2602` (graphic)

| Element | Content |
|---------|---------|
| Heading | Turn accounts into relationships. |
| Body | Cash flow insights, transaction categorization, alerts, credit monitoring, and rewards run inside the account, turning everyday balances and activity into loyalty, so the primary relationship deepens instead of drifting to a competitor. |
| CTA | "See engagement tools" → /platform/#engage |
| Graphic | `relationship-depth@2x 1` (711×476) — Relationship/engagement visualization |

### Row 5: Managed Operations

**Figma Nodes:** `222:2643` (wrapper), `222:2679` (text), `222:2644` (graphic)

| Element | Content |
|---------|---------|
| Heading | Run the operations behind retail growth. |
| Body | Retail banking creates operational load. Nymbus Managed Services can support onboarding, servicing, contact center, back-office work, compliance workflows, and fraud operations, so your team can scale everyday banking without carrying every function alone. |
| CTA | "Explore managed services" → /managed-services/ |
| Graphic | `multi-surface-spec@2x 1` (711×476) — Multi-surface/operations diagram |

### Feature Row Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each row fades in up with ease |
| CTA hover | Arrow grows with ease, specular button style |
| Graphics | Static dark illustrations (no hover interaction) |

---

## 8. Section: Consumer Segments

**Figma Node:** `222:2685` (Frame 2147238565)

### Layout
- Centered heading + subtitle
- 3-column card grid (each 402×680px, rounded 30px corners)
- Each card: title + description + blurred preview image
- Border-top and border-bottom on section

### Header Content
- **Heading:** "Built to serve consumers across the relationship."
  - Style: 56px bold, blur-dissolve-on-load (resolves from blurred to clear on scroll into viewport, consistent with site-wide pattern)
- **Subtitle:** "Nymbus supports differentiated retail banking experiences across the lifecycle, from the first account a customer opens to the full primary relationship they grow into."

### Segment Cards (3 columns)

| Column | Title | Description |
|--------|-------|-------------|
| 1 | New account holders | Fast digital account opening and funding for consumers choosing where to start their banking relationship. |
| 2 | Everyday banking customers | Accounts, payments, cards, and money movement for consumers managing daily finances on mobile and web. |
| 3 | Primary relationships | Insights, engagement, rewards, and connected experiences for customers who make you their main financial home. |

Each card includes a blurred dark preview image at the bottom (blur 7.5px, rounded corners, drop shadow). Cards are **not clickable** — informational only.

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading resolves from blur, columns stagger fade in up |
| Card hover | Preview image unblurs (blur 7.5px → 0), subtle lift |
| Card default | Preview images blurred at 7.5px |
| Card click | None — non-clickable, hover-only interaction |

---

## 9. Section: Customer Quotes

**Figma Nodes:** `222:2168` (Frame 2147238549), `222:2349` (CustomerQuotes)

### Layout
- Eyebrow/divider line at top
- Large centered quote text (bold uppercase, 56px)
- Attribution line below (bold name + role/company)
- Divider line
- Company logos below (3 logos visible — at varied opacity: active = full, inactive = 50%)
- Background: 3-column masonry testimonial card grid (hidden — used for animated background or carousel variant)

### Quote Carousel Content (multi-quote)

| # | Quote | Attribution | Logo |
|---|-------|-------------|------|
| 1 | "Our partnership with Nymbus has enabled us to create a truly digital-first experience that serves our community's specific needs wherever they may go for work." | Stephen Owen, President & CEO, First Entertainment Credit Union and CineFi | First Entertainment CU |
| 2 | "Businesses need digital banking that fits how they operate today. Nymbus allowed us to make that vision a reality." | Sara Dolan, CFO, MSUFCU | MSUFCU |
| 3 | "This is the most user-friendly banking system I've ever trained on. Fast, simple and intuitive." | Aleda DeMaria, Executive VP, COO, PeoplesBank | PeoplesBank |

### Background Testimonials Grid (hidden — node `222:2175`)
- 3-column masonry layout of 15 testimonial cards (5 per column)
- Each card: quote text + avatar + name/title
- Animates behind the active quote as ambient background motion

### Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Auto-advance | Cycles through 3 quotes | — |
| Logo highlight | Active company logo at full opacity, others at 50% | — |
| Scroll in | Quote text fades in up | Global |
| Background cards | Masonry grid scrolls/animates behind main quote | https://reactbits.dev/components/masonry |
| Transition | Smooth crossfade between quotes (~500ms) | — |

---

## 10. Section: FAQ Accordion

**Figma Node:** `222:2373` (Frame 2147238550), `222:2374` (Group 2085664964)

### Layout
- Section title: "FAQs" (56px bold, blur-dissolve-on-load)
- Accordion items (768px wide, centered)
- Each item: question (24px bold) + answer text (18px) + expand/collapse icon (× rotated 45°)
- Vertical border lines (1280px wide decorative frame)

### FAQ Items (8 questions)

| # | Question | Answer |
|---|----------|--------|
| 1 | Can we launch a new retail experience without replacing our core? | Yes. Nymbus can run as a parallel core beside the system you operate today, so you can launch a modern retail brand or experience without touching your primary core. |
| 2 | How fast can we get a retail product to market? | A retail brand or new experience can launch on a parallel core faster than a traditional core build, with technology, operations, and support connected from the start. |
| 3 | Which channels does the platform support? | Consumers get one connected experience across iOS, Android, and responsive web, so daily banking looks and works the same everywhere they bank. |
| 4 | Do we have to staff the operation ourselves? | No. Nymbus Managed Services can run onboarding, servicing, disputes, and back-office work behind your brand, built and operated by the team behind the platform. |
| 5 | How does account opening handle identity and compliance? | Applications can be scored and screened through integrated identity verification and KYC, with referred cases reviewed against your rules. You keep regulatory ownership; execution runs underneath. |
| 6 | Can we offer the money movement consumers expect? | Yes. ACH transfers, bill pay, person-to-person payments, and mobile check deposit can run behind your accounts, with the controls and limits your institution sets. |
| 7 | How does this connect to the systems we already use? | Nymbus Connect integrates your tools and partners through modern APIs, so integration does not require custom middleware for every connection. |
| 8 | What makes Nymbus different from a traditional core for retail banking? | The platform is designed from the ground up to deliver the everyday experience modern consumers expect, plus the engagement and insight tools that turn an open account into a primary relationship. |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Click question row | Toggles answer visibility (expand/collapse) |
| Expand animation | Slide down with ease, 300ms |
| Collapse animation | Slide up, 250ms |
| Icon | × icon rotated 45° (acts as expand/collapse indicator) |
| Scroll in | FAQ section fades in, heading resolves from blur |
| Default state | All collapsed |

---

## 11. Section: Footer CTA

**Figma Node:** `222:2713` (CTA Footer)

### Layout
- Positioned over gradient footer background (`222:2026`)
- Large display heading (bold uppercase, 76px, blur effect)
- CTA button centered below

### Content
- **Heading:** "WIN THE PRIMARY BANKING RELATIONSHIP."
  - Mirrors hero headline treatment (blur-dissolve-on-load, consistent with site-wide pattern)
- **CTA:** "Book a demo" (134px) → /contact/
  - Style: Black specular button

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading resolves from blur, fades in up |
| CTA hover | Arrow grows with ease, specular highlight |
| Background | Gradient ellipses from `222:2026` (warm gradient, organic shapes) |

---

## 12. Section: Footer

**Figma Node:** `222:2719` (Footer instance)

Standard global footer component (shared across all pages). Multi-column navigation, legal text, social icons, Nymbus logo.

---

## 13. User Flow Diagram

```
[User arrives at /solutions/retail-banking/]
        |
        v
[Hero — "Win The Primary Banking Relationship"]
        |
        +---> [CTA: Book the demo] ---> /contact/
        +---> [CTA: See the platform] ---> /platform/
        |
        v (scroll)
[Logo Bar — Trust Signals + "25 digital banks" stat]
        |
        v (scroll)
[Strategy Band — "Earn primary, not just an open account."]
        |
        v (scroll)
[Feature Row 1: Account Opening — "From intent to funded."]
        |
        +---> [CTA: Explore account opening] ---> /platform/#account-opening
        |
        v (scroll)
[Feature Row 2: Experience — "The experience they'd switch for."]
        |
        +---> [CTA: Explore the platform] ---> /platform/#digital-banking
        |
        v (scroll)
[Feature Row 3: Money Movement — "Move money the way they expect."]
        |
        +---> [CTA: Explore the platform] ---> /platform/#payments-hub
        |
        v (scroll)
[Feature Row 4: Engagement — "Turn accounts into relationships."]
        |
        +---> [CTA: See engagement tools] ---> /platform/#engage
        |
        v (scroll)
[Feature Row 5: Operations — "Run the operations behind retail growth."]
        |
        +---> [CTA: Explore managed services] ---> /managed-services/
        |
        v (scroll)
[Consumer Segments — 3 lifecycle cards]
  - New account holders
  - Everyday banking customers
  - Primary relationships
  - Hover: preview image unblurs
  - Not clickable
        |
        v (scroll)
[Customer Quotes — Multi-quote carousel]
  - Stephen Owen / First Entertainment CU
  - Sara Dolan / MSUFCU
  - Aleda DeMaria / PeoplesBank
        |
        v (scroll)
[FAQ Accordion — 8 questions, all start collapsed]
        |
        +---> [Clicks any FAQ] ---> Expands/collapses answer
        |
        v (scroll)
[Footer CTA — "Win The Primary Banking Relationship"]
        |
        +---> [CTA: Book a demo] ---> /contact/
        |
        v
[Footer — Standard navigation]
```

---

## Primary Conversion Paths

| Path | Entry Point | Destination | Intent |
|------|-------------|-------------|--------|
| Demo | Hero CTA / Footer CTA | /contact/ | Book a demo |
| Platform | Hero CTA | /platform/ | Full platform overview |
| Account Opening | Feature Row 1 CTA | /platform/#account-opening | Explore onboarding |
| Digital Banking | Feature Row 2 CTA | /platform/#digital-banking | Explore digital experience |
| Payments | Feature Row 3 CTA | /platform/#payments-hub | Explore money movement |
| Engage | Feature Row 4 CTA | /platform/#engage | See engagement tools |
| Managed Services | Feature Row 5 CTA | /managed-services/ | Explore ops support |

---

## Page Differentiation from Business Banking

| Aspect | Retail Banking | Business Banking |
|--------|---------------|-----------------|
| Hero headline | "Win the primary banking relationship" | "Banking built for how businesses actually operate" |
| Primary CTA | "Book the demo" + "See the platform" | "Try the demo" |
| Color palette | Warm cream/peach hero → white body | Same warm palette |
| Feature format | 5 alternating rows (text left, graphic right) | 3 alternating rows + Platform Overview demo |
| Segment focus | Consumer lifecycle (new → everyday → primary) | Business lifecycle (solo → small → commercial) |
| FAQ count | 8 questions | 8 questions |
| Strategy band copy | "Earn primary, not just an open account." | "Launch business banking around the customer, not the category." |
| Feature topics | Account opening, experience, money movement, engagement, operations | Account opening, payments, controls |

---

## Animation References

| Animation | Reference |
|-----------|-----------|
| Scroll reveal | fade in up with ease |
| Specular button | https://reactbits.dev/components/specular-button |
| Logo marquee | https://reactbits.dev/animations/logo-loop |
| Grain texture | https://reactbits.dev/backgrounds/grainient |
| Blur-dissolve text | Text starts blurred (4–7px), resolves to clear on page load / scroll into viewport |
| Masonry background | https://reactbits.dev/components/masonry |
| Segment card unblur | Preview image transitions from blur(7.5px) to blur(0) on hover (~300ms ease) |

---

## 14. Open Questions

1. ~~**Segment card destinations**~~ — ✅ RESOLVED: Non-clickable. Simple interaction: preview image unblurs on hover.
2. ~~**FAQ default state**~~ — ✅ RESOLVED: All collapsed by default.
3. ~~**Hero blur animation**~~ — ✅ RESOLVED: Static blur in Figma. Implements as blur-dissolve-on-load, consistent with other hero blurs across the site (text resolves from blurred to clear on page load).
4. ~~**Quote carousel**~~ — ✅ RESOLVED: Multi-quote carousel cycling through First Entertainment CU (Stephen Owen), MSUFCU (Sara Dolan), and PeoplesBank (Aleda DeMaria).
5. ~~**Feature row CTA destinations**~~ — ✅ RESOLVED: Anchors pulled from Site-URLs.txt — `/platform/#account-opening`, `/platform/#digital-banking`, `/platform/#payments-hub`, `/platform/#engage`, `/managed-services/`.
