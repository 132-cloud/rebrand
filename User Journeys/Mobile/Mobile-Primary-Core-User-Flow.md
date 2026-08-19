# Mobile Primary Core Page User Flow & Journey

**Source:** Figma Dev Hand-off — Primary Core - Mobile (Node 261:9664)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=261-9664
**Last Updated:** August 19, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Mobile Considerations](#1-page-overview--mobile-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Mobile Navigation Header](#3-mobile-navigation-header)
4. [Section 1: Hero](#4-section-1-hero)
5. [Section 2: Logo Bar](#5-section-2-logo-bar)
6. [Section 3: Strategy Band](#6-section-3-strategy-band)
7. [Section 4: Bento Core — Tabbed Grid](#7-section-4-bento-core--tabbed-grid)
8. [Section 5: Migration Feature Cards](#8-section-5-migration-feature-cards)
9. [Section 6: Customer Quotes](#9-section-6-customer-quotes)
10. [Section 7: FAQ Accordion](#10-section-7-faq-accordion)
11. [Section 8: Footer CTA](#11-section-8-footer-cta)
12. [Section 9: Footer](#12-section-9-footer)
13. [Mobile Animations & Interactions](#13-mobile-animations--interactions)
14. [User Journey Scenarios](#14-user-journey-scenarios)
15. [Complete URL Map](#15-complete-url-map)
16. [Open Questions](#16-open-questions)

---

## 1. Page Overview & Mobile Considerations

The Primary Core page targets banks and credit unions evaluating a full core replacement or de novo launch. The mobile version adapts the desktop's 1512px wide, ~8820px tall canvas into a 428px wide, ~10479px tall single-column layout optimized for touch.

**Target URL:** /solutions/primary-core/
**Desktop reference node:** `166:2058`

The page narrative: rigid legacy cores hold back strategy → Nymbus replaces the foundation, not just the front end → two paths (Core Replacement + De Novo) → migration is de-risked and managed → social proof + FAQ → final CTA.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation |
|-----------------|-------------------|
| Desktop dark nav | Mobile hamburger nav (302:8108) |
| 3D Spline cylinder — centered, ~1517px wide | Holographic ring illustration cropped to 428px viewport |
| Multi-column bento grid (tab content) | Single-column stacked bento cards |
| Side-by-side migration feature cards | Stacked: text above, image below |
| Horizontal scrolling testimonials | Single centered quote (no carousel on mobile) |
| FAQ items with subtle layout | Same accordion, full-width 396px |
| Hover states on bento cards | No hover — tap navigates or no-op (display only) |

---

## 2. Page Structure & Scroll Journey

**Figma Node:** `261:9664` (Primary Core - Mobile)
**Dimensions:** 428 × 10479px

### Scroll Order (top to bottom)

| # | Section | Figma Node | Y Position | Height | Purpose |
|---|---------|------------|-----------|--------|---------|
| 1 | Navigation Header | `302:8108` | 0 | 87 | Sticky hamburger nav |
| 2 | Hero (background + ring) | `261:9714` | 0 | 826 | 3D holographic ring illustration |
| 3 | Hero content | `261:9740` | 270 | 454 | H1, body, 2 CTA buttons |
| 4 | Logo Bar | `261:10251` | 894 | 225 | Trust signals + stat |
| 5 | Strategy Band | `261:9749` | 1222 | 501 | Problem framing (bordered) |
| 6 | Bento Core (Tabbed) | `261:9753` | 1723 | 2066 | Core Replacement / De Novo tabs + bento cards |
| 7 | Migration Feature Cards | `261:9665` | 3789 | 1376 | Migration plan + Managed Services |
| 8 | Customer Quotes | `261:10160` | 5165 | 901 | Social proof |
| 9 | FAQ Accordion | `261:10175` | 6066 | 2013 | 7 expandable questions |
| 10 | Gradient Footer (BG) | `261:9716` | 8008 | 2471 | Animated gradient background |
| 11 | Footer CTA | `261:9722` | 9051 | 253 | Final conversion |
| 12 | Footer | `280:1138` | 9404 | 1075 | Link grid + legal |

---

## 3. Mobile Navigation Header

**Figma Node:** `302:8108` (Nav Mobile)
**Dimensions:** 428 × 87px

See [Mobile-Header-Navigation-User-Flow.md](./Mobile-Header-Navigation-User-Flow.md) for complete documentation.

**Summary:**
- Fixed header, Nymbus logo left, hamburger icon right
- Hamburger opens full-screen menu overlay with accordion sections
- Sticky footer CTAs in menu: "Try demo" + "Let's move"
- On this page: likely uses a light/white variant nav (page has white background outside of hero)

---

## 4. Section 1: Hero

**Figma Node:** `261:9714` (BG) + `261:9740` (content)
**Position:** Y 0–826 (background) / Y 270–724 (content)
**Dimensions:** 428 × 826px (BG) / 394 × 454px (content)

### Layout (Mobile)

```
┌────────────────────────────────────┐
│ [Nav — hamburger]                  │
├────────────────────────────────────┤
│                                    │
│   [3D holographic ring / cylinder  │  ← arcy slides illustration
│    illustration — full bleed]      │    cropped to mobile viewport
│                                    │
│  START WITH A CORE                 │  ← H1, 56px, UPPERCASE, blurred
│  BUILT TO MOVE.                    │
│                                    │
│  When the foundation is rigid,     │  ← Body, 16px
│  every plan waits on a vendor      │
│  roadmap. Move your institution    │
│  onto a modern core built to move  │
│  with your strategy.               │
│                                    │
│  ┌────────────────────────────┐    │
│  │        Book a Demo         │    │  ← Button (primary, black border/outline)
│  └────────────────────────────┘    │
│  ┌────────────────────────────┐    │
│  │      See the Platform      │    │  ← Button (secondary, frosted)
│  └────────────────────────────┘    │
│                                    │
└────────────────────────────────────┘
```

### Visual Background Elements

| Element | Description |
|---------|-------------|
| Holographic ring | `261:9738` — "holo-cylinder" rounded rectangle, full-bleed behind content (~1380×1065px cropped) |
| Background slide | `261:9715` — "arcy slides 3-11" image, 1512×847px, overflows viewport |
| Ring visual | Large semi-transparent 3D ring/cylinder illustration, likely Spline-rendered static export for mobile |

### Content Elements

| Ref | Element | Content |
|-----|---------|---------|
| MPC-1 | H1 | "Start with a core built to move." |
| MPC-2 | Body | "When the foundation is rigid, every plan waits on a vendor roadmap. Move your institution onto a modern core built to move with your strategy." |
| MPC-3 | Button (primary) | "Book a Demo" → /contact/ |
| MPC-4 | Button (secondary) | "See the Platform" → /platform/ |

### Button Layout (Mobile)

Buttons are stacked vertically, 300px wide, centered in 394px content area:
- Row 1: "Book a Demo" (black border, dark fill style)
- Row 2: "See the Platform" (frosted glass, rgba(219,219,219,0.6) background)

**Note:** Button order is reversed from the AI page — "Book a Demo" is the primary action and renders first (top) on this page.

### Mobile Hero Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Page load | Ring illustration renders (static or subtle animation) |
| Scroll | Hero content fades as Logo Bar enters |
| "Book a Demo" tap | Navigate to /contact/ |
| "See the Platform" tap | Navigate to /platform/ |

### Mobile vs Desktop Differences

| Element | Desktop | Mobile |
|---------|---------|--------|
| Ring/cylinder | Spline 3D — animated, centered ~1517px wide | Static illustration cropped to 428px |
| H1 size | ~72px display | 56px |
| H1 effect | Opacity fade on trailing words | Blur effect (4.6px) |
| Buttons | Side-by-side row | Stacked vertical, 300px each |
| Button labels | "Book a Demo" + "Explore Platform" | "Book a Demo" + "See the Platform" |

---

## 5. Section 2: Logo Bar

**Figma Node:** `261:10251` (Frame 2147238561)
**Position:** Y 894–1119
**Dimensions:** 428 × 225px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│                                    │
│  TRUSTED BY TOP FINANCIAL          │  ← Eyebrow ALL CAPS
│  INSTITUTIONS                      │
│                                    │
│  [Logo] [Logo] [Logo] [Logo] [Logo]│  ← 5 logos, static row
│                                    │
│  25 digital banks launched and     │  ← Subtitle stat (bold "Nymbus")
│  cores deployed on Nymbus          │
│                                    │
└────────────────────────────────────┘
```

### Content

| Element | Content |
|---------|---------|
| Eyebrow | "Trusted by top financial institutions" |
| Logos | 5 financial institution logos (greyscale, static row) |
| Subtitle | "25 digital banks launched and cores deployed on **Nymbus**" |

**Logo dimensions:**
| Logo | Width | Height |
|------|-------|--------|
| image 9 | 66px | 20px |
| image 5 | 93.5px | 20px |
| image 7 | 97.9px | 30px |
| image 13 | 85.5px | 15px |
| image 11 | 70px | 40px |

### Mobile Interactions

- Logos are static on mobile (no marquee animation confirmed in this frame — desktop uses infinite scroll marquee)
- No tap interaction on logos

### Mobile vs Desktop Differences

| Desktop | Mobile |
|---------|--------|
| Horizontal auto-scrolling marquee | Static row of 5 logos (no marquee) |
| Subtitle below marquee | Same stat below |

---

## 6. Section 3: Strategy Band

**Figma Node:** `261:9749` (Text)
**Position:** Y 1222–1723
**Dimensions:** 428 × 501px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│ ── (top black border) ─────────── │
│                                    │
│  Modernize the foundation,         │  ← H2, 42px bold, centered
│  not just the front end.           │
│                                    │
│  A modern app on a rigid core      │  ← Body, 16px, muted color
│  still moves at the core's pace.   │
│  Nymbus replaces the foundation    │
│  itself, so accounts, deposits,    │
│  servicing, and every product      │
│  decision run on infrastructure    │
│  built to move with your           │
│  strategy.                         │
│                                    │
│ ── (bottom black border) ─────── │
└────────────────────────────────────┘
```

### Content

| Element | Content |
|---------|---------|
| H2 | "Modernize the foundation, not just the front end." |
| Body | "A modern app on a rigid core still moves at the core's pace. Nymbus replaces the foundation itself, so accounts, deposits, servicing, and every product decision run on infrastructure built to move with your strategy." |

The section has `border-b` and `border-t` black borders — a contained text block that acts as a visual break between the logo bar and the bento grid.

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Fade in up with ease |

### Mobile vs Desktop Differences

| Desktop | Mobile |
|---------|--------|
| Two-column: headline left, body right | Single column: headline above body |
| Content within ~1140px container | Full-width single column, 396px |

---

## 7. Section 4: Bento Core — Tabbed Grid

**Figma Node:** `261:9753` (Frame 2085664954)
**Position:** Y 1723–3789
**Dimensions:** 428 × 2066px

This is the largest section on the page. It presents a tabbed bento grid showing either the Core Replacement or De Novo Launch path.

### Section Header

| Element | Content |
|---------|---------|
| H2 | "Built for every way institutions start." |
| Body | "Nymbus supports both paths to a modern primary core, whether you are moving an existing institution off legacy infrastructure or standing up an entirely new one." |

### Tab Toggle (261:9759)

Pill-style tab selector, 317px wide, centered:

```
┌────────────────────────────────────┐
│  ┌──────────────────────────────┐  │
│  │ [Core Replacement][De Novo ] │  │  ← Pill toggle
│  └──────────────────────────────┘  │
│    ▲ active (dark fill)            │
└────────────────────────────────────┘
```

| Tab | State | Style |
|-----|-------|-------|
| Core Replacement | Active (default) | Dark fill (rgba(0,0,0,0.8)), white text |
| De Novo Launch | Inactive | Transparent, black text |

**Tap behavior:** Tapping the inactive tab switches the bento grid content between Core Replacement and De Novo views.

---

### Core Replacement Tab — Bento Cards

**Figma Node:** `261:9765` (Bento Core Replacement)

All cards in the Core Replacement view are stacked vertically in a single column on mobile.

---

#### Bento Card Group 1 (Top) — `261:9768`

Two sub-cards stacked:

**Card A: "Run in parallel"**

**Figma Node:** `261:9769`

```
┌────────────────────────────────────┐
│  Run in parallel  │ Legacy and     │  ← H3 (blurred) + sub-text
│                   │ Nymbus         │
│                   │ environments   │
│                   │ operate in     │
│                   │ parallel.      │
│                                    │
│  [Dual-line graph — parallel env   │  ← Bar + line graph visual
│   performance chart]               │
└────────────────────────────────────┘
```

| Element | Content |
|---------|---------|
| H3 (blurred) | "Run in parallel" |
| Sub-text | "Legacy and Nymbus environments operate in parallel." |
| Visual | Dual-axis line graph (Vector 1 + Vector 2 strokes) showing two environments |

**Card B: "One modern core"**

**Figma Node:** `261:9779`

```
┌────────────────────────────────────┐
│  One modern core                   │  ← H3 (blurred)
│                                    │
│  Unify account, transaction,       │  ← Body text
│  loan, and ledger processing on    │
│  one modern platform.              │
│                                    │
│  [Abstract 3D block architecture   │  ← Geometric block grid visual
│   visual (Nymbus brand mark)]      │
└────────────────────────────────────┘
```

| Element | Content |
|---------|---------|
| H3 (blurred) | "One modern core" |
| Body | "Unify account, transaction, loan, and ledger processing on one modern platform." |
| Visual | Abstract 3D architecture blocks (colored rectangles + Nymbus icon badge) |

---

#### Bento Card Group 2 (Large Card) — `261:9807`

Large full-width card:

```
┌────────────────────────────────────┐
│  ✓ GO-LIVE                         │  ← Green label + icon
│                                    │
│  Core replacement                  │  ← Sub-label (body text)
│                                    │
│  Migration designed to reduce      │  ← H2 (blurred, 42px)
│  risk from day one                 │
│                                    │
│  Moved onto modern core            │  ← Body text
│  infrastructure, with migration    │
│  planned, supported, and           │
│  de-risked from the start.         │
│                                    │
│  [core-convergence-linework        │  ← Network diagram SVG
│   network illustration]            │    (extends beyond card edges)
└────────────────────────────────────┘
```

| Element | Content |
|---------|---------|
| Label | "GO-LIVE" (green #3ace8f text, icon left) |
| Sub-label | "Core replacement" |
| H2 (blurred) | "Migration designed to reduce risk from day one" |
| Body | "Moved onto modern core infrastructure, with migration planned, supported, and de-risked from the start." |
| Visual | core-convergence-linework SVG — converging strand network diagram with bright/faint layers |

---

#### Bento Card Group 3 (Bottom Row) — `261:9850`

Two cards side-by-side (182px + 195px) then one full-width card:

**Card C: "Convert with confidence"** (left, `261:9852`)

```
┌──────────────────┐
│  Convert with    │  ← H3 (muted #828282)
│  confidence      │
│                  │
│  Move critical   │  ← Body (muted)
│  data with       │
│  built-in        │
│  validation and  │
│  reconciliation. │
└──────────────────┘
```

| Element | Content |
|---------|---------|
| H3 | "Convert with confidence" |
| Body | "Move critical data with built-in validation and reconciliation." |

**Card D: Road migration visual** (right, `261:9855`)

- Perspectival road/highway illustration with light rays and dimensional box visual
- No text — pure illustration card

**Card E: "A clear path to go-live"** (full-width, `261:9918`)

```
┌────────────────────────────────────┐
│  A clear path to go-live           │  ← H3 (muted)
│                                    │
│  Progress through proven           │  ← Body (muted)
│  milestones from discovery to      │
│  stabilization.                    │
│                                    │
│  [Implementation timeline          │  ← Network node diagram with
│   illustration with nodes,         │    progress bars + "Implementation"
│   connection lines, and            │    label badge
│   progress bars]                   │
└────────────────────────────────────┘
```

| Element | Content |
|---------|---------|
| H3 | "A clear path to go-live" |
| Body | "Progress through proven milestones from discovery to stabilization." |
| Label in illustration | "Implementation" (frosted pill badge with icon) |
| Visual | Route/network map with nodes, connecting vectors, flash icon, and 3 progress bar segments at bottom |

---

### De Novo Launch Tab — Bento Cards

**Figma Node:** `261:9980` (Frame 2147238549) — partially overlaps with Customer Quotes area

The De Novo tab content is present in the Figma file but rendered as a separate/hidden layer set. The mobile frame shows the De Novo bento cards are associated with node `261:9980`, which contains a `Testimonials` frame (hidden=true) and the `CustomerQuotes` component.

**[See Open Question #1 — De Novo bento card content for mobile needs confirmation from design team.]**

Based on the desktop Primary Core user flow, the De Novo tab contains these bento cards:
- Launch a new charter on modern infrastructure
- Nymbus MCP and AI-native capabilities from day one
- Operations staffed and supported by Nymbus from launch

### Bento Card Interactions

| Trigger | Desktop Behavior | Mobile Behavior |
|---------|-----------------|-----------------|
| Card hover | Gradient animates, subtle card lift | No hover — cards are static display |
| Tab tap ("Core Replacement") | Switches bento to Core Replacement view | Same — tapping tab swaps bento content |
| Tab tap ("De Novo Launch") | Switches bento to De Novo view | Same |
| Card tap | [URL TBD — may navigate to sub-section] | [URL TBD] |

---

## 8. Section 5: Migration Feature Cards

**Figma Node:** `261:9665` (Frame 2085664963)
**Position:** Y 3789–5165
**Dimensions:** 428 × 1376px

Two stacked feature sub-sections, each with text above and visual below. Section has a top black border.

### Sub-section A: "A migration built on a plan"

```
┌────────────────────────────────────┐
│ ── (top black border) ─────────── │
│                                    │
│  MIGRATION                         │  ← Eyebrow ALL CAPS (#505f79)
│                                    │
│  A migration                       │  ← H2 (blurred, 42px)
│  built on a plan.                  │
│                                    │
│  Configuration, integration,       │  ← Body (#505f79)
│  conversion, testing, training,    │
│  and launch readiness run on a     │
│  defined path, so the move off     │
│  legacy infrastructure has a date  │
│  you can plan around.              │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  [nymbus-migration-card      │  │  ← Migration card image
│  │   @2x — 396×266px]          │  │    (rounded rectangle)
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

| Element | Content |
|---------|---------|
| Eyebrow | "migration" |
| H2 (blurred) | "A migration built on a plan." |
| Body | "Configuration, integration, conversion, testing, training, and launch readiness run on a defined path, so the move off legacy infrastructure has a date you can plan around." |
| Image | nymbus-migration-card@2x — 396 × 266px |

### Sub-section B: "Run the operation from day one"

```
┌────────────────────────────────────┐
│                                    │
│  MANAGED SERVICES                  │  ← Eyebrow ALL CAPS (#505f79)
│                                    │
│  Run the operation from day one.   │  ← H2 (blurred, 42px)
│                                    │
│  Nymbus Managed Services can       │  ← Body (#505f79)
│  support onboarding, servicing,    │
│  back-office processing,           │
│  compliance, and fraud operations. │
│  The team that builds your         │
│  operations runs them too.         │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  [Black card with 3D         │  │  ← Dark card visual (261:9681)
│  │   sphere/orbit ring +        │  │    3D orbital ring with Nymbus
│  │   Nymbus icon badge]         │  │    logo badge
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

| Element | Content |
|---------|---------|
| Eyebrow | "MANAGED SERVICES" |
| H2 (blurred) | "Run the operation from day one." |
| Body | "Nymbus Managed Services can support onboarding, servicing, back-office processing, compliance, and fraud operations. The team that builds your operations runs them too." |
| Visual | Black rounded card (bg-black, rounded-[20.45px]), 3D sphere with orbital ring, Nymbus icon badge centered at bottom |

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Fade in up with ease |
| Images/visuals | Static — no tap interaction |

### Mobile vs Desktop Differences

| Desktop | Mobile |
|---------|--------|
| Side-by-side: text left, visual right (or reversed) | Single column: text above, visual below |
| Larger H2 display (~60px+) | H2 at 42px |
| Card visual is right-column fill | Card visual is full-width below text |

---

## 9. Section 6: Customer Quotes

**Figma Node:** `261:10160` (CustomerQuotes)
**Position:** Y 5165–6066
**Dimensions:** 429 × 901px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│                                    │
│  "SPEED TO MARKET AND COST TO      │  ← Quote, 42px UPPERCASE bold
│  SERVE IS WHAT THIS BUSINESS IS    │
│  ALL ABOUT. NYMBUS HAS NAILED      │
│  BOTH."                            │
│                                    │
│  ────────────────────────────────  │  ← Divider line
│                                    │
│  Stephen Owen                      │  ← Attribution bold
│  CEO, First Entertainment          │  ← Role/company muted
│  Credit Union                      │
│                                    │
│  ────────────────────────────────  │  ← Divider line
│                                    │
│  [Logo 1]  [Logo 2]  [Logo 3]      │  ← 3 client logos centered
│                                    │
└────────────────────────────────────┘
```

### Content

| Element | Content |
|---------|---------|
| Quote | "Speed to market and cost to serve is what this business is all about. Nymbus has nailed both." |
| Attribution — Name | **Stephen Owen** |
| Attribution — Role | CEO, First Entertainment Credit Union |
| Client logos | 3 logos: image 7 (98.5×30px), image 9 (66×20px), image 13 (86×15px) |

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Quote fades in |
| Logos | Read-only — no tap interaction |
| Swipe | No carousel on mobile (single quote displayed) |

### Mobile vs Desktop Differences

| Desktop | Mobile |
|---------|--------|
| Quote scrolls through auto-advancing carousel of multiple quotes | Single static quote (one quote shown, no carousel) |
| Testimonials behind mask — 3 columns × 5 rows = 15 cards | Hidden frame (hidden=true) — not rendered on mobile |
| Logo strip syncs with active quote | Static logo strip |

---

## 10. Section 7: FAQ Accordion

**Figma Node:** `261:10175` (Frame 2147238550)
**Position:** Y 6066–8079
**Dimensions:** 428 × 2013px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│                                    │
│  FAQs                              │  ← H2 (blurred, 42px, centered)
│                                    │
│  ──────────────────────────────   │
│  Q What does moving to a modern   │  ← Question (H3, 24px)    [+]
│    core actually involve?          │
│  A Implementation covers...        │  ← Answer (body, #505f79)
│  ──────────────────────────────   │
│  Q How long does a core           │  ← [+]
│    conversion take?                │
│  A A core migration on Nymbus...  │
│  ──────────────────────────────   │
│  [... 5 more items ...]            │
└────────────────────────────────────┘
```

All 7 FAQ items are shown in expanded/open state in the Figma frame. Each item has a bottom border divider (#6b778c, 0.556px).

### FAQ Items

| # | Figma Node | Question | Answer |
|---|-----------|---------|--------|
| 1 | `261:10181` | What does moving to a modern core actually involve? | Implementation covers configuration, integration, conversion support, testing, training, and launch readiness, run on a planned path with the team behind the platform beside you. |
| 2 | `261:10191` | How long does a core conversion take? | A core migration on Nymbus runs faster than a traditional multi-year vendor build, with a defined timeline and technology, operations, and support connected from the start. |
| 3 | `261:10201` | Can we launch a brand-new institution on Nymbus? | Yes. A new bank or credit union can be stood up on a modern core, with technology and operational support that compresses the path from charter to first funded account. |
| 4 | `261:10211` | Do we have to staff the operation ourselves? | No. Nymbus Managed Services can run onboarding, servicing, back-office work, compliance, and fraud operations behind your brand, built and operated by the team behind the platform. |
| 5 | `261:10221` | How does this connect to the systems we already use? | Nymbus Connect integrates your tools and partners through modern APIs, so integration does not require custom middleware for every connection. |
| 6 | `261:10231` | What if we want to launch something new before replacing the core? | You can. A parallel core lets you launch a new brand or line alongside your existing system first, then replace the primary core when the timing is right. |
| 7 | `261:10241` | What makes Nymbus different from a traditional core provider? | The core is built to move with your strategy, so changing a product, rate, or segment no longer waits on a vendor roadmap or a multi-year build. |

**Note:** FAQ item heights vary (240px for most, 225px for Q5, 240px for Q6 and Q7). Q1 question width is wider (359px) because the question wraps differently. The expand/collapse icon (`+` rotates 45° to `×`) is positioned at the right edge of each row.

### Mobile Interactions

| Trigger | Behavior | Animation |
|---------|----------|-----------|
| Tap question row | Toggles answer open/closed | Answer slides down/up |
| All items | Start collapsed on page load (Figma shows expanded state for documentation) | — |
| Expand icon | Rotates 45° (→ ×) when open | 300ms ease |

### Mobile vs Desktop Differences

| Desktop | Mobile |
|---------|--------|
| Same accordion behavior | Same accordion behavior |
| Wider question text container | Narrower (342–359px vs full desktop width) |
| 7 questions identical | 7 questions identical, same answers |

---

## 11. Section 8: Footer CTA

**Figma Node:** `261:9722` (Frame 2147238569) within gradient background `261:9716`
**Position:** Y 9051–9304
**Dimensions:** 396 × 253px (content) within 430 × 2471px gradient

### Layout (Mobile)

```
┌────────────────────────────────────┐
│  [Gradient background — animated   │
│   ellipses in muted tones]         │
│                                    │
│  START WITH A CORE                 │  ← H1, 56px, UPPERCASE, blurred
│  BUILT TO MOVE.                    │    (7.281px blur)
│                                    │
│  ┌────────────────────────────┐    │
│  │        Book a Demo         │    │  ← Button (frosted glass)
│  └────────────────────────────┘    │
│                                    │
└────────────────────────────────────┘
```

### Content

| Element | Content |
|---------|---------|
| H1 (blurred) | "Start with a core built to move." |
| CTA Button | "Book a Demo" → /contact/ |

### Background (261:9716)

| Element | Description |
|---------|-------------|
| Ellipse 1 | Large gradient ellipse, muted warm/cool tones |
| Ellipse 2 | Overlapping large ellipse |
| Ellipse 4 + 5 | Additional ellipses compositing the gradient |
| Rectangle 5 | Semi-transparent overlay |

**Note:** The gradient footer background is 2471px tall — it covers both the Footer CTA section and the footer link grid below it.

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Text fades in up |
| "Book a Demo" tap | Navigate to /contact/ |

---

## 12. Section 9: Footer

**Figma Node:** `280:1138` (Mobile Footer Ad instance)
**Position:** Y 9404–10479
**Dimensions:** 428 × 1075px

Standard site-wide mobile footer component. See [Mobile-Footer-User-Flow.md](./Mobile-Footer-User-Flow.md) for complete documentation.

### Navigation Columns (Two-column grid)

#### Column 1 (left): Platform
| Link | Destination |
|------|-------------|
| Core Processing | /platform/#core-processing |
| Digital Banking | /platform/#digital-banking |
| Account Opening | /platform/#account-opening |
| Connect | /platform/#connect |
| Insights | /platform/#insights |
| Nymbus MCP | /ai/#nymbus-mcp |
| Fraud Intelligence | /platform/#fraud-intelligence |
| Levels | /platform/#levels |
| Engage | /platform/#engage |

#### Column 2 (right): Managed Services
| Link | Destination |
|------|-------------|
| Contact Center | /managed-services/#contact-center |
| Onboarding | /managed-services/#onboarding |
| Servicing | /managed-services/#servicing |
| Compliance | /managed-services/#compliance |
| Fraud | /managed-services/#fraud |
| Back Office | /managed-services/#back-office |
| Business Banking Support | /managed-services/#business-banking |
| Labs | /labs/ |

#### Column 1 (left, lower): Solutions
| Link | Destination |
|------|-------------|
| Core replacement | /solutions/primary-core/ |
| De novo launch | /solutions/primary-core/#de-novo |
| Vertical brand launches | /solutions/parallel-core/ |
| New lines of business | /solutions/ |
| M&A acceleration | /solutions/ |
| Private label banking | /solutions/ |
| Sandbox innovation | /labs/ |
| Retail banking | /solutions/#retail |
| Business banking | /solutions/#business |
| Commercial banking | /solutions/#commercial |

#### Column 2 (right, lower): Resources + Company
| Link | Destination |
|------|-------------|
| Insights | /insights/ |
| AI | /ai/ |
| About Nymbus | /about/ |
| Press | /press/ |
| Contact us | /contact/ |
| Privacy policy | /privacy-policy/ |

### Footer Bottom Bar
| Element | Content |
|---------|---------|
| Copyright | © 2026 NYMBUS, All rights reserved. |
| Address | 208 N Laura St, 8th & 9th floor, Jacksonville, FL 32202 |
| Phone | +1 (855) 210-7874 |
| Social icons | 3 icons (LinkedIn, X/Twitter, and one additional) |

---

## 13. Mobile Animations & Interactions

### Animation Adaptations

| Desktop Animation | Mobile Adaptation |
|-------------------|-------------------|
| Spline 3D cylinder ring — animated on load | Static illustration (Spline export) — or lightweight CSS animation |
| Scroll reveal — fade in up (all sections) | Same — fade in as sections enter viewport |
| Bento card hover — gradient moves, card lifts | Removed — cards are display-only or tap-through |
| H1/H2 blur effect (foreground blur) | Maintained — same blur renders on mobile |
| FAQ accordion — slide open/close | Same behavior, full-width |
| Tab switch (Core Replacement ↔ De Novo) | Same — tap tab, content swaps |
| Logo bar marquee (desktop) | Static row on mobile |
| Footer gradient | Subtle animation (same as hero) |

### H1/H2 Blur Effect

Several headings use a CSS foreground blur effect:
- Hero H1: `blur-[4.6px]` (56px text)
- Strategy Band H2: not blurred (standard display)
- Bento card H3 labels: `blur-[3.416px]` (24px text)
- Bento large card H2: `blur-[3.416px]` (42px text)
- Migration section H2s: `blur-[4px]` (42px text)
- FAQ H2: `blur-[4px]` (42px text)
- Footer CTA H1: `blur-[7.281px]` (56px text)

This creates the visual effect of text coming into focus — a design signature on this page. Must be preserved on mobile.

### Touch Targets

| Element | Visual Size | Touch Target |
|---------|-------------|--------------|
| Hamburger menu | 24×24px | 44×44px (with padding) |
| CTA buttons (Hero) | 300×45px | Full button area |
| CTA button (Footer) | 300×45px | Full button area |
| Tab pills | ~155px × 33px each | Full pill area (44px height) |
| FAQ accordion rows | Full width × 96–124px | Full row area |
| FAQ expand icon | 20×20px | Full row tap area |
| Footer links | 20px height | 44px minimum |

---

## 14. User Journey Scenarios

### Scenario MPC-1: Land on Page — View Hero

| Step | Detail |
|------|--------|
| **GIVEN** | User arrives at /solutions/primary-core/ on mobile |
| **WHEN** | Page loads |
| **THEN** | Hero renders with 3D ring illustration, H1, body text, and two CTA buttons |

**Acceptance Criteria:**
1. 3D ring illustration renders behind hero content (no layout shift)
2. H1 "START WITH A CORE BUILT TO MOVE." renders with blur effect
3. "Book a Demo" button (black border) renders above "See the Platform" (frosted)
4. Both buttons are 300px wide, centered, 45px tall
5. Nav is sticky at top throughout scroll

---

### Scenario MPC-2: Tap "Book a Demo" from Hero

| Step | Detail |
|------|--------|
| **GIVEN** | User views the Hero section |
| **WHEN** | User taps "Book a Demo" (MPC-3) |
| **THEN** | User navigates to /contact/ |

**Acceptance Criteria:**
1. Button tap registers visual feedback
2. Navigation to /contact/
3. Page loads at top

---

### Scenario MPC-3: Tap "See the Platform"

| Step | Detail |
|------|--------|
| **GIVEN** | User views the Hero section |
| **WHEN** | User taps "See the Platform" (MPC-4) |
| **THEN** | User navigates to /platform/ |

**Acceptance Criteria:**
1. Navigation to /platform/

---

### Scenario MPC-4: Switch Bento Tab to "De Novo Launch"

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to "Built for every way institutions start." |
| **WHEN** | User taps "De Novo Launch" tab |
| **THEN** | Bento grid content swaps to De Novo cards |

**Acceptance Criteria:**
1. "De Novo Launch" pill becomes active (dark fill)
2. "Core Replacement" pill becomes inactive (transparent)
3. Bento cards below swap to De Novo content
4. Transition is smooth (crossfade or instant swap)
5. Tab is minimum 44px touch height

---

### Scenario MPC-5: Tap FAQ Question to Expand Answer

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to the FAQ section |
| **WHEN** | User taps any collapsed FAQ question row |
| **THEN** | Answer slides open below the question |

**Acceptance Criteria:**
1. Full row is tappable (not just the + icon)
2. Answer slides down (300ms ease)
3. Expand icon rotates 45° to form ×
4. Other items remain in their current state (not accordion-exclusive)
5. Tapping an open item collapses it

---

### Scenario MPC-6: Tap "Book a Demo" from Footer CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to the Footer CTA section |
| **WHEN** | User taps "Book a Demo" button |
| **THEN** | User navigates to /contact/ |

**Acceptance Criteria:**
1. Button tap shows visual feedback
2. Navigation to /contact/

---

### Scenario MPC-7: Scroll Full Page Top to Bottom

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on /solutions/primary-core/ |
| **WHEN** | User scrolls from top to bottom |
| **THEN** | All sections render and animate into view |

**Acceptance Criteria:**
1. Hero illustration renders without performance drop
2. All sections fade in on viewport entry
3. Blur effects on headings render correctly
4. Tab toggle in Bento section is interactive
5. FAQ accordion is functional
6. Footer renders at bottom with full link grid

---

### Scenario MPC-8: Tap Footer Link — "Core replacement"

| Step | Detail |
|------|--------|
| **GIVEN** | User views the footer |
| **WHEN** | User taps "Core replacement" in the Solutions column |
| **THEN** | User navigates to /solutions/primary-core/ (current page — scrolls to top) |

**Acceptance Criteria:**
1. Link tap shows feedback
2. Page reloads or scrolls to top

---

## 15. Complete URL Map

| Section | Element | Destination |
|---------|---------|-------------|
| Hero | "Book a Demo" button | /contact/ |
| Hero | "See the Platform" button | /platform/ |
| Bento cards | Card tap (if linked) | [URL TBD — see Open Question #2] |
| Footer CTA | "Book a Demo" button | /contact/ |
| Footer | Core Processing | /platform/#core-processing |
| Footer | Digital Banking | /platform/#digital-banking |
| Footer | Account Opening | /platform/#account-opening |
| Footer | Connect | /platform/#connect |
| Footer | Insights (Platform) | /platform/#insights |
| Footer | Nymbus MCP | /ai/#nymbus-mcp |
| Footer | Fraud Intelligence | /platform/#fraud-intelligence |
| Footer | Levels | /platform/#levels |
| Footer | Engage | /platform/#engage |
| Footer | Contact Center | /managed-services/#contact-center |
| Footer | Onboarding | /managed-services/#onboarding |
| Footer | Servicing | /managed-services/#servicing |
| Footer | Compliance | /managed-services/#compliance |
| Footer | Fraud | /managed-services/#fraud |
| Footer | Back Office | /managed-services/#back-office |
| Footer | Business Banking Support | /managed-services/#business-banking |
| Footer | Labs | /labs/ |
| Footer | Core replacement | /solutions/primary-core/ |
| Footer | De novo launch | /solutions/primary-core/#de-novo |
| Footer | Vertical brand launches | /solutions/parallel-core/ |
| Footer | New lines of business | /solutions/ |
| Footer | M&A acceleration | /solutions/ |
| Footer | Private label banking | /solutions/ |
| Footer | Sandbox innovation | /labs/ |
| Footer | Retail banking | /solutions/#retail |
| Footer | Business banking | /solutions/#business |
| Footer | Commercial banking | /solutions/#commercial |
| Footer | Insights (Resources) | /insights/ |
| Footer | AI | /ai/ |
| Footer | About Nymbus | /about/ |
| Footer | Press | /press/ |
| Footer | Contact us | /contact/ |
| Footer | Privacy policy | /privacy-policy/ |

---

## 16. Open Questions (All Resolved)

All questions have been confirmed and resolved:

| # | Question | Resolution |
|---|----------|-----------|
| 1 | De Novo Launch tab bento content (mobile) | ✅ RESOLVED: **Mirror desktop exactly**. Same bento card content as desktop (charter/new institution launch, Nymbus MCP from day one, Nymbus-operated services) in single-column mobile layout. |
| 2 | Bento card tap destinations | ✅ RESOLVED: **Display-only, no tap action**. Bento cards are informational content cards — they do not navigate anywhere. |
| 3 | Logo bar — marquee vs static | ✅ RESOLVED: **Static on mobile**. No marquee animation. Logos displayed in a static row. |
| 4 | 3D ring/cylinder on mobile | ✅ RESOLVED: **Static PNG/WebP export**. Spline 3D is too heavy for mobile. Use optimized static image. |
| 5 | FAQ default state | ✅ RESOLVED: **All collapsed by default**. Standard accordion behavior for better mobile performance. |
| 6 | Hero button label discrepancy | ✅ RESOLVED: **"See the Platform" is correct for mobile**. Intentional label variation from desktop's "Explore Platform". |
| 7 | Customer quotes — single vs carousel | ✅ RESOLVED: **Single static quote on mobile**. No swipe/carousel behavior — display one representative quote only. |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 19, 2026 | Initial mobile Primary Core document | Kiro |
