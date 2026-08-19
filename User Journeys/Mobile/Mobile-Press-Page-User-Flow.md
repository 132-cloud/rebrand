# Mobile Press Page User Flow & Journey

**Source:** Figma Dev Hand-off — Press - Mobile (Node 262:15949)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=262-15949
**Last Updated:** August 12, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Section 1: Mobile Header Navigation](#3-section-1-mobile-header-navigation)
4. [Section 2: Hero](#4-section-2-hero)
5. [Section 3: Media Logo Bar](#5-section-3-media-logo-bar)
6. [Section 4: Press Releases](#6-section-4-press-releases)
7. [Section 5: Press Kit](#7-section-5-press-kit)
8. [Section 6: Media Inquiries CTA](#8-section-6-media-inquiries-cta)
9. [Section 7: Mobile Footer](#9-section-7-mobile-footer)
10. [Mobile Interactions & Animations](#10-mobile-interactions--animations)
11. [User Journey Scenarios](#11-user-journey-scenarios)
12. [Accessibility & Touch Guidelines](#12-accessibility--touch-guidelines)
13. [Content Source & Data](#13-content-source--data)
14. [Open Questions](#14-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Press page adapts the desktop layout (1512px) to a 428px mobile viewport while maintaining all content and functionality. The page serves as the centralized media hub for journalists, analysts, and partners on mobile devices.

**Total Dimensions:** 428 × 6840px (significantly taller than desktop at 4978px due to stacking)

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| 2-column press release row (thumbnail + headline) | Stacked single-column cards (headline above thumbnail) | Full-width readability |
| 2-column large press kit cards | Single-column stacked cards | 428px viewport limitation |
| 3-column small press kit cards | Single-column stacked list items | Vertical flow |
| Side-by-side CTA buttons | Stacked full-width buttons | Thumb-friendly tap targets |
| Horizontal media logo row | Horizontal auto-scroll (marquee), pause on touch | Preserves logos at readable size |
| Desktop navigation | Hamburger menu (Nav Mobile instance) | Standard mobile pattern |
| Desktop footer | Mobile Footer Ad component | 2-column stacked layout |

### Design Decisions

- **Single-column layout** — All content stacks vertically for easy thumb scrolling
- **Full-width cards** — Press releases and press kit items span the 396px content area (428 - 32px padding)
- **Stacked CTAs** — Hero buttons stack vertically (300px wide, centered)
- **Larger touch targets** — All tappable elements sized for mobile interaction
- **Same gradient treatment** — Hero and CTA footer maintain the pink/magenta gradient backgrounds

---

## 2. Page Structure & Scroll Journey

**Scroll Order (top to bottom):**

| # | Section | Y Position | Height | Purpose |
|---|---------|-----------|--------|---------|
| 1 | Mobile Header Nav | 0 | 87px | Navigation bar with hamburger menu |
| 2 | Hero | 0–825 | 825px | Page introduction + stacked CTAs |
| 3 | Media Logo Bar | 825–1176 | 351px | Publications that cover Nymbus |
| 4 | Press Releases | 1176–2656 | 1480px | Latest company news (3 entries) |
| 5 | Press Kit | 2656–4947 | 2291px | Downloadable brand assets |
| 6 | Media Inquiries CTA | 4946–5765 | 819px | Contact the media team |
| 7 | Mobile Footer | 5765–6840 | 1075px | Navigation + legal |

---

## 3. Section 1: Mobile Header Navigation

**Figma Node:** `302:8408` (Nav Mobile instance)
**Dimensions:** 428 × 87px

### Layout
- Full-width dark header bar
- Nymbus logo (left)
- Hamburger menu icon (right)
- Refer to [Mobile Header Navigation User Flow](./Mobile-Header-Navigation-User-Flow.md) for full menu behavior

### Interactions

| Trigger | Behavior |
|---------|----------|
| Tap hamburger icon | Opens full-screen menu overlay with accordion navigation |
| Tap logo | Navigates to homepage (/) |

---

## 4. Section 2: Hero

**Figma Node:** `262:16069` (Hero background), `262:16109` (content frame)
**Dimensions:** Full-width, 825px tall
**Content Frame:** 394px wide, starts at Y:171

### Background Elements
- Pink/magenta/cream organic radial gradient (matching desktop hero)
- Noise-Animation overlay layer (grain texture)
- Elliptical gradient shapes for depth

### Content Stack (top to bottom, centered)

1. **Eyebrow Badge**
   - **Text:** "press room"
   - **Style:** Rounded rectangle pill badge (138 × 46px), centered
   - **Figma Node:** `262:16110`

2. **H1 Heading**
   - **Text:** "NEWS AND RESOURCES FROM NYMBUS."
   - **Style:** Bold uppercase display text, centered
   - **Dimensions:** 396 × 240px
   - **Figma Node:** `262:16113`

3. **Subtitle**
   - **Text:** "Press releases, approved brand assets, company information, and media resources, in one place."
   - **Style:** Body text, centered
   - **Dimensions:** 354 × 56px (20px horizontal margin)
   - **Figma Node:** `262:16115`
   - **Note:** Figma node label shows "Powered by the industry's first secure MCP server." — this is an incorrect label. Use the copy above.

4. **CTA Buttons (stacked vertically)**
   - **Container:** 300 × 118px, centered (47px from left)
   - **Button 1:** "Download press kit" (300 × 45px)
     - Style: Primary specular button (dark/filled)
     - Action: Downloads press kit ZIP / scrolls to Press Kit section
     - **Figma Node:** `262:16118`
   - **Button 2:** "Contact media team" (300 × 45px)
     - Style: Secondary/outline button
     - Action: Scrolls to Media Inquiries section or opens mailto
     - **Figma Node:** `262:16120`
   - **Spacing:** 75px gap between buttons (30px visible with button heights)

### Mobile-Specific Notes
- Heading is centered (desktop is left-aligned)
- CTAs stack vertically instead of side-by-side
- Subtitle copy matches desktop ("Press releases, approved brand assets, company information, and media resources, in one place.")

---

## 5. Section 3: Media Logo Bar

**Figma Node:** `262:16050` (LogoBarGuide)
**Y Position:** 825px
**Dimensions:** Full-width area, 351px tall

### Layout
- Centered label above logo row
- Horizontally scrolling row of 5 media outlet logos

### Content

- **Label:** "NYMBUS IN THE MEDIA"
  - **Figma Node:** `262:16052`
  - Style: Uppercase, centered
  - Y offset: 100px from section top

- **Logo Cards:** 5 rounded rectangle cards (176.5 × 81px each)
  - **Figma Nodes:** `262:16054` through `262:16066`
  - Each contains: rounded rectangle background + "Logo" placeholder text
  - Spacing: ~192px between card starts (tight horizontal arrangement)

### Mobile Behavior
- Logos displayed in a horizontally auto-scrolling row (overflow extends beyond 428px viewport)
- Auto-scroll pauses on touch/interaction
- Resumes auto-scroll after user releases touch
- Tap on logo opens external article in new tab

### Interactions

| Trigger | Behavior |
|---------|----------|
| Auto | Continuous horizontal scroll (marquee-style) |
| Touch/hold | Pauses auto-scroll |
| Release touch | Resumes auto-scroll |
| Tap logo | Opens corresponding article/publication in new tab |
| Tap feedback | Brief highlight on touch |

---

## 6. Section 4: Press Releases

**Figma Node:** `262:16121` (Press Release section)
**Y Position:** 1176px
**Dimensions:** 428 × 1480px

### Layout
- Single-column stacked cards
- Header area with eyebrow + heading + description
- 3 press release cards below

### Header Content

- **Eyebrow Badge:** "press releases"
  - Style: Rounded rectangle pill (206 × 46px), centered
  - **Figma Node:** `262:16124`

- **Heading:** "Latest company news."
  - Style: Large display text (396px wide, 96px tall)
  - **Figma Node:** `262:16127`

- **Description:** "Announcements from Nymbus, including platform updates, customer news, partnerships, leadership, and company milestones."
  - Style: Body text (396px wide, 84px tall)
  - **Figma Node:** `262:16128`

### Press Release Cards (3 shown)

Each card follows this stacked layout:

| Element | Details |
|---------|---------|
| Headline | "Press release headline placeholder" (396px wide, 28px) |
| CTA Link | "Read release →" with arrow icon (centered, 147 × 22px) |
| Thumbnail | Rounded rectangle image placeholder (396 × 198px) |
| Card Height | 273px per card |
| Card Spacing | 60px gap between cards |

**Card Figma Nodes:**
- Card 1: `262:16130`
- Card 2: `262:16138`
- Card 3: `262:16146`

### Mobile-Specific Layout
- **Desktop:** Horizontal row with thumbnail left, headline center, link right
- **Mobile:** Vertical stack — headline on top, "Read release" link below headline, then full-width thumbnail image below
- **Entire card is tappable** — headline, link, and thumbnail all act as one tap target

### Interactions

| Trigger | Behavior |
|---------|----------|
| Tap anywhere on card | Navigates to individual press release at /press/[slug] |
| Scroll in | Cards fade in up with stagger |
| Tap feedback | Brief highlight on entire card |

---

## 7. Section 5: Press Kit

**Figma Node:** `262:16154` (Press Release — second instance, actually Press Kit)
**Y Position:** 2656px
**Dimensions:** 428 × 2291.5px

### Layout
- Section heading + description + download CTA at top
- 2 large asset cards with thumbnails (stacked vertically)
- 3 smaller asset cards without thumbnails (stacked vertically, text-only)

### Header Content

- **Heading:** "Press kit."
  - Style: Large display text (396px wide, 48px tall)
  - **Figma Node:** `262:16158`

- **Description:** "Company materials for media, analyst, partner, and industry use."
  - Style: Body text (396px wide, 56px tall)
  - **Figma Node:** `262:16159`

- **CTA:** "Download the kit"
  - Style: Rounded pill button (340 × 45px), centered
  - Action: Downloads full press kit package (ZIP from Google Drive)
  - **Figma Node:** `262:16162`

### Large Asset Cards (with thumbnails)

| # | Title | Thumbnail | Description | Node |
|---|-------|-----------|-------------|------|
| 1 | Brand guidelines | Typography sample "Neue Haas Grotesk" (352 × 352px) | Correct logo, color, and brand usage. | `262:16166` |
| 2 | Logo files | Nymbus logo mark on light background (351.5 × 351.5px) | Approved Nymbus logos for digital and print use. | `262:16176` |

**Large Card Layout (each ~516px tall):**
- Title with download icon (arrow) aligned right (352px content width, 22px side padding)
- Thumbnail image (352 × 352px, rounded corners)
- Description text below thumbnail (352px wide)

### Small Asset Cards (text-only)

| # | Title | Description | Node |
|---|-------|-------------|------|
| 3 | Company boilerplate | Approved description of Nymbus, its platform, and the institutions it serves. | `262:16198` |
| 4 | Leadership assets | Approved executive headshots and bios, where available. | `262:16205` |
| 5 | Product overview | A concise overview of the platform, capabilities, and operating model. | `262:16212` |

**Small Card Layout (each 212px tall):**
- Title with download icon (arrow) aligned right
- Description text below (352px wide, 56px tall)
- No thumbnail image

### Mobile-Specific Notes
- Desktop 2-column large cards → single column stacked
- Desktop 3-column small cards → single column stacked
- All cards full-width (396px content area)
- No download arrow icons on mobile — cards are tappable without explicit icon affordance

### Interactions

| Trigger | Behavior |
|---------|----------|
| Tap "Download the kit" | Downloads full press kit package |
| Tap any asset card | Downloads or opens specific asset |
| Scroll in | Cards fade in up with stagger |
| Tap feedback | Brief highlight on entire card |

---

## 8. Section 6: Media Inquiries CTA

**Figma Node:** `262:15950` (Gradient), `262:15961` (CTA Footer content)
**Y Position:** 4946–5765px (overlaps slightly with gradient area)
**Content starts at:** 5076px
**Dimensions:** 396 × 516px content area

### Background
- Vibrant pink/magenta organic gradient (matching hero)
- Noise-Animation overlay for grain texture
- Elliptical gradient shapes for depth

### Content Stack (centered)

1. **Eyebrow Badge**
   - **Text:** "Media Inquiries"
   - **Style:** Rounded rectangle pill badge (189 × 46px), centered
   - **Figma Node:** `262:15962`

2. **Heading**
   - **Text:** "CONTACT THE NYMBUS MEDIA TEAM."
   - **Style:** Bold uppercase display text (396 × 180px)
   - **Figma Node:** `262:15965`
   - Note: Figma shows "The Next-Generation Banking Platform" as node name but visual shows "CONTACT THE NYMBUS MEDIA TEAM."

3. **Body Text**
   - **Text:** "For press, media, and communications inquiries, reach the Nymbus media team."
   - **Style:** Body text, centered (354 × 112px)
   - **Figma Node:** `262:15966`

4. **Email Display**
   - **Text:** "media@nymbus.com"
   - **Style:** Displayed as tappable contact reference

5. **CTA Button**
   - **Text:** "Contact media team"
   - **Style:** Rounded pill button (300 × 45px), centered
   - **Action:** Opens mailto:media@nymbus.com
   - **Figma Node:** `262:15970`

### Interactions

| Trigger | Behavior |
|---------|----------|
| Tap "Contact media team" | Opens email client with mailto:media@nymbus.com |
| Tap email address | Opens email client with mailto:media@nymbus.com |
| Scroll in | Content fades in up with ease |
| Background | Ambient noise animation on gradient |
| Tap feedback | Button highlight on touch |

---

## 9. Section 7: Mobile Footer

**Figma Node:** `280:4402` (Mobile Footer Ad instance)
**Y Position:** 5765px
**Dimensions:** 428 × 1075px

Refer to [Mobile Footer User Flow](./Mobile-Footer-User-Flow.md) for full footer specifications.

### Summary
- 2-column stacked navigation grid
- All footer links displayed statically (no accordion)
- Bottom bar with copyright, address, phone, social icons
- Same URLs as desktop footer

---

## 10. Mobile Interactions & Animations

### Global Page Animations

| Animation | Specification | Notes |
|-----------|--------------|-------|
| Scroll reveal | All sections fade in up with ease on scroll | Reduced motion variant: instant reveal |
| Button tap | Specular button style with tap highlight | https://reactbits.dev/components/specular-button |
| Background grain | Noise/grain texture animation on gradient sections | https://reactbits.dev/backgrounds/grainient |
| Hero heading | Blur-dissolve rotating words | Same as desktop but centered |

### Section-Specific Animations

| Section | Animation | Trigger |
|---------|-----------|---------|
| Hero | Rotating headline words blur-dissolve | Page load |
| Hero | CTAs fade in up | Scroll in |
| Media Logo Bar | Logos fade in with stagger | Scroll into viewport |
| Press Releases | Cards fade in up with stagger | Scroll into viewport |
| Press Kit | Cards fade in up with stagger | Scroll into viewport |
| Media Inquiries | Content fades in up | Scroll into viewport |

### Touch Interactions

| Element | Trigger | Mobile Behavior |
|---------|---------|-----------------|
| CTA buttons | Tap | Specular highlight + action |
| Press release cards | Tap | Brief highlight → navigate to /press/[slug] (entire card tappable) |
| Press kit cards | Tap | Brief highlight → download asset (no arrow icon) |
| Media logos | Tap | Brief highlight → open external link |
| Email address | Tap | Opens mailto: handler |
| "Read release" links | Tap | Navigate to press release detail |
| "Download the kit" | Tap | Download press kit ZIP |
| Logo row | Auto-scroll | Horizontal marquee, pauses on touch |

### Performance Considerations

| Aspect | Mobile Approach |
|--------|-----------------|
| Gradient backgrounds | Pre-rendered where possible, reduce blur complexity |
| Noise animation | Reduce frame rate on low-power devices |
| Image loading | Lazy load thumbnails below fold |
| Scroll animations | Use `will-change` sparingly, prefer `transform` and `opacity` |

---

## 11. User Journey Scenarios

### Scenario MP1: Download Press Kit from Hero

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on /press on mobile |
| **WHEN** | User taps "Download press kit" button in hero |
| **THEN** | Press kit ZIP downloads via browser |

**Acceptance Criteria:**
1. Tap feedback shown (specular highlight)
2. Download initiated (browser download prompt or direct download)
3. File: press-kit.zip from Google Drive

---

### Scenario MP2: Contact Media Team from Hero

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on /press on mobile |
| **WHEN** | User taps "Contact media team" button in hero |
| **THEN** | Page scrolls to Media Inquiries section OR email client opens |

**Acceptance Criteria:**
1. Smooth scroll to Media Inquiries CTA section
2. Section visible in viewport after scroll
3. Alternative: opens mailto:media@nymbus.com directly

---

### Scenario MP3: Read a Press Release

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Press Releases section on mobile |
| **WHEN** | User taps "Read release" link or card area |
| **THEN** | User navigates to /press/[slug] |

**Acceptance Criteria:**
1. Tap feedback on card/link
2. Navigation to press release detail page
3. Detail page renders full MDX content
4. Video embed shown if press release has videoType/videoId
5. "Back to Press" link available on detail page

---

### Scenario MP4: Media Logo Auto-Scroll and Tap

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the Media Logo Bar section |
| **WHEN** | Logos auto-scroll and user taps a logo |
| **THEN** | Auto-scroll pauses, external article opens in new tab |

**Acceptance Criteria:**
1. Logos auto-scroll horizontally (marquee-style)
2. Touch anywhere on logo row pauses scroll
3. Tap on specific logo opens external URL in new browser tab
4. `rel="noopener noreferrer"` on external links
5. Auto-scroll resumes after user interaction ends

---

### Scenario MP5: Tap Media Logo

| Step | Detail |
|------|--------|
| **GIVEN** | User sees a media outlet logo in the logo bar |
| **WHEN** | User taps a logo |
| **THEN** | External article opens in new tab |

**Acceptance Criteria:**
1. Tap feedback (brief highlight)
2. External URL opens in new browser tab
3. `rel="noopener noreferrer"` on external links
4. User can return to press page via browser back

---

### Scenario MP6: Download Individual Press Kit Asset

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Press Kit section on mobile |
| **WHEN** | User taps "Brand guidelines" card |
| **THEN** | Brand guidelines PDF/document downloads |

**Acceptance Criteria:**
1. Tap feedback on entire card area
2. Download initiated for specific asset
3. Works for all 5 asset cards (Brand guidelines, Logo files, Company boilerplate, Leadership assets, Product overview)

---

### Scenario MP7: Download Full Press Kit

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Press Kit section header |
| **WHEN** | User taps "Download the kit" button |
| **THEN** | Full press kit ZIP downloads |

**Acceptance Criteria:**
1. Specular button tap feedback
2. Downloads complete press kit package
3. Same file as hero "Download press kit" CTA

---

### Scenario MP8: Contact Media via Email

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to Media Inquiries CTA section |
| **WHEN** | User taps "Contact media team" button or email address |
| **THEN** | Email client opens with media@nymbus.com |

**Acceptance Criteria:**
1. `mailto:media@nymbus.com` triggers native email client
2. iOS: Mail app opens (or choice if multiple email apps)
3. Android: Email intent chooser appears
4. Both button and email text are tappable

---

### Scenario MP9: Navigate via Mobile Footer

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to bottom of Press page |
| **WHEN** | User taps any footer link |
| **THEN** | User navigates to corresponding page/section |

**Acceptance Criteria:**
1. See [Mobile Footer User Flow](./Mobile-Footer-User-Flow.md) for full footer scenarios
2. All footer links functional
3. Phone number opens dialer
4. Address opens maps app

---

## 12. Accessibility & Touch Guidelines

### Touch Targets

| Element | Minimum Size | Actual Size | Status |
|---------|--------------|-------------|--------|
| Hero CTA buttons | 44 × 44px | 300 × 45px | ✓ Compliant |
| Press release cards | 44 × 44px | 396 × 273px (full card) | ✓ Compliant |
| "Read release" link | 44 × 44px | 147 × 22px (needs padding) | ⚠ Add tap padding |
| Press kit cards (large) | 44 × 44px | 396 × 516px (full card) | ✓ Compliant |
| Press kit cards (small) | 44 × 44px | 396 × 212px (full card) | ✓ Compliant |
| "Download the kit" button | 44 × 44px | 340 × 45px | ✓ Compliant |
| Media logos | 44 × 44px | 176.5 × 81px | ✓ Compliant |
| Media CTA button | 44 × 44px | 300 × 45px | ✓ Compliant |
| Email link | 44 × 44px | Needs 44px min-height | ⚠ Add tap padding |

### ARIA & Semantics

| Component | Implementation |
|-----------|----------------|
| Page | `<main role="main">` |
| Hero section | `<section aria-label="Press page hero">` |
| Logo bar | `<section aria-label="Nymbus in the media">` |
| Logo scroll | `role="list"` with `aria-label="Media publications"` |
| Press releases | `<section aria-label="Press releases">` |
| Press release list | `<ul>` or `role="list"` |
| Press kit | `<section aria-label="Press kit downloads">` |
| Asset cards | `<a>` wrapping card content with `aria-label="Download [asset name]"` |
| CTA section | `<section aria-label="Media inquiries">` |
| Email link | `<a href="mailto:media@nymbus.com" aria-label="Email media team at media@nymbus.com">` |

### Reduced Motion

| Animation | Reduced Motion Behavior |
|-----------|------------------------|
| Scroll reveal fade-in | Instant display (no animation) |
| Hero rotating text | Static text (show first variant) |
| Background noise | Static grain texture (no animation) |
| Staggered card reveal | All cards appear simultaneously |

### Color Contrast

| Element | Foreground | Background | Ratio | Status |
|---------|-----------|------------|-------|--------|
| Hero heading (white on gradient) | #FFFFFF | Pink/magenta gradient | Verify ≥ 4.5:1 | ⚠ Check gradient contrast |
| Body text on white | Dark grey/black | #FFFFFF | ≥ 4.5:1 | ✓ Assumed |
| CTA text (white on dark button) | #FFFFFF | #0A0A0A | ≥ 4.5:1 | ✓ Compliant |
| Media CTA heading (white on gradient) | #FFFFFF | Pink/magenta gradient | Verify ≥ 4.5:1 | ⚠ Check gradient contrast |

---

## 13. Content Source & Data

### Press Releases Content Source

Press releases are managed as MDX files. See [`/content/press/README.md`](/content/press/README.md) for full documentation.

**Content Location:** `/content/press/releases/*.mdx`

**Frontmatter Schema:**
```yaml
---
title: "Press Release Title"
slug: press-release-slug
date: 2025-09-10
subtitle: "Optional subtitle"
heroImage: ./images/PR-91.jpg
excerpt: "Brief description..."
tags:
  - partnership
  - customer-news
videoType: vimeo
videoId: "1114058429"
---
```

**URL Pattern:** `/press/[slug]`

**Mobile List Behavior:**
- Fetch all MDX files from `/content/press/releases/`
- Sort by date descending (newest first)
- Display 3 most recent on initial load
- Pagination for additional releases (fewer per page than desktop — e.g. 6 per page)
- Each card shows: title, "Read release →" link, thumbnail (`heroImage`)
- Entire card is tappable (not just the link)

**Content Stats:**
- Total press releases: 81
- Date range: 2019–2025
- Images: `/content/press/images/PR-*.jpg`

---

## 14. Open Questions (All Resolved)

1. ~~**Hero subtitle discrepancy**~~ — ✅ RESOLVED: Correct copy is "Press releases, approved brand assets, company information, and media resources, in one place." The Figma node label "Powered by the industry's first secure MCP server." is incorrect.

2. ~~**Logo bar scroll behavior**~~ — ✅ RESOLVED: Horizontal auto-scroll (marquee-style). Pauses on touch. Resumes on release. Logo tap opens external URL in new tab.

3. ~~**Press release pagination on mobile**~~ — ✅ RESOLVED: Fewer per page on mobile than desktop (desktop = 10 per page).

4. ~~**Press kit card tap behavior**~~ — ✅ RESOLVED: Download arrow icons removed on mobile. Cards are tappable without explicit icon affordance. Tap initiates download.

5. ~~**"Read release" text vs. full card tap**~~ — ✅ RESOLVED: Entire card (headline + thumbnail) is tappable, navigates to /press/[slug].

---

## User Journey Flow Diagram

```
[User arrives on /press (mobile)]
        |
        v
[Mobile Header Nav — hamburger menu + logo]
        |
        v
[Hero — "NEWS AND RESOURCES FROM NYMBUS."]
        |
        +---> [Taps "Download press kit"] ---> [Downloads ZIP]
        +---> [Taps "Contact media team"] ---> [Scrolls to CTA / opens mailto]
        |
        v (scrolls)
[Media Logo Bar — "NYMBUS IN THE MEDIA"]
        |
        +---> [Swipes left/right] ---> [Scrolls logo row]
        +---> [Taps logo] ---> [Opens external article in new tab]
        |
        v (scrolls)
[Press Releases — "Latest company news."]
        |
        +---> [Taps press release card] ---> [/press/[slug] — detail page]
        +---> [Pagination / "View more"] ---> [Additional releases]
        |
        v (scrolls)
[Press Kit — "Press kit."]
        |
        +---> [Taps "Download the kit"] ---> [Downloads full ZIP]
        +---> [Taps "Brand guidelines"] ---> [Downloads brand guide]
        +---> [Taps "Logo files"] ---> [Downloads logo package]
        +---> [Taps "Company boilerplate"] ---> [Downloads boilerplate]
        +---> [Taps "Leadership assets"] ---> [Downloads headshots/bios]
        +---> [Taps "Product overview"] ---> [Downloads product overview]
        |
        v (scrolls)
[Media Inquiries CTA — "CONTACT THE NYMBUS MEDIA TEAM."]
        |
        +---> [Taps "Contact media team"] ---> [Opens mailto:media@nymbus.com]
        +---> [Taps email address] ---> [Opens mailto:media@nymbus.com]
        |
        v (scrolls)
[Mobile Footer — navigation + contact info]
        |
        +---> [See Mobile Footer User Flow for full scenarios]
```

---

## Primary Conversion Paths (Mobile)

| Path | Entry Point | Destination | Intent |
|------|-------------|-------------|--------|
| Press Kit Download | Hero CTA / Press Kit button | ZIP download | Get brand assets |
| Media Contact | Hero CTA / Media CTA / Email | mailto:media@nymbus.com | Reach media team |
| Press Release | Press release card tap | /press/[slug] | Read news |
| Brand Guidelines | Press Kit large card | PDF/document download | Correct branding |
| Logo Files | Press Kit large card | Logo package download | Get logos |
| Publication Link | Media Logo Bar tap | External article | Read coverage |
| Phone Contact | Footer phone number | tel: link | Call Nymbus |

---

## Comparison: Desktop vs. Mobile

| Aspect | Desktop (1512px) | Mobile (428px) |
|--------|-------------------|----------------|
| Total height | 4978px | 6840px (+37% taller) |
| Hero CTAs | Side-by-side | Stacked vertically |
| Press release layout | Horizontal row (thumb + headline + link) | Vertical card (headline → link → thumb) |
| Press kit large cards | 2-column grid | Single column |
| Press kit small cards | 3-column grid | Single column |
| Media logos | Fixed row | Horizontal scroll |
| Navigation | Desktop mega-menu | Hamburger overlay |
| Footer | 5-column grid | 2-column stacked |
| Animations | Full complexity | Same (with reduced-motion fallback) |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 12, 2026 | Initial mobile press page document | Kiro |
