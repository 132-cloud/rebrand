# Mobile Contact Page User Flow & Journey

**Source:** Figma Dev Hand-off — Contact - Mobile (Node 262:15642)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=262-15642
**Last Updated:** August 12, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Section 1: Mobile Header Navigation](#3-section-1-mobile-header-navigation)
4. [Section 2: Hero + Contact Form](#4-section-2-hero--contact-form)
5. [Section 3: Mobile Footer](#5-section-3-mobile-footer)
6. [Form User Flow (Detailed)](#6-form-user-flow-detailed)
7. [Mobile Interactions & Animations](#7-mobile-interactions--animations)
8. [User Journey Scenarios](#8-user-journey-scenarios)
9. [Accessibility & Touch Guidelines](#9-accessibility--touch-guidelines)
10. [Open Questions](#10-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Contact page is a single-purpose lead capture page. It stacks the hero content (value proposition) above the form card in a single-column layout, replacing the desktop's side-by-side two-column arrangement. The page is intentionally simple — hero + form + footer.

**Total Dimensions:** 428 × 2363px
**URL:** /contact/

**Important Context (Mike's directive):**
> "All CTA contact buttons will use the single /contact form for now. No need to overcomplicate it in Phase 1."

Every "Talk to an expert," "Contact Sales," and "Book a Demo" CTA across the entire site routes to this single page in Phase 1.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| Two-column layout (text left, form right) | Single-column stacked (text above form) | 428px viewport limitation |
| Side-by-side First/Last name fields | Stacked full-width (one per row) | 331px form width too narrow for side-by-side |
| Form container 506px wide | Form container 396px wide (16px margins) | Full viewport width minus padding |
| Desktop mega-menu navigation | Hamburger menu overlay | Standard mobile pattern |
| Desktop footer (5-column) | Mobile Footer Ad (2-column stacked) | Space constraints |
| Hero text 507px wide | Hero text 396px wide, centered | Full content width |

### Design Decisions

- **Single-column form** — All fields stack vertically (including First/Last name which are side-by-side on desktop)
- **Form card below hero** — Value prop visible first, form revealed on scroll
- **Same gradient background** — Full-height gradient covers both hero and form area
- **Full-width inputs** — All form fields 331px wide (form container with internal padding)
- **Same HubSpot backend** — Identical form submission to desktop

---

## 2. Page Structure & Scroll Journey

**Scroll Order (top to bottom):**

| # | Section | Y Position | Height | Purpose |
|---|---------|-----------|--------|---------|
| 1 | Mobile Header Nav | 0 | 87px | Navigation bar with hamburger menu |
| 2 | Hero Content | 112–454px | 342px | Value proposition (eyebrow + heading + subtitle) |
| 3 | Contact Form | 494–1238px | 744px | Lead capture form card |
| 4 | Mobile Footer | 1288–2363px | 1075px | Navigation + legal |

**Total page height:** 2363px (vs. desktop 1594px — 48% taller due to stacking)

---

## 3. Section 1: Mobile Header Navigation

**Figma Node:** `302:8349` (Nav Mobile instance)
**Dimensions:** 428 × 87px

### Layout
- Full-width dark header bar (transparent over gradient)
- Nymbus logo (left) — white variant for dark background
- Hamburger menu icon (right)
- Refer to [Mobile Header Navigation User Flow](./Mobile-Header-Navigation-User-Flow.md) for full menu behavior

### Interactions

| Trigger | Behavior |
|---------|----------|
| Tap hamburger icon | Opens full-screen menu overlay with accordion navigation |
| Tap logo | Navigates to homepage (/) |

---

## 4. Section 2: Hero + Contact Form

### Background

**Figma Node:** `262:15644` (Hero) → `262:15645` (BG) → `262:15646` (Gradient)
**Dimensions:** 428 × 1307px (covers hero + form area)

- Dark animated gradient background with pink/magenta/purple organic elliptical shapes
- Noise-Animation overlay (grain texture)
- Same treatment as desktop — full coverage behind both hero text and form card

### Hero Content

**Figma Node:** `262:15710` (Hero Content)
**Position:** x:16, y:112
**Dimensions:** 396 × 342px

#### Content Stack (centered)

1. **Eyebrow Badge**
   - **Text:** "CONTACT NYMBUS"
   - **Style:** Rounded rectangle pill badge (189 × 46px), centered
   - **Figma Node:** `262:15712`

2. **H1 Heading**
   - **Text:** "TALK TO US ABOUT YOUR NEXT MOVE."
   - **Style:** Bold uppercase display text, centered
   - **Dimensions:** 396 × 180px
   - **Figma Node:** `262:15715`

3. **Subtitle**
   - **Text:** "Contact Nymbus about platform, growth, modernization, partnership, or general business inquiries below."
   - **Style:** Body text, centered
   - **Dimensions:** 396 × 56px
   - **Figma Node:** `262:15716`
   - **Note:** Figma node label shows "Powered by the industry's first secure MCP server." — this is an incorrect label. Use the copy above (confirmed from desktop Contact page).

### Contact Form Card

**Figma Node:** `262:15657` (Container)
**Position:** x:16, y:494
**Dimensions:** 396 × 744px

#### Form Card Styling

| Property | Value | Notes |
|----------|-------|-------|
| Width | 396px | Full content width (428 - 32px margins) |
| Height | 744px | Content-driven |
| Background | Solid fill `#DCDEE0` | Light grey card |
| Border | `#6B778C`, 0.56px stroke | Subtle border |
| Border radius | Rounded corners | Matches desktop |
| Inner padding | 32.5px all sides | Content area = 331px wide |

#### Form Header

| Element | Content | Node |
|---------|---------|------|
| Form title (H3) | "Send us a message" | `262:15659` |
| Form subtitle | "Share a few details and we'll follow up." | `262:15661` |

#### Form Fields

| # | Field | Type | Placeholder | Width | Height | Required | Node |
|---|-------|------|-------------|-------|--------|----------|------|
| 1 | First name | Text Input | "First name" | 331px | 45px | Yes | `262:15664` |
| 2 | Last name | Text Input | "Last name" | 331px | 45px | Yes | `262:15666` |
| 3 | Work email | Email Input | "Work email" | 331px | 45px | Yes | `262:15669` |
| 4 | Phone number | Phone Input | "Phone number" | 331px | 45px | Yes | `262:15671` |
| 5 | Institution or company name | Text Input | "Institution or company name" | 331px | 45px | Yes | `262:15673` |
| 6 | Role | Text Input | "Role" | 331px | 45px | Yes | `262:15675` |
| 7 | Message | Text Area | "Message" | 332px | 159px | Yes | `262:15677` |
| 8 | Submit | Button | "Submit inquiry" | 331px | 45px | — | `262:15679` |

#### Mobile-Specific Field Layout
- **Desktop:** First name + Last name are side-by-side (two 212px fields)
- **Mobile:** All fields stack vertically at full width (331px)
- **Spacing between fields:** ~16px
- **Text area:** 159px tall (larger than desktop's 105px — more room for messages on mobile)
- **Submit button:** Full-width (331px), dark/specular style

---

## 5. Section 3: Mobile Footer

**Figma Node:** `280:4481` (Mobile Footer Ad instance)
**Y Position:** 1288px
**Dimensions:** 428 × 1075px

Refer to [Mobile Footer User Flow](./Mobile-Footer-User-Flow.md) for full footer specifications.

### Summary
- 2-column stacked navigation grid
- All footer links displayed statically (no accordion)
- Bottom bar with copyright, address, phone, social icons
- Same URLs as desktop footer

---

## 6. Form User Flow (Detailed)

### Entry Points (How Users Reach /contact/ on Mobile)

| Source | CTA Text | Location |
|--------|----------|----------|
| Any page | Hamburger menu → "Contact Sales" | Mobile navigation |
| Any page | Hamburger menu → "Book a Demo" | Mobile navigation sticky CTA |
| Homepage | "Talk to an expert" | Hero chatbox / CTAs |
| All pages | Various CTAs | Throughout site |
| Press page | "Contact media team" | Media Inquiries CTA |

### Form Submission Flow (Mobile)

```
[User arrives at /contact/ on mobile]
        |
        v
[Gradient background animates]
[Hero content fades in — eyebrow, heading, subtitle]
        |
        v (scrolls down)
[Form card visible]
        |
        v
[User taps first field — keyboard opens]
        |
        +---> [Field 1: First name] (text, required)
        +---> [Field 2: Last name] (text, required)
        +---> [Field 3: Work email] (email keyboard, required)
        +---> [Field 4: Phone number] (numeric keyboard, required)
        +---> [Field 5: Institution/company] (text, required)
        +---> [Field 6: Role] (text, required)
        +---> [Field 7: Message] (text area, required)
        |
        v
[User taps "Submit inquiry"]
        |
        +---> [Validation passes?]
        |         |
        |     YES → [Button shows spinner]
        |              |
        |              v
        |         [POST to HubSpot Forms API]
        |              |
        |              v
        |         [Custom success confirmation (inline)]
        |
        +---> [Validation fails?]
                  |
              NO → [Inline error messages on invalid fields]
                  |
                  v
              [User corrects errors and resubmits]
```

### Field Validation Rules

| Field | Required | Validation | Keyboard Type |
|-------|----------|-----------|---------------|
| First name | Yes | Non-empty, text only | Default |
| Last name | Yes | Non-empty, text only | Default |
| Work email | Yes | Valid email format | Email (`type="email"`) |
| Phone number | Yes | Valid US phone (10 digits) | Numeric (`type="tel"`) |
| Institution or company | Yes | Non-empty | Default |
| Role | Yes | Non-empty | Default |
| Message | Yes | Non-empty, free text | Default (multiline) |

### Post-Submission Behavior

| Scenario | Mobile Behavior |
|----------|-----------------|
| Success | Inline confirmation message (replaces form or slides in above) |
| Loading | Submit button shows spinner, button disabled, keyboard dismissed |
| Server error | Inline error message, allow retry |
| Network error | Friendly offline message, allow retry |
| Duplicate submission | Prevent double-submit (disabled + spinner) |

### Form Backend

- **Service:** HubSpot Forms API (custom form UI)
- **Portal ID:** `45317917`
- **Form ID:** `ae6ef02e-4e24-456c-8694-bf55bfeb1a7a`
- **Endpoint:** `POST https://api.hsforms.com/submissions/v3/integration/submit/45317917/ae6ef02e-4e24-456c-8694-bf55bfeb1a7a`
- **No API key required** — public endpoint authenticated by portal/form IDs

---

## 7. Mobile Interactions & Animations

### Global Animations

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Background gradient | Grain texture + animated gradient | https://reactbits.dev/backgrounds/grainient |
| Scroll reveal | Components fade in up with ease | Global pattern |
| Button tap | Specular button highlight | https://reactbits.dev/components/specular-button |

### Form-Specific Interactions

| Element | Trigger | Mobile Behavior |
|---------|---------|-----------------|
| Form fields | Tap | Focus state, keyboard opens |
| Form fields | Focus | Border highlight/glow |
| Email field | Tap | Email keyboard layout appears |
| Phone field | Tap | Numeric keyboard layout appears |
| Message area | Tap | Default keyboard, multiline input |
| Submit button | Tap | Specular highlight → spinner → submit |
| Submit button | Disabled state | Greyed out while submitting |
| Form card | Scroll in | Fades in up with ease |
| Hero content | Page load | Fades in up with ease |

### Mobile Keyboard Handling

| Scenario | Behavior |
|----------|----------|
| Field focused | Viewport scrolls to keep active field visible above keyboard |
| Next field (Tab/Next) | Auto-advances to next field, keyboard stays open |
| Message field focused | Viewport adjusts for taller text area |
| Submit tapped | Keyboard dismisses, form validates and submits |
| Tap outside form | Keyboard dismisses |

### Performance Considerations

| Aspect | Mobile Approach |
|--------|-----------------|
| Gradient background | Reduce blur complexity on low-power devices |
| Noise animation | Lower frame rate on mobile |
| Form interactions | No animation on field focus (instant response) |
| Submit spinner | Lightweight CSS animation |

---

## 8. User Journey Scenarios

### Scenario MC1: Complete Form Submission

| Step | Detail |
|------|--------|
| **GIVEN** | User navigates to /contact on mobile |
| **WHEN** | User fills all fields and taps "Submit inquiry" |
| **THEN** | Form submits to HubSpot and shows success confirmation |

**Acceptance Criteria:**
1. All fields accept input with appropriate keyboard types
2. Validation passes for all required fields
3. Submit button shows spinner during submission
4. Keyboard dismisses on submit tap
5. Success message displayed inline
6. Form data received in HubSpot CRM

---

### Scenario MC2: Validation Error on Submit

| Step | Detail |
|------|--------|
| **GIVEN** | User has filled some fields but left others empty |
| **WHEN** | User taps "Submit inquiry" |
| **THEN** | Inline error messages appear on invalid/empty fields |

**Acceptance Criteria:**
1. Keyboard dismisses on submit tap
2. Error messages appear below each invalid field
3. Page scrolls to first error field
4. Error styling is clear (red border, error text)
5. User can correct and resubmit

---

### Scenario MC3: Invalid Email Format

| Step | Detail |
|------|--------|
| **GIVEN** | User enters "not-an-email" in work email field |
| **WHEN** | User taps "Submit inquiry" or moves to next field |
| **THEN** | Email field shows validation error |

**Acceptance Criteria:**
1. Error message: "Please enter a valid email address"
2. Field border turns to error state
3. Email keyboard remains if field still focused
4. Clears error when valid email entered

---

### Scenario MC4: Phone Number Input

| Step | Detail |
|------|--------|
| **GIVEN** | User taps the phone number field |
| **WHEN** | Numeric keyboard appears |
| **THEN** | User can enter US phone number |

**Acceptance Criteria:**
1. Numeric/phone keyboard layout shown (not alpha)
2. Accepts 10-digit US format
3. Optional: auto-format as (XXX) XXX-XXXX
4. Validation rejects non-US formats

---

### Scenario MC5: Arrive from Site CTA

| Step | Detail |
|------|--------|
| **GIVEN** | User taps "Talk to an expert" or "Book a Demo" from any page |
| **WHEN** | /contact page loads on mobile |
| **THEN** | Hero is visible with form below fold |

**Acceptance Criteria:**
1. Page loads with hero content visible
2. Gradient background animates
3. Form card visible on slight scroll
4. No auto-scroll to form (user controls scroll)

---

### Scenario MC6: Network Error During Submit

| Step | Detail |
|------|--------|
| **GIVEN** | User completes form and taps submit but has no network |
| **WHEN** | HubSpot API call fails |
| **THEN** | Friendly error message displayed, form data preserved |

**Acceptance Criteria:**
1. Spinner stops, button re-enables
2. Error message shown (not a browser error)
3. All entered form data preserved (not cleared)
4. User can retry submission when connection restored

---

### Scenario MC7: Keyboard Viewport Adjustment

| Step | Detail |
|------|--------|
| **GIVEN** | User taps the "Message" textarea field |
| **WHEN** | Keyboard opens (reducing viewport) |
| **THEN** | Page scrolls so Message field is visible above keyboard |

**Acceptance Criteria:**
1. Active field remains visible when keyboard opens
2. No content obscured behind keyboard
3. User can scroll within form while keyboard is open
4. Smooth scroll adjustment (no jarring jumps)

---

## 9. Accessibility & Touch Guidelines

### Touch Targets

| Element | Minimum Size | Actual Size | Status |
|---------|--------------|-------------|--------|
| Form fields | 44 × 44px | 331 × 45px | ✓ Compliant |
| Submit button | 44 × 44px | 331 × 45px | ✓ Compliant |
| Hamburger menu | 44 × 44px | ~44 × 44px | ✓ Compliant |
| Nymbus logo | 44 × 44px | Needs padded touch target | ⚠ Add padding |

### ARIA & Semantics

| Component | Implementation |
|-----------|----------------|
| Page | `<main role="main">` |
| Hero section | `<section aria-label="Contact Nymbus">` |
| Form container | `<form aria-label="Contact form">` |
| Form title | `<h3>` — "Send us a message" |
| Input fields | `<input>` with `<label>` (visible or `aria-label`) |
| Required fields | `aria-required="true"` + visual indicator |
| Error messages | `aria-describedby` linking field to error, `role="alert"` |
| Submit button | `<button type="submit">` with loading state `aria-busy="true"` |
| Success message | `role="status"` with `aria-live="polite"` |

### Form Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Labels | Each field has associated `<label>` (can be placeholder-as-label with `aria-label`) |
| Error announcement | Screen reader announces errors via `aria-live` region |
| Focus management | On error, focus moves to first invalid field |
| Tab order | Natural top-to-bottom field order |
| Autocomplete | `autocomplete` attributes: `given-name`, `family-name`, `email`, `tel`, `organization`, `organization-title` |
| Keyboard navigation | Tab through fields, Enter to submit |

### Reduced Motion

| Animation | Reduced Motion Behavior |
|-----------|------------------------|
| Gradient animation | Static gradient (no movement) |
| Scroll fade-in | Instant display |
| Submit spinner | Static "Submitting..." text |
| Noise overlay | Static grain texture |

---

## 10. Open Questions (All Resolved)

All questions resolved via desktop Contact User Flow document:

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Form backend | HubSpot Forms API — custom UI, not embed widget |
| 2 | Phone format | US phone number format only |
| 3 | All fields required? | Yes — all 7 fields required |
| 4 | Success state | Custom inline confirmation (styled to site branding) |
| 5 | Multiple contact pages? | Single /contact form for Phase 1 (all CTAs route here) |
| 6 | Subtitle copy | "Contact Nymbus about platform, growth, modernization, partnership, or general business inquiries below." |

---

## Comparison: Desktop vs. Mobile

| Aspect | Desktop (1512px) | Mobile (428px) |
|--------|-------------------|----------------|
| Total height | 1594px | 2363px (+48% taller) |
| Layout | Two-column (text + form side-by-side) | Single-column stacked |
| First/Last name | Side-by-side (2 × 212px) | Stacked (2 × 331px) |
| Form width | 506px (441px fields) | 396px (331px fields) |
| Message textarea | 105px tall | 159px tall (more room) |
| Hero text alignment | Left-aligned | Centered |
| Navigation | Desktop mega-menu | Hamburger overlay |
| Footer | 5-column, 647px tall | 2-column stacked, 1075px tall |

---

## User Journey Flow Diagram

```
[User arrives at /contact/ on mobile]
    (from any CTA: "Talk to an expert", "Book a Demo", "Contact Sales")
        |
        v
[Mobile Header Nav — logo + hamburger]
        |
        v
[Hero — "TALK TO US ABOUT YOUR NEXT MOVE."]
    Eyebrow: "CONTACT NYMBUS"
    Subtitle: Platform, growth, modernization inquiries
        |
        v (scrolls)
[Form Card — "Send us a message"]
        |
        +---> [Taps field] ---> [Keyboard opens, viewport adjusts]
        |
        +---> [Fills all fields]
        |         |
        |         v
        |     [Taps "Submit inquiry"]
        |         |
        |         +---> [Valid?] --YES--> [Spinner → HubSpot API → Success ✓]
        |         |
        |         +---> [Invalid?] --NO--> [Error states → Fix → Retry]
        |
        v (scrolls past form)
[Mobile Footer — navigation + contact info]
        |
        +---> [See Mobile Footer User Flow for scenarios]
```

---

## Primary Conversion Path (Mobile)

This page has a single conversion path:

| Step | Action | Result |
|------|--------|--------|
| 1 | User arrives from any CTA | /contact loads |
| 2 | Scrolls to form | Form card visible |
| 3 | Fills 7 required fields | Data entered |
| 4 | Taps "Submit inquiry" | Lead captured in HubSpot |
| 5 | Sees confirmation | Trust signal, journey complete |

**Success Metric:** Form submission rate (leads captured)

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 12, 2026 | Initial mobile contact page document | Kiro |
