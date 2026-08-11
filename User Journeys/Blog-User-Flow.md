# Blog / Insights Hub User Flow & Journey

**Source:** Figma Dev Hand-off — Blog (Node 166:4023)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=166-4023  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Section 1: Navigation](#2-section-1-navigation)
3. [Section 2: Featured Article (Hero)](#3-section-2-featured-article-hero)
4. [Section 3: Category Filters & Search](#4-section-3-category-filters--search)
5. [Section 4: Article Grid](#5-section-4-article-grid)
6. [Section 5: Pagination](#6-section-5-pagination)
7. [Section 6: Footer](#7-section-6-footer)

---

## 1. Page Overview & Scroll Journey

The Blog/Insights Hub page (1512px wide, ~3039px tall) serves as the content marketing hub. It features a hero article, category filtering, a 9-card content grid, and pagination. This is a listing page — individual article pages are separate.

**Scroll Order (top to bottom):**

| # | Section | Y Position | Purpose |
|---|---------|-----------|---------|
| 1 | Navigation (light) | 0–87 | Global nav |
| 2 | Featured Article (Hero) | 87–825 | Hero content spotlight |
| 3 | Category Filters + Search | 746–783 | Content filtering |
| 4 | Article Grid (9 cards) | 913–2185 | Content listing |
| 5 | Pagination | 2285–2322 | Page navigation |
| 6 | Footer | 2382–3039 | Global footer |

---

## 2. Section 1: Navigation

**Figma Node:** `166:4210` (Frame 2147238577) — contains `Nav light` instance

### Layout
- Light-themed navigation bar (shared component)
- Full width, 87px height

---

## 3. Section 2: Featured Article (Hero)

**Figma Node:** `166:4077` (Frame 2117130591)

### Layout
- Dark gradient background (node `166:4025`, 1512 x 825px)
- Two-column layout (504px text + 604px image)
- Abstract geometric shapes in background

### Content (Left Column)
- **Eyebrow badge:** "news" (dark rounded badge, 91 x 46px)
- **Heading:** "The Next-Generation Banking Platform"
- **Meta line:** Author | Date | Reading time (separated by dot dividers)
- **Excerpt:** "Powered by the industry's first secure MCP server." [TRUNCATED — verify in Figma node 166:4090]

### Content (Right Column)
- **Image:** "Image (Ed Gross)" — hero image (604 x 536px)

### Interactions

| Trigger | Behavior |
|---------|----------|
| Click on hero | Navigates to article [URL TBD] |
| Hover | Subtle lift or overlay effect |
| Scroll in | Fade in up with ease |

---

## 4. Section 3: Category Filters & Search

**Figma Node:** `166:4041` (Frame 2117130591)

### Layout
- Horizontal row of filter pill buttons (left-aligned)
- Search input (right-aligned, 323px wide)
- Above the article grid, positioned at Y:746

### Filter Pills (left to right)

| # | Label | Width |
|---|-------|-------|
| 1 | [Category 1] | 59px |
| 2 | [Category 2] | 100px |
| 3 | [Category 3] | 90px |
| 4 | [Category 4] | 73px |
| 5 | [Category 5] | 100px |
| 6 | [Category 6] | 125px |
| 7 | [Category 7] | 90px |
| 8 | [Category 8] | 123px |

*Note: All pills are instances of `Button 5` component. Exact labels are in the component — verify in Figma.*

### Search Input
- Placeholder: "Search Insights"
- Contains search icon (15 x 15px) + text
- Width: 323px

### Additional Filter
- Button above hero at Y:239 — "Button 7" (91px wide) — likely an "All" or category toggle

### Interactions

| Trigger | Behavior |
|---------|----------|
| Click filter pill | Filters article grid to matching category |
| Active pill | Highlighted/filled state |
| Type in search | Filters articles by keyword (live or on submit) |
| Clear search | Returns to default/filtered view |

---

## 5. Section 4: Article Grid

**Figma Node:** `166:4093` (Frame 2085664974)

### Layout
- 3-column grid (373px per card, ~40px gap)
- 3 rows of 3 cards = 9 articles visible per page
- Each row is ~437px tall

### Card Structure (repeated for all 9)

Each card contains:
1. **Thumbnail image** — "Modern Core" frame (373 x 244px)
2. **Category badge** — e.g., "Webinar", "Podcast", "Article", "Blog", "Whitepaper", "Case Study"
3. **Title** — "The Next-Generation Banking Platform" [placeholder text]
4. **Meta line** — Author | Date (separated by dot divider)

### Card Categories in Grid

| Position | Category |
|----------|----------|
| Row 1, Col 1 | Webinar |
| Row 1, Col 2 | Podcast |
| Row 1, Col 3 | Article |
| Row 2, Col 1 | Blog |
| Row 2, Col 2 | Podcast |
| Row 2, Col 3 | Whitepaper |
| Row 3, Col 1 | Blog |
| Row 3, Col 2 | Case Study |
| Row 3, Col 3 | Article |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Card hover | Card lifts with subtle shadow |
| Card click | Navigates to article detail page |
| Category badge click | Filters grid to that category |
| Scroll in | Cards fade in staggered |

---

## 6. Section 5: Pagination

**Figma Node:** `166:4184` (Frame 89)

### Layout
- Centered pagination controls
- Previous arrow + page numbers + Next arrow

### Elements

| Element | Label | Size |
|---------|-------|------|
| Previous | ← (arrow icon) | 37 x 37px |
| Page 1 | "1" | 37 x 37px |
| Page 2 | "2" | 37 x 37px |
| Page 3 | "3" | 37 x 37px |
| Page 4 | "4" | 37 x 37px |
| Page 5 | "5" | 37 x 37px |
| Next | → (arrow icon) | 37 x 37px |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Click page number | Loads that page of articles |
| Click Previous | Goes to previous page (disabled on page 1) |
| Click Next | Goes to next page (disabled on last page) |
| Active page | Highlighted/filled button state |
| Page change | Grid updates, scrolls to top of grid |

---

## 7. Section 6: Footer

**Figma Node:** `166:4208` (Frame 2147238575) — contains `Footer` instance

### Layout
- Standard site footer (shared component, 1517 x 647px)
- Offset position: starts at Y:2382

---

## Appendix: Comments on Blog Page

| Date | By | Node | Comment |
|------|-----|------|---------|
| 2026-08-07 | Santiago | 166:3165 | "@Adam Rodriguez Screen needed here, thankss!!" |
| 2026-08-07 | Santiago | 166:3165 | "placeholder imagery" |
| 2026-08-07 | Santiago | 166:1275 | "Placeholder Imagery" |
| 2026-08-04 | Santiago | 166:2058 | "https://examples.motion.dev/ui/sections/faq-plus-minus" |

### Animation References
| Area | Reference URL | Description |
|------|---------------|-------------|
| FAQ section (related page) | https://examples.motion.dev/ui/sections/faq-plus-minus | Plus/minus FAQ accordion animation |

---

## Open Questions

1. ~~**Placeholder imagery**~~ — ✅ RESOLVED: Card thumbnails will come from migrating existing content from the old Nymbus site.
2. **Screen needed** — Santiago flagged a missing screen for Adam (node 166:3165) — STILL OPEN (awaiting Adam)
3. ~~**Search behavior**~~ — ✅ RESOLVED: Search is live-filtering.
4. **Filter pill labels** — Exact category names are in Button 5 instances — verify in Figma for final copy. — STILL OPEN
5. ~~**Article URLs**~~ — ✅ RESOLVED: Use `/insights/:slug` pattern (best practice: lowercase, hyphenated, no dates in URL).
6. ~~**Items per page**~~ — ✅ RESOLVED: 9 shown per page with 4 pages of pagination (36 articles total).
