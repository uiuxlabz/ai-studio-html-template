# KORVA — AI Studio & Machine Intelligence Website Template

A premium, framework-free HTML/CSS/vanilla-JS template for AI studios, machine learning consultancies, and intelligent automation companies. Built bespoke from the subject — not a recolored scaffold.

**Live preview:** `index.html` (open in browser)
**Stack:** HTML5 · CSS3 (custom properties, Grid, Flex) · Vanilla JS (no build step)
**Fonts:** Sora (display) · Inter (body) · JetBrains Mono (labels/data) — all via Google Fonts
**License:** MIT — use commercially, modify freely.

---

## Pages

| Page | Description | Link |
|------|-------------|------|
| **Home** | Live status bar, terminal hero with prompt animation, eval ticker (scrolling model statuses), readout stats (4 cells), 6 capability cards, architecture phases (12-col grid), feature split, 3 case studies, benchmark table, testimonials, CTA | [index.html](index.html) |
| **About** | Page head, readout stats, company story, 4 operating principles, team cards, CTA | [about.html](about.html) |
| **Services** | 6 detailed capabilities (Custom ML, Computer Vision, NLP, MLOps, Data Engineering, Edge AI) in alternating splits, 3 engagement models (Prototype/Production/Retainer), CTA | [service.html](service.html) |
| **Case Studies** | 3 deep-dive case studies with metrics (accuracy, latency, ROI), full deployment log table, CTA | [project.html](project.html) |
| **Contact** | Brief submission form with project type + domain + budget selects, inline validation, info cards | [contact.html](contact.html) |

---

## Design Distinction

**This template was authored fresh for an AI studio / ML consultancy subject and diverges from every sibling template on all 6 divergence axes:**

| Axis | KORVA (this template) | Sibling templates (MERIDIAN, SOURA, AERION, VOSSEN, OLIVO) |
|------|----------------------|------------------------------------------------------------|
| **Hero composition** | Terminal prompt: dark bg with scan-line overlay, monospace command prompt with blinking cursor, eval ticker scrolling model statuses below. Hero reads like a development terminal. | MERIDIAN: newspaper masthead + ticker. SOURA: vertical ledger + glass vessel. AERION: thermostat gauge panel. Others: split headline + image. |
| **Layout grammar** | Instrument console grammar: `.statusbar` (live pulse) → `.hero-terminal` (prompt) → `.eval-ticker` (scrolling data) → `.readouts` (data band) → `.services-grid` (capability modules) → `.arch-grid` (12-col phases) → `.bench-table` (readout). Content reads like an AI system monitoring dashboard. | MERIDIAN: broadsheet multi-column feed. SOURA: vertical ledger + tasting-sheet. AERION: control panel + gauge. Others: alternating section-stack bands. |
| **Typography personality** | **Sora** (display, geometric tech) + **Inter** (body, clean neutral) + **JetBrains Mono** (labels, code, model metrics). Terminal voice — precise, data-driven, technical. | MERIDIAN: Fraunces/Newsreader (newspaper). SOURA: Fraunces/DM Sans (sommelier). AERION: Barlow Condensed/Inter (industrial). Others: Space Grotesk/Cormorant + Nunito/Jost. |
| **Color logic** | AI lab palette: dark graphite (`--bg`), signal amber (`--amber`), pass green (`--pass`), fail red (`--fail`), cyan + violet accents. 2 signal axes (pass/fail) + amber attention. Not a brand ramp — status/signal reasoning. | MERIDIAN: newsprint paper + kicker-red. SOURA: spring teal + glacier. AERION: cool blue + warm orange. Others: `--primary` brand ramp + neutral ramp. |
| **Motion signature** | Scan/pulse: `.eval-ticker` (horizontal scroll), `.pulse-live` (status dot), `.cursor` (blink), `.reveal` (18px translateY). Motion reads like system activity — ticker means data flowing, pulse means online. | MERIDIAN: clip-path type-set wipe. SOURA: pour-line + bead-pop. AERION: gauge needle tick. Others: generic opacity + translateY. |
| **Section inventory** | Status bar → Terminal hero (prompt) → Eval ticker → Readouts band → Capability grid → Architecture phases (12-col) → Feature split → Case studies → Benchmark table → Testimonials → FAQ → CTA → Footer. | MERIDIAN: Topbar → Ticker → Masthead → Feed → Rail. SOURA: Micro-bar → Ledger → Proof → Catalogue. AERION: Statusbar → Gauge → Readouts → Service grid → Emergency. |

