# Bay1 Consulting Group: design system (v3, "Blend")

Source of truth for how bay1cg looks, moves and sounds. Code tokens live in `src/app/globals.css` (`@theme`)
and must match. The working reference implementation is `docs/prototype/bay1cg-prototype.html`: when this
file and the prototype disagree on a visual detail, the prototype wins.

## Brand in one line

Bay1 Consulting Group designs and builds websites for small businesses, from Bayonne, NJ, and adds practical AI tools when they save real time. **Web design is the business; AI is the add-on.**
Professional and current, with a bit of bounce: a modern advisory firm that is easy to work with. Not
regal, not an engineering studio, not playful-goofy.

## Naming

Always "Bay1 Consulting Group" in prose, or "bay1cg" as the short form. Never "Bay1" alone. The logo lockup
(BAY1 over CONSULTING GROUP) is the only exception.

## Services (in priority order)

1. **Web design and development** (primary, leads every page): custom website design, booking and quote
   forms, rebuilds of tired sites, care plans (updates, fixes, small changes).
2. **AI add-ons** (secondary): content systems, quote and intake assistants, internal tools.

No SEO service, no AI training or strategy as products. Headlines, the hero and the primary CTA are about
websites; AI appears as an extra, never as the lead.

## Color

| Token      | Hex       | Use                                                       |
| ---------- | --------- | --------------------------------------------------------- |
| `navy`     | `#0F1E33` | Hero, story section, CTA, footer, primary text on light   |
| `navy-2`   | `#16294A` | Raised dark surfaces, water                               |
| `steel`    | `#5C6B7E` | Secondary text on light                                   |
| `steel-lt` | `#A9B6C6` | Secondary text on dark, bridge linework (`#8EA2B9`, `#6F849C`) |
| `mist`     | `#E3E7EC` | Borders, hairlines, input borders                         |
| `off`      | `#F5F6F4` | Alternate light sections, inputs                          |
| `paper`    | `#FFFFFF` | Main light background                                     |
| `ember`    | `#E8531E` | The one accent: logo, primary buttons, active states      |
| `ember-ink`| `#B33A0F` | Ember used as small text on light                         |

Ember is the only saturated color. Light sections dominate; navy frames the page (hero, story, CTA, footer).

## Type

One family: **Instrument Sans** (400 to 700, width axis available), with fallbacks Helvetica Neue, Arial.
Headings 600, letter-spacing -0.035em, leading 1.02. Labels 600, uppercase, 0.12em tracking, 12px.

Fluid scale (clamp, never bare vw):

| Token  | Value                                     |
| ------ | ----------------------------------------- |
| `h1`   | `clamp(2.6rem, 1.4rem + 5.2vw, 6.4rem)`   |
| `h2`   | `clamp(2rem, 1.3rem + 2.8vw, 3.9rem)`     |
| `h3`   | `clamp(1.35rem, 1.1rem + .9vw, 1.9rem)`   |
| `lead` | `clamp(1.06rem, .98rem + .45vw, 1.4rem)`  |
| `body` | `clamp(1rem, .96rem + .18vw, 1.12rem)`    |

Container max 1320px, gutter `clamp(16px, 4vw, 48px)`.

## Logo

- Files: `public/brand/logos/` (Blend kit: horizontal, stacked, inverted, mono, marks, avatars).
- Mark: `public/brand/bay1-mark.svg` (standard B) and `public/brand/bay1-mark-inverted.svg` (ember square,
  B knocked out). The inverted mark is the social profile picture.
- Lockup: mark + "BAY1" in Instrument Sans 600 with 0.08em tracking, "CONSULTING GROUP" below in Instrument
  Sans 500, spaced to the same width.

## Shape

- Buttons 6px radius, panels 10px, chips and industry tags are pills. Nothing else is rounded.
- 1px mist hairlines for structure. No drop shadows, no glass, no gradients on UI.

## Motion: professional with bounce

Two orchestrated moments, plus small springs that respond to the visitor.

1. **Hero bridge** (on load, once, replayable): a steel through-arch bridge modeled on the Bayonne Bridge.
   The arch draws itself, truss diagonals fade in, hangers drop with a spring, the two deck halves slide in
   from each side and meet with overshoot, then the ember line under the deck grows from the center. Gentle
   parallax on scroll.
2. **"How we build" logo story** (pinned, scroll-driven, 420vh): the B mark as five extruded layers (dark to
   ember, front layer brightest). Four steps tied to scroll quarters:
   Listen (layers scattered), Plan (exploded axonometric), Build (layers snap together with spring
   overshoot), Launch (assembled, slow idle turn, soft ember glow). Each piece runs its own spring
   (stiffness 120, damping 13) with a small stagger. Step list on the left highlights the active step.

Springs elsewhere:
- Rotating last words of the hero headline (spring in, ease out every 2.6s).
- Sections settle in with a short spring when they enter the viewport. Content is visible at rest.
- Primary buttons pull slightly toward the cursor (fine pointers only). Chips scale on press.

`prefers-reduced-motion`: everything static and readable, the bridge shown complete, the logo shown
assembled.

## Page structure (home)

Hero with bridge, How we build (logo story), What we build (web first, wider column; AI add-ons second),
Featured client (Luminous), AI add-ons (live demo), Who we work with (industries), Founder, Start a project
(CTA), footer with Privacy and Terms.

## Voice

Plain, confident, specific. Lead with outcomes a small-business owner feels from their website ("book more
jobs", "win more quotes", "look as good as your work"). Short sentences. No em dashes, no "it's not X, it's Y", no "seamless", "leverage",
"unlock", "revolutionize". Numbers only when real and confirmed.

## Leads

Primary action everywhere: "Start a project" → `/contact` (mailto to `site.email`, francis@bay1cg.com, until a
CRM form is added). The live demo is the secondary hook.

## Never ship

Harsh gradients. Lucide or Material icons. Rainbow coloring. Drop shadows. Three feature cards in a row.
Emojis. Liquid glass. Em dashes in copy. Inter, Geist or Space Grotesk. Colored left stripes. Fake
testimonials. Bento grids. Terminal windows. "It's not X, it's Y." Checkmark bullets. Three pricing tiers.
Purple and black. Radial orbs. Dot grids. Sparkle icons. Animated arrows. Missing Terms or Privacy pages.
Neon colors. Pastel palettes. Stock photos.

## Open items

- Real Luminous results (current copy states how the system works, not outcomes).
- Founder photo.
- Real AI behind the demo (later: server route calling the Claude API with rate limits).
- Social cover images in the Blend type (avatars are done).
