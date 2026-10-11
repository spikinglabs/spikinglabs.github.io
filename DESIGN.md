# Spiking Labs design kit

**Concept: the neuron.** Spiking Labs is named after spiking neurons, so the site behaves like one instrument panel: quiet baseline, sharp signal. The hero runs a live leaky integrate-and-fire neuron (`components/Neuron.astro`); moving the pointer injects current and makes it fire faster. Everything else stays calm so that one moving thing carries the page.

**Live kit:** run the site and open `/kit` (not linked, not indexed). Change accent, surface tone, fonts, weight, card radius and control shape, see every specimen update, then copy the token export.

## Logo

A neuron's action potential (rest, sharp spike, dip, recovery) drawn as one line inside a ring (the cell body), with the lime dot on the spike where the neuron fires, plus the Space Grotesk wordmark converted to outlines (`spiking` in ink, `labs` at 55% opacity). One line weight throughout. Files are in `public/logo/` (lockups, mark, app-icon tile, PNG icons); `favicon.svg` is the tile. In templates use `<Logo />` (`mark` prop for the mark alone, `mono` for one colour). The geometry lives in `src/data/logo.json`. The bare action-potential trace without the ring is shown in `/kit` for comparison. Minimum size: mark 16px, lockup 110px wide; clear space a quarter of the mark's height.

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
| `radius-card` | 16px | | cards, panels, inputs (`rounded-card`) |
| `radius-ctl` | 999px | | buttons, chips, pills (`rounded-ctl`) |
| `font-display` / `font-mono` | Space Grotesk / JetBrains Mono | | `font-display`, `font-mono` |
| `display-weight` | 500 | | headings |

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
