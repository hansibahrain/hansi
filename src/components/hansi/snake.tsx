/**
 * Pixel monkey chasing a pixel hotdog inside a single homepage strip.
 * Sits in the page flow, right under the hero and above the intro.
 */

import { useEffect, useRef, useState } from "react";

const PX: Record<string, string> = {
  ".": "transparent",
  d: "#8a4b1d", // dark brown fur
  m: "#a5561f", // mid brown fur
  f: "#f2c98a", // face tan
  i: "#1b1b1b", // ink
  b: "#e8b878", // bun
  B: "#d79a55", // bun shade
  k: "#c9203a", // ketchup / sausage
  r: "#e8455c", // sausage highlight
  y: "#ffd400", // mustard
  w: "#ffffff",
};

function Sprite({
  art,
  scale = 5,
  className = "",
  style,
}: {
  art: string[];
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cols = Math.max(...art.map((r) => r.length));
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${scale}px)`,
        gridAutoRows: `${scale}px`,
        ...style,
      }}
    >
      {art.flatMap((row, y) =>
        Array.from({ length: cols }, (_, x) => {
          const ch = row[x] ?? ".";
          return <div key={`${y}-${x}`} style={{ background: PX[ch] ?? "transparent" }} />;
        }),
      )}
    </div>
  );
}

// Blocky illustAC-style monkey with arms up (eyes are drawn as an overlay)
const MONKEY = [
  "....mmmmmmmm....",
  "....mmmmmmmm....",
  "..mmmffffffmm...",
  "mm.mmffffffmm.mm",
  "mm.mmffffffmm.mm",
  "mm.mmffffffmm.mm",
  "mmmmmffffffmmmmm",
  "mmmmmffffffmmmmm",
  "mm..mmffffmm..mm",
  "mm..mmmmmmmm..mm",
  "mmmmmmmmmmmmmmmm",
  "....mmmmmmmm....",
  "....mmmmmmmm....",
  "....mmmmmmmm....",
  "....mmm..mmm....",
  "....mmm..mmm....",
  "....mmm..mmm....",
];

// Diagonal pixel hotdog with mustard zigzag
const HOTDOG = [
  "..........iiiii.",
  ".........ikkkkii",
  "........iykkkkbi",
  ".......iykyikbBi",
  "......iykiikbBBi",
  ".....iykkiibBBi.",
  "....iykiikbBBi..",
  "..iikkiibbBBi...",
  ".ikkiiwbbBBi....",
  "ikkiiwbbBBi.....",
  "ikiibbbBBi......",
  ".iibbBBBi.......",
  "..iiBBii........",
  "...iiii.........",
];

type Pt = { x: number; y: number };

const SCALE = 5;
const MIN_GAP = 0.14; // monkey never closes this gap

export function HansiSnake() {
  const [dog, setDog] = useState<Pt>({ x: 0.7, y: 0.35 });
  const [monkey, setMonkey] = useState<Pt>({ x: 0.15, y: 0.6 });
  const [look, setLook] = useState<Pt>({ x: 1, y: 0 });
  const [flip, setFlip] = useState(false);

  const dRef = useRef<Pt>({ x: 0.7, y: 0.35 });
  const targetRef = useRef<Pt>({ x: 0.3, y: 0.25 });
  const mRef = useRef<Pt>({ x: 0.15, y: 0.6 });

  const pickTarget = () => {
    targetRef.current = {
      x: 0.06 + Math.random() * 0.8,
      y: 0.08 + Math.random() * 0.6,
    };
  };

  useEffect(() => {
    const id = window.setInterval(pickTarget, 2200);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    let raf = 0;
    const step = () => {
      // hotdog glides toward its waypoint
      const d = dRef.current;
      const t = targetRef.current;
      const dx = t.x - d.x;
      const dy = t.y - d.y;
      if (Math.hypot(dx, dy) < 0.02) pickTarget();
      const nd = { x: d.x + dx * 0.02, y: d.y + dy * 0.02 };
      dRef.current = nd;
      setDog(nd);

      // monkey chases but always stays a step behind
      const m = mRef.current;
      const vx = nd.x - m.x;
      const vy = nd.y - m.y;
      const dist = Math.hypot(vx, vy) || 1;
      const chase = dist > MIN_GAP ? 0.018 : 0;
      const nm = { x: m.x + vx * chase, y: m.y + vy * chase };
      mRef.current = nm;
      setMonkey(nm);

      if (Math.abs(vx) > 0.01) setFlip(vx < 0);
      setLook({ x: vx / dist, y: vy / dist });

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pupil = (leftPx: number) => ({
    position: "absolute" as const,
    width: SCALE,
    height: SCALE,
    background: PX['i'],
    left: leftPx + look.x * 3,
    top: 4 * SCALE + 1 + look.y * 3,
  });

  return (
    <div className="pointer-events-none relative z-10 -mt-6 h-28 overflow-hidden sm:h-36 md:h-40">
      <div
        className="pointer-events-auto absolute animate-bob cursor-pointer"
        style={{ left: `${dog.x * 100}%`, top: `${dog.y * 100}%` }}
        onMouseEnter={pickTarget}
        onTouchStart={pickTarget}
      >
        <Sprite art={HOTDOG} scale={SCALE} />
      </div>

      <div
        aria-hidden="true"
        className="absolute"
        style={{ left: `${monkey.x * 100}%`, top: `${monkey.y * 100}%` }}
      >
        <div className="relative animate-wiggle">
          <div style={{ transform: flip ? "scaleX(-1)" : undefined }}>
            <Sprite art={MONKEY} scale={SCALE} />
          </div>
          {/* eyes follow the hotdog */}
          <div style={{ position: "absolute", left: 5 * SCALE, top: 4 * SCALE, width: 2 * SCALE, height: 2 * SCALE, background: PX['w'] }} />
          <div style={{ position: "absolute", left: 9 * SCALE, top: 4 * SCALE, width: 2 * SCALE, height: 2 * SCALE, background: PX['w'] }} />
          <div style={pupil(5 * SCALE + 1)} />
          <div style={pupil(9 * SCALE + 1)} />
        </div>
      </div>
    </div>
  );
}
