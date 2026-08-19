# Mobile Privacy Policy User Flow & Journey

**Source:** Figma Dev Hand-off — Privacy Policy (Node 262:16394)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=262-16394
**Last Updated:** August 12, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Section 1: Mobile Header Navigation](#3-section-1-mobile-header-navigation)
4. [Section 2: Hero / Page Header](#4-section-2-hero--page-header)
5. [Section 3: Privacy Policy Content](#5-section-3-privacy-policy-content)
6. [Section 4: Mobile Footer](#6-section-4-mobile-footer)
7. [Mobile Interactions & Animations](#7-mobile-interactions--animations)
8. [Accessibility & Touch Guidelines](#8-accessibility--touch-guidelines)
9. [Open Questions](#9-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Privacy Policy page is a purely informational/legal page. It presents the full policy text in a single-column, long-form reading layout beneath a branded gradient hero. There are no interactive components beyond navigation, inline links, and the footer.

**Total Dimensions:** 428 × 3368px
**URL:** /privacy-policy/

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| Left-aligned hero title | Centered hero title | Centered layout on 428px viewport |
| 1140px centered content container | 396px full-width (16px margins) | Single-column mobile reading layout |
| Decorative vertical accent lines | Absent on mobile | No room at 428px |
| Desktop footer (5-column grid) | Mobile Footer Ad (2-column stacked) | Space constraints |
| Desktop mega-menu navigation | Hamburger menu overlay | Standard mobile pattern |

### Design Decisions

- **Pure reading page** — No CTAs, no cards, no interactive sections beyond links
- **Full-width text** — Body text spans 356px (396px container minus 40px internal padding)
- **Hero is decorative** — Gradient background with blurred title; sets tone, not conversion
- **Same full policy text** — All content from desktop is present on mobile, no truncation

---

## 2. Page Structure & Scroll Journey

| # | Section | Y Position | Height | Purpose |
|---|---------|-----------|--------|---------|
| 1 | Mobile Header Nav | 0 | 87px | Navigation bar with hamburger menu |
| 2 | Hero / Page Header | 0–460 | 460px | Gradient background + "PRIVACY POLICY" title |
| 3 | Privacy Policy Content | 520–2209 | 1689px | Full policy text body |
| 4 | Mobile Footer | 2293–3368 | 1075px | Navigation + legal |

**Total page height:** 3368px (vs. desktop ~2044px — 65% taller due to text reflow on narrower column)

---

## 3. Section 1: Mobile Header Navigation

**Figma Node:** `302:8438` (Nav Mobile instance)
**Dimensions:** 428 × 87px

### Layout
- Full-width, light/transparent header bar over gradient
- Nymbus logo (left)
- Hamburger menu icon (right)
- Refer to [Mobile Header Navigation User Flow](./Mobile-Header-Navigation-User-Flow.md) for full menu behavior

### Interactions

| Trigger | Behavior |
|---------|----------|
| Tap hamburger icon | Opens full-screen menu overlay |
| Tap logo | Navigates to homepage (/) |

---

## 4. Section 2: Hero / Page Header

**Figma Node:** `262:16395` (Section) → `262:16396` (BG)
**Dimensions:** 428 × 460px

### Background

- **Figma Node:** `262:16397` (Gradient)
- Pink/magenta/coral organic radial gradient — same treatment as other page heroes
- Noise-Animation overlay (grain texture, `262:16409`)
- Elliptical gradient shapes for depth (Ellipse 259–264, 14, 17, 18)
- Gradient is shorter on mobile (460px) vs. desktop

### Hero Content

**Figma Node:** `262:16410` (Heading 1)
**Position:** x:17, y:175
**Dimensions:** 395 × 136px

1. **H1 Heading**
   - **Text:** "PRIVACY POLICY"
   - **Style:** Bold uppercase display text, centered
   - **Font:** Neue Haas Grotesk Display Pro, 75 Bold, 56px, 60px line-height
   - **Effect:** Foreground blur (radius: 5) — soft focus on the title text
   - **Color:** `#171216` (dark, over light gradient)
   - **Figma Node:** `262:16411`

### Mobile-Specific Notes
- Title is centered (desktop is left-aligned)
- Hero is 460px tall (desktop varies)
- Blur effect on title text is intentional — matches design spec
- No subtitle or eyebrow badge — title only

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Gradient background animates subtly (grainient) |
| Scroll in | Title fades in up with ease |

---

## 5. Section 3: Privacy Policy Content

**Figma Node:** `262:16412` (Container)
**Position:** x:16, y:520
**Dimensions:** 396 × 1689px
**Internal padding:** 20px horizontal (text area = 356px wide)

### Layout

Single-column typographic layout. All content stacks vertically with consistent spacing between elements (20px gap between paragraphs and headings).

### Typography

| Element | Font | Size | Weight | Color | Line Height |
|---------|------|------|--------|-------|-------------|
| H1 (hero) | Neue Haas Grotesk Display Pro | 56px | 75 Bold (700) | `#171216` | 60px |
| H2 Headings | Neue Haas Grotesk Display Pro | 24px | 75 Bold (700) | `#171216` | 28px |
| Body paragraphs | Neue Haas Grotesk Display Pro | 16px | 55 Roman (450) | `#42526e` | 28px |
| Bold emphasis (body) | Neue Haas Grotesk Display Pro | 16px | 75 Bold (700) | `#171216` | 28px |
| Legal consent (all-caps) | Neue Haas Grotesk Display Pro | 16px | 75 Bold (700) | `#253858` | 28px |
| Inline links | Neue Haas Grotesk Display Pro | 16px | 55 Roman (450) | `#697cb2` | 28px |
| DPO label | Neue Haas Grotesk Display Pro | 16px | 75 Bold (700) | `#171216` | 28px |
| DPO email | Neue Haas Grotesk Display Pro | 16px | 55 Roman (450) | `#697cb2` | 28px |

---

### Content — Full Policy Text

#### Introduction Paragraph

**Figma Node:** `262:16413` / `262:16414`

> "This Privacy Policy explains how NYMBUS uses your name and email information and how NYMBUS tracks visits to its website."

---

#### Section: Your Information

**H2 Node:** `262:16415` / `262:16416`
**Body Node:** `262:16417` / `262:16418`

**Heading:** "Your Information"

**Body:**

> "When you enter www.nymbus.com you have the opportunity to contact us by entering your name and email address. You may also sign up to receive our newsletters and other communications. We only use your information for the purpose of sending you emails on relevant topics for informational or marketing purposes. You may opt out of these communications at any time by following the instructions contained in our emails. **We will never share your information with any third party at any time.**"

Note: Final sentence ("We will never share...") is bold weight (`#171216`) for legal emphasis.

---

#### Section: Tracking Visits to Our Website

**H2 Node:** `262:16419` / `262:16420`

**Heading:** "Tracking Visits to Our Website"

**Paragraph 1** — `262:16421` / `262:16422`

> "To better understand activity on its website, NYMBUS uses Google Analytics, a service that uses 'cookies' to track anonymous information regarding your activities on www.nymbus.com. This includes information about your visit, including your device type, traffic source and geographic area, as well as pages visited and links clicked. Some behavioral data may be provided by Google 'cookies' that show your gender and age range. This data is used to better understand how visitors access www.nymbus.com and provide a better overall user experience."

**Paragraph 2** — `262:16423` / `262:16424`

> "NYMBUS also uses pixels on Twitter, LinkedIn and the Adaptive network to track activity on www.nymbus.com, potentially including pages visited and links clicked. This data is used to track the effectiveness of our advertisements, as well as to build remarketing audiences based on actions taken on www.nymbus.com."

**Paragraph 3 (with inline links)** — `262:16425` / `262:16426`

> "NYMBUS takes your privacy seriously and ensures that no personally identifying information is stored in the 'cookies'. To opt out of Google's cookies you can [click here]. To opt out of third party cookies you can [click here]."

Links: Both "click here" instances are inline links styled in `#697cb2` (blue) with underline.

**Paragraph 4 (legal consent, bold, all-caps)** — `262:16427` / `262:16428`

> "BY VISITING WWW.NYMBUS.COM, YOU ACKNOWLEDGE, UNDERSTAND AND HEREBY AGREE THAT YOU ARE GIVING NYMBUS YOUR CONSENT TO TRACK YOUR ACTIVITIES THROUGH USE OF THESE TRACKING TECHNOLOGIES."

Style: Bold (75 Bold), `#253858`, standard 16px body size. Serves as legal acknowledgment statement.

**Paragraph 5 (DPO contact)** — `262:16429` / `262:16430`

> **Data Protection Officer (DPO):**
> compliance@nymbus.com

"Data Protection Officer (DPO):" is bold (`#171216`). Email address is a `mailto:` link in `#697cb2`.

---

### Content Spacing

| Gap | Value |
|-----|-------|
| Between container items | 20px (flex gap) |
| Heading 2 top padding | 32px |
| Paragraph top padding | 16–24px |
| DPO section top padding | 24px |

---

### Inline Links

| Link Text | Destination | Style |
|-----------|-------------|-------|
| "click here" (Google opt-out) | https://tools.google.com/dlpage/gaoptout | `#697cb2`, underline |
| "click here" (third-party opt-out) | Third-party cookie opt-out page (URL TBD) | `#697cb2`, underline |
| compliance@nymbus.com | mailto:compliance@nymbus.com | `#697cb2`, no underline |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Content fades in up with ease (global pattern) |
| Tap "click here" (Google) | Opens Google Analytics opt-out in new tab |
| Tap "click here" (third-party) | Opens third-party opt-out in new tab |
| Tap compliance@nymbus.com | Opens native email client with pre-filled address |
| Tap www.nymbus.com mentions | No link — plain text, not tappable |

---

## 6. Section 4: Mobile Footer

**Figma Node:** `280:4323` (Mobile Footer Ad instance)
**Y Position:** 2293px
**Dimensions:** 428 × 1075px

Refer to [Mobile Footer User Flow](./Mobile-Footer-User-Flow.md) for full footer specifications.

### Summary
- 2-column stacked navigation grid
- All footer links displayed statically (no accordion)
- Bottom bar: copyright "© 2026 NYMBUS, All rights reserved.", address, phone, social icons (LinkedIn, X/Twitter, Medium)

---

## 7. Mobile Interactions & Animations

### Global Animations

| Animation | Specification | Reference |
|-----------|--------------|-----------|
| Background gradient | Grain texture on animated gradient | https://reactbits.dev/backgrounds/grainient |
| Scroll reveal | Content fades in up with ease | Global pattern |
| Hero title | Blur effect (radius 5) — static visual treatment, not animated | Figma spec |

### Link Tap Behavior

| Element | Trigger | Behavior |
|---------|---------|----------|
| "click here" (Google) | Tap | Opens external URL in new tab |
| "click here" (third-party) | Tap | Opens external URL in new tab |
| compliance@nymbus.com | Tap | Opens iOS Mail / Android email chooser |
| Footer links | Tap | Navigate to internal page |
| Phone (footer) | Tap | Opens phone dialer |
| Social icons (footer) | Tap | Opens app or new tab |

### Performance Notes

| Aspect | Mobile Approach |
|--------|-----------------|
| Gradient background | Pre-rendered where possible |
| Noise animation | Reduced frame rate on low-power devices |
| Long page scroll | Lazy-load footer content |
| Text reflow | All text is native — no images of text |

---

## 8. Accessibility & Touch Guidelines

### Touch Targets

| Element | Minimum Size | Actual Size | Status |
|---------|--------------|-------------|--------|
| "click here" links | 44 × 44px | 16px inline text, needs padding | ⚠ Add tap padding (min-height: 44px) |
| compliance@nymbus.com | 44 × 44px | 16px inline text, needs padding | ⚠ Add tap padding |
| Hamburger menu | 44 × 44px | 32px visual, needs padding | ⚠ Add invisible padding |
| Footer links | 44 × 44px | 30px spacing — adequate with padding | ✓ Adequate |

### ARIA & Semantics

| Component | Implementation |
|-----------|----------------|
| Page | `<main role="main">` |
| Hero section | `<header>` or `<section aria-label="Privacy Policy header">` |
| H1 | `<h1>` — "PRIVACY POLICY" |
| Content section | `<section aria-label="Privacy policy content">` |
| H2 headings | `<h2>` — "Your Information", "Tracking Visits to Our Website" |
| Body paragraphs | `<p>` elements |
| Bold legal emphasis | `<strong>` — "We will never share your information..." |
| Consent statement | `<p>` with `<strong>` — all-caps legal paragraph |
| Inline links | `<a href="..." target="_blank" rel="noopener noreferrer" aria-label="Opt out of Google Analytics (opens in new tab)">` |
| Email link | `<a href="mailto:compliance@nymbus.com">` |
| Footer | `<footer role="contentinfo">` |

### Reduced Motion

| Animation | Reduced Motion Behavior |
|-----------|------------------------|
| Gradient background | Static gradient |
| Scroll fade-in | Instant display |
| Noise animation | Static grain texture |
| Hero blur effect | Maintain blur (it is a static visual, not an animation) |

### Reading Experience

| Requirement | Implementation |
|-------------|----------------|
| Line length | 356px content width — comfortable for mobile reading |
| Line height | 28px for body text — generous spacing |
| Font size | 16px body — meets minimum readable size |
| Contrast | `#42526e` body on white — verify ≥ 4.5:1 |
| Legal text contrast | `#253858` bold on white — verify ≥ 4.5:1 |

---

## 9. Open Questions (All Resolved)

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Third-party cookie opt-out URL | ✅ RESOLVED: Link to the opt-out page for whichever third-party cookie tracking is used on the site (e.g., NAI opt-out: `https://optout.networkadvertising.org/` or DAA opt-out: `https://optout.aboutads.info/`). Confirm specific URL based on tracking provider. |
| 2 | Hero title blur | ✅ RESOLVED: **Intentional styling**. The blur effect is a design signature — consistent across all page heroes. Not a Figma artifact. |
| 3 | www.nymbus.com mentions in body text | ✅ RESOLVED: **Plain text, not hyperlinks**. Legal documents typically don't link internal domain mentions. Keep as non-linked text. |

---

## Comparison: Desktop vs. Mobile

| Aspect | Desktop (1512px) | Mobile (428px) |
|--------|------------------|----------------|
| Total height | ~2044px | 3368px (+65% taller) |
| Hero height | 460px | 460px (same) |
| Hero title alignment | Left-aligned | Centered |
| Content container width | 1140px | 396px |
| Text column width | ~1100px | 356px |
| Vertical accent lines | Present | Absent |
| Navigation | Desktop mega-menu | Hamburger overlay |
| Footer | 5-column, 647px | 2-column stacked, 1075px |
| Content | Identical text | Identical text |
| Interactive elements | Same links | Same links |

---

## User Journey Flow Diagram

```
[User arrives at /privacy-policy/ on mobile]
    (typically from footer "Privacy policy" link)
        |
        v
[Mobile Header Nav — logo + hamburger]
        |
        v
[Hero — "PRIVACY POLICY" (blurred display text over gradient)]
        |
        v (scrolls)
[Introduction — "This Privacy Policy explains..."]
        |
        v (scrolls)
[Your Information]
        |
        v (scrolls)
[Tracking Visits to Our Website]
        |
        +---> [Taps "click here" (Google)] ---> [google.com/dlpage/gaoptout (new tab)]
        +---> [Taps "click here" (third-party)] ---> [External opt-out (new tab)]
        |
        v (scrolls)
[Legal Consent Statement — all-caps bold]
        |
        v (scrolls)
[Data Protection Officer (DPO): compliance@nymbus.com]
        |
        +---> [Taps email] ---> [Opens email client: compliance@nymbus.com]
        |
        v (scrolls)
[Mobile Footer — navigation + contact info]
        +---> [Taps footer links] ---> [Various site pages]
```

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 12, 2026 | Initial mobile privacy policy document | Kiro |
