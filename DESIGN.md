# Bay1 Consulting Group: design system

This file is the source of truth for how bay1cg looks, moves and sounds. Code tokens live in
`src/app/globals.css` (`@theme`) and must match the values here. If you change one, change both.

## Brand in one line

Bay1 Consulting Group is the bridge between a business and AI that works: we train teams, plan where AI fits, and build the
websites that bring in work. The site should feel composed and established, closer to a private bank or a
fine hotel than a tech startup. Calm, generous space, classic type, one warm ember accent.

## Color: "Crown & Ember"

| Token        | Hex       | Use                                                                  |
| ------------ | --------- | -------------------------------------------------------------------- |
| `midnight`   | `#0E1626` | Dark sections, text on light sections                                |
| `harbor`     | `#1B2740` | Raised surface on dark (fields, water in the scene)                  |
| `ivory`      | `#F5EFE3` | Light sections, text on dark                                         |
| `parchment`  | `#E6DCC8` | Raised surface and hairlines on light                                |
| `brass`      | `#B8935A` | Hairlines, small labels on dark, bridge cables. Never body text      |
| `brass-deep` | `#8A6A35` | Brass used as small text on ivory (passes AA)                        |
| `ember`      | `#E8531E` | The action color: primary buttons, the logo mark, the bridge deck edge |
| `slate`      | `#9AA3B2` | Secondary text on dark                                               |
| `ink-soft`   | `#4A5468` | Secondary text on light                                              |

Rules

- Ember means "act". It appears on the logo mark, the primary button and the bridge deck. Nowhere else.
- Brass is metal, not paint: thin rules, cable lines, small caps labels. Never fills larger than a button
  border.
- Sections alternate `midnight` and `ivory`; each `<section>` sets `data-theme="dark"` or `"light"` and the page
  eases between them as you scroll.
- Never pure white or pure black. No gradients on UI.

## Logo

- Mark: `public/brand/bay1-mark.svg`, traced from the original (`public/brand/source/`). It uses
  `currentColor`; render it in `ember` on both themes.
- Lockup: mark, then `BAY1` in Cormorant Garamond 600, tracking 0.14em, with `CONSULTING GROUP` below in Jost
  500, 0.42em tracking, at about a quarter of the BAY1 cap height, in `brass` (dark) or `brass-deep` (light).
- No drop shadow, no stacked "Consulting / Group", no orange wordmark text.
- Minimum clear space: the height of the B's top stripe on all sides.

## Type

| Role     | Family              | Notes                                                              |
| -------- | ------------------- | ------------------------------------------------------------------ |
| Display  | Cormorant Garamond  | 500 or 600. Sentence case. Leading 1.0. Italic for the second line of a hero headline |
| Labels   | Jost                | 11 to 12px, 500, uppercase, tracking 0.32em, brass on dark          |
| Body     | Jost                | 17 to 19px, 400, leading 1.6                                       |

- Headlines are short, two lines, the second often in italic: "Your bridge to AI / *that actually works.*"

### Fluid type scale

All text sizes come from these tokens (Tailwind `text-*` classes). They grow smoothly from a 360px phone to a
1920px desktop and stop there. Never size text with bare `vw` units or fixed breakpoint jumps.

| Token          | Value                                       | ~360px | ~1440px | 1920px+ |
| -------------- | ------------------------------------------- | ------ | ------- | ------- |
| `text-hero`    | `clamp(2.75rem, 1.6rem + 5.2vw, 9rem)`      | 44px   | 101px   | 144px   |
| `text-h2`      | `clamp(2.25rem, 1.4rem + 3.6vw, 6.25rem)`   | 36px   | 74px    | 100px   |
| `text-h3`      | `clamp(1.625rem, 1.2rem + 1.6vw, 3.25rem)`  | 26px   | 42px    | 52px    |
| `text-lead`    | `clamp(1.125rem, 1rem + 0.55vw, 1.75rem)`   | 18px   | 24px    | 27px    |
| `text-body`    | `clamp(1.0625rem, 1rem + 0.2vw, 1.25rem)`   | 17px   | 19px    | 20px    |
| `text-small`   | `clamp(0.9375rem, 0.9rem + 0.12vw, 1.0625rem)` | 15px | 16px    | 17px    |
| `text-label`   | `clamp(0.6875rem, 0.65rem + 0.14vw, 0.8125rem)` | 11px | 13px   | 13px    |

