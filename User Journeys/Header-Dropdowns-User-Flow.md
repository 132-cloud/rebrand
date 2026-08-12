# Header Navigation Dropdowns User Flow & Journey

**Source:** Figma Dev Hand-off — Sitemap URLs | NAV | Main Components (Node 1:3)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=1-3
**Last Updated:** August 11, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Structure](#1-page-overview--structure)
2. [Global Animations (Sarah's Notes)](#2-global-animations-sarahs-notes)
3. [Header Bar Elements](#3-header-bar-elements)
4. [Platform Dropdown](#4-platform-dropdown)
5. [Managed Services Dropdown](#5-managed-services-dropdown)
6. [Solutions Dropdown](#6-solutions-dropdown)
7. [AI Dropdown](#7-ai-dropdown)
8. [Resources Dropdown](#8-resources-dropdown)
9. [Interaction Scenarios](#9-interaction-scenarios)
10. [Appendix: Sarah's Full Comments](#appendix-sarahs-full-comments)
11. [Open Questions](#open-questions)

---

## 1. Page Overview & Structure

The header navigation is a global component present on every page of the site. It contains five dropdown menus (Platform, Managed Services, Solutions, AI, Resources) plus two CTA buttons. Each dropdown is a multi-column panel that expands below the header bar on hover (desktop) or click (mobile).

**Component Variants:**
- `Nav dark` (instance `84:587`) — Used on dark-background pages (homepage hero, article pages)
- `Nav light` (instance `84:813`) — Used on light-background pages (blog listing, inner pages)

**Dropdown Panel Dimensions:**

| Dropdown | Figma Node | Width | Height |
|----------|-----------|-------|--------|
| Platform | `81:1644` | 1250px | 526px |
| Managed Services | `81:1905` | 1250px | 531px |
| Solutions | `81:2051` | 1250px | 460px |
| AI | `81:2162` | 1250px | 379px |
| Resources | `81:2258` | 1250px | 401px |

**Assumptions:**
1. User has JavaScript enabled and modern browser
2. Header navigation is visible and functional on all pages
3. All linked pages/anchors are functional and accessible
4. Dropdowns open on hover (desktop) or click (mobile)

---

## 2. Global Animations (Sarah's Notes)

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Button hover (primary CTA) | Slide change of fill animation | https://www.untitledui.com/react/components/buttons |
| Button hover (secondary CTA) | Slide change of fill animation | https://www.untitledui.com/react/components/buttons |
| Nav dropdown animation | Smooth open/close | https://rebrand-kohl.vercel.app/ |
| Dropdown open | 200ms fade-in | — |
| Dropdown close | 150ms fade-out | — |
| Arrow icon (hover) | Arrow grows with ease | — |

---

## 3. Header Bar Elements

**Figma Node:** `22:204` (CTAs frame)

### Nav Links

| Ref | Element | Action |
|-----|---------|--------|
| 3A | Platform | Opens Platform dropdown |
| 3B | Managed Services | Opens Managed Services dropdown |
| 3C | Solutions | Opens Solutions dropdown |
| 3D | AI | Opens AI dropdown |
| 3E | Resources | Opens Resources dropdown |

### CTA Buttons

| Ref | Element | Destination | Style |
|-----|---------|-------------|-------|
| 3F | Try the Demo | [EXTERNAL-LINK COMING AUG 31] | Secondary (outlined), opens new tab |
| 3G | Let's move | /contact/ | Primary (filled background) |

### Button States

| Component | Figma Node | States |
|-----------|-----------|--------|
| Button 1 (primary wide) | `22:205` | Default + Hover |
| Button 2 (secondary wide) | `22:235` | Default + Hover |
| Button 3 (compact) | `22:249` | Default + Hover |

---

## 4. Platform Dropdown

**Figma Node:** `81:1644` (PLATFORM DROPDOWN)
**Dimensions:** 1250 x 526px

### Layout
- 4-column grid within 32px padding, 40px top padding
- Columns: Intro (267px) | Banking Technology (267px) | Intelligence (267px) | Featured (267px)

### Column 1: Intro

| Element | Content |
|---------|---------|
| **Heading** | Platform |
| **Tagline** | "One connected platform." |
| **Description** | "Core processing, digital banking, account opening..." |
| **CTA Link** | "Platform overview" → /platform/ |
| **Secondary Link** | "Try the demo" → [EXTERNAL-LINK COMING AUG 31] (opens external, icon indicator) |

### Column 2: Banking Technology

| Ref | Link | Description | Destination |
|-----|------|-------------|-------------|
| 3J | Core Processing | Grow without core limits | /platform/#core-processing |
| 3K | Digital Banking | Grow deposits everywhere | /platform/#digital-banking |
| 3L | Account Opening | Fund accounts faster | /platform/#account-opening |
| 3M | Payments Hub (Beta) | Control every payment rail | /platform/#payments-hub |

**Sub-heading: Loyalty and Engagement**

| Ref | Link | Description | Destination |
|-----|------|-------------|-------------|
| 3N | Levels | Incentivize and reward profitable behaviors | /platform/#levels |
| 3O | Engage | Nurture accounts into loyal relationships | /platform/#engage |

### Column 3: Intelligence

| Ref | Link | Description | Destination |
|-----|------|-------------|-------------|
| 3P | Connect | Connect your stack without the lift | /platform/#connect |
| 3Q | Insights | See what drives growth | /platform/#insights |
| 3R | Nymbus MCP | Automation you control | /platform/#nymbus-mcp |
| 3S | Fraud Intelligence | Stop fraud early | /platform/#fraud-intelligence |

**Sub-heading: Services**

| Ref | Link | Description | Destination |
|-----|------|-------------|-------------|
| 3T | Managed Services | Scale without headcount | /managed-services/ |

### Column 4: Featured Card

| Ref | Element | Content |
|-----|---------|---------|
| 3U | Featured Card | **Nymbus MCP** — "Connect AI to your banking data and workflows, und..." → /platform/#nymbus-mcp |
|  | Icon | MCP logo (160x160px, circular node network graphic) |

---

## 5. Managed Services Dropdown

**Figma Node:** `81:1905` (MANAGED SERVICES DROPDOWN)
**Dimensions:** 1250 x 531px

### Layout
- 4-column grid: Intro | Run the operations | Growth | Featured

### Column 1: Intro

| Element | Content |
|---------|---------|
| **Heading** | Managed Services |
| **Tagline** | "We don't just deploy it. We run it." |
| **Description** | "The team that builds your operations runs them too..." |
| **CTA Link** | "Managed Services overview" → /managed-services/ |

### Column 2: Run the operations

| Ref | Link | Description | Destination |
|-----|------|-------------|-------------|
| 3W | Contact Center | Support without hiring | /managed-services/#contact-center |
| 3X | Onboarding | Fund more accounts | /managed-services/#onboarding |
| 3Y | Servicing | Fast service at any volume | /managed-services/#servicing |
| 3Z | Back Office | Back office, handled | /managed-services/#back-office |
| 3AA | Compliance | Stay covered as rules change | /managed-services/#compliance |
| 3AB | Fraud | Contain losses at scale | /managed-services/#fraud |
| 3AC | Business Banking Support | Business ops, covered | /managed-services/#business-banking-support |

### Column 3: Growth

| Ref | Link | Description | Destination |
|-----|------|-------------|-------------|
| 3AD | Labs | Launch and grow (external icon indicator) | /labs/ |

### Column 4: Featured Card

| Ref | Element | Content |
|-----|---------|---------|
| 3AE | Featured Card | **Nymbus Labs** — "Audience strategy, offer design, launch planning..." → /labs/ |
|  | Icon | Growth chart graphic (Strategy → Launch → Optimize) |

---

## 6. Solutions Dropdown

**Figma Node:** `81:2051` (SOLUTIONS DROPDOWN)
**Dimensions:** 1250 x 460px

### Layout
- 4-column grid: Intro | Parallel Core + Primary Core | Segments | Featured

### Column 1: Intro

| Element | Content |
|---------|---------|
| **Heading** | Solutions |
| **Tagline** | "Launch alongside your core, or replace it." |
| **Description** | "Stand up something new next to what you run today..." |

### Column 2: Launch a Parallel Core

| Ref | Link | Destination |
|-----|------|-------------|
| 3AF | Vertical brand launches | /solutions/parallel-core/#vertical-brand |
| 3AG | New lines of business | /solutions/parallel-core/#new-lines |
| 3AH | M&A acceleration | /solutions/parallel-core/#ma-acceleration |
| 3AI | Private label banking | /solutions/parallel-core/#private-label |
| 3AJ | Sandbox innovation | /solutions/parallel-core/#sandbox |

**Sub-heading: Launch a Primary Core**

| Ref | Link | Destination |
|-----|------|-------------|
| 3AK | Core replacement | /solutions/primary-core/#core-replacement |
| 3AL | De novo launch | /solutions/primary-core/#de-novo |

### Column 3: Segments

| Ref | Link | Destination |
|-----|------|-------------|
| 3AM | Retail | /solutions/retail-banking/ |
| 3AN | Business | /solutions/business-banking/ |
| 3AO | Commercial | /solutions/commercial-banking/ |

### Column 4: Featured Card

| Ref | Element | Content |
|-----|---------|---------|
| 3AP | Featured Card | **Nymbus Labs** — "Audience strategy, offer design, launch planning..." → /labs/ |

---

## 7. AI Dropdown

**Figma Node:** `81:2162` (AI DROPDOWN)
**Dimensions:** 1250 x 379px

### Layout
- 4-column grid: Intro | Our Approach | (empty) | Featured

### Column 1: Intro

| Element | Content |
|---------|---------|
| **Heading** | AI |
| **Tagline** | "AI that answers to permissions, approvals, and aud..." |
| **Description** | "Governed and operational. Build with AI works insi..." |
| **CTA Link** | "Build with AI" → /ai/ |

### Column 2: Our Approach

| Ref | Link | Description | Destination |
|-----|------|-------------|-------------|
| 3AR | AI Approach | Governed by design, not bolted on top | /ai/#ai-approach |
| 3AS | Nymbus MCP | Automation you control | /ai/#nymbus-mcp |
| 3AT | Applied AI | AI results, not roadmaps | /ai/#applied-ai |

### Column 3: (Empty)

Reserved space — no links in Phase 1.

### Column 4: Featured Card

| Ref | Element | Content |
|-----|---------|---------|
| 3AU | Featured Card | **Nymbus MCP** — "Connect AI to your banking data and workflows, und..." → /ai/#nymbus-mcp |
|  | Icon | Network node graphic (N+ center, 8 surrounding nodes) |

---

## 8. Resources Dropdown

**Figma Node:** `81:2258` (RESOURCES DROPDOWN)
**Dimensions:** 1250 x 401px

### Layout
- 4-column grid: Intro | Learn | Company | Featured

### Column 1: Intro

| Element | Content |
|---------|---------|
| **Heading** | Resources |
| **Tagline** | "See how modern banking is being built." |
| **Description** | "Guides, insights, and stories on launching, modern..." |
| **CTA Link** | "Latest insights" → /insights-hub/ |

### Column 2: Learn

| Ref | Link | Description | Destination |
|-----|------|-------------|-------------|
| 3AW | Insights | Ideas for growth | /insights-hub/ |
| 3AX | Customers | See who launched | /insights-hub/ |

### Column 3: Company

| Ref | Link | Destination |
|-----|------|-------------|
| 3AY | About Nymbus | /about/ |
| 3AZ | Pressroom | /press/ |
| 3BA | Contact | /contact/ |

### Column 4: Featured Card

| Ref | Element | Content |
|-----|---------|---------|
| 3BB | Featured Card | **Governed AI for real banking work** — "As the platform behind banks and credit unions bui..." → /ai/ |

---

## 9. Interaction Scenarios

### Scenario 1: Open Platform Dropdown

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect on any page |
| **WHEN** | I hover over or click the 'Platform' nav link (3A) |
| **THEN** | The Platform dropdown panel expands below the header showing categorized links |

**Acceptance Criteria:**
1. Dropdown appears with smooth animation (200ms fade-in)
2. Four columns visible: Intro + CTA, Banking Technology, Intelligence, Featured
3. All links are clickable and navigate correctly
4. Dropdown closes when mouse leaves the area or another nav item is hovered

---

### Scenario 2: Click Platform Overview Link (3H)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Platform dropdown open |
| **WHEN** | I click on 'Platform overview' (3H) |
| **THEN** | User is navigated to /platform/ |

**Acceptance Criteria:**
1. Navigation to /platform/
2. Dropdown closes on click
3. Page loads at top

---

### Scenario 3: Click Banking Technology Links (3J–3M)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Platform dropdown open |
| **WHEN** | I click on Core Processing (3J), Digital Banking (3K), Account Opening (3L), or Payments Hub (3M) |
| **THEN** | User is navigated to the corresponding anchor on /platform/ |

**Destinations:**
- Core Processing → /platform/#core-processing
- Digital Banking → /platform/#digital-banking
- Account Opening → /platform/#account-opening
- Payments Hub → /platform/#payments-hub

---

### Scenario 4: Click Loyalty and Intelligence Links (3N–3S)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Platform dropdown open |
| **WHEN** | I click on Levels (3N), Engage (3O), Connect (3P), Insights (3Q), Nymbus MCP (3R), or Fraud Intelligence (3S) |
| **THEN** | User is navigated to the corresponding anchor on /platform/ |

**Destinations:**
- Levels → /platform/#levels
- Engage → /platform/#engage
- Connect → /platform/#connect
- Insights → /platform/#insights
- Nymbus MCP → /platform/#nymbus-mcp
- Fraud Intelligence → /platform/#fraud-intelligence

---

### Scenario 5: Click Managed Services from Platform Dropdown (3T)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Platform dropdown open |
| **WHEN** | I click on 'Managed Services' (3T) |
| **THEN** | User is navigated to /managed-services/ |

**Acceptance Criteria:**
1. Navigation to /managed-services/
2. Dropdown closes on click

---

### Scenario 6: Open Managed Services Dropdown

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect on any page |
| **WHEN** | I hover over or click the 'Managed Services' nav link (3B) |
| **THEN** | The Managed Services dropdown panel expands showing operational services and Labs |

**Acceptance Criteria:**
1. Dropdown appears with smooth animation
2. Columns: Intro + CTA, Run the operations, Growth, Featured
3. All 7 operational links visible
4. Labs link visible under Growth

---

### Scenario 7: Click Operations Links (3W–3AC)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Managed Services dropdown open |
| **WHEN** | I click on any operations link: Contact Center (3W), Onboarding (3X), Servicing (3Y), Back Office (3Z), Compliance (3AA), Fraud (3AB), or Business Banking Support (3AC) |
| **THEN** | User is navigated to the corresponding anchor on /managed-services/ |

**Destinations:**
- Contact Center → /managed-services/#contact-center
- Onboarding → /managed-services/#onboarding
- Servicing → /managed-services/#servicing
- Back Office → /managed-services/#back-office
- Compliance → /managed-services/#compliance
- Fraud → /managed-services/#fraud
- Business Banking Support → /managed-services/#business-banking-support

---

### Scenario 8: Click Labs Link (3AD)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Managed Services dropdown open |
| **WHEN** | I click on 'Labs' (3AD) |
| **THEN** | User is navigated to /labs/ |

**Acceptance Criteria:**
1. Navigation to /labs/
2. Dropdown closes on click

---

### Scenario 9: Open Solutions Dropdown

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect on any page |
| **WHEN** | I hover over or click the 'Solutions' nav link (3C) |
| **THEN** | The Solutions dropdown panel expands showing parallel/primary core options and segments |

**Acceptance Criteria:**
1. Dropdown appears with smooth animation
2. Columns: Intro, Parallel Core + Primary Core, Segments, Featured
3. Parallel Core shows 5 links, Primary Core shows 2 links
4. Segments shows Retail, Business, Commercial

---

### Scenario 10: Click Parallel Core Links (3AF–3AJ)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Solutions dropdown open |
| **WHEN** | I click on any Parallel Core link: Vertical brand launches (3AF), New lines of business (3AG), M&A acceleration (3AH), Private label banking (3AI), or Sandbox innovation (3AJ) |
| **THEN** | User is navigated to the corresponding anchor on /solutions/parallel-core/ |

**Destinations:**
- Vertical brand launches → /solutions/parallel-core/#vertical-brand
- New lines of business → /solutions/parallel-core/#new-lines
- M&A acceleration → /solutions/parallel-core/#ma-acceleration
- Private label banking → /solutions/parallel-core/#private-label
- Sandbox innovation → /solutions/parallel-core/#sandbox

---

### Scenario 11: Click Primary Core Links (3AK–3AL)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Solutions dropdown open |
| **WHEN** | I click on 'Core replacement' (3AK) or 'De novo launch' (3AL) |
| **THEN** | User is navigated to the corresponding anchor on /solutions/primary-core/ |

**Destinations:**
- Core replacement → /solutions/primary-core/#core-replacement
- De novo launch → /solutions/primary-core/#de-novo

---

### Scenario 12: Click Segment Links (3AM–3AO)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Solutions dropdown open |
| **WHEN** | I click on 'Retail' (3AM), 'Business' (3AN), or 'Commercial' (3AO) |
| **THEN** | User is navigated to the corresponding business banking page or anchor |

**Destinations:**
- Retail → /solutions/retail-banking/
- Business → /solutions/business-banking/
- Commercial → /solutions/commercial-banking/

---

### Scenario 13: Open AI Dropdown

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect on any page |
| **WHEN** | I hover over or click the 'AI' nav link (3D) |
| **THEN** | The AI dropdown panel expands showing AI approach links and featured card |

**Acceptance Criteria:**
1. Dropdown appears with smooth animation
2. Columns: Intro + CTA, Our Approach (3 links), empty, Featured
3. 'Build with AI' CTA button visible

---

### Scenario 14: Click AI Links (3AQ–3AT)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with AI dropdown open |
| **WHEN** | I click on 'Build with AI' (3AQ), 'AI Approach' (3AR), 'Nymbus MCP' (3AS), or 'Applied AI' (3AT) |
| **THEN** | User is navigated to the corresponding page or anchor on /ai/ |

**Destinations:**
- Build with AI → /ai/
- AI Approach → /ai/#ai-approach
- Nymbus MCP → /ai/#nymbus-mcp
- Applied AI → /ai/#applied-ai

---

### Scenario 15: Open Resources Dropdown

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect on any page |
| **WHEN** | I hover over or click the 'Resources' nav link (3E) |
| **THEN** | The Resources dropdown panel expands showing Learn and Company links |

**Acceptance Criteria:**
1. Dropdown appears with smooth animation
2. Columns: Intro + CTA, Learn, Company, Featured
3. 'Latest insights' CTA visible
4. Company links include About, Pressroom, Contact

---

### Scenario 16: Click Resources Learn Links (3AV–3AX)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Resources dropdown open |
| **WHEN** | I click on 'Latest insights' (3AV), 'Insights' (3AW), or 'Customers' (3AX) |
| **THEN** | User is navigated to /insights-hub/ |

**Destinations:**
- Latest insights → /insights-hub/
- Insights → /insights-hub/
- Customers → /insights-hub/

---

### Scenario 17: Click Company Links (3AY–3BA)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with Resources dropdown open |
| **WHEN** | I click on 'About Nymbus' (3AY), 'Pressroom' (3AZ), or 'Contact' (3BA) |
| **THEN** | User is navigated to the corresponding page |

**Destinations:**
- About Nymbus → /about/
- Pressroom → /press/
- Contact → /contact/

---

### Scenario 18: Click Header CTA — Let's move (3G)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect on any page |
| **WHEN** | I click on the 'Let's move' button (3G) in the header |
| **THEN** | User is navigated to /contact/ |

**Acceptance Criteria:**
1. Navigation to /contact/
2. Button is styled as primary CTA (filled background)
3. Always visible in header regardless of dropdown state

---

### Scenario 19: Click Header CTA — Try the Demo (3F)

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect on any page |
| **WHEN** | I click on the 'Try the Demo' button (3F) in the header |
| **THEN** | User is navigated to the external demo link |

**Acceptance Criteria:**
1. Navigation to external demo URL [COMING AUG 31]
2. Button styled as secondary CTA (outlined)
3. Opens in new tab if external link

---

### Scenario 20: Click Featured Card in Dropdown

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with any dropdown open |
| **WHEN** | I click on a featured card (3U/3AE/3AP/3AU/3BB) |
| **THEN** | User is navigated to the featured content destination |

**Destinations:**
- Platform Featured (3U) → /platform/#nymbus-mcp
- Managed Services Featured (3AE) → /labs/
- Solutions Featured (3AP) → /labs/
- AI Featured (3AU) → /ai/#nymbus-mcp
- Resources Featured (3BB) → /ai/

---

### Scenario 21: Dropdown Close Behavior

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with any dropdown open |
| **WHEN** | I move my mouse away from the dropdown area OR click outside the dropdown OR press Escape |
| **THEN** | The dropdown closes with smooth animation |

**Acceptance Criteria:**
1. Close animation: 150ms fade-out
2. Escape key closes active dropdown
3. Clicking any page content outside dropdown closes it
4. Hovering another nav item opens that dropdown and closes current

---

### Scenario 22: Dropdown Switch Between Nav Items

| Step | Detail |
|------|--------|
| **GIVEN** | As a Prospect with one dropdown open |
| **WHEN** | I hover over or click a different nav link (e.g. from Platform to AI) |
| **THEN** | The current dropdown closes and the new dropdown opens seamlessly |

**Acceptance Criteria:**
1. No visible gap between close and open
2. Content swaps immediately
3. No stacking of multiple dropdowns

---

## Appendix: Sarah's Full Comments

### Animations & Interactions

| Area | Comment | Reference URL |
|------|---------|---------------|
| Button hover (primary) | Slide change of fill animation | https://www.untitledui.com/react/components/buttons |
| Button hover (secondary) | Slide change of fill animation | https://www.untitledui.com/react/components/buttons |
| Nav dropdown animation | Main nav drop down animation | https://rebrand-kohl.vercel.app/ |
| Arrow in nav links | On hover: arrow grows with ease | — |
| Nav menu reappear | [Question from Mike: how should menu reappear — button click, mouseover, etc.?] | — |

### Design Notes

| Area | Comment |
|------|---------|
| Phase 2 header | Phase 2 dropdown designs exist at Y:3340 on the canvas (includes additional Learn links: Integrations, Product releases; additional Company links: CUSO, Jobs) |
| CTA forms | All CTA contact buttons use the single /contact form for Phase 1 (no need to overcomplicate) |

---

## Open Questions

1. **Nav menu reappear behavior** — Mike asked Sarah: "how do you want the menu to reappear — on button click in top left, mouseover etc.?" (node `17:2397`). No resolution captured yet.

2. **Try the Demo URL** — External demo link is marked as "COMING AUG 31." Needs URL once available.

3. **Mobile dropdown behavior** — Design shows desktop hover behavior. Mobile tap/toggle behavior not specified in Figma. Confirm: does it use accordion-style expand, or full-screen overlay?

4. **Dropdown backdrop** — Should there be a semi-transparent overlay behind the dropdown panel to dim page content? Not shown in Figma but common in mega-menu patterns.

5. **Keyboard navigation** — Tab order through dropdown links not specified. Confirm ARIA pattern: should it use `role="menu"` with arrow key navigation?

6. **Phase 2 additions** — Phase 2 Resources dropdown adds: Integrations ("Plug in your partners"), Product releases ("See what shipped"), CUSO, Jobs. When is Phase 2 targeted?

7. **Customers link destination** — Both "Insights" and "Customers" in the Resources dropdown point to /insights-hub/. Should Customers have its own filtered view (e.g., /insights-hub/?filter=case-study)?
