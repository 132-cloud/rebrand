# Contact Page User Flow & Journey

**Source:** Figma Dev Hand-off — /contact (Node 17:9479)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=17-9479  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Global Animations](#2-global-animations)
3. [Section 1: Navigation](#3-section-1-navigation)
4. [Section 2: Hero + Contact Form](#4-section-2-hero--contact-form)
5. [Section 3: Footer](#5-section-3-footer)
6. [Form User Flow (Detailed)](#6-form-user-flow-detailed)
7. [Appendix: Comments & Notes](#7-appendix-comments--notes)
8. [Open Questions](#8-open-questions)

---

## 1. Page Overview & Scroll Journey

The /contact page is a single-purpose lead capture page. It presents a brief value proposition on the left and a contact form on the right, all overlaid on a dark animated gradient background. There is no below-the-fold content section — the page is essentially a single viewport with the footer directly beneath.

**Page Dimensions:** 1512 × 1594px  
**URL:** /contact/

**Important Context (Mike's directive):**
> "All CTA contact buttons will use the single /contact form for now. No need to overcomplicate it in Phase 1."

This means every "Talk to an expert," "Contact Sales," and "Book a demo" CTA across the entire site routes to this single page in Phase 1.

**Scroll Order (top to bottom):**

| # | Section | Y Position | Height | Purpose |
|---|---------|-----------|--------|---------|
| 1 | Navigation (dark) | 0 | 87px | Global nav, persistent |
| 2 | Hero + Contact Form | 0–969 | 969px | Value prop + lead form |
| 3 | Footer | 947–1594 | 647px | Navigation + legal |

---

## 2. Global Animations

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Background gradient | Grain texture on top of moving gradient | https://reactbits.dev/backgrounds/grainient |
| Scroll reveal | All components fade in up with ease | Global spec |
| Button hover | Arrow grows with ease | Global spec |
| Button style | Specular button (black) | https://reactbits.dev/components/specular-button |

---

## 3. Section 1: Navigation

**Figma Node:** `17:9498` (Nav dark instance) + `17:9536` (duplicate at top)

### Layout
- Dark variant of the global navigation component
- Full-width, 1512 × 87px
- Persistent at top of page

### Content
Standard global nav (same as all pages):
| Item | Type | Destination |
|------|------|-------------|
| Logo (Nymbus) | Link | / |
| Platform | Dropdown | /platform/ |
| Managed Services | Dropdown | /managed-services/ |
| Solutions | Dropdown | /solutions/ |
| AI | Dropdown | /ai/ |
| Resources | Dropdown | /resources/ |
| Book a Demo (Button) | CTA | /demo/ |
| Contact Sales | Text link | /contact/ (current page) |

### Interactions
| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Dropdown hover | Opens mega-menu panel | https://rebrand-kohl.vercel.app/ |
| CTA hover | Arrow grows with ease | Global |
| Scroll down | Nav hides (slide up) | Global |
| Scroll up | Nav reappears | Global |

---

## 4. Section 2: Hero + Contact Form

**Figma Node:** `17:9481` (Section) → `17:9482` (Hero)

### Layout
- Full-width section: 1512 × 969px
- Dark animated gradient background with noise overlay
- Two vertical guide lines at x:116 and x:1397 (content column boundaries)
- Two-column layout within centered container (1140px wide, offset at y:176)
  - **Left column:** 506px — Value proposition text
  - **Right column:** 506px — Contact form card

### Background Elements

**Figma Node:** `17:9483` (BG) → `17:9484` (Gradient)

- Gradient container: 1530 × 976px
- 8 gradient ellipses (purple/dark tones) creating ambient background effect
- Noise-Animation frame (1530 × 972px) — animated grain texture overlay

### Left Column — Value Proposition

**Figma Node:** `17:9501` (Container)

| Element | Content | Node |
|---------|---------|------|
| Eyebrow badge | "Contact Nymbus" | `17:9505` |
| Heading (H1) | "Talk to us about your next move." | `17:9507` |
| Body paragraph | "Contact Nymbus about platform, growth, modernizati..." | `17:9509` |

**Eyebrow badge details:**
- Rounded rectangle container: 168 × 46px
- Text: "Contact Nymbus" (centered within badge)
- Style: Pill/badge shape (rounded-rectangle background)

**Heading:**
- Large display text, ~507px wide × 234px tall
- Multi-line wrapping

**Body:**
- Subtitle/description text, ~507px wide × 56px tall
- Full text: "Contact Nymbus about platform, growth, modernization, partnership, or general business inquiries below."

### Right Column — Contact Form

**Figma Node:** `17:9510` (Container) → `17:9515` (Form)

**Form Header:**
| Element | Content | Node |
|---------|---------|------|
| Form title (H3) | "Send us a message" | `17:9512` |
| Form subtitle | "Share a few details and we'll follow up." | `17:9514` |

**Form Fields:**

| # | Field | Type | Placeholder | Width | Required | Node |
|---|-------|------|-------------|-------|----------|------|
| 1a | First name | Text Input | "First name" | 212px | Yes | `17:9518` |
| 1b | Last name | Text Input | "Last name" | 212px | Yes | `17:9520` |
| 2 | Work email | Email Input | "Work email" | 441px | Yes | `17:9523` |
| 3 | Phone number | Phone Input (US) | "Phone number" | 441px | Yes | `17:9525` |
| 4 | Institution or company name | Text Input | "Institution or company name" | 441px | Yes | `17:9527` |
| 5 | Role | Text Input | "Role" | 441px | Yes | `17:9529` |
| 6 | Message | Text Area | "Message" | 441px (105px tall) | Yes | `17:9532` |
| 7 | Submit | Button | "Submit inquiry" | 441px | — | `17:9534` |

**Field Layout Notes:**
- Fields 1a + 1b are side-by-side (two half-width inputs in one row)
- Fields 2–7 are full-width, stacked vertically
- All text inputs: 45px tall with 16.5px horizontal padding
- Text area: 105px tall
- Submit button: 44px tall, text centered ("Submit inquiry")
- Spacing between fields: ~16px (derived from Y offsets)
- All fields are required (indicated with asterisk or required attribute)

### Form Container Styling
- Inner padding: 32.5px on all sides
- Total form container: 506 × 681px
- Background: Solid fill `#DCDEE0`
- Border: `#6B778C`, 0.56px weight stroke

### Interactions & Animations

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Page load | Left column fades in up with ease | Global |
| Page load | Form fades in up with slight delay | Global (stagger) |
| Background | Gradient animates with grain overlay | https://reactbits.dev/backgrounds/grainient |
| Input focus | Border highlight / glow (standard form UX) | — |
| Submit hover | Specular button animation | https://reactbits.dev/components/specular-button |
| Submit click | Button shows spinner, form submits to HubSpot | — |
| Validation error | Inline field error states (all fields required) | — |

---

## 5. Section 3: Footer

**Figma Node:** `17:9480` (Footer instance)

### Layout
- Width: 1517px, Height: 647px
- Position: y:947 (overlaps slightly with hero section bottom)
- Standard global footer component (shared across all pages)

### Content
- Multi-column link navigation
- Legal / copyright line
- Social media icon links
- Nymbus logo

### Interactions
- Standard footer link behavior
- Same as all other pages (see User Journeys-Footer.csv for full spec)

---

## 6. Form User Flow (Detailed)

### Entry Points (How Users Reach /contact/)

Users arrive at this page from CTAs across the entire site. Per Mike's Phase 1 directive, all contact-related CTAs route here.

| Source Page | CTA Text | Location on Page |
|-------------|----------|-----------------|
| Homepage | "Talk to an expert" (pill button 2H) | Hero chatbox |
| Homepage | "Talk to an expert" (response CTA) | Chatbox responses |
| Homepage | "Contact Sales" | Navigation bar |
| All pages | "Contact Sales" | Navigation bar |
| All pages | "Book a Demo" | Navigation bar |
| Core pages | "Book a Demo" | Footer CTA |
| Platform page | "Talk to an expert" | Various CTAs |
| Labs page | "Talk to an expert" | Various CTAs |
| Managed Services | "Talk to an expert" | Various CTAs |

### Form Submission Flow

```
[User arrives at /contact/]
        |
        v
[Page loads — gradient BG animates]
[Left: value prop fades in]
[Right: form card fades in (staggered)]
        |
        v
[User fills out form fields]
        |
        +---> [Fields 1a/1b: First/Last name] (required)
        +---> [Field 2: Work email] (required, email validation)
        +---> [Field 3: Phone number] (required, US format)
        +---> [Field 4: Institution/company] (required)
        +---> [Field 5: Role] (required)
        +---> [Field 6: Message] (required, free text)
        |
        v
[User clicks "Submit inquiry"]
        |
        +---> [Validation passes?]
        |         |
        |     YES → [Button shows spinner loading state]
        |              |
        |              v
        |         [HubSpot form submits]
        |              |
        |              v
        |         [HubSpot native success state]
        |
        +---> [Validation fails?]
                  |
              NO → [Inline error messages on invalid fields]
                  |
                  v
              [User corrects errors and resubmits]
```

### Field Validation Rules

| Field | Required | Validation |
|-------|----------|-----------|
| First name | Yes | Non-empty, text only |
| Last name | Yes | Non-empty, text only |
| Work email | Yes | Valid email format |
| Phone number | Yes | Valid US phone format (10 digits) |
| Institution or company name | Yes | Non-empty |
| Role | Yes | Non-empty |
| Message | Yes | Non-empty, free text |

### Post-Submission Behavior

| Scenario | Behavior |
|----------|----------|
| Success | HubSpot native success state (inline confirmation) |
| Loading | Submit button shows spinner animation |
| Server error | Display inline error, allow retry |
| Duplicate submission | Prevent double-submit (button disabled + spinner while loading) |

### Form Backend

- **Service:** HubSpot (embedded form or API submission)
- **Integration:** HubSpot native — code coming soon
- **Success state:** HubSpot native thank-you/confirmation message

---

## 7. Appendix: Comments & Notes

### Mike's Directive on Contact Pages
> "Lets keep it simple for now. All CTA contact buttons will use the single /contact form for now. No need to overcomplicate it in Phase 1."  
> — Mike, Aug 6, 2026 (unresolved)

### Sarah's Question on Contact Pages
> "@Mike pointing out we have multiple contact pages, which one is used where and when?"  
> — Sarah Schaper, Aug 4, 2026, Node `1:10` (unresolved)

### Relevant Global Animation Specs (Sarah)

| Animation | Comment | Reference | Node |
|-----------|---------|-----------|------|
| Background grain | "grain on top of moving gradient" | https://reactbits.dev/backgrounds/grainient | `0:1` |
| Button style | "Button style black" | https://reactbits.dev/components/specular-button | `22:204` |
| Button hover | "on hover: arrow grows with ease" | — | `22:204` |
| Scroll reveal | "On scroll all components fade in up with ease" | — | `0:1` |
| Nav dropdown | "main nav drop down animation" | https://rebrand-kohl.vercel.app/ | `22:204` |

### No Page-Specific Comments

There are no Sarah comments directly on nodes within the /contact page (17:9479 subtree). The page relies on global animation/interaction specs that apply site-wide.

---

## 8. Resolved Questions

All open questions have been resolved:

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Dropdown options (Field 6) | **Removed** — dropdown field deleted from form |
| 2 | Multiple contact pages | All CTAs → /contact for Phase 1. Phase 2 will introduce variants and routing |
| 3 | Form submission endpoint | **HubSpot** — code coming soon |
| 4 | Success state design | **HubSpot native** success/confirmation state |
| 5 | Body copy truncation | Full text: "Contact Nymbus about platform, growth, modernization, partnership, or general business inquiries below." |
| 6 | Form card styling | Solid fill `#DCDEE0`, stroke `#6B778C` 0.56px weight |
| 7 | Required field indicators | **All fields required** — add required indicators for every field |
| 8 | Phone format | **US phone number** format only |
| 9 | Submit button loading state | **Spinner** animation while submitting |
