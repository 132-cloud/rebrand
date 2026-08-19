# Mobile AI Page User Flow & Journey

**Source:** Figma Dev Hand-off — AI - Mobile (Node 281:7447)
**Figma URL:** https://www.figma.com/design/32bJneBUc02zISrkRKbOBo/Dev-Hand-off?node-id=281-7447
**Last Updated:** August 19, 2026
**Design Lead:** Sarah Schaper

---

## Table of Contents

1. [Page Overview & Mobile Considerations](#1-page-overview--mobile-considerations)
2. [Page Structure & Scroll Journey](#2-page-structure--scroll-journey)
3. [Mobile Navigation Header](#3-mobile-navigation-header)
4. [Section 1: Hero](#4-section-1-hero)
5. [Section 2: Strategy Band — "Agents Are a Task"](#5-section-2-strategy-band--agents-are-a-task)
6. [Section 3: Governed by Design](#6-section-3-governed-by-design)
7. [Section 4: Adopt at Your Pace — Inform / Assist / Do](#7-section-4-adopt-at-your-pace--inform--assist--do)
8. [Section 5: Permissioned Automation — Nymbus MCP](#8-section-5-permissioned-automation--nymbus-mcp)
9. [Section 6: Building the Infrastructure for AI](#9-section-6-building-the-infrastructure-for-ai)
10. [Section 7: Footer CTA](#10-section-7-footer-cta)
11. [Section 8: Footer](#11-section-8-footer)
12. [Mobile Animations & Interactions](#12-mobile-animations--interactions)
13. [User Journey Scenarios](#13-user-journey-scenarios)
14. [Complete URL Map](#14-complete-url-map)
15. [Open Questions](#15-open-questions)

---

## 1. Page Overview & Mobile Considerations

The AI page is a single continuous scroll experience that positions Nymbus AI as governed, permissioned, and production-ready — not experimental. The mobile version adapts the desktop's 1512px wide, ~7112px tall canvas into a 428px wide, ~9432px tall single-column layout.

**Target URL:** /ai/

The page's narrative arc is unchanged from desktop: Trust → Reframe → Differentiate → Adoption model → Technical proof → Close.

### Key Mobile Adaptations

| Desktop Pattern | Mobile Adaptation |
|-----------------|-------------------|
| Two-column text + card layouts | Single column: text above, card/image below |
| Side-by-side Inform/Assist cards (row) | Stacked single-column cards |
| "Do" card: left card + right text | Single column: card then text below |
| Tab/scroll navigation for governance principles | Linear scroll through stacked principles |
| H2 display text (72px+) | H2 display at 42px; H1 at 56px |
| Desktop nav (dark variant) | Mobile hamburger nav (302:8078) |
| Hover states on cards | Tap navigates directly (no hover) |
| Background shader animations | Simplified or static gradients |

---

## 2. Page Structure & Scroll Journey

**Figma Node:** `281:7447` (AI - Mobile)
**Dimensions:** 428 × 9432px

### Scroll Order (top to bottom)

| # | Section | Figma Node | Y Position | Height | Purpose |
|---|---------|------------|-----------|--------|---------|
| 1 | Navigation Header | `302:8078` | 0 | 87 | Sticky hamburger nav |
| 2 | Hero (background) | `281:7665` | 0 | 964 | Animated gradient + stripe BG |
| 3 | Hero content | `281:7735` | 140 | 790 | H1, body, 2 CTA buttons |
| 4 | Strategy Band | `281:7747` | 964 | 511 | "Agents are a task. Not a strategy." |
| 5 | Governed by Design | `281:7448` | 1475 | 1287 | Governance principles + MCP policy widget |
| 6 | Adopt at Your Pace | `281:7503` | 2692 | 3262 | Inform / Assist / Do + platform demo card |
| 7 | Permissioned Automation | `281:7769` | 5954 | 802 | Nymbus MCP section |
| 8 | Building Infrastructure for AI | `281:7751` | 6756 | 774 | Applied AI section |
| 9 | Footer CTA | `281:7787` | 7530 | 825 | Final conversion |
| 10 | Footer | `281:7835` | 8357 | 1075 | Link grid + legal |

---

## 3. Mobile Navigation Header

**Figma Node:** `302:8078` (Nav Mobile)
**Dimensions:** 428 × 87px

See [Mobile-Header-Navigation-User-Flow.md](./Mobile-Header-Navigation-User-Flow.md) for complete documentation.

**Summary:**
- Fixed header, Nymbus logo left, hamburger icon right
- Hamburger opens full-screen menu overlay with accordion sections
- Sticky footer CTAs in menu: "Try demo" + "Let's move"
- On the AI page: dark nav variant consistent with dark hero background

---

## 4. Section 1: Hero

**Figma Node:** `281:7665` (Hero BG) + `281:7735` (Hero content)
**Position:** Y 0–930 (approx)
**Width:** 428px / content 427px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│ [Nav — hamburger]                  │
├────────────────────────────────────┤
│  ┌──────────────────────────────┐  │
│  │ artificial intelligence      │  │  ← Eyebrow pill badge
│  └──────────────────────────────┘  │
│                                    │
│  AI THAT ANSWERS                   │  ← H1, 56px, UPPERCASE, blurred
│  TO PERMISSIONS,                   │     trailing words fade
│  APPROVALS,                        │
│  AND AUDIT.                        │
│                                    │
│  Powered by the industry's first   │  ← Body text
│  secure MCP server.                │
│                                    │
│  ┌────────────────────────────┐    │
│  │     Talk to an expert      │    │  ← Button 5 (secondary / frosted)
│  └────────────────────────────┘    │
│  ┌────────────────────────────┐    │
│  │        Get a demo          │    │  ← Button 6 (primary / black)
│  └────────────────────────────┘    │
└────────────────────────────────────┘
```

### Visual Background Elements

| Element | Description |
|---------|-------------|
| Gradient | Dark animated radial gradient — blues, purples, white |
| Vertical stripes | Group 5 + Group 19 — semi-transparent rounded rectangles |
| Organic ellipses | Group 18 — overlapping ellipse shapes in gradient layer |
| Noise animation | Grain/noise texture overlay on gradient |

### Content Elements

| Ref | Element | Content |
|-----|---------|---------|
| MA-1 | Eyebrow badge | "artificial intelligence" |
| MA-2 | H1 | "AI that answers to permissions, approvals, and audit." |
| MA-3 | Body | "Powered by the industry's first secure MCP server." |
| MA-4 | Button 5 (secondary) | "Talk to an expert" → /contact/ |
| MA-5 | Button 6 (primary) | "Get a demo" → /demo/ |

### Mobile Hero Interactions

| Trigger | Mobile Behavior |
|---------|-----------------|
| Page load | Background gradient subtly animates |
| Scroll | Hero content fades as Strategy Band enters |
| "Talk to an expert" tap | Navigate to /contact/ |
| "Get a demo" tap | Navigate to /demo/ |

### Mobile vs Desktop Differences

| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 size | ~72px+ display | 56px |
| H1 text effect | Partial opacity fade on trailing words | Same blur/fade effect |
| Layout | Centered single column | Centered single column (same) |
| Buttons | Side-by-side row | Stacked (vertical), full-width 300px centered |
| Subtitle | More detailed body copy | Shorter — "Powered by the industry's first secure MCP server." |
| CTA order | "Get a demo" first | "Talk to an expert" first (Button 5), "Get a demo" second (Button 6) |

---

## 5. Section 2: Strategy Band — "Agents Are a Task"

**Figma Node:** `281:7747` (Text)
**Position:** Y 964–1475
**Dimensions:** 428 × 511px

### Layout (Mobile)

Single-column centered text block with 20px horizontal padding.

```
┌────────────────────────────────────┐
│                                    │
│  Agents are a task.                │  ← H2, light weight (55 Roman), muted color
│  Not a strategy.                   │  ← H2, bold (75 Bold), black
│                                    │
│  A model that triages a fraud      │  ← Body, 16px
│  alert or summarizes a loan file   │
│  is useful work. But a collection  │
│  of agents is a collection of      │
│  demos until something connects    │
│  them to your data, your           │
│  approvals, and your core...       │
│                                    │
└────────────────────────────────────┘
```

### Content

| Element | Content |
|---------|---------|
| H2 (light) | "Agents are a task." |
| H2 (bold) | "Not a strategy." |
| Body | "A model that triages a fraud alert or summarizes a loan file is useful work. But a collection of agents is a collection of demos until something connects them to your data, your approvals, and your core. That connective tissue is the hard part of AI in banking, and it's the part Nymbus built." |

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Fade in up with ease |

### Mobile vs Desktop Differences

| Desktop | Mobile |
|---------|--------|
| Two-column: bold headline left + body right | Single column: headline then body stacked |
| Larger headline | Same text at mobile scale |

---

## 6. Section 3: Governed by Design

**Figma Node:** `281:7448` (StrategyBand)
**Position:** Y 1475–2762
**Dimensions:** 428 × 1287px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│  ┌────────────────────────────┐    │
│  │   Governed by Design       │    │  ← Eyebrow pill badge
│  └────────────────────────────┘    │
│                                    │
│  Governed from within,             │  ← H2, 42px, blurred trailing words
│  not bolted on.                    │
│                                    │
│  Our approach brings AI into       │  ← Body, 16px
│  everyday banking workflows...     │
│                                    │
│ ─────────────────────────────────  │  ← Divider
│  Inside your rules.                │  ← Principle 1 (H3 bold, active)
│  Start with answers, not actions.  │    Expanded body text
│  AI surfaces what your team needs, │
│  and acts only within your         │
│  permissions.                      │
│ ─────────────────────────────────  │  ← Divider
│  Explainable by default.           │  ← Principle 2 (H3 muted)
│ ─────────────────────────────────  │  ← Divider
│  Routine handled, exceptions       │  ← Principle 3 (H3 muted)
│  escalated.                        │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  MCP Policy Widget           │  │  ← Permission actions card
│  │  ✓ Waive overdraft fee       │  │    (294:3338)
│  │    Approved                  │  │
│  │  ⚠ Increase wire limit $50K  │  │
│  │    Escalated                 │  │
│  │  ✗ Close account             │  │
│  │    Blocked                   │  │
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

### Header Content

| Element | Content |
|---------|---------|
| Eyebrow | "Governed by Design" |
| H2 | "Governed from within, not bolted on." |
| Body | "Our approach brings AI into everyday banking workflows with the controls and accountability regulated institutions need, whether AI is informing, assisting, or acting on your team's behalf. AI that builds software is different from AI that makes decisions inside it, and we hold that line." |

### Governance Principles (281:7458)

Three principle statements separated by horizontal rule dividers, stacked vertically on mobile. On desktop these are interactive tabs; on mobile they scroll in sequence.

| # | Figma Node | Principle | Body Text (shown below) |
|---|-----------|-----------|------------------------|
| 1 | `281:7460` | **Inside your rules.** | "Start with answers, not actions. AI surfaces what your team needs, and acts only within your permissions." |
| 2 | `281:7462` | Explainable by default. | [Muted — expanded text TBD, see desktop AI-Page-User-Flow §4] |
| 3 | `281:7464` | Routine handled, exceptions escalated. | [Muted — expanded text TBD, see desktop AI-Page-User-Flow §4] |

**Note:** On mobile, only the first principle ("Inside your rules.") shows its expanded body text in the Figma frame. Principles 2 and 3 appear in muted/collapsed style. The mobile design may show all three as always-expanded stacked items (no tab behavior), or the tab interaction is preserved via scroll trigger. [See Open Questions #1]

### MCP Policy Widget (294:3338)

Rounded card container showing a live permissions action feed. Same content as desktop.

| Action | Role + Policy | Status | Badge Color |
|--------|--------------|--------|-------------|
| Waive overdraft fee | Tier 1 Support · Auto-approve under $35 | Approved | Green (#e3fcef / #004a1c text) |
| Increase wire limit to $50K | Tier 1 Support · Requires manager sign-off | Escalated | Yellow (#fffbeb / #ae5802 text) |
| Close account | Tier 1 Support · Not permitted | Blocked | Red (#ffebe6 / #900007 text) |

The "Close account" row renders at 60% opacity (opacity-60 in design).

### Mobile Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Header fades in, then principles and card fade in staggered |
| Principle 1 tap | [URL TBD — may link to /ai/#governed or no-op on mobile] |
| Principle 2 tap | [URL TBD] |
| Principle 3 tap | [URL TBD] |
| Card items | Read-only display — no tap interaction |

### Mobile vs Desktop Differences

| Desktop | Mobile |
|---------|--------|
| Left column: governance principles with tab interaction | Single column: principles scroll in sequence |
| Right column: card graphic that transitions between 3 states | Single card (state 1: Policy widget) — other states not present in mobile frame |
| Active principle expands in-place | Principle 1 expanded, 2 and 3 collapsed/muted |

---

## 7. Section 4: Adopt at Your Pace — Inform / Assist / Do

**Figma Node:** `281:7503` (StrategyBand)
**Position:** Y 2692–5954
**Dimensions:** 428 × 3262px

This is the largest section on the page. Three interactive tier cards stack vertically, each demonstrating a different level of AI autonomy.

### Section Header

| Element | Content |
|---------|---------|
| Eyebrow | "adopt at your pace" |
| H2 | "Inform. Assist. Do. You set the line." |
| Body | "AI adoption isn't all or nothing. Every institution moves at its own pace, and Nymbus works the same at every stage, under the same controls." |

---

### Card 1: INFORM

**Figma Node:** `281:7516` (LinkComponent)
**Position:** Y 0 within section (absolute Y ~3048)
**Card dimensions:** 396 × 675px

#### Layout

```
┌────────────────────────────────────┐
│  [Animated gradient BG + noise]    │
│  ┌──────────────────────────────┐  │
│  │ AI ASSISTANT · READ ONLY     │  │  ← Label
│  │                              │  │
│  │  ┌────────────────────────┐  │  │  ← User message bubble
│  │  │ What happened with the │  │  │
│  │  │ Flores account on      │  │  │
│  │  │ Tuesday?               │  │  │
│  │  └────────────────────────┘  │  │
│  │  Today 11:22 AM              │  │
│  │                              │  │
│  │  ┌────────────────────────┐  │  │  ← AI response bubble
│  │  │ On Tuesday at 2:14pm,  │  │  │
│  │  │ a $4,200 ACH was       │  │  │
│  │  │ returned — account     │  │  │
│  │  │ closed. The original   │  │  │
│  │  │ deposit posted Monday. │  │  │
│  │  │ No action has been     │  │  │
│  │  │ taken on the account   │  │  │
│  │  └────────────────────────┘  │  │
│  │  Today 11:23 AM              │  │
│  │                              │  │
│  │  ─── No action taken · read only ─── │  ← Footer badge
│  └──────────────────────────────┘  │
│                                    │
│  Inform                            │  ← Section label (below card)
│  AI surfaces the answer.           │  ← H3
│  Your team decides.                │
│                                    │
│  Ask a question or research a      │  ← Sub-body
│  transaction. AI explains, and     │
│  takes no action on its own.       │
└────────────────────────────────────┘
```

#### Card Content

| Element | Content |
|---------|---------|
| Card label | "AI ASSISTANT · READ ONLY" |
| User message | "What happened with the Flores account on Tuesday?" |
| Timestamp (user) | Today 11:22 AM |
| AI response | "On Tuesday at 2:14pm, a $4,200 ACH was returned — account closed. The original deposit posted Monday. No action has been taken on the account" |
| Timestamp (AI) | Today 11:23 AM |
| Footer badge | "No action taken · read only" |
| H3 (below card) | "Inform AI surfaces the answer. Your team decides." |
| Sub-body (below card) | "Ask a question or research a transaction. AI explains, and takes no action on its own." |

#### Interactions

| Trigger | Behavior |
|---------|----------|
| Card tap | Navigate to /ai/ (or /ai/#inform) [URL TBD] |
| Scroll in | Card fades in up |
| Card background | Animated gradient with noise overlay |

---

### Card 2: ASSIST

**Figma Node:** `281:7546` (LinkComponent)
**Position:** Y 715 within section (absolute Y ~3763)
**Card dimensions:** 396 × 637px

#### Layout

```
┌────────────────────────────────────┐
│  [Animated gradient BG + noise]    │
│  ┌──────────────────────────────┐  │
│  │ AI DRAFT · PENDING APPROVAL  │  │  ← Label
│  │                              │  │
│  │  ┌────────────────────────┐  │  │  ← Draft card
│  │  │ AI drafted · SAR       │  │  │
│  │  │ Filing · Case #4821    │  │  │
│  │  │                        │  │  │
│  │  │ Activity pattern meets │  │  │
│  │  │ filing threshold.      │  │  │
│  │  │ Recommended: File SAR  │  │  │
│  │  │ with FinCEN.           │  │  │
│  │  └────────────────────────┘  │  │
│  │                              │  │
│  │  [Approve & file] [Edit] [Reject] │  ← Action buttons
│  │  Today 14:11 AM              │  │
│  │                              │  │
│  │  ─── You own the outcome ─── │  │  ← Footer badge
│  └──────────────────────────────┘  │
│                                    │
│  Assist                            │  ← Section label (below card)
│  AI drafts the work.               │  ← H3
│  Your team approves.               │
│                                    │
│  AI prepares the case and          │  ← Sub-body
│  recommends a decision, then       │
│  routes it for sign-off...         │
└────────────────────────────────────┘
```

#### Card Content

| Element | Content |
|---------|---------|
| Card label | "AI DRAFT · PENDING APPROVAL" |
| Draft title | "AI drafted · SAR Filing · Case #4821" |
| Draft body | "Activity pattern meets filing threshold. Recommended: File SAR with FinCEN." |
| Action button 1 | "Approve & file" |
| Action button 2 | "Edit draft" |
| Action button 3 | "Reject" |
| Timestamp | Today 14:11 AM |
| Footer badge | "You own the outcome" |
| H3 (below card) | "Assist AI drafts the work. Your team approves." |
| Sub-body (below card) | "AI prepares the case and recommends a decision, then routes it for sign-off. A person still owns the outcome." |

**Note:** The action buttons (Approve & file / Edit draft / Reject) are part of the visual mockup — they are not interactive CTAs. The entire card taps through as a single link.

#### Interactions

| Trigger | Behavior |
|---------|----------|
| Card tap | Navigate to /ai/ (or /ai/#assist) [URL TBD] |
| Scroll in | Card fades in up |
| Card background | Animated gradient with noise overlay |

---

### Card 3: DO

**Figma Node:** `281:7580` (LinkComponent)
**Position:** Y 1392 within section (absolute Y ~4470)
**Card dimensions:** 396 × 637px

#### Layout

```
┌────────────────────────────────────┐
│  [Animated gradient BG + noise]    │
│  ┌──────────────────────────────┐  │
│  │   AI ACTIVITY · TODAY        │  │  ← Label
│  │                              │  │
│  │  ✓ ACH returns processed     │  │  ← Activity log row
│  │    23 items · 6:12 AM        │  │
│  │                              │  │
│  │  ✓ Positive Pay cleared      │  │
│  │    8 items · 6:14 AM         │  │
│  │                              │  │
│  │  ✓ Closure notices sent      │  │
│  │    412 accounts · 6:31 AM    │  │
│  │                              │  │
│  │  ┌─────────────────────────┐ │  │  ← Escalated item (highlighted)
│  │  │ ! Escalated to you      │ │  │
│  │  │ Wire flagged ·          │ │  │
│  │  │ $340,000 outbound ·     │ │  │
│  │  │ outside cleared...      │ │  │
│  │  │ Today 17:01 AM          │ │  │
│  │  └─────────────────────────┘ │  │
│  │                              │  │
│  │  ─── 47 routine · 1 escalated today ─── │  ← Footer
│  └──────────────────────────────┘  │
│                                    │
│  Do                                │  ← Section label (below card)
│  AI acts on the routine.           │  ← H3
│  Exceptions come to you.           │
│                                    │
│  For the work you've cleared it    │  ← Sub-body
│  to handle, AI acts on routine     │
│  cases and escalates the rest...   │
└────────────────────────────────────┘
```

#### Card Content

| Element | Content |
|---------|---------|
| Card label | "AI ACTIVITY · TODAY" |
| Activity item 1 | ACH returns processed · 23 items · 6:12 AM |
| Activity item 2 | Positive Pay cleared · 8 items · 6:14 AM |
| Activity item 3 | Closure notices sent · 412 accounts · 6:31 AM |
| Escalated item | "Escalated to you" — "Wire flagged · $340,000 outbound · outside cleared [parameters]" · Today 17:01 AM |
| Footer summary | "47 routine · 1 escalated today" |
| H3 (below card) | "Do AI acts on the routine. Exceptions come to you." |
| Sub-body (below card) | "For the work you've cleared it to handle, AI acts on routine cases and escalates the rest, under the permissions your team already controls." |

#### Interactions

| Trigger | Behavior |
|---------|----------|
| Card tap | Navigate to /ai/ (or /ai/#do) [URL TBD] |
| Scroll in | Card fades in up |
| Card background | Animated gradient with noise overlay |

---

### Card 4: Launch Intelligent Digital Banking

**Figma Node:** `281:7649` / `281:7651` (LinkComponent)
**Position:** Y 2069 within section (absolute Y ~5147)
**Dimensions:** 396 × 637px

#### Layout

```
┌────────────────────────────────────┐
│                                    │
│  Launch intelligent digital        │  ← Heading (H3)
│  banking                           │
│                                    │
│  Try the demo →                    │  ← Inline CTA link
│                                    │
│  ┌──────────────────────────────┐  │
│  │                              │  │
│  │  [Platform screenshot image] │  │  ← Nymbus dashboard UI
│  │                              │  │
│  └──────────────────────────────┘  │
│                                    │
│  [External link arrow ↗]           │  ← Top-right corner icon (281:7663)
└────────────────────────────────────┘
```

#### Content

| Element | Content |
|---------|---------|
| Heading | "Launch intelligent digital banking" |
| CTA link | "Try the demo" (with arrow icon) → /demo/ |
| Image | Nymbus digital banking platform screenshot (full-width below heading) |
| External arrow | Top-right corner link indicator |

#### Interactions

| Trigger | Behavior |
|---------|----------|
| Card tap | Navigate to /demo/ |
| "Try the demo" tap | Navigate to /demo/ |
| External arrow tap | Navigate to /demo/ (or open in new tab) |

---

## 8. Section 5: Permissioned Automation — Nymbus MCP

**Figma Node:** `281:7769` (Frame 2085664964)
**Position:** Y 5954–6756
**Dimensions:** 428 × 802px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│                                    │
│  Permissioned Automation           │  ← Eyebrow label (centered)
│                                    │
│  Nymbus MCP, permissioned          │  ← H3, 24px bold (centered)
│  end to end.                       │
│                                    │
│  Nymbus MCP connects AI to real    │  ← Body, 16px (centered)
│  banking data and workflows,       │
│  under permissions, approvals,     │
│  and a full audit trail...         │
│                                    │
│  Try the demo →                    │  ← CTA link (centered, with arrow)
│                                    │
│  ┌──────────────────────────────┐  │
│  │  [Migration card image]      │  │  ← Rounded-rectangle image
│  │  266px tall                  │  │    (nymbus-migration-card@2x 1)
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

### Content

| Element | Content |
|---------|---------|
| Eyebrow | "Permissioned Automation" |
| H3 | "Nymbus MCP, permissioned end to end." |
| Body | "Nymbus MCP connects AI to real banking data and workflows, under permissions, approvals, and a full audit trail. Not a flat file from last night, but a live path to the core, so nothing executes without the sign-off your policy requires." |
| CTA | "Try the demo" → /demo/ |
| Image | Migration card illustration (nymbus-migration-card@2x 1), 396 × 266px |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Fade in up with ease |
| "Try the demo" tap | Navigate to /demo/ |
| Image | Static — no interaction |

### Mobile vs Desktop Differences

| Desktop | Mobile |
|---------|--------|
| Two-column: text left, placeholder card right | Single column: text above, image below |
| Larger heading | H3 at 24px (mobile) |

---

## 9. Section 6: Building the Infrastructure for AI

**Figma Node:** `281:7751` (Frame 2085664963)
**Position:** Y 6756–7530
**Dimensions:** 428 × 774px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│                                    │
│  Building the Infrastructure       │  ← Eyebrow label (centered)
│  for AI                            │
│                                    │
│  From model to banking             │  ← H3, 24px bold (centered)
│  outcome.                          │
│                                    │
│  Applied AI builds the             │  ← Body, 16px (centered)
│  infrastructure that turns         │
│  models into governed,             │
│  operational workflows...          │
│                                    │
│  Book a strategy call →            │  ← CTA link (centered, with arrow)
│                                    │
│  ┌──────────────────────────────┐  │
│  │  [Migration card image]      │  │  ← Rounded-rectangle image
│  │  266px tall                  │  │    (nymbus-migration-card@2x 1)
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

### Content

| Element | Content |
|---------|---------|
| Eyebrow | "Building the Infrastructure for AI" |
| H3 | "From model to banking outcome." |
| Body | "Applied AI builds the infrastructure that turns models into governed, operational workflows, and drives real banking outcomes. It's the integration work that separates AI that changes how a bank operates from AI that only demos well." |
| CTA | "Book a strategy call" → /contact/ |
| Image | Migration card illustration (nymbus-migration-card@2x 1), 396 × 266px |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Fade in up with ease |
| "Book a strategy call" tap | Navigate to /contact/ |
| Image | Static — no interaction |

### Mobile vs Desktop Differences

| Desktop | Mobile |
|---------|--------|
| Two-column: card visual left, text right | Single column: text above, image below |
| Desktop CTA text was "Let's move →" | Mobile CTA is "Book a strategy call →" |
| Desktop shows debit card visual | Mobile shows migration card image |

---

## 10. Section 7: Footer CTA

**Figma Node:** `281:7787` (Frame 2147238611)
**Position:** Y 7530–8355
**Dimensions:** 428 × 825px

### Layout (Mobile)

```
┌────────────────────────────────────┐
│  [Dark gradient + stripe BG]       │
│  (same visual language as Hero)    │
│                                    │
│                                    │
│  [Heading — large display text]    │  ← 281:7830 (text node — see Open Q #2)
│  (multiline, 240px tall)           │
│                                    │
│  ┌────────────────────────────┐    │
│  │    [Primary CTA button]    │    │  ← Button 5, 300×43px (centered)
│  └────────────────────────────┘    │
│                                    │
└────────────────────────────────────┘
```

### Content

| Element | Content |
|---------|---------|
| Background | Dark gradient + stripe overlay (matches Hero) |
| Heading | [VERIFY IN FIGMA — node 281:7830 name suggests "The Next-Generation Banking Platform" but desktop AI version reads "AI YOUR INSTITUTION CAN PUT INTO PRODUCTION." — confirm which is correct for mobile] |
| CTA Button | [Button label TBD — verify component] → /demo/ or /contact/ |

### Interactions

| Trigger | Behavior |
|---------|----------|
| Scroll in | Text fades in up |
| Background | Gradient subtly animates |
| CTA tap | Navigate to /demo/ or /contact/ |

---

## 11. Section 8: Footer

**Figma Node:** `281:7835` (Mobile Footer Ad instance)
**Position:** Y 8357–9432
**Dimensions:** 428 × 1075px

### Layout (Mobile)

Two-column link grid, consistent with site-wide mobile footer.

```
┌────────────────────────────────────┐
│  [Nymbus logo]                     │
│                                    │
│  Platform          Managed Services│
│  ─────────         ────────────────│
│  Core Processing   Contact Center  │
│  Digital Banking   Onboarding      │
│  Account Opening   Servicing       │
│  Connect           Compliance      │
│  Insights          Fraud           │
│  Nymbus MCP        Back Office     │
│  Fraud Intelligence Business Banking│
│  Levels             Support        │
│  Engage            Labs            │
│                                    │
│  Solutions         Resources       │
│  ─────────         ────────────────│
│  Core replacement  Insights        │
│  De novo launch    AI              │
│  Vertical brand                    │
│  launches          Company         │
│  New lines of      ────────────────│
│  business          About Nymbus    │
│  M&A acceleration  Press           │
│  Private label     Contact us      │
│  banking           Privacy policy  │
│  Sandbox innovation                │
│  Retail banking                    │
│  Business banking                  │
│  Commercial banking                │
│                                    │
│ ─────────────────────────────────  │
│  © 2026 NYMBUS, All rights reserved│
│  208 N Laura St, 8th & 9th floor,  │
│  Jacksonville, FL 32202            │
│  +1 (855) 210-7874                 │
│  [LinkedIn] [X] [Social icon]      │
└────────────────────────────────────┘
```

### Navigation Columns

#### Column 1 (left): Platform
| Link | Destination |
|------|-------------|
| Core Processing | /platform/#core-processing |
| Digital Banking | /platform/#digital-banking |
| Account Opening | /platform/#account-opening |
| Connect | /platform/#connect |
| Insights | /platform/#insights |
| Nymbus MCP | /ai/#nymbus-mcp |
| Fraud Intelligence | /platform/#fraud-intelligence |
| Levels | /platform/#levels |
| Engage | /platform/#engage |

#### Column 2 (right): Managed Services
| Link | Destination |
|------|-------------|
| Contact Center | /managed-services/#contact-center |
| Onboarding | /managed-services/#onboarding |
| Servicing | /managed-services/#servicing |
| Compliance | /managed-services/#compliance |
| Fraud | /managed-services/#fraud |
| Back Office | /managed-services/#back-office |
| Business Banking Support | /managed-services/#business-banking |
| Labs | /labs/ |

#### Column 1 (left, lower): Solutions
| Link | Destination |
|------|-------------|
| Core replacement | /solutions/primary-core/ |
| De novo launch | /solutions/primary-core/#de-novo |
| Vertical brand launches | /solutions/parallel-core/ |
| New lines of business | /solutions/ |
| M&A acceleration | /solutions/ |
| Private label banking | /solutions/ |
| Sandbox innovation | /labs/ |
| Retail banking | /solutions/#retail |
| Business banking | /solutions/#business |
| Commercial banking | /solutions/#commercial |

#### Column 2 (right, lower): Resources + Company
| Link | Destination |
|------|-------------|
| **Resources** | |
| Insights | /insights/ |
| AI | /ai/ |
| **Company** | |
| About Nymbus | /about/ |
| Press | /press/ |
| Contact us | /contact/ |
| Privacy policy | /privacy-policy/ |

### Footer Bottom Bar
| Element | Content |
|---------|---------|
| Copyright | © 2026 NYMBUS, All rights reserved. |
| Address | 208 N Laura St, 8th & 9th floor, Jacksonville, FL 32202 |
| Phone | +1 (855) 210-7874 |
| Social icons | 3 icons (LinkedIn, X/Twitter, and one additional) |

---

## 12. Mobile Animations & Interactions

### Animation Adaptations for Mobile

| Desktop Animation | Mobile Adaptation |
|-------------------|-------------------|
| Scroll reveal — fade in up | Simplified fade-in (reduced transform distance) |
| Background gradient animation | Maintained — same CSS gradient animation |
| Vertical stripe overlay | Static — no animation |
| Organic ellipse float | Static or reduced on mobile |
| Grain/noise texture | Maintained — same CSS overlay |
| Card gradient animate on hover | Removed — card taps through directly |
| Governance principle tab switch | Linear scroll — no tab switching |
| Right-column card transition (desktop variants) | Only state 1 shown — no transitions |

### Mobile Card Behavior

All three Inform / Assist / Do cards are tap-through links on mobile — there is no hover expand or intermediate state. The action buttons inside the Assist card (Approve & file / Edit draft / Reject) are part of the visual mockup only and are not individually tappable.

### Touch Targets

| Element | Visual Size | Touch Target |
|---------|-------------|--------------|
| Hamburger menu | 24×24px | 44×44px (with padding) |
| CTA buttons (Hero) | 300×45px | Full button area |
| CTA link ("Try the demo") | ~95×22px | 44px height minimum |
| Inform / Assist / Do cards | 396px wide | Full card area |
| Footer links | 20px height text | 44px height minimum |

### H1/H2 Blur Effect

The hero H1 and section H2 headings use a foreground blur effect (`blur: 2.5–4.6px`) that creates an opacity/focus fade on trailing words. This should be implemented as a CSS blur or opacity gradient — not removed on mobile.

---

## 13. User Journey Scenarios

### Scenario MAI-1: Land on AI Page — View Hero

| Step | Detail |
|------|--------|
| **GIVEN** | User taps an AI-related link from another page or direct URL |
| **WHEN** | Mobile AI page loads |
| **THEN** | Hero section is visible with eyebrow, H1, body, and two CTAs |

**Acceptance Criteria:**
1. Dark gradient background renders with animated motion
2. H1 "AI that answers to permissions, approvals, and audit." renders with blur/fade effect on trailing words
3. "Talk to an expert" button (secondary/frosted) renders above "Get a demo" (primary/black)
4. Both buttons are 300px wide, centered, 44px+ touch height

---

### Scenario MAI-2: Tap "Get a Demo"

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the Hero section |
| **WHEN** | User taps "Get a demo" (Button 6) |
| **THEN** | User navigates to /demo/ |

**Acceptance Criteria:**
1. Button tap shows visual feedback
2. Navigation to /demo/
3. Page loads at top

---

### Scenario MAI-3: Tap "Talk to an Expert"

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the Hero section |
| **WHEN** | User taps "Talk to an expert" (Button 5) |
| **THEN** | User navigates to /contact/ |

**Acceptance Criteria:**
1. Button tap shows visual feedback
2. Navigation to /contact/

---

### Scenario MAI-4: Scroll Through Governance Principles

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to "Governed by Design" section |
| **WHEN** | User reads through the three principles |
| **THEN** | All three principles are visible in stacked order with dividers between them |

**Acceptance Criteria:**
1. Principle 1 "Inside your rules." renders with expanded body text
2. Principle 2 "Explainable by default." and Principle 3 "Routine handled, exceptions escalated." render in muted style
3. MCP Policy widget card renders below, showing all 3 action rows
4. Green / yellow / red status badges render correctly
5. Section fades in as it enters the viewport

---

### Scenario MAI-5: View MCP Policy Widget

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the "Governed by Design" section |
| **WHEN** | User views the MCP Policy widget card |
| **THEN** | Three policy action rows are visible with correct status colors |

**Acceptance Criteria:**
1. "Waive overdraft fee" row shows "Approved" badge (green #e3fcef background)
2. "Increase wire limit to $50K" row shows "Escalated" badge (yellow #fffbeb background)
3. "Close account" row shows "Blocked" badge (red #ffebe6 background) at 60% opacity
4. Widget is read-only — no tap actions on individual rows

---

### Scenario MAI-6: Scroll Through Inform / Assist / Do Cards

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to "Adopt at Your Pace" section |
| **WHEN** | User scrolls through all three tier cards |
| **THEN** | Inform → Assist → Do cards load in sequence, each with animated gradient background |

**Acceptance Criteria:**
1. Each card fades in on scroll entry
2. Each card's gradient background animates subtly
3. Label, heading, and body text below each card are readable
4. Cards do not show hover states — they are tap-through only

---

### Scenario MAI-7: Tap an Inform / Assist / Do Card

| Step | Detail |
|------|--------|
| **GIVEN** | User is viewing the Inform card |
| **WHEN** | User taps anywhere on the card |
| **THEN** | User navigates to the card's destination |

**Acceptance Criteria:**
1. Full card area is tappable
2. Navigation occurs to the correct destination URL
3. No intermediate state / no expand behavior

---

### Scenario MAI-8: Tap "Try the Demo" (Platform Card)

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to the "Launch intelligent digital banking" card at bottom of Section 4 |
| **WHEN** | User taps "Try the demo" or the card itself |
| **THEN** | User navigates to /demo/ |

**Acceptance Criteria:**
1. "Try the demo" link is tappable (minimum 44px touch height)
2. Navigation to /demo/

---

### Scenario MAI-9: Tap "Try the Demo" (Permissioned Automation section)

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to the Nymbus MCP section |
| **WHEN** | User taps "Try the demo →" inline CTA link |
| **THEN** | User navigates to /demo/ |

**Acceptance Criteria:**
1. Link tap shows feedback
2. Navigation to /demo/

---

### Scenario MAI-10: Tap "Book a Strategy Call"

| Step | Detail |
|------|--------|
| **GIVEN** | User scrolls to "Building the Infrastructure for AI" section |
| **WHEN** | User taps "Book a strategy call →" |
| **THEN** | User navigates to /contact/ |

**Acceptance Criteria:**
1. Link tap shows feedback
2. Navigation to /contact/

---

### Scenario MAI-11: Scroll Full Page Top to Bottom

| Step | Detail |
|------|--------|
| **GIVEN** | User lands on /ai/ on mobile |
| **WHEN** | User scrolls from top to bottom |
| **THEN** | All 8 sections render and animate into view correctly |

**Acceptance Criteria:**
1. Sections fade in as they enter viewport (global scroll-triggered animation)
2. Animated gradient backgrounds play in Hero, Footer CTA, and Inform/Assist/Do cards
3. Mobile nav remains fixed/sticky throughout scroll
4. No layout shift or janky scrolling
5. Footer renders at bottom with full link grid

---

## 14. Complete URL Map

| Section | Element | Destination |
|---------|---------|-------------|
| Hero | "Talk to an expert" button | /contact/ |
| Hero | "Get a demo" button | /demo/ |
| Inform card | Card (display-only) | N/A — no navigation |
| Assist card | Card (display-only) | N/A — no navigation |
| Do card | Card (display-only) | N/A — no navigation |
| Platform card | "Try the demo" / card tap | /demo/ |
| Permissioned Automation | "Try the demo" | /demo/ |
| Infrastructure for AI | "Book a strategy call" | /contact/ |
| Footer CTA | Primary CTA button | /demo/ or /contact/ [TBD] |
| Footer | Core Processing | /platform/#core-processing |
| Footer | Digital Banking | /platform/#digital-banking |
| Footer | Account Opening | /platform/#account-opening |
| Footer | Connect | /platform/#connect |
| Footer | Insights (Platform) | /platform/#insights |
| Footer | Nymbus MCP | /ai/#nymbus-mcp |
| Footer | Fraud Intelligence | /platform/#fraud-intelligence |
| Footer | Levels | /platform/#levels |
| Footer | Engage | /platform/#engage |
| Footer | Contact Center | /managed-services/#contact-center |
| Footer | Onboarding | /managed-services/#onboarding |
| Footer | Servicing | /managed-services/#servicing |
| Footer | Compliance | /managed-services/#compliance |
| Footer | Fraud | /managed-services/#fraud |
| Footer | Back Office | /managed-services/#back-office |
| Footer | Business Banking Support | /managed-services/#business-banking |
| Footer | Labs | /labs/ |
| Footer | Core replacement | /solutions/primary-core/ |
| Footer | De novo launch | /solutions/primary-core/#de-novo |
| Footer | Vertical brand launches | /solutions/parallel-core/ |
| Footer | New lines of business | /solutions/ |
| Footer | M&A acceleration | /solutions/ |
| Footer | Private label banking | /solutions/ |
| Footer | Sandbox innovation | /labs/ |
| Footer | Retail banking | /solutions/#retail |
| Footer | Business banking | /solutions/#business |
| Footer | Commercial banking | /solutions/#commercial |
| Footer | Insights (Resources) | /insights/ |
| Footer | AI | /ai/ |
| Footer | About Nymbus | /about/ |
| Footer | Press | /press/ |
| Footer | Contact us | /contact/ |
| Footer | Privacy policy | /privacy-policy/ |

---

## 15. Open Questions (All Resolved)

All questions have been confirmed and resolved:

| # | Question | Resolution |
|---|----------|-----------|
| 1 | Governance Principle tabs on mobile | ✅ RESOLVED: **Tap to expand**. Each principle is tappable — tap expands/collapses the body text below. Only one principle open at a time (accordion behavior). |
| 2 | Footer CTA heading | ✅ RESOLVED: **"AI YOUR INSTITUTION CAN PUT INTO PRODUCTION."** — matches desktop AI page. The Figma node name was misleading. |
| 3 | Footer CTA button label | ✅ RESOLVED: **"Get a demo"** — consistent with desktop. |
| 4 | Inform / Assist / Do card destination URLs | ✅ RESOLVED: **Display-only, no tap action**. Cards are informational — they do not navigate anywhere. |
| 5 | Desktop CTA discrepancy ("Let's move" vs "Book a strategy call") | ✅ RESOLVED: **Intentional difference**. "Book a strategy call" is the correct mobile CTA — more direct conversion language for mobile context. |
| 6 | Governance principles 2 and 3 body text | ✅ RESOLVED: **Include all body text**. All three principles have body text that is revealed on tap. Body text for Principles 2 and 3: Principle 2 "Explainable by default." → "Every decision is logged, searchable, and auditable, built for the scrutiny a regulator brings." Principle 3 "Routine handled, exceptions escalated." → "AI handles the routine and escalates the rest, always with a person on exceptions." |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | August 19, 2026 | Initial mobile AI page document | Kiro |
