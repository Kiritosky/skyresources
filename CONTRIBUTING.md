# Contributing to SkyResources

Welcome — and thank you for helping make this better. This guide explains everything you need to know to contribute content, from your very first edit to adding a brand-new page. **You do not need to know React or TypeScript.**

---

## Table of Contents

1. [How the site works](#how-the-site-works)
2. [Quick Start — edit an existing page](#quick-start--edit-an-existing-page)
3. [Adding a new page](#adding-a-new-page)
4. [Frontmatter reference](#frontmatter-reference)
5. [Markdown syntax](#markdown-syntax)
6. [Custom components](#custom-components)
7. [Page structure guidelines](#page-structure-guidelines)
8. [Content standards](#content-standards)
9. [Previewing locally](#previewing-locally)
10. [Submitting a Pull Request](#submitting-a-pull-request)
11. [What NOT to include](#what-not-to-include)

---

## How the Site Works

Every page on SkyResources is driven by a single `.mdx` file in the `content/pages/` directory. The filename becomes the URL:

```
content/pages/skills.mdx     →  skyresources.com/skills
content/pages/fishing.mdx    →  skyresources.com/fishing
content/pages/my-guide.mdx   →  skyresources.com/my-guide
```

**That's it.** When you add or edit a file in `content/pages/`, the site automatically picks it up. No code changes needed.

### What is MDX?

MDX is **Markdown + optional JSX components**. For most contributors, you'll write normal markdown 100% of the time and never touch JSX. But when you need a callout box, warning, or special formatting — you can drop in a `<Tip>` or `<Warning>` tag like you would in HTML.

---

## Quick Start — Edit an Existing Page

1. **Fork** this repo on GitHub (click "Fork" top-right)
2. **Find** the file you want to edit in `content/pages/`
3. **Edit** it — fix a number, add a section, correct outdated info
4. **Update** the `lastUpdated` date in the frontmatter to today
5. **Submit a Pull Request** with a brief description of what changed and why

That's a complete contribution. Most edits take under 10 minutes.

---

## Adding a New Page

Because of how the site is built, adding a page only requires one file:

1. Copy `content/_template.mdx` to `content/pages/<your-slug>.mdx`

   ```
   content/pages/farming.mdx     ← creates /farming
   content/pages/my-guide.mdx    ← creates /my-guide
   ```

2. Edit the frontmatter (title, description, etc.)
3. Write your content
4. Submit a Pull Request

> **No code required.** The site uses a generic route that automatically reads any `.mdx` file you add to `content/pages/`. You do not need to touch `app/`, `components/`, or any TypeScript files.

### Slug Naming Rules

- Lowercase only: `farming` not `Farming`
- Hyphens for spaces: `early-game` not `early_game`
- Short and descriptive: `fishing` not `all-about-fishing-in-skyblock`
- Match existing patterns — look at the other filenames for reference

---

## Frontmatter Reference

Every `.mdx` file must start with a **frontmatter block** — a section between `---` markers that provides metadata about the page.

```yaml
---
title: Skills
description: All 12 SkyBlock skills explained — how to level them and what bonuses they give.
lastUpdated: "2026-04-05"
tags: [skills, xp, farming, mining, combat]
draft: false
---
```

### All Frontmatter Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | ✅ Yes | String | Shown as the large page heading |
| `description` | Recommended | String | Shown under the title in smaller text. Also used for SEO. |
| `lastUpdated` | Recommended | `"YYYY-MM-DD"` | When this page was last reviewed/updated |
| `tags` | Optional | Array of strings | Used for search indexing. Add relevant keywords. |
| `draft` | Optional | `true` / `false` | Set to `true` to hide the page from the live site while you work on it |

### Tips
- Always quote the date: `"2026-04-05"` (not `2026-04-05` without quotes)
- Tags are lowercase and space-separated within the array: `[farming fortune, crops, garden]`
- If you're unsure about content accuracy, set `draft: true` and note it in your PR

---

## Markdown Syntax

The site uses **GitHub Flavored Markdown (GFM)**. If you've written a GitHub README, you already know most of this.

### Headings

```md
## Main Section          ← Large heading with bottom border
### Subsection           ← Medium heading
#### Minor label         ← Small uppercase label
```

> ⚠️ Never use `#` (h1) — the page title already renders as h1. Start with `##`.

---

### Text Formatting

```md
**bold**              ← Use for item names, key terms, important values
*italic*              ← Use for mild emphasis
~~strikethrough~~     ← Use for deprecated or removed content
`inline code`         ← Use for commands, exact values, item IDs
```

Examples:
- `**Hyperion**` → **Hyperion**
- `*approximately*` → *approximately*
- `~~Aspect of the End~~` → ~~Aspect of the End~~
- `` `/warp hub` `` → `/warp hub`

---

### Tables

Write tables with pipe `|` characters. They're automatically styled with borders, hover states, and responsive scrolling.

```md
| Column A | Column B | Notes  |
|----------|----------|--------|
| Row 1    | 100      | Easy   |
| Row 2    | 2,500    | Medium |
| Row 3    | 100,000  | Hard   |
```

**Column alignment** — add colons to the separator row:

```md
| Left     | Center   | Right  |
|:---------|:--------:|-------:|
| text     | text     | 1,000  |
```

**Table best practices:**
- Keep headers short — they render as bold uppercase automatically
- Use commas in large numbers: `1,000,000` not `1000000`
- Sort rows meaningfully (by level, cost, or importance)
- Use `—` for empty cells rather than leaving them blank
- Tables are best for comparisons, stat lists, gear progressions, drop rates

---

### Lists

Unordered (no specific order):
```md
- First item
- Second item
  - Nested item (2-space indent)
  - Another nested
- Back to top level
```

Ordered (sequence matters):
```md
1. First step
2. Second step
3. Third step
```

> Use **ordered lists** for steps that must happen in a specific sequence (setup guides, quest chains). Use **unordered lists** for features, options, or tips.

---

### Links

```md
[Internal page](/skills)                        ← no domain, just the path
[External site](https://wiki.hypixel.net/)      ← full URL, opens in new tab
[COFL price tracker](https://sky.coflnet.com/)  ← descriptive text beats "click here"
```

All external links (starting with `https://`) automatically open in a new browser tab.

---

### Code Blocks

Inline code — wrap with single backticks:
```
`/warp hub`   `/run`   `Legendary`
```

Code block — wrap with triple backticks:
````
```
/warp hub
/sethome
```
````

---

### Blockquotes

```md
> This is a blockquote. Use for a supplemental note that doesn't
> quite warrant a full callout component.
```

Good for: a single sentence of context, a quote, or a low-priority tip.

---

### Horizontal Rules (Dividers)

```md
---
```

Put `---` on its own blank line to add a visual divider between major sections. Use sparingly — 2–4 per page max.

---

## Custom Components

These are the special components available in `.mdx` files. They look like HTML tags and give you richer formatting than plain markdown.

---

### Callout Boxes

Four variants, each with a distinct color and icon. All have an optional `title` prop.

```mdx
<Tip title="Optional Title">
Your tip content here. Markdown works inside: **bold**, `code`, [links](/page).
</Tip>

<Info title="Optional Title">
Neutral extra context that adds value without being a warning.
</Info>

<Warning title="Optional Title">
Something players commonly get wrong or should approach carefully.
</Warning>

<Danger title="Optional Title">
A serious mistake that wastes millions or causes significant setback.
</Danger>
```

| Component | Color | Icon | Use When |
|-----------|-------|------|---------|
| `<Tip>` | Green | 💡 Lightbulb | Pro tips, shortcuts, time-savers |
| `<Info>` | Blue | ℹ️ Info | Context, "did you know", neutral facts |
| `<Warning>` | Gold | ⚠️ Triangle | Common mistakes, things to be careful about |
| `<Danger>` | Red | 🚨 Alert | Costly mistakes, ban risks, serious errors |

**When to use which:**
- Saved yourself 10 minutes? → `<Tip>`
- Adding context someone might ask about? → `<Info>`
- "Most people mess this up" → `<Warning>`
- "This will cost you 50M coins" → `<Danger>`

**Rules:**
- Maximum **2–3 callouts per page** — overusing them dilutes their impact
- The `title` is optional but recommended
- Content inside can contain bold, code, links — anything markdown supports
- Don't nest callouts inside each other

---

### `<Details>` — Collapsible section

Use for FAQs, optional context, or anything that not every reader needs to see.

```mdx
<Details title="Do I need Fairy Souls before dungeons?">
No, but they give free permanent stats that help everywhere. Collect them when
you're passing through an area anyway — they don't require dedicated sessions.
</Details>

<Details title="What's the cheapest way to get 300 MP?" defaultOpen>
Fill your bag with any accessible accessories first — Talismans from the Community
Shop, Rings from the Auction House, etc. MP from cheap Common accessories still counts.
</Details>
```

**Props:**
| Prop | Required | Default | Description |
|------|----------|---------|-------------|
| `title` | ✅ | — | The clickable heading text |
| `defaultOpen` | No | `false` | Set to `true` to start expanded |

> Stack multiple `<Details>` in a row for a clean FAQ section at the bottom of a page.

---

### `<Checklist>` — Task checklist

Use for setup checklists, progression milestones, or "before you start" sections.

```mdx
<Checklist title="Before you start Kuudra">
- Reach 400+ Magic Power
- Have Crimson Isle reputation unlocked
- Bring a full party of 4
- Stock up on Goblin Eggs and fuel
- Make sure your class level is 30+
</Checklist>
```

**Props:**
| Prop | Required | Description |
|------|----------|-------------|
| `title` | No | Optional heading above the checklist |
| children | ✅ | A standard markdown unordered list (`- item`) |

---

### `<TableCard>` — Titled table wrapper

Use when a table needs a title and/or description above it. If you don't need a title, just write a plain markdown table — it gets the same styling automatically.

```mdx
<TableCard title="Money methods comparison" description="Approximate coins/hr at mid-game gear">
| Method | Coins/hr | Setup Cost | Notes |
|--------|---------|-----------|-------|
| Garden | 8M      | 5M        | Relaxing, scales well |
| Mining | 6M      | 15M       | Requires HotM 7+ |
| Dungeons | 5M   | 10M       | Needs a good party |
</TableCard>
```

**Props:**
| Prop | Required | Description |
|------|----------|-------------|
| `title` | ✅ | Shown above the table in bold |
| `description` | No | Shown below the title in smaller text |
| children | ✅ | A standard GFM markdown table |

---

### `<Steps>` — Visual progression timeline

Use for ordered progression paths, upgrade sequences, or quest chains where the order matters and you want a visual timeline (not just a numbered list).

```mdx
{/* Simple string array */}
<Steps title="Slayer progression order" steps={[
  "Zombie T2–T4 — cheapest, great starter XP",
  "Spider T1–T3 — drops Tarantula Boots",
  "Wolf T1–T3 — drops Overflux",
  "Enderman T1–T4 — drops Etherwarp",
]} />

{/* With status markers (done / current / upcoming) */}
<Steps title="Your mining roadmap" steps={[
  { label: "Unlock Dwarven Mines", status: "done" },
  { label: "Reach HotM 4 for Crystal Hollows", status: "current" },
  { label: "Get a Divan's Drill", description: "Upgrade from Titanium DR-X455", status: "upcoming" },
  { label: "Push HotM to 10", status: "upcoming" },
]} />
```

**Props:**
| Prop | Required | Description |
|------|----------|-------------|
| `title` | No | Heading above the timeline |
| `steps` | ✅ | Array of strings **or** objects with `label`, `description?`, `status?` |

**Step object fields:**
| Field | Type | Description |
|-------|------|-------------|
| `label` | string | The step text |
| `description` | string (optional) | Smaller sub-text beneath the label |
| `status` | `"done"` / `"current"` / `"upcoming"` | Visual indicator (defaults to `"upcoming"`) |

---

### `<Stat>` and `<StatRow>` — Stat display cards

Use to highlight key numbers at a glance — coins/hr, setup cost, requirements, etc.

```mdx
{/* Single stat */}
<Stat label="Coins/hr" value="15M" trend="up" note="With budget setup" />

{/* Multiple stats side by side — wrap in StatRow */}
<StatRow>
  <Stat label="Coins/hr" value="15M" trend="up" />
  <Stat label="Setup Cost" value="50M" />
  <Stat label="HotM Req." value="7+" />
  <Stat label="Skill Avg." value="35+" note="Recommended" />
</StatRow>
```

**`<Stat>` props:**
| Prop | Required | Description |
|------|----------|-------------|
| `label` | ✅ | Small uppercase label above the value |
| `value` | ✅ | The big number/text shown prominently |
| `note` | No | Tiny sub-text below the value |
| `trend` | No | `"up"` (green arrow) / `"down"` (red arrow) / `"neutral"` (dash) |

**`<StatRow>`** takes no props — just wrap multiple `<Stat>` inside it.

---

### `<Tabs>` and `<Tab>` — Tabbed content

Use when the same topic has meaningfully different content for different stages, builds, or options. Each `<Tab>` supports full markdown inside it.

```mdx
<Tabs>
  <Tab label="Early Game">
  Use **Hardened Diamond armor** and an **Aspect of the End** sword.
  Focus on leveling Combat to 15 before worrying about accessories.

  | Gear | Source | Cost |
  |------|--------|------|
  | Hardened Diamond | Crafted | ~50k |
  | AotE | Auction House | ~200k |
  </Tab>

  <Tab label="Mid Game">
  Upgrade to **Strong Dragon armor** and a **Livid Dagger** (F5 drop).

  <Tip title="Check your MP first">
  Don't buy gear upgrades until you're at 300+ Magic Power — MP gives more value.
  </Tip>
  </Tab>

  <Tab label="Late Game">
  **Necron's armor** is the standard. Pair with **Hyperion** for Mage or **Juju Shortbow** for Archer.
  </Tab>
</Tabs>
```

**`<Tab>` props:**
| Prop | Required | Description |
|------|----------|-------------|
| `label` | ✅ | Text shown in the tab button |
| children | ✅ | Any markdown content, including tables, callouts, and lists |

**Rules:**
- `<Tab>` must always be a direct child of `<Tabs>` — don't nest them
- Any number of tabs is supported, but 2–4 is most readable
- Full markdown works inside each tab, including tables and callouts

---

### Full Component Reference Table

| Component | Interactive | Best For |
|-----------|:-----------:|---------|
| `<Tip>` | — | Pro tips and shortcuts |
| `<Info>` | — | Extra context and neutral facts |
| `<Warning>` | — | Common mistakes to avoid |
| `<Danger>` | — | Costly or serious mistakes |
| `<Details>` | ✅ | FAQs, collapsible optional content |
| `<Checklist>` | — | Setup lists, milestone checklists |
| `<TableCard>` | — | Tables that need a title/description |
| `<Steps>` | — | Ordered progression paths |
| `<Stat>` | — | Key numbers at a glance |
| `<StatRow>` | — | Multiple stats side by side |
| `<Tabs>` + `<Tab>` | ✅ | Stage-specific or build-specific content |

---

### Component Examples in Context

Here's what good component usage looks like together:

```mdx
## Farming Fortune

Farming Fortune (FF) multiplies your crop drops. At 300 FF you get roughly 4× drops.

<StatRow>
  <Stat label="300 FF" value="~4× drops" trend="up" />
  <Stat label="500 FF" value="~6× drops" trend="up" />
  <Stat label="1000 FF" value="~11× drops" trend="up" note="Endgame" />
</StatRow>

<Tip title="Stack FF from all sources">
Don't just upgrade your hoe — armor, pets, reforges, and garden level all contribute.
The total matters more than any single source.
</Tip>

<TableCard title="Farming Fortune sources" description="Stack all of these">
| Source | FF Bonus |
|--------|---------|
| Farming Skill (each level) | +1 |
| Garden Level (each level) | +5 |
| Blessed Hoe reforge | up to +75 |
| Farming armor set | +100–200 |
</TableCard>

<Warning title="Garden gives 3× farming XP">
Always farm inside your Garden, not your Private Island.
</Warning>

<Details title="Which crop should I farm first?">
Pick whichever you can set up immediately. Carrot and Potato are easy starts.
Once your Farming Fortune is above 300, switch to Pumpkin or Melon for better
Bazaar value.
</Details>
```

---

## Page Structure Guidelines

Good pages follow a consistent structure. Use this as a checklist:

### ✅ Page Structure Checklist

```
---
frontmatter
---

## Overview / What is X?
  One paragraph — what this page covers and who it's for.

[Optional: 1 callout with the most important tip]

---

## Main section
  Explain the core mechanic, system, or topic.

### Subsection
  Break down details.

| Table if comparing things |

---

## Another major section
  ...

---

## Getting Started / Progression Steps
  (if applicable) — an ordered list or mini-guide.

---

## Useful Links
  3–6 relevant external links.
```

### Do's
- **Start with an overview** — don't drop the reader into the middle
- **Use `##` for major sections** that stand alone as topics
- **Put tables before text** when the table is the main content of a section
- **End with Useful Links** — always give the reader somewhere to go next
- **One idea per paragraph** — split long paragraphs

### Don'ts
- ❌ Don't use `#` (h1) — the title already is h1
- ❌ Don't put 5 callouts in a row — space them out
- ❌ Don't write walls of text — tables and lists are easier to skim
- ❌ Don't include exact coin prices — link to COFL instead
- ❌ Don't write "click here" for links — use descriptive text

---

## Content Standards

### Accuracy First
- Only include information you've **personally verified in-game** or sourced from a trusted reference (see [Sources](#sources) below).
- If a number might be outdated, add it in a `<Warning>` or note "as of [Month Year]".
- When in doubt, leave it out and open an issue instead.

### Sources

| Source | Use For |
|--------|---------|
| [Official Hypixel Wiki](https://wiki.hypixel.net/) | Most accurate for mechanics, formulas |
| [Fandom Wiki](https://hypixel-skyblock.fandom.com/) | Drop tables, item stats, history |
| [Hypixel Forums — Patch Notes](https://hypixel.net/forums/skyblock-patch-notes.158/) | What changed and when |
| [Hypixel Forums — SkyBlock](https://hypixel.net/forums/skyblock.157/) | Community guides |
| In-game testing | Best for numbers, formulas, timing |

### Numbers and Data
- Use commas in large numbers: `1,000,000` not `1000000`
- Add "as of [Month Year]" when citing coins/hr or specific drop rates
- Coins/hr estimates should mention setup cost and requirements
- Percentages: write `25%` not `.25`

### Writing Tone
- Write **for a fellow player**, not a beginner tutorial
- Assume the reader knows basic Minecraft but not SkyBlock specifics
- **Short paragraphs** — 2–4 sentences max before a line break
- Active voice: "Do X" not "X should be done"
- Avoid filler: "simply", "just", "obviously", "of course"

---

## Previewing Locally

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/SkyResources.git
cd SkyResources

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes to `.mdx` files in `content/pages/` hot-reload instantly — no rebuild needed.

---

## Submitting a Pull Request

### Before You Submit
- [ ] Updated `lastUpdated` in the frontmatter to today's date
- [ ] Checked spelling (browser spell-check or Grammarly works fine)
- [ ] Verified any numbers/stats are current (check the wiki or in-game)
- [ ] Removed any `draft: true` if the page is ready to publish

### PR Title Format

```
fix: correct Kuudra T4 gear requirements
add: new fishing guide with trophy fish section
update: refresh slayer XP table for 2026 patch
```

### PR Description
Include:
- What you changed and on which page
- Why the change is needed (old info was wrong, new feature added, etc.)
- Source for any new data (wiki link, patch note link, or "tested in-game")

---

## What NOT to Include

| Topic | Why |
|-------|-----|
| Exact item prices | They change every hour — link to COFL instead |
| Exploit or ban-risk methods | Against Hypixel ToS |
| Real-money trading info | Against Hypixel ToS |
| Copied text from other sites | Always paraphrase and credit |
| Unverified numbers | Adds noise, confuses players |
| Opinion without context | "X is trash" — add why, or leave it out |

---

## File Reference

```
SkyResources/
├── content/
│   ├── _template.mdx         ← copy this to start a new page
│   └── pages/
│       ├── skills.mdx        ← edit to update /skills
│       ├── fishing.mdx       ← edit to update /fishing
│       ├── mining.mdx        ← edit to update /mining
│       ├── garden.mdx        ← edit to update /garden
│       ├── dungeons.mdx      ← edit to update /dungeons
│       ├── slayers.mdx       ← edit to update /slayers
│       ├── pets.mdx          ← edit to update /pets
│       ├── accessories.mdx   ← edit to update /accessories
│       ├── enchanting.mdx    ← edit to update /enchanting
│       ├── collections.mdx   ← edit to update /collections
│       ├── money.mdx         ← edit to update /money
│       ├── mayor.mdx         ← edit to update /mayor
│       ├── mods.mdx          ← edit to update /mods
│       ├── tricks.mdx        ← edit to update /tricks
│       ├── shards.mdx        ← edit to update /shards
│       ├── early.mdx         ← edit to update /early
│       ├── mid.mdx           ← edit to update /mid
│       ├── end.mdx           ← edit to update /end
│       ├── kuudra.mdx        ← edit to update /kuudra
│       ├── crimson.mdx       ← edit to update /crimson
│       └── rift.mdx          ← edit to update /rift
├── CONTRIBUTING.md           ← you are here
└── components/
    └── mdx-components.tsx    ← defines all available components
```

---

## Need Help?

- **Open a GitHub Issue** — for questions, suggestions, or reporting outdated info
- **Hypixel SkyBlock Forums** — [hypixel.net/forums/skyblock.157/](https://hypixel.net/forums/skyblock.157/)
- **Hypixel Discord** — [discord.gg/hypixel](https://discord.gg/hypixel)

Thank you for contributing 🎉
