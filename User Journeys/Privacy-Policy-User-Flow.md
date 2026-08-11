# Privacy Policy Page User Flow & Journey

**Source:** Figma Dev Hand-off — Privacy Policy (Node 17:9956)  
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=17-9956  
**Last Updated:** August 11, 2026  
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Scroll Journey](#1-page-overview--scroll-journey)
2. [Section 1: Hero / Page Header](#2-section-1-hero--page-header)
3. [Section 2: Privacy Policy Content](#3-section-2-privacy-policy-content)
4. [Section 3: Footer](#4-section-3-footer)

---

## 1. Page Overview & Scroll Journey

The Privacy Policy page is a single continuous scroll page (1512px wide, ~2044px tall) presenting NYMBUS's privacy and data-use disclosures in a clean, readable long-form text layout. It is a legal/informational page with no interactive components beyond navigation and footer links.

**Target URL:** /privacy-policy/

**Scroll Order (top to bottom):**

| # | Section | Y Position | Purpose |
|---|---------|-----------|---------|
| 1 | Navigation (dark) + Hero Header | 0–460 | Page title with branded gradient background |
| 2 | Privacy Policy Content | 460–1397 | Full privacy policy text body |
| 3 | Footer | 1397–2044 | Site-wide navigation + legal |

---

## 2. Section 1: Hero / Page Header

**Figma Node:** `17:9958` (Section) + `17:9973` (Nav dark)

### Layout
- Full-width dark gradient background (460px tall)
- Dark navigation bar at top (shared Nav dark instance)
- Two vertical accent lines framing content area (x:116 and x:1397, continuing into content section)
- Centered page title

### Navigation Bar

**Figma Node:** `17:9973` (Nav dark instance)

Standard site-wide dark navigation (shared component):

| Element | Content |
|---------|---------|
| Logo | NYMBUS logo (left) |
| Menu Items | Platform, Managed Services, Solutions, AI, Resources (each with dropdown chevron) |
| CTA Buttons | "Try the Demo" (filled/dark) · "Let's move" (outline) |

### Hero Content

1. **H1 Heading**
   - Text: "PRIVACY POLICY"
   - Style: Large uppercase display font, white text
   - Position: Left-aligned within content container (x:260, y:222)

### Background Visual
- Dark radial gradient (blues, purples, warm pink/coral tones)
- Animated organic elliptical light shapes (Ellipse 259–264, 14, 17, 18)
- Noise/grain texture overlay (Noise-Animation frame)
- Gradient bleeds into soft warm tones on the right side

### Interactions

| Trigger | Behavior |
|---------|----------|
| Page load | Background gradient subtly animates (consistent with other pages) |
| Scroll in | Title fades in with ease |

---

## 3. Section 2: Privacy Policy Content

**Figma Node:** `17:9974` (Container)

### Layout
- Centered content container (1140px wide, starting at x:186)
- Left vertical accent line serving as a visual border/rule
- Clean typographic hierarchy: H2 headings + body paragraphs
- Generous vertical spacing between sections (16–32px gaps)
- Content positioned between two vertical decorative lines (Figma Node `17:10168`)

### Content Sections

---

#### Introduction Paragraph

**Figma Node:** `17:9975` (Paragraph)

- Text: "This Privacy Policy explains how NYMBUS uses your name and email information and how NYMBUS tracks visits to its website."
- Style: Body text, standard weight

---

#### Section: Your Information

**Figma Node:** `17:9977` (Heading 2) + `17:9979` (Paragraph)

| Element | Content |
|---------|---------|
| **H2** | "Your Information" |
| **Body** | "When you enter www.nymbus.com you have the opportunity to contact us by entering your name and email address. You may also sign up to receive our newsletters and other communications. We only use your information for the purpose of sending you emails on relevant topics for informational or marketing purposes. You may opt out of these communications at any time by following the instructions contained in our emails. **We will never share your information with any third party at any time.**" |

Note: The final sentence is bold-weight for emphasis.

---

#### Section: Tracking Visits to Our Website

**Figma Node:** `17:9981` (Heading 2) + `17:9983`–`17:9992` (Paragraphs)

| Element | Content |
|---------|---------|
| **H2** | "Tracking Visits to Our Website" |
| **Body ¶1** | "To better understand activity on its website, NYMBUS uses Google Analytics, a service that uses 'cookies' to track anonymous information regarding your activities on www.nymbus.com. This includes information about your visit, including your device type, traffic source and geographic area, as well as pages visited and links clicked. Some behavioral data may be provided by Google 'cookies' that show your gender and age range. This data is used to better understand how visitors access www.nymbus.com and provide a better overall user experience." |
| **Body ¶2** | "NYMBUS also uses pixels on Twitter, LinkedIn and the Adaptive network to track activity on www.nymbus.com, potentially including pages visited and links clicked. This data is used to track the effectiveness of our advertisements, as well as to build remarketing audiences based on actions taken on www.nymbus.com." |
| **Body ¶3** | "NYMBUS takes your privacy seriously and ensures that no personally identifying information is stored in the 'cookies'. To opt out of Google's cookies you can [click here]. To opt out of third party cookies you can [click here]." |
| **Body ¶4 (Bold/Caps)** | "BY VISITING WWW.NYMBUS.COM, YOU ACKNOWLEDGE, UNDERSTAND AND HEREBY AGREE THAT YOU ARE GIVING NYMBUS YOUR CONSENT TO TRACK YOUR ACTIVITIES THROUGH USE OF THESE TRACKING TECHNOLOGIES." |
| **Body ¶5** | "Data Protection Officer (DPO): compliance@nymbus.com" |

---

### Typography & Spacing

| Element | Style |
|---------|-------|
| H2 Headings | Bold, ~20px, dark text |
| Body paragraphs | Regular weight, ~16px, dark grey text |
| Bold emphasis | Used for key legal statements |
| All-caps paragraph | Bold weight, serves as legal acknowledgment/consent statement |
| Email link | Blue/coral colored link text (compliance@nymbus.com) |
| "Click here" links | Blue/coral colored inline links |

### Links Within Content

| Link Text | Destination |
|-----------|-------------|
| "click here" (Google opt-out) | Google Analytics opt-out page (external) |
| "click here" (third-party opt-out) | Third-party cookie opt-out page (external) |
| compliance@nymbus.com | mailto:compliance@nymbus.com |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Content fades in up with ease (global animation) |
| Link hover | Standard link hover state (color shift / underline) |
| Email click | Opens default mail client |

---

## 4. Section 3: Footer

**Figma Node:** `17:9957` (Footer instance)

### Layout
- Standard site-wide footer (shared component)
- Multi-column link grid
- Logo + legal line at bottom

### Navigation Columns

| Platform | Managed Services | Solutions | Resources | Company |
|----------|-----------------|-----------|-----------|---------|
| Core Processing | Contact Center | Core replacement | Insights | About Nymbus |
| Digital Banking | Onboarding | De novo launch | AI | Press |
| Account Opening | Servicing | Vertical brand launches | — | Contact us |
| Connect | Compliance | New lines of business | — | Privacy policy |
| Insights | Fraud | M&A acceleration | — | — |
| Nymbus MCP | Back Office | Private label banking | — | — |
| Fraud Intelligence | Business Banking Support | Sandbox innovation | — | — |
| Levels | Labs | Retail banking | — | — |
| Engage | — | Business banking | — | — |
| — | — | Commercial banking | — | — |

### Footer Bottom

| Element | Content |
|---------|---------|
| Logo | Nymbus chevron mark |
| Copyright | "© 2025 NYMBUS. All rights reserved." |
| Address | 206 N Laura St, 8th & 9th floor, Jacksonville, FL 32202 |
| Phone | +1 (855) 210-7574 |
| Social Icons | LinkedIn, X/Twitter, Flickr |

---

## Appendix: Page Narrative & Positioning

The Privacy Policy page serves a purely informational/legal function. It is not a marketing or conversion page.

| Beat | Message | Purpose |
|------|---------|---------|
| Hero | "PRIVACY POLICY" | Clearly identify page purpose; maintain brand visual continuity |
| Your Information | Data collection practices | Transparency about what data is collected and how it's used |
| Tracking Visits | Cookie and pixel usage | Disclose analytics and remarketing practices |
| Consent Statement | Legal acknowledgment | Establish user consent for tracking technologies |
| DPO Contact | compliance@nymbus.com | Provide direct contact for data protection inquiries |

---

## Appendix: Cross-Page Navigation

| From | CTA | Destination |
|------|-----|-------------|
| Nav | "Try the Demo" | /demo/ |
| Nav | "Let's move" | /contact/ or /get-started/ |
| Nav dropdowns | Platform, Managed Services, Solutions, AI, Resources | Respective section pages |
| Footer | Privacy policy | /privacy-policy/ (current page) |
| Footer | Contact us | /contact/ |
| Footer | About Nymbus | /about/ |
| Content | "click here" (Google) | External Google opt-out |
| Content | "click here" (third-party) | External third-party opt-out |
| Content | compliance@nymbus.com | mailto:compliance@nymbus.com |

---

## Design Notes

1. **Minimal page** — This is one of the simplest pages in the site, with no interactive components, cards, or CTAs beyond standard navigation.
2. **Vertical accent lines** — The two vertical lines (at x:116 and x:1397) continue from the hero into the content area, providing visual framing consistent with other pages.
3. **Responsive considerations** — Content container is 1140px; on smaller viewports the text should reflow naturally with appropriate padding.
4. **Bold consent statement** — The all-caps legal acknowledgment paragraph should maintain its bold, uppercase styling to stand out as a legal notice.
5. **Link styling** — The "click here" links and email address use a colored link style (appears coral/blue) consistent with the site's link treatment.
