'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Briefcase, FileBadge2, Calendar, MapPin } from 'lucide-react';

interface Mission {
  codename: string;
  role: string;
  company: string;
  location: string;
  timeline: string;
  classification: 'ACTIVE' | 'COMPLETE';
  brief: string;
  outcomes: { num: string; lbl: string }[];
  arsenal: string[];
}

const missions: Mission[] = [
  {
    codename: 'OPERATION · HOMEFRONT',
    role: 'Senior Frontend Engineer',
    company: 'Qshelter NG',
    location: 'Lagos, Nigeria',
    timeline: 'Sept 2023 — Present',
    classification: 'ACTIVE',
    brief:
      'Lead engineer on national-scale housing platforms. Architected and shipped the Renewed Hope Housing portal, the MREIF Platform, and Contribuild — collaborating across product, design, and backend to deliver gov-grade systems.',
    outcomes: [
      { num: '50K+', lbl: 'Users registered' },
      { num: '₦1B+', lbl: 'Sales facilitated' },
      { num: '3', lbl: 'Platforms shipped' },
    ],
    arsenal: ['Next.js', 'TypeScript', 'GraphQL', 'Tailwind', 'Redux', 'Styled-Components'],
  },
  {
    codename: 'OPERATION · CREATOR',
    role: 'Frontend Developer',
    company: 'Mage Inc',
    location: 'Lagos, Nigeria',
    timeline: 'Dec 2021 — Oct 2023',
    classification: 'COMPLETE',
    brief:
      'Built creator-economy tooling end-to-end — the Creator Store, payment infrastructure including virtual wallets and secure checkouts, and the data-driven Creator Dashboard.',
    outcomes: [
      { num: '6K+', lbl: 'Users onboarded' },
      { num: '80%', lbl: 'Retention rate' },
      { num: '4', lbl: 'Products shipped' },
    ],
    arsenal: ['React', 'Next.js', 'TypeScript', 'Firebase', 'WebSocket', 'Styled-Components'],
  },
  {
    codename: 'OPERATION · ORTHO',
    role: 'Platform Engineer · Contract',
    company: 'Tryortho',
    location: 'FCT Abuja, Nigeria',
    timeline: 'Apr 2022 — Aug 2022',
    classification: 'COMPLETE',
    brief:
      'Developed payment SDKs to streamline integration for client platforms, plus designed and built a conversion-focused marketing site.',
    outcomes: [
      { num: '1', lbl: 'Payment SDK' },
      { num: '5+', lbl: 'Integrations' },
      { num: '1', lbl: 'Landing page' },
    ],
    arsenal: ['React', 'TypeScript', 'REST API'],
  },
  {
    codename: 'OPERATION · GROUNDFLOOR',
    role: 'Frontend Developer',
    company: 'Kpie Technologies',
    location: 'Lagos, Nigeria',
    timeline: 'Nov 2019 — Oct 2021',
    classification: 'COMPLETE',
    brief:
      'Built user-focused platforms including SellMega (UX-driven e-commerce), shipped the PPMI website ahead of schedule, improved MultiGrid Limited UX, and collaborated on the Hua Ou Brick platform.',
    outcomes: [
      { num: '5+', lbl: 'Platforms' },
      { num: '4', lbl: 'Domains served' },
      { num: '2yr', lbl: 'Tenure' },
    ],
    arsenal: ['React', 'JavaScript', 'CSS', 'REST API'],
  },
];

export default function MissionDossiers() {
  return (
    <section id="works" className="relative w-full px-8 sm:px-5 py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[var(--accent)] opacity-[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        <Fade triggerOnce>
          <div className="flex items-end justify-between gap-6 sm:flex-col sm:items-start mb-12">
            <div>
              <span className="mono-label !text-[var(--accent)]">— Page 03</span>
              <h2 className="font-serif text-[64px] sm:text-[40px] mt-3 leading-[0.95]">
                Mission <em className="italic text-[var(--accent)]">Dossiers</em>
              </h2>
            </div>
            <p className="font-serif italic text-[var(--text-dim)] text-[18px] max-w-[380px]">
              Field reports from companies served and missions completed.
            </p>
          </div>
        </Fade>

        <div className="grid gap-6">
          {missions.map((m, i) => (
            <Fade key={i} delay={i * 80} triggerOnce>
              <article className="dossier p-7 sm:p-5">
                <div className="dossier-tape" />

                {/* Header row */}
                <div className="flex sm:flex-col items-start sm:items-stretch justify-between gap-4 mt-4">
                  <div>
                    <div className="flex items-center gap-2 mono-label !text-[10px]">
                      <FileBadge2 size={12} className="text-[var(--classified)]" />
                      File · {String(i + 1).padStart(3, '0')}
                      <span className="text-[var(--text-muted)]">/</span>
                      {m.codename}
                    </div>
                    <h3 className="font-serif text-[32px] sm:text-[24px] mt-3 leading-tight">
                      {m.role} <span className="text-[var(--accent)]">·</span>{' '}
                      <em className="italic">{m.company}</em>
                    </h3>
                  </div>
                  <span
                    className={`stamp ${m.classification === 'ACTIVE' ? '' : 'stamp-classified'}`}
                  >
                    {m.classification === 'ACTIVE' && (
                      <span className="dot-live !w-1.5 !h-1.5 !shadow-none" />
                    )}
                    {m.classification}
                  </span>
                </div>

                {/* Meta strip */}
                <div className="flex items-center gap-6 sm:flex-wrap sm:gap-3 mt-4 text-[12px] font-mono text-[var(--text-dim)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {m.timeline}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {m.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={12} />
                    Full-time
                  </span>
                </div>

                <hr className="dotted-rule my-6" />

                {/* Two-column: brief + outcomes */}
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-7 sm:col-span-12">
                    <p className="mono-label !text-[10px] mb-3">Mission Brief</p>
                    <p className="font-serif text-[16px] leading-relaxed text-[var(--text-dim)]">
                      {m.brief}
                    </p>

                    <p className="mono-label !text-[10px] mt-6 mb-2">Arsenal Deployed</p>
                    <div className="flex flex-wrap gap-1.5">
                      {m.arsenal.map((a, j) => (
                        <span
                          key={j}
                          className="font-mono text-[10px] px-2 py-1 border border-[var(--border-bright)] rounded text-[var(--text-dim)]"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-5 sm:col-span-12">
                    <p className="mono-label !text-[10px] mb-3">Outcomes Logged</p>
                    <div className="grid grid-cols-3 gap-2">
                      {m.outcomes.map((o, j) => (
                        <div key={j} className="metric-tile">
                          <div className="num">{o.num}</div>
                          <div className="lbl">{o.lbl}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
