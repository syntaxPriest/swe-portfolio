'use client';

import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import {
  Github, Linkedin, Twitter, Mail, BookOpen, MapPin, Activity,
  Cpu, Globe, Headphones,
} from 'lucide-react';

const myEmail = 'adewaled03@gmail.com';

const proficiency = [
  { label: 'React', pct: 96 },
  { label: 'TypeScript', pct: 94 },
  { label: 'Next.js', pct: 92 },
  { label: 'Tailwind', pct: 90 },
  { label: 'GraphQL', pct: 84 },
  { label: 'Node.js', pct: 76 },
  { label: 'Figma', pct: 78 },
];

const persona = ['Honest', 'Introvert', 'Music', 'Hard-Working', 'Collaborative'];

const social = [
  { Icon: Github, label: 'github', val: 'syntaxPriest', link: 'https://github.com/syntaxPriest' },
  { Icon: Linkedin, label: 'linkedin', val: 'syntaxpriest', link: 'https://www.linkedin.com/in/syntaxpriest/' },
  { Icon: Twitter, label: 'twitter', val: '@syntaxPriest', link: 'https://twitter.com/syntaxPriest' },
  { Icon: Mail, label: 'email', val: myEmail, link: `mailto:${myEmail}` },
];

const terminalLog = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'daniel.adewale@portfolio:~' },
  { type: 'cmd', text: 'cat status.txt' },
  { type: 'out', text: 'Open to senior FE roles · Q3 2026' },
  { type: 'cmd', text: 'tail -n 3 ./recent.log' },
  { type: 'out', text: 'Shipped: MREIF Housing v2.0' },
  { type: 'out', text: 'Mentored: 2 mid-level engineers' },
  { type: 'out', text: 'Reading: Psychology of Intelligence' },
];

function useLagosTime() {
  const [time, setTime] = useState<string>('--:--');
  const [period, setPeriod] = useState<string>('--');
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit', minute: '2-digit', hour12: false,
      });
      const h = parseInt(t.slice(0, 2), 10);
      setTime(t);
      setPeriod(h < 12 ? 'Morning' : h < 17 ? 'Afternoon' : h < 21 ? 'Evening' : 'Night');
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return { time, period };
}

