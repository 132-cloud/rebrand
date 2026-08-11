# Managed Services Page — User Flow & Journey

**Source:** Figma Dev Hand-off — Managed Services (Node 1:7)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=1-7  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Global Animations](#2-global-animations)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Stats Band](#4-section-2-stats-band)
5. [Section 3: We Run the Work / Control](#5-section-3-we-run-the-work--you-keep-control)
6. [Section 4: Meet the Team (Service Categories)](#6-section-4-meet-the-team-service-categories)
7. [Section 5: Customer Quote](#7-section-5-customer-quote)
8. [Section 6: Digital Onboarding](#8-section-6-digital-onboarding)
9. [Section 7: Every Operation, Already Handled](#9-section-7-every-operation-already-handled)
10. [Section 8: Reporting](#10-section-8-reporting)
11. [Section 9: Footer CTA](#11-section-9-footer-cta)
12. [Section 10: FAQs](#12-section-10-faqs)
13. [Section 11: Resources](#13-section-11-resources)
14. [Section 12: Footer](#14-section-12-footer)
15. [Service Category Cards — Detailed UI](#15-service-category-cards--detailed-ui)

---

## 1. Page Overview & Scroll Journey

The Managed Services page is a single continuous scroll page (1512px wide, ~12208px tall) that positions Nymbus as a fully operational partner — not just a platform vendor. The narrative builds from value proposition through proof points, operational detail, and social proof to conversion.

**Scroll Order (top to bottom):**

| # | Section | Figma Node | Purpose |
|---|---------|-----------|---------|
| 1 | Navigation (light) | `17:6210` | Global nav, persistent |
| 2 | Hero | `17:6191` / `17:6201` | Value proposition |
| 3 | Stats Band | `17:6244` | Proof metrics |
| 4 | We Run the Work | `17:5579` | Control messaging (3 pillars) |
| 5 | Meet the Team (Carousel) | `17:5452` | Service categories + UI previews |
| 6 | Customer Quote | `17:6211` | Social proof |
| 7 | Digital Onboarding | `17:5615` / `17:5624` | Onboarding workflow detail |
| 8 | Every Operation, Already Handled | `17:5534` | 3 feature rows (back office, fraud, compliance) |
| 9 | Reporting | `17:6219` | Monthly reporting overview |
| 10 | Footer CTA | `17:6226` | Conversion section |
| 11 | FAQs | `17:5349` | 10 expandable Q&A items |
| 12 | Resources | `17:5497` | 3 content cards |
| 13 | Footer | `17:6272` | Navigation + legal |

---

## 2. Global Animations

Consistent with the homepage, the following animations apply across the Managed Services page:

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Scroll reveal | All components fade in up with ease on scroll | Global pattern |
| Number count-up | Stats count up on scroll into view | https://reactbits.dev/text-animations/count-up |
| Background grain | Grain texture on dark sections / cards | https://reactbits.dev/backgrounds/grainient |
| Button hover | Arrow grows with ease on hover | Global pattern |
| Button style | Specular button style (black) | https://reactbits.dev/components/specular-button |
| Card hover | Drop shadow and ease of movement | Global pattern |

---

## 3. Section 1: Hero

**Figma Nodes:** `17:6191` (background frame "105"), `17:6201` (content "Paragraph")

### Layout
- Full-width dark gradient background with organic elliptical shapes (same style as homepage hero)
- 3D chrome blob shape in top-right area
- Centered content container
- Light navigation bar overlaid at top (`17:6210`)

### Content Stack (top to bottom)

1. **Eyebrow Badge**
   - Text: "Managed services"
   - Style: Rounded pill, dark background (node `17:6202`)

2. **H1 Headline**
   - Text: "We don't just deploy it. We run it."
   - Size: Large display heading (841px container width)

3. **Body Text**
   - Text: "The team that builds your operations runs them too. Every fix, efficiency, and workflow we find goes straight back into the platform powering your institution."

4. **CTA Button**
   - Component: Button 5 (specular style) inside `17:6207`
   - Action: Primary conversion (likely → /contact/ or schedule demo)

### Interactions & Animations

| Trigger | Behavior |
|---------|----------|
| Page load | Content fades in |
| Scroll | Parallax on background ellipses |
| CTA hover | Arrow grows with ease, specular button effect |
| Chrome blob | Ambient floating animation |

---

## 4. Section 2: Stats Band

**Figma Node:** `17:6244` (Section)

### Layout
- Light background
- 2 large stat columns, centered
- Each stat: large number + descriptive text below

### Content

| Stat | Label |
|------|-------|
| 6 | Operational domains run behind your brand |
| 140K | Customers supported |

### Interactions & Animations

| Trigger | Behavior |
|---------|----------|
| Scroll into view | Numbers count up animation |
| Fade in | Stats fade in up with ease |

---

## 5. Section 3: We Run the Work / You Keep Control

**Figma Node:** `17:5579` (Frame 1533216788)

### Layout
- Two-column header: left bold heading, right supporting text
- 3 equal-width feature cards below

### Header Content
- **Heading:** "We run the work. You keep control."
- **Body:** "Outsourcing the operation should not mean giving up oversight. You define the rules. Nymbus executes inside them."

### Feature Cards

| # | Icon Node | Title | Description |
|---|-----------|-------|-------------|
| 1 | `17:5584` | You keep regulatory ownership. | Nymbus executes and manages the operational controls. Your institution retains regulatory responsibility, risk management, and oversight of everything run on your behalf. |
| 2 | `17:5595` | You set the thresholds. | Define approval limits, decisioning criteria, and exception rules. Nymbus operates to them and escalates anything above your thresholds instead of acting alone. |
| 3 | `17:5605` | Automation runs inside your rules. | Where Nymbus applies AI to operational work, it runs on your products, limits, and settings, under the same permissions, approvals, and audit trail your team controls. |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Cards fade in up staggered |
| Card hover | Subtle lift/shadow |

---

## 6. Section 4: Meet the Team (Service Categories)

**Figma Node:** `17:5452` (Frame 1533216799)

### Layout
- Two-column header: left bold heading, right supporting text
- Full-width image/carousel area with clickable category cards
- Each card contains a real UI preview showing the service in action

### Header Content
- **Heading:** "Meet the team that runs your operations."
- **Body:** "One team across every operation, staffed by Nymbus and running behind your brand, so you scale without standing up a back office."

### Service Category Cards (6 total, displayed in a scrollable carousel)

| # | Category | Icon Node | "Learn more" Link | UI Preview |
|---|----------|-----------|-------------------|------------|
| 1 | Contact center and member support | `17:5261` | /managed-services/#contact-center | Chat conversation (deposit inquiry) |
| 2 | Application onboarding, KYC and KYB | `17:5294` | /managed-services/#onboarding | KYB review status card |
| 3 | Back-office processing and reconciliation | `17:5320` | /managed-services/#back-office | Reconciliation notification |
| 4 | Risk, compliance and BSA/AML support | `17:5270` | /managed-services/#risk-compliance | BSA alert escalation card |
| 5 | Fraud monitoring, disputes and response | `17:5305` | /managed-services/#fraud | Dispute under-review card |
| 6 | Business and commercial banking operations | `17:5336` | /managed-services/#business-banking | Account onboarding progress |
| 7 | Chat (authenticated and unauthenticated) | `17:5285` | /managed-services/#chat | Chat conversation (transfer limit) |

### Carousel Interactions

| Trigger | Behavior |
|---------|----------|
| Default view | Shows first card (full width image with category labels) |
| Click category label | Scrolls/transitions to that card's UI preview |
| "Learn more" click | Navigates to relevant anchor on page or sub-page |
| Card enter viewport | Fade in animation |
| Arrow link hover | Arrow grows with ease |

### Card Visual Treatment
- Each card has a dark rounded-rectangle background with ambient gradient "lights" and grain overlay
- UI preview elements are floating card components on top of the dark background
- Chat bubbles and notification cards demonstrate real interactions

---

## 7. Section 5: Customer Quote

**Figma Node:** `17:6211` (Frame 1533216800)

### Layout
- Full-width dark background with gradient
- Large centered quote text
- Attribution line below

### Content
- **Quote:** "This is the most user-friendly banking system I've ever trained on. Fast, simple and intuitive."
- **Attribution:** Aleda DeMaria, Executive VP, COO, PeoplesBank

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Quote fades in up with ease |
| Background | Dark gradient, consistent with hero treatment |

---

## 8. Section 6: Digital Onboarding

**Figma Nodes:** `17:5615` (Frame 1533216805), `17:5624` (Frame 1533216804)

### Layout
- Eyebrow badge + two-column header
- Two-column content area below: each column has heading, body text, and phone mockup

### Header Content
- **Eyebrow:** "DIGITAL Onboarding" (pill badge, node `17:5618`)
- **Heading:** "Every application, decisioned in seconds."
- **Body:** "Nymbus scores every application the moment it is submitted and routes it automatically, so clean applicants get through fast and edge cases get worked by people, not left in a queue."

### Two-Column Feature Detail

| Column | Heading | Body | Phone Mockup |
|--------|---------|------|--------------|
| Left | Auto-approve, auto-deny, or refer. | Socure ID+ scores each application on intake and routes it to one of three outcomes, so clean applicants are approved without anyone touching the file. | "Application approved" screen with progress bar, "Decision made in 4 seconds" badge |
| Right | Every refer, worked end to end. | The onboarding team runs manual review, document and selfie verification, and fraud coordination on flagged cases, so a referred application clears with a decision, not a delay. | "We're reviewing your application" screen with "Est. time: under 2 hours" badge |

### Phone Mockup Details (Left — Auto-approve)
- Status bar with carrier info
- Bank logo ("Placeholder Bank")
- Large checkmark icon in circle
- "Application approved" heading
- "Account opening in progress" subtext
- Progress bar (100%)
- "Setting up your account · 100%"
- Badge: "Decision made in 4 seconds"
- CTA: "Continue to your account"

### Phone Mockup Details (Right — Manual review)
- Status bar with carrier info
- Bank logo ("Placeholder Bank")
- Loading/review icon
- "We're reviewing your application" heading
- "One of our specialists is verifying your documents" subtext
- Badge: "Est. time: under 2 hours"
- CTA: "We'll notify you"

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Columns and phones fade in up staggered |
| Phone mockups | May have subtle floating animation |

---

## 9. Section 7: Every Operation, Already Handled

**Figma Node:** `17:5534` (Frame 1533216813)

### Layout
- Centered section header
- 3 alternating feature rows (image left/text right, then image right/text left)
- Each row: large image placeholder + icon + heading + body text

### Header Content
- **Heading:** "Every operation, already handled."
- **Body:** "Reconciliation, fraud response, and compliance monitoring run every day, behind your brand, without your team working the queue."

### Feature Rows

| # | Layout | Icon Node | Heading | Body | Image Node |
|---|--------|-----------|---------|------|-----------|
| 1 | Image left, text right | `17:5541` | Back office runs without you. | Digital Operations reconciles GLs daily, posts and matches every card transaction to Core, and works ACH files, Positive Pay, and exceptions, so nothing sits unbalanced. | `17:5539` |
| 2 | Text left, image right | `17:5554` | Fraud is worked, not just flagged. | The fraud team investigates disputes under Reg E and NACHA, works suspicious activity, and manages card rules and CAMS alerts, so cases close, not just open. | `17:5562` |
| 3 | Image left, text right | `17:5566` | Compliance is monitored, not filed away. | Compliance tracks regulatory change, handles complaints, subpoenas and levies, screens against OFAC, and shares findings on your program as they surface. | `17:5564` |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Rows fade in up with ease, staggered |
| Images | Large rounded-rectangle placeholders (785px × 454px) — awaiting final imagery |

---

## 10. Section 8: Reporting

**Figma Node:** `17:6219` (Frame 1533216790)

### Layout
- Eyebrow badge + two-column header
- No additional visual content below (text-only section)

### Content
- **Eyebrow:** "Reporting" (pill badge, node `17:6221`)
- **Heading:** "Know what is running, every month."
- **Body:** "Monthly reporting on support, complaints, and fraud, plus a quarterly dispute report, keeps you current on your program. Enhanced, client-specific reporting is available as an add-on."

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Text fades in up with ease |

---

## 11. Section 9: Footer CTA

**Figma Node:** `17:6226` (Frame 1533216815)

### Layout
- Full-width dark gradient background (same organic ellipse treatment as hero)
- Centered text content with CTA button
- 3D chrome blob element

### Content
- **Heading:** "The team that builds your operations runs them too."
- **Body:** "See how Nymbus operates the back office behind your products, run by the team that built it."
- **CTA:** Button 5 (specular style, node `17:6241`) — likely → /contact/ or /demo/

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Content fades in up |
| CTA hover | Arrow grows with ease, specular effect |
| Background | Dark gradient with ambient ellipses |

---

## 12. Section 10: FAQs

**Figma Node:** `17:5349` (Frame 1533216817)

### Layout
- Section heading: "FAQs"
- Centered container (768px wide)
- 10 expandable accordion items (each node: `FAQItem`)

### FAQ Items

| # | Question | Figma Node |
|---|----------|-----------|
| 1 | What are Nymbus Managed Services? | `17:5352` |
| 2 | How does the shared-services model work? | `17:5362` |
| 3 | Do we keep control of compliance and risk? | `17:5372` |
| 4 | Can we set our own approval thresholds and decisioning rules? | `17:5382` |
| 5 | How does application onboarding and decisioning work? | `17:5392` |
| 6 | Can Nymbus support business and commercial account opening? | `17:5402` |
| 7 | Who does what: Nymbus vs. your team? | `17:5412` |
| 8 | Is customer support provided under our brand? | `17:5422` |
| 9 | How are fraud disputes handled? | `17:5432` |
| 10 | What reporting do we receive? | `17:5442` |

### FAQ Answers (from Figma text nodes)

| # | Answer Summary |
|---|---------------|
| 1 | A shared-services operation, built and run by Nymbus... |
| 2 | Nymbus executes and manages the operational processes... |
| 3 | Yes. Your institution retains regulatory responsibility... |
| 4 | Yes. Client-defined thresholds govern fee reimbursement... |
| 5 | Every application is scored on intake by Socure ID+... |
| 6 | Yes. Business Digital Onboarding runs KYC on individuals... |
| 7 | Nymbus runs the day-to-day operational work across... |
| 8 | Yes. The Digital Experience Center handles inbound... |
| 9 | The Fraud team investigates ACH, P2P, Bill Pay, and... |
| 10 | Monthly reporting covers support statistics (phone... |

### Accordion Interactions

| Trigger | Behavior |
|---------|----------|
| Click question row | Expands to reveal answer with slide-down animation |
| Click expanded row | Collapses answer with slide-up animation |
| Chevron icon | Rotates on expand/collapse (node `Icon:transform`) |
| Multiple open | Only one FAQ open at a time (accordion behavior) |
| Scroll in | Items fade in up staggered |

---

## 13. Section 11: Resources

**Figma Node:** `17:5497` (ResourcesSection)

### Layout
- Section heading (centered)
- 3-card horizontal grid

### Header Content
- **Heading:** "More on how managed services work, from the people who run them."

### Resource Cards

| # | Type Badge | Title | Metadata | Node |
|---|-----------|-------|----------|------|
| 1 | Whitepaper | The Next-Generation Banking Platform | "Powered by the industry's first secure MCP server." | `17:5504` |
| 2 | Podcast | The Next-Generation Banking Platform | "Powered by the industry's first secure MCP server." | `17:5514` |
| 3 | Whitepaper | The Next-Generation Banking Platform | "Powered by the industry's first secure MCP server." | `17:5524` |

*Note: Content is placeholder in the Figma file. Final cards should display content tagged "Managed Services" from the insights hub.*

### Card Structure (per card)
- Image/thumbnail area (374px × 250px, node `Modern Core`)
- Category badge (Whitepaper / Podcast / etc.)
- Title text
- Metadata line with author dots separator

### Interactions

| Trigger | Behavior |
|---------|----------|
| Card hover | Subtle lift/shadow |
| Card click | Navigates to resource content |
| Scroll in | Cards fade in up staggered |

---

## 14. Section 12: Footer

**Figma Node:** `17:6272` (Footer instance)

### Layout
- Full-width dark background
- Multi-column navigation links
- Legal text and copyright
- Same footer component used across all pages

---

## 15. Service Category Cards — Detailed UI

Each service category in Section 4 includes a floating UI card demonstrating the service in action. These are key to communicating what Nymbus actually does.

### Card 1: Contact Center & Member Support

**Figma Node:** `17:4894` (Group 46705835)

**UI Preview:** Chat conversation between member and agent

| Element | Content |
|---------|---------|
| Message 1 (member) | "My direct deposit didn't hit, it's supposed to be today." |
| Message 2 (agent) | "I see it, it's pending and will post by 5pm. Want me to send a confirmation?" |

**Visual Treatment:** Dark card with gradient lights, grain overlay, floating chat bubbles

---

### Card 2: Risk, Compliance & BSA/AML

**Figma Node:** `17:4913` (Group 46705837)

**UI Preview:** BSA Alert escalation card

| Element | Content |
|---------|---------|
| Header | BSA alert · Case #4821 |
| Status badge | Escalated |
| Subject | Activity threshold exceeded |
| Detail | Aggregate transaction volume breached the reporting threshold — escalated for review. |
| Assigned | M. Alvarez |
| Due | In 48 hrs |
| Tag | RESTRICTED |
| Actions | Reassign | Review case → |

**Visual Treatment:** Structured alert card with status indicators and action buttons

---

### Card 3: Application Onboarding, KYC & KYB

**Figma Node:** `17:5005` (Group 46705834)

**UI Preview:** KYB review progress card

| Element | Content |
|---------|---------|
| Header | Application onboarding · KYC / KYB |
| Business | Meridian House & Garden Co. |
| Applicant | Dana Whitfield · Beneficial owner |
| Status badge | In review |
| Tag | Confidential |
| Step 1 | ✓ Identity verified — Government ID + selfie match · today, 2:14 PM |
| Step 2 | ✓ Business documents received — EIN letter, formation docs, ownership chart |
| Step 3 | ◎ KYB review in progress — Estimated completion in ~4 hours |
| Footer | Estimated decision in ~4 hours | View application → |

**Visual Treatment:** Ordered checklist with status icons (complete, in-progress)

---

### Card 4: Fraud Monitoring, Disputes & Response

**Figma Node:** `17:5104` (Background+Border+Shadow within Group 46705831 area)

**UI Preview:** Dispute under-review card

| Element | Content |
|---------|---------|
| Header | Dispute filed · DSP-7793 |
| Amount | $340.00 — Visa debit |
| Reason | Unauthorized transaction · merchant reason code 10.4 |
| Status badge | Under review |
| Timeline 1 | ✓ Cardholder notified — confirmation sent to registered contact |
| Timeline 2 | ✓ Provisional credit issued — $340.00 pending network resolution |
| Due | Response due in 3 days |
| Actions | View evidence | Submit response → |

**Visual Treatment:** Card with timeline steps showing case progression

---

### Card 5: Back-Office Processing & Reconciliation

**Figma Node:** `17:5172` (Notification)

**UI Preview:** Reconciliation complete notification

| Element | Content |
|---------|---------|
| Notification | Reconciliation complete |
| Detail | 2,814 transactions posted · 2 exceptions flagged |
| Timestamp | Today · 6:47 AM |

**Visual Treatment:** Simple notification card, compact format

---

### Card 6: Business & Commercial Banking Operations

**Figma Node:** `17:5191` (Background+Border+Shadow)

**UI Preview:** New business account onboarding progress

| Element | Content |
|---------|---------|
| Header | New business account |
| Business | Sunrise Roasters LLC |
| Progress badge | 75% |
| Progress text | Step 3 of 4 complete — 75% |
| Progress bar | 75% filled |
| Step 1 | ✓ Application submitted |
| Step 2 | ✓ Documents verified |
| Step 3 | ✓ Beneficial owners confirmed |
| Step 4 | ◎ Final signatory review (pending) |
| Footer status | Pending — Final signatory review |
| Action | Continue → |

**Visual Treatment:** Progress stepper with horizontal progress bar and step icons

---

### Card 7: Chat (Authenticated & Unauthenticated)

**Figma Node:** `17:4982` (Group 46705839)

**UI Preview:** Authenticated chat session

| Element | Content |
|---------|---------|
| Header | Logged in as Maria Santos · Checking acct ···4821 |
| Timestamp | Today 11:22 AM / Today 11:23 AM |
| Message (member) | "Can I increase my daily transfer limit?" |
| Message (agent) | "Yes — I can update that now. What limit do you need?" |

**Visual Treatment:** Chat interface with authentication context header

---

## Appendix A: Back-Office & Fraud Detail Cards (Sections 7 context)

These UI cards appear alongside the "Every operation, already handled" section content as supporting visual evidence.

### Back-Office Reconciliation Dashboard

**Figma Node:** `17:5792` (Background+Border+Shadow)

| Element | Content |
|---------|---------|
| Header icon | Checkmark in circle |
| Title | End-of-day operations · Wed, Jul 29 |
| Subtitle | Daily reconciliation complete |
| Detail | 2,814 transactions posted · General ledger balanced |
| **Metrics Grid** | |
| Transactions | 2,814 — All posted |
| GL variance | $0.00 — Balanced |
| ACH file | Processed — Batch #0729 |
| Exceptions | 0 — Outstanding |
| **Overnight Batch List** | |
| Row 1 | ACH file processed — Inbound + outbound settled to Fed | 0 exceptions |
| Row 2 | Positive Pay reviewed — Presented items matched to issue file | All items cleared |
| Row 3 | General ledger balanced — Subledgers tied to control accounts | Balanced |
| Footer | Completed automatically — Completed 6:43 AM — before anyone arrived | No action required |

---

### Fraud & Disputes Case Management

**Figma Node:** `17:5886` (Background+Border+Shadow)

| Element | Content |
|---------|---------|
| Header | Fraud & disputes · case management |
| Subtitle | Cases close, not just open |
| Resolution stat | 3/3 Resolved today |
| **Case 1** | |
| ID | Case #3847 · Reg E Dispute · $212.00 |
| Status | Closed |
| Pipeline | Filed → Investigated → Provisional credit → Closed |
| **Case 2** | |
| ID | Case #3901 · SAR Filing · CAMS alert |
| Status | Filed |
| Pipeline | Flagged → Assigned → Reviewed → Filed |
| **Case 3** | |
| ID | Case #3912 · Suspicious Activity · Card rule triggered |
| Status | Resolved |
| Pipeline | Detected → Worked → Resolved |
| Footer note | Every open case reaches a documented resolution — no alert left standing. |

---

### Risk & Compliance Monitoring Feed

**Figma Node:** `17:6077` (Background+Border+Shadow)

| Element | Content |
|---------|---------|
| Header | Risk & compliance · monitoring |
| Subtitle | Compliance activity feed |
| Live badge | Live · updated 2 min ago |
| **Activity Items** | |
| Row 1 | OFAC screen · 847 customers · 0 matches — Sanctions · Today, 6:00 AM | Running |
| Row 2 | Regulatory update · BSA reporting threshold change — Reg change · Assigned 1h ago | Under review |
| Row 3 | Complaint #441 · Resolution letter sent — Consumer · Closed today | Resolved |
| Row 4 | Subpoena response · Documents delivered to counsel — Legal · Closed today | Case closed |
| Row 5 | Exam prep · Q4 findings report — Regulatory exam · Due Nov 14 | In progress |

---

## Appendix B: Page Navigation Flow

```
[User arrives on /managed-services/]
        |
        v
[Hero — "We don't just deploy it. We run it."]
        |
        +---> [Clicks CTA] ---> [Navigate to /contact/ or /demo/]
        |
        v (scrolls)
[Stats Band — 6 domains, 140K customers]
        |
        v
[We Run the Work — 3 control pillars]
        |
        v
[Meet the Team — Service Category Carousel]
        |
        +---> [Clicks "Learn more" on category] ---> [Scrolls to relevant section OR navigates to anchor]
        |
        +---> [Clicks carousel navigation] ---> [Transitions between 7 category cards]
        |
        v
[Customer Quote]
        |
        v
[Digital Onboarding detail]
        |
        v
[Every Operation, Already Handled — 3 feature rows]
        |
        v
[Reporting]
        |
        v
[Footer CTA — "The team that builds your operations runs them too."]
        |
        +---> [Clicks CTA] ---> [Navigate to /contact/ or /demo/]
        |
        v
[FAQs — 10 expandable items]
        |
        +---> [Clicks question] ---> [Expands answer accordion]
        |
        v
[Resources — 3 content cards]
        |
        +---> [Clicks card] ---> [Navigate to whitepaper/podcast]
        |
        v
[Footer]
```

---

## Appendix C: Cross-Page Links

| Source Element | Destination | Context |
|---------------|-------------|---------|
| Hero CTA button | /contact/ or /demo/ | Primary conversion |
| Service category "Learn more" links | Anchors within page or sub-pages | Service detail |
| Footer CTA button | /contact/ or /demo/ | Secondary conversion |
| Resource cards | /insights/ content | Tagged "Managed Services" |
| Navigation bar | All site pages | Global nav |
| Footer links | All site pages | Global footer |

---

## Open Questions

1. ~~**Hero CTA destination**~~ — ✅ RESOLVED: Primary CTA goes to /contact/
2. ~~**Service category "Learn more"**~~ — ✅ RESOLVED: These links go to /contact/
3. **Feature row images** — Placeholder rectangles visible in Figma; what imagery will fill them? — STILL OPEN
4. ~~**Resource card content**~~ — ✅ RESOLVED: Should pull from insights hub tagged "Managed Services"
5. ~~**Carousel behavior**~~ — ✅ RESOLVED: Auto-advance on scroll down. Also scrolls on click onto a card not currently visible. Swipe on mobile. One visible card at once.
6. ~~**Customer quote**~~ — ✅ RESOLVED: Single quote (no carousel).
