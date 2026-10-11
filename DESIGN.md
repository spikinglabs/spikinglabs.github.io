# Spiking Labs design kit

**Concept: the neuron.** Spiking Labs is named after spiking neurons, so the site behaves like one instrument panel: quiet baseline, sharp signal. The hero runs a live leaky integrate-and-fire neuron (`components/Neuron.astro`); moving the pointer injects current and makes it fire faster. Everything else stays calm so that one moving thing carries the page.

## Tokens (`src/styles/global.css`, mapped in `tailwind.config.mjs`)

| Token | Light | Dark | Use |
| :-- | :-- | :-- | :-- |
| `canvas` | warm paper `#F4F2EC` | ink `#0A0B10` | page background |
| `panel` | white | `#12141C` | cards |
| `ink` | `#0A0B10` | `#ECEEE6` | text, borders on hover |
| `muted` | `#5C5F6A` | `#8E92A0` | secondary text |
| `line` | ink | white | always used with alpha: `border-line/10` |
| `accent` | lime `#B9FF66` | same | **fills only** (buttons, LED, headline underline). Never body text on paper |
| `onaccent` | ink | ink | text on accent |

Theme follows the OS and can be overridden with the toggle in the nav (stored in `localStorage` as `sl-theme`).

## Type

- **Space Grotesk** for display and body. `.display` (hero, up to 100px) and `.h2` are fluid `clamp()` sizes with tight tracking.
- **JetBrains Mono** for labels: `.eyebrow` (11px, uppercase, wide tracking), indices (`N–01`, `R–01`), readouts.

## Components

| Component | Purpose |
| :-- | :-- |
| `Layout.astro` | `<head>`, SEO (canonical, Open Graph, JSON-LD), theme bootstrap, scroll reveal. Props: `title`, `description`, `image`, `noindex` |
| `Nav`, `Footer`, `Logo` | Chrome. Links come from `site.json` |
| `Hero`, `Neuron` | Home hero and the live neuron canvas (pauses off-screen, static when `prefers-reduced-motion`) |
| `ProductCard` | Product tile: index, status LED, spike glyph that draws on hover |
| `SectionHead`, `CtaBand`, `SpikeRule` | Section heading, closing call-to-action, decorative spike-raster divider |
| `Container` | `max-w-site` (1200px) with responsive gutters |

Utility classes: `.btn-primary`, `.btn-ghost`, `.panel`, `.led` (`.led-live`, `.led-soon`), `.grid-bg`, `.mark`. Add `data-reveal` to any element to fade it in on scroll.

## Rules

1. One accent, used as a fill. One moving hero element.
2. Hairline borders (`line/10`) and whitespace instead of drop shadows.
3. Mono for machine-ish information, grotesk for everything a person reads.
4. Respect `prefers-reduced-motion`; content must be readable without JS.
5. Light and dark must both pass WCAG AA.

The CityKlub legal pages render inside a white `.paper` surface in both themes so the long legal text keeps its original styling.
