/**
 * Formations for the Bay1 mark. One pose per home-page stage (the `data-stage` index on each section).
 * Units are three.js world units; a slat at scale 1 is about 2.2 tall.
 */
export const SLATS = 9;
/** Slats drawn in signal; the rest are carbon. */
export const LIT = new Set([2, 5, 8]);

export type V3 = [number, number, number];
export interface SlatPose {
  p: V3;
  r: V3;
  s: V3;
}
export interface Pose {
  slats: SlatPose[];
  /** Where the whole mark sits, as a fraction of the viewport (x: -0.5..0.5 from center). */
  anchor: { x: number; y: number };
  /** Same, on narrow screens where text stacks over the scene. */
  anchorNarrow: { x: number; y: number };
  rot: V3;
  scale: number;
  /** Idle spin speed around Y, radians per second. */
  spin: number;
}

const PI = Math.PI;
const rnd = (i: number, k: number) => {
  const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
  return x - Math.floor(x);
};
const all = (f: (i: number) => SlatPose) => Array.from({ length: SLATS }, (_, i) => f(i));
const u = (n: number): V3 => [n, n, n];

/** Hero: two staggered rows of slats rising to the right. */
const stack = all((i) => {
  const row = i < 5 ? 0 : 1;
  const col = row ? i - 5 : i;
  return { p: [(col - 2) * 0.55 + row * 0.3, col * 0.2 + row * 0.9 - 0.6, -row * 0.7], r: [0, 0, 0], s: u(1) };
});

/** The problem: tools everywhere, nothing lined up. */
const scatter = all((i) => ({
  p: [(rnd(i, 1) - 0.5) * 6, (rnd(i, 2) - 0.5) * 4.2, (rnd(i, 3) - 0.5) * 3],
  r: [(rnd(i, 4) - 0.5) * PI, (rnd(i, 5) - 0.5) * PI, (rnd(i, 6) - 0.5) * PI],
  s: u(0.75),
}));

/** AI training: a team in formation, three rows of three. */
const grid = all((i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  return { p: [(col - 1) * 0.95 + row * 0.25, (1 - row) * 1.45, -row * 0.4], r: [0, 0, 0], s: u(0.55) };
});

/** AI strategy: a rising path, each step taller than the last. */
const path = all((i) => ({
  p: [(i - 4) * 0.62, -1.3 + i * 0.12 + (0.35 + i * 0.07) * 1.1, -(i - 4) * 0.35],
  r: [0, 0, 0],
  s: [0.7, 0.35 + i * 0.07, 0.7],
}));

/** Web development: bars laid flat like a page layout, header first. */
const pageWidths = [1.25, 0.55, 1, 1, 0.75, 1, 0.45, 0.85, 0.6];
const page = all((i) => {
  const w = pageWidths[i];
  return { p: [-1.2 + 1.1 * w, 1.9 - i * 0.46 - (i > 0 ? 0.3 : 0), 0], r: [0, 0, -PI / 2], s: [1, w, 1] };
});

/** Luminous: weekly output as a bar chart, climbing. */
const bars = all((i) => {
  const h = 0.25 + i * 0.11;
  return { p: [(i - 4) * 0.48, -1.6 + h * 1.1, 0], r: [0, 0, 0], s: [0.9, h, 0.9] };
});

/** Model training: an evaluation loop. */
const ring = all((i) => {
  const a = (i / SLATS) * PI * 2;
  return { p: [Math.cos(a) * 1.9, 0, Math.sin(a) * 1.9], r: [0, -a + PI / 2, 0], s: u(0.7) };
});

/** Process: a staircase you can climb. */
const stairs = all((i) => ({
  p: [(i - 4) * 0.5, (i - 4) * 0.34, 0],
  r: [PI / 2, 0, 0],
  s: [1, 0.8, 1],
}));

const right = { x: 0.24, y: 0 };
const top = { x: 0, y: 0.2 };

export const poses: Pose[] = [
  { slats: stack, anchor: right, anchorNarrow: top, rot: [0.12, -0.55, 0], scale: 1, spin: 0 },
  { slats: scatter, anchor: { x: 0.18, y: 0 }, anchorNarrow: top, rot: [0, 0, 0], scale: 0.9, spin: 0.08 },
  { slats: grid, anchor: right, anchorNarrow: top, rot: [0.15, -0.6, 0], scale: 0.95, spin: 0 },
  { slats: path, anchor: right, anchorNarrow: top, rot: [0.25, -0.5, 0], scale: 0.95, spin: 0 },
  { slats: page, anchor: right, anchorNarrow: top, rot: [0.1, -0.45, 0], scale: 0.9, spin: 0 },
  { slats: bars, anchor: { x: 0.25, y: -0.02 }, anchorNarrow: top, rot: [0.1, -0.5, 0], scale: 0.95, spin: 0 },
  { slats: ring, anchor: right, anchorNarrow: top, rot: [0.35, 0, 0], scale: 0.85, spin: 0.25 },
  { slats: stairs, anchor: right, anchorNarrow: top, rot: [0.45, -0.75, 0], scale: 1, spin: 0 },
  { slats: stack, anchor: { x: 0.22, y: 0 }, anchorNarrow: top, rot: [0.12, 0.55, 0], scale: 1.15, spin: 0 },
];
