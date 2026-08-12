# Press Releases Content Migration

**Migration Date:** August 12, 2026  
**Source:** Jekyll site at `/nymbus-web-master/_press/`

---

## Summary

| Metric | Count |
|--------|-------|
| Total MDX posts | 79 |
| Archived posts (excluded) | 6 |
| Thumbnail images | ~79 |
| Video embeds | ~5 (Vimeo/YouTube) |

*Note: 6 archived posts in `_press/_archive/` are excluded from migration based on legacy site review.*

---

## Content by Year

| Year | Count |
|------|-------|
| 2025 | 11 |
| 2024 | 6 |
| 2023 | 8 |
| 2022 | 11 |
| 2021 | 32 |
| 2020 | 6 |
| 2019 | 3 |
| Undated | 2 |

---

## Folder Structure

```
/content/press/
├── releases/          # All 79 press release MDX files
├── images/            # Thumbnail images (migrated from /assets/images/PR-*.jpg)
├── README.md          # This file
└── migration-report.json  # Migration script output
```

---

## Frontmatter Schema

Each MDX file uses this frontmatter format:

```yaml
---
title: "Press Release Title"
slug: press-release-slug
date: 2025-09-10
subtitle: "Optional subtitle for longer headlines"    # Optional
heroImage: ./images/PR-91.jpg                         # Optional - relative path to thumbnail
excerpt: "Brief description for cards and meta..."
tags:                                                 # Optional
  - partnership
  - core
  - funding
  - leadership
  - product
  - customer-news
videoType: vimeo                                      # Optional - vimeo | youtube
videoId: "1114058429"                                 # Optional - video embed ID
---

Full press release body content in MDX...
```

### Field Mapping from Legacy

| Legacy Field | New Field | Notes |
|--------------|-----------|-------|
| `title` | `title` | Direct mapping |
| `subtitle` | `subtitle` | Optional, keep if present |
| `date` | `date` | Convert to YYYY-MM-DD format |
| `excerpt` | `excerpt` | Direct mapping |
| `image` | `heroImage` | Change path from `/assets/images/` to `./images/` |
| `vimeo` | `videoId` + `videoType: vimeo` | Split into two fields |
| `youtube` | `videoId` + `videoType: youtube` | Split into two fields |
| `redirect_from` | *removed* | Not needed in new site |
| Body content | Body content | Convert Markdown to MDX syntax |

### Tags Taxonomy

Categorize press releases with these tags:

| Tag | Description | Example |
|-----|-------------|---------|
| `partnership` | Partner announcements, integrations | Payrailz, NYDIG, Plaid partnerships |
| `funding` | Investment rounds, financing | Series C, Series D funding |
| `leadership` | Executive appointments, board changes | CFO appointment, advisory board |
| `product` | Product launches, platform updates | Nymbus Labs, SmartLenders |
| `customer-news` | Client go-lives, implementations | PeoplesBank, VyStar conversions |
| `award` | Industry recognition | Forbes, Luminaries awards |
| `company` | HQ moves, company milestones | Jacksonville relocation |

---

## Image Migration

### Source Location
Legacy images are at `/nymbus-web-master/assets/images/PR-*.jpg`

### Image Naming Convention
- Source: `/assets/images/PR-81.jpg`
- Destination: `./images/PR-81.jpg`

### Migration Steps
1. Copy all `PR-*.jpg` files from legacy `/assets/images/` to `/content/press/images/`
2. Update `heroImage` paths in frontmatter to use relative `./images/` prefix
3. Verify all images exist; log any missing references

### Missing Images
If any press releases reference images that don't exist:
1. Check if image exists in legacy site assets
2. If not found, leave `heroImage` field empty (page will show default placeholder)
3. Log in `migration-report.json` for manual review

---

## Video Embeds

Some press releases include video content:

| Video Type | Count | Example |
|------------|-------|---------|
| Vimeo | ~2 | PeoplesBank announcement (1114058429) |
| YouTube | ~3 | Series D funding (GNEZ-BySHJY) |

### Video Implementation
- Add `videoType` and `videoId` to frontmatter
- Component should render responsive embed above body content
- Fallback: show thumbnail with play button linking to video

---

## Implementation Notes for Dev Services

### URL Pattern
`/press/[slug]`

Example: `/press/peoplesbank-becomes-largest-us-community-bank-to-fully-adopt-a-modern-core-with-nymbus`

