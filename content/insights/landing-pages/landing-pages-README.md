# Landing Pages Migration

**Migration Date:** August 11, 2026  

---

## Overview

Landing pages from the legacy Jekyll site at `/lp/...` URLs fall into two categories:

1. **Content Gate Pages** — Users submit email via HubSpot form to access gated content (documented below)
2. **Video Landing Pages** — Embedded video content using Content Gate template adapted for video

---

## Video Landing Pages

Video landing pages use the same Content Gate template with video embed instead of hero image.

**Individual video posts are in:** `/content/insights/video/`

| Series | Posts | Template Notes |
|--------|-------|----------------|
| **Client Stories** (5 episodes) | `client-stories-*.mdx` | Vimeo embed, no form |
| **Nymbus Voices** (5 episodes) | `nymbus-voices-*.mdx` | Vimeo embed, no form |
| **SMB Fireside** (2 episodes) | `smb-*.mdx` | YouTube embed, no form |
| **DGI Podcast** (5 episodes) | `dgi_*.mdx` | YouTube embed, no form |

Each `.mdx` file contains the video ID (`vimeo` or `youtube` field) and the landing page URL (`link` field).

---

## Content Gate Pages

**Template:** Content Gate Template ([Figma](https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=241-2766))

These 8 landing pages use a content gate pattern where users submit their email via an embedded HubSpot form to access gated content (whitepapers, reports, articles).

**HubSpot Portal ID:** `45317917`

---

## Pages with HubSpot Forms (Email Gated)

### 1. Cornerstone Report 2025

| Field | Value |
|-------|-------|
| **URL** | `/lp/cornerstone-new-growth-playbook-vertical-niche-strategies/` |
| **Type** | Report |
| **HubSpot Form ID** | `fb3ba233-e2f4-4f1f-af82-b158379ee550` |
| **Hero Image** | `./images/cornerstone-vertical-graphic.png` |
| **Accent Color** | Green 100 (`-g100`) |

**Title:** The New Growth Playbook: Vertical and Niche Strategies

**Description:**
Discover how community banks and credit unions are using vertical and niche banking strategies to drive growth, improve margins, and reach new markets. Download the full report from Cornerstone Advisors and Nymbus.

**Body Copy:**
Commissioned by Nymbus and authored by industry leaders at Cornerstone Advisors, *The New Growth Playbook: Vertical and Niche Strategies* explores how banks and credit unions are rethinking what "community" means in the digital era. Spoiler: it's no longer just geographic, it's affinity-based.

Inside, you'll learn how leading institutions are:
- Launching digital brands tailored to underserved segments like gig workers, military recruits, and recent grads
- Expanding beyond geographic limits without cannibalizing their core business
- Accelerating speed to market with fintech partnerships
- Building scalable growth engines that reduce cost and risk

**Vertical banking isn't just a trend, *it's a competitive advantage*.** Download the report and get the insights to rethink your growth strategy.

---

### 2. Dashboards Won't Deliver

| Field | Value |
|-------|-------|
| **URL** | `/lp/dashboards-wont-deliver/` |
| **Type** | Whitepaper |
| **HubSpot Form ID** | `6f9dee97-0e49-4fef-8ba7-4fdf178a081a` |
| **Hero Image** | `./images/article-dashboards-wont-deliver.png` |
| **Thumbnail** | `./images/article-dashboards-wont-deliver--thumb.jpg` |
| **Redirect From** | `/beyond-dashboards/` |

**Title:** Dashboards Won't Deliver: Why Financial Institutions Need a Smarter Data Strategy

**Subtitle:** By Clint Johnson

**Description:**
A must-read for community banks and credit unions looking to leverage data for future success, Nymbus' SVP of Data Strategy, Clint Johnson, reveals why basic dashboards aren't enough and outlines a smarter approach to data strategy. Discover how to move beyond static reports and build a data-driven culture.

**Body Copy:**
In this article, you will learn:
- Why traditional reporting falls short
- When data becomes relevant and actionable
- The ROI of working smarter
- Five practical steps to move the needle
- And more

---

### 3. The Rise of Microbusinesses

