# Mobile Chatbox User Flow & Journey

**Source:** Figma Dev Hand-off — Homepage Chatbox (Node 0:1)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=0-1  
**Desktop Reference:** `/User Journeys/Chatbox-User-Flow.md`  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview](#1-overview)
2. [Mobile Adaptations Summary](#2-mobile-adaptations-summary)
3. [User Story](#3-user-story)
4. [Assumptions](#4-assumptions)
5. [Technical Specifications](#5-technical-specifications)
6. [Element Reference](#6-element-reference)
7. [Mobile Flow Diagram](#7-mobile-flow-diagram)
8. [Scenario 1: Tap Input Field](#8-scenario-1-tap-input-field)
9. [Scenario 2: Type and Submit Query](#9-scenario-2-type-and-submit-query)
10. [Scenario 3: Dismiss Chatbox (Swipe or X)](#10-scenario-3-dismiss-chatbox-swipe-or-x)
11. [Scenario 4: Move to a Modern Core (2C)](#11-scenario-4-move-to-a-modern-core-2c)
12. [Scenario 5: Run Smarter Operations (2D)](#12-scenario-5-run-smarter-operations-2d)
13. [Scenario 6: Launch a Digital Brand (2E)](#13-scenario-6-launch-a-digital-brand-2e)
14. [Scenario 7: Build with Governed AI (2F)](#14-scenario-7-build-with-governed-ai-2f)
15. [Scenario 8: More Button Toggle (2G)](#15-scenario-8-more-button-toggle-2g)
16. [Scenario 9: Talk to an Expert (2H)](#16-scenario-9-talk-to-an-expert-2h)
17. [Scenario 10: Catch Fraud Early (2I)](#17-scenario-10-catch-fraud-early-2i)
18. [Scenario 11: Growth Strategy with Labs (2J)](#18-scenario-11-growth-strategy-with-labs-2j)
19. [Scenario 12: Improve Account Opening (2K)](#19-scenario-12-improve-account-opening-2k)
20. [Scenario 13: Launch a De Novo (2L)](#20-scenario-13-launch-a-de-novo-2l)
21. [Scenario 14: Grow Deposits (2M)](#21-scenario-14-grow-deposits-2m)
22. [Scenario 15: Unmatched Query Fallback](#22-scenario-15-unmatched-query-fallback)
23. [Scenario 16: Switch Between Pills](#23-scenario-16-switch-between-pills)
24. [Scenario 17: Type New Query While Expanded](#24-scenario-17-type-new-query-while-expanded)
25. [Scenario 18: Tap CTA Button](#25-scenario-18-tap-cta-button)
26. [Scenario 19: Keyboard Submit (Go/Return)](#26-scenario-19-keyboard-submit-goreturn)
27. [Scenario 20: Empty Submit Handling](#27-scenario-20-empty-submit-handling)
28. [Scenario 21: Virtual Keyboard Handling](#28-scenario-21-virtual-keyboard-handling)
29. [Response Content Reference](#29-response-content-reference)
30. [Animation Specifications](#30-animation-specifications)
31. [Accessibility (Mobile)](#31-accessibility-mobile)
32. [Open Questions](#32-open-questions)

---

## 1. Overview

The mobile chatbox wizard is adapted from the desktop homepage hero chatbox for touch-first interactions on 428px viewports. The chatbox expands to a **full-screen overlay** when active, maximizing limited viewport real estate while maintaining all desktop functionality.

**Key Mobile Differences:**
- Full-screen overlay mode (100vw × 100vh) vs floating panel
- Swipe-down gesture + X button for dismissal vs click-outside
- Touch-optimized pill buttons with 44px minimum targets
- Virtual keyboard handling with `visualViewport` API
- Simplified quick actions as primary interaction method

**Epic:** Homepage Chatbox (Mobile)  
**Story:** Navigating to content using the chatbox on mobile devices

---

## 2. Mobile Adaptations Summary

| Desktop Behavior | Mobile Adaptation | Rationale |
|------------------|-------------------|-----------|
| Floating chatbox expands inline | Full-screen overlay (100vw × 100vh) | Limited viewport; prevents content behind |
| Click outside to dismiss | Swipe down + X button | Touch-friendly dismissal |
| Hover states on pills/CTAs | Tap feedback (scale + opacity) | No hover on touch devices |
| Pills arranged in multi-row grid | Single-column stacked pills | Prevents horizontal overflow |
| Physical keyboard Enter submit | Virtual keyboard "Go"/"Return" button | Mobile keyboard behavior |
| Fixed input position | Input anchored above virtual keyboard | Prevents input being hidden |
| Click-to-focus input | Tap-to-focus with auto-scroll | Prevents viewport jump |

---

## 3. User Story

| | |
|---|---|
| **AS** | A Prospect on a mobile device |
| **I** | Navigate to the Nymbus Home Page |
| **SO THAT** | I can utilize the chatbox experience to quickly find relevant banking solutions using touch interactions |

---

## 4. Assumptions

| # | Assumption |
|---|-----------|
| 1 | User has JavaScript enabled and modern mobile browser (Safari 15+, Chrome 90+) |
| 2 | Device supports touch events and `visualViewport` API |
| 3 | Viewport is 428px width (iPhone 14 Pro reference) |
| 4 | Chat wizard is visible in the hero section of the homepage |
| 5 | All linked pages are functional and mobile-responsive |
| 6 | Virtual keyboard behavior varies by device/OS |

---

## 5. Technical Specifications

### Viewport & Layout

| Property | Value | Notes |
|----------|-------|-------|
| Mobile viewport | 428px width | iPhone 14 Pro reference |
| Chatbox overlay | 100vw × 100vh | Full-screen when active |
| Content max-width | 100% - 32px | 16px padding each side |
| Z-index (overlay) | 1000 | Above all page content |
| Background overlay | rgba(0, 0, 0, 0.5) | Semi-transparent backdrop |

### Touch Targets

| Element | Minimum Size | Actual Size |
|---------|--------------|-------------|
| Pill buttons | 44×44px | Full width, 48px height |
| Submit button | 44×44px | 48×48px |
| X close button | 44×44px | 48×48px |
| CTA buttons | 44×44px | Full width, 52px height |

### Typography (Prevents iOS Auto-Zoom)

| Element | Size | Weight |
|---------|------|--------|
| Input text | 16px | 400 |
| Placeholder | 16px | 400 |
| Pill text | 14px | 500 |
| Response heading | 24px | 600 |
| Response body | 16px | 400 |
| CTA text | 16px | 600 |

---

## 6. Element Reference

| ID | Element | Mobile Notes |
|----|---------|--------------|
| 2A | Input Box | Full width, 16px font (prevents iOS zoom) |
| 2B | Submit Arrow | 48×48px circular tap target |
| 2C | Pill | "Move to a modern core" — full width |
| 2D | Pill | "Run smarter operations" — full width |
| 2E | Pill | "Launch a digital brand" — full width |
| 2F | Pill | "Build with governed AI" — full width |
| 2G | Button | More/Less toggle — full width |
| 2H | Pill (black) | "Talk to an expert" — direct nav to /contact/ |
| 2I | Pill (expanded) | "Catch fraud early" |
| 2J | Pill (expanded) | "Build a growth strategy with Labs" |
| 2K | Pill (expanded) | "Improve account opening" |
| 2L | Pill (expanded) | "Launch a de novo" |
| 2M | Pill (expanded) | "Grow deposits" |
| 2N | Response Card | Scrollable content area |
| 2O | Response CTAs | Full-width stacked buttons |
| 2P | X Close Button | Top-right corner, 48×48px |
| 2Q | Overlay Backdrop | Tappable to dismiss (optional) |

---

## 7. Mobile Flow Diagram

```
[User arrives on Homepage (Mobile)]
        |
        v
[Hero Section - Chatbox Visible (Collapsed)]
        |
        +---> [Taps input field 2A]
        |            |
        |            v
        |     [Full-screen overlay opens]
        |     [Virtual keyboard appears]
        |            |
        |            +---> [Types query] ---> [Taps submit 2B or "Go"]
        |            |                               |
        |            |                       [Keyword matched?]
        |            |                       /              \
        |            |                   YES                 NO
        |            |                    |                   |
        |            |            [Show matched           [Show fallback
        |            |             response 2N]           response 2N]
        |            |                    |
        |            |            [Taps CTA 2O]
        |            |                    |
        |            |            [Navigate to URL]
        |            |
        |            +---> [Taps X 2P or swipes down] ---> [Overlay closes]
        |
        +---> [Taps pill 2C-2F] ---> [Overlay expands with response]
        |                                    |
        |                            [Taps CTA 2O]
        |                                    |
        |                            [Navigate to URL]
        |
        +---> [Taps More 2G] ---> [Expanded pills 2I-2M appear]
        |                                    |
        |                            [Taps expanded pill]
        |                                    |
        |                            [Overlay shows response]
        |
        +---> [Taps Talk to Expert 2H] ---> [Direct nav to /contact/]
```

---

## 8. Scenario 1: Tap Input Field

**GIVEN** a Prospect on a mobile device navigates to the Nymbus Home Page  
**WHEN** I tap on the Chatbox input field (2A)  

**THEN** the chatbox transitions to full-screen overlay mode

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Full-screen overlay animates up (300ms ease-out) |
| 2 | Semi-transparent backdrop appears behind overlay |
| 3 | Input field auto-focuses and virtual keyboard appears |
| 4 | X close button (2P) appears in top-right corner |
| 5 | Pills are displayed below input in single-column layout |
| 6 | Body scroll is locked (`overflow: hidden` on `<body>`) |
| 7 | Input remains visible above virtual keyboard |

---

## 9. Scenario 2: Type and Submit Query

**GIVEN** a Prospect with chatbox overlay open and keyboard visible  
**WHEN** I type a keyword (e.g., "core", "modernize", "digital brand")  
**AND** I tap the submit arrow (2B) or keyboard "Go"/"Return" button  

**THEN** the response card (2N) appears with heading, body text, and CTA buttons (2O)

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Virtual keyboard dismisses on submit |
| 2 | Response card animates in (fadeSlideUp, 400ms) |
| 3 | Response content is scrollable if exceeds viewport |
| 4 | Input text remains visible at top |
| 5 | Placeholder changes to "Ask something else" |
| 6 | CTA buttons are full-width, stacked vertically |

---

## 10. Scenario 3: Dismiss Chatbox (Swipe or X)

**GIVEN** a Prospect with chatbox overlay open  
**WHEN** I swipe down from the top of the overlay  
**OR** I tap the X close button (2P)  

**THEN** the overlay closes and returns to default homepage state

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Swipe threshold: 100px downward movement |
| 2 | Close animation: slideDown 300ms ease-in |
| 3 | Virtual keyboard dismisses |
| 4 | Input text clears |
| 5 | Response content removed |
| 6 | Body scroll unlocked |
| 7 | Placeholder returns to "What do you want to grow?" |

### Swipe Gesture Details

| Property | Value |
|----------|-------|
| Direction | Vertical (top to bottom) |
| Threshold | 100px |
| Velocity threshold | 500px/s (fast swipe = immediate dismiss) |
| Visual feedback | Overlay follows finger with resistance |
| Cancel | Swipe less than threshold returns overlay to position |

---

## 11. Scenario 4: Move to a Modern Core (2C)

**GIVEN** a Prospect on mobile navigates to the Nymbus Home Page  
**WHEN** I tap on the "Move to a modern core" pill (2C)  

**THEN** the full-screen overlay opens showing:

| Element | Content |
|---------|---------|
| Heading | "Build on a modern core." |
| Body | "Deploy Nymbus as a primary core or parallel core..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore primary core | /solutions/primary-core/ |
| 2 | Launch a parallel core | /solutions/parallel-core/ |
| 3 | Talk to an expert | /contact/ |

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Pill shows tap feedback (scale: 0.95, 100ms) |
| 2 | Overlay opens with response pre-populated |
| 3 | No keyboard appears (no input focus) |
| 4 | CTAs are full-width buttons, 52px height |

---

## 12. Scenario 5: Run Smarter Operations (2D)

**GIVEN** a Prospect on mobile navigates to the Nymbus Home Page  
**WHEN** I tap on the "Run smarter operations" pill (2D)  

**THEN** the full-screen overlay opens showing:

| Element | Content |
|---------|---------|
| Heading | "Operate with more control and less internal lift." |
| Body | "Activate managed services for onboarding, servicing..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore managed services | /managed-services/ |
| 2 | Talk to an expert | /contact/ |

---

## 13. Scenario 6: Launch a Digital Brand (2E)

**GIVEN** a Prospect on mobile navigates to the Nymbus Home Page  
**WHEN** I tap on the "Launch a digital brand" pill (2E)  

**THEN** the full-screen overlay opens showing:

| Element | Content |
|---------|---------|
| Heading | "Launch a digital brand on connected banking infrastructure." |
| Body | "Bring core processing, digital banking..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Launch a digital brand | /solutions/parallel-core/ |
| 2 | See how Labs supports launch | /labs/ |
| 3 | Talk to an expert | /contact/ |

---

## 14. Scenario 7: Build with Governed AI (2F)

**GIVEN** a Prospect on mobile navigates to the Nymbus Home Page  
**WHEN** I tap on the "Build with governed AI" pill (2F)  

**THEN** the full-screen overlay opens showing:

| Element | Content |
|---------|---------|
| Heading | "Connect AI to real banking workflows with control." |
| Body | "Explore governed AI workflows connected to banking data..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore governed AI | /ai/ |
| 2 | See Nymbus MCP | /ai/#nymbus-mcp |
| 3 | Talk to an expert | /contact/ |

---

## 15. Scenario 8: More Button Toggle (2G)

**GIVEN** a Prospect on mobile with chatbox pills visible  
**WHEN** I tap on the "More" button (2G)  

**THEN** additional pills appear in the single-column layout:
- Catch fraud early (2I)
- Build a growth strategy with Labs (2J)
- Improve account opening (2K)
- Launch a de novo (2L)
- Grow deposits (2M)

Button text changes to "Less."

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Pills animate in with staggered fadeSlideUp (50ms delay each) |
| 2 | Pills appear below primary pills in single column |
| 3 | Tapping "Less" hides expanded pills with fadeSlideDown |
| 4 | Button toggles between "More" and "Less" |
| 5 | Smooth scroll adjustment if content exceeds viewport |

---

## 16. Scenario 9: Talk to an Expert (2H)

**GIVEN** a Prospect on mobile navigates to the Nymbus Home Page  
**WHEN** I tap on the "Talk to an expert" black pill (2H)  

**THEN** user is navigated directly to the contact page

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Navigation to /contact/ |
| 2 | Pill styled with black background (primary CTA) |
| 3 | No overlay expansion — direct navigation |
| 4 | Tap feedback: opacity 0.8 during press |

---

## 17. Scenario 10: Catch Fraud Early (2I)

**GIVEN** a Prospect on mobile with More pills expanded  
**WHEN** I tap on the "Catch fraud early" pill (2I)  

**THEN** the full-screen overlay shows:

| Element | Content |
|---------|---------|
| Heading | "Contain fraud in one pass." |
| Body | "Customer data, case investigation, and enforcement..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Enable Fraud Intelligence | /platform/#fraud-intelligence |
| 2 | Talk to an expert | /contact/ |

---

## 18. Scenario 11: Growth Strategy with Labs (2J)

**GIVEN** a Prospect on mobile with More pills expanded  
**WHEN** I tap on the "Build a growth strategy with Labs" pill (2J)  

**THEN** the full-screen overlay shows:

| Element | Content |
|---------|---------|
| Heading | "Turn a growth idea into a funded banking model." |
| Body | "Embed growth experts with your team..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore Labs | /labs/ |
| 2 | Talk to an expert | /contact/ |

---

## 19. Scenario 12: Improve Account Opening (2K)

**GIVEN** a Prospect on mobile with More pills expanded  
**WHEN** I tap on the "Improve account opening" pill (2K)  

**THEN** the full-screen overlay shows:

| Element | Content |
|---------|---------|
| Heading | "Move applicants from intent to funded accounts faster." |
| Body | "Use connected account opening, digital banking..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore account opening | /platform/#account-opening |
| 2 | Talk to an expert | /contact/ |

---

## 20. Scenario 13: Launch a De Novo (2L)

**GIVEN** a Prospect on mobile with More pills expanded  
**WHEN** I tap on the "Launch a de novo" pill (2L)  

**THEN** the full-screen overlay shows:

| Element | Content |
|---------|---------|
| Heading | "Launch a new institution on a connected banking platform." |
| Body | "Deploy core processing, digital banking..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore de novo launch | /solutions/primary-core/#de-novo |
| 2 | Explore primary core | /solutions/primary-core/ |
| 3 | Talk to an expert | /contact/ |

---

## 21. Scenario 14: Grow Deposits (2M)

**GIVEN** a Prospect on mobile with More pills expanded  
**WHEN** I tap on the "Grow deposits" pill (2M)  

**THEN** the full-screen overlay shows:

| Element | Content |
|---------|---------|
| Heading | "Build deposit growth around a focused strategy." |
| Body | "Use Labs, digital banking, account opening..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore Labs | /labs/ |
| 2 | Talk to an expert | /contact/ |

---

## 22. Scenario 15: Unmatched Query Fallback

**GIVEN** a Prospect on mobile  
**WHEN** I type a query that doesn't match any keywords  
**AND** I tap submit (2B) or keyboard "Go"  

**THEN** the overlay shows:

| Element | Content |
|---------|---------|
| Heading | "Let us help you find the right path." |
| Body | "Tell us more about what you're looking to accomplish..." |

### CTAs (Stacked Full-Width)

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore the platform | /platform/ |
| 2 | Talk to an expert | /contact/ |

---

## 23. Scenario 16: Switch Between Pills

**GIVEN** a Prospect on mobile with overlay showing one topic response  
**WHEN** I tap on a different pill  

**THEN** the overlay content immediately updates to show the new topic without closing

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | No close/reopen animation |
| 2 | Content crossfades to new response (200ms) |
| 3 | Input text clears |
| 4 | New heading, body, and CTAs display |
| 5 | Scroll position resets to top |

---

## 24. Scenario 17: Type New Query While Expanded

**GIVEN** a Prospect on mobile with overlay showing a response  
**WHEN** I tap on the input field (2A) and start typing  

**THEN** the response card content hides while overlay remains open

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Virtual keyboard appears |
| 2 | Response content fades out on first keystroke |
| 3 | Pills remain visible below input |
| 4 | User can submit new query |
| 5 | Input area repositions above keyboard |

---

## 25. Scenario 18: Tap CTA Button

**GIVEN** a Prospect on mobile with overlay showing a response  
**WHEN** I tap on any CTA button (2O) in the response card  

**THEN** user is navigated to the corresponding page URL

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Tap feedback: scale 0.98 + slight opacity change |
| 2 | Navigation occurs after 150ms feedback delay |
| 3 | "Talk to an expert" buttons styled black (primary) |
| 4 | Other buttons styled with light background (secondary) |
| 5 | Overlay closes on navigation |

---

## 26. Scenario 19: Keyboard Submit (Go/Return)

**GIVEN** a Prospect on mobile with focus on input field (2A)  
**WHEN** I type a query and tap the keyboard's "Go" or "Return" button  

**THEN** query is submitted and response displays

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Keyboard "Go"/"Return" triggers form submission |
| 2 | Behavior identical to tapping submit button (2B) |
| 3 | Virtual keyboard dismisses after submit |
| 4 | Input field uses `enterkeyhint="go"` attribute |

---

## 27. Scenario 20: Empty Submit Handling

**GIVEN** a Prospect on mobile  
**WHEN** I tap submit (2B) or "Go" with empty input field  

**THEN** fallback response displays with generic guidance

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Shows "Let us help you find the right path." heading |
| 2 | Generic CTAs: "Explore the platform" and "Talk to an expert" |
| 3 | User receives guidance rather than error state |
| 4 | Keyboard dismisses |

---

## 28. Scenario 21: Virtual Keyboard Handling

**GIVEN** a Prospect on mobile with chatbox overlay open  
**WHEN** the virtual keyboard appears or disappears  

**THEN** the overlay layout adjusts to keep input visible

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Uses `visualViewport` API for accurate keyboard height |
| 2 | Input field remains visible above keyboard |
| 3 | Response content becomes scrollable within remaining space |
| 4 | Pills reposition smoothly (no layout jump) |
| 5 | Handles both iOS and Android keyboard behaviors |

### Technical Implementation

> **Note:** These styles apply only to the **full-screen chatbox overlay** when open — not to the homepage scroll. The input stays fixed at the top of the overlay so users can always access it, even when scrolling through long response content or when the virtual keyboard is visible.

```css
/* Full-screen overlay container */
.chatbox-overlay {
  position: fixed;
  inset: 0;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for iOS Safari */
  display: flex;
  flex-direction: column;
}

/* Input stays at top of overlay, unaffected by content scroll */
.chatbox-input-area {
  flex-shrink: 0;
  padding-bottom: env(safe-area-inset-bottom);
}

/* Response content scrolls independently */
.chatbox-response-area {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
```

```javascript
// visualViewport API for keyboard detection
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', () => {
    const keyboardHeight = window.innerHeight - window.visualViewport.height;
    // Shrink overlay content area to accommodate keyboard
  });
}
```

---

## 29. Response Content Reference

Complete mapping of all pill/query responses (identical to desktop):

| Pill | Heading | CTAs & URLs |
|------|---------|-------------|
| 2C: Move to a modern core | "Build on a modern core." | Explore primary core → /solutions/primary-core/ · Launch a parallel core → /solutions/parallel-core/ · Talk to an expert → /contact/ |
| 2D: Run smarter operations | "Operate with more control and less internal lift." | Explore managed services → /managed-services/ · Talk to an expert → /contact/ |
| 2E: Launch a digital brand | "Launch a digital brand on connected banking infrastructure." | Launch a digital brand → /solutions/parallel-core/ · See how Labs supports launch → /labs/ · Talk to an expert → /contact/ |
| 2F: Build with governed AI | "Connect AI to real banking workflows with control." | Explore governed AI → /ai/ · See Nymbus MCP → /ai/#nymbus-mcp · Talk to an expert → /contact/ |
| 2H: Talk to an expert | N/A (direct navigation) | → /contact/ |
| 2I: Catch fraud early | "Contain fraud in one pass." | Enable Fraud Intelligence → /platform/#fraud-intelligence · Talk to an expert → /contact/ |
| 2J: Growth strategy with Labs | "Turn a growth idea into a funded banking model." | Explore Labs → /labs/ · Talk to an expert → /contact/ |
| 2K: Improve account opening | "Move applicants from intent to funded accounts faster." | Explore account opening → /platform/#account-opening · Talk to an expert → /contact/ |
| 2L: Launch a de novo | "Launch a new institution on a connected banking platform." | Explore de novo launch → /solutions/primary-core/#de-novo · Explore primary core → /solutions/primary-core/ · Talk to an expert → /contact/ |
| 2M: Grow deposits | "Build deposit growth around a focused strategy." | Explore Labs → /labs/ · Talk to an expert → /contact/ |
| Fallback | "Let us help you find the right path." | Explore the platform → /platform/ · Talk to an expert → /contact/ |

---

## 30. Animation Specifications

### Mobile-Optimized Animations

| Action | Animation | Timing | Notes |
|--------|-----------|--------|-------|
| Overlay open | slideUp | 300ms ease-out | From bottom of screen |
| Overlay close | slideDown | 300ms ease-in | With opacity fade |
| Swipe dismiss | follows finger | Real-time | 60fps touch tracking |
| Response appear | fadeSlideUp | 400ms ease-out | After keyboard dismisses |
| Content swap | crossfade | 200ms | When switching pills |
| Pill tap feedback | scale(0.95) | 100ms | Immediate feedback |
| CTA tap feedback | scale(0.98) + opacity | 150ms | Before navigation |
| More pills appear | staggered fadeSlideUp | 50ms delay each | Sequential reveal |
| Keyboard adjust | smooth reposition | 250ms | Layout shift |

### Touch Feedback Specifications

| Element | Feedback Type | Duration |
|---------|---------------|----------|
| Pills | Scale down + subtle shadow | 100ms |
| Submit button | Scale down + ring pulse | 100ms |
| X close button | Opacity 0.7 | 100ms |
| CTA buttons | Scale down + opacity | 150ms |
| Backdrop tap | No visual feedback | — |

### Performance Optimizations

| Optimization | Implementation |
|--------------|----------------|
| Hardware acceleration | `transform: translateZ(0)` on animated elements |
| Will-change | Applied before animations, removed after |
| Passive listeners | Touch events use `{ passive: true }` |
| RAF scheduling | Animations use requestAnimationFrame |
| Reduced motion | Respects `prefers-reduced-motion` media query |

---

## 31. Accessibility (Mobile)

### Touch Target Compliance

| Element | Required | Actual | Status |
|---------|----------|--------|--------|
| Input field | 44px height | 48px | Pass |
| Submit button | 44×44px | 48×48px | Pass |
| X close button | 44×44px | 48×48px | Pass |
| Pill buttons | 44px height | 48px (full width) | Pass |
| CTA buttons | 44px height | 52px (full width) | Pass |

### Screen Reader Support

| Feature | Implementation |
|---------|----------------|
| Overlay announcement | `role="dialog"`, `aria-modal="true"` |
| Input label | `aria-label="Search for banking solutions"` |
| Submit button | `aria-label="Submit query"` |
| X close button | `aria-label="Close chat"` |
| Pills | `role="button"` with descriptive text |
| Response content | `aria-live="polite"` for dynamic updates |
| Focus trap | Focus contained within overlay when open |

### Focus Management

| State | Focus Behavior |
|-------|----------------|
| Overlay opens (via input tap) | Focus on input field |
| Overlay opens (via pill tap) | Focus on response heading |
| Response appears | Announce heading via `aria-live` |
| Overlay closes | Return focus to trigger element |
| Tab navigation | Cycles through: input → submit → pills → CTAs → X button |

### Keyboard/Switch Access

| Action | Behavior |
|--------|----------|
| External keyboard Enter | Submits query (same as "Go") |
| Tab key | Moves through interactive elements |
| Escape key | Closes overlay |
| Switch Control | All elements reachable in logical order |

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  .chatbox-overlay,
  .chatbox-response,
  .chatbox-pill {
    animation: none;
    transition: opacity 0.1s;
  }
}
```

---

## 32. Resolved Decisions & Technical Notes

### Design Decisions

| # | Question | Decision |
|---|----------|----------|
| 1 | Should tapping the backdrop (2Q) dismiss the overlay? | Yes — same behavior as X button |
| 2 | Should there be haptic feedback on iOS for pill taps? | Yes — `UIImpactFeedbackGenerator.light` |
| 3 | Should the chatbox support landscape orientation? | Yes — reduced pill columns (2-col grid) |
| 4 | Should response cards support horizontal swipe to dismiss? | No — swipe-down only for consistency |
| 5 | Should pills persist in a sticky header when scrolling responses? | No — input stays at top only |

### Technical Considerations

| # | Question | Notes |
|---|----------|-------|
| 1 | Keyboard type for input | Use `inputmode="text"` with `enterkeyhint="go"` |
| 2 | Safe area handling | Use `env(safe-area-inset-bottom)` for notched devices |
| 3 | Android back button | Should dismiss overlay (add popstate handler) |
| 4 | iOS Safari address bar | Use `100dvh` for dynamic viewport height |
| 5 | Memory management | Cleanup event listeners on overlay close |

---

## Appendix: Mobile vs Desktop Comparison

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Container | Inline floating panel | Full-screen overlay |
| Dismiss method | Click outside | Swipe down + X button |
| Pill layout | Multi-row grid | Single-column stack |
| CTA layout | Inline horizontal | Full-width stacked |
| Keyboard | Physical (Enter) | Virtual (Go/Return) |
| Input focus | Click | Tap with auto-scroll |
| Interaction feedback | Hover states | Tap feedback (scale) |
| Animation timing | Slightly longer | Optimized for 60fps touch |
| Scroll behavior | Page scroll | Overlay-contained scroll |
| Close on navigate | Implicit | Explicit (overlay closes) |
