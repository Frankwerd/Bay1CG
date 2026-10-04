# Bay1 Consulting Group: design system

This file is the source of truth for how bay1cg looks, moves and sounds. Code tokens live in
`src/app/globals.css` (`@theme`) and must match the values here. If you change one, change both.

## Brand in one line

Bay1 helps small and mid-sized businesses put AI to work: we train teams, plan where AI fits, and build the
websites and systems that run it. The site should feel like an engineering studio, calm and exact, with one
bright signal color doing all the pointing.

## Color: "Signal"

| Token          | Hex       | Use                                                                 |
| -------------- | --------- | ------------------------------------------------------------------- |
| `carbon`       | `#14110F` | Dark section background, text on light sections                      |
| `carbon-2`     | `#1D1916` | Raised surface on dark (form fields, media frames)                  |
| `line`         | `#2A2522` | Hairlines and dividers on dark                                      |
| `stone`        | `#8C8379` | Secondary text on dark, metadata                                    |
| `bone`         | `#ECE6DC` | Light section background, text on dark                              |
| `bone-2`       | `#DED6CA` | Raised surface and hairlines on light                               |
| `ash`          | `#5E5750` | Secondary text on light                                             |
| `signal`       | `#E2471B` | The one accent: tags, primary button, the 3D mark's lit slats        |
| `signal-deep`  | `#B5360F` | Signal used as small text on `bone` (passes AA where `signal` fails) |

Rules

- One accent. Signal is the only saturated color on the site. No second accent, no cyan, no purple.
- Sections alternate `carbon` and `bone`. Each `<section>` sets `data-theme="dark"` or `data-theme="light"`
  and the page background eases between them as you scroll (`ThemeController`).
- Never pure white (`#fff`) or pure black (`#000`) as a surface.
- No gradients on UI. The only soft color falloff allowed is lighting inside the 3D scene.

## Type

| Role     | Family             | Notes                                                             |
| -------- | ------------------ | ----------------------------------------------------------------- |
| Display  | Martian Mono       | Uppercase, tight leading (0.95), slight positive tracking          |
| Labels   | Martian Mono       | 11 to 12px, uppercase, tracking 0.08em, inside `[ brackets ]`      |
| Body     | Schibsted Grotesk  | 17 to 20px, leading 1.55, sentence case                           |

- Display headings are set as explicit lines. The second line is indented and led by a short rule
  (`<DisplayHeading lines={["What we", "do"]} />` renders the rule; never type a dash character for it).
- Banned families: Inter, Geist, Space Grotesk, Poppins, Roboto.

## Shape and space

- Corners are square (`0` radius) everywhere except the 2px focus ring.
- No drop shadows, no glass, no blur panels.
- 12-column grid, 16px gutter on phones, 32px on desktop. Section padding 120 to 200px vertical on desktop.
- Lists use mono indices (`01`, `02`), not checkmarks or icons.

## Motion

The home page is one continuous 3D scene: the Bay1 mark, a stack of slanted signal and carbon slats, rebuilds
itself section by section as you scroll (hero stack, service formations, Luminous wall, process staircase,
final stack). Everything else stays still enough to read.

- Stack: `three` + `@react-three/fiber` + `drei` for the scene, Lenis for smooth scroll. Home sections carry
  `data-stage="n"`; the scene reads their positions in `useFrame` and blends between poses in
  `src/components/scene/poses.ts`. Scroll never goes through React state.
- Text enters once with a line mask reveal (`RevealLines`), 0.9s, `expo.out`, 0.08s stagger. No re-trigger
  on scroll back.
- Hover is color only (text to signal, or fill swap). No scaling, lifting, tilting or animated arrows.
- `prefers-reduced-motion: reduce` turns off Lenis, scrub and reveals and renders the mark in its hero pose.
- Phones get the same scene at capped DPR (1.5) with fewer slats.

## Voice

- Plain, specific, first person plural ("we"). Say what the thing does and for whom.
- No em dashes in copy. No "it's not X, it's Y". No "seamless", "leverage", "unlock", "sovereign",
  "architect" as a verb, "unreasonable".
- Numbers only when they are real and sourced from the data files.

## The "looks vibecoded" list (never ship these)

Harsh gradients. Lucide or Material icons. Pure white backgrounds. Rainbow coloring. Drop shadows. Three
feature cards in a row. Emojis. Liquid glass. Em dashes. Inter, Geist or Space Grotesk. Colored left stripes.
Fake testimonials. Bento grids. Terminal windows. "It's not X, it's Y." Checkmark bullets. Three pricing tiers.
No real product demos. Soft corner radius. Purple and black. Missing skeleton loaders. Radial orbs. Dot grids.
Sparkle icons. Animated arrows. No terms of service. No privacy policy. Hover animations everywhere. Neon
colors. Basic pastel colors.

## Open items

- Real screenshots or screen recordings of client work (Luminous site, content reports) for `/work`. Until then,
  work entries are text-only; do not use stock photos or mock dashboards in their place.
- Facebook and Instagram URLs go in `src/lib/site.ts` (`social`). Links render only when set.
