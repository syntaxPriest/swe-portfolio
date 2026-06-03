'use client';

import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { ArrowUpRight, Mail, FileText, MapPin, Clock, Compass } from 'lucide-react';

const myEmail = 'adewaled03@gmail.com';
const resumeLink =
  'https://docs.google.com/document/d/1sCQ_9keryAYoOxwaVqu05fWl3DgkAjroKQPTLqtVFQ4/edit?tab=t.0';

const tickerItems = [
  'Frontend', 'Architecture', 'React', 'Next.js', 'TypeScript',
  'Design Systems', 'Performance', 'GraphQL', 'Tooling', 'Mentorship', 'DX',
];

function useClock() {
  const [time, setTime] = useState<string>('--:--:--');
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
      });
      setTime(t);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function HeroCover() {
  const time = useClock();
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <section id="home" className="relative pt-28 sm:pt-24 pb-0">
      {/* Soft grid backdrop */}
      <div className="absolute inset-0 grid-bg-fine radial-fade opacity-60 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-8 sm:px-5">
        {/* Masthead bar */}
        <Fade triggerOnce>
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--text-muted)]">
            <span>The Daniel Press · Vol. VI</span>
            <span className="sm:hidden">{today}</span>
            <span>Lagos · GMT+1 · {time}</span>
          </div>
        </Fade>

        <div className="masthead-rule mt-4" />

        {/* Main spread */}
        <div className="grid grid-cols-12 gap-10 sm:gap-6 mt-10 sm:mt-8">
          {/* Left rail — bio / lead */}
          <div className="col-span-3 sm:col-span-12 sm:order-2">
            <Fade triggerOnce delay={150}>
              <div className="flex items-center gap-2">
                <span className="dot-live" />
                <span className="mono-label !text-[10px]">Available · Q3 2026</span>
              </div>
              <p className="text-[14px] text-[var(--text-dim)] leading-relaxed mt-6">
                I'm <span className="text-white">Daniel Adewale</span>, a senior frontend
                engineer building interfaces for fast-moving teams. Six years deep in
                production React, TypeScript, and design systems.
              </p>
              <div className="mt-6 space-y-1.5 text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-[0.1em]">
                <div className="flex items-center gap-2">
                  <Compass size={12} />
                  06° 27′ N · 03° 24′ E
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} />
                  Lagos, Nigeria
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={12} />
                  WAT {time}
                </div>
              </div>
            </Fade>
          </div>

          {/* Center — giant display headline */}
          <div className="col-span-6 sm:col-span-12 sm:order-1 text-center">
            <Fade triggerOnce>
              <div className="mono-label">— Issue No. 06 · Cover Story</div>
            </Fade>
            <Fade triggerOnce delay={100}>
              <h1 className="display-headline text-[148px] sm:text-[72px] md:text-[110px] mt-6">
                Daniel
                <br />
                <em>Adewale</em>
              </h1>
            </Fade>
            <Fade triggerOnce delay={250}>
              <p className="font-serif italic text-[22px] sm:text-[18px] text-[var(--text-dim)] mt-6">
                Software engineer, frontend specialist, builder of quietly excellent interfaces.
              </p>
            </Fade>
          </div>

          {/* Right rail — portrait + cover stories */}
          <div className="col-span-3 sm:col-span-12 sm:order-3">
            <Fade triggerOnce delay={200}>
              <div className="relative">
                <img
                  src="/user/avatar.png"
                  alt="Daniel Adewale"
                  className="w-full aspect-square object-cover rounded-2xl border border-[var(--border-bright)] grayscale contrast-110"
                />
                <div className="absolute -bottom-3 left-3 right-3 bg-[var(--bg)] border border-[var(--border-bright)] rounded-lg px-3 py-2 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    The Engineer
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <p className="mono-label !text-[10px]">Also Inside</p>
                {[
                  { num: 'P. 02', t: 'Field notes on the operator' },
                  { num: 'P. 03', t: 'Trajectory & mission logs' },
                  { num: 'P. 04', t: 'Case files: built things' },
                  { num: 'P. 05', t: 'Reading room' },
                ].map((s, i) => (
                  <div key={i} className="flex items-baseline gap-2 text-[12px]">
                    <span className="font-mono text-[10px] text-[var(--accent)]">{s.num}</span>
                    <span className="text-[var(--text-dim)] font-serif italic">{s.t}</span>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>

        {/* CTAs */}
        <Fade triggerOnce delay={300}>
          <div className="mt-12 sm:mt-10 flex sm:flex-col items-center justify-center gap-3">
            <a
              href={`mailto:${myEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0A0A0B] text-[14px] font-medium hover:bg-[var(--accent)] hover:shadow-[0_10px_40px_-10px_var(--accent-glow)] transition-all sm:w-full sm:justify-center"
            >
              <Mail size={15} />
              Start a conversation
            </a>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border-bright)] text-white text-[14px] font-medium hover:bg-[rgba(255,255,255,0.05)] transition-all sm:w-full sm:justify-center"
            >
              <FileText size={15} />
              View Resume
              <ArrowUpRight size={13} className="opacity-60" />
            </a>
          </div>
        </Fade>
      </div>

      {/* Bottom ticker strip */}
      <div className="ticker-strip mt-16 sm:mt-12 py-3">
        <div className="ticker-track flex" style={{ animation: 'tickerScroll 40s linear infinite' }}>
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="font-serif italic">{item}</span>
              <span className="dot" />
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
