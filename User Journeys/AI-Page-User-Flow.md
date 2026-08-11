# AI Page User Flow & Journey

**Source:** Figma Dev Hand-off — AI Page (Node 1:6)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=1-6  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Section 1: Hero](#2-section-1-hero)
3. [Section 2: Strategy Band — "Agents Are a Task"](#3-section-2-strategy-band--agents-are-a-task)
4. [Section 3: Governed by Design](#4-section-3-governed-by-design)
5. [Section 4: Adopt at Your Pace — Inform / Assist / Do](#5-section-4-adopt-at-your-pace--inform--assist--do)
6. [Section 5: Permissioned Automation — Nymbus MCP](#6-section-5-permissioned-automation--nymbus-mcp)
7. [Section 6: Building the Infrastructure for AI](#7-section-6-building-the-infrastructure-for-ai)
8. [Section 7: Footer CTA](#8-section-7-footer-cta)
9. [Section 8: Footer](#9-section-8-footer)
10. [Governed by Design — Variant States](#10-governed-by-design--variant-states)

---

## 1. Page Overview & Scroll Journey

The AI page is a single continuous scroll page (1512px wide, ~7112px tall) structured as a vertical narrative that positions Nymbus AI as governed, permissioned, and production-ready — not experimental.

**Target URL:** /ai/

**Scroll Order (top to bottom):**

| # | Section | Y Position | Purpose |
|---|---------|-----------|---------|
| 1 | Navigation (dark) + Hero | 0–678 | Value proposition — AI that answers to rules |
| 2 | Strategy Band | 679–1059 | Problem framing — agents vs. strategy |
| 3 | Governed by Design | 1059–2135 | Core differentiator — permissions, audit, governance |
| 4 | Adopt at Your Pace (Inform/Assist/Do) | 2185–4576 | Adoption model — graduated AI autonomy |
| 5 | Permissioned Automation | 4635–5208 | Nymbus MCP positioning |
| 6 | Building the Infrastructure for AI | 5208–5781 | Platform infrastructure + card visual |
| 7 | Footer CTA | 5781–6465 | Final conversion |
| 8 | Footer | 6465–7112 | Navigation + legal |

---

## 2. Section 1: Hero

**Figma Node:** `17:6702` (Hero)

### Layout
- Full-width dark gradient background with animated organic elliptical shapes
- Vertical stripe pattern (Group 5, Group 19) overlaying gradient
- 3D chrome blob in top-right corner (same as homepage)
- Two vertical accent lines framing the content area (x:116 and x:1397)
- Dark navigation bar at top (Nav dark instance)

### Content Stack (top to bottom)

1. **Eyebrow Badge**
   - Text: "Artificial Intelligence"
   - Style: Rounded rectangle pill badge

2. **H1 Heading**
   - Text: "AI that answers to permissions, approvals, and audit."
   - Style: Large serif/display font, partial opacity fade effect on trailing words

3. **Subtitle / Body**
   - Text: "Governed and operational, built from within. AI that works inside the rules your institution already runs on, from surfacing answers to acting on the routine."

4. **CTA Buttons (Row)**
   - Button 1 (primary/dark): "Get a demo" → /demo/ or /contact/
   - Button 2 (secondary/outline): "Talk to an expert" → /contact/

### Visual Elements
- Dark radial gradient background (blues, purples, whites)
- Vertical stripe overlay pattern (semi-transparent rectangles)
- Large chrome/glass elliptical blob shape (top-right, extends beyond viewport)
- Grain/noise texture overlay on gradient

### Interactions & Animations

| Trigger | Behavior |
|---------|----------|
| Page load | Background gradient subtly animates |
| Scroll in | Content fades in up with ease |
| Chrome blob | Ambient floating animation |
| CTA hover | Arrow grows with ease / specular button effect |

---

## 3. Section 2: Strategy Band — "Agents Are a Task"

**Figma Node:** `17:6641` (StrategyBand)

### Layout
- Two-column text layout within contained width (1140px)
- Left column: bold headline
- Right column: paragraph body text
- Framed by vertical accent lines continuing from hero

### Content

| Column | Content |
|--------|---------|
| Left | **"Agents are a task. Not a strategy."** |
| Right | "Institutions do not stall for lack of ambition. Let us help you find the right path..." (full paragraph about why agents alone aren't enough, and how Nymbus approaches AI strategically) |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Fade in up with ease (global animation) |

---

## 4. Section 3: Governed by Design

**Figma Node:** `17:6649` (StrategyBand — main instance within page)

### Layout
- Full section with header area + two-column content below
- Header: Eyebrow + H2 headline + body paragraph
- Below header: Left column (text principles) + Right column (interactive UI card)

### Header Content

1. **Eyebrow Badge**
   - Text: "Governed by Design"
   - Style: Rounded pill badge

2. **H2 Heading**
   - Text: "Governed from within, not bolted on."
   - Style: Large display font with opacity fade on trailing words

3. **Body Paragraph**
   - Text: "Our approach brings AI into everyday banking workflows with the controls and accountability regulated institutions need, whether AI is informing, assisting, or acting on your team's behalf. AI that builds software is different from AI that makes decisions inside it, and we hold that line."

### Left Column — Governance Principles (Tab/Scroll Navigation)

Three principle statements separated by horizontal rule dividers. Each acts as both a clickable tab and a scroll-triggered anchor — clicking or scrolling to a principle reveals its expanded text and the corresponding right-column graphic.

| # | Principle (Tab) | Expanded Text (shown on active) | Right Column Graphic |
|---|-----------|----------------|----------------------|
| 1 | **Inside your rules.** | Start with answers, not actions. AI surfaces what your team needs, and acts only within your permissions. | Permission Actions card |
| 2 | **Explainable by default.** | Every decision is logged, searchable, and auditable, built for the scrutiny a regulator brings. | Audit Log card |
| 3 | **Routine handled, exceptions escalated.** | AI handles the routine and escalates the rest, always with a person on exceptions. | Incoming Queue card |

### Right Column — Permission Actions UI Card (State 1: Default / "Inside your rules")

Rounded container card showing a live permissions action list:

| Action | Role | Policy | Status |
|--------|------|--------|--------|
| Waive overdraft fee | Tier 1 Support | Auto-approve under $35 | **Approved** (green) |
| Increase wire limit to $50K | Tier 1 Support | Requires manager sign-off | **Escalated** (orange) |
| Close account | Tier 1 Support | Not permitted | **Blocked** (grey/red) |

Each action row shows:
- Icon (checkmark for approved, alert for escalated, blocked icon for denied)
- Action name (bold)
- Role + Policy details
- Status badge (color-coded)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Header fades in up, then columns fade in |
| Scroll to "Explainable by default" | Text expands, right column transitions to Audit Log card |
| Scroll to "Routine handled, exceptions escalated" | Text expands, right column transitions to Incoming Queue card |
| Click "Inside your rules" | Scrolls/snaps to state 1, shows Permission Actions card |
| Click "Explainable by default" | Scrolls/snaps to state 2, shows Audit Log card |
| Click "Routine handled, exceptions escalated" | Scrolls/snaps to state 3, shows Incoming Queue card |
| Right column transition | Card crossfades or slides between variants |

---

## 5. Section 4: Adopt at Your Pace — Inform / Assist / Do

**Figma Node:** `17:6766` (Frame 1533216836)

### Layout
- Section header (centered)
- Three tier cards in a 2+1 grid layout:
  - Row 1: Two equal cards side-by-side (Inform + Assist)
  - Row 2: One full-width card (Do) + expansion panel below
- Full-width "Launch intelligent digital banking" card at bottom

### Header Content

1. **Eyebrow Badge**
   - Text: "Adopt at Your Pace"
   - Style: Centered pill badge

2. **H2 Heading**
   - Text: "Inform. Assist. Do. You set the line."
   - Style: Large display font with opacity fade effect on "Do." and "the line."

3. **Body**
   - Text: "AI adoption isn't all or nothing. Every institution moves at its own pace, and Nymbus works the same at every stage, under the same controls."

---

### Card 1: INFORM (Left, Row 1)

**Figma Node:** `17:6777` (LinkComponent)

#### Visual
- Dark gradient background card (animated gradient with grain)
- Chat interface mockup showing a read-only AI conversation

#### Chat UI Mockup Content
- Header: "AI ASSISTANT · READ ONLY"
- User message: "What happened with the Flores account on Tuesday?"
- Timestamp: "Today 11:22 AM"
- AI response: "On Tuesday at 2:14pm, a $4,200 ACH was returned — account closed. The original deposit posted Monday. No action has been taken on the account"
- Footer badge: "No action taken · read only"
- Timestamp: "Today 11:23 AM"

#### Text Below Card
- **Label:** "INFORM"
- **Heading:** "AI surfaces the answer. Your team decides."
- **Body:** "Ask a question or research a transaction. AI explains, and takes no action on its own."

---

### Card 2: ASSIST (Right, Row 1)

**Figma Node:** `17:6809` (LinkComponent)

#### Text Content (above card visual)
- **Label:** "ASSIST"
- **Heading:** "AI drafts the work. Your team approves."
- **Body:** "AI prepares the case and recommends a decision, then routes it for sign-off. A person still owns the outcome."

#### Visual
- Dark gradient background card (animated gradient with grain)
- Draft approval interface mockup

#### Draft UI Mockup Content
- Header: "AI DRAFT · PENDING APPROVAL"
- Draft card: "AI drafted · SAR Filing · Case #4821"
- Detail: "Activity pattern meets filing threshold. Recommended: File SAR with FinCEN."
- Action buttons row:
  - **"Approve & file"** (primary/dark filled)
  - **"Edit draft"** (outline)
  - **"Reject"** (outline)
- Timestamp: "Today 14:11 AM"
- Footer badge: "You own the outcome"

---

### Card 3: DO (Full-width, Row 2)

**Figma Node:** `17:6846` (LinkComponent)

#### Layout
- Full-width card split: Left (gradient card with activity feed) + Right (text content)

#### Left — Activity Feed Visual
- Dark gradient background card
- Header: "AI ACTIVITY · TODAY"
- Activity items (with checkmark icons):

| Activity | Details |
|----------|---------|
| ACH returns processed | 23 items · 6:12 AM |
| Positive Pay cleared | 8 items · 6:14 AM |
| Closure notices sent | 412 accounts · 6:31 AM |
| **Escalated to you** | Wire flagged · $340,000 outbound · outside cleared parameters |

- Escalated item timestamp: "Today 17:01 AM"
- Footer badge: "47 routine · 1 escalated today"

#### Right — Text Content
- **Label:** "DO"
- **Heading:** "AI acts on the routine. Exceptions come to you."
- **Body:** "For the work you've cleared it to handle, AI acts on routine cases and escalates the rest, under the permissions your team already controls."

---

### Bottom Panel: Launch Intelligent Digital Banking

**Figma Node:** `17:6917` (LinkComponent within Container)

#### Layout
- Full-width card with header + platform screenshot below
- External link arrow (top-right corner)

#### Content
- **Heading:** "Launch intelligent digital banking"
- **Link:** "Try the demo →" → /demo/
- **Visual:** Full-width screenshot of the Nymbus digital banking platform UI (dashboard showing accounts, balance chart, transactions)

### Section Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Cards fade in up with ease (staggered) |
| Card hover | Gradient animates/moves within card + subtle lift |
| "Try the demo" click | Navigates to /demo/ |
| External link arrow click | Opens platform demo in new tab |

---

## 6. Section 5: Permissioned Automation — Nymbus MCP

**Figma Node:** `17:6584` (Section)

### Layout
- Two-column: Text left + placeholder illustration right
- Contained within the standard content width

### Content

| Element | Content |
|---------|---------|
| **Label** | "Permissioned Automation" |
| **Heading** | "Nymbus MCP, permissioned end to end." |
| **Body** | "Nymbus MCP connects AI to real banking data and workflows, under permissions, approvals, and a full audit trail. Not a flat file from last night, but a live path to the core, so nothing executes without the sign-off your policy requires." |

### Right Column
- Rounded rectangle placeholder card (grey) — diagram coming, awaiting final visual from design team

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Fade in up with ease |

---

## 7. Section 6: Building the Infrastructure for AI

**Figma Node:** `17:6601` (Section)

### Layout
- Two-column: Visual card left + text content right
- Visual: Debit card with gradient background and grain/noise overlay

### Left Column — Card Visual
- Rounded container with animated gradient background (blues, purples, warm tones)
- Grain/noise texture overlay
- Debit card element:
  - Status: "Active"
  - Bank name: "bankname" (placeholder)
  - Card number: "•••• 8847"
  - Network: Visa Debit logo

### Right Column — Text Content

| Element | Content |
|---------|---------|
| **Label** | "Building the Infrastructure for AI" |
| **Heading** | "From model to banking outcome." |
| **Body** | "Applied AI builds the infrastructure that turns models into governed, operational workflows, and drives real banking outcomes. It's the integration work that separates AI that changes how a bank operates from AI that only demos well." |
| **Link** | "Let's move →" |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Fade in up with ease |
| Card gradient | Subtle animation / movement (grain on top of moving gradient) |
| Link hover | Arrow grows with ease |

---

## 8. Section 7: Footer CTA

**Figma Node:** `17:6932` (FooterCTAGuide)

### Layout
- Full-width section with dramatic gradient background
- Vertical stripe pattern overlay (consistent with hero)
- 3D chrome blob in right area
- Centered headline + CTA button

### Content
- **Heading:** "AI YOUR INSTITUTION CAN PUT INTO PRODUCTION."
- **CTA Button:** "Get a demo" (dark/specular style) → /demo/ or /contact/

### Visual Elements
- Dark-to-light gradient background (left-to-right fade, blues and purples on right)
- Vertical stripe overlay pattern
- Large chrome/glass 3D blob (right side)
- Grain/noise texture

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Text fades in up |
| Background | Gradient subtly animates |
| CTA hover | Specular button effect / arrow grows |

---

## 9. Section 8: Footer

**Figma Node:** `17:6987` (Footer instance)

### Layout
- Standard site-wide footer (shared component)
- Multi-column link grid
- Logo + legal line at bottom

### Navigation Columns

| Platform | Managed Services | Solutions | Resources | Company |
|----------|-----------------|-----------|-----------|---------|
| Digital Banking | Savings Studio | Fraud Intelligence | Insights | About/Mission |
| Digital Banking | Community | Decentralized | AI | Press |
| Account Opening | Marketing | Servicing (nymbus) | — | Technology |
| Onboard | Compliance | Branches at banking | — | Productivity |
| Headless | Travel | Fraud detection | — | — |
| Nymbus MCP | Board Chat | Financial banking | — | — |
| Tech(Nymbus) | Sales | Personal banking | — | — |
| Credits | Labor | Retirement | — | — |
| — | — | Commercial banking | — | — |

### Footer Bottom
- Nymbus logo (chevron mark)
- Copyright: "© 2018 NYMBUS. All rights reserved."
- Address line
- Social icons (LinkedIn, X/Twitter)

---

## 10. Governed by Design — Variant States

The "Governed by Design" section uses a tab/scroll-triggered pattern to cycle through three states. Each governance principle on the left acts as both a clickable tab and a scroll anchor. When active, the principle expands to show its supporting text and the right-column card transitions to the corresponding graphic.

### Variant A: Audit Log View (Active state: "Explainable by default")

**Figma Node:** `17:6458`

Right-column card shows a searchable audit log:

- **Search bar:** "Search audit log..."
- **Entry 1:**
  - Title: "Fee reversal approved"
  - Date: Jul 18, 2026 · 10:42 AM
  - Reasoning: Fee charged in error; account within 30-day grace period. Amount: $29.00
  - Approver: **AI (auto)** · Policy: **Grace-period waiver** · Ref: **#AUD-2847**

- **Entry 2:**
  - Title: "Wire transfer escalated"
  - Date: Jul 18, 2026 · 9:17 AM
  - Reasoning: Amount exceeds Tier 1 limit ($25K). Routed to Ops Manager queue.
  - Approver: **Pending (human)** · Policy: **Wire-limit governance** · Ref: **#AUD-2846**

- **Entry 3:**
  - Title: "Dispute case auto-filed"
  - Date: Jul 17, 2026 · 3:51 PM
  - Reasoning: Reg E provisional credit issued; merchant notified. Amount: $142.50
  - Approver: **AI (auto)** · Policy: **Reg-E fast-track** · Ref: **#AUD-2845**

**Left column text for this variant:**
- Inside your rules.
- **Explainable by default.** — "Every decision is logged, searchable, and auditable, built for the scrutiny a regulator brings."
- Routine handled, exceptions escalated.

---

### Variant B: Incoming Queue View (Active state: "Routine handled, exceptions escalated")

**Figma Node:** `17:6526`

Right-column card shows an incoming operations queue:

- **Header:** "INCOMING QUEUE"
- **Item 1:**
  - Title: "Address change request"
  - Detail: Verified identity · Policy match
  - Status: **Auto-cleared** (green badge)

- **Item 2:**
  - Title: "Card replacement — lost"
  - Detail: Standard request · No flags
  - Status: **Auto-cleared** (green badge)

- **Item 3:**
  - Title: "Fee inquiry — monthly maintenance"
  - Detail: Auto-explain · No action needed
  - Status: **Auto-cleared** (green badge)

- **Item 4:**
  - Title: "Large ACH return — $12,400"
  - Detail: Exceeds auto-clear threshold · Manual review required
  - Status: **→ Human** (yellow/orange badge)

**Left column text for this variant:**
- Inside your rules.
- Explainable by default.
- **Routine handled, exceptions escalated.** — "AI handles the routine and escalates the rest, always with a person on exceptions."

---

## Appendix: Page Narrative & Positioning

The AI page tells a deliberate story that differentiates Nymbus from generic AI marketing:

| Beat | Message | Emotional Job |
|------|---------|---------------|
| Hero | AI that answers to permissions, approvals, and audit | Establish trust — this isn't reckless AI |
| Strategy Band | Agents are a task, not a strategy | Reframe the market — competitors do tactics, Nymbus does strategy |
| Governed by Design | Governed from within, not bolted on | Core differentiator — governance is native, not an afterthought |
| Adopt at Your Pace | Inform → Assist → Do, you set the line | Lower the barrier — adoption is gradual and controlled |
| Permissioned Automation | MCP, permissioned end to end | Technical credibility — live connection to core, full audit trail |
| Infrastructure for AI | From model to banking outcome | Practical value — this drives real operational results |
| Footer CTA | AI your institution can put into production | Close the loop — production-ready, not a demo |

---

## Appendix: Cross-Page Navigation

| From | CTA | Destination |
|------|-----|-------------|
| Hero | "Get a demo" | /demo/ or /contact/ |
| Hero | "Talk to an expert" | /contact/ |
| Adopt at Your Pace | "Try the demo →" | /demo/ |
| Infrastructure for AI | "Let's move →" | /ai/ |
| Footer CTA | "Get a demo" | /demo/ or /contact/ |

---

## Open Questions

_All original questions resolved — none remaining._
