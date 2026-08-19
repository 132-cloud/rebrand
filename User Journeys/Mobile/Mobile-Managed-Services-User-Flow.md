# Mobile Managed Services Page — User Flow & Journey

**Source:** Figma Dev Hand-off — Managed Services - Mobile (Node 281:6260)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=281-6260  
**Page Figma Node:** `281:6260` (428 × 17012)  
**Proposed URL:** /managed-services/ (responsive — same URL as desktop)  
**Last Updated:** August 12, 2026  
**Design Lead:** Sarah Schaper  
**Desktop Reference:** [Managed Services User Flow](../Managed-Services-User-Flow.md)

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Mobile Navigation Header](#3-mobile-navigation-header)
4. [Section 1: Hero](#4-section-1-hero)
5. [Section 2: Stats Band](#5-section-2-stats-band)
6. [Section 3: We Run the Work / You Keep Control](#6-section-3-we-run-the-work--you-keep-control)
7. [Section 4: Meet the Team (Service Category)](#7-section-4-meet-the-team-service-category)
8. [Section 5: Customer Quote](#8-section-5-customer-quote)
9. [Section 6: Digital Onboarding](#9-section-6-digital-onboarding)
10. [Section 7: Every Operation, Already Handled](#10-section-7-every-operation-already-handled)
11. [Section 8: Reporting](#11-section-8-reporting)
12. [Section 9: Footer CTA](#12-section-9-footer-cta)
13. [Section 10: FAQ Accordion](#13-section-10-faq-accordion)
14. [Section 11: Resources](#14-section-11-resources)
15. [Section 12: Footer](#15-section-12-footer)
16. [Mobile Animations & Interactions](#16-mobile-animations--interactions)
17. [User Flow Diagram](#17-user-flow-diagram)
18. [Open Questions](#18-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Managed Services page adapts the desktop's 1512 × ~12208px layout into a 428 × 17012px mobile experience. This is the longest mobile page in the site — taller than the desktop — due to the stacking of the rich operational detail sections. All 12 sections are preserved.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation |
|-----------------|-------------------|
| Two-column "We Run the Work" header + 3-column cards | Single column: heading → body → 3 stacked feature cards |
| Multi-card horizontal carousel (Meet the Team, 6 cards) | Single expanded card shown (scrollable or swipe); "Learn more" links preserved |
| Two-column digital onboarding (left auto-approve, right manual review) | Stacked: heading → body → left phone mockup → right phone mockup |
| Alternating 3-row "Every Operation" layout | Stacked single-column rows |
| 3-column resource cards | 2 stacked resource cards (only 2 shown on mobile) |
| Large desktop dashboard UI previews | Same UI preview cards scaled to 396px width |
| Hero uses white Nav (light) | Mobile keeps white/light nav treatment consistent with desktop |

### Mobile Typography Scale

| Style | Desktop | Mobile |
|-------|---------|--------|
| H1 (Hero) | Large display | 56px / 60px LH, all-caps |
| H2 (Section heads) | Large display | 42px / 48px LH |
| Body | 18px / 28px LH | 16px / 28px LH |
| Eyebrow badge | 14px, all-caps | 14px, all-caps |
| CTA | 14px / 22px LH | 14px / 22px LH |

---

## 2. Page Structure & Scroll Journey

**Figma Node:** `281:6260` (Managed Services - Mobile)  
**Dimensions:** 428 × 17012px

| # | Section | Approx Y | Figma Node | Mobile Adaptation |
|---|---------|----------|------------|-------------------|
| 1 | Navigation Header | 0–87 | `302:8077` | White/light nav (Nav Mobile White) |
| 2 | Hero | 0–825 | `281:6264` / `281:6457` | Eyebrow + headline + body + CTA stacked |
| 3 | Stats Band | 825–1213 | `281:6475` | 2 stats stacked vertically |
| 4 | We Run the Work / Control | 1213–2731 | `281:6489` | Single-column: header → 3 feature cards |
| 5 | Meet the Team | 2731–4092 | `281:6526` | Contact center card with chat UI + 6 nav labels |
| 6 | Customer Quote | 4092–4716 | `281:6274` | Full-width dark card with quote |
| 7 | Digital Onboarding | 4721–7005 | `281:6574` | Eyebrow + header → 2 phone mockup sections |
| 8 | Every Operation, Already Handled | 7005–9657 | `281:6742` | Header → 3 stacked feature rows with UI dashboards |
| 9 | Reporting | 9657–10230 | `281:6467` | Eyebrow + heading + body (text only) |
| 10 | Footer CTA | 10230–10910 | `281:6280` | Dark gradient card: heading + body + CTA |
| 11 | FAQ Accordion | 10910–14460 | `281:6323` | 10 items, full-width, all collapsed |
| 12 | Resources | 14460–15937 | `281:6297` | 2 stacked resource cards |
| 13 | Footer | 15937–17012 | `281:7179` | Mobile Footer instance |

---

## 3. Mobile Navigation Header

**Figma Node:** `302:8077` (Nav Mobile White instance)

- **White/light variant** — this page uses the white nav, unlike most solution pages that use the dark variant
- Full-width, 428 × 87px
- See: [Mobile Header Navigation User Flow](Mobile-Header-Navigation-User-Flow.md)

| Element | Behavior |
|---------|----------|
| Logo (Nymbus) | Tap → / |
| Hamburger icon | Tap → full-screen mobile menu |

---

## 4. Section 1: Hero

**Figma Nodes:** `281:6264` (background "105"), `281:6457` (content frame)

### Layout
- Full-width dark gradient background with organic elliptical shapes (same treatment as homepage dark hero)
- 3D chrome blob element in upper-right area
- Content centered in 394px container with 20px side padding

### Content

- **Eyebrow badge:** "MANAGED SERVICES" (200×46px rounded pill, semi-transparent white bg)
- **Headline:** "WE DON'T JUST DEPLOY IT. WE RUN IT."
  - Style: 56px bold, all-caps, centered, white, blur-dissolve-on-load
- **Body:** "The team that builds your operations runs them too. Every fix, efficiency, and workflow we find goes straight back into the platform powering your institution."
  - Style: 16px, centered, white
- **CTA:** "Talk to an expert" (300×45px, black with white border) → /contact/

### Mobile Differences from Desktop
- Desktop uses a "Book a Demo"-style single CTA; mobile uses "Talk to an expert" with the white-bordered button style
- Headline caps at 56px (vs large desktop display size)
- Eyebrow pill matches desktop treatment (semi-transparent bg)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Headline resolves from blur (blur-dissolve-on-load) |
| CTA tap | Navigate to /contact/ |

---

## 5. Section 2: Stats Band

**Figma Node:** `281:6475` (Frame 37, 428×388)

### Layout
- Light/white background
- 2 stat rows stacked vertically (each 94px tall, bordered top)
- Each row: large number on left + label text on right

### Content

| Stat | Label |
|------|-------|
| **6** | Operational domains run behind your brand |
| **140K** | Customers supported |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Numbers count up (https://reactbits.dev/text-animations/count-up) |
| Fade in | Stats fade in up with ease |

---

## 6. Section 3: We Run the Work / You Keep Control

**Figma Node:** `281:6489` (Container, 428×1518)

### Layout
- Section heading + body (single column, centered)
- 3 feature cards stacked vertically (not 3-column grid as desktop)
- Each card: icon (top-left) + heading + body text

### Header Content
- **Heading:** "We run the work. You keep control." (42px bold, centered)
- **Body:** "Outsourcing the operation should not mean giving up oversight. You define the rules. Nymbus executes inside them." (16px)

### Feature Cards (3 stacked, ~350px each)

| # | Figma Node | Title | Body |
|---|-----------|-------|------|
| 1 | `281:6495` | You keep regulatory ownership. | Nymbus executes and manages the operational controls. Your institution retains regulatory responsibility, risk management, and oversight of everything run on your behalf. |
| 2 | `281:6506` | You set the thresholds. | Define approval limits, decisioning criteria, and exception rules. Nymbus operates to them and escalates anything above your thresholds instead of acting alone. |
| 3 | `281:6516` | Automation runs inside your rules. | Where Nymbus applies AI to operational work, it runs on your products, limits, and settings, under the same permissions, approvals, and audit trail your team controls. |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Cards fade in up staggered |

---

## 7. Section 4: Meet the Team (Service Category)

**Figma Node:** `281:6526` (Container, 428×1361)

### Layout
- Section heading + body (single column)
- Dark card with ambient gradient (550px tall photo/illustration area)
- "Contact center and member support" category with "Learn more →" link
- 6 colored bar blocks below (representing 6 service categories — likely a visual indicator for the carousel)
- Chat bubble UI overlaid on the dark card area

### Header Content
- **Heading:** "Meet the team that runs your operations." (42px bold)
- **Body:** "One team across every operation, staffed by Nymbus and running behind your brand, so you scale without standing up a back office." (16px)

### Visible Service Category
- **Title:** "Contact center and member support"
- **Link:** "Learn more →" → /managed-services/#contact-center

### Chat UI Preview (on the dark card)
- Message 1 (member): "My direct deposit didn't hit, it's supposed to be today."
- Message 2 (agent): "I see it, it's pending and will post by 5pm. Want me to send a confirmation?"

### 6 Category Bar Blocks (below the card)
Visual indicators for the 6 service domains — appear as colored rectangular blocks:
1. Contact center and member support
2. Application onboarding, KYC and KYB
3. Back-office processing and reconciliation
4. Risk, compliance and BSA/AML support
5. Fraud monitoring, disputes and response
6. Business and commercial banking operations

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Card fades in, category bars animate in staggered |
| "Learn more" tap | Navigate to /managed-services/#contact-center |
| Category bar tap | Navigate to or reveal that service's detail (TBD — see Open Questions) |

---

## 8. Section 5: Customer Quote

**Figma Node:** `281:6274` (Frame 1533216800, 428×624)

### Layout
- Full-width dark card with ambient gradient background
- Centered quote text
- Attribution line below

### Content
- **Quote:** "This is the most user-friendly banking system I've ever trained on. fast, simple and intuitive."
- **Attribution:** Aleda DeMaria, Executive VP, COO, PeoplesBank

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Quote fades in up with ease |
| Display | Single static quote (no carousel) |

---

## 9. Section 6: Digital Onboarding

**Figma Node:** `281:6574` (GovernedAISectionGuide, 429×2284)

### Layout
- Eyebrow badge + heading + body (centered column)
- Two sub-sections stacked: left phone mockup content above, right phone mockup content below
- Each sub-section: heading → body → phone UI mockup (226×494px scaled to fit)

### Header Content
- **Eyebrow badge:** "DIGITAL ONBOARDING"
- **Heading:** "Every application, decisioned in seconds."
- **Body:** "Nymbus scores every application the moment it is submitted and routes it automatically, so clean applicants get through fast and edge cases get worked by people, not left in a queue."

### Sub-Section 1: Auto-Approve Path

**Figma Node:** `281:6583` (Frame 1533216806 — upper)

- **Heading:** "Auto-approve, auto-deny, or refer."
- **Body:** "Socure ID+ scores each application on intake and routes it to one of three outcomes, so clean applicants are approved without anyone touching the file."
- **Phone UI Preview:** "Application approved" screen
  - Bank logo ("Placeholder Bank")
  - Large checkmark in circle
  - "Application approved"
  - "Account opening in progress"
  - Progress bar at 100% — "Setting up your account · 100%"
  - Badge: "Decision made in 4 seconds"
  - CTA: "Continue to your account"

### Sub-Section 2: Manual Review Path

**Figma Node:** `281:6664` (Frame 1533216783 — lower)

- **Heading:** "Every refer, worked end to end."
- **Body:** "The onboarding team runs manual review, document and selfie verification, and fraud coordination on flagged cases, so a referred application clears with a decision, not a delay."
- **Phone UI Preview:** "Under review" screen
  - Bank logo ("Placeholder Bank")
  - Review/loading icon
  - "We're reviewing your application"
  - "One of our specialists is verifying your documents"
  - Badge: "Est. time: under 2 hours"
  - CTA: "We'll notify you"

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Sections fade in up staggered |
| Phone mockups | Static (no interactive state on mobile) |

---

## 10. Section 7: Every Operation, Already Handled

**Figma Node:** `281:6742` (GovernedAISectionGuide, 429×2652)

### Layout
- Eyebrow badge + heading + body (centered)
- 3 feature sub-sections stacked vertically
- Each sub-section: icon + heading + body + UI dashboard card

### Header Content
- **Eyebrow badge:** "REPORTING" (appears to be a label reuse — see Open Questions)
- **Heading:** "Every operation, already handled."
- **Body:** "Reconciliation, fraud response, and compliance monitoring run every day, behind your brand, without your team working the queue."

### Sub-Section 1: Back Office

**Figma Node:** `281:6751` (Frame 1533216809)

- **Heading:** "Back office runs without you."
- **Body:** "Digital Operations reconciles GLs daily, posts and matches every card transaction to Core, and works ACH files, Positive Pay, and exceptions, so nothing sits unbalanced."
- **Dashboard UI:** End-of-day operations summary card
  - Header: "End-of-day operations · Wed, Jul 29" / "Daily reconciliation complete" / "2,814 transactions posted · General ledger balanced"
  - Metrics grid: Transactions (2,814 — All posted) | GL variance ($0.00 — Balanced) | ACH file (Processed — Batch #0729) | Exceptions (0 — Outstanding)
  - Overnight batch list: ACH file processed (0 exceptions) | Positive Pay reviewed (All items cleared) | General ledger balanced (Balanced)
  - Footer: "Completed automatically — Completed 6:43 AM — before anyone arrived" | "No action required"

### Sub-Section 2: Fraud

**Figma Node:** `281:6859` (Frame 1533216810)

- **Heading:** "Fraud is worked, not just flagged."
- **Body:** "The fraud team investigates disputes under Reg E and NACHA, works suspicious activity, and manages card rules and CAMS alerts, so cases close, not just open."
- **Dashboard UI:** Fraud & disputes case management table
  - Header: "Fraud & disputes · case management" / "Cases close, not just open" / "3/3 Resolved today"
  - Case #3847 — Reg E Dispute · $212.00 → Filed → Investigated → Provisional credit → **Closed**
  - Case #3901 — SAR Filing · CAMS alert → Flagged → Assigned → Reviewed → **Filed**
  - Case #3912 — Suspicious Activity · Card rule triggered → Detected → Worked → **Resolved**
  - Footer: "Every open case reaches a documented resolution — no alert left standing."

### Sub-Section 3: Compliance

**Figma Node:** `281:7061` (Frame 1533216811)

- **Heading:** "Compliance is monitored, not filed away."
- **Body:** "Compliance tracks regulatory change, handles complaints, subpoenas and levies, screens against OFAC, and shares findings on your program as they surface."
- **Dashboard UI:** Risk & compliance monitoring feed
  - Header: "Risk & compliance · monitoring" / "Compliance activity feed" / "Live · updated 2 min ago"
  - OFAC screen · 847 customers · 0 matches — Sanctions · Today, 6:00 AM → **Running**
  - Regulatory update · BSA reporting threshold change — Reg change · Assigned 1h ago → **Under review**
  - Complaint #441 · Resolution letter sent — Consumer · Closed today → **Resolved**
  - Subpoena response · Documents delivered to counsel — Legal · Closed today → **Case closed**
  - Exam prep · Q4 findings report — Regulatory exam · Due Nov 14 → **In progress**

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Sub-sections fade in up staggered |
| Dashboard cards | Static UI mockups (no interaction) |

---

## 11. Section 8: Reporting

**Figma Node:** `281:6467` (GovernedAISectionGuide, 429×573)

### Layout
- Eyebrow badge + heading + body text (single column, text only — no visual)

### Content
- **Eyebrow badge:** "REPORTING"
- **Heading:** "Know what is running, every month."
- **Body:** "Monthly reporting on support, complaints, and fraud, plus a quarterly dispute report, keeps you current on your program. Enhanced, client-specific reporting is available as an add-on."

### Interactions
- Scroll in: fades in up with ease

---

## 12. Section 9: Footer CTA

**Figma Node:** `281:6280` (Frame 1533216815, 580×680)

### Layout
- Full-width dark gradient background (same organic ellipse treatment as hero)
- 42px bold all-caps heading (white, blur effect)
- Body text below
- CTA button centered

### Content
- **Heading:** "THE TEAM THAT BUILDS YOUR OPERATIONS RUNS THEM TOO."
  - Style: 42px bold all-caps, white, blur-dissolve-on-load
- **Body:** "See how Nymbus operates the back office behind your products, run by the team that built it."
- **CTA:** "Talk to an expert" (300×45px) → /contact/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Heading resolves from blur, content fades in |
| CTA tap | Navigate to /contact/ |

---

## 13. Section 10: FAQ Accordion

**Figma Node:** `281:6323` (Frame 2147238568, 428×3550)

### Layout
- Section title: "FAQs" (42px bold, blur-dissolve-on-load)
- 10 accordion items (394px wide, 20px gaps between)
- Each item: question (24px bold) + answer (16px) + × icon
- Total section height: 3550px (longest FAQ section on mobile)

### FAQ Items (10 questions — managed services-specific)

| # | Question | Answer |
|---|----------|--------|
| 1 | What are Nymbus Managed Services? | A shared-services operation, built and run by Nymbus, covering six domains behind your brand: the Digital Experience Center (member and business support), Digital Onboarding, Digital Operations, Risk and Compliance, Fraud Operations, and Business-Specific Support. |
| 2 | How does the shared-services model work? | Nymbus executes and manages the operational processes in alignment with the policies and procedures your institution defines. Your institution retains ultimate responsibility for regulatory compliance, risk management, and oversight of the work run on your behalf. |
| 3 | Do we keep control of compliance and risk? | Yes. Your institution retains regulatory responsibility and program ownership. Nymbus executes the operational work under your policies and escalates anything requiring your decision. |
| 4 | Can we set our own approval thresholds and decisioning rules? | Yes. Client-defined thresholds govern fee reimbursements, mobile deposit and payment limit increases, ACH exception decisioning, MRDC pay/return/refer criteria, and Positive Pay exception handling. Nymbus operates to those thresholds and escalates anything above them. |
| 5 | How does application onboarding and decisioning work? | Every application is scored on intake by Socure ID+ and routed to one of three outcomes: auto-approve, auto-deny, or refer. Referred applicants receive a document and selfie verification link (Socure DocV) that expires in 72 hours, and referred cases are reviewed manually by the Onboarding team against your KYC rules. |
| 6 | Can Nymbus support business and commercial accounts? | Yes. Business Digital Onboarding runs KYC on individual signers and beneficial owners through Socure ID+, and KYB verification through Socure and Middesk. Ongoing servicing includes ACH origination and Positive Pay enrollment, wire transfer support, secondary-user access management, and business-account maintenance. |
| 7 | Who does what: Nymbus vs. your team? | Nymbus runs the day-to-day operational work across six areas: the Digital Experience Center, digital onboarding, digital operations, risk and compliance, fraud operations, and business-specific support. We execute against the policies, thresholds, and decisioning rules you define. |
| 8 | Is customer support provided under our brand? | Yes. The Digital Experience Center handles inbound and outbound calls, secure messaging through your online and mobile banking platform, and email during your business hours, all under your brand. |
| 9 | How are fraud disputes handled? | The Fraud team investigates ACH, P2P, Bill Pay, and debit card disputes under Regulation E and NACHA rules, coordinating with DXC on intake and Digital Operations on money movement. Suspicious activity of $5,000+ is escalated to your institution via a USA ticket with investigation details. |
| 10 | What reporting do we receive? | Monthly reporting covers support statistics (phone, chat, email), complaints, and fraud. A quarterly report covers debit card disputes. Enhanced, client-specific reporting and QA visibility are available as an additional service. |

### Mobile-Specific Notes
- Questions wrap significantly more than desktop at 394px width
- Question heights range from 245–375px (much taller than solution page FAQs)
- Accordion behavior: only one item open at a time (per desktop spec)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Tap question row | Toggles answer (expand/collapse) |
| Expand animation | Slide down, 300ms ease |
| Icon | × rotated 45° |
| Default state | All collapsed |
| Scroll in | Section fades in, "FAQs" heading resolves from blur |

---

## 14. Section 11: Resources

**Figma Node:** `281:6297` (Frame 2085665000, 428×1477)

### Layout
- Section heading (42px bold, centered)
- **2 resource cards stacked vertically** (not 3 as on desktop)
- Each card: thumbnail image (396×256px, rounded 20px) → type badge → title → metadata line

### Header Content
- **Heading:** "More on how managed services work, from the people who run them."

### Resource Cards (2 on mobile vs 3 on desktop)

| # | Type | Title | Metadata |
|---|------|-------|----------|
| 1 | Article | Strategies for seamless digital transformation in traditional banks | Aug 2, 2026 · 8 min read |
| 2 | Whitepaper | The economics of parallel core deployment | Aug 2, 2026 · 8 min read |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Cards fade in up staggered |
| Card tap | Navigate to resource page |

---

## 15. Section 12: Footer

**Figma Node:** `281:7179` (Mobile Footer Ad instance, 428×1075)

Shared mobile footer component.  
See: [Mobile Footer User Flow](Mobile-Footer-User-Flow.md)

---

## 16. Mobile Animations & Interactions

### Global Mobile Animation Rules

| Animation | Mobile Behavior | Reference |
|-----------|----------------|-----------|
| Scroll reveal | Fade in up with ease | Global |
| Blur-dissolve | Resolves on load / scroll into viewport | Site-wide pattern |
| Count-up stats | Triggered on scroll into viewport | https://reactbits.dev/text-animations/count-up |
| Button tap | Specular highlight on press | https://reactbits.dev/components/specular-button |
| FAQ expand | Slide down 300ms ease | — |
| Dashboard UI cards | Static (no interaction) | — |
| Phone mockups | Static (no animation on mobile) | — |

### Touch Target Minimums
- All CTAs: 300×45px (hero + footer CTA)
- FAQ rows: full-width tap area
- Nav hamburger: 44×44px minimum
- "Learn more" links: minimum 44px height

### Removed Desktop Interactions
- No hover states
- Meet the Team carousel arrows removed (tap-through or swipe only)
- No sticky positioning

---

## 17. User Flow Diagram

```
[User arrives at /managed-services/ on mobile]
        |
        v
[Hero — "We Don't Just Deploy It. We Run It."]
  - Eyebrow badge: MANAGED SERVICES
        |
        +---> [Tap: Talk to an expert] ---> /contact/
        |
        v (scroll)
[Stats Band — 6 domains, 140K customers]
  (count-up animation on scroll)
        |
        v (scroll)
[We Run the Work / You Keep Control]
  3 stacked control pillars:
  - You keep regulatory ownership
  - You set the thresholds
  - Automation runs inside your rules
        |
        v (scroll)
[Meet the Team — Contact Center card]
  Chat UI preview
  6 service category bars
        +---> [Tap: Learn more] ---> /managed-services/#contact-center
        |
        v (scroll)
[Customer Quote — Aleda DeMaria / PeoplesBank]
  Single static quote
        |
        v (scroll)
[Digital Onboarding — eyebrow: DIGITAL ONBOARDING]
  Phone mockup 1: Auto-approve path
  Phone mockup 2: Manual review path
        |
        v (scroll)
[Every Operation, Already Handled — eyebrow: REPORTING]
  1. Back office dashboard UI (GL reconciliation)
  2. Fraud case management UI
  3. Compliance monitoring feed
        |
        v (scroll)
[Reporting — eyebrow: REPORTING]
  "Know what is running, every month."
  (text only)
        |
        v (scroll)
[Footer CTA — "The Team That Builds Your Operations Runs Them Too."]
        +---> [Tap: Talk to an expert] ---> /contact/
        |
        v (scroll)
[FAQ Accordion — 10 questions, all collapsed]
        +---> [Tap any FAQ] ---> Expands/collapses answer
        |
        v (scroll)
[Resources — 2 stacked cards]
        +---> [Tap card 1: Article] ---> Article page
        +---> [Tap card 2: Whitepaper] ---> Whitepaper page
        |
        v
[Mobile Footer]
```

---

## 18. Open Questions (All Resolved)

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Meet the Team — category bar interaction | ✅ RESOLVED: **Decorative only** — category bars are visual indicators, not tappable. "Learn more" link is the sole tap target. |
| 2 | "Every Operation" section eyebrow | ✅ RESOLVED: **Copy error in Figma** — eyebrow should read "OPERATIONS" (not "REPORTING"). |
| 3 | Resources — 2 vs 3 cards | ✅ RESOLVED: **Intentional curation** — mobile shows 2 resource cards to reduce scroll. Not a missing card. |
| 4 | CTA label change | ✅ RESOLVED: **Intentional mobile CTA** — "Talk to an expert" is correct for mobile. More direct conversion language for mobile context. |

