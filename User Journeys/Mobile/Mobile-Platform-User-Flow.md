# Mobile Platform Page User Flow & Journey

**Source:** Figma Dev Hand-off — Platform - Mobile (Node 281:4889)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=281-4889
**Last Updated:** August 19, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Mobile Considerations](#1-page-overview--mobile-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Mobile Navigation Header](#3-mobile-navigation-header)
4. [Section 1: Hero](#4-section-1-hero)
5. [Section 2: Value Pillars](#5-section-2-value-pillars)
6. [Section 3: Platform Architecture](#6-section-3-platform-architecture)
7. [Section 4: Managed Services Overview](#7-section-4-managed-services-overview)
8. [Section 5: Banking Technology Cards](#8-section-5-banking-technology-cards)
9. [Section 6: Intelligence Section](#9-section-6-intelligence-section)
10. [Section 7: Customer Quote](#10-section-7-customer-quote)
11. [Section 8: Footer CTA](#11-section-8-footer-cta)
12. [Section 9: Footer](#12-section-9-footer)
13. [Mobile Animations & Interactions](#13-mobile-animations--interactions)
14. [User Journey Scenarios](#14-user-journey-scenarios)
15. [Complete URL Map](#15-complete-url-map)
16. [Open Questions](#16-open-questions)

---

## 1. Page Overview & Mobile Considerations

The Platform page showcases the complete Nymbus banking platform. The mobile version adapts the desktop's 1512px wide, ~10151px tall canvas into a 428px wide, ~13359px tall single-column layout optimized for touch.

**Target URL:** /platform/
**Desktop reference node:** `17:7173`

The page narrative: unified platform value prop → three value pillars → architecture diagram showing Banking Technology + Managed Services → product cards → intelligence/AI capabilities → social proof → final CTA.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation |
|-----------------|-------------------|
| Desktop dark nav | Mobile hamburger nav (302:8017) |
| 3-column value pillars | Single-column stacked cards |
| Wide architecture diagram (1024px) | Scaled diagram (432px) with vertical pillars |
| Side-by-side product cards | Stacked: text above, screenshots below |
| 2-column intelligence features | Single-column: icon + text + illustration |
| Horizontal quote carousel | Single centered quote |
| Hover states on cards | Tap interactions only |

---

## 2. Page Structure & Scroll Journey

**Figma Node:** `281:4889` (Platform - Mobile)
**Dimensions:** 428 × 13359px


### Scroll Order (top to bottom)

| # | Section | Figma Node | Y Position | Height | Purpose |
|---|---------|------------|-----------|--------|---------|
| 1 | Navigation Header | `302:8017` | 0 | 87 | Sticky hamburger nav |
| 2 | Hero BG + Content | `281:4974` / `281:5047` | 0–675 | 675 | Platform value proposition |
| 3 | Value Pillars | `281:5057` | 825 | 1120 | Key differentiators (stacked) |
| 4 | Platform Architecture | `281:4890` | 1945 | 1205 | Visual architecture diagram |
| 5 | Managed Services Overview | `281:5295` | 3150 | 4345 | Product cards section |
| 6 | Governed AI Section | `281:5094` | 7395 | 3330 | Intelligence capabilities |
| 7 | Customer Quote | `281:5011` | 10725 | 969 | Social proof |
| 8 | Footer CTA | `281:4992` | 11684 | 600 | Final conversion |
| 9 | Footer | `281:6001` | 12284 | 1075 | Link grid + legal |

---

## 3. Mobile Navigation Header

**Figma Node:** `302:8017` (Nav Mobile)
**Dimensions:** 428 × 87px

See [Mobile-Header-Navigation-User-Flow.md](./Mobile-Header-Navigation-User-Flow.md) for complete documentation.

**Summary:**
- Fixed header, Nymbus logo left, hamburger icon right
- Hamburger opens full-screen menu overlay with accordion sections
- Sticky footer CTAs in menu: "Try demo" + "Let's move"
- On this page: uses dark nav variant (hero has dark gradient background)

---

## 4. Section 1: Hero

**Figma Node:** `281:4974` (BG) + `281:5047` (content)
**Position:** Y 0–675
**Dimensions:** 428 × 675px (content area 394 × 488px)

### Layout (Mobile)

```
┌────────────────────────────────────┐
│ [Nav — hamburger]                  │
├────────────────────────────────────┤
│                                    │
│   [Organic gradient BG with        │
│    blurred ellipses + grain]       │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  modern banking platform     │  │  ← Eyebrow pill badge
│  └──────────────────────────────┘  │
│                                    │
│  The Next-Generation               │  ← H1, 56px display
│  Banking Platform                  │
│                                    │
│  Powered by the industry's first   │  ← Body, 16px
│  secure MCP server.                │
│                                    │
│  ┌────────────────────────────┐    │
│  │       [CTA Button]         │    │  ← Primary button
│  └────────────────────────────┘    │
│                                    │
└────────────────────────────────────┘
```

### Visual Background Elements

| Element | Description |
|---------|-------------|
| BG Frame | `281:4974` — Dark gradient background with organic shapes |
| Ellipses | Multiple overlapping ellipses with blur/opacity (68–70) |
| Rectangles | Gradient-filled shapes (348–353) |
| Grain overlay | `281:4984` — Noise texture layer |

### Content Elements

| Ref | Element | Content |
|-----|---------|---------|
| MPL-1 | Eyebrow | "modern banking platform" (pill badge) |
| MPL-2 | H1 | "The Next-Generation Banking Platform" |
| MPL-3 | Body | "Powered by the industry's first secure MCP server." |
| MPL-4 | Button | CTA button (281:5056) → /contact/ |

### Mobile Hero Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Page load | Content fades in up with ease |
| Scroll | Hero fades as Value Pillars enter |
| CTA tap | Navigate to /contact/ |

---

## 5. Section 2: Value Pillars

**Figma Node:** `281:5057` (Container)
**Position:** Y 825–1945
**Dimensions:** 428 × 1120px

### Layout (Mobile)

Desktop shows 3 columns side-by-side; mobile stacks them vertically.

```
┌────────────────────────────────────┐
│                                    │
│  [Icon — 48px]                     │
│                                    │
│  Real-time where it matters.       │  ← H3
│                                    │
│  Live transaction processing,      │  ← Body
│  event-driven services, and        │
│  modern APIs power banking that    │
│  responds in the moment.           │
│                                    │
├────────────────────────────────────┤
│                                    │
│  [Icon — 47px]                     │
│                                    │
│  API-first by design.              │  ← H3
│                                    │
│  Modern APIs connect Core,         │  ← Body
│  Digital, Onboarding, payments,    │
│  and partner ecosystems, for       │
│  seamless integrations.            │
│                                    │
├────────────────────────────────────┤
│                                    │
│  [Icon — 53px]                     │
│                                    │
│  Deployed your way.                │  ← H3
│                                    │
│  Run Nymbus as your primary        │  ← Body
│  banking platform, or modernize    │
│  alongside the system you run      │
│  today, on your timeline.          │
│                                    │
└────────────────────────────────────┘
```

### Content

| Pillar | Icon Node | Heading | Body |
|--------|-----------|---------|------|
| 1 | `281:5060` | "Real-time where it matters." | "Live transaction processing, event-driven services, and modern APIs power banking that responds in the moment." |
| 2 | `281:5074` | "API-first by design." | "Modern APIs connect Core, Digital, Onboarding, payments, and partner ecosystems, for seamless integrations." |
| 3 | `281:5083` | "Deployed your way." | "Run Nymbus as your primary banking platform, or modernize alongside the system you run today, on your timeline." |

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each pillar fades in up (staggered) |
| Icons | Display only — not tappable |

---

## 6. Section 3: Platform Architecture

**Figma Node:** `281:4890` (BlueprintGridLight)
**Position:** Y 1945–3150
**Dimensions:** 432 × 1205px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│                                    │
│  Move faster with a flexible,      │  ← H2, centered
│  modern platform built for growth  │
│                                    │
│  Unify banking workflows,          │  ← Body text
│  simplify vendor management,       │
│  and connect existing systems      │
│  through APIs, extensible          │
│  integrations, and Nymbus MCP.     │
│                                    │
│  Explore integrations →            │  ← Link with arrow
│                                    │
├────────────────────────────────────┤
│                                    │
│  ┌─────────────────────────────┐   │
│  │   [Architecture Diagram]    │   │  ← Dark card, 432×576px
│  │                             │   │
│  │  Banking      Managed       │   │
│  │  Technology   Services      │   │
│  │  ──────────   ──────────    │   │
│  │  Core         Contact Ctr   │   │
│  │  Digital      Onboarding    │   │
│  │  Account Op   Servicing     │   │
│  │  API & MCP    Compliance    │   │
│  │  Analytics    Fraud         │   │
│  │  Rewards      Back Office   │   │
│  │  Engagement   Growth Supp   │   │
│  │                             │   │
│  │     [Integrations Grid]     │   │  ← 2×4 partner icons
│  │       [Nymbus Center]       │   │  ← Animated logo
│  │   [Governed AI Workflows]   │   │  ← Bottom card
│  │                             │   │
│  └─────────────────────────────┘   │
│                                    │
└────────────────────────────────────┘
```

### Section Header Content

| Ref | Element | Content |
|-----|---------|---------|
| MPL-5 | H2 | "Move faster with a flexible, modern platform built for growth" |
| MPL-6 | Body | "Unify banking workflows, simplify vendor management, and connect existing systems through APIs, extensible integrations, and Nymbus MCP." |
| MPL-7 | Link | "Explore integrations" → /integrations/ or #integrations |

### Architecture Diagram Content

**Figma Node:** `281:4891` (nymbus-platform-architecture)
**Dimensions:** 432 × 576px

**Left Pillar — Banking Technology (`281:4947`):**

| Card | Label |
|------|-------|
| 1 | Core |
| 2 | Digital Banking |
| 3 | Account Opening |
| 4 | API & MCP |
| 5 | Analytics |
| 6 | Rewards |
| 7 | Engagement |

**Center — Integrations (`281:4895`):**
- Header: "Integrations"
- Grid: 2 rows × 4 partner icons (8 total)
- Center: Nymbus animated logo with connector lines
- Bottom: "Governed AI Workflows" card

**Right Pillar — Managed Services (`281:4929`):**

| Card | Label |
|------|-------|
| 1 | Contact Center |
| 2 | Onboarding |
| 3 | Servicing |
| 4 | Compliance |
| 5 | Fraud |
| 6 | Back Office |
| 7 | Growth Support |

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Diagram fades in up |
| "Explore integrations" tap | Navigate to /integrations/ |
| Pillar cards | Display only — not tappable on mobile |
| Integration icons | Display only — not tappable |

---

## 7. Section 4: Managed Services Overview

**Figma Node:** `281:5295` (Container)
**Position:** Y 3150–7495
**Dimensions:** 428 × 4345px

This section contains the section header and the Banking Technology product cards (Core, Digital Banking, Account Opening, Payments Hub, Engage, Levels).

### Section Header

```
┌────────────────────────────────────┐
│                                    │
│  Meet the team that runs your      │  ← H2
│  operations.                       │
│                                    │
│  One team across every operation,  │  ← Body
│  staffed by Nymbus and running     │
│  behind your brand, so you scale   │
│  without standing up a back        │
│  office.                           │
│                                    │
└────────────────────────────────────┘
```

| Ref | Element | Content |
|-----|---------|---------|
| MPL-8 | H2 | "Meet the team that runs your operations." |
| MPL-9 | Body | "One team across every operation, staffed by Nymbus and running behind your brand, so you scale without standing up a back office." |

---

## 8. Section 5: Banking Technology Cards

**Figma Node:** `281:5300` (Container within 281:5295)
**Position:** Y 3558–7395
**Dimensions:** 396 × 3837px

Mobile stacks all product cards vertically. Each card includes text content + product UI mockup/illustration.

### Card 1: Core

**Figma Node:** `281:5302` (LinkComponent)

```
┌────────────────────────────────────┐
│                                    │
│  [Abstract grid illustration       │  ← 330×330px geometric visual
│   with Nymbus logo center]         │
│                                    │
│  Core                              │  ← Product name
│  The core, built to move.          │  ← Tagline
│                                    │
│  Run accounts, deposits,           │  ← Description
│  transactions, and servicing on    │
│  modern core infrastructure built  │
│  for primary or parallel           │
│  deployment. Changing a product    │
│  no longer means a multi-year      │
│  vendor build.                     │
│                                    │
└────────────────────────────────────┘
```

| Element | Content |
|---------|---------|
| Title | "Core — The core, built to move." |
| Description | "Run accounts, deposits, transactions, and servicing on modern core infrastructure built for primary or parallel deployment. Changing a product no longer means a multi-year vendor build." |

### Card 2: Digital Banking

**Figma Node:** `281:5336` (LinkComponent)

| Element | Content |
|---------|---------|
| Title | "Digital Banking — The experience customers expect." |
| Description | "Give account holders the mobile banking they expect, launched as one connected experience across iOS, Android, and web, instead of a multi-year build across a patchwork of vendors." |
| Visual | Mobile banking dashboard mockup (281:5344) — shows balance card, quick actions, accounts list |

**Mobile Banking Mockup Content:**
- Welcome: "Good morning / Welcome, Ed"
- Balance: "Nymbus Balance" — $8,742.33 (+61.02 trending up)
- Quick Actions: Transfer | Pay Bill | Send Money | Move Money
- Accounts: Everyday Checking, High-Yield Savings, 12-Month CD, Visa Signature, Cashback Mastercard
- Banner: "Set up Direct Deposit"
- Bottom nav: Home | Goals | Activity | Insights | More

### Card 3: Account Opening

**Figma Node:** `281:5535` (Container)

| Element | Content |
|---------|---------|
| Title | "Account Opening — From intent to funded." |
| Description | "Move applicants from intent to funded with onboarding flows built for consumer, business, and commercial banking, so accounts open and fund in a single flow." |
| Visual | Two mobile screens on gradient background — funding step + confirmation |

**Screen 1 (Funding Step):**
- "Step 3 of 4" / "Fund your account"
- Funding options: Transfer from Nymbus account (selected), External bank, Mail a check
- Amount: $500.00
- Button: "Continue"

**Screen 2 (Confirmation):**
- Success: "You're in" / "Account open and funded"
- Receipt: 12-Month CD, Routing ···4821, Account ···7523, Deposit $500.00, Status: Ready to use

### Card 4: Payments Hub

**Figma Node:** `281:5710` → `281:5711` (LinkComponent)

| Element | Content |
|---------|---------|
| Title | "Payments Hub — Control every payment rail." |
| Description | "Route, authorize, settle, and reconcile payments from one operational platform. Replace disconnected payment systems with real-time control, unified operations, and the flexibility to add new rails without rebuilding." |
| Visual | Payments operations dashboard mockup (281:5718) |

**Payments Dashboard Mockup:**
- Header: "Payments Operations" + settings icon
- Summary strip: bolt icon + message + trend
- Payment cards: ACH Batch (Processing), Wire Transfers (Active), RTP (Settling), Debit Card Auth, Positive Pay

### Card 5: Engage

**Figma Node:** `281:5903` (LinkComponent)

| Element | Content |
|---------|---------|
| Title | "Engage — Nurture accounts into loyal relationships." |
| Description | "Guide account holders from signup to first meaningful transaction with targeted, timely communications based on real account behavior, lifecycle stage, and engagement signals, instead of relying on broad campaigns that miss the moments that matter." |
| Visual | Engagement workflow builder card (281:5904) |

**Workflow Builder Card:**
- Header: "ENGAGEMENT WORKFLOW" + "Running" status
- Trigger: "WHEN THIS HAPPENS" — bolt icon + trigger info
- Action: "THEN DO THIS" — mail icon + progress steps
- Channels: push notification | email | SMS
- Preview: Message bubble with sample content

### Card 6: Levels (Rewards)

**Figma Node:** `281:5983` → `281:5984` (LinkComponent)

| Element | Content |
|---------|---------|
| Title | "Levels — Incentivize and reward profitable behaviors." |
| Description | "Reward the behaviors that drive primacy, deposits, and deeper relationships, from direct deposit to recurring account activity, without the cost, complexity, or long build cycle of creating an enterprise-grade loyalty program from scratch." |
| Visual | Rewards/loyalty program screen mockup (294:3267) |

**Rewards Screen Mockup:**
- Header: "NYMBUS CLUB" logo + close button
- Trophy card: Points balance 2,400 + celebratory message
- Progress: "Next Goal: Gold Status" — 3,000 pts (progress bar ~80%)
- Status: "600 points to your next reward"
- Achievements: Direct Deposit Streak (+500 PTS), Bill Pay Activity (+200 PTS)
- Link: "How do points work? Learn more"

### Card Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each card fades in up (staggered) |
| Card tap | Display only — no navigation |
| UI mockups | Static illustrations |

---

## 9. Section 6: Intelligence Section

**Figma Node:** `281:5094` (GovernedAISectionGuide)
**Position:** Y 7395–10725
**Dimensions:** 428 × 3330px

### Section Header

```
┌────────────────────────────────────┐
│                                    │
│  ┌────────────────────────┐        │
│  │     intelligence       │        │  ← Eyebrow pill badge
│  └────────────────────────┘        │
│                                    │
│  One layer. Every signal.          │  ← H2
│                                    │
│  Nymbus unites platform activities │  ← Body
│  into a governed intelligence      │
│  grid. Real-time actions stream    │
│  across secure parameters under    │
│  full compliance control.          │
│                                    │
└────────────────────────────────────┘
```

| Ref | Element | Content |
|-----|---------|---------|
| MPL-10 | Eyebrow | "intelligence" (pill badge) |
| MPL-11 | H2 | "One layer. Every signal." |
| MPL-12 | Body | "Nymbus unites platform activities into a governed intelligence grid. Real-time actions stream across secure parameters under full compliance control." |

### Feature 1: Fraud Intelligence

**Figma Node:** `281:5103` (Frame 1533216809)

```
┌────────────────────────────────────┐
│                                    │
│  [Icon — 53px]                     │
│                                    │
│  Fraud Intelligence                │  ← Label
│  Contain fraud in one pass.        │  ← Headline
│                                    │
│  Customer data, case               │  ← Body
│  investigation, and enforcement    │
│  live in one workspace, so         │
│  analysts contain threats in one   │
│  pass instead of chasing five      │
│  systems.                          │
│                                    │
│  [Fraud Monitor Table Card]        │  ← Illustration
│                                    │
└────────────────────────────────────┘
```

| Element | Content |
|---------|---------|
| Label | "Fraud Intelligence" |
| Headline | "Contain fraud in one pass." |
| Body | "Customer data, case investigation, and enforcement live in one workspace, so analysts contain threats in one pass instead of chasing five systems." |

### Feature 2: Insights

**Figma Node:** `281:5163` (Frame 1533216810)

| Element | Content |
|---------|---------|
| Label | "Insights" |
| Headline | "Decisions on evidence, not guesswork." |
| Body | "Turn platform data into analytics that show what is working across products and channels, so decisions run on evidence instead of month-end reports." |

### Feature 3: Nymbus MCP

**Figma Node:** `281:5201` (Frame 1533216811)

| Element | Content |
|---------|---------|
| Label | "Nymbus MCP" |
| Headline | "AI that stays governed." |
| Body | "Nymbus MCP connects AI to your banking data and workflows under permissions, approvals, and a full audit trail, so automation acts on the routine and escalates the rest." |

### Feature 4: Connect

**Figma Node:** `281:5246` (Frame 1533216812)

| Element | Content |
|---------|---------|
| Label | "Connect" |
| Headline | "Your systems and data, connected." |
| Body | "Integrate third-parties and stream live data through modern APIs and event-driven architecture, so you onboard new vendors in days and put real-time data to work across the institution." |

### Intelligence Section Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each feature fades in up (staggered) |
| Icons | Display only — not tappable |
| Feature cards | Informational only — no outbound links |

---

## 10. Section 7: Customer Quote

**Figma Node:** `281:5011` (Frame 2147238549)
**Position:** Y 10725–11694
**Dimensions:** 427 × 969px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│                                    │
│                                    │
│  "Speed to market and cost to      │  ← Quote, large serif
│   serve is what this business is   │
│   all about. Nymbus affirmed our   │
│   decision to modernize our        │
│   entire banking infrastructure    │
│   and positions us to deliver      │
│   real, simple banking services    │
│   to our customers faster and      │
│   more efficiently than ever       │
│   before."                         │
│                                    │
│  Stephen Owen, CEO,                │  ← Attribution
│  First Entertainment Credit Union  │
│                                    │
│                                    │
└────────────────────────────────────┘
```

### Content

| Element | Content |
|---------|---------|
| Quote | "Speed to market and cost to serve is what this business is all about. Nymbus affirmed our decision to modernize our entire banking infrastructure and positions us to deliver real, simple banking services to our customers faster and more efficiently than ever before." |
| Attribution | "Stephen Owen, CEO, First Entertainment Credit Union" |

### Mobile Behavior

| Trigger | Behavior |
|---------|----------|
| Scroll in | Quote fades in up |
| Display | Single quote centered — no carousel on mobile |

---

## 11. Section 8: Footer CTA

**Figma Node:** `281:4992` (FooterCTAGuide)
**Position:** Y 11684–12284
**Dimensions:** 427 × 600px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│                                    │
│                                    │
│        READY TO MOVE?              │  ← H2, centered, uppercase
│                                    │
│  ┌────────────────────────────┐    │
│  │      Talk to an expert     │    │  ← CTA Button
│  └────────────────────────────┘    │
│                                    │
│                                    │
└────────────────────────────────────┘
```

### Content

| Ref | Element | Content |
|-----|---------|---------|
| MPL-13 | Heading | "READY TO MOVE?" |
| MPL-14 | Button | "Talk to an expert" → /contact/ |

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading fades in up |
| CTA tap | Navigate to /contact/ |

---

## 12. Section 9: Footer

**Figma Node:** `281:6001` (Mobile Footer Ad instance)
**Position:** Y 12284–13359
**Dimensions:** 428 × 1075px

See [Mobile-Footer-User-Flow.md](./Mobile-Footer-User-Flow.md) for complete documentation.

**Summary:**
- Single-column stacked link groups
- Link columns: Platform, Solutions, Company
- Legal links: Terms, Privacy, Accessibility
- Social icons: LinkedIn, X, YouTube
- Copyright: © 2026 Nymbus

---

## 13. Mobile Animations & Interactions

### Scroll-Triggered Animations

| Section | Animation |
|---------|-----------|
| Hero | Fade in up on load |
| Value Pillars | Staggered fade in up |
| Architecture Diagram | Fade in up |
| Product Cards | Staggered fade in up |
| Intelligence Features | Staggered fade in up |
| Customer Quote | Fade in up |
| Footer CTA | Fade in up |

### Touch Interactions

| Element | Tap Behavior |
|---------|--------------|
| Nav hamburger | Opens full-screen menu overlay |
| Hero CTA button | Navigate to /contact/ |
| "Explore integrations" link | Navigate to /integrations/ |
| Architecture pillar cards | Display only — not tappable |
| Product cards | Display only — not tappable |
| Intelligence features | Display only — not tappable |
| Footer CTA button | Navigate to /contact/ |

### Background Animations

| Element | Animation |
|---------|-----------|
| Hero gradient | Subtle organic movement (if animated) |
| Architecture center logo | Pulse/rotate animation on Nymbus logo |
| Connector lines | Animated dots flowing along paths |

---

## 14. User Journey Scenarios

### Scenario 1: Executive Research Visit

```
[Arrives from Google search or homepage]
        ↓
[Hero: Sees "Next-Generation Banking Platform"]
        ↓
[Scrolls to Value Pillars — scans real-time, API-first, flexible deployment]
        ↓
[Architecture Diagram — sees unified platform view]
        ↓
[Product Cards — browses Core, Digital Banking capabilities]
        ↓
[Intelligence Section — learns about governed AI]
        ↓
[Customer Quote — social proof from FECU]
        ↓
[Footer CTA: Taps "Talk to an expert"]
        ↓
[Navigates to /contact/]
```

### Scenario 2: Technical Evaluation

```
[Arrives from /solutions/ page]
        ↓
[Hero: Notes MCP server mention]
        ↓
[Scrolls directly to Architecture Diagram]
        ↓
[Reviews Banking Technology + Managed Services pillars]
        ↓
[Taps "Explore integrations"]
        ↓
[Navigates to /integrations/]
```

### Scenario 3: Product Deep-Dive

```
[Arrives from navigation dropdown]
        ↓
[Scrolls past Hero + Pillars]
        ↓
[Product Cards — reads each capability in detail]
        ↓
[Studies UI mockups: Digital Banking, Account Opening, Payments]
        ↓
[Intelligence Section — reviews AI governance features]
        ↓
[Returns to navigation for specific product page]
```

---

## 15. Complete URL Map

### Inbound Links (how users arrive at /platform/)

| Source | Path |
|--------|------|
| Homepage hero | /platform/ |
| Homepage "Explore the platform" | /platform/ |
| Main navigation "Platform" | /platform/ |
| Solutions pages | /platform/ |
| Footer links | /platform/ |

### Outbound Links (where users go from this page)

| Element | Destination |
|---------|-------------|
| Hero CTA button | /contact/ |
| "Explore integrations" link | /integrations/ |
| Footer CTA button | /contact/ |
| Footer navigation links | Various |
| Mobile menu links | Various |

### Internal Anchors (if implemented)

| Anchor | Section Target |
|--------|---------------|
| #value-pillars | Value Pillars section |
| #architecture | Platform Architecture section |
| #products | Banking Technology Cards |
| #intelligence | Governed AI Section |
| #integrations | Architecture diagram / Integrations link |

---

## 16. Open Questions

| # | Question | Status | Resolution |
|---|----------|--------|------------|
| 1 | **Hero CTA label** — What is the exact button text? Figma shows component instance. | RESOLVED | | Get a demo 
| 2 | **Product card click behavior** — Do cards navigate to detail pages on mobile? | RESOLVED | Display only — no navigation |
| 3 | **Architecture diagram interactivity** — Are pillar cards tappable on mobile? | RESOLVED | Display only — not tappable |
| 4 | **Customer quote carousel** — Is there a carousel or single quote? | RESOLVED | Single quote on mobile |
| 5 | **Connector line animation** — Do animated dots appear on mobile? | RESOLVED | yes |
| 6 | **Integration icons** — Which 8 partners are shown? | PENDING | Need asset/icon details |

---

## Appendix: Desktop vs Mobile Comparison

| Element | Desktop | Mobile |
|---------|---------|--------|
| Page dimensions | 1512 × 10151px | 428 × 13359px |
| Navigation | Dark nav bar | Hamburger menu |
| Value pillars | 3-column side-by-side | Single column stacked |
| Architecture diagram | 1024px wide | 432px wide, scaled |
| Product cards | 2-column pairs | Single column stacked |
| Intelligence features | 2-column (text + visual) | Single column stacked |
| Customer quote | Centered large quote | Centered, full-width |
| Footer CTA | Full-width section | Full-width section |
| Touch targets | N/A | Minimum 44px |
| Hover states | On cards, links | Replaced with tap states |
