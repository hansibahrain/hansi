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

// Blocky illustAC-style monkey with arms up
const MONKEY = [
  "....mmmmmmmm....",
  "....mmmmmmmm....",
  "..mmmffffffmm...",
  "mm.mmffffffmm.mm",
  "mm.mmiffiffmm.mm",
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

export function HansiSnake() {
  const [dog, setDog] = useState<Pt>({ x: 0.7, y: 0.35 });
  const [monkey, setMonkey] = useState<Pt>({ x: 0.2, y: 0.6 });
  const mRef = useRef<Pt>({ x: 0.2, y: 0.6 });
  const dRef = useRef<Pt>({ x: 0.7, y: 0.35 });
  const [flip, setFlip] = useState(false);

  // hotdog jumps to a new random spot every few seconds
  useEffect(() => {
    const pick = () => {
      const next = {
        x: 0.08 + Math.random() * 0.84,
        y: 0.12 + Math.random() * 0.72,
      };
      dRef.current = next;
      setDog(next);
    };
    const id = window.setInterval(pick, 2600);
    return () => window.clearInterval(id);
  }, []);

  // monkey eases toward the hotdog
  useEffect(() => {
    let raf = 0;
    const step = () => {
      const m = mRef.current;
      const d = dRef.current;
      const nx = m.x + (d.x - m.x) * 0.012;
      const ny = m.y + (d.y - m.y) * 0.012;
      if (Math.abs(d.x - m.x) > 0.01) setFlip(d.x < m.x);
      mRef.current = { x: nx, y: ny };
      setMonkey(mRef.current);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-10 -mt-8 hidden h-40 overflow-hidden md:block"
    >
      <div
        className="absolute animate-bob transition-all duration-[2400ms] ease-in-out"
        style={{ left: `${dog.x * 100}%`, top: `${dog.y * 100}%` }}
      >
        <Sprite art={HOTDOG} scale={5} />
      </div>

      <div
        className="absolute animate-wiggle"
        style={{
          left: `${monkey.x * 100}%`,
          top: `${monkey.y * 100}%`,
          transform: flip ? "scaleX(-1)" : undefined,
        }}
      >
        <Sprite art={MONKEY} scale={5} />
      </div>
    </div>
  );
}
