'use client';

import React, { useEffect, useRef } from 'react';

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** vertical drift as a % of the image's own height (max travel each way) */
  speed?: number;
  imgClassName?: string;
};

export default function ParallaxImage({
  src,
  alt,
  speed = 16,
  imgClassName = '',
}: ParallaxImageProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const frame = layer.parentElement;
    if (!frame) return;

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let raf = 0;

    const update = () => {
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // skip work when the frame is well off-screen
      if (rect.bottom < -100 || rect.top > vh + 100) return;
      // progress: -1 (frame entering from bottom) → 0 (centered) → +1 (leaving top)
      const progress =
        (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      layer.style.transform = `translate3d(0, ${(-clamped * speed).toFixed(2)}%, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={layerRef} className="parallax-layer">
      <img src={src} alt={alt} className={imgClassName} />
    </div>
  );
}
