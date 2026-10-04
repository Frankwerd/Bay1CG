# Jules brief 2: Crown & Ember rebrand and the bridge scene

Branch: `redesign` (your previous PR's work is already merged into it). Read `AGENTS.md` and the **rewritten**
`DESIGN.md` first; they are binding. The brand changed from a dark tech look ("Signal") to a composed, royal
look ("Crown & Ember"), and the home 3D scene changes from slats to a suspension bridge. Layout, routes, data
and the scroll plumbing (`Motion.tsx`, `data-stage`, `readStage`) stay. Delete this file in your final commit.

Already done for you: `DESIGN.md`, `src/lib/site.ts` (email `francis@bay1cg.com`, `site.offer`),
`src/data/services.ts` (new order: strategy, training, web; new headings), `public/brand/bay1-mark.svg`
(traced logo mark, `currentColor`, viewBox `0 0 294 328`).

## 1. Tokens and type

- `globals.css`: replace the Signal tokens with the Crown & Ember tokens from DESIGN.md (`midnight`, `harbor`,
  `ivory`, `parchment`, `brass`, `brass-deep`, `ember`, `slate`, `ink-soft`). Theme vars: dark =
  bg midnight / fg ivory / muted slate / rule harbor / raised harbor / accent-text brass;
  light = bg ivory / fg midnight / muted ink-soft / rule parchment / raised parchment / accent-text brass-deep.
- `display` utility: Cormorant Garamond, weight 500, **sentence case** (remove uppercase), leading 1.0,
  letter-spacing -0.01em. `label` utility: Jost 500, 11px, uppercase, tracking 0.32em.
- `layout.tsx`: load `Cormorant_Garamond` (weights 500, 600, italic) and `Jost` via `next/font/google`;
  remove Martian Mono and Schibsted Grotesk. `themeColor` `#0e1626`.
- Replace every `signal`, `carbon`, `bone`, `stone`, `ash`, `line` class across `src/` with the new tokens.
  `grep -rnE "signal|carbon|bone|stone|\bash\b|\bline\b"` must come back clean except unrelated words.

### Fluid type (the last version was too small and static on desktop)

- Add the fluid type scale from DESIGN.md ("Fluid type scale") to `@theme` as `--text-hero`, `--text-h2`,
  `--text-h3`, `--text-lead`, `--text-body`, `--text-small`, `--text-label` with matching line heights
  (hero/h2 1.0, h3 1.1, lead 1.45, body 1.6).
- `DisplayHeading` sizes map to these: `xl` → `text-hero`, `lg` → `text-h2`, `md` → `text-h3`. Remove every
  bare `text-[..vw]` class in the codebase, and every arbitrary px font size except inside the scene.
- Body copy uses `text-body`, intros use `text-lead`, labels use `text-label`.
- `wrap`: max width 1440px, 1680px at `min-width: 1920px`. Section padding:
  `padding-block: clamp(5rem, 3rem + 7vw, 13rem)`.
- Check 360, 768, 1280, 1440 and 1920px wide. At 1440 and 1920 the hero headline should fill most of the left
  column; nothing should look like a phone layout floating in the middle of a desktop.

### Naming

Always "Bay1 Consulting Group" or "bay1cg", never "Bay1" alone in any text, alt text, aria-label or metadata.
`site.short` is now `"bay1cg"`. The only exception is the logo lockup (BAY1 over CONSULTING GROUP).
`grep -rnw "Bay1" src` should only match the lockup and "Bay1 Consulting Group".

## 2. Components

- `ui.tsx`:
  - `DisplayHeading`: drop the CSS rule before line 2 and the indent. Line 2 renders in italic. Keep the reveal.
  - `Tag`: no brackets, no fill. Brass text label (`text-accent-text`), optionally with a 24px brass rule
    before it.
  - `ButtonLink` solid = ember fill, midnight text, hover to ivory fill. Line = 1px brass border, fg text,
    hover border ember.
- `Logo.tsx`: `Mark` inlines the path from `public/brand/bay1-mark.svg` (`fill="currentColor"`,
  `className="text-ember"`). `Wordmark` = mark + "BAY1" (Cormorant 600, tracking 0.14em) with
  "CONSULTING GROUP" below in the label style at ~9px, brass. Footer giant wordmark uses the same lockup.
- `Nav.tsx`: CTA becomes `site.offer.label` shortened to "Website review" → `/contact`. Mobile menu
  background `midnight`. Restore closing the menu on route change.
- `Footer.tsx`: email is `site.email`; add a line "Request a website review" button above the columns.

## 3. Home page copy (`src/app/page.tsx`)

Keep the nine sections and `data-stage` 0 to 8. New themes and copy:

| stage | theme | copy |
| ----- | ----- | ---- |
| 0 | dark | Label "AI training · AI strategy · Web development". h1 `["Your bridge to AI", "that actually works."]` size xl. Body: "We train your team, plan where AI fits, and build the website that brings in the work." Buttons: `site.offer.label` → /contact, line "See the work" → /work. |
| 1 | dark | Label "The gap". h2 `["Most teams pay for AI.", "Few have crossed over."]`. Body: "The licenses are bought and the tabs are open, but the work still gets done the old way. We build the crossing: a clear plan, a trained team, and a website that turns visitors into calls." |
| 2 | dark | `services[0]` (AI strategy): label "01 · AI strategy", heading from data, summary, "Who it's for", numbered deliverables. |
| 3 | dark | `services[1]` (AI training), same layout. |
| 4 | dark | `services[2]` (Web development), same layout. |
| 5 | dark | Luminous (`cases[0]`). Label "Featured client". h2 `["Luminous Electric", "posts every week."]`. Summary, numbered approach, outcomes, link "Read the case" → /work#luminous. |
| 6 | light | Proof: Handshake (`cases[1]`) and the builds list, as now. |
| 7 | light | Website review offer, `id="review"`. Label "Website review". h2 `["Send us your site.", "We'll show you the gaps."]`. Numbered list of what's included: "How your site loads and reads on a phone", "Whether Google and AI answer engines can find and describe you", "Where visitors drop off before they contact you", "A short list of fixes, ranked by impact". Line: "Written by Francis, delivered by email within five business days." Inline form (website URL required, email required) that opens a `mailto:` to `site.email` with subject `${site.offer.subject}: ${url}`. |
| 8 | dark | h2 `["Let's build", "the crossing."]`. Body: "Tell us where you are and where you want to be. Francis reads every message." Button `site.offer.label`, plus a plain `mailto:` link showing `site.email`. |

## 4. Other pages

- `/contact`: h1 `["Request a", "website review."]`. Form: name, email (required), website URL (required),
  business type, "What do you want more of?" (select: Calls, Bookings, Quote requests, Something else), notes.
  Submit builds a `mailto:` to `site.email` with subject `${site.offer.subject}: ${url}` and a readable body,
  with inline validation errors. Side column: the four review items, `site.email`, `site.location`, and
  "Prefer to talk about training or strategy? Email us directly."
- `/services`, `/work`, `/about`: restyle with the new tokens and type, and end each page with a review CTA
  block (dark section). Services order now follows `services` data.
- `/privacy`, `/terms`, `not-found`: restyle; update the contact email to `site.email`.

## 5. The bridge scene (replace `src/components/scene/poses.ts` and the `Mark` in `Scene.tsx`)

Keep `Scene.tsx`'s structure: dynamic import, `readStage()`, damping in `useFrame`, reduced-motion handling.
Replace the slats with a bridge built from primitives. Canvas is **opaque**: clear color and `scene.fog` =
`Fog("#0e1626", 14, 42)`. Wrapper opacity follows the stage's `visible` value (dark stages 1, light stages 0),
damped, so the night scene fades out behind the ivory sections.

Geometry (world units, deck along X, bay along Z):
- Water: 80 x 80 plane at y = -0.6, `harbor`, roughness 0.25, metalness 0.5.
- Far shore: ~120 instanced tiny emissive spheres along z = -16, x from -30 to 30, brass/ivory, low intensity.
- Towers at x = ±3: each two legs (0.18 x 4.4 x 0.18 boxes, z = ±0.65) with crossbars at y = 2.3 and 4.0,
  ivory standard material. Rise = `position.y` from -5 (hidden under water) to 0. Each tower has its own
  rise parameter.
- Main cables (z = ±0.65): points from anchor (-10, 0.3) up to tower top (-3, 4.3), sag to (0, 1.1), up to
  (3, 4.3), down to (10, 0.3). `CatmullRomCurve3`, `TubeGeometry` radius 0.03, 200 segments, brass material.
  Draw with `geometry.setDrawRange(0, Math.floor(indexCount * cable))`.
- Hangers: every 0.5 units along X between the anchors, from the cable's y at that X down to the deck (y = 0).
  Thin brass cylinders; `scale.y` from 0 to 1 with a stagger driven by `hangers`.
- Deck: two halves (9 x 0.14 x 1.6 boxes, harbor-dark material) sliding from x = ∓14 to meet at 0, driven by
  `deck`. An ember edge strip (thin box along each deck side, `emissive` ember) with intensity driven by `glow`.
- Traffic: 10 small emissive spheres (ivory one way, ember the other) moving along the deck in a loop, visible
  by `traffic`.
- Lights: ambient 0.35; a cool ivory directional "moon" from (-6, 10, 6) at 0.8; brass point lights at each
  tower top, intensity tied to that tower's rise.

Stage parameters (blend between neighbours exactly like the current poses):

| stage | camera pos | look at | tower1 | tower2 | cable | hangers | deck | glow | traffic | visible |
| ----- | ---------- | ------- | ------ | ------ | ----- | ------- | ---- | ---- | ------- | ------- |
| 0 | 0, 1.4, 15 | 0, 1.6, 0 | 0.15 | 0.15 | 0 | 0 | 0 | 0 | 0 | 1 |
| 1 | -2, 0.2, 9 | 2, 0.8, -2 | 0.15 | 0.15 | 0 | 0 | 0 | 0 | 0 | 1 |
| 2 | -7, 2.4, 8 | -3, 2.2, 0 | 1 | 0.15 | 0 | 0 | 0 | 0 | 0 | 1 |
| 3 | 5, 3.2, 10 | 0, 2.4, 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |
| 4 | 0, 1.8, 11 | 0, 0.6, 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 |
| 5 | 8, 1.5, 6 | 0, 0.5, 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 6 | 0, 7, 20 | 0, 1.5, 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 7 | 0, 7, 20 | 0, 1.5, 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 8 | -9, 0.6, 0 | 10, 0.7, 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

- Camera: damp position and look-at target every frame (lambda ~3). Add a slow idle sway (±0.15 units) and a
  slight pointer parallax on desktop only.
- Narrow screens (< 768px): push the camera back by 1.4x along its view direction, halve the hangers, keep
  `visible` at 0.45 on stages 1 to 5 so text stays readable.
- `prefers-reduced-motion`: render stage 4's bridge (complete, no traffic), no sway, no parallax, camera snaps.
- Dispose geometries and materials on unmount.

## 6. Verify before opening the PR

- `npm run build` and `npm run lint` pass.
- Scroll the home page: towers rise at stages 2 and 3, cables draw, deck meets at stage 4, traffic at 5, the
  scene fades out on ivory sections and returns for the final crossing.
- 375px: no horizontal scroll, readable text over the dimmed scene, menu works.
- Reduced motion: static complete bridge, all content visible.
- No old tokens or fonts left; no icon libraries; no em dashes in copy; every `mailto:` goes to `site.email`.

Open the PR into `redesign` titled "Crown & Ember rebrand and bridge scene" with screenshots of stages 0, 3, 4,
the review section, and a phone view of the hero.
