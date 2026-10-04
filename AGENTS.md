# Agent guide: bay1cg site

Marketing site for Bay1 Consulting Group (AI strategy, AI training, web development). Never call it "Bay1" alone; use the full name or "bay1cg". Next.js 16 App Router,
React 19, Tailwind 4, deployed on Vercel from `main`.

Read `DESIGN.md` before touching anything visual or writing copy. It is binding.

## Commands

- `npm run dev`: dev server on :3000
- `npm run build`: production build, must pass before any PR
- `npm run lint`

## Layout

- `src/app/`: routes. `/`, `/services`, `/work`, `/about`, `/contact`, `/privacy`, `/terms`.
- `src/components/`: UI. `scene/` holds the three.js home scene (client only, loaded with `ssr: false`).
- `src/data/`: all copy that lists things (services, work, builds, experience). Edit data here, not in JSX.
- `src/lib/site.ts`: name, email, location, social links. One place to change contact details.

## Rules

- Colors, fonts and radii come from tokens in `globals.css`. No raw hex in components.
- Every top-level `<section>` sets `data-theme="dark"` or `"light"`.
- Scroll-driven animation reads `data-stage` sections inside the scene's `useFrame`, and text reveals use the
  `.reveal` / `.fade-up` classes handled by `Motion.tsx`. Both must respect `prefers-reduced-motion`.
- Don't add icon libraries, stock photos, testimonials, pricing tiers or metrics that aren't in `src/data/`.
- Don't invent client results. If a number isn't in the data files, ask.
- Keep `/privacy` and `/terms` linked in the footer.
- No secrets in the repo. Env vars only, `.env*` stays ignored.