- Containers widen with the screen: `wrap` max width 1440px, and 1680px at 1920px and above, so big monitors
  get bigger type and wider layouts instead of a narrow column in a sea of empty space.
- Spacing that sits next to type (section padding, gaps between heading and body) uses `clamp()` too.
- Test at 360, 768, 1280, 1440 and 1920px before shipping.

### Naming

Always "Bay1 Consulting Group" in prose, or "bay1cg" where a short form is needed (titles, handles, URLs).
Never "Bay1" on its own. The logo lockup (BAY1 over CONSULTING GROUP) is the only place "BAY1" stands as
a word, because the full name is right there.
- Banned families: Inter, Geist, Space Grotesk, Poppins, Roboto, Martian Mono.

## Shape and space

- Square corners. 1px brass hairlines for structure. No shadows, no glass, no blur.
- Generous space: section padding 140 to 220px on desktop, 96px on phones. Max line length 62ch.
- Ornament is limited to thin rules and the small centered "·" separator in label rows.

## Motion: the bridge

The home page is one continuous 3D scene of a suspension bridge across a bay at night, built from simple
geometry (no imported models): water, two towers, two main cables, hangers, a deck, shore lights. Scrolling
builds it, one service per part, then crosses it.

| Stage | Section          | Scene                                                                 |
| ----- | ---------------- | --------------------------------------------------------------------- |
| 0     | Hero             | Night. Far shore lights, faint tower outlines. Slow drift              |
| 1     | The gap          | Camera low over the water, looking across the empty span               |
| 2     | AI strategy      | First tower rises out of the water                                    |
| 3     | AI training      | Second tower rises; main cables draw across, hangers drop in          |
| 4     | Web development  | The deck slides out from both shores and meets in the middle; ember edge line lights |
| 5     | Luminous         | Small lights travel across the deck                                   |
| 6     | Proof            | Camera rises for a wide, calm view of the whole bridge                |
| 7     | Website review   | Scene dims to sit quietly behind the form                             |
| 8     | Final call       | Camera moves onto the deck and travels toward the far shore           |

- Lenis for smooth scroll. Sections carry `data-stage="n"`; the scene reads their positions in `useFrame` and
  blends between stage parameters. Scroll never goes through React state.
- Text reveals once (line mask, 0.9s, ease-out). Hover is color only.
- `prefers-reduced-motion`: no smooth scroll or reveals; the scene renders the finished bridge, static.
- Phones: same scene at DPR 1.5, fewer hangers, dimmed behind text after the hero.

## Voice

- Composed, warm, specific. First person plural. Short sentences.
- Say what the reader gets. No em dashes. No "it's not X, it's Y". No "seamless", "leverage", "unlock",
  "revolutionize", "cutting-edge", "game-changer".
- Numbers only when they are real and in the data files.

## Leads

One offer for now: a website review. Every page has a way to request it; the primary button says
"Request a website review". Requests go to `site.email` (francis@bay1cg.com) by email until a CRM form is
wired in. Do not add pricing tiers, chat widgets or popups.

## The "looks vibecoded" list (never ship these)

Harsh gradients. Lucide or Material icons. Pure white backgrounds. Rainbow coloring. Drop shadows. Three
feature cards in a row. Emojis. Liquid glass. Em dashes. Inter, Geist or Space Grotesk. Colored left stripes.
Fake testimonials. Bento grids. Terminal windows. "It's not X, it's Y." Checkmark bullets. Three pricing tiers.
No real product demos. Soft corner radius. Purple and black. Missing skeleton loaders. Radial orbs. Dot grids.
Sparkle icons. Animated arrows. No terms of service. No privacy policy. Hover animations everywhere. Neon
colors. Basic pastel colors.

## Open items

- Real screenshots of client work for `/work`. Until then, text only; no stock photos or mock dashboards.
- Facebook and Instagram URLs go in `src/lib/site.ts` (`social`). Links render only when set.
- Booking calendar and HubSpot form: later. For now, email.
