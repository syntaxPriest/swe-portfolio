'use client';

import React, { useState, useEffect } from 'react';
import SimpleLayout from './layouts/simpleLayout';
import Reveal from './components/reveal';
import HuePanel from './components/huePanel';
import BookingModal from './components/bookingModal';
import ToolsMarquee from './components/toolsMarquee';
import { ArrowUpRight, ChevronDown, Star, Plus, X } from 'lucide-react';

const myEmail = 'adewaled03@gmail.com';

export type navItemsProps = 'home' | 'about' | 'works' | 'projects' | 'articles' | 'experience';

export default function Home() {
  const [activeExp, setActiveExp] = useState<number | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const navScroller = (refId: navItemsProps) => {
    const element = document.getElementById(refId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (activeExp === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveExp(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeExp]);

  return (
    <SimpleLayout navScroller={navScroller}>
      {/* ============ HERO ============ */}
      <section id="home" className="px-9 sm:px-5 pt-40 sm:pt-28 pb-24 sm:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <Reveal>
            <div className="hero-top">
              <span className="hero-avail"><span className="live-dot" />Available for work</span>
              <a href="/cv" className="hero-cv">CV <ArrowUpRight size={13} /></a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-statement display">
              I build interfaces that feel <span className="hero-em">obvious</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="hero-meta-row">
              <div className="hero-meta">
                <span>Senior frontend engineer</span>
                <span>6+ years · Lagos, Nigeria</span>
              </div>
              <a href={`mailto:${myEmail}`} className="btn-pill-dark hero-cta">
                Start a project
                <span className="arrow-circle"><ArrowUpRight size={13} /></span>
              </a>
            </div>
          </Reveal>

          {/* Tools marquee — auto-spotlights the centered logo */}
          <Reveal delay={220}>
            <ToolsMarquee items={heroStack} />
          </Reveal>

          {/*
            Project marquee — kept for later reuse.
          <Reveal delay={200}>
            <div className="marquee mt-20 sm:mt-12">
              <div className="marquee-track">
                {[...projectList, ...projectList].map((p, i) => (
                  <a
                    key={i}
                    href={p.link || '#'}
                    target={p.link ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="marquee-pill"
                    aria-hidden={i >= projectList.length}
                    tabIndex={i >= projectList.length ? -1 : undefined}
                  >
                    <span className="marquee-thumb">
                      <img src={p.img} alt={p.name} />
                    </span>
                    <span className="marquee-name">{p.name}</span>
                    <span className="marquee-dur">{p.duration}</span>
                    <ArrowUpRight size={14} className="text-[var(--ink-mute)]" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          */}

        </div>
      </section>

      {/* ============ WHO I AM ============ */}
      <section id="about" className="px-9 sm:px-5 py-32 sm:py-20">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow"><span className="dot" />Who I am</span>
              <h2 className="display text-[80px] sm:text-[36px] md:text-[56px] mt-7 max-w-[760px] mx-auto leading-[1.02]">
                Engineer of ideas and impact
              </h2>
              <p className="text-[15px] text-[var(--ink-soft)] mt-7 max-w-[420px] mx-auto leading-relaxed">
                I turn sharp product strategy into interfaces that people remember — and that teams enjoy maintaining.
              </p>
            </div>
          </Reveal>

          {/* Portrait */}
          <Reveal delay={150}>
            <div className="mt-16 rounded-[28px] overflow-hidden bg-[var(--bg-card)] aspect-[16/8] sm:aspect-[4/5]">
              <img src="/user/avatar.png" alt="Daniel Adewale" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="px-9 sm:px-5 pt-8 pb-32 sm:pb-20">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-4 sm:grid-cols-2 gap-10 sm:gap-8">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="stat-cell">
                  <div className="text-[68px] sm:text-[52px] md:text-[58px] font-semibold tracking-[-0.04em] leading-none">
                    {s.num}
                  </div>
                  <p className="text-[13px] text-[var(--ink-soft)] mt-5 leading-relaxed max-w-[200px]">
                    {s.lbl}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="px-9 sm:px-5 pb-32 sm:pb-20">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <div className="soft-card p-14 sm:p-7 md:p-10 grid grid-cols-12 gap-8 items-end">
              <div className="col-span-7 sm:col-span-12">
                <div className="flex items-center gap-2.5 text-[14px] font-semibold">
                  <span className="w-5 h-5 rounded-full bg-[var(--ink)]" />
                  Mage Inc
                </div>
                <p className="display text-[44px] sm:text-[24px] md:text-[32px] mt-12 sm:mt-8 leading-[1.08]">
                  "Daniel took the time to truly dive into our product and ship interfaces that feel obvious in hindsight."
                </p>
                <div className="flex items-center gap-3 mt-12 sm:mt-8">
                  <div className="w-9 h-9 rounded-full bg-[var(--bg)] flex items-center justify-center text-[12px] font-semibold">M</div>
                  <div>
                    <p className="text-[13px] font-medium">Product Team</p>
                    <p className="text-[12px] text-[var(--ink-mute)]">Engagement, 2022–23</p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 sm:col-span-12">
                <div className="aspect-[5/4] rounded-2xl bg-[var(--bg)] overflow-hidden">
                  <img src="/works/mage.png" alt="Mage" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section id="experience" className="px-9 sm:px-5 py-32 sm:py-20">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <div className="flex items-end justify-between gap-10 sm:flex-col sm:items-start">
              <div>
                <span className="eyebrow"><span className="dot" />Experience</span>
                <h2 className="display text-[64px] sm:text-[36px] md:text-[48px] mt-6 max-w-[520px]">
                  Where I've made an impact
                </h2>
              </div>
              <a href="/cv" className="btn-link mt-3">
                <span className="label">View full CV <ArrowUpRight size={14} /></span>
                <span className="underline" />
              </a>
            </div>
          </Reveal>

          <div className="exp-list mt-16 sm:mt-10">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 70}>
                <div
                  className="exp-row"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveExp(i)}
                  onKeyDown={(ev) => {
                    if (ev.key === 'Enter' || ev.key === ' ') {
                      ev.preventDefault();
                      setActiveExp(i);
                    }
                  }}
                  aria-label={`Read about ${e.role} at ${e.company}`}
                >
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-body">
                    <h3 className="exp-role">{e.role}</h3>
                    <p className="exp-company">{e.company} · {e.location}</p>
                    <ul className="exp-points">
                      {e.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="exp-open"><Plus size={16} /></span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LATEST WORKS ============ */}
      <section id="projects" className="py-32 sm:py-20">
        <div className="px-9 sm:px-5">
          <div className="max-w-[1280px] mx-auto">
            <Reveal>
              <div className="flex items-start justify-between gap-10 sm:flex-col">
                <div>
                  <span className="eyebrow"><span className="dot" />Works 2026</span>
                  <h2 className="display text-[64px] sm:text-[36px] md:text-[48px] mt-6 max-w-[460px]">
                    Latest works
                  </h2>
                  <p className="text-[14px] text-[var(--ink-soft)] mt-4 max-w-[320px] leading-relaxed">
                    Case studies that highlight my process and results.
                  </p>
                </div>
                <a href="/works" className="btn-link mt-3">
                  <span className="label">See all works <ArrowUpRight size={14} /></span>
                  <span className="underline" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="full-bleed mt-16 sm:mt-12">
          {projectList.slice(0, 6).map((p, i) => (
            <Reveal key={i} y={0}>
              <HuePanel
                index={i + 1}
                total={6}
                title={p.name}
                desc={p.desc}
                img={p.img}
                href={p.link || undefined}
                duration={p.duration}
                flip={i % 2 === 1}
                speed={7}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ AWARD / OUTCOMES ============ */}
      <section className="px-9 sm:px-5 py-32 sm:py-20">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-center">
              <div className="flex justify-center gap-1.5 text-[var(--ink)]">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="eyebrow mt-5">Trusted engineer</span>
              <h2 className="display text-[68px] sm:text-[34px] md:text-[52px] mt-6 max-w-[660px] mx-auto leading-[1.02]">
                I'll help you figure out what your product really needs
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-5 mt-16">
            {outcomes.map((o, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="outcome-card">
                  <span className="eyebrow"><span className="dot" />{o.kicker}</span>
                  <h3 className="display text-[44px] sm:text-[28px] md:text-[36px] leading-[1.05] max-w-[320px] mt-8">
                    {o.title}
                  </h3>
                  <ClusterIcon />
                  <p className="text-[14px] text-[var(--ink-soft)] max-w-[280px] mx-auto leading-relaxed mt-6">
                    {o.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="px-9 sm:px-5 pt-32 pb-12 sm:pt-20 sm:pb-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-start justify-between gap-10 sm:flex-col">
              <div>
                <span className="eyebrow"><span className="dot" />Services</span>
                <h2 className="display text-[64px] sm:text-[36px] md:text-[48px] mt-6 max-w-[480px]">
                  Clear steps for growing products
                </h2>
              </div>
              <a href={`mailto:${myEmail}`} className="btn-link mt-3">
                <span className="label">My approach <ArrowUpRight size={14} /></span>
                <span className="underline" />
              </a>
            </div>
          </Reveal>

          <div className="service-stack mt-16 sm:mt-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-sticky"
                style={{ top: `calc(96px + ${i * 16}px)`, zIndex: i + 1 }}
              >
                <div className="service-row">
                  <div className="service-img">
                    <img src={s.img} alt={s.title} />
                  </div>
                  <div className="service-content">
                    <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="service-title display text-[40px] sm:text-[28px] md:text-[34px]">
                      {s.title}
                    </h3>
                    <p className="service-desc">{s.desc}</p>
                    <div className="service-tags">
                      {s.tags.map((t, j) => (
                        <span key={j} className="service-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="px-9 sm:px-5 pt-14 pb-32 sm:pt-8 sm:pb-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex sm:flex-col gap-20 sm:gap-10">
            <Reveal className="w-[42%] sm:w-full shrink-0">
              <div className="sticky top-32">
                <span className="eyebrow"><span className="dot" />FAQ</span>
                <h2 className="display text-[64px] sm:text-[34px] md:text-[48px] mt-6 leading-[1.02]">
                  Answers to the questions I hear most often.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120} className="flex-1">
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ JOURNAL ============ */}
      <section id="articles" className="px-9 sm:px-5 py-32 sm:py-20">
        <div className="max-w-[1280px] mx-auto">
          <Reveal>
            <div className="flex items-start justify-between gap-10 sm:flex-col">
              <div>
                <h2 className="display text-[56px] sm:text-[36px] md:text-[44px]">Journal</h2>
                <p className="text-[14px] text-[var(--ink-soft)] mt-4 max-w-[340px] leading-relaxed">
                  My take on engineering, design systems, and the craft that shapes them.
                </p>
              </div>
              <a href="https://dev.to/syntaxpriest" target="_blank" rel="noopener noreferrer" className="btn-link mt-3">
                <span className="label">See all articles <ArrowUpRight size={14} /></span>
                <span className="underline" />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {journalEntries.map((j, i) => (
              <Reveal key={i} delay={i * 90}>
                <a
                  href={j.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journal-card group"
                >
                  <div className="journal-img">
                    <img src={j.img} alt={j.title} />
                    <div className="journal-arrow">
                      <span><ArrowUpRight size={18} /></span>
                    </div>
                  </div>
                  <p className="text-[12px] text-[var(--ink-mute)] mt-5">{j.date}</p>
                  <h3 className="text-[18px] font-semibold mt-2 max-w-[300px] leading-snug">
                    {j.title}
                  </h3>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section id="works" className="px-9 sm:px-5 py-32 sm:py-20">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <span className="eyebrow"><span className="dot" />Free intro call</span>
            <h2 className="display text-[72px] sm:text-[40px] md:text-[56px] mt-7 leading-[1.02]">
              Tell me what you're building
            </h2>
            <p className="text-[15px] text-[var(--ink-soft)] mt-7 max-w-[440px] mx-auto leading-relaxed">
              Work with an engineer who brings clarity, care, and craft to every project.
            </p>
            <div className="mt-12 flex sm:flex-col items-center sm:items-stretch justify-center gap-3">
              <button type="button" onClick={() => setBookingOpen(true)} className="btn-pill-dark">
                Book intro call
                <span className="arrow-circle"><ArrowUpRight size={13} /></span>
              </button>
              <a href="/cv" className="btn-pill-light">
                View CV
                <span className="arrow-circle"><ArrowUpRight size={13} /></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="px-9 sm:px-5 py-14 border-t border-[var(--line)]">
        <div className="max-w-[1280px] mx-auto flex sm:flex-col items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-[14px] font-semibold">
            daniel<span className="text-[var(--ink-mute)] text-[10px] -translate-y-2">®</span>
          </div>
          <p className="text-[13px] text-[var(--ink-mute)]">
            © {new Date().getFullYear()} Daniel Adewale. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-[var(--ink-soft)]">
            <a href="https://github.com/syntaxPriest" target="_blank" className="hover:text-[var(--ink)] transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/syntaxpriest/" target="_blank" className="hover:text-[var(--ink)] transition-colors">LinkedIn</a>
            <a href="https://twitter.com/syntaxPriest" target="_blank" className="hover:text-[var(--ink)] transition-colors">Twitter</a>
            <a href={`mailto:${myEmail}`} className="hover:text-[var(--ink)] transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* ============ EXPERIENCE MODAL ============ */}
      {activeExp !== null && (
        <div className="exp-modal-overlay" onClick={() => setActiveExp(null)}>
          <div
            className="exp-modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="exp-modal-close"
              onClick={() => setActiveExp(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <span className="eyebrow"><span className="dot" />{experience[activeExp].period}</span>
            <h3 className="display text-[34px] sm:text-[26px] mt-5 leading-[1.05]">
              {experience[activeExp].role}
            </h3>
            <p className="exp-company">
              {experience[activeExp].company} · {experience[activeExp].location}
            </p>
            <p className="exp-modal-summary">{experience[activeExp].summary}</p>
            <ul className="exp-points exp-modal-points">
              {experience[activeExp].points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ============ BOOKING MODAL ============ */}
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </SimpleLayout>
  );
}

// ============ Cluster icon ============
function ClusterIcon() {
  return (
    <svg width="56" height="40" viewBox="0 0 56 40" fill="none" className="my-8" aria-hidden>
      <circle cx="10" cy="14" r="6" fill="#0E0E0E" />
      <circle cx="28" cy="6" r="6" fill="#0E0E0E" />
      <circle cx="46" cy="14" r="6" fill="#0E0E0E" />
      <circle cx="10" cy="32" r="6" fill="#0E0E0E" />
      <circle cx="28" cy="34" r="6" fill="#0E0E0E" />
      <circle cx="46" cy="32" r="6" fill="#0E0E0E" />
    </svg>
  );
}

// ============ FAQ Item ============
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <button className="faq-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="faq-q-text">{q}</span>
        <span className="faq-chev">
          <ChevronDown size={16} strokeWidth={1.8} />
        </span>
      </button>
      <div className="faq-panel" aria-hidden={!open}>
        <div className="faq-panel-inner">{a}</div>
      </div>
    </div>
  );
}

// ============ DATA ============
const heroStack = [
  { name: 'React', file: 'react.png' },
  { name: 'Next.js', file: 'next-dark.svg' },
  { name: 'TypeScript', file: 'ts.png' },
  { name: 'JavaScript', file: 'js.png' },
  { name: 'Tailwind CSS', file: 'tailwind.png' },
  { name: 'Redux', file: 'redux.png' },
  { name: 'GraphQL', file: 'GraphQL.png' },
  { name: 'Node.js', file: 'nodejs.png' },
  { name: 'React Query', file: 'Reactquery.png' },
  { name: 'React Native', file: 'Reactnative.png' },
  { name: 'Figma', file: 'figma.png' },
];

const stats = [
  { num: '20+', lbl: 'Projects shipped end-to-end with care' },
  { num: '1M+', lbl: 'Users served across platforms built' },
  { num: '6+', lbl: 'Years building production interfaces' },
  { num: '4', lbl: 'Companies and teams partnered with' },
];

const outcomes = [
  {
    kicker: 'Engineering at scale',
    title: 'Interfaces engineered for scale, not screenshots',
    desc: 'Production systems built to onboard tens of thousands without buckling.',
  },
  {
    kicker: 'Design systems',
    title: 'Components that compound across teams',
    desc: 'Reusable systems that cut cycles and keep velocity without quality drift.',
  },
];

const services = [
  {
    title: 'Web engineering',
    desc: 'Production React, Next.js, and TypeScript — built to scale and built to last.',
    tags: ['Next.js', 'React', 'TypeScript', 'GraphQL'],
    img: '/works/services/web.svg',
  },
  {
    title: 'Design systems',
    desc: 'Reusable component libraries with strong primitives and tight DX.',
    tags: ['Tokens', 'Tailwind', 'Storybook', 'Accessibility'],
    img: '/works/services/design.svg',
  },
  {
    title: 'Performance',
    desc: 'Core Web Vitals, bundle diet, hydration strategy, perceived speed.',
    tags: ['Profiling', 'CWV', 'Caching', 'RSC'],
    img: '/works/services/performance.svg',
  },
  {
    title: 'Product partnership',
    desc: 'Embedded with PM and design, end-to-end ownership, weekly demos.',
    tags: ['Discovery', 'Specs', 'QA', 'Reviews'],
    img: '/works/services/partnership.svg',
  },
];

const experience = [
  {
    role: 'Senior Front End Engineer',
    company: 'Fatbeehive',
    location: 'London, UK',
    period: 'Jan 2025 — Present',
    summary:
      'At Fatbeehive I build for purpose-driven teams — charities and ethical organizations — translating intricate briefs into accessible, high-performing websites. My days move between pixel-perfect Figma builds, reusable design systems, and keeping clients unblocked by resolving support tickets quickly.',
    points: [
      'Lead development of accessible, user-centric platforms for charities and ethical organizations, turning complex briefs into performant, responsive frontends.',
      'Build custom UI components and reusable design systems with pixel-perfect fidelity to Figma, championing semantic HTML, SCSS and WCAG 2.1 AA compliance.',
    ],
  },
  {
    role: 'Senior Front End Developer',
    company: 'Qshelter Limited',
    location: 'Lagos, Nigeria',
    period: 'Sep 2023 — Present',
    summary:
      'Qshelter is where I earned a senior role within two weeks. I led frontend work across their housing products — building Contribuild, shipping the MoFI Housing MVP in 15 days, and partnering with the Federal Government of Nigeria on the Renewed Hope platform, which drove 50,000+ registrations and over ₦1B in sales.',
    points: [
      'Built Contribuild in React and TypeScript, earning a senior role within two weeks; delivered Qshelter features driving 100,000 visits and 90% retention in a month.',
      'Shipped the MoFI Housing MVP in 15 days and built the Renewed Hope platform with the Federal Government of Nigeria — 50,000+ registrations and ₦1B+ in sales.',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Mage Inc',
    location: 'Lagos, Nigeria',
    period: 'Dec 2021 — Oct 2023',
    summary:
      'At Mage I helped a creator-economy product find its footing — building the Creator Store from scratch to 6,000+ users, a data-rich Creator Dashboard, and the payment rails (wallets, checkout, virtual cards) that let creators monetize securely.',
    points: [
      'Built the Creator Store from scratch, attracting 6,000+ users at an 80% retention rate through an intuitive purchase experience.',
      'Developed the Creator Dashboard and payment infrastructure — wallets, checkouts, and a Virtual Card system for secure, seamless monetization.',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Kpie Technologies',
    location: 'Lagos, Nigeria',
    period: 'Nov 2019 — Oct 2021',
    summary:
      'Kpie was a fast-paced agency chapter: I delivered client sites ahead of deadline, applied UX best practices to lift engagement, and built products like SellMega end-to-end while collaborating closely with backend teams.',
    points: [
      'Delivered the PPMI website ahead of schedule and improved MultiGrid Limited with UX best practices for a more engaging experience.',
      'Built SellMega, a user-friendly e-commerce platform, and collaborated on the Hua Ou Brick site and SafeScout.',
    ],
  },
  {
    role: 'Freelance Frontend Engineer',
    company: 'Independent',
    location: 'Remote',
    period: 'Jun 2018 — Present',
    summary:
      'Across freelance engagements since 2018 I’ve shipped responsive apps, dashboards, e-commerce platforms and secure payment systems in React and TypeScript — owning the frontend end-to-end and collaborating with cross-functional teams to deliver on time and in scope.',
    points: [
      'Build responsive websites and apps in React, TypeScript and modern tooling — e-commerce platforms, dashboards, and secure payment systems.',
      'Partner with cross-functional teams to ship high-quality, performant, user-centric products on time and in scope.',
    ],
  },
];

const faqs = [
  {
    q: 'Do you take on small projects?',
    a: 'Yes — small, well-scoped projects are some of my favorite. If the brief is sharp and the timeline is honest, I am interested.',
  },
  {
    q: 'Can you work with an existing codebase?',
    a: 'Absolutely. I will audit before I refactor, and I prefer evolution to rewrites.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Contract engagements typically run 4–12 weeks. Full-time engagements run quarter-by-quarter with milestones we agree on upfront.',
  },
  {
    q: 'What happens after I reach out?',
    a: 'You get a reply within 24 hours, we book a 20-minute intro call, and within 48 hours I send a scoped proposal.',
  },
  {
    q: 'Do you offer free intro calls?',
    a: 'Yes — 20 minutes, no slides, no pitch. Just a conversation about your product and whether I am the right fit.',
  },
  {
    q: 'Can I reach out if I am not sure what I need yet?',
    a: 'Please do. Half the value of the intro call is figuring that out together.',
  },
];

const journalEntries = [
  {
    title: 'Understanding styled components with React, Next and Vue.',
    link: 'https://dev.to/syntaxpriest/understanding-styled-components-a-basic-guide-on-styled-components-usage-with-reactnextvue-45a4',
    date: 'Aug 3, 2025',
    img: '/works/journal/styled.svg',
  },
  {
    title: 'Image upload and file preview with ReactJS.',
    link: 'https://dev.to/syntaxpriest/image-file-previewing-with-reactjs-883',
    date: 'Jun 6, 2025',
    img: '/works/journal/upload.svg',
  },
  {
    title: 'Rethinking the frontend engineering process.',
    link: 'https://dev.to/syntaxpriest',
    date: 'Jul 3, 2025',
    img: '/works/journal/process.svg',
  },
];

const projectList = [
  {
    name: '2004 Estate',
    img: '/works/2004estate.png',
    link: 'https://2004estate.ng',
    duration: '2025',
    desc: 'A property platform for a coastal residential estate — browse residences, explore floor plans, and choose flexible installment or mortgage plans in a fast, trust-building interface.',
  },
  {
    name: 'Song Explainer',
    img: '/works/lyrist.png',
    link: 'https://lyrist.netlify.app',
    duration: 'Personal build',
    desc: 'Paste a Spotify link, an ISRC, or just a song and artist, and Lyrist unpacks what the track is really about — themes, line-by-line meaning, and the references hiding in the lyrics — in a calm, focused reading view.',
  },
  {
    name: 'BrimAI',
    img: '/works/brim.png',
    link: 'https://trybrim.app',
    duration: 'Personal build',
    desc: 'A prompt-engineering app that turns rough ideas into expert-level prompts. Brim refines and structures your input so any AI model returns sharper, more accurate results — with a browser extension to use it anywhere.',
  },
  {
    name: 'MoFI Housing',
    img: '/works/mofi2.png',
    link: 'https://mreif.com.ng',
    duration: '6 weeks',
    desc: 'A housing-finance platform that turns a dense mortgage and property catalogue into a calm, guided search — fast listings, clear flows, and a frontend tuned to feel trustworthy from the first click.',
  },
  {
    name: 'Renewed Hope Homes',
    img: '/works/rh.png',
    link: 'https://renewedhopehomes.fmhud.gov.ng/properties/search',
    duration: '8 weeks',
    desc: 'The public property-search experience for a national housing initiative. Built to stay quick and accessible under heavy traffic and large inventories, even on modest devices and patchy connections.',
  },
  {
    name: 'Mage',
    img: '/works/mage.png',
    link: 'https://trymage.com',
    duration: 'Ongoing',
    desc: 'An ongoing product partnership shaping the core interface from the ground up — a component system and considered flows that let the team ship new surfaces fast without the UI drifting.',
  },
  {
    name: 'Contribuild',
    img: '/works/contribuild.png',
    link: 'https://contribuild.ng',
    duration: '5 weeks',
    desc: 'A platform that brings structure to construction projects and contributions, pairing heavy data with an interface that stays readable, scannable, and easy to act on.',
  },
  {
    name: 'Metropolitan Club',
    img: '/works/tmc.png',
    link: '',
    duration: '4 weeks',
    desc: 'A members’ club presence with a refined, editorial feel — typography-led and image-forward, tuned so every page reads as deliberate and quietly premium.',
  },
  {
    name: 'Stream UI',
    img: '/works/video.png',
    link: 'https://vid-react.netlify.app',
    duration: '3 weeks',
    desc: 'A streaming interface exploration in React — fluid playback controls, a responsive content grid, and motion that makes browsing the catalogue feel effortless.',
  },
];
