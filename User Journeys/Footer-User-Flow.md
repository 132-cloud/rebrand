# Footer Navigation User Flow & Journey

**Source:** Figma Dev Hand-off — Footer (Node 87:2231) + User Journeys-Footer.csv  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=87-2231  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Component Overview](#1-component-overview)
2. [Layout & Structure](#2-layout--structure)
3. [Element Reference](#3-element-reference)
4. [Navigation Columns](#4-navigation-columns)
5. [Footer Bottom Bar](#5-footer-bottom-bar)
6. [User Stories & Scenarios](#6-user-stories--scenarios)
7. [Interactions & Animations](#7-interactions--animations)
8. [Accessibility Requirements](#8-accessibility-requirements)

---

## 1. Component Overview

The Footer is a global component (Figma instance) that appears at the bottom of every page on the Nymbus site. It provides comprehensive site navigation organized by product category, along with company information and legal links.

**Component Dimensions:** 1517 × 647px  
**Background:** Light/white with subtle top border  
**Usage:** Global — appears on all pages site-wide

### User Story

> **AS** a Prospect  
> **I** scroll to the footer of any page on the Nymbus site  
> **SO THAT** I can use the footer links to quickly navigate to specific pages and sections

### Assumptions

1. User has JavaScript enabled and modern browser
2. Footer is visible at the bottom of every page
3. All linked pages/anchors are functional and accessible

---

## 2. Layout & Structure

### Visual Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Nymbus Logo]                                                              │
│                                                                             │
│  Platform        Managed Services    Solutions         Resources   Company   │
│  ────────        ────────────────    ─────────         ─────────   ───────   │
│  Core Processing Contact Center     Core replacement  Insights    About     │
│  Digital Banking Onboarding         De novo launch    AI          Press     │
│  Account Opening Servicing          Vertical brands               Contact   │
│  Connect         Compliance         New lines                     Privacy   │
│  Insights        Fraud              M&A acceleration                        │
│  Nymbus MCP      Back Office        Private label                           │
│  Fraud Intel     Biz Banking Supp   Sandbox                                 │
│  Levels          Labs               Retail banking                          │
│  Engage                             Business banking                        │
│                                     Commercial banking                      │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  © 2026 NYMBUS    208 N Laura St...    +1 (855) 210-7874       [in] [X] [M] │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Structure Breakdown
- **Container:** 1140px centered, 647px height
- **Logo:** Nymbus mark (top-left, ~37px wide)
- **Navigation grid:** 5 columns starting at ~185px from left
- **Divider:** Horizontal rule separating nav from bottom bar
- **Bottom bar:** Copyright, address, phone, social icons

---

## 3. Element Reference

| ID | Element | Description |
|----|---------|-------------|
| 4A | Column Heading | "Platform" |
| 4B | Link | Core Processing → /platform/#core-processing |
| 4C | Link | Digital Banking → /platform/#digital-banking |
| 4D | Link | Account Opening → /platform/#account-opening |
| 4E | Link | Connect → /platform/#connect |
| 4F | Link | Insights → /platform/#insights |
| 4G | Link | Nymbus MCP → /platform/#nymbus-mcp |
| 4H | Link | Fraud Intelligence → /platform/#fraud-intelligence |
| 4I | Link | Levels → /platform/#levels |
| 4J | Link | Engage → /platform/#engage |
| 4K | Column Heading | "Managed Services" |
| 4L | Link | Contact Center → /managed-services/#contact-center |
| 4M | Link | Onboarding → /managed-services/#onboarding |
| 4N | Link | Servicing → /managed-services/#servicing |
| 4O | Link | Compliance → /managed-services/#compliance |
| 4P | Link | Fraud → /managed-services/#fraud |
| 4Q | Link | Back Office → /managed-services/#back-office |
| 4R | Link | Business Banking Support → /managed-services/#business-banking-support |
| 4S | Link | Labs → /labs/ |
| 4T | Column Heading | "Solutions" |
| 4U | Link | Core replacement → /solutions/primary-core/#core-replacement |
| 4V | Link | De novo launch → /solutions/primary-core/#de-novo |
| 4W | Link | Vertical brand launches → /solutions/parallel-core/#vertical-brand |
| 4X | Link | New lines of business → /solutions/parallel-core/#new-lines |
| 4Y | Link | M&A acceleration → /solutions/parallel-core/#ma-acceleration |
| 4Z | Link | Private label banking → /solutions/parallel-core/#private-label |
| 4AA | Link | Sandbox innovation → /solutions/parallel-core/#sandbox |
| 4AB | Link | Retail banking → /solutions/retail-banking/ |
| 4AC | Link | Business banking → /solutions/business-banking/ |
| 4AD | Link | Commercial banking → /solutions/commercial-banking/ |
| 4AE | Column Heading | "Resources" |
| 4AF | Link | Insights → /insights-hub/ |
| 4AG | Link | AI → /ai/ |
| 4AH | Column Heading | "Company" |
| 4AI | Link | About Nymbus → /about/ |
| 4AJ | Link | Press → /press/ |
| 4AK | Link | Contact us → /contact/ |
| 4AL | Link | Privacy policy → /privacy-policy/ |
| 4AM | Text | Copyright: "© 2026 NYMBUS, All rights reserved." |
| 4AN | Text | Address: "208 N Laura St, 8th & 9th floor, Jacksonville, FL 32202" |
| 4AO | Link | Phone: +1 (855) 210-7874 |
| 4AP | Icons | Social media: LinkedIn, Twitter/X, Medium |

---

## 4. Navigation Columns

### Column 1: Platform

| Link | Destination URL |
|------|----------------|
| Core Processing | /platform/#core-processing |
| Digital Banking | /platform/#digital-banking |
| Account Opening | /platform/#account-opening |
| Connect | /platform/#connect |
| Insights | /platform/#insights |
| Nymbus MCP | /platform/#nymbus-mcp |
| Fraud Intelligence | /platform/#fraud-intelligence |
| Levels | /platform/#levels |
| Engage | /platform/#engage |

### Column 2: Managed Services

| Link | Destination URL |
|------|----------------|
| Contact Center | /managed-services/#contact-center |
| Onboarding | /managed-services/#onboarding |
| Servicing | /managed-services/#servicing |
| Compliance | /managed-services/#compliance |
| Fraud | /managed-services/#fraud |
| Back Office | /managed-services/#back-office |
| Business Banking Support | /managed-services/#business-banking-support |
| Labs | /labs/ |

### Column 3: Solutions

| Link | Destination URL | Category |
|------|----------------|----------|
| Core replacement | /solutions/primary-core/#core-replacement | Primary Core |
| De novo launch | /solutions/primary-core/#de-novo | Primary Core |
| Vertical brand launches | /solutions/parallel-core/#vertical-brand | Parallel Core |
| New lines of business | /solutions/parallel-core/#new-lines | Parallel Core |
| M&A acceleration | /solutions/parallel-core/#ma-acceleration | Parallel Core |
| Private label banking | /solutions/parallel-core/#private-label | Parallel Core |
| Sandbox innovation | /solutions/parallel-core/#sandbox | Parallel Core |
| Retail banking | /solutions/retail-banking/ | Banking Segments |
| Business banking | /solutions/business-banking/ | Banking Segments |
| Commercial banking | /solutions/commercial-banking/ | Banking Segments |

### Column 4: Resources

| Link | Destination URL |
|------|----------------|
| Insights | /insights-hub/ |
| AI | /ai/ |

### Column 5: Company

| Link | Destination URL |
|------|----------------|
| About Nymbus | /about/ |
| Press | /press/ |
| Contact us | /contact/ |
| Privacy policy | /privacy-policy/ |

---

## 5. Footer Bottom Bar

### Layout
- Left-aligned: Copyright + Address + Phone
- Right-aligned: Social media icons
- Separated from navigation columns by a horizontal rule

### Content

| Element | Content | Behavior |
|---------|---------|----------|
| Copyright | © 2026 NYMBUS, All rights reserved. | Static text |
| Address | 208 N Laura St, 8th & 9th floor, Jacksonville, FL 32202 | Static text |
| Phone | +1 (855) 210-7874 | tel: link — opens phone dialer |
| LinkedIn icon | LinkedIn profile | Opens in new tab |
| Twitter/X icon | Twitter/X profile | Opens in new tab |
| Medium icon | Medium publication | Opens in new tab |

---

## 6. User Stories & Scenarios

### Scenario 1: Click Platform Links (4B–4J)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click any Platform link |
| THEN | User is navigated to the corresponding anchor on /platform/ |

**Acceptance Criteria:**
- Core Processing (4B) → /platform/#core-processing
- Digital Banking (4C) → /platform/#digital-banking
- Account Opening (4D) → /platform/#account-opening
- Connect (4E) → /platform/#connect
- Insights (4F) → /platform/#insights
- Nymbus MCP (4G) → /platform/#nymbus-mcp
- Fraud Intelligence (4H) → /platform/#fraud-intelligence
- Levels (4I) → /platform/#levels
- Engage (4J) → /platform/#engage

---

### Scenario 2: Click Managed Services Links (4L–4R)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click any Managed Services link |
| THEN | User is navigated to the corresponding anchor on /managed-services/ |

**Acceptance Criteria:**
- Contact Center (4L) → /managed-services/#contact-center
- Onboarding (4M) → /managed-services/#onboarding
- Servicing (4N) → /managed-services/#servicing
- Compliance (4O) → /managed-services/#compliance
- Fraud (4P) → /managed-services/#fraud
- Back Office (4Q) → /managed-services/#back-office
- Business Banking Support (4R) → /managed-services/#business-banking-support

---

### Scenario 3: Click Labs Link (4S)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click "Labs" (4S) |
| THEN | User is navigated to /labs/ |

**Acceptance Criteria:**
1. Navigation to /labs/
2. Page loads at top

---

### Scenario 4: Click Solutions — Primary Core Links (4U–4V)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click "Core replacement" (4U) or "De novo launch" (4V) |
| THEN | User is navigated to the corresponding anchor on /solutions/primary-core/ |

**Acceptance Criteria:**
- Core replacement (4U) → /solutions/primary-core/#core-replacement
- De novo launch (4V) → /solutions/primary-core/#de-novo

---

### Scenario 5: Click Solutions — Parallel Core Links (4W–4AA)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click any Parallel Core solution link |
| THEN | User is navigated to the corresponding anchor on /solutions/parallel-core/ |

**Acceptance Criteria:**
- Vertical brand launches (4W) → /solutions/parallel-core/#vertical-brand
- New lines of business (4X) → /solutions/parallel-core/#new-lines
- M&A acceleration (4Y) → /solutions/parallel-core/#ma-acceleration
- Private label banking (4Z) → /solutions/parallel-core/#private-label
- Sandbox innovation (4AA) → /solutions/parallel-core/#sandbox

---

### Scenario 6: Click Solutions — Banking Segment Links (4AB–4AD)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click a banking segment link |
| THEN | User is navigated to the business banking page or anchor |

**Acceptance Criteria:**
- Retail banking (4AB) → /solutions/retail-banking/
- Business banking (4AC) → /solutions/business-banking/
- Commercial banking (4AD) → /solutions/commercial-banking/

---

### Scenario 7: Click Resources Links (4AF–4AG)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click "Insights" (4AF) or "AI" (4AG) |
| THEN | User is navigated to the corresponding page |

**Acceptance Criteria:**
- Insights (4AF) → /insights-hub/
- AI (4AG) → /ai/

---

### Scenario 8: Click Company Links (4AI–4AL)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click any Company link |
| THEN | User is navigated to the corresponding page |

**Acceptance Criteria:**
- About Nymbus (4AI) → /about/
- Press (4AJ) → /press/
- Contact us (4AK) → /contact/
- Privacy policy (4AL) → /privacy-policy/

---

### Scenario 9: Click Phone Number (4AO)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click the phone number (4AO) |
| THEN | Phone dialer is triggered on mobile or tel: link is activated |

**Acceptance Criteria:**
1. Link uses `tel:` protocol
2. On mobile: opens phone dialer with +1 (855) 210-7874
3. On desktop: may trigger system phone handler

---

### Scenario 10: Click Social Media Icons (4AP)

| Field | Value |
|-------|-------|
| GIVEN | As a Prospect on any page |
| WHEN | I scroll to the footer and click any social media icon (4AP) |
| THEN | User is navigated to the corresponding social media profile in a new tab |

**Acceptance Criteria:**
1. Links open in new tab (`target="_blank"`)
2. `rel="noopener noreferrer"` applied for security
3. Icons: LinkedIn, Twitter/X, Medium

---

## 7. Interactions & Animations

| Element | Trigger | Behavior |
|---------|---------|----------|
| Navigation links | Hover | Text color change or underline with ease |
| Navigation links | Click | Navigate to URL |
| Column headings | — | Non-clickable, bold weight, serves as label |
| Phone number | Hover | Underline/color change |
| Phone number | Click | Opens tel: handler |
| Social icons | Hover | Opacity change or color shift |
| Social icons | Click | Opens new tab to social profile |
| Footer overall | Scroll into view | No animation (always present at page bottom) |
| Logo | Click | Navigates to homepage (/) |

---

## 8. Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Semantic structure | Use `<footer>` landmark element |
| Navigation grouping | Wrap link columns in `<nav aria-label="Footer navigation">` |
| Heading hierarchy | Column headings as `<h4>` or styled `<p>` with `role="heading"` |
| Link purpose | All links have descriptive text (no "click here" patterns) |
| Focus indicators | Visible focus ring on all interactive elements |
| Color contrast | All text meets WCAG 2.1 AA minimum (4.5:1 for body text) |
| Touch targets | Links have adequate spacing (min 30px vertical between items) |
| External links | Social icons announce "opens in new tab" via `aria-label` |
| Phone link | Uses `tel:` protocol with visible number text |
| Skip navigation | Footer can be reached via skip-link or landmark navigation |

---

## Flow Diagram

```
[User on any page]
        |
        v (scrolls to bottom)
[Footer visible]
        |
        +---> [Clicks Platform link] ---------> [/platform/#section]
        |
        +---> [Clicks Managed Services link] --> [/managed-services/#section]
        |
        +---> [Clicks Labs] ------------------> [/labs/]
        |
        +---> [Clicks Solutions link] --------> [/solutions/primary-core/#section]
        |                                        [/solutions/parallel-core/#section]
        |                                        [/solutions/business-banking/]
        |
        +---> [Clicks Resources link] --------> [/insights-hub/ or /ai/]
        |
        +---> [Clicks Company link] ----------> [/about/ | /press/ | /contact/ | /privacy-policy/]
        |
        +---> [Clicks phone number] ----------> [Opens phone dialer]
        |
        +---> [Clicks social icon] -----------> [Opens profile in new tab]
        |
        +---> [Clicks Nymbus logo] -----------> [Navigates to homepage /]
```

---

## Complete URL Map

| Link Text | Destination | Anchor |
|-----------|-------------|--------|
| Core Processing | /platform/ | #core-processing |
| Digital Banking | /platform/ | #digital-banking |
| Account Opening | /platform/ | #account-opening |
| Connect | /platform/ | #connect |
| Insights (Platform) | /platform/ | #insights |
| Nymbus MCP | /platform/ | #nymbus-mcp |
| Fraud Intelligence | /platform/ | #fraud-intelligence |
| Levels | /platform/ | #levels |
| Engage | /platform/ | #engage |
| Contact Center | /managed-services/ | #contact-center |
| Onboarding | /managed-services/ | #onboarding |
| Servicing | /managed-services/ | #servicing |
| Compliance | /managed-services/ | #compliance |
| Fraud | /managed-services/ | #fraud |
| Back Office | /managed-services/ | #back-office |
| Business Banking Support | /managed-services/ | #business-banking-support |
| Labs | /labs/ | — |
| Core replacement | /solutions/primary-core/ | #core-replacement |
| De novo launch | /solutions/primary-core/ | #de-novo |
| Vertical brand launches | /solutions/parallel-core/ | #vertical-brand |
| New lines of business | /solutions/parallel-core/ | #new-lines |
| M&A acceleration | /solutions/parallel-core/ | #ma-acceleration |
| Private label banking | /solutions/parallel-core/ | #private-label |
| Sandbox innovation | /solutions/parallel-core/ | #sandbox |
| Retail banking | /solutions/business-banking/ | — |
| Business banking | /solutions/business-banking/ | — |
| Commercial banking | /solutions/business-banking/ | #commercial |
| Insights (Resources) | /insights-hub/ | — |
| AI | /ai/ | — |
| About Nymbus | /about/ | — |
| Press | /press/ | — |
| Contact us | /contact/ | — |
| Privacy policy | /privacy-policy/ | — |
| Phone | tel:+18552107874 | — |
| LinkedIn | https://linkedin.com/company/nymbus | — |
| Twitter/X | https://twitter.com/naborsnymbus | — |
| Medium | https://medium.com/@nymbus | — |

---

## Open Questions

1. **Logo click** — Does clicking the Nymbus logo in the footer navigate to the homepage, or is it non-interactive?
2. **Social media URLs** — Confirm exact profile URLs for LinkedIn, Twitter/X, and Medium.
3. **Duplicate "Insights"** — The word "Insights" appears in both the Platform column (linking to /platform/#insights) and Resources column (linking to /insights-hub/). Is this intentional, and is the distinction clear to users?
4. **Retail vs Business banking** — Both "Retail banking" (4AB) and "Business banking" (4AC) now have separate pages (/solutions/retail-banking/ and /solutions/business-banking/). Confirmed resolved.
5. **Mobile layout** — How does the 5-column footer collapse on mobile? Accordion? Stacked single column?
