'use client';

import React, { useState } from 'react';
import { navItemsProps } from '../page';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useNavTint, navSaturation } from '../components/navTint';

interface HeaderProps {
  navScroller: (refId: navItemsProps) => void;
}

const myEmail = 'adewaled03@gmail.com';

export default function Header({ navScroller }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const tint = useNavTint();

  const handleNav = (id: navItemsProps) => {
    setMobileOpen(false);
    navScroller(id);
  };

  // Over a (light) parallax panel the nav bar takes a soft light tint of the
  // panel's hue; text stays dark.
  const tinted = !!tint && !mobileOpen;
  const navStyle = tinted
    ? { background: `hsl(${Math.round(tint!.h)} ${navSaturation(tint!.s)}% 92% / 0.82)` }
    : undefined;

  return (
    <>
      <div className={`nav-wrap ${tinted ? 'is-tinted' : ''}`} style={navStyle}>
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('home'); }}
          className="text-[15px] font-semibold tracking-tight flex items-center gap-1"
        >
          daniel<span className="text-[var(--ink-mute)] text-[11px] -translate-y-2">®</span>
        </a>

        <nav className="flex items-center gap-7 sm:hidden">
          {navs.map((item) => (
            <button key={item.id} onClick={() => handleNav(item.id)} className="nav-link">
              {item.name}
            </button>
          ))}
          <a href="/cv" className="nav-link">CV</a>
          <a href={`mailto:${myEmail}`} className="nav-link inline-flex items-center gap-1">
            Start project <ArrowUpRight size={13} />
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="nav-toggle hidden sm:flex w-10 h-10 rounded-full bg-[var(--bg-card)] items-center justify-center"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="hidden sm:flex flex-col fixed top-[64px] left-4 right-4 z-[99] bg-[var(--bg)] border border-[var(--line)] rounded-2xl p-4 gap-1 shadow-lg">
          {navs.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-left px-3 py-3 rounded-xl text-[15px] hover:bg-[var(--bg-card)]"
            >
              {item.name}
            </button>
          ))}
          <a
            href="/cv"
            className="text-left px-3 py-3 rounded-xl text-[15px] hover:bg-[var(--bg-card)]"
          >
            CV
          </a>
          <a
            href={`mailto:${myEmail}`}
            className="mt-2 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[var(--ink)] text-[var(--bg)] text-[14px]"
          >
            Start project <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </>
  );
}

interface navProps { name: string; id: navItemsProps; }
const navs: navProps[] = [
  { name: 'Works', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Journal', id: 'articles' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'works' },
];
