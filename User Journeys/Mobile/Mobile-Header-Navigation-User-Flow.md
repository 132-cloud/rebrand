# Mobile Header Navigation User Flow & Journey

**Source:** Figma Dev Hand-off — Mobile Navigation Frames (Node 1:3)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=1-3
**Last Updated:** August 11, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Component Structure](#2-component-structure)
3. [Mobile Header Bar](#3-mobile-header-bar)
4. [Full-Screen Menu Overlay](#4-full-screen-menu-overlay)
5. [Accordion Section States](#5-accordion-section-states)
6. [Sticky Footer CTAs](#6-sticky-footer-ctas)
7. [Mobile Animations & Interactions](#7-mobile-animations--interactions)
8. [User Journey Scenarios](#8-user-journey-scenarios)
9. [Accessibility & Touch Guidelines](#9-accessibility--touch-guidelines)
10. [Sarah's Design Comments](#10-sarahs-design-comments)
11. [Open Questions](#11-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile navigation transforms the desktop mega-menu dropdowns into a full-screen overlay with accordion-style expansion. This approach prioritizes thumb-friendly interactions, clear visual hierarchy, and reduced cognitive load on smaller screens.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| Hover-triggered dropdowns | Tap-triggered accordion | No hover state on touch devices |
| Multi-column mega-menus | Single-column accordion list | Limited horizontal space |
| Persistent header CTAs | Sticky footer CTA strip | Thumb-zone optimization |
| Featured cards in dropdowns | Removed from mobile menu | Reduces menu complexity |
| 200ms hover animations | Simplified slide animations | Performance on mobile |
| Background blur overlay | Solid background overlay | Reduced GPU load |

### Design Philosophy

Per Sarah's direction and mobile best practices:
- **Lighter weight animations** — No chrome animated blobs, simplified transitions
- **Touch-first interactions** — All targets minimum 44×44px
- **Progressive disclosure** — Accordion reveals content on demand
- **Sticky CTAs** — Per Sarah: "sticky buttons stripe.com as reference" — CTAs float at viewport bottom
- **Clear exit paths** — Close button (X) always visible, back navigation on expanded states

---

## 2. Component Structure

### Figma Frames Reference

| Frame | Node ID | Description | Dimensions |
|-------|---------|-------------|------------|
| Nav Mobile | `302:7965` | Header bar with hamburger | 428 × 87px |
| mobile-nav-menu | `316:10071` | Collapsed menu overlay | 428 × 926px |
| mobile-nav-menu-platform-click | `316:10226` | Platform section expanded | 428 × 2030px |
| mobile-nav-menu-managed-services-click | `316:10310` | Managed Services expanded | 428 × (varies) |
| mobile-nav-menu-solutions-click | `316:10393` | Solutions expanded | 428 × (varies) |
| mobile-nav-menu-labs-click | `316:10144` | Labs expanded | 428 × (varies) |
| mobile-nav-menu-ai-click | `316:10477` | AI expanded | 428 × (varies) |
| mobile-nav-menu-resources-click | `316:10558` | Resources expanded | 428 × (varies) |

### Component Hierarchy

```
Mobile Navigation
├── Header Bar (always visible)
│   ├── Logo
│   └── Hamburger Icon
│
└── Full-Screen Overlay (on menu open)
    ├── Header (Logo + Close X)
    ├── Scrollable Menu Content
    │   ├── Platform (accordion)
    │   ├── Managed Services (accordion)
    │   ├── Solutions (accordion)
    │   ├── Labs (accordion)
    │   ├── AI (accordion)
    │   └── Resources (accordion)
    │
    └── Sticky Footer CTAs
        ├── Button 4 (Try demo)
        └── Button 5 (Let's move)
```

---

## 3. Mobile Header Bar

**Figma Node:** `302:7965` (Nav Mobile)
**Dimensions:** 428 × 87px (full viewport width)

### Header Elements

| Ref | Element | Position | Touch Target | Action |
|-----|---------|----------|--------------|--------|
| M-1 | Nymbus Logo | Left | 44 × 44px min | Tap → Navigate to homepage |
| M-2 | Hamburger Icon | Right | 44 × 44px min | Tap → Open full-screen menu |

### Header States

| State | Visual | Behavior |
|-------|--------|----------|
| Default | Dark background, white logo + hamburger | Fixed at top of viewport |
| Menu Open | Transforms to overlay header | Logo persists, hamburger becomes X |
| Scrolled (page content) | Optional: slight shadow/blur | Maintains contrast |

### Implementation Notes

- Header should be `position: fixed` with `z-index` above page content
- On menu open, hamburger icon animates to X (close) icon
- Logo remains tappable in both states (navigates to homepage)
- Safe area insets respected for notched devices (iOS)

---

## 4. Full-Screen Menu Overlay

**Figma Node:** `316:10071` (mobile-nav-menu)
**Dimensions:** 428 × 926px (full viewport coverage)

### Overlay Structure

| Ref | Element | Position | Description |
|-----|---------|----------|-------------|
| M-3 | Overlay Header | Top | Logo (left) + Close X (right) |
| M-4 | Menu Content | Center (scrollable) | Accordion section list |
| M-5 | Sticky Footer | Bottom (fixed) | Two CTA buttons |

### Overlay Header (M-3)

| Element | Touch Target | Action |
|---------|--------------|--------|
| Logo | 44 × 44px | Tap → Close menu + Navigate to homepage |
| Close X | 44 × 44px | Tap → Close menu overlay |

### Menu Section Links (Collapsed State)

| Ref | Section | Chevron | Tap Action |
|-----|---------|---------|------------|
| M-6 | Platform | Right chevron (▼) | Expands Platform accordion |
| M-7 | Managed Services | Right chevron (▼) | Expands Managed Services accordion |
| M-8 | Solutions | Right chevron (▼) | Expands Solutions accordion |
| M-9 | Labs | Right chevron (▼) | Expands Labs accordion |
| M-10 | AI | Right chevron (▼) | Expands AI accordion |
| M-11 | Resources | Right chevron (▼) | Expands Resources accordion |

### Visual Specifications

| Property | Value | Notes |
|----------|-------|-------|
| Background | Solid dark (#0A0A0A or similar) | No blur for performance |
| Text color | White (#FFFFFF) | High contrast |
| Section height | 56px minimum | Per WCAG touch guidelines |
| Section spacing | 8px vertical gap | Clear visual separation |
| Chevron icon | 24 × 24px | Rotates on expand |

---

## 5. Accordion Section States

Each navigation section expands to show sub-links in a single-column format. Unlike desktop mega-menus, mobile shows one expanded section at a time to prevent cognitive overload.

### Platform Expanded

**Figma Node:** `316:10226` (mobile-nav-menu-platform-click)

| Ref | Element | Tap Action |
|-----|---------|------------|
| M-12 | ← Back | Collapses accordion, returns to main menu |
| M-13 | Platform (header) | Section identifier, not tappable |
| M-14 | Platform overview | → /platform/ |
| M-15 | Core Processing | → /platform/#core-processing |
| M-16 | Digital Banking | → /platform/#digital-banking |
| M-17 | Account Opening | → /platform/#account-opening |
| M-18 | Payments Hub (Beta) | → /platform/#payments-hub |
| M-19 | Levels | → /platform/#levels |
| M-20 | Engage | → /platform/#engage |
| M-21 | Connect | → /platform/#connect |
| M-22 | Insights | → /platform/#insights |
| M-23 | Nymbus MCP | → /platform/#nymbus-mcp |
| M-24 | Fraud Intelligence | → /platform/#fraud-intelligence |

**Note:** "Managed Services" cross-link from desktop dropdown is omitted on mobile to reduce redundancy (user can access via main menu).

---

### Managed Services Expanded

**Figma Node:** `316:10310` (mobile-nav-menu-managed-services-click)

| Ref | Element | Tap Action |
|-----|---------|------------|
| M-25 | ← Back | Collapses accordion, returns to main menu |
| M-26 | Managed Services (header) | Section identifier |
| M-27 | Managed Services overview | → /managed-services/ |
| M-28 | Contact Center | → /managed-services/#contact-center |
| M-29 | Onboarding | → /managed-services/#onboarding |
| M-30 | Servicing | → /managed-services/#servicing |
| M-31 | Back Office | → /managed-services/#back-office |
| M-32 | Compliance | → /managed-services/#compliance |
| M-33 | Fraud | → /managed-services/#fraud |
| M-34 | Business Banking Support | → /managed-services/#business-banking-support |

---

### Solutions Expanded

**Figma Node:** `316:10393` (mobile-nav-menu-solutions-click)

| Ref | Element | Tap Action |
|-----|---------|------------|
| M-35 | ← Back | Collapses accordion, returns to main menu |
| M-36 | Solutions (header) | Section identifier |
| | **Launch a Parallel Core** | Sub-header |
| M-37 | Vertical brand launches | → /solutions/parallel-core/#vertical-brand |
| M-38 | New lines of business | → /solutions/parallel-core/#new-lines |
| M-39 | M&A acceleration | → /solutions/parallel-core/#ma-acceleration |
| M-40 | Private label banking | → /solutions/parallel-core/#private-label |
| M-41 | Sandbox innovation | → /solutions/parallel-core/#sandbox |
| | **Launch a Primary Core** | Sub-header |
| M-42 | Core replacement | → /solutions/primary-core/#core-replacement |
| M-43 | De novo launch | → /solutions/primary-core/#de-novo |
| | **Segments** | Sub-header |
| M-44 | Retail | → /solutions/retail-banking/ |
| M-45 | Business | → /solutions/business-banking/ |
| M-46 | Commercial | → /solutions/commercial-banking/ |

---

### Labs Expanded

**Figma Node:** `316:10144` (mobile-nav-menu-labs-click)

| Ref | Element | Tap Action |
|-----|---------|------------|
| M-47 | ← Back | Collapses accordion, returns to main menu |
| M-48 | Labs (header) | Section identifier |
| M-49 | Labs overview | → /labs/ |

**Note:** This is a smaller section with direct navigation to the Labs page.

---

### AI Expanded

**Figma Node:** `316:10477` (mobile-nav-menu-ai-click)

| Ref | Element | Tap Action |
|-----|---------|------------|
| M-50 | ← Back | Collapses accordion, returns to main menu |
| M-51 | AI (header) | Section identifier |
| M-52 | Build with AI | → /ai/ |
| M-53 | AI Approach | → /ai/#ai-approach |
| M-54 | Nymbus MCP | → /ai/#nymbus-mcp |
| M-55 | Applied AI | → /ai/#applied-ai |

---

### Resources Expanded

**Figma Node:** `316:10558` (mobile-nav-menu-resources-click)

| Ref | Element | Tap Action |
|-----|---------|------------|
| M-56 | ← Back | Collapses accordion, returns to main menu |
| M-57 | Resources (header) | Section identifier |
| | **Learn** | Sub-header |
| M-58 | Latest insights | → /insights-hub/ |
| M-59 | Insights | → /insights-hub/ |
| M-60 | Customers | → /insights-hub/ |
| | **Company** | Sub-header |
| M-61 | About Nymbus | → /about/ |
| M-62 | Pressroom | → /press/ |
| M-63 | Contact | → /contact/ |

---

## 6. Sticky Footer CTAs

**Per Sarah's comment (Node `316:10071`):** "sticky buttons stripe.com as reference" and "sticky CTA buttons float and hug bottom of viewport"

### Footer CTA Strip

| Ref | Element | Style | Tap Action |
|-----|---------|-------|------------|
| M-64 | Try demo | Secondary (outlined) | → External demo link [COMING AUG 31] |
| M-65 | Let's move | Primary (filled) | → /contact/ |

### Implementation Specifications

| Property | Value | Notes |
|----------|-------|-------|
| Position | Fixed bottom | `position: sticky` or `fixed` |
| Height | 72px | Includes safe area padding |
| Background | Slight blur or solid | Distinguishes from menu content |
| Button layout | Side by side, equal width | Full-width strip |
| Safe area | Bottom inset respected | Home indicator on iPhone |
| Z-index | Above menu content | Always accessible |

### Scroll Behavior

- Footer CTAs remain visible while scrolling through menu content
- Menu content area has `padding-bottom` to account for footer height
- On any link tap that navigates away, menu closes and footer dismisses

---

## 7. Mobile Animations & Interactions

### Animation Specifications

| Interaction | Animation | Duration | Easing |
|-------------|-----------|----------|--------|
| Menu open | Slide up from bottom | 300ms | ease-out |
| Menu close | Slide down | 250ms | ease-in |
| Accordion expand | Slide down + fade in | 200ms | ease-out |
| Accordion collapse | Slide up + fade out | 150ms | ease-in |
| Chevron rotate | Rotate 180° | 200ms | ease-in-out |
| Hamburger → X | Morph transform | 200ms | ease-in-out |
| Link tap feedback | Background highlight | Instant | — |
| Page navigate | Menu closes first | 150ms | ease-in |

### Mobile-Specific Interaction Notes

| Interaction | Desktop | Mobile | Notes |
|-------------|---------|--------|-------|
| Open dropdown | Hover | Tap | No hover on touch |
| Close dropdown | Mouse leave | Tap X or back | Explicit close required |
| Multi-dropdown | Can switch on hover | One at a time | Accordion pattern |
| Featured cards | Shown in dropdown | Removed | Reduces complexity |
| CTA buttons | Header (top right) | Footer (sticky bottom) | Thumb zone |

### Gesture Support

| Gesture | Action | Notes |
|---------|--------|-------|
| Swipe down on menu | Close menu | Confirmed — closes overlay |
| Swipe right on expanded section | Go back | Optional — iOS convention |

---

## 8. User Journey Scenarios

### Scenario M1: Open Mobile Menu

| Step | Detail |
|------|--------|
| **GIVEN** | User is on any page on mobile device |
| **WHEN** | User taps the hamburger icon (M-2) |
| **THEN** | Full-screen menu overlay slides up, hamburger transforms to X |

**Acceptance Criteria:**
1. Menu slides up from bottom (300ms ease-out)
2. Hamburger icon morphs to X close icon
3. Page content is hidden behind overlay
4. Body scroll is locked (no scrolling page behind menu)
5. Sticky footer CTAs are visible at bottom

---

### Scenario M2: Close Mobile Menu via X

| Step | Detail |
|------|--------|
| **GIVEN** | User has mobile menu open |
| **WHEN** | User taps the X close button (M-3) |
| **THEN** | Menu overlay slides down and closes |

**Acceptance Criteria:**
1. Menu slides down (250ms ease-in)
2. X transforms back to hamburger
3. Page content is restored
4. Body scroll is unlocked
5. Focus returns to hamburger button

---

### Scenario M3: Expand Platform Section

| Step | Detail |
|------|--------|
| **GIVEN** | User has mobile menu open (collapsed state) |
| **WHEN** | User taps "Platform" row (M-6) |
| **THEN** | Platform accordion expands showing all sub-links |

**Acceptance Criteria:**
1. Chevron rotates 180° to point up
2. Sub-links slide down with fade-in (200ms)
3. Back arrow (←) appears at top of expanded section
4. Other sections remain visible but collapsed
5. Menu scrolls to show expanded content if needed

---

### Scenario M4: Navigate to Platform Anchor

| Step | Detail |
|------|--------|
| **GIVEN** | User has Platform section expanded |
| **WHEN** | User taps "Core Processing" (M-15) |
| **THEN** | Menu closes and user navigates to /platform/#core-processing |

**Acceptance Criteria:**
1. Link shows tap feedback (background highlight)
2. Menu begins close animation (150ms)
3. Navigation occurs after menu closes
4. Page scrolls to #core-processing anchor
5. Mobile header bar is visible on destination page

---

### Scenario M5: Use Back Navigation

| Step | Detail |
|------|--------|
| **GIVEN** | User has any accordion section expanded |
| **WHEN** | User taps the "← Back" link (M-12, M-25, etc.) |
| **THEN** | Accordion collapses, returns to main menu view |

**Acceptance Criteria:**
1. Expanded section collapses (150ms slide up)
2. Chevron rotates back to down position
3. All section headers visible
4. Menu scroll position preserved or reset to top
5. Focus moves to the section that was just collapsed

---

### Scenario M6: Tap Sticky CTA — Let's Move

| Step | Detail |
|------|--------|
| **GIVEN** | User has mobile menu open (any state) |
| **WHEN** | User taps "Let's move" button (M-65) in sticky footer |
| **THEN** | Menu closes and user navigates to /contact/ |

**Acceptance Criteria:**
1. Button shows tap feedback
2. Menu closes (150ms)
3. Navigation to /contact/
4. Contact form page loads

---

### Scenario M7: Tap Sticky CTA — Try Demo

| Step | Detail |
|------|--------|
| **GIVEN** | User has mobile menu open |
| **WHEN** | User taps "Try demo" button (M-64) in sticky footer |
| **THEN** | Menu closes and external demo opens (new tab/app) |

**Acceptance Criteria:**
1. Button shows tap feedback
2. External link opens (new Safari tab or in-app browser)
3. Original site remains in background
4. Menu state preserved on return (optional)

---

### Scenario M8: Tap Logo in Menu Header

| Step | Detail |
|------|--------|
| **GIVEN** | User has mobile menu open |
| **WHEN** | User taps the Nymbus logo in the menu header |
| **THEN** | Menu closes and user navigates to homepage |

**Acceptance Criteria:**
1. Menu closes with animation
2. Navigation to / (homepage)
3. Page loads at top

---

### Scenario M9: Switch Between Accordion Sections

| Step | Detail |
|------|--------|
| **GIVEN** | User has Platform section expanded |
| **WHEN** | User taps "AI" section header (M-10) |
| **THEN** | Platform collapses, AI expands |

**Acceptance Criteria:**
1. Platform section collapses (150ms)
2. AI section expands (200ms)
3. Only one section expanded at a time
4. Smooth visual transition between states

---

### Scenario M10: Navigate to Segment Page (Solutions)

| Step | Detail |
|------|--------|
| **GIVEN** | User has Solutions section expanded |
| **WHEN** | User taps "Commercial" (M-46) |
| **THEN** | Menu closes and user navigates to /solutions/commercial-banking/ |

**Acceptance Criteria:**
1. Link tap feedback shown
2. Menu closes
3. Navigation to commercial banking page
4. Page loads at top

---

### Scenario M11: Navigate to Resources Section

| Step | Detail |
|------|--------|
| **GIVEN** | User has Resources section expanded |
| **WHEN** | User taps "About Nymbus" (M-61) |
| **THEN** | Menu closes and user navigates to /about/ |

**Acceptance Criteria:**
1. Navigation to /about/
2. About page loads
3. Menu state cleared

---

### Scenario M12: Close Menu by Swipe Down

| Step | Detail |
|------|--------|
| **GIVEN** | User has mobile menu open |
| **WHEN** | User swipes down on the menu overlay |
| **THEN** | Menu closes with slide-down animation |

**Acceptance Criteria:**
1. Swipe threshold: ~100px downward drag before committing close
2. Partial swipe (under threshold) snaps menu back open
3. Animation follows finger during drag (interactive dismiss)
4. On release past threshold, menu completes close (250ms ease-in)
5. Body scroll unlocked, focus returns to hamburger

---

### Scenario M13: Tap on Non-Interactive Area

| Step | Detail |
|------|--------|
| **GIVEN** | User has mobile menu open |
| **WHEN** | User taps on any non-interactive area of the overlay |
| **THEN** | Menu remains open (no accidental closes) |

**Acceptance Criteria:**
1. Tapping empty space does NOT close menu
2. Only explicit X button, swipe-down, or navigation closes menu
3. This prevents accidental dismissal

---

### Scenario M14: Hardware Back Button (Android)

| Step | Detail |
|------|--------|
| **GIVEN** | User has mobile menu open on Android device |
| **WHEN** | User presses the hardware/software back button |
| **THEN** | Menu closes (returns to page view) |

**Acceptance Criteria:**
1. Menu closes on back button press
2. Does not navigate away from current page
3. If accordion expanded, first press collapses accordion, second press closes menu

---

### Scenario M15: Scroll Through Long Accordion

| Step | Detail |
|------|--------|
| **GIVEN** | User has Solutions section expanded (long list) |
| **WHEN** | User scrolls within the menu |
| **THEN** | Menu content scrolls while sticky footer remains fixed |

**Acceptance Criteria:**
1. Menu content area scrolls independently
2. Sticky footer CTAs remain visible
3. Menu header remains visible
4. Scroll momentum feels native
5. No scroll bleed to page behind

---

## 9. Accessibility & Touch Guidelines

### Touch Target Requirements

| Element | Minimum Size | Actual Size | Status |
|---------|--------------|-------------|--------|
| Hamburger icon | 44 × 44px | 44 × 44px | ✓ Compliant |
| Close X button | 44 × 44px | 44 × 44px | ✓ Compliant |
| Section headers | 44 × 48px | 56px height | ✓ Compliant |
| Sub-links | 44 × 44px | 48px height | ✓ Compliant |
| Footer CTAs | 44 × 44px | 48px height | ✓ Compliant |
| Back button | 44 × 44px | 44 × 44px | ✓ Compliant |

### ARIA & Screen Reader Support

| Component | ARIA Role | ARIA State | Label |
|-----------|-----------|------------|-------|
| Hamburger button | `button` | `aria-expanded="false"` | "Open navigation menu" |
| Close X button | `button` | — | "Close navigation menu" |
| Menu overlay | `dialog` | `aria-modal="true"` | "Site navigation" |
| Section header | `button` | `aria-expanded="true/false"` | Section name |
| Sub-link list | `region` | `aria-labelledby` | Section header ID |

### Focus Management

| Event | Focus Behavior |
|-------|----------------|
| Menu opens | Focus moves to close X button |
| Accordion expands | Focus moves to first sub-link |
| Back tapped | Focus moves to section header |
| Menu closes | Focus returns to hamburger button |
| Link navigation | Standard browser behavior |

### Reduced Motion Support

For users with `prefers-reduced-motion: reduce`:
- Replace slide animations with instant show/hide
- Disable chevron rotation animation
- Maintain functional behavior without animation

---

## 10. Sarah's Design Comments

### From Figma Frame `316:10071` (mobile-nav-menu)

| Comment | Interpretation |
|---------|----------------|
| "sticky buttons stripe.com as reference" | Footer CTAs should use Stripe's sticky button pattern |
| "sticky CTA buttons float and hug bottom of viewport" | CTAs remain fixed at bottom regardless of scroll |

### Menu Link Structure (from Figma)

| Section | Sub-items |
|---------|-----------|
| Platform | Full platform sub-nav |
| Managed Services | Operations sub-nav |
| Solutions | Parallel Core, Primary Core, Segments |
| Labs | Labs link |
| AI | AI approach links |
| Resources | Learn + Company |

### Header Elements (from Figma)

| Element | Notes |
|---------|-------|
| Logo | Nymbus wordmark, left-aligned |
| Close button | X icon, right-aligned |
| Back navigation | ← arrow on expanded states |

---

## 11. Open Questions

### Confirmed from Desktop (Inherited)

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Try the Demo URL | 🔄 PENDING: External demo link marked as "COMING AUG 31." Needs URL once available. |

### Mobile-Specific (Resolved)

| # | Question | Resolution |
|---|----------|-----------|
| 2 | Swipe gestures | ✅ RESOLVED: **Yes**, swipe-down dismisses the menu. |
| 3 | Menu state persistence | ✅ RESOLVED: **No**. Close menu on any navigation (including return from external demo). |
| 4 | Accordion memory | ✅ RESOLVED: **No**. Always start collapsed for consistency. |
| 5 | Landscape orientation | ✅ RESOLVED: **Same single-column layout** with adjusted heights. |
| 6 | Deep linking | ✅ RESOLVED: **No**. Menu always starts collapsed regardless of current URL/anchor. |
| 7 | Scroll position on navigate | ✅ RESOLVED: **Reset to top** of section on Back tap. |
| 8 | Footer CTA animation | ✅ RESOLVED: **Immediate visibility** (no slide-up delay). Per Stripe reference. |
| 9 | Tablet breakpoint | ✅ RESOLVED: **768px**. iPad portrait = mobile nav, iPad landscape = desktop nav. |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 11, 2026 | Initial mobile navigation document | Kiro |
