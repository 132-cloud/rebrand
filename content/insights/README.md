# Insights Hub Content Migration

**Migration Date:** August 11, 2026  
**Source:** Jekyll site at `/nymbus-web-master/_insights/`

---

## Summary

| Metric | Count |
|--------|-------|
| Total MDX posts | 36 |
| Thumbnail images | 44 |
| PDF files | 12 |

*Note: 20 archived posts were excluded from migration based on live site review (August 2026).*

---

## Content by Type

| Type | Count | Folder |
|------|-------|--------|
| Article | 17 | `/article/` |
| Video | 9 | `/video/` |
| Whitepaper | 6 | `/whitepaper/` |
| Infographic | 2 | `/infographic/` |
| Webinar | 1 | `/webinar/` |
| Toolkit | 1 | `/toolkit/` |

---

## Content by Link Type

| Link Type | Count | Description |
|-----------|-------|-------------|
| `external` | 25 | Links to Medium, magazines, Mailchimp-hosted PDFs |
| `lp` | 18 | Links to HubSpot landing pages (`nymbus.com/lp/...`) |
| `pdf` | 12 | Links to locally-hosted PDFs in `/files/` |
| `internal` | 1 | Full MDX article rendered on-site |

---

## Folder Structure

```
/content/insights/
├── article/           # 17 posts
├── video/             # 9 posts
├── whitepaper/        # 6 posts (includes new "Winning the Business Banking Market")
├── infographic/       # 2 posts
├── webinar/           # 1 post
├── toolkit/           # 1 post
├── images/            # 44 thumbnail images
├── files/             # 12 PDF files
├── landing-pages/     # 8 gated content LPs
└── README.md          # This file
```

---

## Frontmatter Schema

Each MDX file uses this frontmatter format:

```yaml
---
title: "Post Title"
slug: post-slug
date: 2026-06-24
type: article                    # article | guide | video | whitepaper | case-study | report | infographic | ebook | webinar | toolkit
heroImage: ./images/filename.jpg # Optional - relative path to thumbnail
excerpt: "Brief description..."
tags:                            # Optional
  - tag1
  - tag2
linkType: external               # external | pdf | lp | internal
link: https://example.com/...    # URL or relative path (omit for internal)
author: Nymbus                   # Optional - omit for no author display
youtube: "video-id"              # Optional - for video type
---
```

### Link Types Explained

- **external**: Opens external URL (Medium, magazines, etc.)
- **pdf**: Opens PDF from `./files/` folder
- **lp**: Opens HubSpot landing page (format: `https://nymbus.com/lp/...`)
- **internal**: Renders the MDX body content as a full article page

---

## Missing Assets (External References)

These 3 images were referenced from external Mailchimp URLs and are not included:

1. `39f06d75-535d-4375-8fc1-d847614685ee.jpg` - Used by `cs-billinero.mdx`
2. `9b68bd92-c6e1-4ef9-a12f-9d6bed1c67a7.png` - Used by `cs-inspire.mdx`  
3. `0745494a-1991-4139-9c8e-cc3efce3017c.jpg` - Used by `nymbus-smartlaunch.mdx`

**Action needed:** Either download these images manually from the original Mailchimp URLs, or replace the `heroImage` references in those MDX files with local alternatives.

---

## New Content Added

### Winning the Business Banking Market (Whitepaper)

**File:** `/whitepaper/winning-the-business-banking-market.mdx`  
**Date:** 2026-06-24  
**Link:** https://lp.nymbus.com/winning-the-business-banking-market-a-strategic-blueprint-for-cus

This is a new post added during migration, not from the Jekyll site.

---

## Implementation Notes for Dev Services

1. **URL Pattern:** `/insights-hub/[category]/[slug]`
2. **Featured Logic:** Latest post by date is featured by default; add `featured: true` to pin a specific post
3. **Card Behavior:** Posts with `linkType: external | pdf | lp` open their link directly; posts with `linkType: internal` navigate to article detail page
4. **Landing Pages:** 8 locally-hosted LP pages need to be rebuilt using the Content Gate Template — see `/landing-pages/README.md`

---

## Landing Pages (Content Gate)

The `/landing-pages/` folder contains documentation and assets for 8 gated content landing pages that need to be rebuilt on the new site.

**See:** [`/landing-pages/README.md`](./landing-pages/README.md)

| Type | Count | Description |
|------|-------|-------------|
| HubSpot Form Pages | 4 | Gated whitepapers/reports with email capture |
| Direct Download Pages | 2 | Article and whitepaper with download button |
| Infographic Pages | 2 | Full infographic display with link to related whitepaper |

**HubSpot Portal ID:** `45317917`

**Assets included:**
- 14 hero/thumbnail images in `/landing-pages/images/`
- 4 PDFs in `/landing-pages/files/`
- Full copy and form IDs in `/landing-pages/README.md`

---

## Migration Script

The migration script is available at `/migrate-insights.js` for reference or re-running if needed.
