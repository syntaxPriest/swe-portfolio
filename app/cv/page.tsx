'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '../components/reveal';
import {
  ArrowLeft,
  Download,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
} from 'lucide-react';

const CV_FILE = '/Daniel-Adewale-SWE-Resume.pdf';

export default function CVPage() {
  return (
    <main className="cv-page">
      <div className="cv-topbar">
        <Link href="/" className="cv-back">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <a href={CV_FILE} download className="btn-pill-dark">
          Download CV
          <span className="arrow-circle"><Download size={13} /></span>
        </a>
      </div>

      <article className="cv-sheet">
        {/* Header */}
        <Reveal>
          <header className="cv-head">
            <h1 className="display cv-name">Daniel Adewale</h1>
            <p className="cv-title">Software Engineer · Senior Front End Developer</p>
            <div className="cv-contacts">
              <span><MapPin size={14} /> Lagos, Nigeria</span>
              <a href="mailto:adewaled03@gmail.com"><Mail size={14} /> adewaled03@gmail.com</a>
              <span><Phone size={14} /> +234 902 014 6835</span>
            </div>
            <div className="cv-links">
              <a href="/" className="cv-chip"><Globe size={13} /> Portfolio</a>
              <a href="https://www.linkedin.com/in/syntaxpriest/" target="_blank" rel="noopener noreferrer" className="cv-chip"><Linkedin size={13} /> LinkedIn</a>
              <a href="https://github.com/syntaxPriest" target="_blank" rel="noopener noreferrer" className="cv-chip"><Github size={13} /> GitHub</a>
            </div>
          </header>
        </Reveal>

        {/* Summary */}
        <Reveal delay={60}>
          <section className="cv-section">
            <h2 className="cv-h2">Professional summary</h2>
            <p className="cv-summary">
              Front-End Developer with 6+ years of experience collaborating with cross-functional
              teams to deliver scalable, user-focused solutions. Proven track record in launching
              innovative products, optimizing efficiency, and building strong stakeholder
              relationships to drive business growth.
            </p>
          </section>
        </Reveal>

        {/* Experience */}
        <Reveal delay={60}>
          <section className="cv-section">
            <h2 className="cv-h2">Work experience</h2>
            <div className="cv-exp-list">
              {cvExperience.map((e, i) => (
                <div key={i} className="cv-exp">
                  <div className="cv-exp-top">
                    <div>
                      <h3 className="cv-exp-role">{e.role}</h3>
                      <p className="cv-exp-org">{e.company} · {e.location}</p>
                    </div>
                    <span className="cv-exp-period">{e.period}</span>
                  </div>
                  <ul className="cv-bullets">
                    {e.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Skills */}
        <Reveal delay={60}>
          <section className="cv-section">
            <h2 className="cv-h2">Key skills</h2>
            <div className="cv-skill-groups">
              {skills.map((g, i) => (
                <div key={i} className="cv-skill-group">
                  <p className="cv-skill-label">{g.label}</p>
                  <div className="cv-skill-tags">
                    {g.items.map((t, j) => (
                      <span key={j} className="cv-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Projects */}
        <Reveal delay={60}>
          <section className="cv-section">
            <h2 className="cv-h2">Selected projects</h2>
            <div className="cv-proj-grid">
              {cvProjects.map((p, i) => (
                <a
                  key={i}
                  href={p.link || undefined}
                  target={p.link ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="cv-proj"
                >
                  <h3 className="cv-proj-name">{p.name}</h3>
                  <p className="cv-proj-desc">{p.desc}</p>
                </a>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Education + Publications */}
        <Reveal delay={60}>
          <section className="cv-section cv-grid-2">
            <div>
              <h2 className="cv-h2">Education</h2>
              <h3 className="cv-exp-role">Miva Open University</h3>
              <p className="cv-exp-org">B.Sc, Computer Science</p>
              <p className="cv-exp-period mt-1">2024 — 2027</p>
            </div>
            <div>
              <h2 className="cv-h2">Publications</h2>
              <ul className="cv-pub-list">
                <li>
                  <a href="https://dev.to/syntaxpriest/understanding-styled-components-a-basic-guide-on-styled-components-usage-with-reactnextvue-45a4" target="_blank" rel="noopener noreferrer">
                    Understanding styled-components with React, Next & Vue
                  </a>
                </li>
                <li>
                  <a href="https://dev.to/syntaxpriest/image-file-previewing-with-reactjs-883" target="_blank" rel="noopener noreferrer">
                    Image file previewing with ReactJS
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </Reveal>
      </article>

      <div className="cv-footer">
        <a href={CV_FILE} download className="btn-pill-dark">
          Download CV
          <span className="arrow-circle"><Download size={13} /></span>
        </a>
      </div>
    </main>
  );
}

const cvExperience = [
  {
    role: 'Senior Front End Engineer',
    company: 'Fatbeehive',
    location: 'London, UK',
    period: 'Jan 2025 — Present',
    points: [
      'Lead development and optimization of accessible, user-centric websites and platforms for charities and ethical organizations.',
      'Transform complex briefs into performant, responsive frontends with Twig, JavaScript, jQuery and WordPress, alongside UX designers and PMs.',
      'Build custom UI components and reusable design systems with pixel-perfect fidelity to Figma; advocate semantic HTML, SCSS and WCAG 2.1 AA compliance.',
      'Improved internal process — enhanced CI/CD workflows and Git branching strategy — and reduced client support response time as tech support.',
    ],
  },
  {
    role: 'Senior Front End Developer',
    company: 'Qshelter Limited',
    location: 'Lagos, Nigeria',
    period: 'Sep 2023 — Present',
    points: [
      'Built the Contribuild frontend in React and TypeScript, earning a senior role within two weeks through responsive design and intuitive features.',
      'Delivered Qshelter features driving 100,000 visits and 90% user retention within a month via agile collaboration.',
      'Shipped the MoFI Housing Platform MVP in 15 days.',
      'Built the Renewed Hope Housing Platform with the Federal Government of Nigeria — 50,000+ registrations and ₦1B+ in sales post-launch.',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Mage Inc',
    location: 'Lagos, Nigeria',
    period: 'Dec 2021 — Oct 2023',
    points: [
      'Developed the landing page and resolved bugs for a flawless first impression.',
      'Built the Creator Store from scratch — 6,000+ users at an 80% retention rate.',
      'Created the Creator Dashboard for data-driven insights and creator performance tracking.',
      'Developed payment infrastructure: wallets, checkouts and a Virtual Card system for secure monetization.',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Kpie Technologies',
    location: 'Lagos, Nigeria',
    period: 'Nov 2019 — Oct 2021',
    points: [
      'Delivered the PPMI website 3 days early, translating the CTO’s brief into a polished, functional design.',
      'Enhanced the MultiGrid Limited website with UX best practices, and built SellMega — a user-friendly e-commerce platform — from scratch.',
      'Collaborated with backend developers to launch the Hua Ou Brick website and contributed to SafeScout.',
    ],
  },
  {
    role: 'Freelance Frontend Engineer',
    company: 'Independent',
    location: 'Remote',
    period: 'Jun 2018 — Present',
    points: [
      'Build responsive websites and applications in React, TypeScript and modern front-end tooling.',
      'Develop e-commerce platforms, dashboards and secure payment systems focused on seamless UX.',
      'Partner with cross-functional teams to deliver high-quality projects on time and within scope.',
    ],
  },
];

const skills = [
  {
    label: 'Tools',
    items: [
      'React', 'Next.js', 'TypeScript', 'JavaScript / ES6', 'React Native', 'Vue',
      'Redux', 'React Query', 'Tailwind CSS', 'GraphQL', 'Node.js', 'Firebase',
      'Jest', 'Figma', 'Git', 'Webpack',
    ],
  },
  {
    label: 'Techniques',
    items: [
      'Responsive Design', 'Pixel-Perfect Design', 'Reusable Components',
      'Cross-Browser Compatibility', 'Unit Testing', 'Clean Code',
      'Functional Programming', 'Animations', 'Styled-Components',
    ],
  },
  {
    label: 'Soft skills',
    items: [
      'Effective Communication', 'Teamwork & Collaboration', 'MVP Coordination',
      'Problem-solving', 'User-Centric Mindset', 'Adaptability', 'Attention to Detail',
    ],
  },
];

const cvProjects = [
  { name: 'MREIF (MoFI Housing)', link: 'https://mreif.com.ng', desc: 'Affordable housing platform built for the Ministry of Finance with convenient payment plans.' },
  { name: 'Renewed Hope Homes', link: 'https://renewedhopehomes.fmhud.gov.ng/properties/search', desc: 'Federal housing platform helping Nigerians afford homes across all 36 states.' },
  { name: 'Mage', link: 'https://trymage.com', desc: 'Platform for creative businesses to manage payments and financial operations.' },
  { name: 'Contribuild', link: 'https://contribuild.ng', desc: 'A platform that enables individuals to save towards their dream homes.' },
  { name: 'Song Explainer', link: 'https://lyrist.netlify.app', desc: 'Breaks down what any song is really about — themes, meaning and references.' },
  { name: 'BrimAI', link: 'https://trybrim.app', desc: 'Prompt-engineering app that turns rough ideas into expert-level AI prompts.' },
];
