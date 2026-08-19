/**
 * Pixel-art parade: a HANSI truck drives, hotdogs trail behind it,
 * and a pixel monkey chases the whole thing.
 */

const PX: Record<string, string> = {
  ".": "transparent",
  o: "var(--mustard)",
  k: "var(--ketchup)",
  c: "var(--cream)",
  b: "var(--cocoa)",
  i: "var(--ink)",
};

function Sprite({
  art,
  scale = 4,
  className = "",
}: {
  art: string[];
  scale?: number;
  className?: string;
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
      }}
    >
      {art.flatMap((row, y) =>
        Array.from({ length: cols }, (_, x) => {
          const ch = row[x] ?? ".";
          return (
            <div key={`${y}-${x}`} style={{ background: PX[ch] ?? "transparent" }} />
          );
        }),
      )}
    </div>
  );
}

const TRUCK = [
  "....oooooooooo....",
  "...oooooooooooo...",
  "..oooccccccoooo...",
  "ooooccccccccoooooo",
  "ooookkkkkkkkooooo.",
  "oooooooooooooooooo",
  "bbbbbbbbbbbbbbbbbb",
  ".ii....ii...ii.ii.",
  ".ii....ii...ii.ii.",
];

const HOTDOG = [
  "..kkkkkkkk..",
  ".oookkkkoooo",
  "oooccccccooo",
  ".oooooooooo.",
];

const MONKEY = [
  "...bbbbbb...",
  "..bbbbbbbb..",
  ".bboooooobb.",
  ".bocccccco b".replace(" ", ""),
  "..occcccco..",
  "..okkkkkko..",
  "...oooooo...",
  "..bb.oo.bb..",
  ".bb..oo..bb.",
];

function Parade() {
  return (
    <div className="flex shrink-0 items-end gap-6 pr-6">
      <Sprite art={TRUCK} scale={5} className="animate-bob" />
      <Sprite art={HOTDOG} scale={5} />
      <Sprite art={HOTDOG} scale={5} className="animate-bob" />
      <Sprite art={HOTDOG} scale={5} />
      <Sprite art={MONKEY} scale={5} className="animate-wiggle" />
    </div>
  );
}

export function HansiSnake() {
  return (
    <div className="pop overflow-hidden rounded-[2rem] bg-ink p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-xs uppercase tracking-widest text-primary">
          HANSI vs. hotdogs
        </p>
        <p className="font-display text-xs uppercase tracking-widest text-cream">
          Catch that truck
        </p>
      </div>

      <div className="relative overflow-hidden py-4">
        <div className="flex w-max animate-marquee">
          <Parade />
          <Parade />
        </div>
        <div
          aria-hidden="true"
          className="mt-2 h-[5px] w-full"
          style={{
            background:
              "repeating-linear-gradient(90deg, var(--cream) 0 15px, transparent 15px 30px)",
            opacity: 0.35,
          }}
        />
      </div>

      <p className="mt-3 text-center font-hand text-2xl text-primary">
        He never stops chasing. Same.
      </p>
    </div>
  );
}
