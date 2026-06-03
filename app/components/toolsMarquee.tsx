'use client';

import React, { useEffect, useRef } from 'react';

type Tool = { name: string; file: string };

export default function ToolsMarquee({ items }: { items: Tool[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const logos = Array.from(root.querySelectorAll<HTMLElement>('.tool-logo'));
    if (!logos.length) return;

    let raf = 0;
    let stopped = false;

    const tick = () => {
      const rect = root.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      let best: HTMLElement | null = null;
      let bestDist = Infinity;
      for (const el of logos) {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const d = Math.abs(cx - centerX);
        if (d < bestDist) {
          bestDist = d;
          best = el;
        }
      }

      // exactly one logo is always in the "limelight" — the one nearest center
      for (const el of logos) {
        el.classList.toggle('is-spot', el === best);
      }

      if (!stopped) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <div className="x-marquee tools-marquee hero-tools" ref={rootRef}>
      <div className="x-track">
        {[...items, ...items].map((s, i) => (
          <span key={i} className="tool-logo" aria-hidden={i >= items.length}>
            <img src={`/stack/${s.file}`} alt={s.name} />
            <span className="tool-tip">{s.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
