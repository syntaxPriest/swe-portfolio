'use client';

import React, { useState, useEffect } from 'react';
import SimpleLayout from './layouts/simpleLayout';
import Reveal from './components/reveal';
import HuePanel from './components/huePanel';
import BookingModal from './components/bookingModal';
import ToolsMarquee from './components/toolsMarquee';
import Image from 'next/image';
import { ArrowUpRight, Star, Plus, X } from 'lucide-react';
import ClusterIcon from './components/clusterIcon';
import FAQItem from './components/faqItem';
import {
  myEmail,
  heroStack,
  stats,
  outcomes,
  services,
  experience,
  faqs,
  journalEntries,
  projectList,
  type NavSection,
} from './data/portfolio';

export type navItemsProps = NavSection;

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
            <div className="mt-16 rounded-[28px] overflow-hidden bg-[var(--bg-card)] aspect-[16/8] sm:aspect-[4/5] relative">
              <Image src="/user/avatar.png" alt="Daniel Adewale" fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 1120px" className="object-cover" priority />
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
                <div className="aspect-[5/4] rounded-2xl bg-[var(--bg)] overflow-hidden relative">
                  <Image src="/works/mage.png" alt="Mage" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
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
