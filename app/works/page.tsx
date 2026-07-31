'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/reveal';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { myEmail, projectList, heroStats, type Category } from '../data/portfolio';

const PER_PAGE = 6;

const FILTERS: Category[] = ['All', 'Platform', 'Web app', 'Marketing site'];

export default function WorksPage() {
  const [filter, setFilter] = useState<Category>('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (filter === 'All' ? projectList : projectList.filter((w) => w.category === filter)),
    [filter]
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const goTo = (p: number) => {
    setPage(p);
    if (typeof document !== 'undefined') {
      document.getElementById('wp-grid-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const pickFilter = (c: Category) => {
    setFilter(c);
    setPage(1);
  };

  return (
    <main>
      {/* ===== Nav ===== */}
      <header className="nav-wrap">
        <Link href="/" className="text-[15px] font-semibold tracking-tight flex items-center gap-1">
          daniel<span className="text-[var(--ink-mute)] text-[11px] -translate-y-2">®</span>
        </Link>
        <nav className="flex items-center gap-7 sm:hidden">
          <Link href="/#about" className="nav-link">About</Link>
          <Link href="/#experience" className="nav-link">Experience</Link>
          <Link href="/#articles" className="nav-link">Journal</Link>
          <Link href="/cv" className="nav-link">CV</Link>
          <a href={`mailto:${myEmail}`} className="nav-link inline-flex items-center gap-1">
            Start project <ArrowUpRight size={13} />
          </a>
        </nav>
        <Link href="/" className="hidden sm:inline-flex nav-link items-center gap-1">
          <ChevronLeft size={14} /> Home
        </Link>
      </header>

      {/* ===== Hero ===== */}
      <section className="wp-hero px-9 sm:px-5">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <span className="eyebrow"><span className="dot" />Selected works</span>
            <h1 className="display text-[88px] sm:text-[44px] md:text-[64px] mt-7 max-w-[860px] leading-[0.98]">
              A catalogue of things I&apos;ve shipped
            </h1>
            <p className="text-[16px] text-[var(--ink-soft)] mt-7 max-w-[520px] leading-relaxed">
              Six years of interfaces, platforms, and products — built for clarity, speed, and the
              people who use them every day.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="wp-stats">
              {heroStats.map((s, i) => (
                <div key={i} className="wp-stat">
                  <span className="wp-stat-num display">{s.num}</span>
                  <span className="wp-stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Filters + grid ===== */}
      <section className="px-9 sm:px-5 pb-32 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div id="wp-grid-top" className="wp-toolbar">
            <div className="wp-filters">
              {FILTERS.map((c) => (
                <button
                  key={c}
                  className={`wp-filter ${filter === c ? 'is-active' : ''}`}
                  onClick={() => pickFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="wp-count">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </span>
          </div>

          <div className="wp-grid" key={`${filter}-${current}`}>
            {pageItems.map((w, i) => (
              <Reveal key={w.name} delay={(i % 3) * 70}>
                <a
                  href={w.link || undefined}
                  target={w.link ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`wp-card ${!w.link ? 'is-static' : ''}`}
                >
                  <div className="wp-card-img">
                    <img src={w.img} alt={w.name} />
                    <span className="wp-card-badge"><ArrowUpRight size={17} /></span>
                  </div>
                  <div className="wp-card-body">
                    <div className="wp-card-top">
                      <h3 className="wp-card-name">{w.name}</h3>
                      <span className="wp-card-year">{w.year}</span>
                    </div>
                    <span className="wp-card-cat">{w.category}</span>
                    <p className="wp-card-desc">{w.desc}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="wp-pagination">
              <button
                className="wp-page-arrow"
                onClick={() => goTo(current - 1)}
                disabled={current === 1}
                aria-label="Previous page"
              >
                <ChevronLeft size={17} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  className={`wp-page-num ${current === n ? 'is-active' : ''}`}
                  onClick={() => goTo(n)}
                >
                  {n}
                </button>
              ))}
              <button
                className="wp-page-arrow"
                onClick={() => goTo(current + 1)}
                disabled={current === totalPages}
                aria-label="Next page"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="px-9 sm:px-5 pb-32 sm:pb-24">
        <div className="max-w-[900px] mx-auto wp-cta">
          <Reveal>
            <h2 className="display text-[48px] sm:text-[30px] md:text-[40px] leading-[1.04]">
              Have something in mind?
            </h2>
            <p className="text-[15px] text-[var(--ink-soft)] mt-5 max-w-[440px] mx-auto leading-relaxed">
              I&apos;m open to new projects and collaborations. Tell me what you&apos;re building.
            </p>
            <div className="mt-10 flex sm:flex-col items-center justify-center gap-3">
              <a href={`mailto:${myEmail}`} className="btn-pill-dark">
                Start a project
                <span className="arrow-circle"><ArrowUpRight size={13} /></span>
              </a>
              <Link href="/" className="btn-pill-light">
                Back home
                <span className="arrow-circle"><ChevronLeft size={13} /></span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="px-9 sm:px-5 py-14 border-t border-[var(--line)]">
        <div className="max-w-[1200px] mx-auto flex sm:flex-col items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-[14px] font-semibold">
            daniel<span className="text-[var(--ink-mute)] text-[10px] -translate-y-2">®</span>
          </div>
          <p className="text-[13px] text-[var(--ink-mute)]">
            © {new Date().getFullYear()} Daniel Adewale. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-[var(--ink-soft)]">
            <a href="https://github.com/syntaxPriest" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/syntaxpriest/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors">LinkedIn</a>
            <Link href="/cv" className="hover:text-[var(--ink)] transition-colors">CV</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
