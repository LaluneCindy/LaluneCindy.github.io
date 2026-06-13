# Stitch Prototype Prompt — Personal Website (AI Product Manager)

## Overview

Design a **personal homepage prototype** for an **AI Product Manager**. The site is a portfolio-style personal brand page with six sections. Do **not** include any photos of people or avatar images anywhere on the site — use abstract geometric placeholders, icons, or decorative shapes instead.

---

## Visual Style

**Aesthetic**: Cyberpunk / Glitch — dark, neon, high-tech terminal UI. Think Blade Runner meets a hacker terminal.

**Color Palette**:
- Background: near-black `#0a0a0f`
- Card surface: deep purple-black `#12121a`
- Primary neon accent: electric green `#00ff88`
- Secondary neon: hot magenta `#ff00ff`
- Tertiary neon: cyan `#00d4ff`
- Body text: off-white `#e0e0e0`
- Muted text: `#6b7280`
- Border: `#2a2a3a`

**Typography**:
- Headings: `Orbitron` (geometric, futuristic, ALL CAPS)
- Body / code: `JetBrains Mono` (monospace, terminal feel)

**Visual Signatures**:
- Chamfered / clipped corners on all cards and buttons (45° corner cuts, no rounded corners)
- Neon glow on borders and text (multi-layer box-shadow)
- Subtle scanline overlay across the entire page (CSS horizontal lines repeating)
- Grid / circuit-trace background pattern in hero section
- Chromatic aberration on hero headline (RGB color splitting)
- Blinking cursor animation `_` on subtitle text
- Glitch flicker animation on primary CTA button
- All interactive elements have neon-green hover glow

---

## Layout & Navigation

**Navigation Bar**:
- Fixed position at the **top-left corner** of the screen
- Displays site logo/monogram on the left
- Horizontal nav links (all uppercase monospace): `HOME` · `ABOUT` · `PORTFOLIO` · `AI LAB` · `BLOG` · `CONTACT`
- Active link underlined with neon-green accent line
- Transparent background with slight blur (`backdrop-filter: blur`)
- No hamburger menu needed in prototype

**Scroll Behavior**: Smooth in-page scroll for same-page anchors. External links open in new tab (show `↗` icon).

---

## Page Sections (Six Pages / Screens)

### 1. HOME

**Layout**: Full-viewport hero, then two below-the-fold sections.

**Hero Section**:
- Left side (60%): 
  - Small label: `// INITIALIZING...`
  - Large headline (Orbitron, neon green glow): e.g. `[FIRSTNAME]` on line 1, `[LASTNAME]` on line 2
  - Subtitle with blinking cursor: `AI Product Manager_`
  - Tagline: `Building tomorrow's products with AI, empathy & systems thinking.`
  - Two CTA buttons:
    - Primary (filled neon green): `[ VIEW PORTFOLIO ]`
    - Secondary (outline magenta): `[ CONTACT ME ]`
  - Decorative terminal line below: `> STATUS: ONLINE ██████████ 100%`
- Right side (40%):
  - Abstract HUD / wireframe graphic — geometric hexagons, circuit lines, or ASCII art grid. **No person photo.**
  - Small stat badges floating: e.g. `3+ YRS EXP`, `20+ PROJECTS`, `AI NATIVE`

**Skills Preview** (below hero):
- Section title: `// CORE STACK`
- Horizontal tag pills for skills: `Product Strategy`, `AI/ML Integration`, `Prompt Engineering`, `User Research`, `Data Analysis`, `Roadmapping`, `Agile`, `Figma`, `Python`
- Each pill has a neon-green border and glow on hover

**Featured Projects** (3-column grid):
- Section title: `// SELECTED_WORK`
- Three project cards with chamfered corners, each showing: project code name (uppercase), one-line description, tag badges, and a `[ VIEW → ]` button
- No project screenshots — use a abstract colored pattern or hex grid as the card header

---

### 2. ABOUT

**Layout**: Two-column layout — left bio, right timeline.

**Bio Section** (left):
- Section title: `// ABOUT.exe`
- Large decorative bracket: `{` on the left edge
- Identity tags in neon boxes (inline badges):
  - `PRODUCT MANAGER`
  - `AI ENTHUSIAST`
  - `TECH LEARNER`
  - `CONTINUOUS GROWER`
