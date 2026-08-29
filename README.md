# KORVA — Artificial Intelligence Studio (Redesign)

A premium, framework-free redesign of the **AI.Tech · Artificial Intelligence HTML Template** (source zip: `source/AiTech.zip`).

> Reimagined as **KORVA**, a fictional applied-AI research and product studio. English / LTR only.

## What changed
The original was a Bootstrap-based HTMLCodex AI template with generic placeholder copy. This rebuild:

- **Drops all frameworks** — pure semantic HTML, hand-written CSS (token-driven design system), vanilla JS. No Bootstrap, no Tailwind, no build step.
- **New brand identity** — "KORVA", an applied-AI studio with its own voice and a distinct visual language.
- **New Design DNA** — dark "research-lab" aesthetic, coral signal accent, Space Grotesk × Manrope, grid/orb motifs, generous motion with purpose.
- **Real, specific copy** — no Lorem Ipsum, no "Elevate/Seamless" filler; believable clients, metrics and engagements.
- **Motion with purpose** — animated hero orb, scroll reveals, count-up stats, all respecting `prefers-reduced-motion`.
- **Accessibility** — semantic landmarks, visible focus, keyboard nav, ARIA on the mobile toggle, reduced-motion support.

## Design DNA (summary)
- **Philosophy:** intelligence that earns its place — outcome-first, owned by the client, honestly scoped.
- **Personality:** Confident · Technical · Honest · Premium.
- **Palette:** near-black `#0A0C12` (bg), surface `#12151F`, ink `#ECEEF4` (text), coral `#FF6B4A` (accent), cool `#6FA8FF` (secondary).
- **Type:** Space Grotesk (display) × Manrope (body).
- **WOW moment:** split hero with an animated concentric "intelligence orb" and a live stat panel.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home — hero, trust marquee, capabilities, approach, stats, work, quote, CTA |
| `about.html` | Studio story, values, team, FAQ |
| `service.html` | Capabilities, evaluation, engagement steps |
| `project.html` | Selected work / case studies |
| `contact.html` | Project form (validated, no `alert()`), contact info |

## Structure
```
ai-studio-html-template/
├─ index.html  about.html  service.html  project.html  contact.html
├─ assets/
│  ├─ css/base.css      # design tokens + components + motion + responsive
│  └─ js/main.js        # nav state, mobile menu, reveals, counters, form
└─ README.md
```

## Run it
Open `index.html` in a browser — no server or install required. Imagery uses seeded `picsum.photos` placeholders; swap `src` values for real photography when available.

## Notes
- Original assets were used for reference only and are **not** copied into this folder.
- The GitHub-Pages automation step described in the project workflow is handled separately (not generated here).