| Field | Value |
|-------|-------|
| **URL** | `/lp/the-rise-of-microbusinesses/` |
| **Type** | Whitepaper |
| **HubSpot Form ID** | `9f8170ed-8e08-43f7-80f1-e81514fd1db0` |
| **Hero Image** | `./images/microbusinesses-wp-preview.png` |

**Title:** The Rise of Microbusinesses

**Subtitle:** How Banks and Credit Unions Can Better Serve Over **20%** of the U.S. Workforce

**Description:**
Discover how your financial institution can better serve the 5 million microbusinesses that drive 21% of the U.S. workforce and represent a $70 billion revenue opportunity.

**Body Copy:**
In this whitepaper, you will learn how to:
- Recognize emerging shifts in microbusiness banking and financial services
- Use market insights to develop solutions that address microbusiness needs
- Implement strategies for offering seamless, all-in-one financial tools
- Strengthen relationships through trust, security, and tailored support

---

### 4. 2025 Belongs to Vertical Banking

| Field | Value |
|-------|-------|
| **URL** | `/lp/2025-belongs-to-vertical-banking/` |
| **Type** | Whitepaper |
| **HubSpot Form ID** | `81698f26-4e22-45fc-b6e2-a506ec142746` |
| **Hero Image** | `./images/launch-wp-graphic.png` |
| **Thumbnail** | `./images/wp-launch--thumb.jpg` |
| **Accent Color** | Green 200 (`-g200`) |
| **Redirect From** | `/2025-belongs-to-vertical-banking-heres-how-to-lead-the-way/` |

**Title:** 2025 Belongs to Vertical Banking—Here's How to Lead the Way

**Description:**
Discover how vertical banking can unlock growth opportunities and position your financial institution for success in 2025.

**Body Copy:**
In this whitepaper, you will learn how to:
- Identify emerging trends shaping the future of banking
- Leverage data-driven insights to enhance customer experience
- Explore strategies for building tailored vertical offerings
- Select the right partner to accelerate your transformation

---

## Pages with Direct Downloads (No Form)

### 5. Connect (Unlock Your Data)

| Field | Value |
|-------|-------|
| **URL** | `/lp/connect/` |
| **Type** | Nymbus Connect |
| **HubSpot Form ID** | None |
| **Hero Image** | `./images/connect-white-paper.png` |
| **Thumbnail** | `./images/connect-white-paper--thumb.png` |
| **Download URL** | `./files/WP-Nymbus-Connect.pdf` |
| **CTA Text** | Download Whitepaper |
| **Button Accent** | Yellow 300 (`-y300`) |

**Title:** Unlock Your Data, Unlock Your Vision

**Subtitle:** The Strategic Advantage of Data-Enabled Core Banking

**Description:**
Community banks today face many data-related challenges, ranging from operational inefficiencies and technological constraints to industry pressures and organizational hurdles.

**Body Copy:**
In this whitepaper, you'll learn how deploying a comprehensive data and connectivity platform that enhances data governance, security, and system resilience can help your organization deal with these complex issues.

---

### 6. Next-Gen Core Advantage

| Field | Value |
|-------|-------|
| **URL** | `/lp/next-gen-core-advantage/` |
| **Type** | Article |
| **HubSpot Form ID** | None |
| **Hero Image** | `./images/article-core-modernization.png` |
| **Thumbnail** | `./images/article-modern-core-strategy--thumb.jpg` |
| **Download URL** | `./files/article-strategic-advantage-of-a-next-gen-core.pdf` |
| **CTA Text** | Download article |
| **Accent Color** | Red 100 (`-r100`) |

**Title:** The Strategic Advantage of a Next-Gen Core

**Subtitle:** by Jeffery Kendall

**Description:**
Discover how a modern core can overcome the limitations of legacy systems and drive growth for your financial institution.

**Body Copy:**
In this article you will learn how to:
- Break free from the limitations of legacy systems
- Enhance customer experience and drive growth
- Navigate the complexities of core modernization
- Find the right partner to guide your transformation

---

## Infographic Pages (Links to Related Whitepaper)

### 7. Beyond Dashboards Infographic

