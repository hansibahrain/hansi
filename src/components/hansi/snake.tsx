import { useEffect, useMemo, useRef, useState } from "react";

type Cell = { x: number; y: number };

const COLS = 24;
const ROWS = 10;

function randFood(taken: Cell[]): Cell {
  let f: Cell;
  do {
    f = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
  } while (taken.some((c) => c.x === f.x && c.y === f.y));
  return f;
}

/**
 * Auto-playing pixel "snake": HANSI the monkey chases a hotdog around the grid.
 */
export function HansiSnake() {
  const [snake, setSnake] = useState<Cell[]>([
    { x: 6, y: 5 },
    { x: 5, y: 5 },
    { x: 4, y: 5 },
  ]);
  const [food, setFood] = useState<Cell>({ x: 16, y: 3 });
  const [score, setScore] = useState(0);
  const dirRef = useRef<Cell>({ x: 1, y: 0 });

  useEffect(() => {
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0]!;
        const dir = dirRef.current;

        // greedy chase: prefer the axis with the biggest gap, avoid reversing/self
        const options: Cell[] = [];
        if (food.x !== head.x) options.push({ x: Math.sign(food.x - head.x), y: 0 });
        if (food.y !== head.y) options.push({ x: 0, y: Math.sign(food.y - head.y) });
        options.push(dir, { x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 });

        const body = prev.slice(0, -1);
        const next =
          options.find((o) => {
            const nx = head.x + o.x;
            const ny = head.y + o.y;
            if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) return false;
            return !body.some((c) => c.x === nx && c.y === ny);
          }) ?? dir;

        dirRef.current = next;
        const newHead = { x: head.x + next.x, y: head.y + next.y };
        const ate = newHead.x === food.x && newHead.y === food.y;
        const grown = [newHead, ...prev];
        if (ate) {
          setScore((s) => s + 1);
          setFood(randFood(grown));
          if (grown.length > 12) grown.pop();
          return grown;
        }
        grown.pop();
        return grown;
      });
    }, 140);
    return () => clearInterval(id);
  }, [food]);

  const cells = useMemo(() => Array.from({ length: COLS * ROWS }), []);

  return (
    <div className="pop rounded-[2rem] bg-ink p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-xs uppercase tracking-widest text-primary">
          HANSI vs. hotdogs
        </p>
        <p className="font-display text-xs uppercase tracking-widest text-cream">
          Dogs eaten: {score}
        </p>
      </div>
      <div
        aria-hidden="true"
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {cells.map((_, i) => {
          const x = i % COLS;
          const y = Math.floor(i / COLS);
          const idx = snake.findIndex((c) => c.x === x && c.y === y);
          const isFood = food.x === x && food.y === y;
          const isHead = idx === 0;
          const isBody = idx > 0;
          return (
            <div
              key={i}
              className="aspect-square rounded-[2px]"
              style={{
                background: isHead
                  ? "var(--mustard)"
                  : isBody
                    ? "color-mix(in oklab, var(--mustard) 55%, var(--ink))"
                    : isFood
                      ? "var(--ketchup)"
                      : "color-mix(in oklab, var(--cream) 7%, transparent)",
                boxShadow: isHead ? "0 0 0 2px var(--cream)" : undefined,
              }}
            />
          );
        })}
      </div>
      <p className="mt-3 text-center font-hand text-2xl text-primary">
        He never stops eating. Same.
      </p>
    </div>
  );
}