### Press Page List Behavior
- Display press releases sorted by date (newest first)
- Show thumbnail, title, and "Read release →" link
- Implement pagination (not just "View all")
- Cards link to individual press release detail pages

### Press Release Detail Page
- Full-width hero with gradient background (matches Press page hero style)
- Title and subtitle displayed prominently
- Date shown below title
- Video embed (if present) shown above body content
- Full MDX body content rendered
- "Back to Press" link at bottom
- Related press releases section (optional)

### Card Component Props
```typescript
interface PressReleaseCard {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  heroImage?: string;
  subtitle?: string;
}
```

### Pagination
- 10 releases per page (configurable)
- Standard pagination controls (Previous/Next, page numbers)
- URL pattern: `/press?page=2` or `/press/page/2`

---

## MDX Body Content Conversion

### Link Syntax Changes
```markdown
# Legacy Jekyll
[Nymbus](/)
[PeoplesBank](https://www.bankatpeoples.com/home/)
[external link](https://example.com){:target="_blank"}

# New MDX
[Nymbus](/)
[PeoplesBank](https://www.bankatpeoples.com/home/)
<a href="https://example.com" target="_blank" rel="noopener noreferrer">external link</a>
```

### Line Break Handling
```markdown
# Legacy
**Media Contact**\\
Allison Netzer\\

# New MDX
**Media Contact**  
Allison Netzer  
```

### Special Characters
- Escape `{` and `}` in body content (MDX treats as JSX)
- Convert `&nbsp;` to regular spaces or `{' '}`

---

## Migration Script Requirements

Create `/migrate-press.js` with the following logic:

```javascript
// Pseudocode for migration script

1. Read all .md files from /nymbus-web-master/_press/ (exclude _archive/)
2. For each file:
   a. Parse frontmatter using gray-matter
   b. Transform frontmatter to new schema:
      - Generate slug from filename (remove date prefix)
      - Convert date to YYYY-MM-DD
      - Map image path to heroImage
      - Split video fields into videoType + videoId
      - Auto-tag based on title keywords
   c. Transform body content:
      - Convert Jekyll link syntax to MDX
      - Fix line breaks (\\  to  )
      - Escape curly braces
   d. Write to /content/press/releases/[slug].mdx
3. Copy images from /assets/images/PR-*.jpg to /content/press/images/
4. Generate migration-report.json with:
   - Total files processed
   - Any errors or warnings
   - Missing image references
   - Video embeds found
```

---

## Quality Checklist

Before handoff to dev services, verify:

- [ ] All 79 MDX files created in `/content/press/releases/`
- [ ] All images copied to `/content/press/images/`
- [ ] Frontmatter validates against schema
- [ ] No broken image references
- [ ] Video embeds have correct IDs
- [ ] Body content renders correctly (no MDX syntax errors)
- [ ] Dates are in correct YYYY-MM-DD format
- [ ] Slugs are URL-safe (lowercase, hyphens, no special chars)

---

## Sample Migrated File

**Source:** `2025-09-10-peoplesbank-becomes-largest-us-community-bank-to-fully-adopt-a-modern-core-with-nymbus.md`

**Destination:** `/content/press/releases/peoplesbank-becomes-largest-us-community-bank-to-fully-adopt-a-modern-core-with-nymbus.mdx`

```yaml
---
title: "PeoplesBank Becomes Largest U.S. Community Bank to Fully Adopt a Modern Core with Nymbus"
slug: peoplesbank-becomes-largest-us-community-bank-to-fully-adopt-a-modern-core-with-nymbus
date: 2025-09-10
subtitle: "Massachusetts and Connecticut-based bank completes successful core conversion to real-time and cloud-native platform"
heroImage: ./images/PR-91.jpg
excerpt: "JACKSONVILLE, FL – September 10, 2025 – Nymbus, a full-stack banking platform for U.S. banks and credit unions, today announced that PeoplesBank has become the largest U.S. community bank to fully operate on a modern, cloud-native core banking platform."
tags:
  - customer-news
  - core
videoType: vimeo
videoId: "1114058429"
---

**JACKSONVILLE, FL – September 10, 2025** – [Nymbus](/), a full-stack banking platform...
```

---

## Related Documentation

- [Press Page User Flow](/User%20Journeys/Press-Page-User-Flow.md) - Page design specifications
- [Insights Hub README](/content/insights/README.md) - Reference migration pattern
- [Figma Design](https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=17-9134) - Visual specifications
