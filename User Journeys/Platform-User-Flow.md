# Platform Page User Flow & Journey

**Source:** Figma Dev Hand-off — Platform (Node 17:7173)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=17-7173  
**Last Updated:** August 11, 2026  
**Page URL:** /platform/

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Section 1: Hero](#2-section-1-hero)
3. [Section 2: Value Pillars](#3-section-2-value-pillars)
4. [Section 3: Platform Architecture Diagram](#4-section-3-platform-architecture-diagram)
5. [Section 4: Banking Technology (Product Cards)](#5-section-4-banking-technology-product-cards)
6. [Section 5: Intelligence Section](#6-section-5-intelligence-section)
7. [Section 6: Customer Quote](#7-section-6-customer-quote)
8. [Section 7: Footer CTA](#8-section-7-footer-cta)
9. [Section 8: Footer](#9-section-8-footer)
10. [Navigation & Linking Map](#10-navigation--linking-map)

---

## 1. Page Overview & Scroll Journey

The Platform page is a single continuous scroll page (1512px wide, ~10151px tall) that showcases the complete Nymbus banking platform. It's structured as a product narrative moving from high-level value proposition through specific capabilities (Banking Technology and Intelligence) to social proof and conversion.

**Scroll Order (top to bottom):**

| # | Section | Y Position (approx) | Purpose |
|---|---------|---------------------|---------|
| 1 | Navigation (dark) + Hero | 0–678 | Platform value proposition |
| 2 | Value Pillars | 679–1103 | Key differentiators (3 columns) |
| 3 | Platform Architecture Diagram | 1108–2221 | Visual architecture + integrations CTA |
| 4 | Banking Technology Cards | 2226–5428 | Product deep-dives (6 products) |
| 5 | Intelligence Section | 5428–8097 | AI/Intelligence capabilities (4 features) |
| 6 | Customer Quote | 8135–8903 | Social proof |
| 7 | Footer CTA | 8902–9502 | Final conversion |
| 8 | Footer | 9504–10151 | Navigation + legal |

---

## 2. Section 1: Hero

**Figma Nodes:** `17:7175` (BG), `17:7186` (Section), `17:7188` (Paragraph)

### Layout
- Full-width dark gradient background with organic blurred elliptical shapes and grain texture overlay
- Dark navigation bar at top (shared component: "Nav dark")
- Centered content block (851px wide)
- Vertical border lines framing content area (left at x:116, right at x:1397)

### Background Composition
- Multiple overlapping ellipses with blur/opacity creating organic gradient
- Rectangles with gradient fills
- Grain texture overlay on top (`17:7185`)

### Content Stack (top to bottom)

1. **Eyebrow Badge**
   - Pill-shaped container (268 x 46px) with rounded rectangle background
   - Text: "Modern Banking Platform"

2. **H1 Heading**
   - Text: "One connected platform."
   - Large display typography (spans 851px width)

3. **Subtitle Paragraph**
   - Text: "Core processing, digital banking, account opening, managed operations, and governed AI, running as one system, not five vendor contracts stitched together."

4. **CTA Button**
   - Button instance (122 x 37px)
   - Contained within frame: "Frame 1533216752"
   - Expected text: "Get a demo" or similar action CTA

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Fade in up with ease (global animation) |
| CTA hover | Arrow grows with ease |
| CTA click | Navigate to /contact/ or demo booking |

---

## 3. Section 2: Value Pillars

**Figma Node:** `17:8013` (Frame 1533216828), `17:8014` (inner container)

### Layout
- Light background section (1511 x 424px)
- 3-column grid (373px each, separated by ~46px gaps)
- Each column: icon + heading + body text
- Framed by vertical border lines

### Content

| Column | Icon Node | Heading | Body |
|--------|-----------|---------|------|
| 1 | `17:8016` (48x48 icon) | "Real-time where it matters." | "Live transaction processing, event-driven services, and modern APIs power banking that responds in the moment." |
| 2 | `17:8030` (47x47 icon) | "API-first by design." | "Modern APIs connect Core, Digital, Onboarding, payments, and partner ecosystems, for seamless integrations." |
| 3 | `17:8039` (53x53 icon) | "Deployed your way." | "Run Nymbus as your primary banking platform, or modernize alongside the system you run today, on your timeline." |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each pillar fades in up with ease (staggered) |

---

## 4. Section 3: Platform Architecture Diagram

**Figma Nodes:** `17:7200` (border group), `17:7203` (Frame 1533216812)

### Layout
- White/light background section
- Centered heading block (900px wide)
- Architecture diagram illustration (1024 x 576px) below
- Framed by vertical border lines

### Content Stack

1. **Section Heading**
   - Text: "Move faster with a flexible, modern platform built for growth"
   - Large centered display text

2. **Subtitle**
   - Text: "Unify banking workflows, simplify vendor management, and connect existing systems through APIs, extensible integrations, and Nymbus MCP."

3. **CTA Link**
   - Text: "Explore integrations"
   - Includes arrow icon (24x24)
   - Expected URL: /platform/#integrations or /integrations/

4. **Architecture Diagram** (`17:7211` — nymbus-platform-architecture)
   - Dark card with rounded corners and noise/grain texture overlay
   - Three-column layout:

   **Left Pillar — "Banking Technology":**
   | Card | Label |
   |------|-------|
   | 1 | Core |
   | 2 | Digital Banking |
   | 3 | Account Opening |
   | 4 | API & MCP |
   | 5 | Analytics |
   | 6 | Rewards |
   | 7 | Engagement |

   **Center Area — "Integrations":**
   - Grid of 8 integration partner icons (2 rows x 4)
   - Central animated Nymbus logo/platform node with connector lines
   - Bottom card: "Governed AI Workflows"

   **Right Pillar — "Managed Services":**
   | Card | Label |
   |------|-------|
   | 1 | Contact Center |
   | 2 | Onboarding |
   | 3 | Servicing |
   | 4 | Compliance |
   | 5 | Fraud |
   | 6 | Back Office |
   | 7 | Growth Support |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Diagram fades in up with ease |
| "Explore integrations" hover | Arrow grows, text underline or color shift |
| "Explore integrations" click | Navigate to integrations section/page |
| Pillar card click (potential) | Navigate to respective product anchor |

---

## 5. Section 4: Banking Technology (Product Cards)

**Figma Node:** `17:7294` (Frame 1533216823)

### Layout
- Full-width section (1513 x 3202px)
- Section header with eyebrow + heading
- Alternating card pairs in container (1076px wide)
- Cards combine text content + product UI screenshots/illustrations

### Section Header

- **Eyebrow Badge:** "BANKING TECHNOLOGY" (pill shape)
- **Heading:** "Modern banking. Built without limits."
- **Header Area:** (800 x 56px — may contain tabs or navigation)

### Card Grid Structure

**Container 1 (Row 1) — Two equal cards side by side:**

| Position | Product | Title Line | Description | Visual |
|----------|---------|-----------|-------------|--------|
| Left (518px) | Core | "Core — The core, built to move." | "Run accounts, deposits, transactions, and servicing on modern core infrastructure built for primary or parallel deployment. Changing a product no longer means a multi-year vendor build." | Abstract geometric/grid illustration with Nymbus logo |
| Right (518px) | Digital Banking | "Digital Banking — The experience customers expect." | "Give account holders the mobile banking they expect, launched as one connected experience across iOS, Android, and web, instead of a multi-year build across a patchwork of vendors." | Mobile banking app mockup showing dashboard with balance card, accounts list, quick actions |

**Digital Banking Mobile Mockup Details:**
- Status bar (9:41, signal icons)
- Welcome header: "Good morning / Welcome, Ed"
- Balance card: "Nymbus Balance" — $8,742.33 (with sparkline chart, +61.02 trending up)
- Quick Actions: Transfer | Pay Bill | Send Money | Move Money
- My Accounts section:
  - Everyday Checking ····4521 — $8,742.33 Available
  - High-Yield Savings ····4522 — $24,180.50 Available
  - 12-Month CD ····4523 — $15,000.00 Locked
  - Visa Signature ····7891 — $1,243.67 Due 2026-04-15
  - Cashback Mastercard ····3344 — $4,812.90 Due 2026-03-20
- Deposit banner: "Set up Direct Deposit — Get paid faster by routing your paycheck."
- Bottom nav: Home | Goals | Activity | Insights | More

---

**Container 2 (Full-width card) — Account Opening:**

| Product | Title Line | Description | Visual |
|---------|-----------|-------------|--------|
| Account Opening | "Account Opening — From intent to funded." | "Move applicants from intent to funded with onboarding flows built for consumer, business, and commercial banking, so accounts open and fund in a single flow." | Two mobile screens (funding step + confirmation) on gradient background |

**Account Opening Screen 1 (Funding Step):**
- Navigation: "← Step 3 of 4"
- Heading: "Fund your account" / "$500 minimum opening deposit"
- Funding methods (radio options):
  - **Selected:** "Transfer from Nymbus account" — Everyday Checking ····4521, Balance: $8,742.33
  - "Transfer from external bank" — Connect an external routing/account
  - "Mail a check" — Send checks via mail post system
- Deposit Amount input: $500.00
- Button: "Continue"
- Bottom nav: Home | Goals | Activity | Insights | More

**Account Opening Screen 2 (Confirmation):**
- Success badge: checkmark circle
- Heading: "You're in" / "Account open and funded"
- Confirmation receipt:
  - Account Name: 12-Month CD
  - Routing Number: ···4821
  - Account Number: ···7523
  - Initial Deposit: $500.00
  - Status: "Ready to use" (green dot)
- Buttons: "Go to Account" | "Back to Home"
- Bottom nav: Home | Goals | Activity | Insights | More

---

**Container 3 (Row 3) — Two equal cards side by side:**

| Position | Product | Title Line | Description | Visual |
|----------|---------|-----------|-------------|--------|
| Left (518px) | Payments Hub | "Payments Hub — Control every payment rail." | "Route, authorize, settle, and reconcile payments from one operational platform. Replace disconnected payment systems with real-time control, unified operations, and the flexibility to add new rails without rebuilding." | Payments operations dashboard mockup |
| Right (518px) | Engage | "Engage — Nurture accounts into loyal relationships." | "Guide account holders from signup to first meaningful transaction with targeted, timely communications based on real account behavior, lifecycle stage, and engagement signals, instead of relying on broad campaigns that miss the moments that matter." | Engagement workflow builder card |

**Payments Hub Dashboard Mockup:**
- Header: Blue logo badge + "Payments Operations" title + settings icon
- Summary strip: bolt icon + summary message + trend value (arrow up)
- Payment cards list:
  - **ACH Batch** — count + progress bar (65%) + "Processing" status
  - **Wire Transfers** — count + "Active" status + right meta
  - **RTP** — count + "Settling" status + right meta
  - **Debit Card Auth** — count + status + right meta
  - **Positive Pay** — count + "Settling" status + right meta
- Bottom nav: Home | Goals | Activity | Insights | More

**Engage Workflow Builder Card:**
- Card header: eyebrow "ENGAGEMENT WORKFLOW" + title (e.g., "New Account Onboarding") + "Running" status badge
- Trigger block: "WHEN THIS HAPPENS" — bolt icon + trigger title + meta
- Connector line (dashed vertical)
- Action block: "THEN DO THIS" — mail icon + action title + meta + progress steps (5 dots)
- Channel block: "DELIVER VIA" — push notification | email | SMS (tag chips)
- Preview block: "MESSAGE PREVIEW" — message bubble with quote mark + content
- Footer: "Edit Workflow" button + "Preview" button

---

**Container 4 (Full-width card) — Levels/Rewards:**

| Product | Title Line | Description | Visual |
|---------|-----------|-------------|--------|
| Levels | "Levels — Incentivize and reward profitable behaviors." | "Reward the behaviors that drive primacy, deposits, and deeper relationships, from direct deposit to recurring account activity, without the cost, complexity, or long build cycle of creating an enterprise-grade loyalty program from scratch." | Gradient background (similar to Account Opening) |

---

### Card Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each card/container fades in up with ease (staggered) |
| Card title link hover | Arrow appears or grows, text may underline |
| Card title link click | Navigate to product detail page (e.g., /platform/core/, /platform/digital-banking/) |

---

## 6. Section 5: Intelligence Section

**Figma Node:** `17:8081` (intelligence-section-light)

### Layout
- Light background section (1514 x 2669px)
- Section header (eyebrow + heading + subhead)
- 4 feature rows, each with: text description column (380px) + illustration/card column (785px)
- Illustration cards have dark gradient backgrounds with grain/noise texture

### Section Header

- **Eyebrow Badge:** "Intelligence" (pill shape)
- **Heading:** "One layer. Every signal."
- **Subhead:** (800px wide text block below heading)

### Feature Row 1 — Fraud Intelligence

**Figma Nodes:** `17:8089` (container), `17:8090` (card area), `17:8151` (text column)

| Column | Content |
|--------|---------|
| Left (785px) | Fraud Monitor Table card on gradient background |
| Right (380px) | Icon + "Fraud Intelligence" + "Contain fraud in one pass." + "Customer data, case investigation, and enforcement live in one workspace, so analysts contain threats in one pass instead of chasing five systems." |

**Fraud Monitor Table Content:**

| Transaction | Risk Score | Status | Action |
|-------------|-----------|--------|--------|
| Wire Outflow — $45,000 · 1m ago | 94/100 (bar ~94%) | Critical | Decline |
| ACH Setup — $3,250 · 5m ago | 42/100 (bar ~42%) | Review | Review |
| Card Auth — $182 · 12m ago | 08/100 (bar ~8%) | Cleared | Review |

---

### Feature Row 2 — Insights

**Figma Nodes:** `17:8161` (container), `17:8162` (text column), `17:8175` (card area)

| Column | Content |
|--------|---------|
| Left (380px) | Icon + "Insights" + "Decisions on evidence, not guesswork." + "Turn platform data into analytics that show what is working across products and channels, so decisions run on evidence instead of month-end reports." |
| Right (785px) | Insights metrics widget card on gradient background |

**Insights Card Content:**
- Header: "VOLATILITY DEVIATION" + "+24.5%"
- Bar chart: 5 bars (M, T, W, T, F) with varying heights
- Footer: "Decision confidence: 98.4% optimal" (with green dot indicator)

---

### Feature Row 3 — Nymbus MCP (AI Governance)

**Figma Nodes:** `17:8213` (container), `17:8214` (card area), `17:8252` (text column)

| Column | Content |
|--------|---------|
| Left (785px) | AI Governance Timeline card on gradient background |
| Right (380px) | Icon + "Nymbus MCP" + "AI that stays governed." + "Nymbus MCP connects AI to your banking data and workflows under permissions, approvals, and a full audit trail, so automation acts on the routine and escalates the rest." |

**AI Governance Timeline Card Content:**
- Header: "GOVERNED PATHWAY"
- Timeline entries (vertical line with dots):
  1. "Risk Outlier Flagged" — Transaction ID: tx_904a8 · 10:24 AM
  2. "Escalated to Compliance" — Ruleset: High Value Outflows · 10:24 AM
  3. "Auto-Action Taken" — Account locked pending secondary auth · 10:25 AM

---

### Feature Row 4 — Connect (Integrations)

**Figma Nodes:** `17:8272` (container), `17:8273` (text column), `17:8285` (card area)

| Column | Content |
|--------|---------|
| Left (380px) | Icon + "Connect" + "Your systems and data, connected." + "Integrate third-parties and stream live data through modern APIs and event-driven architecture, so you onboard new vendors in days and put real-time data to work across the institution." |
| Right (785px) | Integration Hub card on gradient background |

**Integration Hub Card Content:**
- Header: "CONNECTIONS (3)"
- Connection rows:

| Partner | Description | Latency | Status |
|---------|-------------|---------|--------|
| **P** — Plaid | Identity & Balance Sync | 2.4ms | Active |
| **S** — Stripe | Payment Processing | 1.8ms | Active |
| **T** — Twilio | SMS Communications | 14ms | Connected |

---

### Intelligence Section Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Each row fades in up with ease (staggered by column) |
| Feature icon | Static display |
| Card backgrounds | Gradient with grain/noise texture (animated gradient movement possible) |

---

## 7. Section 6: Customer Quote

**Figma Node:** `17:8053` (CustomerQuotes)

### Layout
- Full-width section (1507 x 768px)
- Large centered quote text (1076px container)
- Attribution below quote

### Content
- **Quote:** "Speed to market and cost to serve is what this business is all about. Nymbus affirmed our decision to modernize our entire banking infrastructure and positions us to deliver real, simple banking services to our customers faster and more efficiently than ever before."
- **Attribution:** "Stephen Owen, CEO, First Entertainment Credit Union"

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Quote text fades in up with ease |
| Potential carousel | May cycle between multiple quotes (same as homepage pattern) |

---

## 8. Section 7: Footer CTA

**Figma Node:** `17:8062` (FooterCTAGuide)

### Layout
- Full-width section (1512 x 600px)
- Large centered heading with CTA button

### Content
- **Heading:** "READY TO MOVE?"
- **CTA Button:** Likely "Get a demo" or "Talk to an expert"
- Expected URL: /contact/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading fades in up |
| CTA hover | Arrow grows with ease / specular button effect |
| CTA click | Navigate to /contact/ |

---

## 9. Section 8: Footer

**Figma Node:** `17:7293` (Footer instance)

### Layout
- Shared footer component (1517 x 647px)
- Standard site-wide footer with navigation columns, legal links, social icons

---

## 10. Navigation & Linking Map

### Inbound Links (how users arrive at /platform/)
- Homepage hero pill: "Move to a modern core" → /platform/#core
- Homepage platform overview cards → /platform/
- Homepage "Explore the platform" link → /platform/
- Main navigation → /platform/

### Internal Anchors (in-page navigation)

| Anchor | Section Target |
|--------|---------------|
| #core | Banking Technology → Core card |
| #digital-banking | Banking Technology → Digital Banking card |
| #account-opening | Banking Technology → Account Opening card |
| #payments | Banking Technology → Payments Hub card |
| #engage | Banking Technology → Engage card |
| #levels | Banking Technology → Levels card |
| #fraud-intelligence | Intelligence → Fraud Intelligence row |
| #insights | Intelligence → Insights row |
| #nymbus-mcp | Intelligence → Nymbus MCP row |
| #connect | Intelligence → Connect row |
| #integrations | Platform Architecture → Integrations |

### Outbound Links (where users go from this page)

| Element | Destination |
|---------|-------------|
| "Explore integrations" link | /integrations/ or #integrations |
| Core card title | /platform/core/ |
| Digital Banking card title | /platform/digital-banking/ |
| Account Opening card title | /platform/account-opening/ |
| Payments Hub card title | /platform/payments/ |
| Engage card title | /platform/engage/ |
| Levels card title | /platform/levels/ |
| Footer CTA button | /contact/ |
| Navigation links | Various (shared nav component) |

---

## Visual Flow Diagram

```
[User arrives on /platform/]
        |
        v
[Hero: "One connected platform" + CTA]
        |
        v (scroll)
[Value Pillars: Real-time | API-first | Deployed your way]
        |
        v (scroll)
[Architecture Diagram: Banking Tech + Integrations + Managed Services]
        |
        |--- [Click "Explore integrations"] ---> /integrations/
        |
        v (scroll)
[Banking Technology Section Header: "Modern banking. Built without limits."]
        |
        v
[Card: Core] -----> [Click title] ---> /platform/core/
        |
        v
[Card: Digital Banking] -----> [Click title] ---> /platform/digital-banking/
        |
        v
[Card: Account Opening] -----> [Click title] ---> /platform/account-opening/
        |
        v
[Card: Payments Hub] -----> [Click title] ---> /platform/payments/
        |
        v
[Card: Engage] -----> [Click title] ---> /platform/engage/
        |
        v
[Card: Levels] -----> [Click title] ---> /platform/levels/
        |
        v (scroll)
[Intelligence Section: "One layer. Every signal."]
        |
        v
[Fraud Intelligence] ---> Informational (no outbound link visible)
        |
        v
[Insights] ---> Informational
        |
        v
[Nymbus MCP / AI Governance] ---> Informational
        |
        v
[Connect / Integrations] ---> Informational
        |
        v (scroll)
[Customer Quote: Social proof]
        |
        v (scroll)
[Footer CTA: "READY TO MOVE?"] -----> /contact/
        |
        v
[Footer: Site navigation]
```

---

## Design Tokens & Patterns

### Shared Components Used
| Component | Instance Location |
|-----------|-------------------|
| Nav dark | Top of page (87px height) |
| Footer | Bottom of page (647px height) |
| Eyebrow badge | Hero, Banking Tech header, Intelligence header |
| Product card (LinkComponent) | All 6 banking technology cards |
| Gradient + Noise background | Account Opening card, Levels card, Intelligence cards |

### Typography Hierarchy (observed)
| Element | Usage |
|---------|-------|
| Display (large) | Section headings ("One connected platform", "Modern banking. Built without limits.") |
| H2 | Feature headings ("Fraud Intelligence", "Insights") |
| H3 / Card title | Product card titles ("Core — The core, built to move.") |
| Body | Descriptions and supporting text |
| Eyebrow | Badge text ("Modern Banking Platform", "BANKING TECHNOLOGY") |
| Caption | UI mockup labels, table headers |

### Color Patterns
| Context | Treatment |
|---------|-----------|
| Hero background | Dark gradient with blurred ellipses + grain overlay |
| Value pillars | Light/white background |
| Architecture diagram | Dark card on light background |
| Banking Tech cards | White cards on light background, product illustrations on dark/gradient |
| Intelligence section | Light background, feature cards on dark gradient with noise |
| Customer quote | Light background, large serif/display quote text |
| Footer CTA | Likely dark or branded background |

---

## Responsive Considerations

| Breakpoint | Expected Behavior |
|------------|-------------------|
| Desktop (1512px) | Full layout as designed |
| Tablet (768–1024px) | Cards stack to single column, architecture diagram scales down |
| Mobile (<768px) | All content single column, mobile mockups may resize, touch targets min 44px |

---

## Open Questions

1. **Header Area in Banking Technology section** — There's an 800x56px "Header Area" frame that may contain tabs or sub-navigation for filtering products. Content not visible in metadata. — STILL OPEN
2. ~~**Card click behavior**~~ — ✅ RESOLVED: Cards are not clickable. Hover state only (no navigation on click).
3. ~~**Intelligence section CTAs**~~ — ✅ RESOLVED: No links or "Learn more" buttons. Feature rows are informational only.
4. **Levels card visual** — ✅ NOTED: Illustration needed for the Levels/Rewards card. — STILL OPEN (awaiting asset)
5. ~~**Architecture diagram interactivity**~~ — ✅ RESOLVED: Yes, pillar cards are clickable with hover state and jump to their respective section. The dotted connector lines should have animated dots moving along their predefined path.
