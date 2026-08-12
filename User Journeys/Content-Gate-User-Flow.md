# Content Gate Template - User Flow

## Figma Reference
- **Design File:** [Dev Hand-off](https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=241-2766)
- **Node ID:** `241:2766`
- **Frame Name:** Content Gate Template
- **Dimensions:** 1512 × 1594px

---

## Overview

The Content Gate Template is a landing page design for gated content (whitepapers, reports, articles, infographics). It uses a two-column hero layout with content preview on the left and a HubSpot email capture form on the right. This template supports two modes:

1. **Email-gated content** — User submits email via HubSpot form to access content
2. **Direct download** — CTA button links directly to PDF or external page (no form)

---

## Page Structure

### Components (Top to Bottom)

| Component | Node ID | Description |
|-----------|---------|-------------|
| Nav dark | `241:2785` | Sticky header navigation (dark variant) |
| Hero Section | `241:2769` | Full-width hero with gradient background |
| Container | `241:2786` | Two-column content layout |
| Footer | `241:2767` | Standard site footer |

---

## Hero Section Design

### Background (`241:2770`)

| Element | Description |
|---------|-------------|
| Gradient | Purple/blue radial gradient with multiple ellipse layers |
| Lights | Animated glow effects using ellipses with blend modes (multiply, overlay) |
| Noise | Soft-light noise texture overlay for depth |
| Lines | Vertical decorative lines on left and right edges |

**Implementation Note:** Background uses CSS blend modes (`mix-blend-multiply`, `mix-blend-overlay`, `mix-blend-soft-light`) for layered effect.

---

## Two-Column Layout

### Container Specs
- **Max Width:** 1140px
- **Padding:** 32px horizontal
- **Column Gap:** 64px
- **Grid:** Two equal columns (~506px each)

---

### Left Column — Content Preview (`241:2788`)

#### 1. Eyebrow / Type Badge (`241:2790`)
- **Background:** `rgba(217, 217, 217, 0.2)` with 30px border-radius
- **Text:** Uppercase, 14px, bold, tracking 1px
- **Content:** Dynamic — "WHITEPAPER", "REPORT", "ARTICLE", etc.

#### 2. Title (`241:2794`)
- **Font:** Neue Haas Grotesk Display Pro 75 Bold
- **Size:** 42px / 48px line-height
- **Color:** `#171216`
- **Effect:** Blur (5px) — *Note: This appears to be a Figma styling artifact, likely not intended for production*

#### 3. Author / Subtitle (`241:2797`)
- **Font:** Neue Haas Grotesk Display Pro 75 Bold
- **Size:** 16px / 20.67px line-height
- **Color:** `#505f79`
- **Format:** "by [Author Name]"
- **Visibility:** Optional — hide when no author specified

#### 4. Description (`241:2799`)
- **Font:** Neue Haas Grotesk Display Pro 55 Roman
- **Size:** 18px / 28px line-height
- **Color:** `#42526e`
- **Spacing:** 24px top padding

#### 5. Bullet Points (`241:2800`)
- **Heading:** "In this [type], you will learn:" (bold)
- **List Style:** Disc bullets
- **Font:** 18px / 28px line-height
- **Spacing:** 33px gap from description

---

### Right Column — CTA Area (`241:2801`)

#### 1. Content Image (`241:2802`)
- **Dimensions:** 507 × 410px
- **Border Radius:** 16px (on container)
- **Fit:** Object-cover

#### 2. CTA Box (`241:2803`)

**With HubSpot Form (Email-Gated):**

| Element | Node ID | Specs |
|---------|---------|-------|
| Container | `241:2804` | Background: `#dcdee0`, border: 0.556px `#6b778c`, radius: 16px, padding: 32.556px |
| Email Input | `241:2807` | Background: white, border: 0.556px `#6b778c`, radius: 8px, placeholder: "Work email" |
| Submit Button | `241:2809` | Background: `#171216`, radius: pill (18641400px), text: "Download now" |

**Without Form (Direct Download):**
- Replace form with single CTA button
- Button links to PDF file or external page

---

## User Scenarios

### US-CG-01: User Arrives at Gated Content Page

**Given** user navigates to a content gate landing page  
**When** the page loads  
**Then** display:
- Navigation header (sticky)
- Hero with gradient background
- Content type badge (eyebrow)
- Content title and author (if applicable)
- Description and key takeaways
- Content preview image
- Email capture form OR download button

---

### US-CG-02: User Submits Email for Gated Content

**Given** page has HubSpot form enabled (`formId` is set)  
**When** user enters valid email and clicks "Download now"  
**Then**:
1. Submit form to HubSpot (portal ID: `45317917`)
2. HubSpot handles:
   - Add contact to CRM
   - Trigger email workflow
   - Redirect to thank you page / download link

**Validation:**
- Email field required
- Valid email format
- Show inline error on invalid input

---

### US-CG-03: User Clicks Direct Download

**Given** page has no HubSpot form (direct download mode)  
**When** user clicks the CTA button  
**Then** open the linked resource:
- PDF files: Open in new tab
- External URLs: Navigate to destination

