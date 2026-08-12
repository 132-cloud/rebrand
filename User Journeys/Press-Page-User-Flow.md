# Press Page User Flow & Journey

**Source:** Figma Dev Hand-off — Press (Node 17:9134)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=17-9134  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Global Animations](#2-global-animations)
3. [Section 1: Hero](#3-section-1-hero)
4. [Section 2: Media Logo Bar](#4-section-2-media-logo-bar)
5. [Section 3: Press Releases](#5-section-3-press-releases)
6. [Section 4: Press Kit](#6-section-4-press-kit)
7. [Section 5: Media Inquiries CTA](#7-section-5-media-inquiries-cta)
8. [Section 6: Footer](#8-section-6-footer)

---

## 1. Page Overview & Scroll Journey

The Press page is a single continuous scroll page (1512px wide, ~4978px tall) serving as the centralized media hub for Nymbus. It provides journalists, analysts, and partners with press releases, brand assets, and media contact information.

**Target Audience:** Journalists, media contacts, analysts, partners, and anyone seeking official Nymbus company information and assets.

**Scroll Order (top to bottom):**

| # | Section | Y Position | Purpose |
|---|---------|-----------|---------|
| 1 | Navigation (dark) | 0 | Global nav, persistent |
| 2 | Hero | 0–678 | Page introduction + CTAs |
| 3 | Media Logo Bar | 678–1029 | Publications that cover Nymbus |
| 4 | Press Releases | 1010–2073 | Latest company news |
| 5 | Press Kit | 2073–3659 | Downloadable brand assets |
| 6 | Media Inquiries CTA | 3654–4331 | Contact the media team |
| 7 | Footer | 4331–4978 | Navigation + legal |

---

## 2. Global Animations

These apply across the entire Press page (consistent with site-wide patterns):

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Scroll reveal | All components fade in up with ease on scroll | Global pattern |
| Button hover | Arrow grows with ease on hover | Global pattern |
| Button style | Specular button style (black) | https://reactbits.dev/components/specular-button |
| Background grain | Noise/grain texture animation on gradient sections | https://reactbits.dev/backgrounds/grainient |
| Rotating text | Blur-in rotating words in hero heading | Per-section spec below |

---

## 3. Section 1: Hero

**Figma Node:** `17:9136` (Hero), `17:9153` (content frame)

### Layout
- Full-width gradient background (vibrant pink/magenta to white with organic elliptical shapes)
- Noise animation overlay on gradient
- Vertical guide lines (decorative)
- Dark navigation bar overlaid at top
- Left-aligned content container (1005px wide)

### Background Elements
- Gradient: Pink/magenta/cream organic radial gradients blending into white
- Noise-Animation layer: subtle grain texture overlay
- Guide lines: thin vertical rules for visual structure

### Content Stack (top to bottom)

1. **Eyebrow Badge**
   - Text: "Press Room"
   - Style: Rounded rectangle pill badge (dark background, light text)

2. **H1 Heading**
   - Text: "NEWS AND RESOURCES FROM NYMBUS."
   - Style: Bold uppercase display text
   - Animation: Blur-dissolve rotating effect on select words ("RESOURCES", "NYMBUS")

3. **Subtitle**
   - Text: "Press releases, approved brand assets, company information, and media resources, in one place."

4. **CTA Buttons (2 side by side)**
   - Button 1: "Download press kit" → downloads press kit / scrolls to Press Kit section
   - Button 2: "Contact media team" → scrolls to Media Inquiries section or → /contact/

### Interactions & Animations

| Trigger | Behavior |
|---------|----------|
| Page load | Rotating headline words blur-dissolve through variants |
| Scroll in | Content fades in up with ease |
| CTA hover | Arrow grows with ease, specular button highlight |
| Background | Ambient gradient (static or slow organic drift) + noise animation |

---

## 4. Section 2: Media Logo Bar

**Figma Node:** `17:9162` (LogoBarGuide)

### Layout
- Centered label above
- Row of 5 publication/media outlet logo cards

### Content
- **Label:** "NYMBUS IN THE MEDIA"
- **Logo Cards:** 5 media outlet logos displayed in rounded rectangle cards (220×101px each)
  - Logo placeholders (to be populated with actual media outlet logos)

### Interactions & Animations

| Trigger | Behavior |
|---------|----------|
| Scroll in | Cards fade in up with stagger |
| Logo click | Opens corresponding article/publication (external link) |

---

## 5. Section 3: Press Releases

**Figma Node:** `17:9268` (Container:margin)

### Layout
- Eyebrow badge + heading + description
- List of press release entries separated by horizontal rules
- Each entry: thumbnail + headline + "Read release" link

### Header Content
- **Eyebrow Badge:** "Press Releases" (pill style)
- **Heading:** "Latest company news."
- **Subtext:** "Announcements from Nymbus, including platform updates, customer news, partnerships, leadership, and company milestones."
- Heading animation: Blur-dissolve on "news" word

### Press Release List (3 entries shown)

| # | Thumbnail | Headline | CTA |
|---|-----------|----------|-----|
| 1 | Image placeholder (300×150) | Press release headline placeholder | "Read release →" |
| 2 | Image placeholder (300×150) | Press release headline placeholder | "Read release →" |
| 3 | Image placeholder (300×150) | Press release headline placeholder | "Read release →" |

### Entry Layout (each row)
- Left: Thumbnail image (rounded rectangle, 300×150px)
- Center: Headline text
- Right: "Read release" link with arrow icon
- Separated by horizontal rule lines

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Entries fade in up with stagger |
| "Read release" hover | Arrow animates, text underline |
| "Read release" click | Navigates to individual press release page |
| Row hover | Subtle highlight or lift on entire row |

---

## 6. Section 4: Press Kit

**Figma Node:** `17:9203` (Frame 1533216842)

### Layout
- Section heading + description + download CTA
- 2-column grid of large asset cards (top row)
- 3-column grid of smaller asset cards (bottom row)
- Bordered by vertical guide lines

### Header Content
- **Heading:** "Press kit."
- **Subtext:** "Company materials for media, analyst, partner, and industry use."
- **CTA:** "Download the kit" → downloads ZIP/package of all press assets

### Asset Cards — Top Row (2 large cards, 518×625px each)

| Card | Title | Visual | Description |
|------|-------|--------|-------------|
| 1 | Brand guidelines | Typography sample showing "Neue Haas Grotesk" in rounded frame | Correct logo, color, and brand usage. |
| 2 | Logo files | Nymbus logo mark (dark "N" shape) on light background | Approved Nymbus logos for digital and print use. |

### Asset Cards — Bottom Row (3 smaller cards, 332×340px each)

| Card | Title | Description |
|------|-------|-------------|
| 1 | Company boilerplate | Approved description of Nymbus, its platform, and the institutions it serves. |
| 2 | Leadership assets | Approved executive headshots and bios, where available. |
| 3 | Product overview | A concise overview of the platform, capabilities, and operating model. |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Cards fade in up with stagger |
| Card hover | Subtle lift/shadow, border highlight |
| Card click | Downloads or opens the specific asset |
| "Download the kit" hover | Arrow grows with ease |
| "Download the kit" click | Downloads full press kit (ZIP or PDF package) |

---

## 7. Section 5: Media Inquiries CTA

**Figma Node:** `17:9181` (Gradient), `17:9192` (Container)

### Layout
- Full-width section with vibrant gradient background (matching hero — pink/magenta organic shapes)
- Noise animation overlay
- Centered content

### Background
- Same gradient treatment as hero (pink/magenta/cream elliptical shapes)
- Noise-Animation layer for texture

### Content Stack (top to bottom)

1. **Eyebrow Badge**
   - Text: "Media Inquiries"
   - Style: Rounded rectangle pill badge

2. **Heading**
   - Text: "CONTACT THE NYMBUS MEDIA TEAM."
   - Style: Bold uppercase display text

3. **Body Text**
   - Text: "For press, media, and communications inquiries, reach the Nymbus media team."

4. **Email**
   - Text: "media@nymbus.com" (displayed as contact reference)

5. **CTA Button**
   - Text: "Contact media team"
   - Style: Rounded pill button (dark)
   - Link: → /contact/ or mailto:media@nymbus.com

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Content fades in up with ease |
| CTA hover | Button highlight with ease |
| CTA click | Opens contact form or email client |
| Email link | Opens mailto: handler |
| Background | Ambient noise animation on gradient |

---

## 8. Section 6: Footer

**Figma Node:** `17:9135` (Footer instance)

### Layout
- Standard site-wide footer component (shared with all pages)
- Full-width, dark background
- Multi-column navigation links

### Footer Columns (from screenshot)

| Column | Links |
|--------|-------|
| Platform | Core Processing, Digital Banking, Account Opening, Connect, Insights, Nymbus MCP, Fraud Intelligence, Lends, Engine |
| Managed Services | Contact Center, Onboarding, Servicing, Compliance, Fraud, Back Office, Business Banking, Labs |
| Solutions | Core replacement, De novo/start, Vertical/niche branches, New lines of business, SMB/community, Private/relationship banking, Syndications, Neobanks/fintechs, Business banking, Commercial banking |
| Resources | Insights, AI |
| Company | About Nymbus, Press, Contact us, Privacy/policy |

### Footer Bottom
- Copyright: "© 2025 NYMBUS. All rights reserved."
- Address + phone number
- Social icons (LinkedIn, Twitter/X)

---

## User Journey Flow Diagram

```
[User arrives on Press page]
        |
        v
[Hero - "News and Resources from Nymbus"]
        |
        +---> [Clicks "Download press kit"] ---> [Downloads press kit / scrolls to Press Kit section]
        +---> [Clicks "Contact media team"] ---> [Scrolls to Media Inquiries / navigates to contact]
        |
        v (scrolls)
[Media Logo Bar - "Nymbus in the Media"]
        |
        +---> [Clicks publication logo] ---> [Opens external article]
        |
        v (scrolls)
[Press Releases - "Latest company news"]
        |
        +---> [Clicks "Read release" on any entry] ---> [Opens individual press release]
        |
        v (scrolls)
[Press Kit - Downloadable assets]
        |
        +---> [Clicks "Download the kit"] ---> [Downloads full press kit package]
        +---> [Clicks "Brand guidelines"] ---> [Downloads/opens brand guide]
        +---> [Clicks "Logo files"] ---> [Downloads logo package]
        +---> [Clicks "Company boilerplate"] ---> [Downloads boilerplate text]
        +---> [Clicks "Leadership assets"] ---> [Downloads headshots/bios]
        +---> [Clicks "Product overview"] ---> [Downloads product overview]
        |
        v (scrolls)
[Media Inquiries CTA - "Contact the Nymbus Media Team"]
        |
        +---> [Clicks "Contact media team"] ---> [Opens contact form / mailto]
        +---> [Clicks email address] ---> [Opens email client]
        |
        v
[Footer - Standard navigation]
```

---

## Primary Conversion Paths

| Path | Entry Point | Destination | Intent |
|------|-------------|-------------|--------|
| Press Kit Download | Hero CTA / Press Kit section | ZIP/PDF download | Get brand assets |
| Media Contact | Hero CTA / Media Inquiries CTA | /contact/ or mailto | Reach media team |
| Press Release | Press Releases list | Individual release page | Read news |
| Brand Guidelines | Press Kit card | Brand guide PDF/page | Use correct branding |
| Logo Files | Press Kit card | Logo download package | Get approved logos |
| Publication Link | Media Logo Bar | External article | Read media coverage |

---

## Content Management Notes

### Press Releases Content Source

Press releases are managed as MDX files in the `/content/press/` directory. See [`/content/press/README.md`](/content/press/README.md) for full migration documentation.

**Content Location:** `/content/press/releases/*.mdx`

**Frontmatter Schema:**
```yaml
---
title: "Press Release Title"
slug: press-release-slug
date: 2025-09-10
subtitle: "Optional subtitle"              # Optional
heroImage: ./images/PR-91.jpg              # Optional
excerpt: "Brief description..."
tags:                                      # Optional
  - partnership
  - customer-news
videoType: vimeo                           # Optional - vimeo | youtube
videoId: "1114058429"                      # Optional
---
```

**URL Pattern:** `/press/[slug]`

**List Page Behavior:**
- Fetch all MDX files from `/content/press/releases/`
- Sort by date descending (newest first)
- Display with pagination (10 per page)
- Each card shows: thumbnail (`heroImage`), title, "Read release →" link

**Detail Page Behavior:**
- Render full MDX body content
- Show video embed above body if `videoType` and `videoId` present
- Display date below title
- Include "Back to Press" navigation

**Content Stats:**
- Total press releases: 79
- Date range: 2019–2025
- Images: `/content/press/images/PR-*.jpg`

---

### Other Content Notes

- **Media Logos:** The 5 logo slots should display actual media outlet logos (publications that have covered Nymbus).
- **Press Kit Assets:** Each card links to a downloadable file. The "Download the kit" button likely provides a bundled ZIP of all assets hosted in Google Drive.

---

## Open Questions

1. ~~**Press release pagination**~~ — ✅ RESOLVED: Add pagination (not just "View all"). List grows with paginated navigation.
2. ~~**Media logo links**~~ — ✅ RESOLVED: Link to specific articles about Nymbus (links to be provided).
3. ~~**Press kit delivery**~~ — ✅ RESOLVED: Single ZIP download hosted in Google Drive.
4. ~~**Hero CTA behavior**~~ — ✅ RESOLVED: "Download press kit" triggers immediate download (ZIP from Google Drive).
5. ~~**Contact method**~~ — ✅ RESOLVED: "Contact media team" opens mailto (email client).