export default function OperatorDashboard() {
  const { time, period } = useLagosTime();

  return (
    <section id="about" className="relative w-full max-w-[1200px] mx-auto px-8 sm:px-5 pt-24 pb-24">
      <Fade triggerOnce>
        <div className="flex items-end justify-between gap-6 sm:flex-col sm:items-start mb-12">
          <div>
            <span className="mono-label !text-[var(--accent)]">— Page 02</span>
            <h2 className="font-serif text-[64px] sm:text-[40px] mt-3 leading-[0.95]">
              The Operator's <em className="italic text-[var(--accent)]">Dashboard</em>
            </h2>
          </div>
          <p className="font-serif italic text-[var(--text-dim)] text-[18px] max-w-[360px]">
            A live read-out of the human, the habits, and the stack behind the work.
          </p>
        </div>
      </Fade>

      <div className="grid grid-cols-12 gap-5 sm:gap-4">
        {/* TERMINAL — wide */}
        <div className="col-span-7 lg:col-span-7 md:col-span-12 sm:col-span-12">
          <div className="widget h-full">
            <div className="widget-header">
              <div className="flex items-center gap-3">
                <div className="widget-dots">
                  <span /><span /><span />
                </div>
                <span className="mono-label">daniel ~ status</span>
              </div>
              <span className="mono-label !text-[10px]">live</span>
            </div>
            <div className="p-5 min-h-[260px]">
              {terminalLog.map((line, i) => (
                <div key={i} className="terminal-line">
                  {line.type === 'cmd' ? (
                    <>
                      <span className="prompt">$</span>{' '}
                      <span className="val">{line.text}</span>
                    </>
                  ) : (
                    <span className="dim">  {line.text}</span>
                  )}
                </div>
              ))}
              <div className="terminal-line">
                <span className="prompt">$</span>{' '}
                <span className="blink">▎</span>
              </div>
            </div>
          </div>
        </div>

        {/* WORLD CLOCK + LOCATION */}
        <div className="col-span-5 lg:col-span-5 md:col-span-12 sm:col-span-12">
          <div className="widget h-full p-7 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[var(--accent)]" />
                <span className="mono-label">Local Time · Lagos</span>
              </div>
              <span className="mono-label !text-[10px]">GMT+1</span>
            </div>

            <div className="flex items-end justify-between mt-6">
              <div>
                <div className="font-serif text-[88px] sm:text-[60px] leading-none">{time}</div>
                <p className="font-serif italic text-[var(--text-dim)] mt-2">
                  Good {period.toLowerCase()} from Lagos.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-dashed border-[var(--border-bright)] flex items-center justify-between">
              <div className="flex items-center gap-2 text-[12px] font-mono text-[var(--text-dim)]">
                <MapPin size={12} className="text-[var(--accent)]" />
                06°27′N · 03°24′E
              </div>
              <div className="flex items-center gap-2 text-[12px] font-mono text-[var(--text-dim)]">
                <Activity size={12} className="text-[var(--accent)]" />
                Focused
              </div>
            </div>
          </div>
        </div>

        {/* PROFICIENCY CHART */}
        <div className="col-span-7 lg:col-span-7 md:col-span-12 sm:col-span-12">
          <div className="widget h-full">
            <div className="widget-header">
              <div className="flex items-center gap-3">
                <Cpu size={14} className="text-[var(--accent)]" />
                <span className="mono-label">Proficiency Levels</span>
              </div>
              <span className="mono-label !text-[10px]">YoE-weighted</span>
            </div>
            <div className="p-6">
              {proficiency.map((p, i) => (
                <Fade key={i} delay={i * 60} triggerOnce>
                  <div className="proficiency-row">
                    <span className="label">{p.label}</span>
                    <div className="bar">
                      <div className="bar-fill" style={{ width: `${p.pct}%` }} />
                    </div>
                    <span className="pct">{p.pct}</span>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>

        {/* NOW READING */}
        <div className="col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-12">
          <div className="widget h-full p-6 flex flex-col">
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-[var(--accent)]" />
              <span className="mono-label">Now Reading</span>
            </div>

            <div className="flex-1 flex items-end gap-5 mt-6">
              <img
                src="/user/Pyschology-of-Intelligence-Analysis-1.jpg"
                alt="Book"
                className="w-[88px] rounded-md shadow-[0_18px_36px_rgba(0,0,0,0.5)] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-serif text-[20px] leading-snug">
                  Psychology of Intelligence Analysis
                </p>
                <p className="text-[12px] text-[var(--text-muted)] font-mono mt-1">
                  Richards J. Heuer Jr.
                </p>
                <div className="flex items-center gap-1 mt-4">
                  <div className="h-1 w-12 rounded-full bg-[var(--accent)]" />
                  <div className="h-1 w-5 rounded-full bg-[var(--border-bright)]" />
                  <span className="text-[10px] text-[var(--text-muted)] ml-2 font-mono">
                    68% · ch. 7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NOW PLAYING / PERSONA */}
        <div className="col-span-6 lg:col-span-7 md:col-span-6 sm:col-span-12">
          <div className="widget h-full p-6">
            <div className="flex items-center gap-2">
              <Headphones size={14} className="text-[var(--accent)]" />
              <span className="mono-label">Personality Mix</span>
            </div>
            <p className="text-[13px] text-[var(--text-dim)] mt-2 font-serif italic">
              The traits that show up at standup.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {persona.map((t, i) => (
                <span key={i} className="persona-card">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* LOCATION MAP */}
        <div className="col-span-6 lg:col-span-5 md:col-span-12 sm:col-span-12">
          <div className="widget h-full relative overflow-hidden" style={{ minHeight: 220 }}>
            <img
              src="/user/map.png"
              alt="Lagos"
              className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 w-14 h-14 rounded-full bg-[var(--accent)] opacity-20 animate-ping" />
                <div className="relative w-14 h-14 rounded-full bg-[rgba(10,10,11,0.75)] backdrop-blur-md border border-[var(--accent)] flex items-center justify-center">
                  <img src="/user/avatar.png" alt="" className="w-10 h-10 rounded-full" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[rgba(10,10,11,0.7)] backdrop-blur-md border border-[var(--border-bright)]">
                <MapPin size={12} className="text-[var(--accent)]" />
                <span className="text-[12px]">Lagos, Nigeria</span>
              </div>
              <span className="mono-label !text-[10px]">Open to remote</span>
            </div>
          </div>
        </div>

        {/* SOCIALS / DIRECT ROW */}
        <div className="col-span-12">
          <div className="widget overflow-hidden">
            <div className="widget-header">
              <span className="mono-label">Contact Channels</span>
              <span className="mono-label !text-[10px]">tap to copy / open</span>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
              {social.map((s, i) => (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="group flex items-center gap-3 px-5 py-4 border-r border-[var(--border)] sm:border-r-0 sm:border-b last:border-r-0 hover:bg-[var(--accent-soft)] transition-all"
                >
                  <s.Icon size={16} className="text-[var(--text-dim)] group-hover:text-[var(--accent)]" />
                  <div className="flex-1 min-w-0">
                    <p className="mono-label !text-[10px]">{s.label}</p>
                    <p className="text-[13px] truncate group-hover:text-[var(--accent)]">{s.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