---

### US-CG-04: Content Type Variations

**Given** different content types use this template  
**When** rendering the page  
**Then** apply content-specific styling:

| Content Type | Eyebrow Text | Accent Color |
|--------------|--------------|--------------|
| Whitepaper | WHITEPAPER | Default |
| Report | REPORT | Green 100 |
| Article | ARTICLE | Red 100 |
| Infographic | INFOGRAPHIC | Sky Blue |
| eBook | EBOOK | Default |

---

### US-CG-05: Infographic Variant

**Given** content type is "Infographic"  
**When** rendering the page  
**Then**:
- Display full infographic image instead of thumbnail
- CTA links to related whitepaper landing page
- Include "Click to enlarge" link to PDF version

---

## Acceptance Criteria

### Layout & Responsiveness

- [ ] Two-column layout at desktop (≥1024px)
- [ ] Stack to single column on tablet/mobile
- [ ] Content image appears above CTA box on mobile
- [ ] Maintain 1140px max-width container
- [ ] Sticky navigation header

### Form Integration

- [ ] HubSpot form embeds correctly when `formId` provided
- [ ] Form submits to HubSpot portal `45317917`
- [ ] Show loading state during submission
- [ ] Handle form errors gracefully
- [ ] Direct download mode works when no `formId`

### Visual Fidelity

- [ ] Gradient background renders correctly
- [ ] Noise texture overlay applied
- [ ] Type badge has correct semi-transparent background
- [ ] Button uses pill shape (high border-radius)
- [ ] Footer renders below content

### Content Management

- [ ] All text content from frontmatter/MDX
- [ ] Author field optional (hide when empty)
- [ ] Bullet points support markdown list
- [ ] Content image from frontmatter `heroImage` field

---

## Data Model

Content gate pages are defined in `/content/insights/landing-pages/`:

```yaml
---
# Required
title: "Page Title"
description: "Brief description shown on page"
type: whitepaper | report | article | infographic | ebook

# Image
heroImage: ./images/filename.png

# CTA - one of:
formId: "hubspot-form-uuid"     # For email-gated content
# OR
downloadUrl: ./files/doc.pdf   # For direct download
ctaText: "Download Now"        # Button text

# Optional
subtitle: "by Author Name"
accent: -g100 | -g200 | -r100  # Color accent for eyebrow
bulletHeading: "In this whitepaper, you will learn:"
bullets:
  - "First key takeaway"
  - "Second key takeaway"
  - "Third key takeaway"

# For infographics
infographicImage: ./images/full-infographic.png
infographicPdf: ./files/infographic.pdf
relatedWhitepaperUrl: /lp/related-whitepaper/
---

Additional body content (markdown) appears below bullets.
```

---

## HubSpot Integration

### Portal & Form IDs

| Page | Form ID |
|------|---------|
| Cornerstone Report 2025 | `fb3ba233-e2f4-4f1f-af82-b158379ee550` |
| Dashboards Won't Deliver | `6f9dee97-0e49-4fef-8ba7-4fdf178a081a` |
| Rise of Microbusinesses | `9f8170ed-8e08-43f7-80f1-e81514fd1db0` |
| Vertical Banking 2025 | `81698f26-4e22-45fc-b6e2-a506ec142746` |

### Embed Pattern

```javascript
hbspt.forms.create({
  portalId: "45317917",
  formId: "FORM_ID_HERE",
  target: "#hubspot-form-container"
});
```

Or use `@hubspot/react-forms` for Next.js:

```jsx
import { HubSpotForm } from '@hubspot/react-forms';

<HubSpotForm
  portalId="45317917"
  formId={formId}
  loading={<div>Loading form...</div>}
/>
```

---

## Related Documentation

- [Landing Pages Migration](/content/insights/landing-pages/README.md) — Full list of pages with form IDs and assets
- [Insights Hub User Flow](./Blog-User-Flow.md) — Insights hub listing page
- [Header Dropdowns](./Header-Dropdowns-User-Flow.md) — Navigation reference

---

## Design Tokens

### Typography

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|-------------|----------------|
| Eyebrow | Neue Haas Grotesk Display Pro | 14px | 700 | 18px | 1px |
| H3 Bold | Neue Haas Grotesk Display Pro | 42px | 700 | 48px | 0 |
| Body | Neue Haas Grotesk Display Pro | 18px | 500 | 28px | 0.18px |
| Body Small | Neue Haas Grotesk Display Pro | 14px | 500 | 22px | 0.7px |
| CTA | Neue Haas Grotesk Display Pro | 14px | 700 | 22px | 1.12px |

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Text Primary | `#171216` | Titles, buttons |
| Text Secondary | `#42526e` | Body copy |
| Text Tertiary | `#505f79` | Author, metadata |
| CTA Box BG | `#dcdee0` | Form container |
| Border | `#6b778c` | Input borders |
| Eyebrow BG | `rgba(217,217,217,0.2)` | Type badge |

---

*Document generated: August 11, 2026*
