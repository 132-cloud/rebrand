# Insights Hub User Flow & Journey

**Source:** Figma Dev Hand-off — Insights Hub (Node 23:2118)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=23-2118
**Last Updated:** August 11, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Blog Listing Page](#2-blog-listing-page)
   - [Section: Navigation (Light)](#21-section-navigation-light)
   - [Section: Featured Article Hero](#22-section-featured-article-hero)
   - [Section: Category Filters & Search](#23-section-category-filters--search)
   - [Section: Article Grid](#24-section-article-grid)
   - [Section: Pagination](#25-section-pagination)
   - [Section: Footer](#26-section-footer)
3. [Blog Article Detail Page](#3-blog-article-detail-page)
   - [Section: Navigation (Dark)](#31-section-navigation-dark)
   - [Section: Article Header & Author](#32-section-article-header--author)
   - [Section: Article Body](#33-section-article-body)
   - [Section: Chapter Widget (Sticky Sidebar)](#34-section-chapter-widget-sticky-sidebar)
   - [Section: More from Nymbus (Related Articles)](#35-section-more-from-nymbus-related-articles)
   - [Section: Footer](#36-section-footer)

---

## 1. Page Overview & Scroll Journey

The Insights Hub canvas (node `23:2118`) contains two complete page designs:

1. **Blog Listing Page** (node `166:4023`) — 1512 x 3039px — The content marketing hub with a featured article hero, category filtering, 9-card article grid, and pagination.
2. **Blog Article Detail Page** (node `23:2500`) — 1512 x 4258px — Individual article reading experience with chapter navigation, author info, body content, and related articles.

These two pages form the complete Insights Hub user journey: users land on the listing, browse/filter content, click an article, read it with chapter navigation, and discover related content.

---

## 2. Blog Listing Page

**Figma Node:** `166:4023` (Blog)
**Dimensions:** 1512 x 3039px

**Scroll Order (top to bottom):**

| # | Section | Y Position | Purpose |
|---|---------|-----------|---------|
| 1 | Navigation (light) | 0–87 | Global nav bar |
| 2 | Featured Article Hero | 87–825 | Spotlight hero article |
| 3 | Category Filters + Search | 746–783 | Content filtering |
| 4 | Article Grid (3x3) | 913–2185 | Content listing |
| 5 | Pagination | 2285–2322 | Page navigation |
| 6 | Footer | 2382–3039 | Global footer |

---

### 2.1 Section: Navigation (Light)

**Figma Node:** `166:4212` (Nav light instance)

#### Layout
- Light-themed nav bar (shared component instance)
- Full width (1512px), 87px height
- Sits within a wrapper frame at top of page

#### Content
- Standard Nymbus nav: Logo, Platform, Managed Services, Solutions, AI, Resources dropdowns, CTA buttons

---

### 2.2 Section: Featured Article Hero

**Figma Node:** `166:4077` (Frame 2117130591)

#### Layout
- Dark gradient background covering 0–825px (node `166:4025`)
- Abstract geometric shape overlays in background
- Two-column layout: 504px text (left) + 604px image (right), 91px gap
- Content starts at Y:161 within the hero

#### Content (Left Column)
- **Eyebrow badge:** "news" — dark rounded pill (91 x 46px), `rgba(217,217,217,0.2)` background, uppercase, 14px bold, 1px letter-spacing
- **Heading:**
  - Line 1: "The Next 12 Months in Banking" (24px, leading 28px)
  - Line 2: "CEO Outlook" (56px H2 bold, leading 58px)
- **Meta line:** "by Jeffery Kendall, Chairman & CEO" (bold 14px) · "Aug 14, 2026" (roman 14px) · "6 min read" (roman 14px) — separated by 4px dot dividers
- **Excerpt:** "Banking is entering a year defined by faster change, sharper competition, and rising expectations. Jeffery Kendall, Nymbus Chairman and CEO, shares his perspective on the forces reshaping the industry and what financial institutions must do now to move with confidence."

#### Content (Right Column)
- **Image:** "Image (Ed Gross)" — 604 x 536px, fills container with object-cover
- Background linear gradient overlay: `rgba(0,0,0,0.2)` + base color `rgb(122,134,154)`

#### Interactions & Animations

| Trigger | Behavior | Reference |
|---------|----------|-----------|
| Scroll in | Fade in up with ease | Default |
| Click on hero area | Navigates to article detail page | [URL TBD] |
| Hover on hero | Subtle lift or overlay shift | — |

---

### 2.3 Section: Category Filters & Search

**Figma Node:** `166:4041` (Frame 2117130591)

#### Layout
- Horizontal flex row, 74px gap between filter group and search
- Positioned at Y:746 (overlapping bottom of hero section)

#### Filter Pills (left to right)

| # | Label | State | Style |
|---|-------|-------|-------|
| 1 | All | **Active** | `rgba(0,0,0,0.8)` bg, white text |
| 2 | Webinar | Inactive | `rgba(219,219,219,0.4)` bg, black text |
| 3 | Article | Inactive | `rgba(219,219,219,0.4)` bg, black text |
| 4 | Blog | Inactive | `rgba(219,219,219,0.4)` bg, black text |
| 5 | Podcast | Inactive | `rgba(219,219,219,0.4)` bg, black text |
| 6 | Whitepaper | Inactive | `rgba(219,219,219,0.4)` bg, black text |
| 7 | Report | Inactive | `rgba(219,219,219,0.4)` bg, black text |
| 8 | Case Study | Inactive | `rgba(219,219,219,0.4)` bg, black text |

- All pills: 37px height, rounded-full (39.254px radius), 20px horizontal padding
- Font: Neue Haas Grotesk Display Pro 75 Bold, 14px, 1.12px letter-spacing, uppercase feel

#### Search Input
- **Placeholder:** "Search Insights"
- Width: 323px, 37px height
- Search icon (15 x 15px) + 12px gap + label text
- Background: `rgba(219,219,219,0.4)`, rounded-full

#### Interactions

| Trigger | Behavior |
|---------|----------|
| Click filter pill | Filters article grid to matching category; pill becomes active state |
| Click active pill | Deselects filter (returns to "All") |
| Click "All" | Shows all content types |
| Type in search | Filters articles by keyword |
| Clear search | Returns to current filter view |

---

### 2.4 Section: Article Grid

**Figma Node:** `166:4093` (Frame 2085664974)

#### Layout
- 3-column CSS grid: `repeat(3, minmax(0, 1fr))`
- Column gap: 40px, Row gap: 40px
- Card width: ~373px each
- Starts at Y:913, ~1272px total height

#### Card Structure (per card)

1. **Thumbnail image** — rounded-[30px], ~373 x 244px, object-cover
2. **Category badge** — bordered pill, 0.8px `#42526e` border, rounded-full, 14px Roman text, `#42526e` color
3. **Title** — H4 Bold, 24px, leading 28px, black, 2-line max
4. **Meta line** — Date · Read time — 14px Roman, `#42526e`, separated by dot divider

#### Grid Content (Row by Row)

| Position | Category | Title | Date | Duration |
|----------|----------|-------|------|----------|
| R1C1 | Webinar | How community banks compress core migration timelines | Jul 14, 2026 | 6 min read |
| R1C2 | Podcast | Navigating regulatory challenges in fintech partnerships | Sep 10, 2026 | 22 min listen |
| R1C3 | Article | Strategies for seamless digital transformation in traditional banks | Aug 2, 2026 | 8 min read |
| R2C1 | Blog | Why managed services are the unlock for digital brand launches | Jul 14, 2026 | 6 min read |
| R2C2 | Podcast | Building banking infrastructure for the next decade | Sep 10, 2026 | 22 min listen |
| R2C3 | Whitepaper | The economics of parallel core deployment | Aug 2, 2026 | 8 min read |
| R3C1 | Blog | State of digital banking: 2025 market data | Jul 14, 2026 | 6 min read |
| R3C2 | Case Study | MSUFCU expands business banking on Nymbus | Sep 10, 2026 | 22 min listen |
| R3C3 | Article | From intent to funded: rethinking account opening | Aug 2, 2026 | 8 min read |

#### Interactions

| Trigger | Behavior |
|---------|----------|
| Card hover | Card lifts with subtle shadow, ease transition |
| Card click | Navigates to article detail page |
| Category badge click | Filters grid to that category |
| Scroll into view | Cards fade in staggered (scroll reveal) |

---

### 2.5 Section: Pagination

**Figma Node:** `166:4184` (Frame 89)

#### Layout
- Centered horizontally (starts at X:611)
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

| Trigger | Behavior |
|---------|----------|
| Click page number | Loads that page of articles |
| Click Previous | Goes to previous page (disabled on page 1) |
| Click Next | Goes to next page (disabled on last page) |
| Active page | Filled/highlighted button state |
| Page change | Grid updates, scrolls to top of grid section |

---

### 2.6 Section: Footer

**Figma Node:** `166:4209` (Footer instance)

#### Layout
- Standard Nymbus footer (shared component)
- 1517 x 647px, starts at Y:2382

---

## 3. Blog Article Detail Page

**Figma Node:** `23:2500` (Blog - Article)
**Dimensions:** 1512 x 4258px

**Scroll Order (top to bottom):**

| # | Section | Y Position | Purpose |
|---|---------|-----------|---------|
| 1 | Navigation (dark) | 0–87 | Global nav (dark variant) |
| 2 | Back button | 146 | Return to blog listing |
| 3 | Article header + meta | 147–530 | Breadcrumb, title, subtitle, author |
| 4 | Divider | 607 | Section separator |
| 5 | Article body (Section 1) | 657–1077 | First body section |
| 6 | Article image | 1129–1653 | Full-width article image |
| 7 | Image caption | 1617 | "Image Made With: Google Flow" |
| 8 | Article body (Section 2) | 1699–2066 | Second body section |
| 9 | Article body (Section 3) | 2166–2448 | Third body section |
| 10 | Article body (Section 4) | 2548–2802 | Fourth body section |
| 11 | Divider | 2919 | Section separator |
| 12 | More from Nymbus | 2919–3611 | Related articles (2 cards) |
| 13 | Footer | 3611–4258 | Global footer |

**Sidebar (sticky):**

| Element | Y Position | Purpose |
|---------|-----------|---------|
| Chapter Widget | 300–638 | Sticky table of contents |
| Progress indicator | Left of chapters | Reading progress dots |

---

### 3.1 Section: Navigation (Dark)

**Figma Node:** `23:2568` (Nav dark instance)

#### Layout
- Dark-themed nav bar (shared component instance)
- Full width (1512px), 87px height
- Contains: Logo, Platform, Managed Services, Solutions, AI, Resources dropdowns, Book a Demo button, Contact Sales link

---

### 3.2 Section: Article Header & Author

**Figma Node:** Multiple nodes in `23:2500`

#### Layout
- Content area: ~1010px wide, centered (X:252–1262)
- Back button at top-left (37 x 37px circle, Y:146)
- Breadcrumb meta line below

#### Content

- **Back button:** `23:2588` — 37x37px circle with left-arrow icon, navigates back to blog listing
- **Breadcrumb/Meta:** `23:2525` — "Jul 14, 2026" · "6 min read" (14px Roman, `#505f79`, dot separator)
- **Article Title:** `23:2504` — "Designing high-performance user experiences for data-heavy dashboards and analytics products" (H2, 56px Bold, `#171216`, leading 58px)
- **Subtitle:** `23:2505` — "How senior designers move beyond consumer aesthetics to build dense, fast tools that experts actually want to use." (Body, 18px Roman, `#505f79`, leading 28px)

#### Author Block

**Figma Node:** `23:2569` (Group 2085664980)

- **Avatar:** 48px circular image (masked), shows "Ed Gross" photo
- **Author name:** "Jeffery Kendall" (16px Bold, `#505f79`, 1.15px letter-spacing)
- **Social icons:** 3 icons (14.4 x 14.4px each, 5.6px gap) — LinkedIn, Twitter/X, and one other

#### Interactions

| Trigger | Behavior |
|---------|----------|
| Click back button | Returns to blog listing page |
| Click social icon | Opens author's social profile (new tab) |
| Scroll in | Header elements fade in up with ease |

---

### 3.3 Section: Article Body

**Figma Nodes:** `23:2506`, `23:2507`, `23:2508`, `23:2509` (body text blocks) + `23:2510`, `23:2511`, `23:2512` (section headings)

#### Layout
- Content width: 875px, centered (X:317.5)
- Body text: 18px Roman, `#505f79`, leading 28px, 0.18px letter-spacing
- Section headings: 24px Bold (H4), black, leading 28px
- Full-width image (931 x 524px) between body sections, rounded corners

#### Article Structure

**Opening paragraphs (node `23:2506`, Y:657):**

> A few years ago I sat with an operations manager at a regional shipping company. She had three monitors arranged on her desk. On the left screen was a massive spreadsheet. On the right was our company enterprise logistics software. In the center was a physical notepad and a stopwatch. Every time a truck status changed she looked at our software, wrote the tracking number on the notepad, typed it into the spreadsheet, updated the status, and then clicked five times in our software to acknowledge the change. When I asked her why she used the spreadsheet she said our software did not let her see multiple shipments at once. When I asked about the stopwatch she said she timed herself to see how many records she could process before her wrist started hurting. Our company had spent two million dollars building that software. The user had built her own interface out of Excel because our official tool was too sparse and rigid to handle her actual workload.
>
> That moment permanently changed how I view interface design. Most designers approach software with a consumer mindset. We are trained to remove clicks, increase whitespace, and simplify forms. We treat the user like a fragile guest who needs to be guided step by step. But the operations manager was not a fragile guest. She was an expert performing high volume, high stakes execution. She did not need a simpler interface. She needed a faster, more flexible one.

**Article image (node `23:2643`, Y:1129):** 931 x 524px, rounded rectangle

**Image caption (node `23:2513`, Y:1617):** "Image Made With: Google Flow" — 14px Roman, `#505f79`

**Section heading (node `23:2510`, Y:1699):** "Measuring Success in Complex UX" — H4, 24px Bold

**Body section 2 (node `23:2507`, Y:1758):** [Blurred placeholder content — verify in Figma]

**Section heading (node `23:2511`, Y:2166):** [Section title — verify in Figma]

**Body section 3 (node `23:2508`, Y:2224):** [Blurred placeholder content — verify in Figma]

**Section heading (node `23:2512`, Y:2548):** [Section title — verify in Figma]

**Body section 4 (node `23:2509`, Y:2606):** [Blurred placeholder content — verify in Figma]

---

### 3.4 Section: Chapter Widget (Sticky Sidebar)

**Figma Node:** `23:2763` (Chapter Widget)
**Dimensions:** 326 x 338px, positioned at X:2230 (outside main content frame — indicates overlay/sticky positioning)

#### Layout
- White background card
- Semi-transparent inner card: `rgba(252,251,252,0.6)` bg, 0.25px border `rgba(216,216,216,0.8)`, rounded-[10px]
- Left-side progress indicator (vertical dots/line, 21px wide, 132px tall)
- Chapter list entries: 9px Roman text, `#505f79`

#### Chapter List (Table of Contents)

| # | Chapter Title (truncated in design) |
|---|------|
| 1 | Redefining Cognitive Load and the Myth of Pro... |
| 2 | The Three Forces Framework: Density, Clarity.... |
| 3 | **The Consumer Design Trap in Complex Sof...** (active/current) |
| 4 | The Reality of Context Switching and The Cos.... |
| 5 | Navigating the Politics of Density and The Buy..... |
| 6 | The Human Element of Complex Friction |
| 7 | Mentoring the Next Generation in the Trenche.... |
| 8 | Measuring Success in Complex UX |
| 9 | The Framework for Workflow Redesign |
| 10 | Designing the Empty State for Experts |

#### Progress Indicator
- Vertical track with dots (node `23:2764`, left side of widget)
- Active chapter indicated by bold text + filled dot (node `23:2789`, Y:100)
- Expand/collapse icon at Y:128 (11px)

#### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll through article | Progress indicator updates, active chapter highlights |
| Click chapter title | Smooth scrolls to that section in article body |
| Sticky behavior | Widget stays fixed in viewport while scrolling body |

---

### 3.5 Section: More from Nymbus (Related Articles)

**Figma Node:** `23:2737` (Frame 2085665000)
**Dimensions:** 1512 x 692px, starts at Y:2919

#### Layout
- Full-width section with horizontal divider at top
- Section heading + 2-column card layout (484.967px per card, 40px gap)
- Content area: 1010px wide

#### Content

- **Section heading:** "More from Nymbus" — H3 Bold, 42px, leading 48px, black
- **Card layout:** 2 cards side by side

#### Related Article Cards

| # | Category | Title | Date | Duration |
|---|----------|-------|------|----------|
| 1 | Article | Strategies for seamless digital transformation in traditional banks | Aug 2, 2026 | 8 min read |
| 2 | Whitepaper | The economics of parallel core deployment | Aug 2, 2026 | 8 min read |

#### Card Structure (same as listing page cards)
- Thumbnail: rounded-[30px], ~485 x 257px
- Category badge: bordered pill
- Title: H4 Bold, 24px
- Meta: Date · Duration (14px Roman, `#42526e`)

#### Interactions

| Trigger | Behavior |
|---------|----------|
| Card hover | Card lifts with subtle shadow |
| Card click | Navigates to that article's detail page |
| Scroll in | Cards fade in up with ease |

#### Mike's Notes
- This section "Shows latest posts" — content should be dynamically populated with most recent articles

---

### 3.6 Section: Footer

**Figma Node:** `23:2762` (Footer instance)

#### Layout
- Standard Nymbus footer (shared component)
- 1517 x 647px, starts at Y:3611

---

## Appendix: Comments on Insights Hub

### Content / Implementation Notes

| Date | By | Node | Comment |
|------|-----|------|---------|
| 2026-08-11 | Mike | `166:4023` | "Placeholder articles - this should be populated by migrating all post content from existing Nymbus site" |
| 2026-08-11 | Mike | `23:2500` | "Shows latest posts" |

---

## Open Questions

1. **Content migration** — CMS decision still pending: Tina, Contentstack, or YAML via Kiro. Content schema TBD once CMS is chosen. — STILL OPEN

2. ~~**"More from Nymbus" logic**~~ — ✅ RESOLVED: Category matching first, then chronological.

3. ~~**Article URLs**~~ — ✅ RESOLVED: `/insights/:slug`

4. ~~**Chapter widget scroll behavior**~~ — ✅ RESOLVED: Collapses on mobile. Sticky-positioned on desktop alongside article body.

5. ~~**Article body text is blurred**~~ — ✅ RESOLVED: Right edge of heading is blurred as a design choice (not placeholder treatment). Actual article content will come from CMS.

6. ~~**Search behavior**~~ — ✅ RESOLVED: Live-filtering.

7. ~~**Hero article selection**~~ — ✅ RESOLVED: Most recent article.

8. **Image credit format** — The article has "Image Made With: Google Flow" caption. Is this a standard field in the CMS? — STILL OPEN

9. **Social share icons** — The author block shows 3 social icons. Which platforms do these link to? Are they author-specific or generic share buttons? — STILL OPEN

10. **Filter pill behavior on article page** — When a user arrives from a filtered view, should the article page know which filter was active (for "back" behavior)?
