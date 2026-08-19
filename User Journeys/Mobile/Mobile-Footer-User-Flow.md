# Mobile Footer User Flow & Journey

**Source:** Figma Dev Hand-off — Mobile Footer Ad (Node 282:8202)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=282-8202
**Last Updated:** August 11, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Component Structure](#2-component-structure)
3. [Layout & Visual Specifications](#3-layout--visual-specifications)
4. [Navigation Columns](#4-navigation-columns)
5. [Bottom Bar](#5-bottom-bar)
6. [Mobile Interactions & Animations](#6-mobile-interactions--animations)
7. [User Journey Scenarios](#7-user-journey-scenarios)
8. [Accessibility & Touch Guidelines](#8-accessibility--touch-guidelines)
9. [Open Questions](#9-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile footer retains all link content from the desktop footer but reorganizes the 5-column desktop layout into a stacked 2-column grid. Unlike the mobile header (which uses an overlay + accordion pattern), the mobile footer displays all links in a static, always-visible layout — no expand/collapse interactions required.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| 5-column link grid | 2-column stacked pairs | Fits 428px viewport |
| Horizontal layout | Vertical stacking | Column pairs flow top-to-bottom |
| Hover state on links | Tap state on links | No hover on touch devices |
| Social icons right-aligned | Social icons left-aligned below content | Thumb-zone accessibility |
| Single row bottom bar | Stacked bottom bar (multi-line) | Limited horizontal space |

### Design Decisions

- **No accordion/collapse** — All footer links are visible without interaction (differs from many mobile footer patterns that collapse sections)
- **2-column pairs** — Platform + Managed Services on first row, Solutions + Resources/Company on second row
- **Same link destinations** — All URLs match desktop footer exactly
- **Touch-optimized spacing** — 30px vertical spacing between links for adequate touch targets

---

## 2. Component Structure

### Figma Frame Reference

| Frame | Node ID | Description | Dimensions |
|-------|---------|-------------|------------|
| Mobile Footer Ad | `282:8202` | Complete mobile footer component | 428 × 1075px |
| Footer Content | `282:8204` | Navigation columns area | 388 × 714px |
| Bottom Bar | `282:8268` | Copyright, address, phone, social | 388 × 146px |

### Component Hierarchy

```
Mobile Footer (428 × 1075px)
├── Footer Content (20px padding sides)
│   ├── Brand (Nymbus Logo)
│   │   └── LinkComponent (36.9 × 28px)
│   │
│   └── Link Columns (2-column stacked grid)
│       ├── Row 1
│       │   ├── Platform (left, 184px wide, 9 links)
│       │   └── Managed Services (right, 184px wide, 8 links)
│       │
│       └── Row 2
│           ├── Solutions (left, 184px wide, 10 links)
│           └── Resources + Company (right)
│               ├── Resources (2 links)
│               └── Company (4 links)
│
├── Divider (top border of bottom bar)
│
└── Bottom Bar (20px padding sides)
    ├── Copyright text
    ├── Address text
    ├── Phone number (tel: link)
    └── Social Icons (LinkedIn, X, Medium)
```

---

## 3. Layout & Visual Specifications

### Container Dimensions

| Property | Value | Notes |
|----------|-------|-------|
| Total width | 428px | Full mobile viewport |
| Total height | 1075px | Content-driven |
| Horizontal padding | 20px each side | Content area = 388px |
| Top padding | 60px | Space above logo |
| Content area | 388 × 714px | Link columns |
| Bottom bar | 388 × 146px | Below divider |

### Typography

| Element | Style | Size | Weight |
|---------|-------|------|--------|
| Column headings | Label | 14px (estimated) | Bold/600 |
| Link text | Body | 14px (estimated) | Regular/400 |
| Copyright | Caption | ~12px | Regular/400 |
| Address | Caption | ~12px | Regular/400 |
| Phone | Caption | ~12px | Regular/400 |

### Column Grid

| Property | Value |
|----------|-------|
| Column width | 184px each |
| Gutter between columns | 20px |
| Row gap (between stacked pairs) | 40px |
| Link vertical spacing | 30px (line height included) |
| Heading to first link | 32px |

### Colors

| Element | Value | Notes |
|---------|-------|-------|
| Background | Dark (#0A0A0A or similar) | Matches page dark theme |
| Text (headings) | White (#FFFFFF) | High contrast |
| Text (links) | Light grey/white | Readable on dark |
| Divider | Subtle grey line | Separates nav from bottom bar |

---

## 4. Navigation Columns

### Column 1: Platform (Left, Row 1)

**Figma Node:** `282:8219`
**Heading:** "Platform" (node `282:8220`)

| Ref | Link | Destination |
|-----|------|-------------|
| MF-1 | Core Processing | /platform/#core-processing |
| MF-2 | Digital Banking | /platform/#digital-banking |
| MF-3 | Account Opening | /platform/#account-opening |
| MF-3b | Payments Hub (Beta) | /platform/#payments-hub |
| MF-4 | Connect | /platform/#connect |
| MF-5 | Insights | /platform/#insights |
| MF-6 | Nymbus MCP | /platform/#nymbus-mcp |
| MF-7 | Fraud Intelligence | /platform/#fraud-intelligence |
| MF-8 | Levels | /platform/#levels |
| MF-9 | Engage | /platform/#engage |

---

### Column 2: Managed Services (Right, Row 1)

**Figma Node:** `282:8231`
**Heading:** "Managed Services" (node `282:8232`)

| Ref | Link | Destination |
|-----|------|-------------|
| MF-10 | Contact Center | /managed-services/#contact-center |
| MF-11 | Onboarding | /managed-services/#onboarding |
| MF-12 | Servicing | /managed-services/#servicing |
| MF-13 | Compliance | /managed-services/#compliance |
| MF-14 | Fraud | /managed-services/#fraud |
| MF-15 | Back Office | /managed-services/#back-office |
| MF-16 | Business Banking Support | /managed-services/#business-banking-support |
| MF-17 | Labs | /labs/ |

---

### Column 3: Solutions (Left, Row 2)

**Figma Node:** `282:8242`
**Heading:** "Solutions" (node `282:8243`)

| Ref | Link | Destination |
|-----|------|-------------|
| MF-18 | Core replacement | /solutions/primary-core/#core-replacement |
| MF-19 | De novo launch | /solutions/primary-core/#de-novo |
| MF-20 | Vertical brand launches | /solutions/parallel-core/#vertical-brand |
| MF-21 | New lines of business | /solutions/parallel-core/#new-lines |
| MF-22 | M&A acceleration | /solutions/parallel-core/#ma-acceleration |
| MF-23 | Private label banking | /solutions/parallel-core/#private-label |
| MF-24 | Sandbox innovation | /solutions/parallel-core/#sandbox |
| MF-25 | Retail banking | /solutions/retail-banking/ |
| MF-26 | Business banking | /solutions/business-banking/ |
| MF-27 | Commercial banking | /solutions/commercial-banking/ |

---

### Column 4: Resources + Company (Right, Row 2)

**Figma Node:** `282:8255`

#### Resources Section

**Figma Node:** `282:8256`
**Heading:** "Resources" (node `282:8257`)

| Ref | Link | Destination |
|-----|------|-------------|
| MF-28 | Insights | /insights-hub/ |
| MF-29 | AI | /ai/ |

#### Company Section

**Figma Node:** `282:8261`
**Heading:** "Company" (node `282:8262`)

| Ref | Link | Destination |
|-----|------|-------------|
| MF-30 | About Nymbus | /about/ |
| MF-31 | Press | /press/ |
| MF-32 | Contact us | /contact/ |
| MF-33 | Privacy policy | /privacy-policy/ |

---

## 5. Bottom Bar

**Figma Node:** `282:8268`
**Dimensions:** 388 × 146px (within 20px side padding)

### Layout

Unlike desktop (single horizontal row), the mobile bottom bar stacks content vertically:

```
┌──────────────────────────────────────┐
│ © 2026 NYMBUS, All rights reserved.  │
│ 208 N Laura St, 8th & 9th floor...   │
│ +1 (855) 210-7874                    │
│ [in] [X] [M]                         │
└──────────────────────────────────────┘
```

### Content Elements

| Ref | Element | Content | Behavior |
|-----|---------|---------|----------|
| MF-34 | Copyright | © 2026 NYMBUS, All rights reserved. | Static text |
| MF-35 | Address | 208 N Laura St, 8th & 9th floor, Jacksonville, FL 32202 | Maps link — opens Apple Maps (iOS) / Google Maps (Android) |
| MF-36 | Phone | +1 (855) 210-7874 | `tel:` link — opens phone dialer |
| MF-37 | Social: LinkedIn | LinkedIn icon (18×18px) | Opens LinkedIn profile (new tab): https://linkedin.com/company/nymbus |
| MF-38 | Social: X/Twitter | X icon (18×18px) | Opens X profile (new tab): https://x.com/NymbusCore |
| MF-39 | Social: Medium | Medium icon (18×18px) | Opens Medium publication (new tab): https://medium.com/@nymbus |

### Bottom Bar Spacing

| Property | Value |
|----------|-------|
| Copyright to address | 32px |
| Address to phone | 32px |
| Phone to social icons | 32px |
| Social icon spacing | 16px between icons |
| Social icon size | 18 × 18px |

---

## 6. Mobile Interactions & Animations

### Link Interactions

| Element | Trigger | Mobile Behavior |
|---------|---------|-----------------|
| Navigation links | Tap | Navigate to URL |
| Navigation links | Tap (feedback) | Brief background highlight (100ms) |
| Column headings | — | Non-interactive labels |
| Phone number | Tap | Opens native phone dialer |
| Address | Tap (optional) | Opens maps app (if linked) |
| Social icons | Tap | Opens social profile in new tab/app |
| Nymbus logo | Tap | Navigates to homepage (/) |

### Animation Considerations

| Aspect | Specification | Notes |
|--------|--------------|-------|
| Footer appearance | No animation | Static element at page bottom |
| Link tap feedback | 100ms background highlight | Immediate touch feedback |
| Social icon tap | Opacity flash (0.7 → 1.0) | Confirms touch registered |
| Page transition | Standard browser navigation | No custom transition |

### Mobile-Specific Behaviors

- **No hover states** — All interactions are tap-based
- **No accordion collapse** — Footer shows all links statically (per Figma design)
- **Phone dialer integration** — `tel:` link triggers native dialer directly
- **Address as maps link** — Confirmed: wrap in link to open Apple Maps/Google Maps
- **Social deep-linking** — If LinkedIn/X app installed, opens in-app (system handles)

---

## 7. User Journey Scenarios

### Scenario MF1: Tap Platform Footer Link

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page, scrolled to footer |
| **WHEN** | User taps "Core Processing" (MF-1) |
| **THEN** | User navigates to /platform/#core-processing |

**Acceptance Criteria:**
1. Tap feedback shown (brief highlight)
2. Navigation to /platform/ with scroll to #core-processing anchor
3. Page loads and scrolls to correct section

---

### Scenario MF2: Tap Managed Services Footer Link

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page, scrolled to footer |
| **WHEN** | User taps "Contact Center" (MF-10) |
| **THEN** | User navigates to /managed-services/#contact-center |

**Acceptance Criteria:**
1. Tap feedback shown
2. Navigation to /managed-services/ with scroll to #contact-center anchor
3. Mobile header visible on destination page

---

### Scenario MF3: Tap Solutions Footer Link

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page, scrolled to footer |
| **WHEN** | User taps "Retail banking" (MF-25) |
| **THEN** | User navigates to /solutions/retail-banking/ |

**Acceptance Criteria:**
1. Tap feedback shown
2. Navigation to retail banking page
3. Page loads at top

---

### Scenario MF4: Tap Resources Link

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page, scrolled to footer |
| **WHEN** | User taps "Insights" (MF-28) |
| **THEN** | User navigates to /insights-hub/ |

**Acceptance Criteria:**
1. Navigation to insights hub
2. Page loads at top

---

### Scenario MF5: Tap Company Link

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page, scrolled to footer |
| **WHEN** | User taps "Contact us" (MF-32) |
| **THEN** | User navigates to /contact/ |

**Acceptance Criteria:**
1. Navigation to contact page
2. Contact form accessible on mobile

---

### Scenario MF6: Tap Phone Number

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page (mobile), scrolled to footer |
| **WHEN** | User taps the phone number "+1 (855) 210-7874" (MF-36) |
| **THEN** | Native phone dialer opens with number pre-filled |

**Acceptance Criteria:**
1. Link uses `tel:+18552107874` protocol
2. iOS: Phone app opens with number
3. Android: Dialer opens with number
4. Number is visually styled as tappable (underline or color)

---

### Scenario MF7: Tap Social Media Icon

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page, scrolled to footer |
| **WHEN** | User taps the LinkedIn icon (MF-37) |
| **THEN** | LinkedIn profile opens in new tab or LinkedIn app |

**Acceptance Criteria:**
1. Tap feedback (opacity flash)
2. If LinkedIn app installed: opens in-app (system URL scheme)
3. If no app: opens in new Safari/Chrome tab
4. `rel="noopener noreferrer"` on link
5. Same behavior for X (MF-38) and Medium (MF-39)

---

### Scenario MF8: Tap Nymbus Logo

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page, scrolled to footer |
| **WHEN** | User taps the Nymbus logo at top of footer |
| **THEN** | User navigates to homepage (/) |

**Acceptance Criteria:**
1. Navigation to /
2. Page loads at top
3. Logo touch target is minimum 44×44px (even though visual is 37×28px)

---

### Scenario MF9: Tap Address

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page (mobile), scrolled to footer |
| **WHEN** | User taps the address text (MF-35) |
| **THEN** | Maps application opens with Nymbus location |

**Acceptance Criteria:**
1. Opens Apple Maps (iOS) or Google Maps (Android)
2. Location: 208 N Laura St, 8th & 9th floor, Jacksonville, FL 32202
3. Link uses geo: or maps URL scheme appropriate for platform

---

### Scenario MF10: Tap Labs Link

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page, scrolled to footer |
| **WHEN** | User taps "Labs" (MF-17) |
| **THEN** | User navigates to /labs/ |

**Acceptance Criteria:**
1. Navigation to /labs/
2. Page loads at top

---

## 8. Accessibility & Touch Guidelines

### Touch Targets

| Element | Minimum Size | Actual Spacing | Status |
|---------|--------------|----------------|--------|
| Navigation links | 44 × 44px | 30px vertical gap (effective 44px with padding) | ✓ Adequate |
| Column headings | N/A | Non-interactive | N/A |
| Phone number | 44 × 44px | Full-width tappable area | ✓ Compliant |
| Social icons | 44 × 44px | 18×18px visual, needs padding to 44px | ⚠ Needs padding |
| Logo | 44 × 44px | 37×28px visual, needs expanded target | ⚠ Needs padding |

### ARIA & Semantics

| Component | Implementation |
|-----------|----------------|
| Footer container | `<footer role="contentinfo">` |
| Navigation area | `<nav aria-label="Footer navigation">` |
| Column headings | `<h4>` or `aria-label` on group |
| Link groups | `<ul>` within each column |
| Phone link | `<a href="tel:+18552107874" aria-label="Call Nymbus: +1 855 210 7874">` |
| Social links | `<a aria-label="Nymbus on LinkedIn (opens in new tab)">` |
| Address | `<address>` element |

### Focus & Navigation

| Requirement | Implementation |
|-------------|----------------|
| Tab order | Left-to-right, top-to-bottom within columns |
| Focus indicator | Visible outline/ring on all links |
| Skip to footer | Accessible via landmark navigation |
| Reduced motion | No animations to disable |

---

## 9. Open Questions (All Resolved)

1. **Logo click** — Confirmed: tappable, navigates to homepage (/).

2. **Social media URLs** — Confirmed from desktop footer:
   - LinkedIn: https://linkedin.com/company/nymbus
   - Twitter/X: https://twitter.com/naborsnymbus
   - Medium: https://medium.com/@nymbus

3. **Address as link** — Confirmed: Yes, wrap in maps link (opens Apple Maps on iOS, Google Maps on Android).

4. **Social icon touch targets** — Confirmed: Use invisible padding to expand 18×18px icons to 44×44px touch targets. Visual size stays at 18px.

5. **Payments Hub (Beta)** — Was unintentionally omitted. Now added to Figma frames for both desktop and mobile footers. Add as MF-3b between Account Opening (MF-3) and Connect (MF-4): "Payments Hub (Beta)" → /platform/#payments-hub.

6. **"Levels" and "Engage" placement** — Confirmed: No sub-headings needed in mobile footer. Listed flat under Platform.

---

## Complete URL Map (Mobile Footer)

| Ref | Link Text | Destination | Section |
|-----|-----------|-------------|---------|
| MF-1 | Core Processing | /platform/#core-processing | Platform |
| MF-2 | Digital Banking | /platform/#digital-banking | Platform |
| MF-3 | Account Opening | /platform/#account-opening | Platform |
| MF-3b | Payments Hub (Beta) | /platform/#payments-hub | Platform |
| MF-4 | Connect | /platform/#connect | Platform |
| MF-5 | Insights | /platform/#insights | Platform |
| MF-6 | Nymbus MCP | /platform/#nymbus-mcp | Platform |
| MF-7 | Fraud Intelligence | /platform/#fraud-intelligence | Platform |
| MF-8 | Levels | /platform/#levels | Platform |
| MF-9 | Engage | /platform/#engage | Platform |
| MF-10 | Contact Center | /managed-services/#contact-center | Managed Services |
| MF-11 | Onboarding | /managed-services/#onboarding | Managed Services |
| MF-12 | Servicing | /managed-services/#servicing | Managed Services |
| MF-13 | Compliance | /managed-services/#compliance | Managed Services |
| MF-14 | Fraud | /managed-services/#fraud | Managed Services |
| MF-15 | Back Office | /managed-services/#back-office | Managed Services |
| MF-16 | Business Banking Support | /managed-services/#business-banking-support | Managed Services |
| MF-17 | Labs | /labs/ | Managed Services |
| MF-18 | Core replacement | /solutions/primary-core/#core-replacement | Solutions |
| MF-19 | De novo launch | /solutions/primary-core/#de-novo | Solutions |
| MF-20 | Vertical brand launches | /solutions/parallel-core/#vertical-brand | Solutions |
| MF-21 | New lines of business | /solutions/parallel-core/#new-lines | Solutions |
| MF-22 | M&A acceleration | /solutions/parallel-core/#ma-acceleration | Solutions |
| MF-23 | Private label banking | /solutions/parallel-core/#private-label | Solutions |
| MF-24 | Sandbox innovation | /solutions/parallel-core/#sandbox | Solutions |
| MF-25 | Retail banking | /solutions/retail-banking/ | Solutions |
| MF-26 | Business banking | /solutions/business-banking/ | Solutions |
| MF-27 | Commercial banking | /solutions/commercial-banking/ | Solutions |
| MF-28 | Insights | /insights-hub/ | Resources |
| MF-29 | AI | /ai/ | Resources |
| MF-30 | About Nymbus | /about/ | Company |
| MF-31 | Press | /press/ | Company |
| MF-32 | Contact us | /contact/ | Company |
| MF-33 | Privacy policy | /privacy-policy/ | Company |
| MF-35 | Address | https://maps.apple.com/?address=208+N+Laura+St,+Jacksonville,+FL+32202 | Bottom Bar |
| MF-36 | Phone | tel:+18552107874 | Bottom Bar |
| MF-37 | LinkedIn | https://linkedin.com/company/nymbus | Bottom Bar |
| MF-38 | X/Twitter | https://x.com/NymbusCore | Bottom Bar |
| MF-39 | Medium | https://medium.com/@nymbus | Bottom Bar |

---

## Flow Diagram

```
[User on any mobile page]
        |
        v (scrolls to bottom)
[Mobile Footer visible — all links displayed, no collapse]
        |
        +---> [Taps Platform link] -----------> [/platform/#section]
        |
        +---> [Taps Managed Services link] ---> [/managed-services/#section]
        |
        +---> [Taps Labs] -------------------> [/labs/]
        |
        +---> [Taps Solutions link] ----------> [/solutions/...]
        |
        +---> [Taps Resources link] ----------> [/insights-hub/ or /ai/]
        |
        +---> [Taps Company link] ------------> [/about/ | /press/ | /contact/ | /privacy-policy/]
        |
        +---> [Taps phone number] ------------> [Opens phone dialer]
        |
        +---> [Taps social icon] -------------> [Opens profile in app or new tab]
        |
        +---> [Taps Nymbus logo] -------------> [Navigates to homepage /]
        |
        +---> [Taps address] -----------------> [Opens maps app]
```

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 11, 2026 | Initial mobile footer document | Kiro |
