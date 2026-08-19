# Mobile Labs User Flow & Journey

**Source:** Figma Dev Hand-off — LABS Mobile (Node 281:2337)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=281-2337
**Last Updated:** August 11, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Strategy Statement](#4-section-2-strategy-statement)
5. [Section 3: Portfolio Carousel](#5-section-3-portfolio-carousel)
6. [Section 4: Brand Logos](#6-section-4-brand-logos)
7. [Section 5: Stats Band](#7-section-5-stats-band)
8. [Section 6: Growth Cards](#8-section-6-growth-cards)
9. [Section 7: The Labs Method](#9-section-7-the-labs-method)
10. [Section 8: Labs Services (3 Pillars)](#10-section-8-labs-services-3-pillars)
11. [Section 9: Already Inside / Integration](#11-section-9-already-inside--integration)
12. [Section 10: Paths to Growth](#12-section-10-paths-to-growth)
13. [Section 11: Portfolio Slider (Large Cards)](#13-section-11-portfolio-slider-large-cards)
14. [Section 12: Customer Quote](#14-section-12-customer-quote)
15. [Section 13: Video Section](#15-section-13-video-section)
16. [Section 14: Book a Session (Form CTA)](#16-section-14-book-a-session-form-cta)
17. [Mobile Animations & Interactions](#17-mobile-animations--interactions)
18. [User Journey Scenarios](#18-user-journey-scenarios)
19. [Open Questions](#19-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Labs page adapts the desktop's 1512px wide, ~12,606px tall layout into a 428×16812px single-column experience. Labs is a visually rich, brand-focused page — gradients, portfolio cards, and the service pillars all carry to mobile with layout adaptations.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| Multi-column 5-card Paths to Growth grid | Single-column stacked cards | 428px viewport |
| Portfolio carousel with arrow controls | Swipe carousel with dot indicators | Touch gestures |
| Two-column "Already Inside" layout | Stacked text then visuals | Width constraint |
| Three pillar cards side-by-side | Stacked single-column | Width constraint |
| Hover card lift effects | No hover — tap-through | Touch devices |
| Large hero with ticker marquee | Full-width ticker maintained | Key brand element |

### Design Philosophy
- Lighter weight animations per Sarah's mobile direction
- Portfolio carousel: swipe gesture (no arrow buttons)
- Form fields: full-width for keyboard accessibility
- Service ticker at hero bottom: maintained as brand element

---

## 2. Page Structure & Scroll Journey

**Figma Node:** `281:2337` (LABS)
**Dimensions:** 428 × 16812px

| # | Section | Approx Y | Mobile Adaptation |
|---|---------|----------|-------------------|
| 1 | Nav Header | 0–87 | Hamburger menu |
| 2 | Hero | 0–825 | Full-width LABS wordmark + service ticker |
| 3 | Strategy Statement | 825–1620 | Single column + two CTAs |
| 4 | Portfolio Carousel | 1620–2761 | Swipe carousel, dot indicators |
| 5 | Brand Logos | 2761–3290 | Horizontal scroll row |
| 6 | Stats Band | 3290–3447 | Single-column stats stack |
| 7 | Growth Cards | 3447–5714 | 3 stacked gradient cards |
| 8 | The Labs Method | 5714–6609 | Dot grid + image |
| 9 | Labs Services | 6407–8020 | 3 stacked pillar cards |
| 10 | Already Inside | 8284–10139 | Stacked text + UI visuals |
| 11 | Paths to Growth | 10139–12371 | 5 stacked full-width cards |
| 12 | Portfolio Slider | 12371–13560 | Gradient card carousel |
| 13 | Customer Quote | 13560–14259 | Full-width quote |
| 14 | Video Section | 14259–14904 | Full-width video placeholder |
| 15 | Book a Session | 14904–15716 | Full-width form |
| 16 | Footer | 15737–16812 | 2-column link grid |

---

## 3. Section 1: Hero

**Figma Node:** `281:2399` (Frame 1533216749)
**Dimensions:** 428 × 825px

### Layout
```
┌────────────────────────────────────┐
│ [Nav Header - hamburger]           │
├────────────────────────────────────┤
│              Nymbus Labs           │
│                                    │
│         [Hero image]               │
│                                    │
│           L A B S                  │
│       (large gradient wordmark)    │
│                                    │
│ Brand design | Web design | Mktg.. │
│ (service ticker)                   │
└────────────────────────────────────┘
```

### Content Elements

| Ref | Element | Description |
|-----|---------|-------------|
| ML-1 | "Nymbus Labs" label | Top-right label |
| ML-2 | Hero image | Centered photograph (`281:2445`/`281:2446`) |
| ML-3 | LABS wordmark | Large gradient-masked text (`281:2448`) |
| ML-4 | Service ticker | "Brand design \| Web design \| Marketing design \| Media \| Graphic design" (`281:2458`) |

### Background
- Gradient with organic elliptical light shapes
- Vertical stripe pattern overlay (9 translucent rectangles)
- No 3D chrome blob on mobile

### Interactions
- Gradient ellipses may pulse/animate (keep if usable, test on device)
- Service ticker: horizontal scroll marquee
- Fade in on scroll

---

## 4. Section 2: Strategy Statement

**Figma Node:** `281:2493` (Text)
**Position:** Y 825–1620

### Content
- **Heading:** "Move on your strategy. Labs handles the build."
- **Body:** "Embed growth experts with your team to architect, launch, and optimize your digital brand from launch through scale."
- **CTA 1 (ML-5):** [Pill button — primary action]
- **CTA 2 (ML-6):** [Pill button — secondary action]

**Note:** CTA labels are Button 5 / Button 6 instances — confirm exact label copy. Likely "Book a session" and "See our portfolio" or similar.

### Mobile Layout
- Single column: heading → body → two CTAs stacked
- CTAs: 300px wide, centered

---

## 5. Section 3: Portfolio Carousel

**Figma Node:** `281:2504` (StrategyBand with Portfolio slider)
**Position:** Y 1620–2761

### Carousel Cards (Brand Portfolio)

| # | Brand | Tagline |
|---|-------|---------|
| 1 | ZYNLO | "Last but not least... Every ZYNLO account is awesome!" |
| 2 | CineFi | "Discover how to manage your money." |
| 3 | HUSTL | "Banking designed for the driven." |
| 4 | AlumniFi | "Adulting is hard. Banking shouldn't be." |
| 5 | Collegiate | "Your money. Right where you need it." |
| 6 | Pillur | Business banking with cashflow chart |
| 7 | ROGER | "Command Your Future." |

### Mobile Carousel Behavior

| Desktop | Mobile |
|---------|--------|
| Arrow buttons (prev/next) | Swipe gesture |
| Hover → drop shadow + movement | No hover |
| Click dot → jump to brand | Tap dot → jump to brand |

- Eyebrow badge: "digital brand launched with nymbus"
- Dot indicators: 6 dots (node `281:2342`–`281:2347`)
- Carousel auto-advances with pause on touch

---

## 6. Section 4: Brand Logos

**Figma Node:** `281:3160` (Logos)
**Position:** Y 2761–3290

### Layout
- Horizontal row of 7 brand logos
- Each 200px container with logo centered

### Brands
- ZYNLO, CineFi, HUSTL, Collegiate, Pillur, ROGER + 1 additional
- Logos: static or subtle fade on scroll

### Mobile Behavior
- Horizontal scroll row (same as desktop, scaled to viewport)
- Touch-scrollable if logos overflow 428px

---

## 7. Section 5: Stats Band

**Figma Node:** `281:3276` (Frame 37)
**Position:** Y 3290–3447

### Content (Single-column stack on mobile)

| Stat | Label |
|------|-------|
| +459% | Deposits growth across the Labs portfolio YoY 2025 |
| $50M+ | deposits in as little as 1.4 months |
| 97% | 12-month customer retention |

### Heading
- "Launch beside your core, or replace the one holding you back." (from node `281:3278`)

### Mobile Interactions
- Numbers count up on scroll into viewport
- Simplified fade-in (no stagger on mobile)

---

## 8. Section 6: Growth Cards

**Figma Node:** `281:3298` (Frame 2147238565)
**Position:** Y 3447–5714

### Header
- **Heading:** "The platform launches the bank. We grow it."
- **Body:** Full paragraph on growth strategy

### 3 Gradient Cards (stacked on mobile)

| Ref | Card | Title | Description |
|-----|------|-------|-------------|
| ML-7 | Card 1 (`281:3304`) | The audience. | "Define who the brand is for and why they leave the incumbent to join it." |
| ML-8 | Card 2 (`281:3330`) | The engine. | "Build the acquisition that turns a live product into funded, growing deposits." |
| ML-9 | Card 3 (`281:3366`) | The runway. | "Connect strategy and operations so the model keeps growing long after launch day." |

### Mobile Card Behavior
- Full-width (396px) gradient cards
- Text in bottom section of each card
- Icon button top-right (arrow)
- Tap-through only (no hover animation)

---

## 9. Section 7: The Labs Method

**Figma Node:** `281:3392` (Group 2117130596 / The Labs Method)
**Position:** Y 5714–6609

### Content
- **Heading:** "The Labs method"
- **Image:** Large image placeholder (`281:4127`/`281:4128`) — visual from Sarah/Adam
- **Background:** Dot grid pattern (two 19×19 grids of 2px dots)
- **Two pill CTAs** (`281:3394`/`281:3395`): [Primary and secondary Lab actions]

### Mobile Behavior
- Dot grid background: cursor-reactive animation (keep if usable on mobile)
- Image: full-width (396px)
- CTAs: 300px wide, centered, stacked vertically

---

## 10. Section 8: Labs Services (3 Pillars)

**Figma Nodes:** `281:4160`, `281:4145`, `281:4130` (Flux 1, 2, 3)
**Position:** Y 6407–8020

### Stacked Service Cards (mobile)

| Ref | Pillar | Heading | Tag | Image type |
|-----|--------|---------|-----|------------|
| ML-10 | Strategy (`281:4160`) | "Strategy, embedded." | Strategy | Blob 1 gradient |
| ML-11 | Branding (`281:4145`) | "Brand, built and shipped." | Branding | VideoBlob gradient |
| ML-12 | Growth (`281:4130`) | "Growth, run on live data." | Growth | Blob 6 gradient |

### Card Content

**Strategy (ML-10):**
- "We work inside your team to define the audience, the offer, and the growth model, then commit to the moves that move the numbers."
- Tag badge: "Strategy ●"

**Branding (ML-11):**
- "We build the positioning, identity, and launch, then put the brand in market with the audience it was made for."
- Tag badge: "Branding ●"

**Growth (ML-12):**
- "We plan and run paid, owned, and partner acquisition, then optimize on real performance after launch."
- Tag badge: "Growth ●"

### Mobile Behavior
- Cards stack vertically, full-width
- Gradient blob backgrounds maintained on mobile
- Tag badges visible on each card
- Tap-through to relevant Lab service (destination TBD)

---

## 11. Section 9: Already Inside / Integration

**Figma Node:** `281:4175` (Text) + `281:4428` (Text)
**Position:** Y 8284–12139

### Content
- **Heading:** "Already inside. No agency ever gets here."
- **Body:** "We build on the same core, digital banking, onboarding, and operations that run the brand, so strategy becomes a live, growing bank."

### Visual Elements (Mobile Stacked)

| Element | Description |
|---------|-------------|
| Banking UI card 1 | Photo + content card (`281:4183`) |
| Banking UI card 2 | Image photo (`281:4194`/`281:4196`) |
| PFM card (`281:4316`) | Small card — Categories radial chart |
| Photo card (`281:4362`) | Image card |
| Cards + mockup (`281:4365`) | Debit card UI stacked |
| Vertical banking brands card | Dark card — "Vertical banking brands." |
| Deposit growth models card | Dark card — "Deposit growth models." |

### Mobile Behavior
- All UI elements stack vertically
- Cards fade in on scroll
- No hover animation — visual only

---

## 12. Section 10: Paths to Growth

**Figma Node:** `281:4435` (Frame 2147238600)
**Position:** Y 10139–12371

### Header
- **Heading:** "Paths to growth"
- **Subheading:** "Models we have launched, and can launch with you."

### 5 Cards (all full-width on mobile — node `281:4536`)

| Ref | Card | Title | Description |
|-----|------|-------|-------------|
| ML-13 | Card 1 (`281:4438`) | Vertical banking brands. | "A brand built for a profession, community, or life stage your primary institution cannot reach." |
| ML-14 | Card 2 (`281:4450`) | Deposit growth models. | "A focused offer and acquisition plan designed to pull in and fund deposits." |
| ML-15 | Card 3 (`281:4537`) | New market entry. | "A dedicated brand and launch plan to enter a new geography, segment, or channel." |
| ML-16 | Card 4 (`281:4547`) | Affinity banking. | "A brand and offer matched to a partner, employer, alumni, or community base." |
| ML-17 | Card 5 (`281:4558`) | Product-led growth. | "A model led by one sharp offer: high-yield deposits, business banking, or a niche need." |

### Mobile Card Behavior
- All 5 cards stack full-width (desktop had 2 large + 3 small grid)
- Icon button (top-right arrow) on each card
- Tap card → navigates to relevant section/page
- Cards fade in staggered on scroll

---

## 13. Section 11: Portfolio Slider (Large Cards)

**Figma Node:** `281:2338` (Group 2117130604)
**Position:** Y 12371–13560

### Content
- **Heading:** "From first idea to live brand."
- **Subheading:** Supporting copy
- **3 gradient cards** (large format, each with heading and body)

### Dot Indicators
- 6 dot buttons (`281:2342`–`281:2347`)
- Tap dot → jump to card

### Mobile Behavior
- Full-width cards (428px), one visible at a time
- Swipe left/right to navigate
- Auto-advance with pause on touch

---

## 14. Section 12: Customer Quote

**Figma Node:** `281:4568` (Frame 2147238549), `281:4569` (CustomerQuotes)
**Position:** Y 13560–14259

### Content
- **Quote:** "Speed to market and cost to serve is what this business is all about..."
- **Attribution:** "Stephen Owen, CEO, First Entertainment Credit Union"
- **Logos:** 3 client logos displayed below attribution

### Mobile Layout
- Full-width quote text (centered)
- Attribution below
- Logo row below attribution (scaled to fit)

---

## 15. Section 13: Video Section

**Figma Node:** `281:2487` (Frame 1533216766)
**Position:** Y 14259–14904

### Content
- **Placeholder:** "Video can go here" (`281:2492`)
- Dark background with image overlay
- 428 × 645px

### Mobile Behavior
- Full-width video container (396px with 16px padding)
- Placeholder awaiting video asset from team

---

## 16. Section 14: Book a Session (Form CTA)

**Figma Node:** `281:2375` (Frame 1533216778)
**Position:** Y 14904–15716

### Heading
- **Heading:** "Build the growth model behind your launch."
- **Body:** "Book a strategy session. Tell us what you want to grow..." (`281:2380`)

### Form Fields (all full-width on mobile)

| Ref | Field | Placeholder | Type | Node |
|-----|-------|-------------|------|------|
| ML-18 | Name | "Name" | Text input | `281:2383` |
| ML-19 | Email | "Email" | Email input | `281:2386` |
| ML-20 | Company | "Company" | Text input | `281:2389` |
| ML-21 | What do you grow? | "What do you want to grow?" | Text area | `281:2393` |

### Submit CTA

| Ref | Element | Destination |
|-----|---------|-------------|
| ML-22 | "Book a session" button (`281:2372`/`281:2374`) | Form submission [URL TBD] |

### Mobile Form Behavior
- All inputs full-width (396px)
- Keyboard opens on tap
- Text area (`281:2393`) is resizable/scrollable
- Submit button: 300px, centered
- Field spacing: 16px between fields

---

## 17. Mobile Animations & Interactions

### Animation Specifications

| Desktop | Mobile |
|---------|--------|
| Scroll reveal (fade up) | Fade-in on viewport entry |
| Portfolio carousel arrows | Swipe gesture + auto-advance |
| Card hover lift | No hover |
| Dot grid cursor animation | Keep if usable (test on device) |
| Ripple distortion (hero bg) | Keep if usable (test on device) |
| Stats count-up | Same — triggers on scroll |
| Fluid glass component | Keep if supported on mobile |
| Masonry layout | Not applicable (single column) |

### Touch Targets

| Element | Size | Status |
|---------|------|--------|
| CTA buttons | 300×45px | ✓ |
| Carousel dots | 8px visual → 44px touch target | ✓ with padding |
| Growth/Paths cards | Full-width area | ✓ |
| Form inputs | Full-width × 45px min | ✓ |
| Submit button | 300×45px | ✓ |

---

## 18. User Journey Scenarios

### Scenario ML-1: View Hero and Service Ticker

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on mobile Labs page |
| **WHEN** | Page loads |
| **THEN** | Hero displays LABS wordmark, image, and service ticker begins marquee |

**Acceptance Criteria:**
1. "Nymbus Labs" label visible top-right
2. Hero image centered
3. LABS gradient wordmark rendered
4. Service ticker auto-scrolls: Brand design | Web design | Marketing design | Media | Graphic design

---

### Scenario ML-2: Tap Primary Strategy CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User is on mobile Labs page |
| **WHEN** | User taps CTA 1 (ML-5) in Strategy Statement section |
| **THEN** | Navigates to destination (TBD — likely "Book a session" form or /contact/) |

---

### Scenario ML-3: Swipe Portfolio Carousel

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Portfolio Carousel section |
| **WHEN** | User swipes left |
| **THEN** | Carousel advances to next brand card |

**Acceptance Criteria:**
1. Swipe triggers animation (300ms)
2. Dot indicator updates
3. Card snaps into place

---

### Scenario ML-4: Tap Portfolio Dot Indicator

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing portfolio carousel |
| **WHEN** | User taps dot 4 |
| **THEN** | Carousel jumps to 4th brand card (AlumniFi) |

---

### Scenario ML-5: View Stats Count-Up

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Stats section |
| **WHEN** | Stats enter viewport |
| **THEN** | "+459%", "+$50M", "97%" count up |

---

### Scenario ML-6: Tap Growth Card

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Growth Cards section |
| **WHEN** | User taps "The audience." card (ML-7) |
| **THEN** | Navigates to destination (TBD — Labs detail or /labs/) |

---

### Scenario ML-7: Tap Paths to Growth Card

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Paths to Growth section |
| **WHEN** | User taps "Vertical banking brands." card (ML-13) |
| **THEN** | Navigates to relevant section or contact page |

---

### Scenario ML-8: Fill and Submit Book a Session Form

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Book a Session section |
| **WHEN** | User fills Name, Email, Company, textarea fields and taps "Book a session" |
| **THEN** | Form submits, success state shown |

**Acceptance Criteria:**
1. Each field tappable — keyboard opens correctly
2. Textarea scrollable for long input
3. All required fields validated before submit
4. Success state shows after submission

---

### Scenario ML-9: Swipe Large Portfolio Slider

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to "From first idea to live brand" section |
| **WHEN** | User swipes the large gradient cards |
| **THEN** | Cards advance, dot indicator updates |

---

## 19. Open Questions

### Inherited from Desktop (Status)

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Missing screens/widgets | 🔄 PENDING: Multiple nodes still awaiting Adam's screen designs. |
| 2 | Video content | 🔄 PENDING: "Video can go here" placeholder — awaiting video asset. |

### Mobile-Specific

| # | Question | Resolution |
|---|----------|-----------|
| 3 | Strategy Statement CTAs | ✅ RESOLVED: **"Explore Labs" and "Talk to an expert"** — consistent with site-wide CTA patterns. |
| 4 | Growth card destinations | ✅ RESOLVED: **Display-only, informational**. Cards do not tap through to anywhere. |
| 5 | Paths to Growth card destinations | ✅ RESOLVED: **All link to `/contact/`** — single conversion funnel. |
| 6 | Labs Method CTAs | ✅ RESOLVED: **"Explore Labs" → `/labs/`** (same page scroll-to-top or no-op), **"Talk to an expert" → `/contact/`**. |
| 7 | Form submission endpoint | 🔄 PENDING: "Book a session" form endpoint/URL TBD — confirm API or form service. |
| 8 | Service ticker | ✅ RESOLVED: **Yes, pause on tap/press** for accessibility. |
| 9 | Portfolio slider large cards | 🔄 PENDING: The 3 gradient cards have placeholder text. Confirm if content is finalized. |

---

## Complete URL Map (Mobile Labs)

| Ref | Element | Destination |
|-----|---------|-------------|
| ML-5 | Strategy CTA 1 | TBD |
| ML-6 | Strategy CTA 2 | TBD |
| ML-7–9 | Growth cards (audience / engine / runway) | TBD |
| ML-10–12 | Labs service pillar cards | TBD |
| ML-13 | Vertical banking brands | TBD |
| ML-14 | Deposit growth models | TBD |
| ML-15 | New market entry | TBD |
| ML-16 | Affinity banking | TBD |
| ML-17 | Product-led growth | TBD |
| ML-22 | Book a session form | [Form endpoint TBD] |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 11, 2026 | Initial mobile Labs document | Kiro |
