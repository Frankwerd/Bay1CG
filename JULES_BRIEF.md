# Jules brief 4: give the v3 site its soul back

Branch: `v4`. It already contains your v3 port (PR #4) plus a fix for heading sizes. Read `AGENTS.md` and
`DESIGN.md` first, especially the new **"v4: putting the soul back"** section. Then open
`docs/prototype/bay1cg-fun-prototype.html` in a browser and play with everything on it. **That file is the spec.**
Rework the existing site to match it; don't start over. Delete this file in your final commit.

## Ground rules

- Never write "Bay1" alone. Use "Bay1 Consulting Group" or "bay1cg" (logo lockup excepted).
- Web design leads; AI is an add-on.
- No new npm dependencies, no icon libraries, no stock photos, no invented numbers.
- **Font sizes:** never write `text-[var(--x)]`. Tailwind reads that as a color and the size is silently
  dropped (this is what made v3 look broken). Use `text-[length:var(--x)]` or plain CSS.

## 1. Tokens and fonts

- Add `--mega` (`clamp(3rem, 1.2rem + 7.6vw, 8.6rem)`) and raise `--h2` to `clamp(2.2rem, 1.3rem + 3.4vw, 4.6rem)`.
  Headline letter-spacing -0.04em, line-height 0.98.
- Add `--cream: #FFF4EC`.
- Load **Instrument Serif** (regular + italic) and **Caveat** (500, 700) with `next/font/google` alongside
  Instrument Sans. Add an `.i` (serif italic accent) style and a `.hand` (Caveat 700, ember) style.
- Buttons become pills (`rounded-full`, height 52px). Cards and panels 16 to 18px radius.

## 2. Home page, section by section (match the prototype)

1. **Nav**: add the green pulsing "Taking new projects" status (desktop only); logo tilts on hover.
2. **Hero**: mega headline "Websites that" + rotating ember words (book the job / ring the phone / win the
   quote / make you look good) that tilt in on a spring. Lead copy from the prototype. Pill buttons. The
   rotating "MADE IN BAYONNE · NEW JERSEY · WEB DESIGN" circular badge with the inverted mark in the middle.
   The bridge keeps its build animation, then: cars loop across the deck forever, clicking the bridge sails
   the container ship under it, and the Caveat note "our hometown bridge. click it ↓" sits above it. Make
   sure the rotating words are visible on first paint (v3's first word started hidden).
3. **Marquee band**: tilted -1.6deg, ember background, navy borders, words from the prototype, infinite
   scroll, pauses under reduced motion.
4. **The work** (cream): "The proof is *in the pixels.*" Browser frame with `public/work/luminous-desktop.jpg`
   (use `next/image`), phone frame with `public/work/luminous-phone.jpg` overlapping, mouse tilt, Caveat
   callouts, the Luminous copy and facts. Keep the "results to be added" note.
5. **Problem picker** (`id="fix"`): replaces "What we build". Five problems, answer panel with tag, headline,
   paragraph, three points and a Caveat note, springing in on change. Put the picker content in
   `src/data/problems.ts`.
6. **How we build**: keep the 3D logo story; update the heading to "Every project *clicks together* the same
   way." and the step copy from the prototype. Make the "Listen" scatter tighter so it reads as pieces of the
   mark, not noise.
7. **AI add-ons demo** (off-white): same demo, new heading copy.
8. **Founder** (`id="hi"`): polaroid with tape and Caveat caption, "Hi, I'm Francis. *I build every site
   myself.*", first-person paragraph, Caveat signature, industry pills underneath.
9. **CTA**: full ember block, mega headline "Let's build *something good.*", the reply-within-a-day line, navy
   pill button, email chip with copy button, giant faded mark in the corner.
10. **Desktop cursor dot**: ember, lags slightly, grows over links, buttons and the bridge. Hidden on touch and
    under reduced motion.

## 3. Other pages

Bring `/services`, `/work`, `/about`, `/contact` and `not-found` up to the same personality: mega or h2
headlines with one serif-italic phrase, pill buttons, at least one Caveat note per page, the ember CTA block
at the bottom of each. `/work` uses the same browser and phone frames for Luminous. `/about` uses the
polaroid. Replace the decorative "—" characters used as list markers on `/services` and `/work` with the short
ember bar from the prototype's answer panel.

## 4. Verify, then open the PR

- `npm run build` and `npm run lint` pass.
- Side by side with `docs/prototype/bay1cg-fun-prototype.html` at 375, 768, 1280, 1440 and 1920px: headlines
  are huge, the rotating words show, the cars move, the ship sails on click, the marquee runs, the picker
  springs, the tilt works on desktop.
- Reduced motion: static and fully readable.
- `grep -rn "text-\[var(--" src` returns nothing. `grep -rnw "Bay1" src` matches only the lockup and the full
  name.

Open a PR into `v4` titled "v4: Blend with soul", with screenshots of the hero, the marquee and showcase, the
picker with a different problem selected, the founder section, the ember CTA, and a phone view of the hero.