- Short bio paragraph (monospace text)
- A set of "system stats" displayed like a terminal readout:
  ```
  > ROLE      :: AI Product Manager
  > FOCUS     :: AI-Driven Products
  > LOCATION  :: [City]
  > STATUS    :: Open to opportunities
  ```

**Timeline** (right):
- Section title: `// TIMELINE.log`
- Vertical timeline with neon-green connecting line
- Each entry: Year badge (neon green) + Role / Company + one-line description
- Timeline entries should span from education to current role
- Last entry should be current and show a blinking cursor `|`

---

### 3. PORTFOLIO

**Layout**: Full-width with filter tabs + card grid.

**Filter Bar**:
- Uppercase tab buttons: `ALL` · `AI PRODUCTS` · `DATA TOOLS` · `SIDE PROJECTS`
- Active tab: neon green background, black text
- Inactive: outline style

**Project Grid** (2–3 columns):
- Each card (chamfered corners):
  - Top colored accent bar (alternating neon green / cyan / magenta)
  - Project ID: `PROJECT_001`, `PROJECT_002`, etc.
  - Title (Orbitron, bold)
  - 2-line description
  - Tag row: `[AI]` `[PM]` `[Python]` etc.
  - Bottom row: `[ CASE STUDY ↗ ]` and `[ GITHUB ↗ ]` buttons
- Cards have neon-green border glow on hover

---

### 4. AI LAB

**Layout**: Terminal / command-line aesthetic, full width.

**Hero**:
- Section title: `// AI_LAB :: EXPERIMENTAL`
- Subtitle: `Active research & experiments in AI product design`
- Terminal header bar (macOS-style dots: red, yellow, green) on a dark panel

**Experiment Cards** (list format, not grid):
- Each card styled as a terminal window
- Card header: `user@ai-lab:~$ run experiment_[N]`
- Content: experiment title, status badge (`ACTIVE` / `COMPLETE` / `IN PROGRESS` in different neon colors), short description, tech tags
- Hover: border glow + subtle card lift

**Stats Bar**:
- Horizontal row: `EXPERIMENTS: 12` · `MODELS TESTED: 8` · `PAPERS READ: 40+` · `TOOLS BUILT: 5`
- Each separated by `|` dividers

---

### 5. BLOG

**Layout**: Three-tab category filter + blog card list.

**Category Tabs**: `ALL` · `PRODUCT THINKING` · `AI RESEARCH` · `LIFE NOTES`

**Blog Cards** (full-width list, or 2-column grid):
- Each card (terminal variant — dark background, code-editor header):
  - Category badge (color-coded: green / cyan / magenta)
  - Date: `2024.06.13` (monospace)
  - Title (Orbitron, bold)
  - 2-line excerpt (JetBrains Mono)
  - Reading time: `~5 MIN READ`
  - `[ READ MORE → ]` link button

---

### 6. CONTACT

**Layout**: Split — left contact info, right contact form.

**Left Panel**:
- Section title: `// ESTABLISH_CONNECTION`
- Terminal prompt block:
  ```
  > PING: [your@email.com]
  > SOCIAL: github.com/yourname
  > SOCIAL: linkedin.com/in/yourname
  > TWITTER: @yourhandle
  > RESPONSE TIME: < 24h
  ```
- Small neon-green "ONLINE" indicator dot with pulse animation

**Right Panel — Contact Form**:
- All inputs styled as terminal inputs with `>` prefix
- Fields: `NAME`, `EMAIL`, `SUBJECT`, `MESSAGE` (textarea)
- Submit button: `[ SEND_MESSAGE.exe ]` — neon green fill, glitch animation on hover
- Below submit: `// ENCRYPTION: ACTIVE` label (reassurance micro-copy)

---

## Shared UI Rules

- **No avatar or person photos** anywhere on the site
- All section titles prefixed with `//` in muted color
- All buttons use `[ LABEL ]` bracket notation (uppercase, monospace)
- Cards always use chamfered corner clip-path (no rounded corners)
- Borders glow on hover (neon green unless stated otherwise)
- Page background: `#0a0a0f` throughout, no white sections
- Footer: minimal — monogram | nav links | copyright `© 2024 [NAME] — SYSTEM ONLINE`

---

## Responsiveness

- Mobile: stack all two-column layouts to single column
- Navigation collapses to icon menu on mobile
- Maintain dark theme and neon colors at all breakpoints
- Reduce glow intensity slightly on mobile for performance