**Bottom line:** Strip the colors from KORVA and any sibling — they share **zero** layout grammar, component set, or motion vocabulary. This reads as an AI system monitoring console, not a marketing site.

---

## Features

- **Live status bar** — pulse-dot animated "ALL SYSTEMS NOMINAL" indicator
- **Terminal hero** — command prompt with blinking cursor, scan-line overlay
- **Eval ticker** — scrolling model status feed (pass/fail/training states)
- **Readout stats** — 4-cell data band with count-up animation
- **Capability grid** — 6 service modules with icon, amber top-bar
- **Architecture phases** — 12-column responsive grid with timeline tags
- **Benchmark table** — model performance log with pass/fail/training status
- **Case studies** — 3 deep-dives with metrics (accuracy, latency, ROI)
- **Testimonials** — 3-column cards with star ratings
- **Pricing** — 3 engagement models (Prototype/Production/Retainer) with featured highlight
- **FAQ accordion** — expandable items with +/- toggle
- **CTA band** — dual-action (start project + view case studies)
- **Contact form** — project type + domain + budget selects, inline validation, no `alert()`
- **Scroll reveals** — IntersectionObserver with staggered delays (`.d1`…`.d4`)
- **Count-up animation** — stats count from 0 to target on scroll
- **Active nav** — auto-highlight via `location.pathname`
- **Footer year** — `[data-year]` auto-fills current year
- **Reduced motion** — `@media (prefers-reduced-motion)` disables all animation
- **Original imagery** — 9 source images from AiTech (`assets/img/`): `hero-img.png`, `about-img.jpg`, `project-1/2/3.jpg`, `bg-hero.png`, `bg-about-img.png`, `footer.png`, `AiTech.jpg`

---

## Quick Start

```bash
# No install, no build — just open
open index.html
# or serve locally
npx serve .
```

---

## File Structure

```
ai-studio-html-template/
├── index.html          # Home page
├── about.html          # About / Team
├── service.html        # Services / Capabilities
├── project.html        # Case Studies
├── contact.html        # Contact / Start a Project
├── assets/
│   ├── css/
│   │   └── base.css    # Bespoke design system (~480 lines)
│   ├── js/
│   │   └── main.js     # Bespoke interactions (~110 lines)
│   └── img/            # 9 original AiTech images
└── README.md           # This file
```

---

## Customization

- **Colors:** Edit `:root` tokens in `assets/css/base.css` — `--amber` (signal), `--pass` (green), `--fail` (red), `--bg` (graphite), `--cyan`, `--violet`
- **Fonts:** Swap Google Fonts `<link>` in each HTML `<head>` and update `--font-display/--font-body/--font-mono`
- **Capabilities:** Add/remove `.service-card` items in the `.services-grid` on each page
- **Benchmarks:** Edit `.bench-table` rows — model names, metrics, scores, statuses
- **Case Studies:** Duplicate `.feature` blocks in `project.html`, change images/results/metrics
- **Eval Ticker:** Edit the `.ticker-track` content — model names, statuses, scores

---

## Browser Support

Modern evergreen browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+).
Graceful degradation: CSS custom properties, Grid, Flex, `clamp()`, `IntersectionObserver` — all polyfillable if needed.

---

## Credits

- **Images:** Original AiTech source assets (included in `assets/img/`)
- **Fonts:** Sora (Mathieu Triay), Inter (Rasmus Andersson), JetBrains Mono (JetBrains) — all SIL OFL via Google Fonts
- **Icons:** Inline Unicode (◆ 👁 💬 ⚡ 📊 📱 ✓ ✗) — no icon font dependency

---

Let's Build Something Together 🚀
https://tally.so/r/q4q1L9