| Field | Value |
|-------|-------|
| **URL** | `/lp/beyond-dashboards-infographic/` |
| **Type** | Infographic |
| **HubSpot Form ID** | None |
| **Infographic Image** | `./images/beyond-dashboards-infographic.png` |
| **Infographic PDF** | `./files/beyond-dashboards-infographic.pdf` |
| **Thumbnail** | `./images/insights-infographic--thumb.png` |
| **Related Whitepaper** | `/lp/dashboards-wont-deliver/` |
| **CTA Text** | Download Now: Dashboards Won't Deliver Whitepaper |

**Title:** Beyond Dashboards [INFOGRAPHIC]

**Subtitle:** Why Banks and Credit Unions Need a Smarter Data Strategy

**Description:**
Learn why banks and credit unions need a smarter data strategy.

---

### 8. Unlock Your Data Infographic

| Field | Value |
|-------|-------|
| **URL** | `/lp/unlock-your-data-unlock-your-vision-infographic/` |
| **Type** | Infographic |
| **HubSpot Form ID** | None |
| **Infographic Image** | `./images/Why-Connect-Infographic.webp` |
| **Infographic PDF** | `./files/unlock-your-data-unlock-your-vision-infographic.pdf` |
| **Thumbnail** | `./images/why-connect-infographic--thumb.jpg` |
| **Related Whitepaper** | `/lp/connect/` |
| **CTA Text** | Download Now: Unlock Your Data… Whitepaper |

**Title:** Unlock Your Data, Unlock Your Vision [INFOGRAPHIC]

**Description:**
With unparalleled live access to all your data, you have the information you need to make the decisions to drive your business your way.

---

## HubSpot Form Integration

To embed HubSpot forms in the new site, use the following pattern:

```html
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    portalId: "45317917",
    formId: "YOUR_FORM_ID_HERE"
  });
</script>
```

Or use the official HubSpot React package for Next.js integration.

---

## Assets to Copy

### Images (copy to `/content/insights/landing-pages/images/`)

| Filename | Used By |
|----------|---------|
| `cornerstone-vertical-graphic.png` | Cornerstone Report |
| `article-dashboards-wont-deliver.png` | Dashboards Won't Deliver |
| `article-dashboards-wont-deliver--thumb.jpg` | Dashboards Won't Deliver |
| `microbusinesses-wp-preview.png` | Rise of Microbusinesses |
| `launch-wp-graphic.png` | Vertical Banking 2025 |
| `wp-launch--thumb.jpg` | Vertical Banking 2025 |
| `connect-white-paper.png` | Connect |
| `connect-white-paper--thumb.png` | Connect |
| `article-core-modernization.png` | Next-Gen Core |
| `article-modern-core-strategy--thumb.jpg` | Next-Gen Core |
| `beyond-dashboards-infographic.png` | Beyond Dashboards Infographic |
| `insights-infographic--thumb.png` | Beyond Dashboards Infographic |
| `Why-Connect-Infographic.webp` | Unlock Data Infographic |
| `why-connect-infographic--thumb.jpg` | Unlock Data Infographic |

### PDFs (copy to `/content/insights/landing-pages/files/`)

| Filename | Used By |
|----------|---------|
| `WP-Nymbus-Connect.pdf` | Connect |
| `article-strategic-advantage-of-a-next-gen-core.pdf` | Next-Gen Core |
| `beyond-dashboards-infographic.pdf` | Beyond Dashboards Infographic |
| `unlock-your-data-unlock-your-vision-infographic.pdf` | Unlock Data Infographic |

---

## Redirects Required

| Old URL | Redirect To |
|---------|-------------|
| `/beyond-dashboards/` | `/lp/dashboards-wont-deliver/` |
| `/2025-belongs-to-vertical-banking-heres-how-to-lead-the-way/` | `/lp/2025-belongs-to-vertical-banking/` |

---

## Implementation Notes

1. **Content Gate Template** — Use the Figma design at node `241-2766` for all 8 pages
2. **Form vs No Form** — Template should conditionally render HubSpot form OR download button based on `formId` presence
3. **Infographic Variant** — Infographic pages show full infographic image with link to related whitepaper LP
4. **Accent Colors** — Some pages have custom accent colors specified in frontmatter
5. **Subtitles** — Some pages have author attribution or subtitle text below the title
