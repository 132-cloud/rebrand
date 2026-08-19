# Mobile Insights Hub User Flow & Journey

**Source:** Figma Dev Hand-off — Insights Hub Mobile (Nodes 262:13944, 262:14235)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=23-2118
**Last Updated:** August 19, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Overview & Mobile-Specific Considerations](#1-overview--mobile-specific-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Mobile Blog Listing Page](#3-mobile-blog-listing-page)
4. [Mobile Blog Article Detail Page](#4-mobile-blog-article-detail-page)
5. [Mobile Animations & Interactions](#5-mobile-animations--interactions)
6. [User Journey Scenarios](#6-user-journey-scenarios)
7. [Open Questions](#7-open-questions)

---

## 1. Overview & Mobile-Specific Considerations

The mobile Insights Hub adapts the desktop's two-page experience into touch-optimized, single-column layouts:

- **Desktop Blog Listing:** 1512 x 3039px → **Mobile:** 428 x 6602px
- **Desktop Blog Article:** 1512 x 4258px → **Mobile:** 428 x 5876px

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation | Rationale |
|-----------------|-------------------|-----------|
| 3-column article grid | Single-column stacked cards | 428px viewport |
| Featured hero (2-column) | Stacked vertical layout | Readability |
| Horizontal filter pill row | 2-row wrapped pill grid | Thumb accessibility |
| Search input inline with filters | Search below filter pills | Touch targets |
| Hover-triggered card animations | Tap-through cards (no hover states) | Touch devices |
| Chapter widget (sticky sidebar) | **Removed** — no TOC on mobile | Simplified reading |
| Side-by-side related articles | Single-column stacked cards | 428px viewport |

### Design Philosophy (Per Sarah's Direction)

- **Touch-first interactions** — All targets minimum 44×44px, no hover states
- **Simplified navigation** — Chapter widget removed for cleaner mobile reading
- **Stacked layouts** — All multi-column content converts to single column
- **Full-width cards** — Article cards span viewport width for easier tapping


---

## 2. Page Structure & Scroll Journey

The mobile Insights Hub canvas contains two complete page designs:

1. **Blog - Mobile** (node `262:13944`) — 428 x 6602px — Mobile blog listing with hero, filters, and article cards
2. **Blog - Article - Mobile** (node `262:14235`) — 428 x 5876px — Mobile article reading experience

---

## 3. Mobile Blog Listing Page

**Figma Node:** `262:13944` (Blog - Mobile)
**Dimensions:** 428 x 6602px

### Scroll Order (top to bottom)

| # | Section | Approx Y | Purpose |
|---|---------|----------|---------|
| 1 | Navigation Header | 0–87 | Mobile hamburger nav |
| 2 | Featured Article Hero | 87–1163 | Spotlight hero (stacked) |
| 3 | Category Filters | 1163–1280 | 2-row wrapped pills |
| 4 | Search Input | 1280–1345 | Full-width search |
| 5 | Article Card Stack | 1431–5325 | 9 cards (single column) |
| 6 | Pagination | 5390–5427 | Page navigation |
| 7 | Footer | 5527–6602 | Mobile footer |

---

### 3.1 Section: Mobile Navigation Header

**Figma Node:** `302:8497` (Nav Mobile White)
**Dimensions:** 428 x 87px

See [Mobile-Header-Navigation-User-Flow.md](./Mobile-Header-Navigation-User-Flow.md) for complete documentation.

**Summary:**
- Fixed header with Nymbus logo (left) and hamburger icon (right)
- Light-themed variant for listing page
- Hamburger opens full-screen menu overlay

---

### 3.2 Section: Featured Article Hero (Mobile)

**Figma Node:** `262:13978` (Hero Content)
**Position:** Y 135–1133 (within Blog frame)


#### Layout (Mobile)

```
┌────────────────────────────────────┐
│ [Nav Header - hamburger]           │
├────────────────────────────────────┤
│                                    │
│   ┌──────────┐                     │
│   │  news    │  (eyebrow badge)    │
│   └──────────┘                     │
│                                    │
│   The Next 12 Months in Banking    │
│   CEO Outlook                      │
│   (H1 - stacked on mobile)         │
│                                    │
│   by Jeffery Kendall...            │
│   Aug 14, 2026                     │
│   6 min read                       │
│   (meta stacked vertically)        │
│                                    │
│   [Excerpt paragraph...]           │
│                                    │
│   ┌────────────────────────────┐   │
│   │                            │   │
│   │   [Hero Image]             │   │
│   │   (full width, 396x536)    │   │
│   │                            │   │
│   └────────────────────────────┘   │
│                                    │
└────────────────────────────────────┘
```

#### Content Elements

| Ref | Element | Mobile Specs |
|-----|---------|--------------|
| MIH-1 | Eyebrow badge | "news" — dark rounded pill, 91 x 46px |
| MIH-2 | Heading | H1, 396px width, stacked (not side-by-side) |
| MIH-3 | Meta line | Stacked vertically: author, date, read time |
| MIH-4 | Excerpt | Full-width paragraph, 396px |
| MIH-5 | Hero image | 396 x 536px, below text (not beside) |

#### Mobile Adaptations from Desktop

| Desktop | Mobile |
|---------|--------|
| 2-column (text left, image right) | Single column (text above image) |
| Meta on single line with dots | Meta stacked vertically |
| 604px image width | 396px full-width image |

#### Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Tap hero area | Navigates to article detail page |
| Scroll in | Fade in animation |


---

### 3.3 Section: Category Filters (Mobile)

**Figma Node:** `262:13961` (Frame 2117130591)
**Position:** Y 1196 (within Tags & Search frame)

#### Layout (Mobile)

Filters wrap into a 2-row grid (vs single horizontal row on desktop):

```
┌────────────────────────────────────┐
│ [All] [Webinar] [Article] [Blog]   │  Row 1
│ [Podcast] [Whitepaper] [Report]    │  Row 2
│            [Case Study]            │
└────────────────────────────────────┘
```

#### Filter Pills

| # | Label | Width | State |
|---|-------|-------|-------|
| 1 | All | 47px | **Active** |
| 2 | Webinar | 88px | Inactive |
| 3 | Article | 78px | Inactive |
| 4 | Blog | 61px | Inactive |
| 5 | Podcast | 88px | Inactive |
| 6 | Whitepaper | 113px | Inactive |
| 7 | Report | 78px | Inactive |
| 8 | Case Study | 111px | Inactive |

- All pills: 45px height (vs 37px on desktop), rounded-full
- Font: Neue Haas Grotesk Display Pro 75 Bold, 14px, uppercase

#### Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Tap filter pill | Filters article list to category; pill becomes active |
| Tap active pill | Deselects filter (returns to "All") |
| Tap "All" | Shows all content types |

---

### 3.4 Section: Search Input (Mobile)

**Figma Node:** `262:13954` (Frame 45)
**Position:** Below filter pills

#### Layout
- Full-width search input: 396 x 45px
- Search icon (15 x 15px) + placeholder text "Search Insights"
- Background: `rgba(219,219,219,0.4)`, rounded-full

#### Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Tap search input | Keyboard opens, placeholder clears |
| Type query | Live-filters articles by keyword |
| Clear/cancel | Returns to current filter view |


---

### 3.5 Section: Article Card Stack (Mobile)

**Figma Node:** `262:14025` (Frame 2085664974)
**Position:** Y 1431–5325

#### Layout (Mobile)
- Single-column stack: 9 cards vertically arranged
- Card width: 396px (full content width)
- Gap between cards: ~40px
- Total section height: ~3894px

#### Mobile Card Structure (per card)

1. **Thumbnail image** — 396 x 244px, rounded-[30px], object-cover
2. **Category badge** — bordered pill, 0.8px `#42526e` border
3. **Title** — H4 Bold, 24px, leading 28px, 2-line max
4. **Meta line** — Date · Read time — 14px, `#42526e`

#### Grid Content (Top to Bottom)

| Position | Category | Title | Date | Duration |
|----------|----------|-------|------|----------|
| 1 | Webinar | How community banks compress core migration timelines | Jul 14, 2026 | 6 min read |
| 2 | Podcast | Navigating regulatory challenges in fintech partnerships | Sep 10, 2026 | 22 min listen |
| 3 | Article | Strategies for seamless digital transformation in traditional banks | Aug 2, 2026 | 8 min read |
| 4 | Blog | Why managed services are the unlock for digital brand launches | Jul 14, 2026 | 6 min read |
| 5 | Podcast | Building banking infrastructure for the next decade | Sep 10, 2026 | 22 min listen |
| 6 | Whitepaper | The economics of parallel core deployment | Aug 2, 2026 | 8 min read |
| 7 | Blog | State of digital banking: 2025 market data | Jul 14, 2026 | 6 min read |
| 8 | Case Study | MSUFCU expands business banking on Nymbus | Sep 10, 2026 | 22 min listen |
| 9 | Article | From intent to funded: rethinking account opening | Aug 2, 2026 | 8 min read |

#### Mobile Card Adaptations

| Desktop | Mobile |
|---------|--------|
| 3-column grid (373px cards) | Single column (396px cards) |
| Hover → card lifts | Tap → navigates directly |
| ~40px horizontal gap | N/A (single column) |

#### Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Tap card | Navigates to article detail page |
| Tap category badge | Filters list to that category |
| Scroll into view | Cards fade in (scroll reveal) |


---

### 3.6 Section: Pagination (Mobile)

**Figma Node:** `262:14116` (Frame 89)
**Position:** Y 5390–5427

#### Layout
- Centered horizontally (starts at X:69)
- Previous arrow + 5 numbered pages + Next arrow
- Each button: 37 x 37px, rounded

#### Elements

| Element | Content | Style |
|---------|---------|-------|
| Previous | ← arrow icon | 37x37, icon centered |
| Page 1 | "1" | Active state (filled) |
| Page 2 | "2" | Inactive |
| Page 3 | "3" | Inactive |
| Page 4 | "4" | Inactive |
| Page 5 | "5" | Inactive |
| Next | → arrow icon | 37x37, icon centered |

#### Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Tap page number | Loads that page of articles |
| Tap Previous | Goes to previous page (disabled on page 1) |
| Tap Next | Goes to next page (disabled on last page) |
| Page change | Card stack updates, scrolls to top of stack |

---

### 3.7 Section: Mobile Footer

**Figma Node:** `280:2786` (Mobile Footer Ad)
**Position:** Y 5527–6602

See [Mobile-Footer-User-Flow.md](./Mobile-Footer-User-Flow.md) for complete documentation.

---

## 4. Mobile Blog Article Detail Page

**Figma Node:** `262:14235` (Blog - Article - Mobile)
**Dimensions:** 428 x 5876px

### Scroll Order (top to bottom)

| # | Section | Approx Y | Purpose |
|---|---------|----------|---------|
| 1 | Navigation Header | 0–87 | Mobile hamburger nav (dark) |
| 2 | Article Meta | 142–164 | Date · Read time |
| 3 | Article Title | 186–474 | H1 title + subtitle |
| 4 | Author Block | 450–640 | Avatar + name + social |
| 5 | Divider | 783 | Section separator |
| 6 | Article Body Section 1 | 883–1667 | Opening paragraphs |
| 7 | Article Image | 1707–1971 | Full-width image |
| 8 | Article Body Section 2 | 2011–2574 | Body + heading |
| 9 | Article Body Section 3 | 2614–3092 | Body + heading |
| 10 | Article Body Section 4 | 3132–3582 | Body + heading |
| 11 | Divider | 3682 | Section separator |
| 12 | More from Nymbus | 3682–4801 | Related articles (2 cards) |
| 13 | Footer | 4801–5876 | Mobile footer |

**Note:** Chapter Widget is **removed** on mobile — no sticky TOC sidebar.


---

### 4.1 Section: Mobile Navigation Header (Dark)

**Figma Node:** `302:8259` (Nav Mobile)
**Dimensions:** 428 x 87px

- Dark-themed mobile nav (matches desktop article page)
- Hamburger menu opens full-screen overlay
- Back navigation available via browser/device back button

---

### 4.2 Section: Article Header & Meta (Mobile)

**Figma Node:** `262:14239` (Frame 2147238582)
**Position:** Y 142–640

#### Layout (Mobile)

```
┌────────────────────────────────────┐
│ [Nav Header - dark, hamburger]     │
├────────────────────────────────────┤
│                                    │
│   Jul 14, 2026 · 6 min read        │
│   (meta line)                      │
│                                    │
│   Designing high-performance       │
│   user experiences for data-       │
│   heavy dashboards and             │
│   analytics products               │
│   (H1 title - full width)          │
│                                    │
│   How senior designers move        │
│   beyond consumer aesthetics...    │
│   (subtitle)                       │
│                                    │
│   ┌────┐                           │
│   │ 👤 │ Jeffery Kendall           │
│   └────┘ [LinkedIn] [X] [...]      │
│   (author block)                   │
│                                    │
└────────────────────────────────────┘
```

#### Content Elements

| Ref | Element | Mobile Specs |
|-----|---------|--------------|
| MAH-1 | Meta line | "Jul 14, 2026 · 6 min read" — 14px, `#505f79` |
| MAH-2 | Article title | H1, 393px width, leading 48px |
| MAH-3 | Subtitle | 18px, `#505f79`, 396px width |
| MAH-4 | Author avatar | 48px circular image |
| MAH-5 | Author name | "Jeffery Kendall" — 16px Bold |
| MAH-6 | Social icons | 3 icons (14.4px each) — LinkedIn, X, etc. |

#### Mobile Adaptations

| Desktop | Mobile |
|---------|--------|
| Back button (37x37) at top-left | No explicit back button — use device back |
| Content width: 1010px | Content width: 396px |
| Meta in breadcrumb position | Meta above title |

#### Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Tap social icon | Opens author's social profile (new tab) |
| Swipe right (edge) | Device back gesture |
| Scroll in | Header elements fade in |


---

### 4.3 Section: Article Body (Mobile)

**Figma Node:** `262:14294` (Frame 2147238588)
**Position:** Y 883–3582

#### Layout (Mobile)
- Content width: 396px (full viewport minus padding)
- Body text: 18px, `#505f79`, leading 28px
- Section headings: 24px Bold (H4), leading 28px
- Full-width image: 396 x 264px (scaled from desktop 931 x 524px)

#### Article Structure (Mobile)

**Opening paragraphs (node `262:14295`, Y:883):**
- ~784px height of body text
- Full article opening content

**Article image (node `262:14296`, Y:1707):**
- 396 x 264px, full width
- Scaled proportionally from desktop

**Section 2 (node `262:14297`, Y:2011):**
- Heading: "Measuring Success in Complex UX"
- Body content below

**Section 3 (node `262:14300`, Y:2614):**
- Section heading
- Body content

**Section 4 (node `262:14303`, Y:3132):**
- Section heading
- Body content

#### Mobile Adaptations

| Desktop | Mobile |
|---------|--------|
| Content width: 875px | Content width: 396px |
| Image: 931 x 524px | Image: 396 x 264px |
| Chapter widget alongside | **Removed** — no TOC |

---

### 4.4 Section: Chapter Widget — REMOVED ON MOBILE

The desktop Chapter Widget (sticky sidebar with table of contents) is **not included** in the mobile design. This simplifies the reading experience for smaller screens.

**Rationale:**
- 428px viewport cannot accommodate sidebar
- Touch scrolling replaces anchor navigation
- Simpler reading flow for mobile users

---

### 4.5 Section: More from Nymbus (Mobile)

**Figma Node:** `262:14386` (Frame 2085665000)
**Position:** Y 3682–4801
**Height:** ~1143px


#### Layout (Mobile)
- Section heading + 2 stacked cards (vs side-by-side on desktop)
- Card width: 396px (full width)
- Cards stacked vertically with gap

#### Content

- **Section heading:** "More from Nymbus" — H3 Bold, 42px

#### Related Article Cards (Mobile)

| # | Category | Title | Date | Duration |
|---|----------|-------|------|----------|
| 1 | Article | Strategies for seamless digital transformation in traditional banks | Aug 2, 2026 | 8 min read |
| 2 | Whitepaper | The economics of parallel core deployment | Aug 2, 2026 | 8 min read |

#### Mobile Card Structure
- Thumbnail: 396 x 257px, rounded-[30px]
- Category badge: bordered pill
- Title: H4 Bold, 24px
- Meta: Date · Duration

#### Mobile Adaptations

| Desktop | Mobile |
|---------|--------|
| 2-column layout (485px cards) | Single column (396px cards) |
| Cards side-by-side | Cards stacked vertically |
| Hover → card lifts | Tap → navigates directly |

#### Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Tap card | Navigates to that article's detail page |
| Scroll in | Cards fade in |

---

### 4.6 Section: Mobile Footer

**Figma Node:** `280:2866` (Mobile Footer Ad)
**Position:** Y 4801–5876

See [Mobile-Footer-User-Flow.md](./Mobile-Footer-User-Flow.md) for complete documentation.

---

## 5. Mobile Animations & Interactions

### Animation Adaptations for Mobile

| Desktop Animation | Mobile Adaptation |
|-------------------|-------------------|
| Scroll reveal (fade up) | Simplified fade-in |
| Card hover → lift + shadow | Removed — tap-through only |
| Hero gradient animation | Static gradient |
| Chapter widget scroll tracking | **Removed** — no chapter widget |

### Touch Targets

All interactive elements must meet minimum 44×44px touch target:

| Element | Visual Size | Touch Target |
|---------|-------------|--------------|
| Hamburger menu | 24×24px | 44×44px (with padding) |
| Filter pills | 45px height | Full pill area |
| Search input | 45px height | Full input area |
| Article cards | 396px width | Full card area |
| Pagination buttons | 37×37px | 44×44px (with padding) |
| Social icons | 14.4×14.4px | 44×44px (with padding) |


---

## 6. User Journey Scenarios

### Scenario MIH-1: Browse Blog Listing and Tap Article

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on mobile Insights Hub listing page |
| **WHEN** | User scrolls down and taps an article card |
| **THEN** | User navigates to the article detail page |

**Acceptance Criteria:**
1. Card shows tap feedback
2. Navigation to `/insights/:slug`
3. Article page loads at top

---

### Scenario MIH-2: Filter Articles by Category

| Step | Detail |
|------|--------|
| **GIVEN** | User is on mobile Insights Hub listing |
| **WHEN** | User taps "Webinar" filter pill |
| **THEN** | Article list filters to show only webinars |

**Acceptance Criteria:**
1. "Webinar" pill becomes active (filled state)
2. "All" pill becomes inactive
3. Article list updates to show matching content
4. Scroll position resets to top of list

---

### Scenario MIH-3: Search Articles

| Step | Detail |
|------|--------|
| **GIVEN** | User is on mobile Insights Hub listing |
| **WHEN** | User taps search input and types "core" |
| **THEN** | Article list filters to show matching articles |

**Acceptance Criteria:**
1. Keyboard opens on input tap
2. Live-filtering as user types
3. Results update in real-time
4. Clear button appears when text entered

---

### Scenario MIH-4: Navigate Pagination

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing page 1 of articles |
| **WHEN** | User taps page "2" button |
| **THEN** | Article list updates to page 2 content |

**Acceptance Criteria:**
1. Page 2 button becomes active
2. Article list updates with new content
3. Scroll position moves to top of article stack
4. Previous arrow becomes enabled

---

### Scenario MIH-5: Tap Featured Hero Article

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on mobile Insights Hub |
| **WHEN** | User taps the featured hero article area |
| **THEN** | User navigates to that article's detail page |

**Acceptance Criteria:**
1. Hero area shows tap feedback
2. Navigation to article detail page
3. Article page loads with correct content


---

### Scenario MIH-6: Read Article and Scroll Through Sections

| Step | Detail |
|------|--------|
| **GIVEN** | User is on mobile article detail page |
| **WHEN** | User scrolls through the article content |
| **THEN** | All sections load and display correctly |

**Acceptance Criteria:**
1. Article body renders with correct typography
2. Images load lazy as they enter viewport
3. Section headings are clearly visible
4. No chapter widget (removed on mobile)
5. Smooth 60fps scrolling

---

### Scenario MIH-7: Tap Related Article

| Step | Detail |
|------|--------|
| **GIVEN** | User has scrolled to "More from Nymbus" section |
| **WHEN** | User taps a related article card |
| **THEN** | User navigates to that article's detail page |

**Acceptance Criteria:**
1. Card shows tap feedback
2. Navigation to new article detail page
3. New article loads at top
4. "More from Nymbus" shows different related content

---

### Scenario MIH-8: Tap Author Social Icon

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing article detail page |
| **WHEN** | User taps LinkedIn icon in author block |
| **THEN** | Author's LinkedIn profile opens in new tab |

**Acceptance Criteria:**
1. Icon shows tap feedback
2. New browser tab/window opens
3. LinkedIn profile URL loads
4. Original article page remains open

---

### Scenario MIH-9: Navigate Back from Article

| Step | Detail |
|------|--------|
| **GIVEN** | User arrived at article from listing page |
| **WHEN** | User uses device back gesture or browser back |
| **THEN** | User returns to listing page |

**Acceptance Criteria:**
1. Back navigation works via device gesture
2. Listing page restores previous scroll position
3. Previous filter state (if any) is preserved

---

### Scenario MIH-10: Tap Category Badge on Article Card

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing article list |
| **WHEN** | User taps "Podcast" badge on a card |
| **THEN** | List filters to show only podcasts |

**Acceptance Criteria:**
1. Badge shows tap feedback
2. "Podcast" filter becomes active
3. List updates to show only podcast content
4. Does NOT navigate to the article


---

## 7. Open Questions

### Inherited from Desktop (Status)

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Content migration | 🔄 PENDING: CMS decision still pending — Tina, Contentstack, or YAML via Kiro. |
| 2 | Image credit format | ✅ RESOLVED: **Not needed** — no special CMS field required for image credits. |
| 3 | Social share icons | ✅ RESOLVED: **Author-specific profiles**. Show author's social links if supplied, do not show if not supplied. Same for desktop. |
| 4 | Filter pill behavior on article page | 🔄 PENDING: When arriving from filtered view, should back preserve filter state? |

### Mobile-Specific (Resolved)

| # | Question | Resolution |
|---|----------|-----------|
| 5 | Hero tap area | ✅ RESOLVED: **Title and "Read" link only** — not entire hero section. Prevents accidental navigation. |
| 6 | Search behavior with keyboard | ✅ RESOLVED: **Filter as user types** (live search). Better mobile UX. |
| 7 | Chapter widget alternative | ✅ RESOLVED: **None** — no "jump to section" dropdown on mobile. Users scroll through article linearly. |
| 8 | Related articles logic | ✅ RESOLVED: **Same logic as desktop** — match by category, then by recency. No mobile-specific changes. |
| 9 | Filter pill scroll | ✅ RESOLVED: **Yes, horizontally scrollable** if more filters are added. |
| 10 | Article card aspect ratio | ✅ RESOLVED: **396×244px is correct** (16:10 ratio). |

---

## Complete URL Map (Mobile Insights Hub)

| Page | Element | Destination |
|------|---------|-------------|
| Listing | Featured hero tap | /insights/:slug |
| Listing | Article card tap | /insights/:slug |
| Listing | Category badge tap | Filters list (no navigation) |
| Listing | Pagination tap | Same page, different content |
| Article | Author social icons | External social profiles |
| Article | Related article card | /insights/:slug |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 19, 2026 | Initial mobile Insights Hub document | Kiro |
