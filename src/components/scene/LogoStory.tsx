"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Mark } from "../Logo";

const svgPathD =
  "M0.0 269.8L0.0 211.5L17.8 199.9C27.5 193.5 46.1 181.3 59.0 172.9C71.9 164.4 92.7 150.8 105.2 142.5C117.7 134.2 131.9 125.0 136.7 121.9C175.0 97.3 231.9 60.8 238.5 56.5C256.1 45.1 255.0 45.6 256.6 47.7C260.4 52.5 266.3 65.8 267.6 72.7C272.5 98.6 263.4 122.0 241.8 138.7C230.8 147.1 205.0 158.6 190.2 161.5C188.5 161.9 187.0 162.5 187.0 162.9C187.0 163.2 190.9 164.1 195.8 164.8C214.3 167.3 235.0 173.6 250.5 181.3C266.4 189.2 277.9 199.1 285.3 211.3C293.6 224.9 295.7 243.5 290.9 261.5C290.3 263.7 288.0 269.1 285.7 273.5C276.1 292.1 252.6 309.5 224.5 318.9L215.5 321.9L215.2 313.5L214.9 305.0L193.5 305.0L172.0 305.0L172.0 224.0L172.0 143.0L153.4 143.0L134.7 143.0L113.1 157.0C101.2 164.8 90.5 171.9 89.2 172.8C87.0 174.5 87.0 175.0 87.2 189.3L87.5 204.1L109.0 190.8C120.8 183.4 131.1 177.1 131.8 176.6C132.7 176.0 133.0 189.1 133.0 240.4L133.0 305.0L109.5 305.0L86.0 305.0L86.0 316.5L86.0 328.0L43.0 328.0L0.0 328.0L0.0 269.8ZM-0.0 156.1L-0.0 134.2L20.2 120.9C31.4 113.6 49.7 101.5 61.0 94.0C72.3 86.6 91.6 74.0 104.0 66.0C116.4 58.1 131.4 48.4 137.5 44.5C143.6 40.6 151.9 35.3 156.0 32.6C160.1 30.0 170.0 23.7 178.0 18.6L192.5 9.3L197.5 10.7C205.1 12.9 214.5 16.8 224.4 21.7L233.3 26.2L222.9 32.9C217.2 36.7 200.1 47.7 185.0 57.5C141.4 85.7 139.7 86.8 115.0 102.9C102.1 111.3 84.1 123.1 75.0 129.0C53.7 143.0 15.2 168.2 4.8 174.9L-0.0 177.9L-0.0 156.1ZM0.0 96.2C0.0 88.8 3.0 72.7 6.0 64.3C16.1 35.1 39.8 14.0 72.3 5.1C86.9 1.1 96.5 -0.0 116.5 0.0C136.1 0.0 151.0 0.8 151.0 1.9C151.0 2.2 144.0 7.0 135.5 12.5C126.9 18.0 114.4 26.1 107.7 30.5C101.0 34.9 87.8 43.4 78.5 49.4C69.1 55.4 57.1 63.3 51.6 66.9C46.2 70.5 38.1 75.9 33.7 78.8C29.2 81.7 20.1 87.6 13.4 92.0C6.7 96.4 1.0 100.0 0.6 100.0C0.3 100.0 0.0 98.3 0.0 96.2Z";

const stepsData = [
  {
    title: "Listen",
    desc: "We start with a call about how your week actually runs and where the time goes.",
  },
  {
    title: "Plan",
    desc: "You get a short plan: what to build first, what it costs, and what it should save you.",
  },
  {
    title: "Build",
    desc: "We build in small pieces you can see and try along the way. No black box.",
  },
  {
    title: "Launch",
    desc: "We launch, show your team how to use it, and stay on call to keep it running.",
  },
];

