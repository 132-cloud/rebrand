# Labs Page User Flow & Journey

**Source:** Figma Dev Hand-off — LABS (Node 1:2)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=1-2  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Global Animations (Sarah's Notes)](#2-global-animations-sarahs-notes)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Strategy Statement](#4-section-2-strategy-statement)
5. [Section 3: Portfolio Carousel](#5-section-3-portfolio-carousel)
6. [Section 4: Brand Logos](#6-section-4-brand-logos)
7. [Section 5: Stats Band](#7-section-5-stats-band)
8. [Section 6: The Platform Launches / Growth Section](#8-section-6-the-platform-launches--growth-section)
9. [Section 7: The Labs Method](#9-section-7-the-labs-method)
10. [Section 8: Labs Services (3 Pillars)](#10-section-8-labs-services-3-pillars)
11. [Section 9: Already Inside / Integration](#11-section-9-already-inside--integration)
12. [Section 10: Paths to Growth](#12-section-10-paths-to-growth)
13. [Section 11: Portfolio Slider (Large Cards)](#13-section-11-portfolio-slider-large-cards)
14. [Section 12: Customer Quote](#14-section-12-customer-quote)
15. [Section 13: Video Section](#15-section-13-video-section)
16. [Section 14: Book a Session (Form CTA)](#16-section-14-book-a-session-form-cta)
17. [Section 15: Footer](#17-section-15-footer)

---

## 1. Page Overview & Scroll Journey

The Labs page (1512px wide, ~12,606px tall) positions Nymbus Labs as the embedded growth team that architects, launches, and scales digital banking brands. The page narrative moves from brand showcase → proof → method → paths → conversion.

**Scroll Order (top to bottom):**

| # | Section | Y Position | Purpose |
|---|---------|-----------|---------|
| 1 | Hero (LABS branding + visual) | 0–1309 | Brand identity + service categories |
| 2 | Strategy Statement | 1309–1895 | Value proposition |
| 3 | Portfolio Carousel | 1896–2700 | Brand showcase |
| 4 | Brand Logos | 2771–2919 | Trust signals |
| 5 | Stats Band | 2985–3509 | Proof points |
| 6 | Growth Section (3 cards) | 3539–4562 | Platform → Growth narrative |
| 7 | The Labs Method (dot grid + image) | 4599–5494 | Process visual |
| 8 | Labs Services (3 pillars) | 5499–6383 | Strategy / Brand / Growth |
| 9 | Already Inside | 6476–7369 | Integration proof |
| 10 | Paths to Growth | 7406–8502 | Growth model cards |
| 11 | Portfolio Slider (large) | 8608–9648 | Detailed brand carousel |
| 12 | Customer Quote | 9649–10254 | Social proof |
| 13 | Video Section | 10260–11086 | Video/demo content |
| 14 | Book a Session (Form) | 11102–11939 | Conversion |
| 15 | Footer | 11959+ | Navigation + legal |

---

## 2. Global Animations (Sarah's Notes)

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Masonry layout | Component reference for Labs page | https://reactbits.dev/components/masonry |
| Fluid glass | Component reference | https://reactbits.dev/components/fluid-glass |
| Ripple distortion | Animation effect | https://reactbits.dev/animations/ripple-distortion |
| Background animation (certain sections) | Cursor-reactive grid, color: #42526E | https://reactbits.dev/animations/cursor-grid |

---

## 3. Section 1: Hero

**Figma Node:** `17:3232` (Frame 1533216749)

### Layout
- Full-height hero (1512 x 1309px)
- Gradient background with organic elliptical light shapes
- Vertical stripe pattern overlay (two groups of 9 rectangles)
- Large "LABS" wordmark with gradient mask
- Service category ticker at bottom
- Back/menu icon top-left

### Content
- **Top-right label:** "Nymbus Labs"
- **Central wordmark:** "LABS" (large, gradient-masked)
- **Hero image:** Centered photograph/image (1022 x 542px)
- **Service ticker (bottom):** "Brand design" | "Web design" | "Marketing design" | "Media" | "Graphic design"
  - Separated by vector dividers

### Interactions & Animations

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Page load | Gradient ellipses animate/pulse | — |
| Background | Ripple distortion effect | https://reactbits.dev/animations/ripple-distortion |
| Service ticker | Horizontal scroll/marquee (TBD) | — |
| Scroll in | Fade in up with ease | Global |

---

## 4. Section 2: Strategy Statement

**Figma Node:** `17:3403` (Frame 1533216753)

### Layout
- Large centered heading
- Body text below
- Two pill CTAs

### Content
- **Heading:** "Move on your strategy. Labs handles the build."
- **Body:** "Embed growth experts with your team to architect, launch, and optimize your digital brand from launch through scale."
- **CTA 1:** [Pill button — instance of Button 5]
- **CTA 2:** [Pill button — instance of Button 5]

### Interactions
- Fade in up on scroll

---

## 5. Section 3: Portfolio Carousel

**Figma Node:** `17:3662` (Portfolio slider)

### Layout
- Previous/Next arrow buttons (top-right)
- "DIGITAL BRANDS LAUNCHED WITH NYMBUS" eyebrow label (dark badge)
- Horizontal scrolling card carousel
- 6 dot indicators at bottom

### Carousel Cards

| # | Brand | Tagline |
|---|-------|---------|
| 1 | ZYNLO | "Last but not least... Every ZYNLO account is awesome!" |
| 2 | CineFi | "Discover how to manage your money." |
| 3 | HUSTL | "Banking designed for the driven." |
| 4 | AlumniFi | "Adulting is hard. Banking shouldn't be." |
| 5 | Collegiate | "Your money. Right where you need it." |
| 6 | Pillur | [Business banking with cashflow chart] |
| 7 | ROGER | "Command Your Future." |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Click Previous | Scroll left |
| Click Next | Scroll right |
| Click dot | Jump to brand |
| Card hover | Drop shadow + ease of movement |
| Scroll in | Cards fade in |

---

## 6. Section 4: Brand Logos

**Figma Node:** `17:4319` (Logos)

### Layout
- Horizontal row of 7 brand logos
- Each in a 247px wide container

### Brands Shown
- 7 partner/client logos (details in Figma images)

### Interactions
- Static display or subtle fade on scroll

---

## 7. Section 5: Stats Band

**Figma Node:** `17:4601` (Section)

### Layout
- Section heading centered
- 3 stat columns below

### Content
- **Heading:** "The numbers behind the brands."
- **Stat 1:** "+459%" — "Deposits growth across the Labs portfolio YoY 2025"
- **Stat 2:** "$50M+" — "deposits in as little as 1.4 months"
- **Stat 3:** "97%" — "12-month customer retention"

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Numbers count up |
| Fade in | Stats animate in |

---

## 8. Section 6: The Platform Launches / Growth Section

**Figma Node:** `17:3308` (Frame 1533216759)

### Layout
- Large heading + body text
- 3 gradient cards with overlay content
- Icon buttons on cards

### Content
- **Heading:** "The platform launches the bank. We grow it."
- **Body:** "Your core is live and the brand works. But a platform does not hand you customers. Growth takes an audience, an offer, and a plan to fund it, built as deliberately as the tech was."

**3 Feature Cards:**

| Card | Title | Description |
|------|-------|-------------|
| 1 | The audience. | "Define who the brand is for and why they leave the incumbent to join it." |
| 2 | The engine. | "Build the acquisition that turns a live product into funded, growing deposits." |
| 3 | The runway. | "Connect strategy and operations so the model keeps growing long after launch day." |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Card hover | Gradient moves, card lifts |
| Scroll in | Cards fade in staggered |

---

## 9. Section 7: The Labs Method

**Figma Node:** `17:2473` (Frame 1533216766)

### Layout
- "The Labs method" heading
- Large image/video placeholder (983 x 553px)
- Dot grid pattern background (two grids of 19x19 dots)
- Two pill CTAs at bottom

### Content
- **Heading:** "The Labs method"
- **Image:** [TRUNCATED — verify in Figma node 17:3211]
- **CTAs:** Two pill buttons (instances of Button 5)

### Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Dot grid | Cursor-reactive grid animation | https://reactbits.dev/animations/cursor-grid |
| Scroll in | Image fades in | — |

---

## 10. Section 8: Labs Services (3 Pillars)

**Figma Nodes:** `17:4579`, `17:4587`, `17:4594` (Strategy/Branding/Growth cards)

### Layout
- 3 cards with gradient accents
- Each has a sub-heading, description, and tag button

### Content

| Pillar | Heading | Tag | Description |
|--------|---------|-----|-------------|
| 1 | "Removing the guess work from entry strategy." | Strategy | — |
| 2 | "Removing the guess work from brand positioning." | Branding | — |
| 3 | "Removing the guess work from optimization." | Growth | — |

### Below Cards (3 descriptions):

| # | Title | Description |
|---|-------|-------------|
| 1 | "Strategy, embedded." | "We work inside your team to define the audience, the offer, and the growth model, then commit to the moves that move the numbers." |
| 2 | "Brand, built and shipped." | "We build the positioning, identity, and launch, then put the brand in market with the audience it was made for." |
| 3 | "Growth, run on live data." | "We plan and run paid, owned, and partner acquisition, then optimize on real performance after launch." |

---

## 11. Section 9: Already Inside / Integration

**Figma Node:** `17:3420` (Frame 1533216750)

### Layout
- Two-column text header
- Large visual showing integrated banking screens (debit cards, app UI, account screens)

### Content
- **Left heading:** "Already inside. No agency ever gets here."
- **Right body:** "We build on the same core, digital banking, onboarding, and operations that run the brand, so strategy becomes a live, growing bank."
- **Visual:** Multiple overlapping banking UI screens (debit cards, account views, categories)

### Interactions
- Visual elements may animate on scroll (parallax or stagger)

---

## 12. Section 10: Paths to Growth

**Figma Node:** `17:4435` (Frame 1533216781)

### Layout
- Section header
- Grid of 5 cards (2 large + 3 small)

### Content
- **Heading:** "Paths to growth"
- **Subheading:** "Models we have launched, and can launch with you."

**Cards:**

| # | Title | Description | Size |
|---|-------|-------------|------|
| 1 | "Vertical banking brands." | "A brand built for a profession, community, or life stage your primary institution cannot reach." | Large (half-width) |
| 2 | "Deposit growth models." | "A focused offer and acquisition plan designed to pull in and fund deposits." | Large (half-width) |
| 3 | "New market entry." | "A dedicated brand and launch plan to enter a new geography, segment, or channel." | Small (third-width) |
| 4 | "Affinity banking." | "A brand and offer matched to a partner, employer, alumni, or community base." | Small (third-width) |
| 5 | "Product-led growth." | "A model led by one sharp offer: high-yield deposits, business banking, or a niche need." | Small (third-width) |

Each card has an icon button (top-right arrow).

### Interactions

| Trigger | Behavior |
|---------|----------|
| Card hover | Card lifts, arrow grows |
| Card click | Navigates to relevant page |
| Scroll in | Cards fade in staggered |

---

## 13. Section 11: Portfolio Slider (Large Cards)

**Figma Node:** `17:2420` (Section)

### Layout
- Heading + subheading
- Large single card display (834 x 524px)
- 6 dot indicators
- Gradient background on cards

### Content
- **Heading:** "From first idea to live brand."
- **Subheading:** "One team brings structure to growth, from the audience..."
- **Cards:** 3 gradient card slots (834px wide each)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Click dot | Jump to brand |
| Auto-advance | Cards cycle |
| Card transition | Smooth slide |

---

## 14. Section 12: Customer Quote

**Figma Node:** `17:4624` (CustomerQuotes)

### Layout
- Large centered quote
- Attribution below
- Company logo

### Content
- **Quote:** "Speed to market and cost to serve is what this business is all about..." [TRUNCATED — verify in Figma node 220:3639]
- **Attribution:** "Stephen Owen, CEO, First Entertainment Credit Union..." [TRUNCATED — verify in Figma node 220:3642]

### Interactions
- Fade in on scroll
- May cycle between quotes

---

## 15. Section 13: Video Section

**Figma Node:** `17:4644` (Frame 1533216766)

### Layout
- Dark background (1512 x 826px)
- Large video/image placeholder (983 x 553px)
- "Video can go here" placeholder text

### Content
- **Placeholder:** "Video can go here"

### Notes
- Content TBD — awaiting video asset

---

## 16. Section 14: Book a Session (Form CTA)

**Figma Node:** `17:2398` (Frame 1533216778)

### Layout
- Centered heading + body
- 4-field form
- Submit button

### Content
- **Heading:** "Build the growth model behind your launch."
- **Body:** "Book a strategy session. Tell us what you want to grow..."

### Form Fields

| Field | Placeholder | Type |
|-------|-------------|------|
| 1 | Name | Text input |
| 2 | Email | Email input |
| 3 | Company | Text input |
| 4 | What do you want to grow? | Text area |

- **Submit:** "Book a session" button

### Interactions

| Trigger | Behavior |
|---------|----------|
| Submit click | Form submission [URL TBD] |
| Validation | Required fields [TBD] |
| Success state | [TBD] |

---

## 17. Section 15: Footer

**Figma Node:** `17:4578` (Footer instance)

- Standard site footer (shared component)

---

## Appendix: Sarah's Full Comments on LABS Page

### Animations & Interactions
| Area | Comment | Reference URL |
|------|---------|---------------|
| Page (1:2) | Masonry layout | https://reactbits.dev/components/masonry |
| Page (1:2) | Fluid glass component | https://reactbits.dev/components/fluid-glass |
| Page (1:2) | Ripple distortion animation | https://reactbits.dev/animations/ripple-distortion |
| Background (17:7173) | Cursor-reactive grid animation, color: #42526E | https://reactbits.dev/animations/cursor-grid |

### Content / Design Notes
| Area | Comment | By |
|------|---------|-----|
| 17:7173 | "@Adam Rodriguez add screen" (x8) | Sarah |
| 17:6526, 17:6458, 17:6583 | "@Adam Rodriguez add screen or widget" | Sarah |
| 17:5348 | "@Adam Rodriguez add screen or widget" (x5) | Sarah |
| 17:6583 | "@Adam Rodriguez are you also designing the AI chat?" | Sarah |
| 17:6583 | "we should update these colors, to make sure they are WCAG Accessible" | Adam Rodriguez |
| 17:5348 | "This should only show content from the insights hub that is tagged 'Managed Services'" | Mike |

---

## Open Questions (from Figma comments)

1. ~~**Menu reappearance**~~ — ✅ RESOLVED: Menu reappears on button click in top left.
2. ~~**AI chat design**~~ — ✅ RESOLVED: Graphic coming from Adam. Awaiting asset.
3. ~~**WCAG accessibility**~~ — ✅ RESOLVED: Color updates coming from Adam.
4. **Missing screens/widgets** — Multiple comments from Sarah requesting Adam add screens/widgets to nodes 17:7173, 17:6526, 17:6458, 17:6583, 17:5348 — STILL OPEN (awaiting Adam)
5. **Video content** — "Video can go here" placeholder (node 17:4651) — STILL OPEN (awaiting video asset)
6. ~~**Insights hub filtering**~~ — ✅ RESOLVED: Should only show content from the insights hub tagged "Managed Services"
