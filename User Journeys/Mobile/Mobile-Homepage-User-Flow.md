# Mobile Homepage User Flow & Journey

**Source:** Figma Dev Hand-off — Homepage - Mobile (Node 282:8005)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=282-8005
**Last Updated:** August 11, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Mobile Navigation Header](#3-mobile-navigation-header)
4. [Section 1: Hero](#4-section-1-hero)
5. [Section 2: Logo Bar](#5-section-2-logo-bar)
6. [Section 3: Stats Band](#6-section-3-stats-band)
7. [Section 4: Strategy Band](#7-section-4-strategy-band)
8. [Section 5: Platform Overview](#8-section-5-platform-overview)
9. [Section 6: Governed AI Approach CTA](#9-section-6-governed-ai-approach-cta)
10. [Section 7: Activation Paths](#10-section-7-activation-paths)
11. [Section 8: Managed Services](#11-section-8-managed-services)
12. [Section 9: Nymbus Labs & Portfolio Carousel](#12-section-9-nymbus-labs--portfolio-carousel)
13. [Section 10: Customer Quotes](#13-section-10-customer-quotes)
14. [Section 11: Governed AI Deep Section](#14-section-11-governed-ai-deep-section)
15. [Section 12: Resources / Insights](#15-section-12-resources--insights)
16. [Section 13: Footer CTA](#16-section-13-footer-cta)
17. [Hero Chatbox Mobile Flow](#17-hero-chatbox-mobile-flow)
18. [Mobile Animations & Interactions](#18-mobile-animations--interactions)
19. [User Journey Scenarios](#19-user-journey-scenarios)
20. [Open Questions](#20-open-questions)

---

## 1. Overview & Mobile-Specific Considerations


The mobile homepage adapts the desktop's 1512px wide, ~10124px tall scrolling narrative into a 428px wide, ~13710px tall mobile-optimized experience. All sections are preserved but reorganized for single-column viewing and touch interaction.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| Multi-column card grids | Single-column stacked cards | 428px viewport |
| Hover-triggered card animations | Tap-through cards (no hover states) | Touch devices |
| Horizontal carousel with arrows | Swipe carousel with dot indicators | Touch gestures |
| Large 3D chrome blobs | Removed | Performance on mobile |
| Background shader animations | Keep where usable (test per device) | Maintain visual richness |
| Side-by-side text layouts | Stacked vertical layouts | Readability |
| Pill button rows | Wrapped pill grid (2×3 layout) | Thumb accessibility |

### Design Philosophy (Per Sarah's Direction)

- **Lighter weight animations** — Reduce chrome animated blobs, simplified transitions
- **Touch-first interactions** — All targets minimum 44×44px, no hover states
- **Bento cards** — Click-through only (no hover expand on mobile)
- **Swipe carousels** — Replace arrow navigation with swipe gestures
- **Sticky elements** — Mobile header nav, not CTAs in hero (CTAs in menu instead)

---

## 2. Page Structure & Scroll Journey

**Figma Node:** `282:8005` (Homepage - Mobile)
**Dimensions:** 428 × 13710px

### Scroll Order (top to bottom)

| # | Section | Approx Y | Mobile Adaptation |
|---|---------|----------|-------------------|
| 1 | Navigation Header | 0–87 | Hamburger menu |
| 2 | Hero + Chatbox | 87–700 | Stacked layout, wrapped pills |
| 3 | Logo Bar | 896–1094 | Horizontal scroll marquee |
| 4 | Stats Band | 1094–1712 | 2×2 grid (not 4 columns) |
| 5 | Strategy Band | 1712–2250 | Single column text |
| 6 | Platform Overview | 2251–3985 | Stacked cards (no grid) |
| 7 | Governed AI CTA | 3985–4626 | Centered CTA |
| 8 | Activation Paths | 4615–6036 | Simplified flow visual |
| 9 | Managed Services | 6036–6982 | Stacked text + image |
| 10 | Labs + Carousel | 6982–8376 | Swipe carousel |
| 11 | Customer Quotes | 9692–10487 | Full-width quote |
| 12 | Governed AI Deep | 8376–9666 | Stacked 3-feature grid |
| 13 | Resources | 10487–11966 | Stacked article cards |
| 14 | Footer CTA | 11966–12635 | Full-width CTA |
| 15 | Footer | 12635–13710 | 2-column link grid |

---

## 3. Mobile Navigation Header

**Figma Node:** `302:7964` (Nav Mobile)
**Dimensions:** 428 × 87px

See [Mobile-Header-Navigation-User-Flow.md](./Mobile-Header-Navigation-User-Flow.md) for complete documentation.

**Summary:**
- Fixed header with Nymbus logo (left) and hamburger icon (right)
- Hamburger opens full-screen menu overlay with accordion sections
- Sticky footer CTAs in menu: "Try demo" + "Let's move"

---

## 4. Section 1: Hero

**Figma Node:** `282:8026` (Container)
**Position:** Y 148–700 (approx)
**Width:** 396px (with 16px side padding)


### Layout (Mobile)

```
┌────────────────────────────────────┐
│ [Nav Header - hamburger]           │
├────────────────────────────────────┤
│                                    │
│   The Next-Generation              │
│   Banking Platform                 │
│   (H1 - rotating text)             │
│                                    │
│   Powered by the industry's        │
│   first secure MCP server.         │
│                                    │
│   ┌────────────────────────────┐   │
│   │ What do you want to grow?  │→│ │
│   └────────────────────────────┘   │
│                                    │
│   [Modern core] [Operations]       │
│   [Digital brand] [Governed AI]    │
│   [Expert] [More...]               │
│                                    │
└────────────────────────────────────┘
```

### Content Elements

| Ref | Element | Description |
|-----|---------|-------------|
| MH-1 | H1 Title | "The Next-Generation Banking Platform" (rotating) |
| MH-2 | Subtitle | "Powered by the industry's first secure MCP server." |
| MH-3 | Chatbox Input | Text input with rotating placeholder |
| MH-4 | Submit Button | Circular arrow icon (36×36px) |
| MH-5 | Pill: Modern Core | "Move to a modern core" → Chatbox response |
| MH-6 | Pill: Operations | "Run smarter operations" → Chatbox response |
| MH-7 | Pill: Digital Brand | "Launch a digital brand" → Chatbox response |
| MH-8 | Pill: Governed AI | "Build with governed AI" → Chatbox response |
| MH-9 | Pill: Expert | "Talk to an expert" → Direct nav to /contact/ |
| MH-10 | More Toggle | Expands additional pills |

### Mobile Pill Layout

Pills wrap into a 2×3 grid on mobile (vs horizontal row on desktop):

**Row 1:** [Modern core] [Operations]
**Row 2:** [Digital brand] [Governed AI]
**Row 3:** [Expert] [More...]

Expanded pills (after "More" tap):
- "Catch fraud early"
- "Build a growth strategy with Labs"
- "Improve account opening"
- "Launch a de novo"
- "Grow deposits"

### Mobile Hero Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Rotating H1 | Same as desktop — text cycles through variants |
| Chatbox tap | Keyboard opens, chatbox expands on submit |
| Pill tap | Chatbox expands with response card |
| Submit (keyboard) | Tap "Go" or submit arrow |
| Outside tap | Collapses expanded chatbox |

---

## 5. Section 2: Logo Bar

**Figma Node:** `282:9098` / `282:9099` (LogoBarGuide)
**Position:** Y 896–1094

### Layout
- Label: "Trusted by top financial institutions"
- Horizontally auto-scrolling logo marquee
- Logos: 5+ financial institution logos (greyscale)

### Mobile Adaptations
- Same auto-scroll marquee as desktop
- Logos scaled to fit 428px viewport
- Touch does not pause marquee (continues auto-scroll)

---

## 6. Section 3: Stats Band

**Figma Node:** `282:8059` (Frame 37)
**Position:** Y 1094–1712

### Layout (Mobile)
Stats in a single-column vertical stack:


```
┌─────────────────────────────────────┐
│      #1                             │
│  in live digital brand launches     │
├─────────────────────────────────────┤
│      +$1B                           │
│  in deposit growth across           │
│  digital launch brands              │
├─────────────────────────────────────┤
│      $4.4B                          │
│  Largest community bank on a        │
│  modern core                        │
├─────────────────────────────────────┤
│      AI-native                      │
│  Governed MCP server for            │
│  core banking actions               │
└─────────────────────────────────────┘
```

### Stats Content

| Stat | Label |
|------|-------|
| #1 | in live digital brand launches |
| +$1B | in deposit growth across digital launch brands |
| $4.4B | Largest community bank on a modern core |
| AI-native | Governed MCP server for core banking actions |

### Mobile Interactions
- Numbers count up on scroll into viewport (same as desktop)
- Simplified fade-in animation (no staggered delays on mobile)

---

## 7. Section 4: Strategy Band

**Figma Node:** `282:9031` (Text)
**Position:** Y 1712–2250

### Content
- **Heading:** "Your vision is ready. Your stack is not."
- **Body:** "Institutions do not stall for lack of ambition..." (full paragraph)

### Mobile Layout
- Single column, full-width text
- Heading and body stacked vertically
- 20px horizontal padding

---

## 8. Section 5: Platform Overview

**Figma Node:** `282:9035` (Text) + link cards
**Position:** Y 2251–3985

### Layout (Mobile)
Stacked single-column cards (vs multi-column grid on desktop):

### Header Content
- **Heading:** "One connected platform"
- **Subtext:** "Technology to launch. Operations to run. Growth to scale."
- **Link:** "Explore the platform" → /platform/

### Card Stack (top to bottom)

| # | Card | Destination |
|---|------|-------------|
| 1 | Modernize core infrastructure | /platform/#core |
| 2 | Activate managed services | /managed-services/ |
| 3 | Connect data and operations | /platform/#data |
| 4 | Onboard to funded, faster | /platform/#onboarding |
| 5 | Build with Labs | /labs/ |
| 6 | Launch intelligent digital banking (with "Try the demo" CTA) | /demo/ |

### Mobile Card Behavior

| Desktop | Mobile |
|---------|--------|
| Hover → gradient animation, icon shows, text grows | Tap → navigates directly (no hover state) |
| Multiple columns | Single column stack |
| Background shader animation | Simplified static gradient |

**Mobile card tap:** Navigates directly to destination URL. No intermediate hover state.

---

## 9. Section 6: Governed AI Approach CTA

**Figma Node:** `282:8085` (GovernedAIApproach)
**Position:** Y 3985–4626


### Content
- **Heading:** "See what AI can run inside your institution."
- **Body:** "Get an inside look at the real banking work AI can do..."
- **CTA:** "Read our AI approach" → /ai/

### Mobile Layout
- Centered text stack
- Full-width CTA button
- Simplified background (no shader animation)

---

## 10. Section 7: Activation Paths

**Figma Node:** `282:8099` (ActivationPathsNew)
**Position:** Y 4615–6036

### Mobile Adaptations
- Static diagram (no animated GIF elements)
- Background cursor-grid animation disabled (static background)
- Simplified visual representation of entry points

---

## 11. Section 8: Managed Services

**Figma Node:** `282:8983` (StrategyBand)
**Position:** Y 6036–6982

### Content
- **Label:** "Run the operations"
- **Heading:** "We don't just deploy it. We run it."
- **Body:** "Nymbus Labs embeds growth experts with your team..."
- **Link:** "Learn about Managed Services" → /managed-services/
- **Image:** Operations dashboard screenshot

### Mobile Layout
- Stacked: Label → Heading → Body → Link → Image
- Image below text (not side-by-side)

---

## 12. Section 9: Nymbus Labs & Portfolio Carousel

**Figma Node:** `282:8322` (StrategyBand with portfolio)
**Position:** Y 6982–8376

### Header Content
- **Label:** "Nymbus Labs"
- **Heading:** "Experts that drive banking growth."
- **Body:** "Nymbus Labs embeds growth experts with your team..."
- **Link:** "Learn about Nymbus Labs" → /labs/

### Carousel Cards (Brand Portfolio)

| # | Brand | Tagline |
|---|-------|---------|
| 1 | ZYNLO | "Last but not least... Every ZYNLO account is awesome!" |
| 2 | CineFi | "Discover how to manage your money." |
| 3 | HUSTL | "Banking designed for the driven." |
| 4 | AlumniFi | "Adulting is hard. Banking shouldn't be." |
| 5 | Collegiate | "Your money. Right where you need it." |
| 6 | Pillur | Business banking with MSU branding |
| 7 | ROGER | "Command Your Future." |

### Mobile Carousel Behavior

| Desktop | Mobile |
|---------|--------|
| Arrow buttons (prev/next) | Swipe gesture |
| Click arrows to navigate | Swipe left/right to navigate |
| Hover → dropshadow + movement | No hover state |
| Auto-advance (optional) | Auto-advance (optional) |

**Mobile interactions:**
- Swipe left → Next card
- Swipe right → Previous card
- Dot indicators tap → Jump to card
- Cards are full-width (one visible at a time)

---

## 13. Section 10: Customer Quotes

**Figma Node:** `282:8306` (Frame 2147238549) / `282:8307` (CustomerQuotes)
**Position:** Y 9692–10487

### Content
- **Quote:** "Speed to market and cost to serve is what this business is all about..."
- **Attribution:** "Stephen Owen, CEO, First Entertainment Credit Union"
- **Logo strip:** 3 customer logos below quote


### Mobile Layout
- Large quote text (full-width, centered)
- Attribution below
- Logo strip as horizontal row
- Auto-cycles through multiple quotes

### Mobile Interactions
- Auto-advance between quotes (timed)
- Swipe to manually advance (optional)
- Logo strip updates when quote changes

---

## 14. Section 11: Governed AI Deep Section

**Figma Node:** `282:8154` (GovernedAISectionGuide)
**Position:** Y 8376–9666

### Content
- **Heading:** "Governed AI connected to real banking work..."
- **Feature 1:** "Start with answers" — Connect AI workflows to defined banking actions
- **Feature 2:** "Control access and auditability" — Approve who can initiate, review...
- **Feature 3:** "Apply AI to real work" — Use AI inside onboarding, servicing...
- **CTA:** "Build with governed AI" → /ai/

### Mobile Layout
- Features stack vertically (single column)
- Each feature: heading + body text in a card/row
- Simplified background (no flow field shader animation)

---

## 15. Section 12: Resources / Insights

**Figma Node:** `282:8280` (Frame 2085665000)
**Position:** Y 10487–11966

### Content
- **Heading:** "Powered by the industry's first secure MCP server."
- **Card 1:** Article — image + category badge + title + metadata
- **Card 2:** Whitepaper — image + category badge + title + metadata

### Mobile Layout
- Cards stack vertically (full-width)
- Each card: Image → Badge → Title → Metadata
- Tap card → Navigate to content

---

## 16. Section 13: Footer CTA

**Figma Node:** `282:8188` (FooterCTAGuide)
**Position:** Y 11966–12635

### Content
- Final conversion message
- CTA button(s) for contact/demo

### Mobile Layout
- Full-width section
- Centered CTA button(s)
- No 3D chrome blob (removed for mobile performance)

---

## 17. Hero Chatbox Mobile Flow

The hero chatbox wizard is the primary engagement mechanism. On mobile, it adapts for touch interaction and keyboard input.

### Chatbox Elements

| Ref | Element | Mobile Behavior |
|-----|---------|-----------------|
| MH-3 | Input field | Tap → keyboard opens, input focused |
| MH-4 | Submit arrow | Tap to submit query |
| MH-5–10 | Pills | Tap → chatbox expands with response |
| Response card | Expanded content | Slides down below input |
| Response CTAs | Action buttons | Tap → navigate to URL |

### Chatbox Responses by Pill (Same as Desktop)

| Pill | Response Heading | CTAs |
|------|------------------|------|
| Move to a modern core | "Build on a modern core." | Explore primary core → /solutions/primary-core/, Launch parallel core → /solutions/parallel-core/, Talk to expert → /contact/ |
| Run smarter operations | "Operate with more control and less internal lift." | Explore managed services → /managed-services/, Talk to expert → /contact/ |
| Launch a digital brand | "Launch a digital brand on connected banking infrastructure." | Launch digital brand → /solutions/parallel-core/, See Labs → /labs/, Talk to expert → /contact/ |
| Build with governed AI | "Connect AI to real banking workflows with control." | Explore governed AI → /ai/, See Nymbus MCP → /ai/#nymbus-mcp, Talk to expert → /contact/ |
| Talk to an expert | N/A (direct nav) | → /contact/ |
| Catch fraud early | "Contain fraud in one pass." | Enable Fraud Intelligence → /platform/#fraud-intelligence, Talk to expert → /contact/ |
| Growth strategy with Labs | "Turn a growth idea into a funded banking model." | Explore Labs → /labs/, Talk to expert → /contact/ |
| Improve account opening | "Move applicants from intent to funded accounts faster." | Explore account opening → /platform/#account-opening, Talk to expert → /contact/ |
| Launch a de novo | "Launch a new institution on a connected banking platform." | Explore de novo → /solutions/primary-core/#de-novo, Talk to expert → /contact/ |
| Grow deposits | "Build deposit growth around a focused strategy." | Explore Labs → /labs/, Talk to expert → /contact/ |
| Fallback (no match) | "Let us help you find the right path." | Explore platform → /platform/, Talk to expert → /contact/ |


### Mobile Chatbox Interactions

| Action | Mobile Behavior |
|--------|-----------------|
| Tap input | Keyboard opens, placeholder clears |
| Type query | Response card hides if previously expanded |
| Tap submit (or keyboard Go) | Query processed, response card expands |
| Tap pill | Chatbox expands with pill-specific response |
| Tap response CTA | Navigate to URL |
| Tap outside expanded chatbox | Collapses, resets to default |
| Switch pills while expanded | Content swaps immediately |

### Mobile Chatbox Animations

| Action | Animation | Timing |
|--------|-----------|--------|
| Expand (show response) | Slide down | 300ms ease-out |
| Collapse | Slide up | 250ms ease-in |
| Pill wrap layout change | Instant | — |
| Response content swap | Crossfade | 200ms |

---

## 18. Mobile Animations & Interactions

### Animation Adaptations for Mobile

| Desktop Animation | Mobile Adaptation |
|-------------------|-------------------|
| Scroll reveal (fade up) | Simplified fade-in (no transform) |
| Number count-up | Same — count up on scroll |
| Background grain/gradient | Keep where usable (test per device) |
| Cursor-reactive grid | Keep where usable (test per device) |
| Platform card hover | Removed — tap-through only |
| Carousel arrow navigation | Swipe gesture + auto-advance (pause on touch) |
| 3D chrome blob float | Removed for mobile |
| Flow field shader | Keep where usable (test per device) |

### Touch Targets

All interactive elements must meet minimum 44×44px touch target:

| Element | Visual Size | Touch Target |
|---------|-------------|--------------|
| Hamburger menu | 24×24px | 44×44px (with padding) |
| Chatbox submit | 36×36px | 44×44px |
| Pills | Variable | 44px height minimum |
| Card taps | Full card width | Full card area |
| Carousel dots | 8×8px | 44×44px (with padding) |
| CTA buttons | 44px+ height | Full button area |

---

## 19. User Journey Scenarios

### Scenario MHP-1: View Hero and Tap Pill

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on mobile homepage |
| **WHEN** | User taps "Launch a digital brand" pill (MH-7) |
| **THEN** | Chatbox expands showing response card with CTAs |

**Acceptance Criteria:**
1. Response slides down (300ms)
2. Heading: "Launch a digital brand on connected banking infrastructure."
3. CTAs visible: Launch digital brand, See Labs, Talk to expert
4. Other pills remain visible but inactive until response dismissed

---

### Scenario MHP-2: Submit Query via Chatbox

| Step | Detail |
|------|--------|
| **GIVEN** | User is on mobile homepage |
| **WHEN** | User taps chatbox input (MH-3), types "core replacement", taps submit (MH-4) |
| **THEN** | Chatbox processes query and shows matched response |

**Acceptance Criteria:**
1. Keyboard opens on input tap
2. Submit button triggers processing
3. Matched keyword shows relevant response
4. Unmatched query shows fallback response

---

### Scenario MHP-3: Navigate from Chatbox CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User has chatbox expanded with response |
| **WHEN** | User taps "Explore managed services" CTA |
| **THEN** | User navigates to /managed-services/ |

**Acceptance Criteria:**
1. CTA shows tap feedback
2. Navigation to /managed-services/
3. Page loads at top

---

### Scenario MHP-4: Tap Platform Card

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Platform Overview section |
| **WHEN** | User taps "Modernize core infrastructure" card |
| **THEN** | User navigates to /platform/#core |

**Acceptance Criteria:**
1. Card shows tap feedback
2. Navigation to /platform/ with scroll to #core anchor
3. No hover state animation (direct navigation)

---


### Scenario MHP-5: Swipe Portfolio Carousel

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Nymbus Labs section |
| **WHEN** | User swipes left on the brand carousel |
| **THEN** | Carousel advances to next brand card |

**Acceptance Criteria:**
1. Swipe gesture detected
2. Carousel animates to next card (300ms ease)
3. Dot indicator updates to reflect current card
4. Card snaps into place (no partial views)

---

### Scenario MHP-6: Tap Carousel Dot Indicator

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing brand carousel |
| **WHEN** | User taps the 4th dot indicator |
| **THEN** | Carousel jumps to 4th brand (AlumniFi) |

**Acceptance Criteria:**
1. Dot tap triggers navigation
2. Carousel animates to selected card
3. Active dot updates styling

---

### Scenario MHP-7: View Stats Count-Up

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls down the homepage |
| **WHEN** | Stats Band section enters viewport |
| **THEN** | Stat numbers animate counting up |

**Acceptance Criteria:**
1. Animation triggers when >50% of section visible
2. "#1", "+$1B", "$4.4B" count up from 0
3. "AI-native" fades in (no count animation)
4. Animation completes within 1.5 seconds

---

### Scenario MHP-8: Tap "Talk to an Expert" Pill

| Step | Detail |
|------|--------|
| **GIVEN** | User is on mobile homepage |
| **WHEN** | User taps "Talk to an expert" pill (MH-9) |
| **THEN** | User navigates directly to /contact/ (no chatbox response) |

**Acceptance Criteria:**
1. Tap shows feedback
2. Direct navigation to /contact/
3. No chatbox expansion (differs from other pills)

---

### Scenario MHP-9: Scroll Through Full Page

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on mobile homepage |
| **WHEN** | User scrolls from top to bottom |
| **THEN** | All sections load and animate into view |

**Acceptance Criteria:**
1. Sections fade in as they enter viewport
2. No janky scroll (smooth 60fps)
3. Images lazy-load as needed
4. Footer appears at bottom
5. Mobile header remains fixed at top

---

### Scenario MHP-10: Tap "Explore the platform" Link

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing Platform Overview section |
| **WHEN** | User taps "Explore the platform" link |
| **THEN** | User navigates to /platform/ |

**Acceptance Criteria:**
1. Link shows tap feedback
2. Navigation to /platform/
3. Page loads at top

---

### Scenario MHP-11: Tap Resource Card

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Resources section |
| **WHEN** | User taps an Article card |
| **THEN** | User navigates to the article detail page |

**Acceptance Criteria:**
1. Card shows tap feedback
2. Navigation to article URL
3. Article page loads

---

### Scenario MHP-12: Collapse Chatbox by Outside Tap

| Step | Detail |
|------|--------|
| **GIVEN** | User has chatbox expanded with response |
| **WHEN** | User taps outside the chatbox area (e.g., on page background) |
| **THEN** | Chatbox collapses and resets to default state |

**Acceptance Criteria:**
1. Collapse animation (250ms)
2. Response card hidden
3. Input returns to placeholder state
4. Pills return to default styling

---

## 20. Open Questions

### Inherited from Desktop (Status)

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Live demo visual | ✅ RESOLVED: Links to Nymbus dashboard (link coming end of August 2026). |
| 2 | Multiple contact pages | ✅ RESOLVED: /contact/ is the only one in Phase 1. |
| 3 | Platform card graphics | 🔄 PENDING: Need graphics for mobile cards. |
| 4 | Hero images | 🔄 PENDING: "need new images" (Sarah). |

### Mobile-Specific (Resolved)

| # | Question | Resolution |
|---|----------|-----------|
| 5 | 3D chrome blob | ✅ RESOLVED: **Remove for performance**. |
| 6 | Background shader animations | ✅ RESOLVED: **Keep if possible** — test on target devices. Fall back to static gradient if performance issues. |
| 7 | Carousel auto-advance | ✅ RESOLVED: **Yes, with pause on touch**. |
| 8 | Stats grid layout | ✅ RESOLVED: **Single column stack** (not 2×2 grid). |
| 9 | Resource card count | ✅ RESOLVED: **Mobile shows 2 cards** (not 3). |
| 10 | Activation Paths complexity | ✅ RESOLVED: **Simplify to static diagram** on mobile. |

---

## Complete URL Map (Mobile Homepage)

| Section | Element | Destination |
|---------|---------|-------------|
| Hero | Chatbox CTA: Explore primary core | /solutions/primary-core/ |
| Hero | Chatbox CTA: Launch parallel core | /solutions/parallel-core/ |
| Hero | Chatbox CTA: Explore managed services | /managed-services/ |
| Hero | Chatbox CTA: Launch digital brand | /solutions/parallel-core/ |
| Hero | Chatbox CTA: See Labs | /labs/ |
| Hero | Chatbox CTA: Explore governed AI | /ai/ |
| Hero | Chatbox CTA: See Nymbus MCP | /ai/#nymbus-mcp |
| Hero | Chatbox CTA: Fraud Intelligence | /platform/#fraud-intelligence |
| Hero | Chatbox CTA: Account opening | /platform/#account-opening |
| Hero | Chatbox CTA: De novo launch | /solutions/primary-core/#de-novo |
| Hero | Chatbox CTA: Explore platform | /platform/ |
| Hero | Chatbox CTA: Talk to expert | /contact/ |
| Platform | Explore the platform link | /platform/ |
| Platform | Card: Modernize core | /platform/#core |
| Platform | Card: Managed services | /managed-services/ |
| Platform | Card: Connect data | /platform/#data |
| Platform | Card: Onboard faster | /platform/#onboarding |
| Platform | Card: Build with Labs | /labs/ |
| Platform | Card: Digital banking demo | /demo/ |
| Governed AI CTA | Read our AI approach | /ai/ |
| Managed Services | Learn about Managed Services | /managed-services/ |
| Labs | Learn about Nymbus Labs | /labs/ |
| Governed AI Deep | Build with governed AI | /ai/ |
| Footer CTA | Contact/Demo CTAs | /contact/ or /demo/ |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 11, 2026 | Initial mobile homepage document | Kiro |