export default function LogoStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasHostRef = useRef<HTMLDivElement | null>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [progressPct, setProgressPct] = useState(0);
  const [glSupported] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const c = document.createElement("canvas");
      return !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
    } catch {
      return false;
    }
  });

  // Handle scroll progress & stage selection
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, span)));
      setProgressPct(p * 100);
      const s = Math.min(3, Math.floor(p * 4.0001));
      setActiveStage(s);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Set up Three.js 3D extruded mark scene
  useEffect(() => {
    const host = canvasHostRef.current;
    if (!host || !glSupported) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Parse path string to shapes & holes
    const polys: { path: THREE.Path; pts: [number, number][]; a?: number }[] = [];
    svgPathD.replace(/([MLCZ])([^MLCZ]*)/g, (_, c, a) => {
      const n = a.trim() ? a.trim().split(/[\s,]+/).map(Number) : [];
      if (c === "M") {
        const p = new THREE.Path();
        p.moveTo(n[0], -n[1]);
        polys.push({ path: p, pts: [[n[0], -n[1]]] });
      } else if (c === "L") {
        const P = polys[polys.length - 1];
        P.path.lineTo(n[0], -n[1]);
        P.pts.push([n[0], -n[1]]);
      } else if (c === "C") {
        const P = polys[polys.length - 1];
        P.path.bezierCurveTo(n[0], -n[1], n[2], -n[3], n[4], -n[5]);
        P.pts.push([n[4], -n[5]]);
      }
      return "";
    });

    const area = (pts: [number, number][]) => {
      let s = 0;
      for (let i = 0; i < pts.length; i++) {
        const [a, b] = pts[i];
        const [c, e] = pts[(i + 1) % pts.length];
        s += a * e - c * b;
      }
      return s / 2;
    };

    const inside = (pt: [number, number], pts: [number, number][]) => {
      let o = false;
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const [xi, yi] = pts[i];
        const [xj, yj] = pts[j];
        if (yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) {
          o = !o;
        }
      }
      return o;
    };

    polys.forEach((p) => (p.a = area(p.pts)));
    const big = polys.reduce((m, p) => (Math.abs(p.a!) > Math.abs(m.a!) ? p : m));
    const sign = Math.sign(big.a!);
    const outers = polys.filter((p) => Math.sign(p.a!) === sign);
    const holes = polys.filter((p) => Math.sign(p.a!) !== sign);

    const shapes = outers.map((o) => {
      const s = new THREE.Shape();
      s.curves = o.path.curves;
      s.currentPoint = o.path.currentPoint;
      s.holes = holes.filter((h) => inside(h.pts[0], o.pts)).map((h) => h.path);
      return {
        s,
        c: o.pts.reduce(
          (m, [x, y]) => [m[0] + x / o.pts.length, m[1] + y / o.pts.length],
          [0, 0] as [number, number],
        ),
      };
    });

    const LAYERS = 5;
    const SCALE = 1 / 100;
    const CX = 147;
    const CY = -164;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    cam.position.set(0, 0, 11);

    const ren = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    ren.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    host.appendChild(ren.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 1.05);
    key.position.set(3, 4, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x8ea2b9, 0.9);
    rim.position.set(-5, -2, -4);
    scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    const tones = [0x6e230a, 0x8a2c0b, 0xb33a0f, 0xcf4716, 0xe8531e];
    const mats = tones.map(
      (t) =>
        new THREE.MeshStandardMaterial({
          color: t,
          roughness: 0.42,
          metalness: 0.12,
          emissive: 0xe8531e,
          emissiveIntensity: 0,
        }),
    );

    const rnd = (i: number, k: number) => {
      const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
      return x - Math.floor(x);
    };

    type ItemPose = { p: [number, number, number]; r: [number, number, number]; s: number };
    type ItemState = { x: number[]; v: number[] };
    const items: { m: THREE.Mesh; poses: ItemPose[]; st: ItemState; delay: number }[] = [];

    shapes.forEach(({ s, c }, pi) => {
      const geo = new THREE.ExtrudeGeometry(s, {
        depth: 12,
        bevelEnabled: true,
        bevelThickness: 1.2,
        bevelSize: 1,
        bevelSegments: 2,
        curveSegments: 10,
      });
      geo.translate(-c[0], -c[1], -6);

      for (let l = 0; l < LAYERS; l++) {
        const m = new THREE.Mesh(geo, mats[l]);
        m.scale.setScalar(SCALE);
        group.add(m);

        const off = [(c[0] - CX) * SCALE, (c[1] - CY) * SCALE];
        const k = pi * LAYERS + l;
        const poses: ItemPose[] = [
          {
            p: [(rnd(k, 1) - 0.5) * 5.2, (rnd(k, 2) - 0.5) * 3.8, (rnd(k, 3) - 0.5) * 3],
            r: [(rnd(k, 4) - 0.5) * 2.2, (rnd(k, 5) - 0.5) * 2.2, (rnd(k, 6) - 0.5) * 1.6],
            s: 0.62,
          },
          {
            p: [off[0] + (pi - 1) * 0.18, off[1] + (pi - 1) * 0.12, (l - 2) * 0.62],
            r: [0, 0, 0],
            s: 0.92,
          },
          {
            p: [off[0], off[1], (l - 2) * 0.13],
            r: [0, 0, 0],
            s: 1,
          },
          {
            p: [off[0], off[1], (l - 2) * 0.13],
            r: [0, 0, 0],
            s: 1.04,
          },
        ];

        const initialPose = reduce ? poses[3] : poses[0];
        const st: ItemState = {
          x: [...initialPose.p, ...initialPose.r, initialPose.s],
          v: new Array(7).fill(0),
        };

        items.push({ m, poses, st, delay: (pi * LAYERS + l) * 0.035 });
      }
    });

    const gPose = [
      { r: [0.15, -0.5, 0] },
      { r: [0.32, -0.78, 0] },
      { r: [0.08, -0.22, 0] },
      { r: [0.05, 0, 0] },
    ];
    const g = { x: reduce ? [0.05, 0, 0] : [0.15, -0.5, 0], v: [0, 0, 0] };

    function size() {
      if (!host) return;
      const w = host.clientWidth;
      const h = host.clientHeight;
      ren.setSize(w, h, false);
      cam.aspect = w / h;
      cam.position.z = w < 500 ? 13.5 : 11;
      cam.updateProjectionMatrix();
    }
    size();
    window.addEventListener("resize", size);

    const K = reduce ? 0 : 120;
    const C = reduce ? 0 : 13;
    let last = performance.now();
    const t0 = last;
    let idle = 0;
    let ptr = [0, 0];
    let stageAt = last;
    let currentStage = 0;
    let animId = 0;

    const onPointerMove = (e: PointerEvent) => {
      ptr = [e.clientX / window.innerWidth - 0.5, e.clientY / window.innerHeight - 0.5];
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    function spring(x: number, v: number, target: number, dt: number) {
      const a = K * (target - x) - C * v;
      v += a * dt;
      x += v * dt;
      return [x, v];
    }

    const activeStageRef = { current: 0 };

    const updateStage = () => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, span)));
      const s = Math.min(3, Math.floor(p * 4.0001));
      if (s !== activeStageRef.current) {
        activeStageRef.current = s;
      }
    };
    window.addEventListener("scroll", updateStage, { passive: true });

    function frame(now: number) {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;

      const stage = reduce ? 3 : activeStageRef.current;
      if (stage !== currentStage) {
        currentStage = stage;
        stageAt = now;
      }
      const since = (now - stageAt) / 1000;

      items.forEach((it) => {
        const P = it.poses[stage];
        const T = [...P.p, ...P.r, P.s];
        if (reduce) {
          it.st.x = T.slice();
        } else if (since >= it.delay) {
          for (let i = 0; i < 7; i++) {
            const [x, v] = spring(it.st.x[i], it.st.v[i], T[i], dt);
            it.st.x[i] = x;
            it.st.v[i] = v;
          }
        }
        const x = it.st.x;
        it.m.position.set(x[0], x[1], x[2]);
        it.m.rotation.set(x[3], x[4], x[5]);
        it.m.scale.setScalar(x[6] * SCALE);
      });

      idle = stage === 3 && !reduce ? idle + dt * 0.35 : idle * 0.94;
      const GT = gPose[stage].r;
      for (let i = 0; i < 3; i++) {
        const tgt = GT[i] + (i === 1 ? Math.sin(idle) * 0.5 + ptr[0] * 0.25 : 0) + (i === 0 ? ptr[1] * 0.12 : 0);
        if (reduce) {
          g.x[i] = tgt;
        } else {
          const [x, v] = spring(g.x[i], g.v[i], tgt, dt);
          g.x[i] = x;
          g.v[i] = v;
        }
      }
      group.rotation.set(g.x[0], g.x[1], g.x[2]);

      const glow = stage === 3 ? 0.22 + Math.sin((now - t0) / 700) * 0.06 : 0;
      mats.forEach((m) => (m.emissiveIntensity += (glow - m.emissiveIntensity) * 0.08));

      if (host) {
        const r = host.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          ren.render(scene, cam);
        }
      }
      animId = requestAnimationFrame(frame);
    }

    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", size);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", updateStage);
      if (host && ren.domElement.parentNode === host) {
        host.removeChild(ren.domElement);
      }
      ren.dispose();
    };
  }, [glSupported]);

  return (
    <section ref={sectionRef} className="story bg-navy text-[#F7F7F4] h-[420vh] relative p-0" id="how" aria-label="How we build">
      <div className="story-pin sticky top-[68px] h-[calc(100vh-68px)] flex items-center overflow-hidden">
        <div className="wrap grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-[clamp(20px,4vw,64px)] items-center w-full">
          <div className="story-copy">
            <div className="label text-steel-lt">How we build</div>
            <h2 className="text-[length:var(--h2)] mt-4 max-w-[13ch] font-semibold leading-[1.02] tracking-[-0.035em]">
              Every project comes together the same way.
            </h2>
            <ol className="steps list-none m-0 mt-[clamp(20px,3vw,36px)] p-0 grid gap-1 [counter-reset:s]">
              {stepsData.map((step, idx) => {
                const isOn = idx === activeStage;
                return (
                  <li
                    key={step.title}
                    className={`[counter-increment:s] py-3 pl-11 pr-0 relative border-t border-steel-lt/20 transition-colors duration-300 ${
                      isOn ? "text-[#F7F7F4]" : "text-steel-lt"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-[13px] text-[0.8rem] font-semibold tracking-wider transition-colors duration-300 ${
                        isOn ? "text-ember" : "text-steel-lt"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <b
                      className={`text-[length:var(--h3)] font-semibold tracking-[-0.025em] block leading-snug transition-transform duration-550 origin-left ${
                        isOn ? "scale-[1.04]" : ""
                      }`}
                    >
                      {step.title}
                    </b>
                    <p
                      className={`max-w-[30rem] overflow-hidden transition-all duration-500 ${
                        isOn ? "max-h-[6em] opacity-100 mt-1 text-steel-lt" : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </li>
                );
              })}
            </ol>
            <div className="meter h-[3px] bg-steel-lt/20 rounded-sm mt-[22px] overflow-hidden max-w-[30rem]" aria-hidden="true">
              <i className="block h-full bg-ember transition-all duration-200 ease-linear" style={{ width: `${progressPct}%` }} />
            </div>
          </div>

          <div
            ref={canvasHostRef}
            className="stage relative h-[min(72vh,640px)] min-h-[300px] max-md:order-first max-md:h-[36vh] max-md:min-h-[220px]"
          >
            {!glSupported && (
              <div className="absolute inset-[18%] w-[64%] h-auto color-ember flex items-center justify-center">
                <Mark className="w-full h-full text-ember" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
