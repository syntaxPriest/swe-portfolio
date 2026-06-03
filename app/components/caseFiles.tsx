'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { ArrowUpRight } from 'lucide-react';

interface CaseProject {
  name: string;
  pullquote: string;
  desc: string;
  img: string;
  link: string;
  year: string;
  role: string;
  client: string;
  stacks: string[];
}

const projectList: CaseProject[] = [
  {
    name: 'Ministry of Finance Incorporated — Housing',
    pullquote: 'A national housing platform engineered to feel personal.',
    desc:
      'Built the public-facing platform serving over 1 million Nigerians with property search, multi-method payment flows, and admin controls.',
    img: '/works/mofi2.png',
    link: 'https://mreif.com.ng',
    year: '2024',
    role: 'Lead Frontend',
    client: 'Qshelter NG',
    stacks: ['Next.js', 'TypeScript', 'Tailwind', 'Redux', 'GraphQL'],
  },
  {
    name: 'Renewed Hope Housing Platform',
    pullquote: 'Helping a country come home — one unit at a time.',
    desc:
      'Made owning a home achievable for Nigerians: users select units and complete purchases with multiple payment methods. 50K+ registered users, ₦1B+ in transactions.',
    img: '/works/rh.png',
    link: 'https://renewedhopehomes.fmhud.gov.ng/properties/search',
    year: '2024',
    role: 'Senior Frontend',
    client: 'Qshelter / FMHUD',
    stacks: ['Next.js', 'TypeScript', 'GraphQL', 'Redux', 'Tailwind'],
  },
  {
    name: 'Mage',
    pullquote: 'Banking, billing, and breathing room for creatives.',
    desc:
      'A platform for creative businesses to manage payments, expenses, and access funding for their projects. Owned the Creator Store and the Creator Dashboard.',
    img: '/works/mage.png',
    link: 'https://trymage.com',
    year: '2022 – 2023',
    role: 'Frontend Lead',
    client: 'Mage Inc',
    stacks: ['React', 'Next.js', 'TypeScript', 'Firebase', 'WebSocket'],
  },
  {
    name: 'Contribuild',
    pullquote: 'Save now, own later.',
    desc:
      'Find the property of your dreams and start saving towards owning it — a savings-first real estate platform built for the diaspora and onshore alike.',
    img: '/works/contribuild.png',
    link: 'https://contribuild.ng',
    year: '2024',
    role: 'Senior Frontend',
    client: 'Qshelter NG',
    stacks: ['React', 'TypeScript', 'Redux', 'Tailwind'],
  },
  {
    name: 'Metropolitan Club Management',
    pullquote: 'A members-only system, built like the members are watching.',
    desc:
      'Back-office management system for The Metropolitan Club covering members, billing, events, and analytics in one cohesive admin.',
    img: '/works/tmc.png',
    link: '',
    year: '2023',
    role: 'Frontend Developer',
    client: 'Metropolitan Club',
    stacks: ['React', 'TypeScript', 'Tailwind', 'React Query'],
  },
  {
    name: 'Video Streaming App',
    pullquote: 'Composition. Motion. Snappy controls.',
    desc:
      'Frontend implementation for a Netflix-style streaming experience with clean composition, snappy interactions, and a refined hero.',
    img: '/works/video.png',
    link: 'https://vid-react.netlify.app',
    year: '2021',
    role: 'Frontend',
    client: 'Concept Project',
    stacks: ['React', 'Tailwind', 'JavaScript'],
  },
];

const Case: React.FC<{ p: CaseProject; index: number }> = ({ p, index }) => {
  const flip = index % 2 === 1;
  const openLink = () => p.link && window.open(p.link, '_blank', 'noopener,noreferrer');

  return (
    <article className="case-file grid grid-cols-12 gap-10 sm:gap-6 items-center cursor-pointer group" onClick={openLink}>
      {/* Image */}
      <div className={`col-span-7 sm:col-span-12 ${flip ? 'order-2 sm:order-1' : ''}`}>
        <div className="case-img-wrap relative">
          <span className="case-num absolute -top-12 sm:-top-10 -left-2 select-none pointer-events-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <img src={p.img} alt={p.name} className="block w-full" />
        </div>
      </div>

      {/* Meta */}
      <div className={`col-span-5 sm:col-span-12 ${flip ? 'order-1 sm:order-2' : ''}`}>
        <div className="mono-label !text-[10px] mb-3">Case File · No. {String(index + 1).padStart(2, '0')}</div>
        <h3 className="font-serif text-[36px] sm:text-[28px] leading-[1.05]">{p.name}</h3>
        <p className="font-serif italic text-[18px] text-[var(--accent)] mt-4 leading-snug">
          "{p.pullquote}"
        </p>
        <p className="text-[14px] text-[var(--text-dim)] mt-4 leading-relaxed">{p.desc}</p>

        <div className="mt-6">
          <div className="case-meta-row">
            <span className="k">Client</span>
            <span className="v">{p.client}</span>
          </div>
          <div className="case-meta-row">
            <span className="k">Role</span>
            <span className="v">{p.role}</span>
          </div>
          <div className="case-meta-row">
            <span className="k">Year</span>
            <span className="v">{p.year}</span>
          </div>
          <div className="case-meta-row" style={{ borderBottom: 'none' }}>
            <span className="k">Stack</span>
            <div className="v">
              {p.stacks.map((s, i) => (
                <span key={i} className="case-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {p.link && (
          <button
            onClick={openLink}
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border-bright)] text-[13px] font-mono uppercase tracking-wider hover:bg-[var(--accent)] hover:text-[#0A0A0B] hover:border-[var(--accent)] transition-all"
          >
            View live
            <ArrowUpRight size={14} />
          </button>
        )}
      </div>
    </article>
  );
};

export default function CaseFiles() {
  return (
    <section id="projects" className="relative w-full max-w-[1200px] mx-auto px-8 sm:px-5 py-24">
      <Fade triggerOnce>
        <div className="flex items-end justify-between gap-6 sm:flex-col sm:items-start mb-16">
          <div>
            <span className="mono-label !text-[var(--accent)]">— Page 04</span>
            <h2 className="font-serif text-[64px] sm:text-[40px] mt-3 leading-[0.95]">
              Selected <em className="italic text-[var(--accent)]">Case Files</em>
            </h2>
          </div>
          <p className="font-serif italic text-[var(--text-dim)] text-[18px] max-w-[380px]">
            Six recent reports from the desk — clients, stack, outcome.
          </p>
        </div>
      </Fade>

      <div className="space-y-24 sm:space-y-16">
        {projectList.map((p, i) => (
          <Fade key={i} delay={i * 60} triggerOnce>
            <Case p={p} index={i} />
          </Fade>
        ))}
      </div>
    </section>
  );
}
