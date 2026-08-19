# Mobile About Page User Flow & Journey

**Source:** Figma Dev Hand-off — About - Mobile (Node 262:14835)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=262-14835
**Last Updated:** August 19, 2026
**Design Lead:** Sarah Schaper
**Desktop Reference:** [About-User-Flow.md](../About-User-Flow.md) (Node 1:8)

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Leadership Intro + Carousel](#4-section-2-leadership-intro--carousel)
5. [Section 3: Board of Directors](#5-section-3-board-of-directors)
6. [Section 4: Investors](#6-section-4-investors)
7. [Section 5: CTA Footer](#7-section-5-cta-footer)
8. [Section 6: Footer](#8-section-6-footer)
9. [Mobile Interactions & Animations](#9-mobile-interactions--animations)
10. [User Journey Scenarios](#10-user-journey-scenarios)
11. [Accessibility & Touch Guidelines](#11-accessibility--touch-guidelines)
12. [Open Questions](#12-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile About page retains the full narrative arc of the desktop version — mission → leadership → governance → capital → conversion — but reorganizes each section for a 428px viewport at 5692px total scroll height. The page communicates Nymbus's credibility through people (leadership team, board, investors) and closes with a direct conversion CTA.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| 6-column board member row | 2×3 grid (two columns) | Fits 428px viewport |
| 3-card visible carousel (586px cards) | Scrollable carousel (~255px cards), 1-card-at-a-time visible | Reduces card width to ~255px to fit mobile |
| Horizontal investor logo strip (static) | Horizontal scroll marquee (1626px strip in 428px frame) | Overflow scroll for logo density |
| Full-width hero gradient with large ellipses | Same gradient, scaled to 428px | Visual consistency |
| Centered desktop content (1281px wide) | Full-width with 16px side margins (396px content area) | Mobile standard |
| Desktop nav (mega-menu dropdowns) | Mobile nav bar + hamburger overlay | Standard mobile nav pattern |

### Design Dimensions

| Property | Value |
|----------|-------|
| Frame width | 428px |
| Total scroll height | 5692px |
| Content area | 396px (16px margins each side) |
| Nav height | 87px (fixed at top) |

---

## 2. Page Structure & Scroll Journey

**Scroll Order (top to bottom):**

| # | Section | Y Position | Figma Node | Height | Purpose |
|---|---------|-----------|------------|--------|---------|
| — | Nav Mobile (fixed) | 0 | `302:8318` | 87px | Persistent mobile header |
| 1 | Hero | 0–825 | `262:14850` | 825px | Mission + positioning |
| 2 | Leadership Intro + Carousel | 825–1732 | `262:14914` | 907px | Section header + team carousel |
| 3 | Board of Directors | 1732–3097 | `262:14950` | 1385px | Governance grid |
| 4 | Investors | 3097–3792 | `262:15002` | 695px | Investor logos horizontal scroll |
| 5 | BG Decoration | 3792–4617 | `262:14864` | 825px | Gradient section repeat / visual break |
| 6 | CTA Footer | 3931–4480 | `262:15205` | 549px | Primary conversion section |
| 7 | Mobile Footer | 4617–5692 | `280:3195` | 1075px | Global footer (instance) |

---

## 3. Section 1: Hero

**Figma Node:** `262:14850` (Section, 428×825px)
**Content Node:** `262:14907` (Frame 2085664956, 394×524px)

### Layout

- Full-width dark gradient background with 8 layered elliptical light shapes (`262:14855` – `262:14862`)
- Animated noise grain texture overlay (`262:14863` Noise-Animation)
- Content frame: 394px wide, 16px side margins, Y position 130px from top
- Content height: 524px

### Content

| Element | Content | Node |
|---------|---------|------|
| Eyebrow pill | "about" | `262:14910` |
| H1 Heading | "Nymbus is banking built to move." | `262:14911` |
| Body text | "Legacy systems and vendor roadmaps turn movement into maintenance, so the plan on the whiteboard never reaches production. Nymbus closes that gap, bringing together the infrastructure to launch, the operations to run, and the growth strategy to make the model work in market." | `262:14913` |

**Note:** Figma layer names are truncated and do not reflect actual copy. The actual heading and body text are confirmed from the desktop source of truth.

### Eyebrow Component

- Rounded rectangle pill (100×46px), centered at X=147
- Text "about" centered within pill — lowercase, consistent with section label style

### Background Elements

| Element | Node | Description |
|---------|------|-------------|
| Gradient container | `262:14853` | 1530×1306px gradient frame |
| Lights | `262:14854` | 8 overlapping ellipses for color depth |
| Noise-Animation | `262:14863` | Animated grain texture overlay |

### Mobile-Specific Layout Notes

- Hero section is 825px tall on mobile vs. 678px on desktop (extra height accommodates stacked heading/body)
- Gradient and light ellipses are the same 1530px-wide assets, cropped to 428px viewport
- No CTA buttons in the hero section — conversion deferred to the CTA Footer section

### Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Page load | Content fades in | Global scroll reveal |
| Background | Noise texture animates (grain movement) | Noise-Animation frame |
| Scroll | H1 heading un-blurs on scroll (starts blurred, resolves as user scrolls down) | Sarah: "un-blur text on scroll" (Node 1:8) |
| Scroll | Gradient background is static | — |

---

## 4. Section 2: Leadership Intro + Carousel

**Figma Node:** `262:14914` (StrategyBand, 428×907px)

### Layout

This section combines the leadership section header and the leadership carousel in a single band. On mobile, the section header stacks above a horizontally scrollable carousel.

```
┌─────────────────────────────────────┐
│  [leadership]                       │  ← eyebrow pill (centered)
│  Led by banking, product, and       │
│  growth operators.                  │  ← heading
│  Institutions do not stall...       │  ← body text
│                                     │
│  [Card 1][Card 2][Card 3 →]         │  ← carousel (overflows right)
└─────────────────────────────────────┘
```

### Section Header Content

**Figma Node:** `262:14917` (Frame, 396×344px) at Y=100

| Element | Content | Node |
|---------|---------|------|
| Eyebrow pill | "leadership" | `262:14921` |
| Heading | "Led by banking, product, and growth operators." | `262:14922` |
| Body text | "Institutions do not stall for lack of ambition. Legacy systems and vendor roadmaps turn movement into maintenance, so the plan on the whiteboard never reaches production. Nymbus closes that gap." | `262:14923` |

### Leadership Carousel

**Figma Node:** `262:14924` (Frame 2147238574, 793×302px at X=−182, Y=404)

The carousel frame is 793px wide and offset to X=−182, meaning it overflows both left and right edges of the 428px viewport. The "visible window" at initial load shows the center portion of the carousel.

**Navigation Controls (Node `262:14836`, Y=1048):**

| Element | Node | Size | Position |
|---------|------|------|----------|
| Button - Previous | `262:14837` | 40×40px | Left arrow |
| Button - Next | `262:14840` | 40×40px | Right arrow |

**Note:** Navigation buttons are positioned outside the viewport frame at X=1270, Y=1048 — these float at top-right above the carousel, consistent with the desktop layout pattern.

### Carousel Cards (Mobile)

Cards are ~255px wide on mobile (vs. 586px on desktop), allowing partial visibility of adjacent cards to indicate swipeability.

| # | Name | Title | Node |
|---|------|-------|------|
| 1 | Jeffrey Fonda | Chief Financial Officer | `262:14925` |
| 2 | Ed Gross | Chief Product Officer | `262:14932` |
| 3 | Michelle Prohaska | Chief Banking & Risk Officer | `262:14943` |

**Note:** All 10 leadership team members from the desktop version appear in the mobile carousel. The Figma frame only shows 3 named cards as a representative sample. Jeffery Kendall is confirmed as the default center card on initial load.

### Card Structure (Mobile)

Each card ~255×302px:

| Element | Dimensions | Details |
|---------|-----------|---------|
| Photo | ~255×197px | Headshot image |
| Name (Heading 4) | ~197×44px | Centered name |
| Title (Paragraph) | ~197×20px | Role/title centered below name |

### Carousel Behavior

| Behavior | Specification | Source |
|----------|--------------|--------|
| Auto-advance | Yes — carousel moves automatically | Sarah Schaper comment: "carousel moves automatically" |
| Auto-advance timing | 4–5 seconds per card | Confirmed |
| Manual advance | Tap Previous/Next buttons | Figma nav control nodes `262:14837`, `262:14840` |
| Swipe | Swipe left/right to advance | Touch device standard |
| Default card | Jeffery Kendall centered at start | Confirmed (Mike's comment on Node 1:8) |
| Total cards | 10 (all leadership team members) | Confirmed — matches desktop |
| Cards visible | 1 card fully visible + partial adjacent cards | Mobile frame geometry |

### Interactions

| Trigger | Behavior | Duration |
|---------|----------|----------|
| Scroll into view | Carousel fades in up | Global scroll reveal |
| Auto-advance | Scrolls to next card automatically | 4–5 seconds per card |
| Tap Previous | Scroll carousel left by one card | 300ms ease |
| Tap Next | Scroll carousel right by one card | 300ms ease |
| Swipe left | Advance to next card | Touch gesture |
| Swipe right | Return to previous card | Touch gesture |
| Pause auto-advance | Auto-advance pauses on tap/swipe interaction | Standard carousel UX |

---

## 5. Section 3: Board of Directors

**Figma Node:** `262:14950` (StrategyBand, 428×1385px)

### Layout

The desktop 6-column horizontal row becomes a **2×3 grid** on mobile, with each cell ~178×178px. The section is the tallest on the page at 1385px due to the 3-row grid layout.

```
┌─────────────────────────────────────┐
│  [board of directors]               │  ← eyebrow pill (centered)
│  Governed with banking and          │
│  investor experience.               │  ← heading
│                                     │
│  [Rilla Delorier ] [AJ Malhotra  ]  │  ← row 1 (right column)
│  photo+name+org   photo+name+org   │
│                                     │
│  [AJ Malhotra  ]  [Rajiv Gihwala ] │  ← row 2
│                                     │
│  [Casey Callinsky][April Clobes  ] │  ← row 3
│                                     │
│  [Peter Sobiloff]  (left column)   │  ← staggered layout
└─────────────────────────────────────┘
```

**Note on grid order:** The Figma frame shows the right column (X=197) positioned first in the node tree, with the left column (X=0) positioned second. The actual visual order in the 2-column grid is:

| Left Column (X=0) | Right Column (X=197) |
|-------------------|----------------------|
| Peter Sobiloff (row 1) | Rilla Delorier (row 1) |
| AJ Malhotra (row 2) | Rajiv Gihwala (row 2) |
| Casey Callinsky (row 3) | April Clobes (row 3) |

### Section Header Content

**Figma Node:** `262:14953` (Frame, 396×220px) at Y=100

| Element | Content | Node |
|---------|---------|------|
| Eyebrow pill | "board of directors" | `262:14957` |
| Heading | "Governed with banking and investor experience." | `262:14958` |

### Board Members Grid

**Figma Node:** `262:14959` (Container, 375×913px) at Y=270, X=26

Each member card is ~178×278px with a ~178×178px portrait:

| # | Name | Organization | LinkedIn | Node |
|---|------|-------------|----------|------|
| 1 | Peter Sobiloff | Insight Partners | https://www.linkedin.com/in/peter-sobiloff-7574a/ | `262:14995` |
| 2 | Rilla Delorier | Independent Board Director, Coastal Community Bank | https://www.linkedin.com/in/rilladelorier/ | `262:14960` |
| 3 | AJ Malhotra | Insight Partners | https://www.linkedin.com/in/ajmalhotra1/ | `262:14967` |
| 4 | Rajiv Gihwala | Insight Partners | https://www.linkedin.com/in/rajiv-gihwala-14277731/ | `262:14974` |
| 5 | Casey Callinsky | VyStar Credit Union | https://www.linkedin.com/in/casey-callinsky/ | `262:14981` |
| 6 | April Clobes | MSU Federal Credit Union | https://www.linkedin.com/in/april-clobes-551b6010/ | `262:14988` |

**LinkedIn URLs source:** Mike's Figma comment on Node `17:8686`: "link to their respective linkedin pages."

### Card Structure (Mobile)

Each board member card ~178×280px:

| Element | Dimensions | Details |
|---------|-----------|---------|
| Portrait | ~178×178px | Headshot image (square) |
| Name (Heading 4) | ~178×42px | Centered, below portrait |
| Organization (Paragraph) | ~178×22–70px | Title/org below name (variable height — some multi-line) |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Grid fades in up with ease (global) |
| Tap member portrait | Opens LinkedIn profile in new tab |
| Tap member name | Opens LinkedIn profile in new tab |

---

## 6. Section 4: Investors

**Figma Node:** `262:15002` (StrategyBand, 428×695px)

### Layout

```
┌─────────────────────────────────────┐
│  [investors]                        │  ← eyebrow pill (centered)
│  Backed by leaders in banking,      │
│  fintech, and financial services.   │  ← heading
│                                     │
│  ← [logo][logo][logo][logo][logo] → │  ← horizontal scroll strip
└─────────────────────────────────────┘
```

### Section Header Content

**Figma Node:** `262:15005` (Frame, 396×220px)

| Element | Content | Node |
|---------|---------|------|
| Eyebrow pill | "investors" | `262:15009` |
| Heading | "Backed by leaders in banking, fintech, and financial services." | `262:15010` |

### Investor Logo Strip

**Figma Node:** `262:15011` (Frame 1533216839, 1626×234px at X=−599, Y=360)

The logo strip is 1626px wide placed at X=−599, creating a visible window of ~428px. On mobile this is implemented as **horizontal scroll with touch drag** — user swipes left/right to browse the full logo strip.

Each logo is in a 154×234px container:

| # | Investor | URL | Logo Node | Logo Dimensions |
|---|----------|-----|-----------|----------------|
| 1 | PeoplesBank | https://www.bankatpeoples.com/ | `262:15012` | 131×32px |
| 2 | The Banc Funds | https://www.thebancfunds.com/ | `262:15033` | 131×32px |
| 3 | VyStar Credit Union | https://vystarcu.org/ | `262:15035` | 98×32px |
| 4 | Insight Partners | https://www.insightpartners.com/ | `262:15049` | 94×32px |
| 5 | ConnectOne Bank | https://www.connectonebank.com/ | `262:15054` | 131×32px |
| 6 | Michigan State University Federal Credit Union | https://www.msufcu.org/ | `262:15076` | 106×32px |
| 7 | Financial Services Capital | https://www.financialservicescapital.com/ | `262:15092` | 85×32px |
| 8 | Curql | https://www.curql.com/ | `262:15099` | 52×53px |
| 9 | Mendon Venture Partners | https://www.linkedin.com/company/mendon-venture-partners | `262:15101` | 60×32px |

**Navigation Controls (Node `262:14843`, Y=2937):**

| Element | Node | Size |
|---------|------|------|
| Button - Previous | `262:14844` | 40×40px |
| Button - Next | `262:14847` | 40×40px |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Logos fade in |
| Tap Previous | Scroll logo strip left |
| Tap Next | Scroll logo strip right |
| Swipe left/right | Scroll logo strip |
| Tap logo | Opens investor website in new tab |

---

## 7. Section 5: CTA Footer

**Figma Node:** `262:15205` (CTA Footer, 396×549px at X=16, Y=3931)

### Layout

```
┌─────────────────────────────────────┐
│                                     │
│  TALK TO THE PEOPLE BEHIND THE      │
│  PLATFORM POWERING MODERN           │
│  BANKING GROWTH.                    │  ← H2 heading (all-caps)
│                                     │
│  Institutions do not stall...       │  ← body text
│                                     │
│         [Talk to an expert]         │  ← CTA link
│                                     │
└─────────────────────────────────────┘
```

The CTA Footer sits inside the gradient background section (Section BG, `262:14864`) which provides the decorative gradient. Content width is 396px with 16px offset from left edge.

### Content

| Element | Content | Node |
|---------|---------|------|
| H2 Heading | "TALK TO THE PEOPLE BEHIND THE PLATFORM POWERING MODERN BANKING GROWTH." | `262:15206` |
| Body text | "Institutions do not stall for lack of ambition. Legacy systems and vendor roadmaps turn movement into maintenance, so the plan on the whiteboard never reaches production. Nymbus closes that gap." | `262:15207` |
| CTA Link | "Talk to an expert" | `262:15212` |

**Note:** The Figma layer name shows "The Next-Generation Banking Platform" but the actual rendered text is the all-caps version matching the desktop. Figma metadata truncates/shows layer names, not final copy.

### CTA Component

| Element | Details |
|---------|---------|
| Container | 300×45px (node `262:15211`) centered in 340px container |
| X offset | 48px left padding, content area 300px |
| Text | "Talk to an expert" |
| Destination | /contact/ |
| Style | Text link with arrow (LinkComponent) |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Content fades in up with ease |
| Tap CTA | Navigate to /contact/ |
| CTA tap feedback | Brief background highlight |

---

## 8. Section 6: Footer

**Figma Node:** `280:3195` (Mobile Footer Ad instance, 428×1075px at Y=4617)

This is the shared Mobile Footer component instance. Full documentation is in [Mobile-Footer-User-Flow.md](./Mobile-Footer-User-Flow.md).

### Summary

| Behavior | Details |
|----------|---------|
| Layout | 2-column stacked nav grid, no accordion |
| Logo tap | Navigates to / |
| Nav links | Tap → respective page destinations |
| Phone | `tel:+18552107874` — opens native dialer |
| Social icons | LinkedIn, X, Medium — open in new tab |
| Address | Opens Apple Maps (iOS) / Google Maps (Android) |

---

## 9. Mobile Interactions & Animations

### Global Animation Specs

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Scroll reveal | All sections fade in up with ease | Sarah: "fade in down with ease" (global spec) |
| Background noise | Animated grain texture on hero and CTA gradient | Sarah: Noise-Animation frames |
| Grainient background | Hero and CTA use animated grainient | Sarah comment on Node 1:8: https://reactbits.dev/backgrounds/grainient |
| Number count-up | Triggered on scroll into viewport (if applicable) | Sarah: https://reactbits.dev/text-animations/count-up |

### Section-Specific Animations

| Section | Animation | Specification |
|---------|-----------|--------------|
| Hero | Noise-Animation grain overlay | Always active |
| Hero H1 heading | Un-blur on scroll — starts blurred, becomes clear as user scrolls | Sarah: "un-blur text on scroll" (Node 1:8) |
| Leadership carousel | Auto-advance (4–5s per card) | Sarah: "carousel moves automatically" |
| Board of Directors | Fade in up on scroll | Global |
| Investor logos | Horizontal scroll with touch drag | Confirmed — swipe left/right to browse |
| CTA | Fade in up on scroll | Global |
| CTA noise | Animated grain overlay | Same pattern as hero |

### Touch Interaction Specs

| Interaction | Desktop | Mobile | Notes |
|-------------|---------|--------|-------|
| Carousel advance | Click Prev/Next arrows OR scroll with mouse over carousel | Tap Prev/Next OR swipe left/right | Mike's comment on Node 1:8 |
| Board member link | Click portrait/name | Tap portrait/name | LinkedIn opens in new tab |
| Investor logo link | Click logo | Tap logo | Website opens in new tab |
| CTA | Click link | Tap link | Navigate to /contact/ |

### Animation Timing Defaults

| Animation type | Duration | Easing |
|---------------|----------|--------|
| Scroll reveal | 400ms | ease-in-out |
| Carousel advance | 300ms | ease |
| Tap feedback | Instant | — |
| Page transition | 150ms | ease-in |

---

## 10. User Journey Scenarios

### Scenario MA1: Land on About page (mobile)

| Step | Detail |
|------|--------|
| **GIVEN** | User navigates to /about/ from footer, header, or direct link |
| **WHEN** | Page loads |
| **THEN** | Hero section is visible; nav bar fixed at top; background grain animates |

**Acceptance Criteria:**
1. Mobile nav bar (428×87px) fixed at top
2. Hero gradient renders with animated noise texture
3. Eyebrow pill "about" visible
4. Heading "Nymbus is banking built to move." visible (initially blurred, un-blurs on scroll)
5. Body text visible (full, not truncated)

---

### Scenario MA2: Scroll through Leadership section

| Step | Detail |
|------|--------|
| **GIVEN** | User has scrolled past hero into Y:825–1732 range |
| **WHEN** | Leadership section scrolls into view |
| **THEN** | Section header fades in; carousel is visible with auto-advance active |

**Acceptance Criteria:**
1. Eyebrow "leadership" pill appears
2. Heading and body text fade in up
3. Carousel visible with ~1 full card + partial adjacent cards
4. Auto-advance begins playing on scroll into view
5. Prev/Next buttons visible at top-right

---

### Scenario MA3: Manually advance leadership carousel

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing leadership carousel |
| **WHEN** | User taps the "Next" button (→) |
| **THEN** | Carousel advances to next card (300ms ease) |

**Acceptance Criteria:**
1. Tap feedback on button
2. Carousel scrolls right by one card (300ms ease)
3. Auto-advance pauses after manual interaction
4. Previous button becomes active

---

### Scenario MA4: Swipe through leadership carousel

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing leadership carousel |
| **WHEN** | User swipes left on the carousel |
| **THEN** | Carousel advances to next card |

**Acceptance Criteria:**
1. Swipe gesture recognized (min ~50px drag)
2. Carousel scrolls to next card
3. Auto-advance pauses after swipe
4. Momentum follows finger during drag

---

### Scenario MA5: Scroll to Board of Directors

| Step | Detail |
|------|--------|
| **GIVEN** | User has scrolled past leadership into Y:1732–3097 range |
| **WHEN** | Board grid scrolls into view |
| **THEN** | 2×3 grid of board member portraits fades in |

**Acceptance Criteria:**
1. Eyebrow "board of directors" pill appears
2. Heading "Governed with banking and investor experience." visible
3. 6 board member cards displayed in 2-column grid
4. Each card shows: portrait, name, organization

---

### Scenario MA6: Tap a board member

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing board of directors grid |
| **WHEN** | User taps a board member portrait or name (e.g. Rilla Delorier) |
| **THEN** | LinkedIn profile opens in new tab/Safari |

**Acceptance Criteria:**
1. Tap feedback shown
2. LinkedIn URL opens (e.g. https://www.linkedin.com/in/rilladelorier/)
3. Opens in new tab (`target="_blank"`) or in-app browser on mobile
4. `rel="noopener noreferrer"` applied
5. User remains on About page in background

---

### Scenario MA7: Scroll to Investors section

| Step | Detail |
|------|--------|
| **GIVEN** | User has scrolled past board into Y:3097–3792 range |
| **WHEN** | Investors section scrolls into view |
| **THEN** | Heading visible; investor logo strip scrollable horizontally |

**Acceptance Criteria:**
1. Eyebrow "investors" pill visible
2. Heading visible
3. Logo strip visible with ~2–3 logos in initial viewport
4. Horizontal overflow indicates scrollability (fades at edges)
5. Prev/Next buttons visible

---

### Scenario MA8: Tap an investor logo

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the investor logo strip |
| **WHEN** | User taps the Insight Partners logo |
| **THEN** | https://www.insightpartners.com/ opens in new tab |

**Acceptance Criteria:**
1. Tap feedback shown
2. Opens in new tab or in-app browser
3. `rel="noopener noreferrer"` applied
4. All 9 logos are tappable (44×44px minimum touch target)

---

### Scenario MA9: Scroll to and tap CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User has scrolled to Y:3931 (CTA Footer section) |
| **WHEN** | User taps "Talk to an expert" |
| **THEN** | User navigates to /contact/ |

**Acceptance Criteria:**
1. CTA section fades in on scroll
2. Heading and body text visible
3. "Talk to an expert" link tappable
4. Tap feedback shown
5. Navigation to /contact/ page
6. Contact page loads at top

---

### Scenario MA10: Open mobile menu from About page

| Step | Detail |
|------|--------|
| **GIVEN** | User is on the About page (any scroll position) |
| **WHEN** | User taps the hamburger icon in the fixed nav |
| **THEN** | Full-screen menu overlay opens |

**Acceptance Criteria:**
1. Nav bar stays fixed at top while scrolling
2. Menu overlay slides up (300ms ease-out)
3. All accordion sections available
4. Sticky footer CTAs visible
5. See [Mobile-Header-Navigation-User-Flow.md](./Mobile-Header-Navigation-User-Flow.md) for full spec

---

### Scenario MA11: Navigate to About page via footer link

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page, scrolled to mobile footer |
| **WHEN** | User taps "About Nymbus" (Company section of footer) |
| **THEN** | User navigates to /about/ |

**Acceptance Criteria:**
1. Navigation to /about/
2. Page loads at top (hero visible)
3. Mobile nav bar visible

---

## 11. Accessibility & Touch Guidelines

### Touch Target Requirements

| Element | Minimum Size | Visual Size | Status |
|---------|--------------|-------------|--------|
| Carousel Prev/Next buttons | 44×44px | 40×40px | ⚠ Needs 2px padding to reach 44px |
| Board member cards | 44×44px | ~178×280px | ✓ Compliant |
| Investor logos | 44×44px | 52–131×32–53px | ⚠ Visual is small — use 154×234px container as full tap target |
| CTA "Talk to an expert" | 44×44px | 300×45px | ✓ Compliant |
| Nav hamburger | 44×44px | Per Nav Mobile spec | ✓ Compliant |

### ARIA & Semantics

| Component | Implementation |
|-----------|----------------|
| Page heading | `<h1>` for "Nymbus is banking built to move." |
| Section headings | `<h2>` for each section heading (Leadership, Board, Investors, CTA) |
| Eyebrow pills | `<span>` with decorative styling — not a heading |
| Carousel | `role="region"` with `aria-label="Leadership team"` |
| Carousel controls | `<button aria-label="Previous team member">`, `<button aria-label="Next team member">` |
| Board member links | `<a aria-label="[Name] — [Org], opens LinkedIn in new tab">` |
| Investor logos | `<a aria-label="[Investor name] — opens in new tab"><img alt="[Investor name] logo"></a>` |
| CTA link | `<a href="/contact/" aria-label="Talk to an expert">` |

### Focus Management

| Event | Focus Behavior |
|-------|----------------|
| Carousel advance (button) | Focus remains on button pressed |
| Board member tap | Standard browser focus |
| Investor logo tap | Standard browser focus |
| CTA tap | Standard browser navigation |

### Reduced Motion

For users with `prefers-reduced-motion: reduce`:

| Animation | Reduced Motion Behavior |
|-----------|------------------------|
| Carousel auto-advance | Disable — remain on first card |
| Scroll reveal fade-in | Instant show (no animation) |
| Background grain noise | Disable |
| Carousel swipe animation | Instant snap, no slide transition |
| H1 un-blur on scroll | Show text clear immediately (no blur effect) |

---

## 12. Open Questions (All Resolved)

All questions have been confirmed and resolved:

| # | Question | Resolution |
|---|----------|-----------|
| 1 | CTA heading discrepancy | Resolved: Actual text is "TALK TO THE PEOPLE BEHIND THE PLATFORM POWERING MODERN BANKING GROWTH." (all-caps, matching desktop). Figma layer name was misleading. |
| 2 | Carousel auto-advance timing | Resolved: 4–5 seconds per card. |
| 3 | Carousel full card count | Resolved: All 10 leadership members appear in the mobile carousel. |
| 4 | Hero body text | Resolved: Figma layer name truncation — actual copy is "Nymbus is banking built to move." (H1) with full body paragraph. |
| 5 | CTA body text | Resolved: Full copy matches desktop version. |
| 6 | Un-blur text on scroll | Resolved: Applies to the H1 heading on mobile. Starts blurred, un-blurs as user scrolls down. |
| 7 | Investor logo strip interaction | Resolved: Horizontal scroll with touch drag (swipe left/right). Not a marquee or auto-scroll. |
| 8 | Leadership carousel default center card | Resolved: Jeffery Kendall is the default center card on mobile (confirmed). |

---

## Complete Internal Link Map (Mobile About Page)

| Ref | Element | Destination | Opens |
|-----|---------|-------------|-------|
| MA-CTA | "Talk to an expert" | /contact/ | Same tab |
| MA-B1 | Peter Sobiloff | https://www.linkedin.com/in/peter-sobiloff-7574a/ | New tab |
| MA-B2 | Rilla Delorier | https://www.linkedin.com/in/rilladelorier/ | New tab |
| MA-B3 | AJ Malhotra | https://www.linkedin.com/in/ajmalhotra1/ | New tab |
| MA-B4 | Rajiv Gihwala | https://www.linkedin.com/in/rajiv-gihwala-14277731/ | New tab |
| MA-B5 | Casey Callinsky | https://www.linkedin.com/in/casey-callinsky/ | New tab |
| MA-B6 | April Clobes | https://www.linkedin.com/in/april-clobes-551b6010/ | New tab |
| MA-I1 | PeoplesBank logo | https://www.bankatpeoples.com/ | New tab |
| MA-I2 | The Banc Funds logo | https://www.thebancfunds.com/ | New tab |
| MA-I3 | VyStar Credit Union logo | https://vystarcu.org/ | New tab |
| MA-I4 | Insight Partners logo | https://www.insightpartners.com/ | New tab |
| MA-I5 | ConnectOne Bank logo | https://www.connectonebank.com/ | New tab |
| MA-I6 | MSUFCU logo | https://www.msufcu.org/ | New tab |
| MA-I7 | Financial Services Capital logo | https://www.financialservicescapital.com/ | New tab |
| MA-I8 | Curql logo | https://www.curql.com/ | New tab |
| MA-I9 | Mendon Venture Partners logo | https://www.linkedin.com/company/mendon-venture-partners | New tab |

---

## Flow Diagram

```
[User navigates to /about/ on mobile]
        |
        v
[Hero Section — "Nymbus is banking built to move."]
  Background: animated grain noise
  Content: eyebrow + heading (un-blurs on scroll) + body
        |
        v
[Scrolls to Leadership Section]
  Header: eyebrow + heading + body
  Carousel: auto-advances, ~1 card visible
        |
        +---> [Taps Next →] -----> Advance carousel right
        +---> [Taps ← Prev] -----> Advance carousel left
        +---> [Swipes left/right]-> Advance carousel
        |
        v
[Scrolls to Board of Directors]
  2×3 grid of 6 board members
        |
        +---> [Taps member] ------> Opens LinkedIn (new tab)
        |
        v
[Scrolls to Investors]
  Heading + horizontal scrollable logo strip
        |
        +---> [Taps Prev/Next] ---> Scroll logo strip
        +---> [Taps logo] --------> Opens investor website (new tab)
        |
        v
[Scrolls to CTA Footer]
  Gradient BG + heading + body + CTA
        |
        +---> [Taps "Talk to an expert"] ---> /contact/
        |
        v
[Scrolls to Mobile Footer]
  See Mobile-Footer-User-Flow.md
```

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 19, 2026 | Initial mobile About page document | Kiro |
| 1.1 | August 19, 2026 | Resolved all 8 open questions; corrected hero/CTA copy, confirmed carousel specs, un-blur animation, investor scroll behavior | Kiro |
