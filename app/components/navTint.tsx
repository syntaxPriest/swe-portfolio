'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export type Hue = { h: number; s: number };

type Actions = {
  register: (id: string, el: HTMLElement | null, color: Hue | null) => void;
  unregister: (id: string) => void;
};

// Split into two contexts so panels (which only need the stable register/
// unregister actions) don't re-render every time the tint changes.
const TintStateContext = createContext<Hue | null>(null);
const TintActionsContext = createContext<Actions | null>(null);

export const useNavTint = () => useContext(TintStateContext);
export const useNavTintActions = () => useContext(TintActionsContext);

const NAV_LINE = 46; // y-position (px) the nav sits over

function sameHue(a: Hue | null, b: Hue | null) {
  if (a === b) return true;
  if (!a || !b) return false;
  return Math.abs(a.h - b.h) < 0.5 && Math.abs(a.s - b.s) < 0.01;
}

export function NavTintProvider({ children }: { children: React.ReactNode }) {
  const registry = useRef<Map<string, { el: HTMLElement; color: Hue | null }>>(
    new Map()
  );
  const [tint, setTint] = useState<Hue | null>(null);
  const tintRef = useRef<Hue | null>(null);

  const recompute = useCallback(() => {
    let active: Hue | null = null;
    registry.current.forEach(({ el, color }) => {
      if (!color) return;
      const r = el.getBoundingClientRect();
      if (r.top <= NAV_LINE && r.bottom > NAV_LINE) active = color;
    });
    if (!sameHue(tintRef.current, active)) {
      tintRef.current = active;
      setTint(active);
    }
  }, []);

  const actions = useMemo<Actions>(
    () => ({
      register: (id, el, color) => {
        if (!el) return;
        registry.current.set(id, { el, color });
        recompute();
      },
      unregister: (id) => {
        registry.current.delete(id);
        recompute();
      },
    }),
    [recompute]
  );

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(recompute);
    };
    recompute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [recompute]);

  return (
    <TintActionsContext.Provider value={actions}>
      <TintStateContext.Provider value={tint}>
        {children}
      </TintStateContext.Provider>
    </TintActionsContext.Provider>
  );
}

/** Shared helper: clamp a hue's saturation the same way the panels do. */
export function navSaturation(s: number) {
  return Math.round(Math.min(70, Math.max(40, s * 100 + 12)));
}
