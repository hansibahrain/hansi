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

const DESKTOP_SCALE = 5;
const MOBILE_SCALE = 3;
const HOP = 0.055; // how far the monkey jumps each hop
const CATCH_DIST = 0.16; // hotdog bolts when the monkey gets this close
const MIN_JUMP = 0.45; // new hotdog spot must be at least this far away

function getScale() {
  if (typeof window === "undefined") return DESKTOP_SCALE;
  return window.innerWidth < 640 ? MOBILE_SCALE : DESKTOP_SCALE;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function farSpot(from: Pt): Pt {
  for (let i = 0; i < 30; i++) {
    const x = 0.04 + Math.random() * 0.84;
    const y = 0.05 + Math.random() * 0.7;
    if (Math.hypot(x - from.x, y - from.y) >= MIN_JUMP) return { x, y };
  }
  return { x: clamp(1 - from.x, 0.04, 0.88), y: clamp(0.75 - from.y, 0.05, 0.75) };
}

export function HansiSnake() {
  const [dog, setDog] = useState<Pt>({ x: 0.78, y: 0.2 });
  const [monkey, setMonkey] = useState<Pt>({ x: 0.08, y: 0.6 });
  const [look, setLook] = useState<Pt>({ x: 1, y: 0 });
  const [flip, setFlip] = useState(false);

  const dRef = useRef<Pt>({ x: 0.78, y: 0.2 });
  const mRef = useRef<Pt>({ x: 0.08, y: 0.6 });

  const flee = () => {
    const next = farSpot(dRef.current);
    dRef.current = next;
    setDog(next);
  };

  useEffect(() => {
    // monkey hops toward the hotdog on a steady beat
    const id = window.setInterval(() => {
      const d = dRef.current;
      const m = mRef.current;
      const vx = d.x - m.x;
      const vy = d.y - m.y;
      const dist = Math.hypot(vx, vy) || 1;

      setLook({ x: vx / dist, y: vy / dist });
      if (Math.abs(vx) > 0.01) setFlip(vx < 0);

      if (dist < CATCH_DIST) {
        flee();
        return;
      }

      const stepLen = Math.min(HOP, dist - CATCH_DIST * 0.9);
      const nm = {
        x: clamp(m.x + (vx / dist) * stepLen, 0.02, 0.9),
        y: clamp(m.y + (vy / dist) * stepLen, 0.02, 0.75),
      };
      mRef.current = nm;
      setMonkey(nm);
    }, 380);
    return () => window.clearInterval(id);
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
        style={{
          left: `${dog.x * 100}%`,
          top: `${dog.y * 100}%`,
          transition: "left 260ms ease-out, top 260ms ease-out",
        }}
        onMouseEnter={flee}
        onTouchStart={flee}
      >
        <Sprite art={HOTDOG} scale={SCALE} />
      </div>

      <div
        aria-hidden="true"
        className="absolute"
        style={{
          left: `${monkey.x * 100}%`,
          top: `${monkey.y * 100}%`,
          transition: "left 300ms ease-in-out, top 300ms ease-in-out",
        }}
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

