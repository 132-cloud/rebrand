# Mobile Content Gate Template - User Flow

**Source:** Figma Dev Hand-off — Content Gate Template - Mobile (Node 262:14522)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=262-14522
**Last Updated:** August 19, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Mobile Navigation Header](#3-mobile-navigation-header)
4. [Hero Content Section](#4-hero-content-section)
5. [CTA Box & HubSpot Form](#5-cta-box--hubspot-form)
6. [Mobile Footer](#6-mobile-footer)
7. [Mobile Animations & Interactions](#7-mobile-animations--interactions)
8. [User Journey Scenarios](#8-user-journey-scenarios)
9. [Acceptance Criteria](#9-acceptance-criteria)
10. [Open Questions](#10-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The Mobile Content Gate Template adapts the desktop's two-column gated content landing page into a single-column, touch-optimized layout:

- **Desktop:** 1512 x 1594px (two-column layout)
- **Mobile:** 428 x 2363px (single-column stacked layout)

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| Two-column layout (content left, image+form right) | Single column stacked | 428px viewport |
| Image beside form | Image above title | Visual hierarchy |
| Eyebrow left-aligned | Eyebrow centered | Mobile balance |
| Form beside content | Form below all content | Touch flow |
| 507x410px content image | 396x321px full-width image | Viewport fit |
| Side-by-side email input + button | Stacked input above button | Touch targets |


### Design Philosophy

- **Touch-first interactions** — All targets minimum 44×44px
- **Single-column flow** — Content stacks vertically for easy scrolling
- **Full-width form** — Email input and button span viewport width
- **Simplified background** — Same gradient effect, optimized rendering

---

## 2. Page Structure & Scroll Journey

**Figma Node:** `262:14522` (Content Gate Template - Mobile)
**Dimensions:** 428 x 2363px

### Scroll Order (top to bottom)

| # | Section | Y Position | Height | Purpose |
|---|---------|------------|--------|---------|
| 1 | Navigation Header | 0–87 | 87px | Mobile hamburger nav (dark) |
| 2 | Eyebrow Badge | 112 | 46px | Content type indicator |
| 3 | Content Image | 188–509 | 321px | Preview image |
| 4 | Title & Author | 539–654 | 115px | Content title + byline |
| 5 | Description | 684–852 | 168px | Content description |
| 6 | Bullet Takeaways | 885–997 | 112px | Key learnings |
| 7 | CTA Box / Form | 1030–1201 | 171px | HubSpot email capture |
| 8 | Footer | 1288–2363 | 1075px | Mobile footer |

---

## 3. Mobile Navigation Header

**Figma Node:** `302:8258` (Nav Mobile)
**Dimensions:** 428 x 87px

See [Mobile-Header-Navigation-User-Flow.md](./Mobile-Header-Navigation-User-Flow.md) for complete documentation.

**Summary:**
- Dark-themed mobile nav (matches desktop Content Gate)
- Nymbus logo (left) + hamburger icon (right)
- Hamburger opens full-screen menu overlay

---

## 4. Hero Content Section

**Figma Node:** `262:14566` (Hero Content)
**Position:** Y 112–1137
**Width:** 396px (16px side padding)

### Background

**Figma Node:** `262:14525` (BG)
- Purple/blue radial gradient with ellipse light layers
- Same gradient treatment as desktop, full-height coverage
- Noise texture overlay for depth


### 4.1 Eyebrow Badge (Mobile)

**Figma Node:** `262:14568` (Eyebrow)
**Position:** X 114 (centered), Y 0 within Hero Content
**Dimensions:** 168 x 46px

#### Layout
- **Centered** on mobile (vs left-aligned on desktop)
- Background: `rgba(217, 217, 217, 0.2)`, rounded-full (30px radius)
- Text: Uppercase, 14px bold, tracking 1px
- Content: Dynamic — "WHITEPAPER", "REPORT", "ARTICLE", etc.

---

### 4.2 Content Image (Mobile)

**Figma Node:** `262:14571` (content image)
**Position:** Y 76 within Hero Content
**Dimensions:** 396 x 321px (full content width)

#### Layout
- Full-width image (396px)
- Border radius: 16px
- Object-fit: cover
- **Positioned above title** (vs beside form on desktop)

#### Mobile Adaptation

| Desktop | Mobile |
|---------|--------|
| 507 x 410px | 396 x 321px |
| Right column, beside form | Top of content, above title |
| Side-by-side with text | Stacked above text |

---

### 4.3 Title & Author (Mobile)

**Figma Node:** `262:14572` (Frame 2147238576)
**Position:** Y 427 within Hero Content
**Dimensions:** 396 x 115px

#### Content

| Element | Node | Specs |
|---------|------|-------|
| Title | `262:14573` | 396px width, 84px height, H3 Bold (42px/48px) |
| Author | `262:14574` | Centered, 137px width, "by [Author Name]", 16px, `#505f79` |

#### Mobile Adaptation
- Author line is **centered** (vs left-aligned on desktop)
- Title spans full width
- Author optional — hide when not specified

---

### 4.4 Description & Bullets (Mobile)

**Figma Node:** `262:14575` (Paragraph)
**Position:** Y 572 within Hero Content
**Dimensions:** 396 x 517px

#### Description
**Node:** `262:14576`
- Width: 396px, Height: 168px
- Font: 18px / 28px line-height
- Color: `#42526e`

#### Bullet Takeaways
**Node:** `262:14577`
- Width: 396px, Height: 112px
- Heading: "In this [type], you will learn:" (bold)
- List style: Disc bullets
- 201px gap from description top


---

## 5. CTA Box & HubSpot Form

**Figma Node:** `262:14578` (CTA box)
**Position:** Y 346 within Paragraph frame (Y ~918 from page top)
**Dimensions:** 396 x 171px

### Form Container

**Node:** `262:14579` (Container)
- Background: `#dcdee0`
- Border: 0.556px `#6b778c`
- Border radius: 16px
- Padding: ~32.5px

### Form Elements (Mobile Layout)

**Stacked vertically** (vs side-by-side on desktop):

#### Email Input
**Node:** `262:14582` (Email Input)
- Width: 334px (within container)
- Height: 45px
- Background: white
- Border: 0.556px `#6b778c`
- Border radius: 8px
- Placeholder: "Work email"

#### Submit Button
**Node:** `262:14584` (Button)
- Width: 300px
- Height: 45px
- Background: `#171216`
- Border radius: pill (high radius)
- Text: "Download now", 14px bold, white
- Gap: ~20px below input

### Mobile Form Adaptations

| Desktop | Mobile |
|---------|--------|
| Form beside content image | Form below all content |
| ~440px form container | 396px full-width container |
| Email input fills form width | 334px input (with padding) |
| Button beside or below input | Button stacked below input |

### Form Modes

**With HubSpot Form (Email-Gated):**
- Email input + Submit button
- Submits to HubSpot portal `45317917`

**Without Form (Direct Download):**
- Single CTA button replaces form
- Button links to PDF or external URL


---

## 6. Mobile Footer

**Figma Node:** `280:2946` (Mobile Footer Ad)
**Position:** Y 1288–2363
**Dimensions:** 428 x 1075px

See [Mobile-Footer-User-Flow.md](./Mobile-Footer-User-Flow.md) for complete documentation.

---

## 7. Mobile Animations & Interactions

### Animation Adaptations

| Desktop Animation | Mobile Adaptation |
|-------------------|-------------------|
| Gradient light animation | Simplified/static gradient |
| Noise texture overlay | Same (soft-light blend) |
| Scroll reveal | Simplified fade-in |

### Touch Targets

All interactive elements meet minimum 44×44px:

| Element | Visual Size | Touch Target |
|---------|-------------|--------------|
| Hamburger menu | 24×24px | 44×44px (with padding) |
| Email input | 334×45px | Full input area |
| Submit button | 300×45px | Full button area |

### Form Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Tap email input | Keyboard opens, input focused |
| Type email | Keyboard visible, input updates |
| Tap "Download now" | Form validates and submits |
| Invalid email | Inline error message |
| Successful submit | HubSpot handles redirect/download |

---

## 8. User Journey Scenarios

### Scenario MCG-1: User Arrives at Gated Content Page

| Step | Detail |
|------|--------|
| **GIVEN** | User navigates to a mobile content gate landing page |
| **WHEN** | The page loads |
| **THEN** | Display stacked layout with nav, eyebrow, image, title, description, bullets, and form |

**Acceptance Criteria:**
1. Navigation header renders (dark variant)
2. Eyebrow badge centered with content type
3. Content image full-width (396px)
4. Title and author below image
5. Description and bullets render
6. Form or CTA button at bottom of content
7. Footer below form

---

### Scenario MCG-2: User Submits Email for Gated Content

| Step | Detail |
|------|--------|
| **GIVEN** | Page has HubSpot form enabled |
| **WHEN** | User enters valid email and taps "Download now" |
| **THEN** | Form submits to HubSpot |

**Acceptance Criteria:**
1. Keyboard opens on input tap
2. Email validates on submit
3. Loading state shown during submission
4. HubSpot handles CRM add + email workflow
5. Redirect to thank you page / download


---

### Scenario MCG-3: User Enters Invalid Email

| Step | Detail |
|------|--------|
| **GIVEN** | User is on mobile content gate page |
| **WHEN** | User enters invalid email and taps submit |
| **THEN** | Inline error displays |

**Acceptance Criteria:**
1. Email field shows error state
2. Error message: "Please enter a valid email"
3. Button remains enabled
4. User can correct and resubmit

---

### Scenario MCG-4: User Taps Direct Download (No Form)

| Step | Detail |
|------|--------|
| **GIVEN** | Page has no HubSpot form (direct download mode) |
| **WHEN** | User taps the CTA button |
| **THEN** | Linked resource opens |

**Acceptance Criteria:**
1. PDF files: Open in new tab/viewer
2. External URLs: Navigate to destination
3. Button shows tap feedback

---

### Scenario MCG-5: User Scrolls Through Page

| Step | Detail |
|------|--------|
| **GIVEN** | User is on mobile content gate page |
| **WHEN** | User scrolls from top to bottom |
| **THEN** | All sections render correctly |

**Acceptance Criteria:**
1. Gradient background covers hero area
2. Content image loads
3. Text content renders
4. Form is visible and functional
5. Footer appears at bottom
6. Smooth 60fps scrolling

---

### Scenario MCG-6: Content Type Variations

| Step | Detail |
|------|--------|
| **GIVEN** | Different content types use this template |
| **WHEN** | Rendering the page |
| **THEN** | Eyebrow shows correct type |

**Content Types:**

| Content Type | Eyebrow Text |
|--------------|--------------|
| Whitepaper | WHITEPAPER |
| Report | REPORT |
| Article | ARTICLE |
| Infographic | INFOGRAPHIC |
| eBook | EBOOK |

---

## 9. Acceptance Criteria

### Layout & Responsiveness

- [ ] Single-column stacked layout on mobile
- [ ] 16px horizontal padding (396px content width)
- [ ] Eyebrow badge centered
- [ ] Content image above title (not beside)
- [ ] Form below all content
- [ ] Sticky navigation header

### Form Integration

- [ ] HubSpot form embeds correctly when `formId` provided
- [ ] Form submits to HubSpot portal `45317917`
- [ ] Mobile keyboard interaction works properly
- [ ] Input focused on tap
- [ ] Show loading state during submission
- [ ] Handle form errors gracefully
- [ ] Direct download mode works when no `formId`

### Visual Fidelity

- [ ] Gradient background renders correctly
- [ ] Noise texture overlay applied
- [ ] Eyebrow badge has correct semi-transparent background
- [ ] Button uses pill shape
- [ ] Footer renders below content

### Touch Interactions

- [ ] All touch targets minimum 44×44px
- [ ] Form inputs have adequate tap area
- [ ] Button shows tap feedback
- [ ] Keyboard dismisses on outside tap


---

## 10. Open Questions (All Resolved)

### Inherited from Desktop (Resolved)

| # | Question | Resolution |
|---|----------|-----------|
| 1 | HubSpot form styling | ✅ RESOLVED: **CSS override will be needed**. HubSpot's default embed styling rarely matches custom designs perfectly on mobile. |
| 2 | Form redirect behavior | ✅ RESOLVED: **Show inline download button** after successful submission. Don't rely on email delivery — provide immediate access to the gated content. |
| 3 | Infographic variant | ✅ RESOLVED: **Display-only, no tap to enlarge**. Show full infographic image at mobile scale. |

### Mobile-Specific (Resolved)

| # | Question | Resolution |
|---|----------|-----------|
| 4 | Keyboard behavior | ✅ RESOLVED: **Require explicit dismiss**. No auto-dismiss after email entry — standard mobile pattern. |
| 5 | Form scroll position | ✅ RESOLVED: **Yes**, scroll to keep submit button visible when keyboard opens. |
| 6 | Image tap | ✅ RESOLVED: **No action** — display only. Image does not enlarge or navigate. |
| 7 | Error message position | ✅ RESOLVED: **Below the input field**. Standard validation pattern. |
| 8 | Loading state | ✅ RESOLVED: **Spinner inside button** with text "Submitting..." |

---

## HubSpot Integration

### Portal & Form IDs

| Page | Form ID |
|------|---------|
| Cornerstone Report 2025 | `fb3ba233-e2f4-4f1f-af82-b158379ee550` |
| Dashboards Won't Deliver | `6f9dee97-0e49-4fef-8ba7-4fdf178a081a` |
| Rise of Microbusinesses | `9f8170ed-8e08-43f7-80f1-e81514fd1db0` |
| Vertical Banking 2025 | `81698f26-4e22-45fc-b6e2-a506ec142746` |

### Mobile Embed Pattern

```jsx
import { HubSpotForm } from '@hubspot/react-forms';

<HubSpotForm
  portalId="45317917"
  formId={formId}
  loading={<div>Loading form...</div>}
  // Mobile-specific: ensure keyboard doesn't break layout
  onReady={() => {
    // Scroll form into view when focused
  }}
/>
```

---

## Related Documentation

- [Content Gate User Flow (Desktop)](../Content-Gate-User-Flow.md) — Desktop template documentation
- [Mobile Header Navigation](./Mobile-Header-Navigation-User-Flow.md) — Navigation reference
- [Mobile Footer](./Mobile-Footer-User-Flow.md) — Footer reference
- [Insights Hub README](/content/insights/README.md) — Content migration notes

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 19, 2026 | Initial mobile Content Gate document | Kiro |
