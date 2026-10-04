# Jules brief: finish the bay1cg redesign

Branch: `redesign`. Read `AGENTS.md` and `DESIGN.md` first; they are binding (colors, type, voice, and the
"looks vibecoded" list of things never to ship). Delete this file in your final commit.

## Already done (don't redo)

- Brand docs: `DESIGN.md`, `AGENTS.md`, `CLAUDE.md`.
- Tokens and utilities in `src/app/globals.css` (`display`, `label`, `wrap`, `.reveal` / `.fade-up`, theme vars
  `bg`/`fg`/`muted`/`rule`/`raised`/`accent-text` that flip with `html[data-theme]`).
- `src/app/layout.tsx`: Martian Mono + Schibsted Grotesk, Nav, Footer, `Motion` (Lenis, reveals, theme switching).
- `src/components/ui.tsx`: `Tag`, `DisplayHeading`, `ButtonLink`, `Section`.
- `src/components/Logo.tsx`, `Nav.tsx`, `Footer.tsx`.
- 3D scene: `src/components/scene/{poses.ts,Scene.tsx,HomeScene.tsx}`. Nine stages, see below.
- Data: `src/data/services.ts` (3 services), `src/data/work.ts` (Luminous, Handshake, CareerSuite),
  `src/data/projects.ts` (builds index), `src/data/experience.ts`, `src/lib/site.ts`.
- Removed: framer-motion, the before/after slider, all old components, `/luminous`, `/projects`, `/case-studies`.

## To do

### 1. Home page `src/app/page.tsx` (rewrite; it still imports deleted components)

Server component. Render `<HomeScene />` once at the top, then these `Section`s in this exact order, each
`min-h-screen` (services and cases can be taller), content in a `wrap` grid with text in the left 6 to 7
columns so the 3D mark on the right stays clear. All content sits above the canvas (`relative z-10`).
`data-stage` must match the pose order in `poses.ts`.

| stage | theme | content |
| ----- | ----- | ------- |
| 0 | dark  | Hero. `Tag` "Bay1 Consulting Group". `DisplayHeading as="h1" size="xl"` lines `["AI that your", "team uses"]`. Body: `site.description`. `ButtonLink` "Book a call" → /contact, line variant "See the work" → /work. Bottom row of `label`s: "AI training", "AI strategy", "Web development", `site.location`. |
| 1 | light | Problem statement. Heading `["Too many tools", "not enough time"]`. Body: "Most teams already pay for AI. Few have changed how they work. We fix the gap between the license and the result." |
| 2 | dark  | Service `services[0]`: `Tag` "01 / AI training", `DisplayHeading lines={service.heading}`, summary, "Who it's for" + `forWho`, deliverables as a numbered list (mono `01`..`04`, no checkmarks), link to `/services#ai-training`. |
| 3 | dark  | Same layout, `services[1]`. |
| 4 | dark  | Same layout, `services[2]`. |
| 5 | light | Featured case `cases[0]` (Luminous). `Tag` "Featured client". Heading `case.heading`, sector, summary, the 4 `approach` steps as a numbered list, `stack` as plain mono labels, `outcomes`. Link "Read the case" → `/work#luminous`. |
| 6 | dark  | Proof. `cases[1]` (Handshake) block, then "Recent builds": a table-like list of `projects.slice(0,5)` (title, category, stack), each row links to its GitHub `link`. Rows separated by `border-rule` hairlines. Hover = text turns signal. Nothing else. |
| 7 | light | Process. Heading `["How we", "work"]`. Four steps, numbered: 01 Audit ("We sit with your team and map where the hours go."), 02 Plan ("A ranked list of what to fix first, with costs and risks."), 03 Build ("Training, tools and sites, shipped in weeks."), 04 Hand off ("Docs, recordings and office hours so it sticks."). |
| 8 | dark  | CTA. Heading `["Let's put AI", "to work"]`, one line of body, `ButtonLink` "Book a call", `mailto:` link to `site.email`. |

Add `fade-up` to paragraphs and lists you want to ease in.

### 2. Other routes (no 3D scene; still alternate `data-theme` sections)

- `/services`: one tall section per service with `id={service.id}`, full deliverables, and a CTA.
- `/work`: each case from `cases` as a section with `id={case.id}` (problem, approach, stack, outcomes), then
  the full `projects` builds list. No images: we have no real screenshots yet (see DESIGN.md open items).
- `/about`: Francis John Libutti, founder. Short intro written in the voice rules, `experience` as a timeline
  list, `education` block. No stock photos.
- `/contact`: form with name, email, company, "What do you want help with?" (select: the 3 services + Other),
  message. Submitting builds a `mailto:${site.email}` URL with subject and body and opens it (there is no
  backend). Show inline validation errors. Also show `site.email` and `site.location`.
- `/privacy`: rewrite in the new style. Mention Vercel Analytics (cookieless, aggregate page views), email you
  send us, no selling of data, contact email. Date "October 2026".
- `/terms`: new terms of service page, same style: use of site, no warranty, IP, limitation of liability, New
  Jersey governing law, contact. Date "October 2026".
- `src/app/not-found.tsx`: on-brand 404.
- Every page exports `metadata` with a title and description.

### 3. Config

- `next.config.ts`: permanent redirects `/luminous` → `/work#luminous`, `/projects` → `/work`,
  `/case-studies` → `/work`.
- `package.json`: `"name": "bay1cg"`.

### 4. Verify before opening the PR

- `npm run build` and `npm run lint` pass.
- Home scrolls through all nine stages with the mark changing shape; the page background eases between carbon
  and bone per section.
- 375px wide: no horizontal scroll, menu works, text readable over the dimmed mark.
- `prefers-reduced-motion: reduce`: no smooth scroll, no reveals, page fully readable.
- No raw hex outside `globals.css` and `scene/`, no icon libraries, no em dashes in copy.

Open the PR from `redesign` into `main` with a short summary and screenshots of the home hero, one service
stage, and the Luminous stage.
