# Homepage User Flow & Journey

**Source:** Figma Dev Hand-off — Homepage (Node 0:1)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=0-1  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Global Animations (Sarah's Notes)](#2-global-animations-sarahs-notes)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Logo Bar](#4-section-2-logo-bar)
5. [Section 3: Stats Band](#5-section-3-stats-band)
6. [Section 4: Strategy Band](#6-section-4-strategy-band)
7. [Section 5: Platform Overview (Cards)](#7-section-5-platform-overview-cards)
8. [Section 6: Governed AI Approach CTA](#8-section-6-governed-ai-approach-cta)
9. [Section 7: Activation Paths](#9-section-7-activation-paths)
10. [Section 8: Managed Services / Operations](#10-section-8-managed-services--operations)
11. [Section 9: Nymbus Labs & Portfolio Carousel](#11-section-9-nymbus-labs--portfolio-carousel)
12. [Section 10: Customer Quotes Carousel](#12-section-10-customer-quotes-carousel)
13. [Section 11: Governed AI Deep Section](#13-section-11-governed-ai-deep-section)
14. [Section 12: Resources / Insights](#14-section-12-resources--insights)
15. [Section 13: Footer CTA](#15-section-13-footer-cta)
16. [Hero Chatbox User Flow (Detailed)](#16-hero-chatbox-user-flow-detailed)

---

## 1. Page Overview & Scroll Journey

The homepage is a single continuous scroll page (1512px wide, ~10124px tall) structured as a vertical narrative guiding prospects from awareness to action.

**Scroll Order (top to bottom):**

| # | Section | Y Position | Purpose |
|---|---------|-----------|---------|
| 1 | Navigation (dark) | 0 | Global nav, persistent |
| 2 | Hero + Chatbox | 0–847 | Value proposition + interactive query |
| 3 | Logo Bar | 849–1068 | Trust signals |
| 4 | Stats Band | 1049–1429 | Proof points |
| 5 | Strategy Band | 1439–1819 | Problem framing |
| 6 | Platform Overview (Cards) | 1818–3570 | Product capabilities |
| 7 | Governed AI Approach CTA | 3572–3904 | AI positioning |
| 8 | Activation Paths | 3904–4890 | Entry points |
| 9 | Managed Services | 4891–5464 | Operations offering |
| 10 | Nymbus Labs + Carousel | 5464–6620 | Growth experts + brand showcase |
| 11 | Customer Quotes | 7312–8009 | Social proof |
| 12 | Governed AI Section | 6626–7311 | AI detail + features |
| 13 | Resources / Insights | 8012–8879 | Content hub |
| 14 | Footer CTA | 8877–9477 | Final conversion |
| 15 | Footer | 9477+ | Navigation + legal |

---

## 2. Global Animations (Sarah's Notes)

These apply across the entire homepage:

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Scroll reveal | All components fade in up with ease on scroll | Sarah comment on 0:1 |
| Number count-up | Stats count up on scroll | https://reactbits.dev/text-animations/count-up |
| Background grain | Grain texture on top of moving gradient | https://reactbits.dev/backgrounds/grainient |
| Overall reference | Animation/functionality reference | https://rebrand-kohl.vercel.app/ |
| Button hover | Arrow grows with ease on hover | Sarah comment on 22:204 |
| Button style | Specular button style (black) | https://reactbits.dev/components/specular-button |

---

## 3. Section 1: Hero

**Figma Node:** `6:2228` (Homepage frame, contains hero content)

### Layout
- Full-width dark gradient background with organic elliptical shapes
- 3D chrome blob shape in top-right corner
- Centered content container (874px wide)

### Content Stack (top to bottom)

1. **Rotating H1 Title**
   - Text: "The Next-Generation Banking Platform"
   - Animation: Rotating/cycling text effect
   - Reference: https://www.framer.com/community/marketplace/templates/nyro/
   - Sarah's note: "Rotating title"

2. **Subtitle**
   - Text: "Powered by the industry's first secure MCP server."

3. **Chatbox / Input Field**
   - Rounded input with rotating placeholder text
   - Default placeholder: "What do you want to grow?"
   - Submit button (circular arrow icon)
   - Full chatbox wizard interaction (see [Section 16](#16-hero-chatbox-user-flow-detailed))

4. **Pill Buttons (Category Navigation)**
   - Row 1: "Move to a modern core" | "Run smarter operations" | "Launch a digital brand" | "Build with governed AI"
   - Row 2 (collapsed by default): "Talk to an expert" | "Catch fraud early" | "Build a growth strategy with Labs" | "Improve account opening" | "Launch a de novo" | "Grow deposits"

### Interactions & Animations

| Trigger | Behavior | Sarah's Note |
|---------|----------|--------------|
| Page load | Rotating H1 cycles through variants | "Rotating title" reference |
| Scroll in | Fade in up with ease | Global animation |
| Chatbox click | Expands with response card (400ms ease-in-out) | — |
| Pill click | Expands chatbox with relevant content | — |
| Chrome blob | Ambient floating animation | — |

### Sarah's Additional Notes on Hero
- "animation/functionality: https://rebrand-kohl.vercel.app/"

---

## 4. Section 2: Logo Bar

**Figma Node:** `6:3617` (LogoBarGuide)

### Layout
- Label: "Trusted by top financial institutions"
- Horizontally scrolling/marquee logo strip
- Two identical containers for infinite scroll loop

### Content
- 5+ financial institution logos (greyscale)
- Logos auto-scroll in continuous marquee

### Interactions & Animations

| Trigger | Behavior | Sarah's Note |
|---------|----------|--------------|
| Default | Continuous horizontal marquee | — |
| Customer quote active | Logo changes to color when presenting customer testimony | Sarah comment on 6:2228 |
| New logo added | PNG added to folder auto-displays in carousel | Sarah comment on 0:1 |
| Animation reference | Logo loop | https://reactbits.dev/animations/logo-loop |

---

## 5. Section 3: Stats Band

**Figma Node:** `6:2297` (Frame 37)

### Layout
- 4 stat columns separated by vertical lines
- Each stat: large number + descriptive text

### Content

| Stat | Label |
|------|-------|
| #1 | in live digital brand launches |
| +$1B | in deposit growth across digital launch brands |
| $4.4B | Largest community bank on a modern core |
| AI-native | Governed MCP server for core banking actions |

### Interactions & Animations

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Scroll into view | Numbers count up animation | https://reactbits.dev/text-animations/count-up |
| Fade in | Each stat fades in up with ease | Global scroll animation |

---

## 6. Section 4: Strategy Band

**Figma Node:** `6:2287` (StrategyBand)

### Layout
- Two-column text layout
- Left: Bold heading
- Right: Two paragraphs

### Content
- **Heading:** "Your vision is ready. Your stack is not."
- **Body Left:** "Institutions do not stall for lack of ambition..."
- **Body Right:** "Nymbus is banking built to move with you, so the platform never limits what you can offer."

### Interactions
- Fade in up on scroll (global animation)

---

## 7. Section 5: Platform Overview (Cards)

**Figma Nodes:** `6:3677` (PlatformOverviewNew), `6:4070` (PLATFORM HOVER), `6:4151` (PLATFORM HOVER STATE)

### Layout
- Section heading: "One connected platform"
- Subtext: "Technology to launch. Operations to run. Growth to scale."
- Link: "Explore the platform" → /platform/
- Grid of clickable cards with hover states

### Card Grid

**Row 1 (2 cards, equal width):**

| Card | Title | Hover Graphic | Link |
|------|-------|---------------|------|
| Card 1 | Modernize core infrastructure | Abstract geometric shapes (ellipses, rectangles) | /platform/#core |
| Card 2 | Activate managed services | Organic gradient blobs | /managed-services/ |

**Row 2 (3 cards, equal width):**

| Card | Title | Hover Graphic | Link |
|------|-------|---------------|------|
| Card 3 | Connect data and operations | Geometric data visualization | /platform/#data |
| Card 4 | Onboard to funded, faster | Gradient wave shapes | /platform/#onboarding |
| Card 5 | Build with Labs | Gradient with mask overlay | /labs/ |

**Row 3 (full-width card):**

| Card | Title | Subtitle | Link |
|------|-------|----------|------|
| Card 6 | Launch intelligent digital banking | "Try the demo" | /demo/ |

### Card Hover States (Sarah's Key Comment)

> "On hover the card turns to color: gradient moves, icon shows, arrow show, text moves down with ease and gets bigger"

| State | Visual |
|-------|--------|
| Default | Dark background, title text only, corner arrow icon |
| Hover | Background turns to color gradient (animated movement), icon becomes visible, arrow grows, title text shifts down with ease and increases size |

**Hover Animation Details:**
- Background: Gradient animates/moves within the card
- Grain overlay: https://reactbits.dev/backgrounds/grainient ("grain on top of moving gradient")
- Icon: Fades in
- Arrow (top-right): Grows with ease
- Title: Translates down, scales up
- Transition: ease timing

### Interactions

| Trigger | Behavior |
|---------|----------|
| Hover | Card transforms per hover state spec above |
| Click | Navigates to linked page |
| Scroll in | Cards fade in up with ease (global) |

---

## 8. Section 6: Governed AI Approach CTA

**Figma Node:** `6:2326` (GovernedAIApproach)

### Layout
- Banner-style section
- Left: Heading + paragraph
- Right: CTA link button

### Content
- **Heading:** "See what AI can run inside your institution."
- **Body:** "Get an inside look at the real banking work AI can do..."
- **CTA:** "Read our AI approach" → /ai/

### Interactions
- Fade in up on scroll
- CTA arrow grows on hover

---

## 9. Section 7: Activation Paths

**Figma Node:** `6:2341` (ActivationPathsNew)

### Layout
- Visual diagram/illustration of entry points into the platform
- Animated flow field or particle effect

### Sarah's Notes
- Background animation: https://reactbits.dev/animations/cursor-grid
- Color: #42526E
- "Flex are gifs that move in on scroll"

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | GIF elements animate in |
| Background | Cursor-reactive grid animation |

---

## 10. Section 8: Managed Services / Operations

**Figma Node:** `6:2882` (Section)

### Layout
- Two-column: text left, illustration right
- Left: label + heading + body + link
- Right: Network/node diagram with icon rows

### Content
- **Label:** "Run the operations"
- **Heading:** "We don't just deploy it. We run it."
- **Body:** "Nymbus Labs embeds growth experts with your team to architect, launch, and scale..."
- **Link:** "Learn about Managed Services" → /managed-services/

### Illustration Elements
- Connected node diagram with service icons:
  - Headset (Support)
  - User-plus (Onboarding)
  - Settings (Operations)
  - Alert-triangle (Fraud)
  - Briefcase (Account Management)
  - Shield-check (Compliance)

### Interactions
- Fade in up on scroll
- Illustration nodes may animate connections on scroll

---

## 11. Section 9: Nymbus Labs & Portfolio Carousel

**Figma Nodes:** `6:2943` (Section), `6:2970` / `12:4323` (Portfolio)

### Layout
- Section header (centered)
- Previous/Next navigation arrows
- Horizontal scrolling card carousel
- Dot indicators (6 brands)

### Header Content
- **Label:** "Nymbus Labs"
- **Heading:** "Experts that drive banking growth."
- **Body:** "Nymbus Labs embeds growth experts with your team to architect, launch, and scale your digital brand."
- **Link:** "Learn about Nymbus Labs" → /labs/

### Carousel Cards (Brand Portfolio)

| # | Brand | Card Visual | Tagline |
|---|-------|------------|---------|
| 1 | ZYNLO | Debit card + app UI mockup | "Last but not least... Every ZYNLO account is awesome!" |
| 2 | CineFi | Debit card + movie-themed imagery | "Discover how to manage your money." |
| 3 | HUSTL | Debit card + entrepreneur imagery | "Banking designed for the driven." |
| 4 | AlumniFi | Debit card + graduation imagery | "Adulting is hard. Banking shouldn't be." |
| 5 | Collegiate | Retro-styled student banking | "Your money. Right where you need it." |
| 6 | Pillur | MSU-branded business banking | [Business banking with cashflow chart] |
| 7 | ROGER | Future/command themed | "Command Your Future." |

### Carousel Interactions

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Click Previous arrow | Scroll to previous card | — |
| Click Next arrow | Scroll to next card | — |
| Click dot indicator | Jump to corresponding brand | — |
| Auto-scroll | Cards may auto-advance (TBD) | — |
| Swipe (mobile) | Navigate between cards | — |
| Card enter viewport | Fade in animation | Global |
| Carousel style | Lifted carousel effect | https://www.framer.com/community/marketplace/components/lifted-carousel/ |
| Card hover | Drop shadow and ease of movement | Sarah: "add dropshadow and ease of movement on hover" |

### Sarah's Notes on Carousel
- "https://www.framer.com/community/marketplace/components/lifted-carousel/"
- "add dropshadow and ease of movement on hover" (from rebrand-kohl reference)

---

## 12. Section 10: Customer Quotes Carousel

**Figma Nodes:** `6:3798` (CustomerQuotes), `6:4278` (CustomerQuotes 2), `6:4295` (CustomerQuotes 3)

### Layout
- Large centered quote text
- Attribution line below
- Logo strip of quoted companies
- Multiple quote variants (carousel between quotes)

### Content (Quote 1 shown)
- **Quote:** "Speed to market and cost to serve is what this business is all about..."
- **Attribution:** "Stephen Owen, CEO, First Entertainment Credit Union"
- **Company logos:** 4 institutional logos displayed below

### Interactions

| Trigger | Behavior | Sarah's Note |
|---------|----------|--------------|
| Auto-advance | Cycles through quotes | — |
| Quote change | Logo bar updates to highlight active company | "Logo changes to color when presenting customer testimony" |
| Scroll in | Fade in up with ease | Global |
| Transition | Smooth crossfade between quotes | — |

### Quote Variants (from Figma)
- CustomerQuotes (original) — wider attribution text
- CustomerQuotes 2 — condensed layout
- CustomerQuotes 3 — full-width quote text

---

## 13. Section 11: Governed AI Deep Section

**Figma Node:** `6:3768` (GovernedAISectionGuide)

### Layout
- Flow field shader grey background (animated)
- Large heading
- 3-column feature grid
- CTA button

### Content
- **Heading:** "Governed AI connected to real banking work. Deploy..."
- **Feature 1:** "Start with answers" — Connect AI workflows to defined banking actions...
- **Feature 2:** "Control access and auditability" — Approve who can initiate, review...
- **Feature 3:** "Apply AI to real work" — Use AI inside onboarding, servicing, operations...
- **CTA:** "Build with governed AI" → /ai/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Background | Animated flow field shader (grey) |
| Scroll in | Text fades in up |
| CTA hover | Button hover animation |

---

## 14. Section 12: Resources / Insights

**Figma Node:** `6:3831` (ResourcesSection)

### Layout
- Section heading
- 3-card horizontal grid

### Content
- **Heading:** "Get the latest insights on financial innovation."
- **Card 1:** Webinar — "The Next-Generation Banking Platform"
- **Card 2:** Article — "The Next-Generation Banking Platform"
- **Card 3:** Case Study — "The Next-Generation Banking Platform"

Each card contains:
- Image/thumbnail area (250px height)
- Category badge (Webinar / Article / Case Study)
- Title
- Metadata line (author + date)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Card hover | Subtle lift/shadow |
| Card click | Navigates to content |
| Scroll in | Cards fade in up |

### Sarah's Note
- "This should only show content from the insights hub that is tagged 'Managed Services'" (comment on node 17:5348, may apply to sub-page variant)

---

## 15. Section 13: Footer CTA

**Figma Node:** `6:3821` (FooterCTAGuide)

### Layout
- Full-width section before footer
- 3D chrome blob in bottom-right
- Conversion-focused messaging

### Interactions
- Final call to action before footer navigation
- CTA button with specular/glass effect

---

## 16. Hero Chatbox User Flow (Detailed)

*Source: User Journeys-Chatbox.csv + Figma CHAT WIZARD frame (node 61:957)*

### Overview

The homepage hero contains an interactive chatbox wizard that serves as the primary engagement mechanism. Users can type queries or click pill buttons to explore banking solutions.

### Element Reference

| ID | Element | Description |
|----|---------|-------------|
| 2A | Input Box | Text input field for typing queries |
| 2B | Submit Arrow | Circular button to submit typed query |
| 2C | Pill | "Move to a modern core" |
| 2D | Pill | "Run smarter operations" |
| 2E | Pill | "Launch a digital brand" |
| 2F | Pill | "Build with governed AI" |
| 2G | Button | More/Less toggle |
| 2H | Pill (black) | "Talk to an expert" — direct nav to /contact/ |
| 2I | Pill (expanded) | "Catch fraud early" |
| 2J | Pill (expanded) | "Build a growth strategy with Labs" |
| 2K | Pill (expanded) | "Improve account opening" |
| 2L | Pill (expanded) | "Launch a de novo" |
| 2M | Pill (expanded) | "Grow deposits" |
| 2N | Response Card | Expanded content area (heading + body) |
| 2O | Response CTAs | Action buttons within response card |

### Flow Diagram

```
[User arrives on Homepage]
        |
        v
[Hero Section - Chatbox Visible]
        |
        +---> [Types query in 2A] ---> [Submits via 2B or Enter]
        |                                       |
        |                               [Keyword matched?]
        |                               /              \
        |                           YES                 NO
        |                            |                   |
        |                    [Show matched           [Show fallback
        |                     response 2N]           response 2N]
        |                            |                   |
        |                    [User clicks         [CTAs: Explore platform
        |                     CTA 2O]              or Talk to expert]
        |                            |
        |                    [Navigate to URL]
        |
        +---> [Clicks pill 2C-2F] ---> [Chatbox expands with response]
        |                                       |
        |                               [User clicks CTA 2O]
        |                                       |
        |                               [Navigate to URL]
        |
        +---> [Clicks More 2G] ---> [Expanded pills 2I-2M appear]
        |                                       |
        |                               [Clicks expanded pill]
        |                                       |
        |                               [Chatbox expands with response]
        |
        +---> [Clicks Talk to Expert 2H] ---> [Direct nav to /contact/]
        |
        +---> [Clicks outside chatbox] ---> [Collapses, resets to default]
```

### Chatbox Responses by Pill

| Pill | Heading | CTAs & URLs |
|------|---------|-------------|
| 2C: Move to a modern core | "Build on a modern core." | Explore primary core → /solutions/primary-core/ | Launch a parallel core → /solutions/parallel-core/ | Talk to an expert → /contact/ |
| 2D: Run smarter operations | "Operate with more control and less internal lift." | Explore managed services → /managed-services/ | Talk to an expert → /contact/ |
| 2E: Launch a digital brand | "Launch a digital brand on connected banking infrastructure." | Launch a digital brand → /solutions/parallel-core/ | See how Labs supports launch → /labs/ | Talk to an expert → /contact/ |
| 2F: Build with governed AI | "Connect AI to real banking workflows with control." | Explore governed AI → /ai/ | See Nymbus MCP → /ai/#nymbus-mcp | Talk to an expert → /contact/ |
| 2H: Talk to an expert | N/A (direct navigation) | → /contact/ |
| 2I: Catch fraud early | "Contain fraud in one pass." | Enable Fraud Intelligence → /platform/#fraud-intelligence | Talk to an expert → /contact/ |
| 2J: Growth strategy with Labs | "Turn a growth idea into a funded banking model." | Explore Labs → /labs/ | Talk to an expert → /contact/ |
| 2K: Improve account opening | "Move applicants from intent to funded accounts faster." | Explore account opening → /platform/#account-opening | Talk to an expert → /contact/ |
| 2L: Launch a de novo | "Launch a new institution on a connected banking platform." | Explore de novo launch → /solutions/primary-core/#de-novo | Explore primary core → /solutions/primary-core/ | Talk to an expert → /contact/ |
| 2M: Grow deposits | "Build deposit growth around a focused strategy." | Explore Labs → /labs/ | Talk to an expert → /contact/ |
| Fallback | "Let us help you find the right path." | Explore the platform → /platform/ | Talk to an expert → /contact/ |

### Chatbox Animation Specs

| Action | Animation | Timing |
|--------|-----------|--------|
| Expand (show response) | Slides down with ease | 400ms ease-in-out |
| Collapse (dismiss) | Slides up | 350ms |
| More pills appear | fadeSlideIn | 300ms |
| Pill-to-pill switch | Content swap (no collapse) | Immediate |
| Input typing while expanded | Response hides, height adjusts | Smooth |
| Placeholder text | Rotates between prompts | — |

### Chatbox Edge Cases

| Scenario | Behavior |
|----------|----------|
| Empty submit | Shows fallback response |
| Click outside while expanded | Collapses and resets |
| Switch pills while expanded | Content updates immediately, no collapse |
| Type while expanded | Response clears on first keystroke |
| Mobile (< 768px) | Pills wrap, touch targets min 44px, no overflow |
| Keyboard (Enter) | Same as submit button click |

---

## Appendix: Sarah's Full Comments on Homepage

Organized by topic for developer reference:

### Animations & Interactions
| Area | Comment | Reference URL |
|------|---------|---------------|
| Global | On scroll all components fade in up with ease | — |
| Stats | Numbers count up on scroll | https://reactbits.dev/text-animations/count-up |
| Hero H1 | Rotating title | https://www.framer.com/community/marketplace/templates/nyro/ |
| Buttons | on hover: arrow grows with ease | — |
| Buttons | Specular button style (black) | https://reactbits.dev/components/specular-button |
| Buttons | slide change of fill animation | https://www.untitledui.com/react/components/buttons |
| Buttons | Liquid glass button | https://21st.dev/@reshaped/components/reshaped-toggle-button/ |
| Nav dropdowns | Main nav drop down animation | https://rebrand-kohl.vercel.app/ |
| Platform cards | On hover: card turns to color, gradient moves, icon shows, arrow shows, text moves down with ease and gets bigger | — |
| Platform cards | grain on top of moving gradient | https://reactbits.dev/backgrounds/grainient |
| Carousel | Lifted carousel effect | https://www.framer.com/community/marketplace/components/lifted-carousel/ |
| Carousel/cards | add dropshadow and ease of movement on hover | https://rebrand-kohl.vercel.app/ |
| Logo bar | Logo changes to color when presenting customer testimony | — |
| Logo bar | New logo carousel - PNG added to folder auto-displays | — |
| Logo bar | Logo loop animation | https://reactbits.dev/animations/logo-loop |
| Hero GIFs | Flex are gifs that move in on scroll | — |
| Activation paths BG | Cursor-reactive grid animation, color: #42526E | https://reactbits.dev/animations/cursor-grid |
| General reference | Overall animation/functionality model | https://rebrand-kohl.vercel.app/ |

### Content / Design Notes
| Area | Comment |
|------|---------|
| Hero | "need new images" |
| Hero | "Live demo: @Mike do we have an idea how this will look yet?" |
| Platform page | "@Santiago based on your product page illustrations, can you develop/create 2 for this section?" |
| Multiple contacts | "@Mike pointing out we have multiple contact pages, which one is used where and when?" |
| Resources | "This should only show content from the insights hub that is tagged 'Managed Services'" |

### Component References
| Component | URL |
|-----------|-----|
| Masonry layout | https://reactbits.dev/components/masonry |
| Fluid glass | https://reactbits.dev/components/fluid-glass |
| Accordion gallery | https://reactbits.dev/components/accordion-gallery |
| Ripple distortion | https://reactbits.dev/animations/ripple-distortion |

---

## Open Questions (from Figma comments)

## Open Questions (from Figma comments)

1. ~~**Live demo visual**~~ — ✅ RESOLVED: Links to Nymbus dashboard that Ed's team is putting together (link TBD — coming end of August 2026)
2. ~~**Multiple contact pages**~~ — ✅ RESOLVED: /contact/ is the only one used in Phase 1. All contact CTAs point there.
3. ~~**Menu reappearance**~~ — ✅ RESOLVED: Ignore — not applicable.
4. **Platform card graphics** — "do we have any existing graphics from pages we can drop in here for the graphic in the black squares?" (Mike → Sarah/Santiago) — STILL OPEN
5. **Hero images** — "need new images" (Sarah) — STILL OPEN