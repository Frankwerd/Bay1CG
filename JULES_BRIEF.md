# Jules brief 3: port the v3 "Blend" prototype into the site

Branch: `v3`. Read `AGENTS.md` and the rewritten `DESIGN.md` first; they are binding. Then open
`docs/prototype/bay1cg-prototype.html` in a browser and scroll through it. **That file is the spec.** Your job
is to rebuild it faithfully inside the Next.js app (same structure, copy, colors, type, motion), then restyle
the other pages to match. Delete this file in your final commit. Keep `docs/prototype/` in the repo.

## 0. Ground rules

- Never write "Bay1" alone in any text, alt text, aria-label or metadata. Use "Bay1 Consulting Group" or
  "bay1cg". The logo lockup is the only exception.
- Web design is the main business and leads everywhere. AI is a secondary add-on. No SEO, AI training or
  AI strategy offerings.
- No new dependencies except what is already in `package.json` (`three`, `@react-three/fiber`,
  `@react-three/drei`, `lenis`). No icon libraries, no stock photos.
- Every number on the site must already be in `src/data/`. Don't invent results.

## 1. Tokens, fonts, logo

- `globals.css`: replace the current tokens with the v3 palette from DESIGN.md (`navy`, `navy-2`, `steel`,
  `steel-lt`, `mist`, `off`, `paper`, `ember`, `ember-ink`) and the fluid type tokens (`h1`, `h2`, `h3`,
  `lead`, `body`). Remove the `display` and `label` utilities' mono/serif settings; labels are Instrument Sans
  600, uppercase, 0.12em tracking.
- `layout.tsx`: load `Instrument_Sans` via `next/font/google` (weights 400 to 700). Remove Martian Mono,
  Schibsted Grotesk and any Cormorant/Jost.
- Remove the dark/light `data-theme` scroll switching from `Motion.tsx`; sections set their own background.
  Keep Lenis smooth scroll and the reveal observer, but change reveals to the prototype's behavior: content is
  visible at rest, and elements below the fold play a short spring `rise` when they enter.
- `Logo.tsx`: `Mark` inlines the path from `public/brand/bay1-mark.svg` (viewBox `0 0 294 328`,
  `fill="currentColor"`, `fill-rule="evenodd"`, ember). `Wordmark` matches the prototype nav (BAY1 bold with
  0.08em tracking, "CONSULTING GROUP" small below in steel-lt). Footer uses the same lockup.
- `public/brand/logos/` already holds the Blend logo kit. Use `bay1cg-blend-avatar-inverted-dark.png` as the
  basis for `src/app/icon.png` / `apple-icon.png` (copy, don't redraw).

## 2. Data

- `src/data/services.ts`: replace with two services exactly as in the prototype's "What we build" section,
  in this order: Web design and development (Custom website design, Booking and quote forms, Rebuilds of
  tired sites, Care plans) as the primary service, then AI add-ons (Content systems, Quote and intake
  assistants, Internal tools), each item with its short note. Add a `primary: boolean` field.
- `src/data/work.ts`: keep Luminous (featured) and CareerSuite. Move Handshake out of `cases` into
  `src/data/experience.ts` as an experience entry (AI model training work); it no longer appears on the home
  page.
- `src/data/industries.ts` (new): the eight industries from the prototype.
- `src/lib/site.ts`: `offer.label` becomes "Start a project", `offer.subject` "New project". Nav: Work,
  Services, About, plus the "Start a project" button.

## 3. Home page (`src/app/page.tsx`), in this order

Port each section from the prototype as its own component in `src/components/home/`:

1. **Hero** (navy): label, headline with rotating last words, lead, two buttons, and the **arch bridge** SVG
   with the exact load animation (arch draw, truss fade, staggered spring hangers, deck halves meeting with
   overshoot, ember line growing from center), the "Replay the build" button and the slight scroll parallax.
   Plain SVG + CSS keyframes, generated the same way as the prototype script.
2. **How we build** (navy, pinned): the 3D logo story. Port it to `@react-three/fiber` in
   `src/components/scene/LogoStory.tsx` (client, loaded with `next/dynamic` and `ssr: false`):
   - Parse the mark path into shapes (outer contours vs holes by winding) exactly like the prototype, five
     extruded layers per piece, colors dark to ember front, same lights.
   - Stage = scroll quarter of the 420vh section; same four poses (scattered, exploded, assembled,
     assembled + idle turn + glow) and the same per-value spring (k 120, c 13) with per-piece stagger.
   - Step list and progress meter on the left, exactly as in the prototype; phone layout puts the canvas on
     top. Static SVG mark fallback when WebGL is missing. Delete the old `poses.ts`, `Scene.tsx` and
     `HomeScene.tsx` slat scene.
3. **What we build**: web design (wide column, bigger heading) and AI add-ons (narrow column).
4. **Featured client** (off-white): Luminous, with the four facts and the "results to be added" note.
5. **AI add-ons**: the demo form and output panel with identical template logic, presets, chips, typing
   effect, validation message and copy button. It stays a scripted demo labeled as such; do not call any API.
6. **Who we work with** (off-white): industry pills.
7. **Founder**: placeholder photo block with the inverted mark, quote, paragraph.
8. **Start a project** (navy): headline, email shown as selectable text with a copy button, and a "Start a
   project" button to `/contact`.

Magnetic primary buttons and spring press states as in the prototype. Respect `prefers-reduced-motion`
everywhere (static bridge, assembled logo, no rotation, no reveals).

## 4. Other pages

Restyle `/services`, `/work`, `/about`, `/contact`, `/privacy`, `/terms` and `not-found` in the v3 look (white
and off-white sections, navy page header band, Instrument Sans, ember accents only on actions).

- `/services`: web design and development first and in depth (what's included, how a project runs, care
  plans), then AI add-ons as a shorter section. End with "Start a project".
- `/work`: Luminous and CareerSuite case write-ups, then the builds list from `src/data/projects.ts`.
- `/about`: Francis John Libutti, founder, Bayonne; experience list (including Handshake AI model training);
  education.
- `/contact`: h1 "Start a project". Form: name, email (required), business name, "What do you need?" (select:
  A new website, A website rebuild, A care plan, An AI add-on, Not sure yet), details (required). Submit builds a `mailto:` to
  `site.email` with subject `New project: <business>` and a readable body; inline validation errors. Side
  column shows the email as selectable text with a copy button and "Based in Bayonne, NJ".

## 5. Verify, then open the PR

- `npm run build` and `npm run lint` pass.
- Compare side by side with `docs/prototype/bay1cg-prototype.html` at 375, 768, 1280, 1440 and 1920px. The
  hero bridge plays on load; the logo story assembles across its four steps; the demo writes drafts.
- Reduced motion: everything static and readable.
- `grep -rnw "Bay1" src` matches only the lockup and "Bay1 Consulting Group". No leftover `signal`,
  `carbon`, `bone`, `midnight`, `ivory`, `brass` tokens; no Martian, Schibsted, Cormorant or Jost.

Open a PR into `v3` titled "v3: Blend site with bridge hero and logo story", with screenshots of the hero
after the animation, each of the four logo story steps, the demo with a generated draft, and a phone view.
