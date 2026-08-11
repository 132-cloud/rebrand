# Hero Chatbox User Flow & Journey

**Source:** Figma Dev Hand-off — Homepage Chatbox (Node 0:1, CHAT WIZARD frame 61:957)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=0-1  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview](#1-overview)
2. [User Story](#2-user-story)
3. [Assumptions](#3-assumptions)
4. [Element Reference](#4-element-reference)
5. [Flow Diagram](#5-flow-diagram)
6. [Scenario 1: Type and Submit Query](#6-scenario-1-type-and-submit-query)
7. [Scenario 2: Click Outside to Close](#7-scenario-2-click-outside-to-close)
8. [Scenario 3: Move to a Modern Core (2C)](#8-scenario-3-move-to-a-modern-core-2c)
9. [Scenario 4: Run Smarter Operations (2D)](#9-scenario-4-run-smarter-operations-2d)
10. [Scenario 5: Launch a Digital Brand (2E)](#10-scenario-5-launch-a-digital-brand-2e)
11. [Scenario 6: Build with Governed AI (2F)](#11-scenario-6-build-with-governed-ai-2f)
12. [Scenario 7: More Button Toggle (2G)](#12-scenario-7-more-button-toggle-2g)
13. [Scenario 8: Talk to an Expert (2H)](#13-scenario-8-talk-to-an-expert-2h)
14. [Scenario 9: Catch Fraud Early (2I)](#14-scenario-9-catch-fraud-early-2i)
15. [Scenario 10: Build a Growth Strategy with Labs (2J)](#15-scenario-10-build-a-growth-strategy-with-labs-2j)
16. [Scenario 11: Improve Account Opening (2K)](#16-scenario-11-improve-account-opening-2k)
17. [Scenario 12: Launch a De Novo (2L)](#17-scenario-12-launch-a-de-novo-2l)
18. [Scenario 13: Grow Deposits (2M)](#18-scenario-13-grow-deposits-2m)
19. [Scenario 14: Unmatched Query Fallback](#19-scenario-14-unmatched-query-fallback)
20. [Scenario 15: Switch Between Pills](#20-scenario-15-switch-between-pills)
21. [Scenario 16: Type New Query While Expanded](#21-scenario-16-type-new-query-while-expanded)
22. [Scenario 17: Click CTA Button in Response Card](#22-scenario-17-click-cta-button-in-response-card)
23. [Scenario 18: Keyboard Submit (Enter Key)](#23-scenario-18-keyboard-submit-enter-key)
24. [Scenario 19: Empty Submit Handling](#24-scenario-19-empty-submit-handling)
25. [Scenario 20: Mobile Responsive Behavior](#25-scenario-20-mobile-responsive-behavior)
26. [Response Content Reference](#26-response-content-reference)
27. [Animation Specifications](#27-animation-specifications)

---

## 1. Overview

The homepage hero contains an interactive chatbox wizard that serves as the primary engagement mechanism. Users can type queries or click pill buttons to explore banking solutions. The chatbox expands to show contextual responses with CTA buttons linking to relevant pages.

**Epic:** Homepage Chatbox  
**Story:** Navigating to content using the chatbox

---

## 2. User Story

| | |
|---|---|
| **AS** | A Prospect |
| **I** | Navigate to the Nymbus Home Page |
| **SO THAT** | I can utilize the chatbox experience to quickly find relevant banking solutions |

---

## 3. Assumptions

| # | Assumption |
|---|-----------|
| 1 | User has JavaScript enabled and modern browser |
| 2 | Chat wizard is visible in the hero section of the homepage |
| 3 | All linked pages are functional and accessible |

---

## 4. Element Reference

| ID | Element | Description |
|----|---------|-------------|
| 2A | Input Box | Text input field for typing queries |
| 2B | Submit Arrow | Circular button to submit typed query |
| 2C | Pill | "Move to a modern core" |
| 2D | Pill | "Run smarter operations" |
| 2E | Pill | "Launch a digital brand" |
| 2F | Pill | "Build with governed AI" |
| 2G | Button | More/Less toggle |
| 2H | Pill (black) | "Talk to an expert" — direct nav to /contact/ |
| 2I | Pill (expanded) | "Catch fraud early" |
| 2J | Pill (expanded) | "Build a growth strategy with Labs" |
| 2K | Pill (expanded) | "Improve account opening" |
| 2L | Pill (expanded) | "Launch a de novo" |
| 2M | Pill (expanded) | "Grow deposits" |
| 2N | Response Card | Expanded content area (heading + body) |
| 2O | Response CTAs | Action buttons within response card |

---

## 5. Flow Diagram

```
[User arrives on Homepage]
        |
        v
[Hero Section - Chatbox Visible]
        |
        +---> [Types query in 2A] ---> [Submits via 2B or Enter]
        |                                       |
        |                               [Keyword matched?]
        |                               /              \
        |                           YES                 NO
        |                            |                   |
        |                    [Show matched           [Show fallback
        |                     response 2N]           response 2N]
        |                            |                   |
        |                    [User clicks         [CTAs: Explore platform
        |                     CTA 2O]              or Talk to expert]
        |                            |
        |                    [Navigate to URL]
        |
        +---> [Clicks pill 2C-2F] ---> [Chatbox expands with response]
        |                                       |
        |                               [User clicks CTA 2O]
        |                                       |
        |                               [Navigate to URL]
        |
        +---> [Clicks More 2G] ---> [Expanded pills 2I-2M appear]
        |                                       |
        |                               [Clicks expanded pill]
        |                                       |
        |                               [Chatbox expands with response]
        |
        +---> [Clicks Talk to Expert 2H] ---> [Direct nav to /contact/]
        |
        +---> [Clicks outside chatbox] ---> [Collapses, resets to default]
```

---

## 6. Scenario 1: Type and Submit Query

**GIVEN** a Prospect navigates to the Nymbus Home Page  
**WHEN** I click on the Chatbox input field (2A)  
**AND** I type a keyword (e.g., "core", "modernize", "digital brand")  
**AND** I click the submit arrow (2B) or press Enter  

**THEN** the chatbox expands downward showing a response card (2N) with heading, body text, and CTA buttons (2O)

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Expansion animation: 400ms ease-in-out |
| 2 | Response includes heading, body text, and 2–3 CTA buttons |
| 3 | Input text remains visible |
| 4 | Placeholder changes to "Ask something else" |

---

## 7. Scenario 2: Click Outside to Close

**GIVEN** a Prospect with chatbox expanded  
**WHEN** I click anywhere outside the chatbox and pills area  

**THEN** the chatbox collapses with smooth animation and resets to default state

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Collapse animation: 350ms |
| 2 | Input text clears |
| 3 | Response content removed |
| 4 | Placeholder returns to "What do you want to grow?" |
| 5 | Clicking on pills does NOT trigger close |

---

## 8. Scenario 3: Move to a Modern Core (2C)

**GIVEN** a Prospect navigates to the Nymbus Home Page  
**WHEN** I click on the "Move to a modern core" pill (2C)  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Build on a modern core." |
| Body | "Deploy Nymbus as a primary core or parallel core..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore primary core | /solutions/primary-core/ |
| 2 | Launch a parallel core | /solutions/parallel-core/ |
| 3 | Talk to an expert | /contact/ |

---

## 9. Scenario 4: Run Smarter Operations (2D)

**GIVEN** a Prospect navigates to the Nymbus Home Page  
**WHEN** I click on the "Run smarter operations" pill (2D)  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Operate with more control and less internal lift." |
| Body | "Activate managed services for onboarding, servicing..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore managed services | /managed-services/ |
| 2 | Talk to an expert | /contact/ |

---

## 10. Scenario 5: Launch a Digital Brand (2E)

**GIVEN** a Prospect navigates to the Nymbus Home Page  
**WHEN** I click on the "Launch a digital brand" pill (2E)  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Launch a digital brand on connected banking infrastructure." |
| Body | "Bring core processing, digital banking..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Launch a digital brand | /solutions/parallel-core/ |
| 2 | See how Labs supports launch | /labs/ |
| 3 | Talk to an expert | /contact/ |

---

## 11. Scenario 6: Build with Governed AI (2F)

**GIVEN** a Prospect navigates to the Nymbus Home Page  
**WHEN** I click on the "Build with governed AI" pill (2F)  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Connect AI to real banking workflows with control." |
| Body | "Explore governed AI workflows connected to banking data..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore governed AI | /ai/ |
| 2 | See Nymbus MCP | /ai/#nymbus-mcp |
| 3 | Talk to an expert | /contact/ |

---

## 12. Scenario 7: More Button Toggle (2G)

**GIVEN** a Prospect navigates to the Nymbus Home Page  
**WHEN** I click on the "More" button (2G)  

**THEN** additional pills appear inline:
- Catch fraud early (2I)
- Build a growth strategy with Labs (2J)
- Improve account opening (2K)
- Launch a de novo (2L)
- Grow deposits (2M)

Button text changes to "Less."

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Pills animate in with fadeSlideIn (300ms) |
| 2 | Pills appear inline continuing the flow |
| 3 | Clicking "Less" hides the expanded pills |
| 4 | Button toggles between "More" and "Less" |

---

## 13. Scenario 8: Talk to an Expert (2H)

**GIVEN** a Prospect navigates to the Nymbus Home Page  
**WHEN** I click on the "Talk to an expert" black pill (2H)  

**THEN** user is navigated directly to the contact page

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Navigation to /contact/ |
| 2 | Pill is styled with black background to stand out as primary CTA |
| 3 | No chatbox expansion — direct navigation |

---

## 14. Scenario 9: Catch Fraud Early (2I)

**GIVEN** a Prospect with More pills expanded  
**WHEN** I click on the "Catch fraud early" pill (2I)  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Contain fraud in one pass." |
| Body | "Customer data, case investigation, and enforcement..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Enable Fraud Intelligence | /platform/#fraud-intelligence |
| 2 | Talk to an expert | /contact/ |

---

## 15. Scenario 10: Build a Growth Strategy with Labs (2J)

**GIVEN** a Prospect with More pills expanded  
**WHEN** I click on the "Build a growth strategy with Labs" pill (2J)  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Turn a growth idea into a funded banking model." |
| Body | "Embed growth experts with your team..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore Labs | /labs/ |
| 2 | Talk to an expert | /contact/ |

---

## 16. Scenario 11: Improve Account Opening (2K)

**GIVEN** a Prospect with More pills expanded  
**WHEN** I click on the "Improve account opening" pill (2K)  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Move applicants from intent to funded accounts faster." |
| Body | "Use connected account opening, digital banking..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore account opening | /platform/#account-opening |
| 2 | Talk to an expert | /contact/ |

---

## 17. Scenario 12: Launch a De Novo (2L)

**GIVEN** a Prospect with More pills expanded  
**WHEN** I click on the "Launch a de novo" pill (2L)  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Launch a new institution on a connected banking platform." |
| Body | "Deploy core processing, digital banking..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore de novo launch | /solutions/primary-core/#de-novo |
| 2 | Explore primary core | /solutions/primary-core/ |
| 3 | Talk to an expert | /contact/ |

---

## 18. Scenario 13: Grow Deposits (2M)

**GIVEN** a Prospect with More pills expanded  
**WHEN** I click on the "Grow deposits" pill (2M)  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Build deposit growth around a focused strategy." |
| Body | "Use Labs, digital banking, account opening..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore Labs | /labs/ |
| 2 | Talk to an expert | /contact/ |

---

## 19. Scenario 14: Unmatched Query Fallback

**GIVEN** a Prospect  
**WHEN** I type a query that doesn't match any keywords in the input field (2A)  
**AND** I click submit (2B) or press Enter  

**THEN** the chatbox expands showing:

| Element | Content |
|---------|---------|
| Heading | "Let us help you find the right path." |
| Body | "Tell us more about what you're looking to accomplish..." |

### CTAs

| CTA | Label | Destination |
|-----|-------|-------------|
| 1 | Explore the platform | /platform/ |
| 2 | Talk to an expert | /contact/ |

---

## 20. Scenario 15: Switch Between Pills

**GIVEN** a Prospect with chatbox already expanded showing one topic  
**WHEN** I click on a different pill  

**THEN** the chatbox content immediately updates to show the new topic without collapsing first

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | No collapse/expand animation |
| 2 | Content updates immediately |
| 3 | Input text clears |
| 4 | New heading, body, and CTAs display |

---

## 21. Scenario 16: Type New Query While Expanded

**GIVEN** a Prospect with chatbox expanded showing a response  
**WHEN** I start typing in the input field (2A)  

**THEN** the response card content immediately hides while the chatbox remains expanded

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Response content clears on first keystroke |
| 2 | Chatbox height adjusts smoothly |
| 3 | User can submit new query |
| 4 | Supports exploratory browsing flow |

---

## 22. Scenario 17: Click CTA Button in Response Card

**GIVEN** a Prospect with chatbox expanded showing a response  
**WHEN** I click on any CTA button (2O) in the response card  

**THEN** user is navigated to the corresponding page URL

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Navigation occurs immediately |
| 2 | "Talk to an expert" buttons styled black (primary) |
| 3 | Other buttons styled with light background (secondary) |
| 4 | All links functional and correct |

---

## 23. Scenario 18: Keyboard Submit (Enter Key)

**GIVEN** a Prospect with focus on input field (2A)  
**WHEN** I type a query and press the Enter key  

**THEN** query is submitted and chatbox expands with matching response

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Enter key triggers form submission |
| 2 | Behavior identical to clicking submit button (2B) |
| 3 | Supports efficient keyboard navigation |

---

## 24. Scenario 19: Empty Submit Handling

**GIVEN** a Prospect  
**WHEN** I click submit (2B) or press Enter with empty input field  

**THEN** fallback response displays with generic guidance

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Shows "Let us help you find the right path." heading |
| 2 | Generic CTAs: "Explore the platform" and "Talk to an expert" |
| 3 | User receives guidance rather than error |

---

## 25. Scenario 20: Mobile Responsive Behavior

**GIVEN** a Prospect on a mobile device (viewport < 768px)  
**WHEN** I interact with the chatbox  

**THEN** all elements are accessible and functional on mobile screens

### Acceptance Criteria

| # | Criteria |
|---|---------|
| 1 | Pills wrap to multiple lines as needed |
| 2 | Input box remains full width within container |
| 3 | Touch targets are minimum 44px |
| 4 | Response card content is readable |
| 5 | No horizontal overflow |

---

## 26. Response Content Reference

Complete mapping of all pill/query responses:

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

## 27. Animation Specifications

| Action | Animation | Timing |
|--------|-----------|--------|
| Expand (show response) | Slides down with ease | 400ms ease-in-out |
| Collapse (dismiss) | Slides up | 350ms |
| More pills appear | fadeSlideIn | 300ms |
| Pill-to-pill switch | Content swap (no collapse) | Immediate |
| Input typing while expanded | Response hides, height adjusts | Smooth |
| Placeholder text | Rotates between prompts | — |
| CTA button hover | Arrow grows with ease | 300ms ease |

### CTA Button Styling

| Style | Usage | Visual |
|-------|-------|--------|
| Primary (black) | "Talk to an expert" | Black background, white text |
| Secondary (light) | All other CTAs | Light background, dark text |
