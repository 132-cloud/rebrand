# Mobile Parallel Core Page User Flow & Journey

**Source:** Figma Dev Hand-off — Parallel Core Page (Node 261:10383)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=261-10383
**Last Updated:** August 19, 2026
**Design Lead:** Sarah Schaper
**Desktop Reference:** [Parallel-Core-User-Flow.md](../Parallel-Core-User-Flow.md) (Node 166:1275)

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Logo Bar](#4-section-2-logo-bar)
5. [Section 3: Stats / Intro Text](#5-section-3-stats--intro-text)
6. [Section 4: Use Case Cards (×5)](#6-section-4-use-case-cards-5)
7. [Section 5: Related Resources](#7-section-5-related-resources)
8. [Section 6: Customer Quotes](#8-section-6-customer-quotes)
9. [Section 7: FAQ Accordion](#9-section-7-faq-accordion)
10. [Section 8: Footer CTA](#10-section-8-footer-cta)
11. [Section 9: Footer](#11-section-9-footer)
12. [Mobile Interactions & Animations](#12-mobile-interactions--animations)
13. [User Journey Scenarios](#13-user-journey-scenarios)
14. [Accessibility & Touch Guidelines](#14-accessibility--touch-guidelines)
15. [Open Questions](#15-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Parallel Core page is a long-scroll product page (428×13855px) targeting institutions wanting to run a modern core alongside their legacy system. It showcases 5 deployment scenarios through stacked use-case cards, supported by social proof (quotes, logos), an FAQ section, and conversion CTAs.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| Spline 3D interactive cylinder | Static/scaled ring image | Performance on mobile (no Spline runtime) |
| Two-column use case cards (text + illustration) | Single-column stacked (text above illustration) | 428px viewport constraint |
| Two CTAs side-by-side (hero) | Two CTAs stacked vertically (300×45px each) | Full-width mobile buttons |
| Horizontal 3-card resource grid | Vertically stacked resource cards | Single-column mobile layout |
| Testimonial multi-column carousel | Single quote displayed at a time, full-width | Focus on readability |
| FAQ accordion (768px centered) | Full-width FAQ (396px content area) | Maximizes mobile reading space |
| Desktop mega-menu navigation | Mobile hamburger + overlay nav | Touch-first interaction |

### Design Dimensions

| Property | Value |
|----------|-------|
| Frame width | 428px |
| Total scroll height | 13855px |
| Content area | 394–396px (16–17px margins) |
| Nav height | 87px (fixed at top) |
| Proposed URL | /solutions/parallel-core/ |

---

## 2. Page Structure & Scroll Journey

**Scroll Order (top to bottom):**

| # | Section | Y Position | Figma Node | Height | Purpose |
|---|---------|-----------|------------|--------|---------|
| — | Nav Mobile (fixed) | 0 | `302:8138` | 87px | Persistent mobile header |
| 1 | Hero (BG + Ring + Content) | 0–894 | `261:10384` / `261:10386` / `261:10889` | ~894px | Value prop + dual CTAs |
| 2 | Logo Bar | 894–1119 | `261:10478` | 225px | Trust signals marquee |
| 3 | Stats / Intro Text | 1222–1720 | `261:10496` | 498px | Problem/solution framing |
| 4 | Use Case Cards (×5) | 1720–5369 | `261:10500` | 3649px | 5 deployment scenarios |
| 5 | Related Resources | 5371–7725 | `261:10579` | 2354px | 3 content cards + CTA |
| 6 | Customer Quotes | 7717–8857 | `261:10608` | 1140px | Social proof |
| 7 | FAQ Accordion | 8857–11104 | `261:10803` | 2247px | 8 expandable questions |
| 8 | Footer CTA (Gradient) | 10771–13855 | `261:10388` | 3084px | Primary conversion |
| 9 | Mobile Footer | 12780–13855 | `280:1217` | 1075px | Global footer (instance) |

---

## 3. Section 1: Hero

**Background Node:** `261:10384` (002, 428×826px — full-bleed dark image)
**Ring Node:** `261:10386` (Ring, 1379×1065px at X=−512, Y=−146)
**Content Node:** `261:10889` (Frame 2085664956, 394×542px at X=17, Y=203)

### Layout

```
┌─────────────────────────────────────┐
│ [Nav Mobile — fixed]                │
│                                     │
│       ╭──── 3D Ring ────╮           │  ← static holographic cylinder image
│       │                 │           │     (overflows frame, cropped to 428px)
│       ╰─────────────────╯           │
│                                     │
│  The Next-Generation                │
│  Banking Platform                   │  ← H1 heading
│                                     │
│  Powered by the industry's first    │
│  secure MCP server.                 │  ← body text
│                                     │
│  ┌─────────────────────────────┐    │
│  │       Book a demo           │    │  ← CTA 1 (primary)
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │      Explore Platform       │    │  ← CTA 2 (secondary)
│  └─────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

### Content

| Element | Content | Node |
|---------|---------|------|
| H1 Heading | [Parallel core-specific headline — layer name truncated] | `261:10890` |
| Body text | [Supporting copy — layer name truncated] | `261:10892` |
| CTA 1 (Button 5) | "Book a demo" | `306:9993` |
| CTA 2 (Button 5) | "Explore Platform" | `306:9995` |

**Note:** Figma layer names show placeholder text ("The Next-Generation Banking Platform" / "Powered by the industry's first secure MCP server.") — actual copy should be confirmed from desktop reference or Figma. Desktop hero uses the page-specific headline for Parallel Core.

### Hero Ring / 3D Element

| Property | Value |
|----------|-------|
| Frame | 1379×1065px (overflows 428px viewport) |
| Position | X=−512, Y=−146 (center-cropped) |
| Asset | `holo-cylinder` (rounded-rectangle, likely raster export) |
| Desktop behavior | Spline 3D interactive animation |
| Mobile behavior | Static image (no Spline runtime) |

### CTA Buttons

| Element | Dimensions | Destination |
|---------|-----------|-------------|
| Book a demo | 300×45px | /contact/ |
| Explore Platform | 300×45px | /platform/ |

Both CTAs are stacked vertically with 75px gap (Y=422 to Y=497), centered at X=47 within content area.

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Content fades in; ring is static (no Spline on mobile) |
| Scroll | Content scrolls naturally; ring parallax TBD |
| CTA tap | Navigate to respective destination |
| CTA tap feedback | Brief background highlight |

---

## 4. Section 2: Logo Bar

**Figma Node:** `261:10478` (Frame 2147238561, 428×225px at Y=894)

### Layout

```
┌─────────────────────────────────────┐
│  Trusted by top financial           │  ← eyebrow text (centered)
│  institutions                       │
│                                     │
│  [logo][logo][logo][logo][logo] →   │  ← horizontal scroll/marquee
│                                     │
│  Powered by the industry's first    │  ← subtitle text
│  secure MCP server.                 │
└─────────────────────────────────────┘
```

### Content

| Element | Content | Node |
|---------|---------|------|
| Eyebrow | "Trusted by top financial institutions" | `261:10482` |
| Logo strip | 5 greyscale logos in 428px container (overflows) | `261:10484` |
| Subtitle | [Truncated in metadata] | `261:10495` |

### Logo Dimensions

| # | Width | Height | Node |
|---|-------|--------|------|
| 1 | 66px | 20px | `261:10485` |
| 2 | 94px | 20px | `261:10487` |
| 3 | 98px | 30px | `261:10489` |
| 4 | 85px | 15px | `261:10491` |
| 5 | 70px | 40px | `261:10493` |

### Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Default | Continuous horizontal marquee (infinite loop) | https://reactbits.dev/animations/logo-loop |
| Quote active | Logo turns to color when matching customer quote | Shared pattern with quotes section |

---

## 5. Section 3: Stats / Intro Text

**Figma Node:** `261:10496` (Text, 428×498px at Y=1222)

### Layout

Single-column on mobile (desktop uses two-column layout). Content stacked vertically:

```
┌─────────────────────────────────────┐
│                                     │
│  The Next-Generation                │
│  Banking Platform                   │  ← section heading
│                                     │
│  Powered by the industry's first    │
│  secure MCP server.                 │  ← body text
│                                     │
└─────────────────────────────────────┘
```

### Content

| Element | Content | Node |
|---------|---------|------|
| Heading | [Page-specific heading — truncated in metadata] | `261:10498` |
| Body | [Supporting paragraph — truncated in metadata] | `261:10499` |

**Note:** Desktop uses this section for stats with count-up animation. Mobile may retain stats or simplify to pure text — confirm from actual Figma content.

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Content fades in up with ease |
| Numbers (if present) | Count-up animation on scroll into viewport |

---

## 6. Section 4: Use Case Cards (×5)

**Figma Node:** `261:10500` (Frame 2085665020, 428×3649px at Y=1720)

### Layout

On mobile, each use case card is a single-column stacked layout: heading → body text → CTA button → illustration below. Cards are stacked vertically.

```
┌─────────────────────────────────────┐
│  [Use Case Heading]                 │
│  [Body text]                        │
│  ┌─────────────────────────────┐    │
│  │    [CTA Button - 300×45]    │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │    [Illustration Image]      │    │
│  │                              │    │
│  └─────────────────────────────┘    │
│                                     │
│  ─── divider / gap ───              │
│                                     │
│  [Next Use Case...]                 │
└─────────────────────────────────────┘
```

### Card 1: Vertical Brand Launch

**Figma Node:** `261:10501` (396×670px at Y=100)

| Element | Content | Node |
|---------|---------|------|
| Heading | [Use-case-specific] | `261:10505` |
| Body | [Supporting text] | `261:10506` |
| CTA (Button 5) | "Explore vertical brands" | `261:10508` |
| Illustration | `vertical-brand-launch@2x` | `261:10510` |

**CTA Destination:** /labs/

---

### Card 2: New Line of Business

**Figma Node:** `261:10511` (428×640px at Y=830)

| Element | Content | Node |
|---------|---------|------|
| Heading | [Use-case-specific] | `261:10515` |
| Body | [Supporting text] | `261:10516` |
| CTA (Button 5) | "Explore new lines" | `261:10518` |
| Illustration | `new-line-of-business@2x` | `261:10520` |

**CTA Destination:** /contact/

---

### Card 3: M&A Integration

**Figma Node:** `261:10521` (396×642px at Y=1530)

| Element | Content | Node |
|---------|---------|------|
| Heading | [Use-case-specific] | `261:10525` |
| Body | [Supporting text] | `261:10526` |
| CTA (Button 5) | "Explore M&A" | `261:10528` |
| Illustration | 3D block grid + Nymbus logo | `261:10529` |

**CTA Destination:** /contact/

---

### Card 4: Private-Label Banking

**Figma Node:** `261:10559` (396×665px at Y=2232)

| Element | Content | Node |
|---------|---------|------|
| Heading | [Use-case-specific] | `261:10563` |
| Body | [Supporting text] | `261:10564` |
| CTA (Button 5) | "Explore private label" | `261:10566` |
| Illustration | `private-label-banking@2x` | `261:10568` |

**CTA Destination:** /contact/

---

### Card 5: Sandbox / Innovation

**Figma Node:** `261:10569` (396×591px at Y=2957)

| Element | Content | Node |
|---------|---------|------|
| Heading | [Use-case-specific] | `261:10573` |
| Body | [Supporting text] | `261:10574` |
| CTA (Button 5) | "Explore sandbox" | `261:10576` |
| Illustration | `sandbox-innovation@2x` | `261:10578` |

**CTA Destination:** /contact/

---

### Card Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Each card fades in up with ease (staggered per card) |
| CTA tap | Navigates to destination URL |
| CTA tap feedback | Brief highlight |
| Illustration | Static image (no hover effects on mobile) |

---

## 7. Section 5: Related Resources

**Figma Node:** `261:10579` (Frame 2147238566, 428×2354px at Y=5371)

### Layout

```
┌─────────────────────────────────────┐
│  [Section Heading]                  │
│  [Supporting text]                  │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  [Resource Card 1]          │    │
│  │  Image + Category + Title   │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  [Resource Card 2]          │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  [Resource Card 3]          │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  Explore all resources      │    │  ← CTA button
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

### Content

| Element | Content | Node |
|---------|---------|------|
| Heading | [Section heading] | `261:10581` |
| Body | [Supporting text] | `261:10582` |
| Resource Card 1 | LinkComponent (396×532px) | `261:10585` |
| Resource Card 2 | LinkComponent (396×564px) | `261:10592` |
| Resource Card 3 | LinkComponent (396×564px) | `261:10599` |
| CTA (Button 5) | "Explore all resources" | `261:10607` |

**CTA Destination:** /insights-hub/ (or /resources/ — see Open Questions)

### Card Structure

Each resource card (LinkComponent) contains:
- Thumbnail/image area
- Category badge
- Title
- Metadata (author + date)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Cards fade in up (staggered) |
| Card tap | Navigate to resource article |
| CTA tap | Navigate to resources listing page |

---

## 8. Section 6: Customer Quotes

**Figma Node:** `261:10608` (Frame 2147238567, 429×1140px at Y=7717)

### Layout

```
┌─────────────────────────────────────┐
│  [Section header]                   │  ← heading text (56px height)
│                                     │
│  "Speed to market and cost to       │
│   serve is what this bu..."         │  ← large quote text (serif/italic)
│                                     │
│                                     │
│  Stephen Owen, CEO, First           │
│  Entertainment Credit Unio...       │  ← attribution
│                                     │
│  [logo] [logo] [logo]              │  ← company logo strip (3 logos)
└─────────────────────────────────────┘
```

### Content

| Element | Content | Node |
|---------|---------|------|
| Section heading | [Header text] | `261:10612` |
| Quote text | "Speed to market and cost to serve is what this bu..." [TRUNCATED] | `261:10791` |
| Attribution | "Stephen Owen, CEO, First Entertainment Credit Unio..." [TRUNCATED] | `261:10793` |
| Logo 1 | 98×30px | `261:10797` |
| Logo 2 | 66×20px | `261:10799` |
| Logo 3 | 86×15px | `261:10801` |

### Quote Carousel Behavior

| Behavior | Specification |
|----------|--------------|
| Display | One quote at a time (full-width) |
| Advance | Auto-rotate (carousel pattern) |
| Logo highlight | Active company logo turns full color |
| Transition | Crossfade ~500ms between quotes |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Quote fades in up |
| Auto-advance | Cycles through quotes automatically |
| Swipe left/right | Advance to next/previous quote |
| Logo state | Active logo = full color; inactive = greyscale |

---

## 9. Section 7: FAQ Accordion

**Figma Node:** `261:10803` (Frame 2147238568, 428×2247px at Y=8857)

### Layout

```
┌─────────────────────────────────────┐
│  [FAQ Section Heading]              │
│                                     │
│  ┌─ Q1 ─────────────────── [+] ─┐  │
│  │ Can we launch business        │  │
│  │ banking without replacing     │  │
│  │ our core?                     │  │
│  ├───────────────────────────────┤  │
│  │ Answer text expanded...       │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌─ Q2 ─────────────────── [+] ─┐  │
│  │ How fast can we launch on a   │  │
│  │ parallel core?                │  │
│  └───────────────────────────────┘  │
│                                     │
│  ... (8 total) ...                  │
└─────────────────────────────────────┘
```

### Section Header

| Element | Content | Node |
|---------|---------|------|
| Heading | [FAQ section heading] | `261:10806` |

### FAQ Items (8 Questions)

| # | Question | Answer (truncated) | Q Node | A Node |
|---|----------|-------------------|--------|--------|
| 1 | "Can we launch business banking without replacing o..." | "Yes. Nymbus can run as a parallel core beside the ..." | `261:10812` | `261:10818` |
| 2 | "How fast can we launch on a parallel core?" | "A vertical brand or new line can launch on a paral..." | `261:10822` | `261:10828` |
| 3 | "Will this disrupt the core we run today?" | "Solo operators, microbusinesses, small businesses,..." | `261:10832` | `261:10838` |
| 4 | "Do we have to staff the operation ourselves?" | "No. Nymbus Managed Services can run onboarding, se..." | `261:10842` | `261:10848` |
| 5 | "How does business account opening handle KYB and c..." | "Applications can be scored and screened through in..." | `261:10852` | `261:10858` |
| 6 | "How does M&A integration work on a parallel core?" | "Yes. Wire and ACH origination, Positive Pay, and R..." | `261:10862` | `261:10868` |
| 7 | "How does this connect to the systems we already us..." | "Nymbus Connect integrates your tools and partners ..." | `261:10872` | `261:10878` |
| 8 | "How does this connect to the systems we already us..." (variant) | "Nymbus Connect integrates your tools and partners ..." | `261:10882` | `261:10888` |

### FAQ Behavior

| Behavior | Specification |
|----------|--------------|
| Default state | All collapsed (per Sarah's comment: "Only first Question is expanded" — applies to Managed Services page; this page defaults all collapsed) |
| Expand/collapse | Tap question row to toggle |
| Multiple open | Yes — independent, multiple can be open simultaneously |
| Icon | + (collapsed) rotates 45° to × (expanded) |
| Animation | 300ms ease-in-out slide down/up |

### Interactions

| Trigger | Behavior | Duration |
|---------|----------|----------|
| Tap question row | Toggle expand/collapse | 300ms ease-in-out |
| Icon rotation | + rotates 45° to × | 200ms |
| Scroll into view | Section fades in up | Global |

---

## 10. Section 8: Footer CTA

**Figma Node:** `261:10388` (Gradient Footer, 430×3084px at Y=10771)

### Layout

The gradient footer is an oversized section (3084px tall) providing a dramatic visual backdrop. The actual CTA content sits within a smaller frame at Y=1596 within the gradient section.

```
┌─────────────────────────────────────┐
│                                     │
│       [Gradient ellipses BG]        │  ← decorative gradient with
│                                     │     large overlapping ellipses
│                                     │
│  TALK TO THE PEOPLE BEHIND THE      │
│  PLATFORM POWERING MODERN           │
│  BANKING GROWTH.                    │  ← CTA heading
│                                     │
│  ┌─────────────────────────────┐    │
│  │    [Let's move / CTA]       │    │  ← CTA button (Button 5, 300×45)
│  └─────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

### Content

| Element | Content | Node |
|---------|---------|------|
| CTA Heading | [Conversion headline — layer truncated] | `261:10397` |
| CTA Button (Button 5) | [Button text — "Book a demo" hidden variant, Button 5 instance visible] | `261:10409` |

**CTA Destination:** /contact/

### Background Elements

| Element | Node | Description |
|---------|------|-------------|
| Ellipse 2 | `261:10389` | 3601×3167px gradient ellipse |
| Ellipse 1 | `261:10390` | 4042×2935px gradient ellipse |
| Ellipse 5 | `261:10391` | 3069×3046px gradient ellipse |
| Ellipse 4 | `261:10392` | 3899×2463px gradient ellipse |
| Rectangle 4 | `261:10393` | 1946×3040px gradient rectangle |
| Rectangle 5 | `261:10394` | 1946×3040px gradient rectangle |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | CTA content fades in up with ease |
| CTA tap | Navigate to /contact/ |
| Background | Gradient is static (no animation on mobile) |

---

## 11. Section 9: Footer

**Figma Node:** `280:1217` (Mobile Footer Ad instance, 428×1075px at Y=12780)

This is the shared Mobile Footer component instance. Full documentation is in [Mobile-Footer-User-Flow.md](./Mobile-Footer-User-Flow.md).

---

## 12. Mobile Interactions & Animations

### Global Animation Specs

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Scroll reveal | All sections fade in up with ease | Global spec |
| Grainient background | Hero uses animated grainient | https://reactbits.dev/backgrounds/grainient |
| Logo marquee | Continuous horizontal scroll loop | https://reactbits.dev/animations/logo-loop |
| Number count-up | Triggered on scroll into viewport | https://reactbits.dev/text-animations/count-up |
| Specular button | CTA button hover/active state | https://reactbits.dev/components/specular-button |

### Section-Specific Animations

| Section | Animation | Specification |
|---------|-----------|--------------|
| Hero | Static ring image (no Spline 3D) | Performance-safe for mobile |
| Hero | Content fade in on load | 400ms ease-in-out |
| Logo Bar | Marquee auto-scroll | Continuous, infinite loop |
| Stats/Intro | Fade in up + count-up (if stats present) | Triggered on viewport entry |
| Use Case Cards | Staggered fade in up | Each card reveals on scroll |
| Resources | Cards staggered fade in | Per card |
| Customer Quotes | Auto-rotating crossfade | ~500ms crossfade transition |
| FAQ | Individual items fade in | On scroll |
| Footer CTA | Fade in up | On scroll into view |

### Touch Interaction Specs

| Interaction | Desktop | Mobile |
|-------------|---------|--------|
| Hero CTAs | Hover specular effect | Tap with highlight feedback |
| Use Case CTAs | Hover arrow grows | Tap with highlight feedback |
| FAQ items | Click to expand/collapse | Tap to expand/collapse |
| Resource cards | Hover lift/shadow | Tap navigates directly |
| Quote carousel | Auto-advance | Auto-advance + swipe gesture |
| Investor logos | Hover state | No hover — greyscale/color per active quote |

### Animation Timing Defaults

| Animation Type | Duration | Easing |
|---------------|----------|--------|
| Scroll reveal | 400ms | ease-in-out |
| FAQ expand/collapse | 300ms | ease-in-out |
| Quote crossfade | 500ms | ease |
| CTA tap feedback | Instant | — |
| Icon rotation (FAQ) | 200ms | ease-in-out |

---

## 13. User Journey Scenarios

### Scenario PC1: Land on Parallel Core page (mobile)

| Step | Detail |
|------|--------|
| **GIVEN** | User navigates to /solutions/parallel-core/ from nav, footer, or direct link |
| **WHEN** | Page loads |
| **THEN** | Hero visible with ring image, heading, body, and two CTAs |

**Acceptance Criteria:**
1. Mobile nav bar (428×87px) fixed at top
2. Hero ring image renders (static, center-cropped)
3. Heading and body text visible
4. Two CTA buttons stacked vertically (300×45px each)
5. "Book a demo" and "Explore Platform" both tappable

---

### Scenario PC2: Tap "Book a demo" hero CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the hero section |
| **WHEN** | User taps "Book a demo" button |
| **THEN** | User navigates to /contact/ |

**Acceptance Criteria:**
1. Tap feedback shown
2. Navigation to /contact/
3. Contact page loads at top

---

### Scenario PC3: Tap "Explore Platform" hero CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the hero section |
| **WHEN** | User taps "Explore Platform" button |
| **THEN** | User navigates to /platform/ |

**Acceptance Criteria:**
1. Tap feedback shown
2. Navigation to /platform/
3. Platform page loads at top

---

### Scenario PC4: Scroll through Use Case Cards

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls past the intro text |
| **WHEN** | Use case cards come into viewport |
| **THEN** | Each card fades in with heading, body, CTA, and illustration |

**Acceptance Criteria:**
1. Cards appear one at a time as user scrolls
2. Each card shows: heading → body → CTA → illustration (stacked)
3. CTA buttons are 300×45px and clearly tappable
4. Illustrations render below text content

---

### Scenario PC5: Tap Use Case CTA (Vertical Brand Launch)

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing Card 1 (Vertical Brand Launch) |
| **WHEN** | User taps "Explore vertical brands" |
| **THEN** | User navigates to /labs/ |

**Acceptance Criteria:**
1. Tap feedback shown
2. Navigation to /labs/
3. Labs page loads at top

---

### Scenario PC6: Tap Use Case CTA (any other card)

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing Card 2, 3, 4, or 5 |
| **WHEN** | User taps the respective CTA |
| **THEN** | User navigates to /contact/ |

**Acceptance Criteria:**
1. Tap feedback shown
2. Navigation to /contact/
3. Contact page loads

---

### Scenario PC7: Tap a Resource Card

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the Related Resources section |
| **WHEN** | User taps a resource card |
| **THEN** | User navigates to the resource article page |

**Acceptance Criteria:**
1. Tap feedback shown
2. Navigation to resource URL
3. Resource page loads

---

### Scenario PC8: Tap "Explore all resources" CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the Related Resources section |
| **WHEN** | User taps "Explore all resources" button |
| **THEN** | User navigates to /insights-hub/ |

**Acceptance Criteria:**
1. Tap feedback shown
2. Navigation to resources listing page
3. Page loads at top

---

### Scenario PC9: Swipe through Customer Quotes

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the Customer Quotes section |
| **WHEN** | User swipes left on the quote |
| **THEN** | Next quote appears with crossfade transition |

**Acceptance Criteria:**
1. Swipe gesture recognized
2. Quote crossfades to next (~500ms)
3. Attribution updates
4. Active company logo changes to full color
5. Auto-advance pauses after manual swipe

---

### Scenario PC10: Expand an FAQ item

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the FAQ section (all collapsed) |
| **WHEN** | User taps "Can we launch business banking without replacing our core?" |
| **THEN** | Answer expands below the question |

**Acceptance Criteria:**
1. Answer slides down (300ms ease-in-out)
2. + icon rotates 45° to × icon
3. Other FAQs remain in their current state
4. Question row remains visible as anchor

---

### Scenario PC11: Collapse an FAQ item

| Step | Detail |
|------|--------|
| **GIVEN** | User has FAQ item #1 expanded |
| **WHEN** | User taps the same question row again |
| **THEN** | Answer collapses |

**Acceptance Criteria:**
1. Answer slides up (300ms ease-in-out)
2. × icon rotates back to +
3. Smooth scroll position maintained

---

### Scenario PC12: Tap Footer CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User has scrolled to the gradient Footer CTA section |
| **WHEN** | User taps the CTA button |
| **THEN** | User navigates to /contact/ |

**Acceptance Criteria:**
1. Gradient background visible with elliptical shapes
2. CTA heading and button visible
3. Tap navigates to /contact/

---

### Scenario PC13: Open mobile menu from Parallel Core page

| Step | Detail |
|------|--------|
| **GIVEN** | User is on the Parallel Core page (any scroll position) |
| **WHEN** | User taps the hamburger icon in the fixed nav |
| **THEN** | Full-screen menu overlay opens |

**Acceptance Criteria:**
1. Menu overlay slides up (300ms ease-out)
2. All accordion sections available
3. Sticky footer CTAs visible
4. See [Mobile-Header-Navigation-User-Flow.md](./Mobile-Header-Navigation-User-Flow.md) for full spec

---

## 14. Accessibility & Touch Guidelines

### Touch Target Requirements

| Element | Minimum Size | Visual Size | Status |
|---------|--------------|-------------|--------|
| Hero CTAs | 44×44px | 300×45px | ✓ Compliant |
| Use Case CTAs | 44×44px | 300×45px | ✓ Compliant |
| Resource cards | 44×44px | 396×532-564px | ✓ Compliant |
| FAQ question rows | 44×44px | 396×68-124px | ✓ Compliant |
| FAQ expand icon | 44×44px | 20×20px | ⚠ Needs expanded tap target (full row is tappable) |
| Footer CTA | 44×44px | 300×45px | ✓ Compliant |
| Nav hamburger | 44×44px | Per Nav Mobile spec | ✓ Compliant |
| Logo bar (if tappable) | 44×44px | 66-98×15-40px | ⚠ Small — wrap in larger container |

### ARIA & Semantics

| Component | Implementation |
|-----------|----------------|
| Page heading | `<h1>` for hero headline |
| Section headings | `<h2>` for each section heading |
| FAQ | `<details>/<summary>` or custom with `aria-expanded` |
| FAQ question | `<button aria-expanded="true/false">` |
| FAQ answer | `<div role="region" aria-labelledby="question-id">` |
| Resource cards | `<a>` wrapping card content |
| Quote carousel | `role="region" aria-label="Customer testimonials"` with `aria-live="polite"` |
| CTA buttons | `<a role="button">` or `<button>` with clear labels |

### Focus Management

| Event | Focus Behavior |
|-------|----------------|
| FAQ expand | Focus remains on question button |
| FAQ collapse | Focus remains on question button |
| Quote auto-advance | No focus shift (aria-live handles announcement) |
| CTA tap | Standard navigation |

### Reduced Motion

For users with `prefers-reduced-motion: reduce`:

| Animation | Reduced Motion Behavior |
|-----------|------------------------|
| Scroll reveal | Instant show (no animation) |
| FAQ expand/collapse | Instant show/hide |
| Quote crossfade | Instant swap (no transition) |
| Logo marquee | Disable — show static logo row |
| Quote auto-advance | Disable — manual swipe only |
| Count-up numbers | Show final value immediately |

---

## 15. Open Questions

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Hero copy | ✅ RESOLVED: **Same as desktop** — hero headline and body copy match desktop version. |
| 2 | Resource card content | 🔄 PENDING: Mike needs to identify specific resources for the 3 cards. |
| 3 | Resource CTA destination | ✅ RESOLVED: **`/insights-hub/`** — correct URL (not /resources/). |
| 4 | Spline 3D on mobile | ✅ RESOLVED: **Static PNG/WebP export** — no Spline on mobile for performance. Use optimized static image. |
| 5 | Quote carousel timing | ✅ RESOLVED: **4 seconds per quote** — consistent with About and Managed Services pages. |
| 6 | Stats section | ✅ RESOLVED: **Stats retained on mobile** — same count-up animation triggers on scroll-into-view. |
| 7 | FAQ item 8 duplicate | ✅ RESOLVED: **Verify in Figma** — if duplicate question text, remove duplicate. Each FAQ item should be unique. |
| 8 | Logo bar interactivity | ✅ RESOLVED: **Not tappable** — logos are passive trust signals on mobile. No tap interaction. |

---

## Complete Internal Link Map (Mobile Parallel Core Page)

| Ref | Element | Destination | Opens |
|-----|---------|-------------|-------|
| PC-CTA1 | "Book a demo" (hero) | /contact/ | Same tab |
| PC-CTA2 | "Explore Platform" (hero) | /platform/ | Same tab |
| PC-UC1 | "Explore vertical brands" | /labs/ | Same tab |
| PC-UC2 | "Explore new lines" | /contact/ | Same tab |
| PC-UC3 | "Explore M&A" | /contact/ | Same tab |
| PC-UC4 | "Explore private label" | /contact/ | Same tab |
| PC-UC5 | "Explore sandbox" | /contact/ | Same tab |
| PC-RES | "Explore all resources" | /insights-hub/ | Same tab |
| PC-R1 | Resource Card 1 | [Resource URL TBD] | Same tab |
| PC-R2 | Resource Card 2 | [Resource URL TBD] | Same tab |
| PC-R3 | Resource Card 3 | [Resource URL TBD] | Same tab |
| PC-FCTA | Footer CTA button | /contact/ | Same tab |

---

## Flow Diagram

```
[User navigates to /solutions/parallel-core/ on mobile]
        |
        v
[Hero Section — Static 3D Ring + Heading + 2 CTAs]
        |
        +---> [Tap "Book a demo"] ---------> /contact/
        +---> [Tap "Explore Platform"] ----> /platform/
        |
        v (scroll)
[Logo Bar — Trust Signals Marquee]
        |
        v (scroll)
[Stats / Intro Text — Count-up animation]
        |
        v (scroll)
[Use Case Cards (×5) — Stacked single-column]
        |
        +---> [Card 1: Vertical Brand Launch]
        |       +---> [Tap CTA] → /labs/
        |
        +---> [Card 2: New Line of Business]
        |       +---> [Tap CTA] → /contact/
        |
        +---> [Card 3: M&A Integration]
        |       +---> [Tap CTA] → /contact/
        |
        +---> [Card 4: Private-Label Banking]
        |       +---> [Tap CTA] → /contact/
        |
        +---> [Card 5: Sandbox / Innovation]
        |       +---> [Tap CTA] → /contact/
        |
        v (scroll)
[Related Resources — 3 stacked cards + CTA]
        |
        +---> [Tap card] → resource page
        +---> [Tap "Explore all resources"] → /insights-hub/
        |
        v (scroll)
[Customer Quotes — Auto-rotating single quote]
        |
        +---> [Swipe left/right] → next/prev quote
        |
        v (scroll)
[FAQ Accordion — 8 questions, all collapsed]
        |
        +---> [Tap question] → expand/collapse answer
        |
        v (scroll)
[Footer CTA — Gradient Background]
        |
        +---> [Tap CTA] → /contact/
        |
        v
[Mobile Footer]
  See Mobile-Footer-User-Flow.md
```

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 19, 2026 | Initial mobile Parallel Core page document | Kiro |
