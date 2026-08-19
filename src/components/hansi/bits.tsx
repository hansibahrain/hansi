import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  className?: string;
  tone?: "mustard" | "ketchup" | "cream";
  size?: "md" | "lg";
};

const toneMap = {
  mustard: "bg-primary text-primary-foreground",
  ketchup: "bg-secondary text-secondary-foreground",
  cream: "bg-card text-foreground",
};

const sizeMap = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

function btnClass({ tone = "mustard", size = "md", className }: BtnProps) {
  return cn(
    "pop press inline-flex items-center justify-center gap-2 rounded-full font-display uppercase tracking-wide",
    toneMap[tone],
    sizeMap[size],
    className,
  );
}

export function LinkButton({
  to,
  hash,
  ...props
}: BtnProps & { to: string; hash?: string }) {
  return (
    <Link to={to} hash={hash} className={btnClass(props)}>
      {props.children}
    </Link>
  );
}

export function AnchorButton({
  href,
  ...props
}: BtnProps & { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={btnClass(props)}>
      {props.children}
    </a>
  );
}

export function Sticker({
  children,
  className,
  rotate = -6,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      style={{ rotate: `${rotate}deg` }}
      className={cn(
        "pop-sm inline-block rounded-full bg-card px-4 py-1.5 font-display text-xs uppercase tracking-wider",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-6 w-full", className)}
    >
      <path
        d="M0 20 C 60 -8, 120 48, 180 20 S 300 -8, 360 20 S 480 48, 540 20 S 660 -8, 720 20 S 840 48, 900 20 S 1020 -8, 1080 20 S 1160 40, 1200 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Marquee({ words }: { words: string[] }) {
  const line = [...words, ...words];
  return (
    <div className="checker-none overflow-hidden border-y-[3px] border-cocoa bg-secondary py-3">
      <div className="animate-marquee flex w-max gap-8">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 gap-8">
            {line.map((w, i) => (
              <span
                key={`${dup}-${i}`}
                className="font-display text-sm uppercase tracking-widest text-secondary-foreground sm:text-base"
              >
                {w} <span className="text-primary">🌭</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionTitle({
  kicker,
  title,
  className,
}: {
  kicker?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {kicker ? (
        <p className="font-hand text-2xl text-secondary">{kicker}</p>
      ) : null}
      <h2 className="mt-1 text-4xl leading-[0.95] uppercase sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

export function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 48"
      aria-hidden="true"
      className={cn("animate-bob h-12 w-6", className)}
    >
      <path
        d="M12 2 V38 M4 30 L12 40 L20 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
