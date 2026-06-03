'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ParallaxImage from './parallaxImage';
import { useNavTintActions } from './navTint';

/* ---- color helpers ---- */
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  const d = max - min;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }
  return [h, s, l];
}

/** Sample an image and return its saturation-weighted dominant hue. */
function useImageHue(src: string) {
  const [hue, setHue] = useState<{ h: number; s: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      try {
        const size = 48;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, size, size);
        const { data } = ctx.getImageData(0, 0, size, size);

        // Hue is circular — average it as a unit vector, weighted by saturation.
        let vx = 0;
        let vy = 0;
        let satSum = 0;
        let count = 0;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] < 200) continue;
          const r = data[i] / 255;
          const g = data[i + 1] / 255;
          const b = data[i + 2] / 255;
          const [h, s, l] = rgbToHsl(r, g, b);
          if (l < 0.08 || l > 0.95 || s < 0.08) continue; // skip near-grey/white/black
          const rad = (h * Math.PI) / 180;
          vx += Math.cos(rad) * s;
          vy += Math.sin(rad) * s;
          satSum += s;
          count++;
        }

        if (cancelled || count === 0) return;
        let h = (Math.atan2(vy, vx) * 180) / Math.PI;
        if (h < 0) h += 360;
        setHue({ h, s: satSum / count });
      } catch {
        /* canvas/CORS issue — keep the neutral fallback */
      }
    };

    return () => {
      cancelled = true;
    };
  }, [src]);

  return hue;
}

/** Soft, LIGHT multi-blob "mesh gradient" in the image's hue family — the same
 *  pastel look as the service/journal SVGs (so it pairs with dark text). */
function hueMesh(hue: { h: number; s: number } | null): string {
  const h = hue ? Math.round(hue.h) : 222;
  const s = hue ? Math.round(Math.min(55, Math.max(30, hue.s * 100))) : 26;
  const h2 = (h + 28) % 360;
  const h3 = (h + 332) % 360;
  return [
    `radial-gradient(60% 70% at 16% 20%, hsl(${h} ${s}% 82%) 0%, transparent 62%)`,
    `radial-gradient(55% 60% at 84% 24%, hsl(${h2} ${s}% 87%) 0%, transparent 60%)`,
    `radial-gradient(72% 72% at 80% 84%, hsl(${h} ${s}% 84%) 0%, transparent 60%)`,
    `radial-gradient(55% 55% at 24% 88%, hsl(${h3} ${s}% 88%) 0%, transparent 58%)`,
    `linear-gradient(160deg, hsl(${h} ${Math.max(s - 12, 14)}% 95%), hsl(${h} ${s}% 91%))`,
  ].join(', ');
}

function domainOf(url?: string): string {
  if (!url) return '';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

export type HuePanelProps = {
  index: number;
  total: number;
  title: string;
  desc: string;
  img: string;
  /** project link — when present the panel is a link with a CTA */
  href?: string;
  /** project duration, shown in the footer */
  duration?: string;
  /** service tags, shown instead of the footer */
  tags?: string[];
  /** label above the title (services); projects use the index counter */
  eyebrow?: string;
  flip?: boolean;
  speed?: number;
};

export default function HuePanel({
  index,
  total,
  title,
  desc,
  img,
  href,
  duration,
  tags,
  eyebrow,
  flip = false,
  speed = 16,
}: HuePanelProps) {
  const hue = useImageHue(img);
  const pad = (n: number) => String(n).padStart(2, '0');

  // report this panel's hue + position so the header can tint to match
  const actions = useNavTintActions();
  const id = useId();
  const rootRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    actions?.register(id, rootRef.current, hue);
    return () => actions?.unregister(id);
  }, [actions, id, hue]);

  const domain = domainOf(href);

  const inner = (
    <div className="pv-inner">
      <div className="pv-text">
        <span className="eyebrow">
          <span className="dot" />{eyebrow ?? 'Project'} · {pad(index)} / {pad(total)}
        </span>

        <h3 className="pv-title display text-[56px] sm:text-[32px] md:text-[44px] leading-[1.0]">
          {title}
        </h3>
        <p className="pv-desc">{desc}</p>

        {tags ? (
          <div className="panel-tags">
            {tags.map((t, j) => (
              <span key={j} className="panel-tag">{t}</span>
            ))}
          </div>
        ) : (
          <div className="pv-foot">
            <span className="pv-cta">
              Visit site <ArrowUpRight size={16} />
            </span>
            {duration && <span className="pv-meta">{duration}</span>}
          </div>
        )}
      </div>

      <div className="pv-media">
        <div className="browser">
          <div className="browser-bar">
            <span className="browser-dots"><i /><i /><i /></span>
            {domain && <span className="browser-url">{domain}</span>}
          </div>
          <div className="browser-shot">
            <ParallaxImage src={img} alt={title} speed={speed} />
          </div>
        </div>
      </div>
    </div>
  );

  const className = `pv-panel ${flip ? 'is-flipped' : ''} group`;
  const style = { backgroundImage: hueMesh(hue) };

  return href ? (
    <a
      ref={rootRef as React.RefObject<HTMLAnchorElement>}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {inner}
    </a>
  ) : (
    <div ref={rootRef as React.RefObject<HTMLDivElement>} className={className} style={style}>
      {inner}
    </div>
  );
}
