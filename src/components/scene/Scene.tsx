"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { LIT, poses, SLATS, type V3 } from "./poses";

const { damp, clamp, smootherstep } = THREE.MathUtils;
const TAU = Math.PI * 2;

/** A slanted parallelogram slat, extruded, centered on the origin. */
function makeSlat() {
  const w = 0.5;
  const h = 2.2;
  const skew = 0.45;
  const s = new THREE.Shape();
  s.moveTo(-w / 2 - skew / 2, -h / 2);
  s.lineTo(w / 2 - skew / 2, -h / 2);
  s.lineTo(w / 2 + skew / 2, h / 2);
  s.lineTo(-w / 2 + skew / 2, h / 2);
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, {
    depth: 0.35,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 3,
  });
  g.translate(0, 0, -0.175);
  return g;
}

/**
 * Which stage the page is on, as a float. Holds each pose for most of its section and blends into the next
 * over the section's last stretch, so the change lands as the next section reaches mid-screen.
 */
function readStage(sections: HTMLElement[]) {
  const mid = window.innerHeight * 0.5;
  for (const el of sections) {
    const r = el.getBoundingClientRect();
    if (r.top <= mid && r.bottom > mid) {
      const f = (mid - r.top) / r.height;
      return Number(el.dataset.stage) + smootherstep(clamp((f - 0.6) / 0.4, 0, 1), 0, 1);
    }
  }
  const first = sections[0]?.getBoundingClientRect();
  return first && first.top > mid ? 0 : poses.length - 1;
}

const mix = (a: V3, b: V3, t: number): V3 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

function Mark({ reduced, wrapper }: { reduced: boolean; wrapper: React.RefObject<HTMLDivElement | null> }) {
  const group = useRef<THREE.Group>(null);
  const slats = useRef<(THREE.Mesh | null)[]>([]);
  const spin = useRef(0);
  const sections = useRef<HTMLElement[]>([]);
  const geometry = useMemo(makeSlat, []);

  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
    return () => geometry.dispose();
  }, [geometry]);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    dt = Math.min(dt, 1 / 20);
    const lambda = reduced ? 1000 : 4.5;

    const stage = readStage(sections.current);
    const a = Math.floor(stage);
    const b = Math.min(a + 1, poses.length - 1);
    const t = stage - a;
    const A = poses[a];
    const B = poses[b];

    slats.current.forEach((m, k) => {
      if (!m) return;
      const p = mix(A.slats[k].p, B.slats[k].p, t);
      const r = mix(A.slats[k].r, B.slats[k].r, t);
      const s = mix(A.slats[k].s, B.slats[k].s, t);
      // Stagger slightly so the formation reshuffles instead of moving as one block.
      const l = lambda * (1 - k * 0.04);
      m.position.set(damp(m.position.x, p[0], l, dt), damp(m.position.y, p[1], l, dt), damp(m.position.z, p[2], l, dt));
      m.rotation.set(damp(m.rotation.x, r[0], l, dt), damp(m.rotation.y, r[1], l, dt), damp(m.rotation.z, r[2], l, dt));
      m.scale.set(damp(m.scale.x, s[0], l, dt), damp(m.scale.y, s[1], l, dt), damp(m.scale.z, s[2], l, dt));
    });

    const { width, height } = state.viewport;
    const narrow = state.size.width < 768;
    const anchor = narrow ? mix([A.anchorNarrow.x, A.anchorNarrow.y, 0], [B.anchorNarrow.x, B.anchorNarrow.y, 0], t) : mix([A.anchor.x, A.anchor.y, 0], [B.anchor.x, B.anchor.y, 0], t);
    const fit = Math.min(1, height / 6.2) * (narrow ? Math.min(0.62, width / 5.5) : 1);
    const scale = (A.scale + (B.scale - A.scale) * t) * fit;
    const rot = mix(A.rot, B.rot, t);

    const spinRate = reduced ? 0 : A.spin + (B.spin - A.spin) * t;
    spin.current = spinRate > 0.01 ? spin.current + spinRate * dt : damp(spin.current, Math.round(spin.current / TAU) * TAU, 2, dt);

    const px = reduced || narrow ? 0 : state.pointer.x;
    const py = reduced || narrow ? 0 : state.pointer.y;
    const gl = lambda * 0.8;
    g.position.set(damp(g.position.x, anchor[0] * width, gl, dt), damp(g.position.y, anchor[1] * height, gl, dt), 0);
    g.scale.setScalar(damp(g.scale.x, scale, gl, dt));
    g.rotation.set(
      damp(g.rotation.x, rot[0] - py * 0.12, gl, dt),
      damp(g.rotation.y, rot[1] + spin.current + px * 0.18, gl, dt),
      damp(g.rotation.z, rot[2], gl, dt),
    );

    // On phones the mark sits behind text after the hero, so it steps back.
    if (wrapper.current) wrapper.current.style.opacity = narrow && stage > 0.5 ? "0.28" : "1";
  });

  return (
    <group ref={group}>
      {Array.from({ length: SLATS }, (_, k) => (
        <mesh
          key={k}
          ref={(m) => {
            slats.current[k] = m;
          }}
          geometry={geometry}
          position={poses[0].slats[k].p}
        >
          {LIT.has(k) ? (
            <meshStandardMaterial color="#e2471b" roughness={0.38} metalness={0.15} emissive="#e2471b" emissiveIntensity={0.12} />
          ) : (
            <meshStandardMaterial color="#3a332e" roughness={0.3} metalness={0.6} />
          )}
        </mesh>
      ))}
    </group>
  );
}

export default function Scene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [reduced] = useState(() => typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches);

  return (
    <div
      ref={wrapper}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
      style={{ visibility: ready ? "visible" : "hidden" }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 9], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        eventSource={typeof document !== "undefined" ? document.body : undefined}
        eventPrefix="client"
        onCreated={() => setReady(true)}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 5]} intensity={1.6} />
        <directionalLight position={[-6, -2, 3]} intensity={0.5} color="#e2471b" />
        <Environment resolution={256} frames={1}>
          <Lightformer form="rect" intensity={2.2} position={[0, 5, -3]} scale={[12, 2, 1]} color="#ece6dc" />
          <Lightformer form="rect" intensity={1.2} position={[-6, 1, 2]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} color="#ece6dc" />
          <Lightformer form="rect" intensity={1.4} position={[6, -1, 2]} rotation-y={-Math.PI / 2} scale={[8, 1.5, 1]} color="#e2471b" />
        </Environment>
        <Mark reduced={reduced} wrapper={wrapper} />
      </Canvas>
    </div>
  );
}
