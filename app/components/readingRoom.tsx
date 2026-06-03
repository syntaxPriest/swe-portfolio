'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { ArrowUpRight } from 'lucide-react';

interface Piece {
  name: string;
  excerpt: string;
  link: string;
  category: string;
  readTime: string;
  date: string;
}

const publications: Piece[] = [
  {
    name: 'Understanding basic styled components with React, Next and Vue.',
    excerpt:
      'A walkthrough of how styled-components composes across the three biggest frameworks, with patterns I keep reusing in production.',
    link: 'https://dev.to/syntaxpriest/understanding-styled-components-a-basic-guide-on-styled-components-usage-with-reactnextvue-45a4',
    category: 'Engineering',
    readTime: '6 min',
    date: 'Aug 2023',
  },
  {
    name: 'Image Upload And File Preview With ReactJs.',
    excerpt:
      'A reusable React pattern for previewing uploaded images before they hit the server — small UX, big difference.',
    link: 'https://dev.to/syntaxpriest/image-file-previewing-with-reactjs-883',
    category: 'Tutorial',
    readTime: '5 min',
    date: 'Jun 2023',
  },
];

export default function ReadingRoom() {
  return (
    <section id="articles" className="relative w-full max-w-[1100px] mx-auto px-8 sm:px-5 py-24">
      <Fade triggerOnce>
        <div className="flex items-end justify-between gap-6 sm:flex-col sm:items-start mb-12">
          <div>
            <span className="mono-label !text-[var(--accent)]">— Page 05</span>
            <h2 className="font-serif text-[64px] sm:text-[40px] mt-3 leading-[0.95]">
              The <em className="italic text-[var(--accent)]">Reading Room</em>
            </h2>
          </div>
          <p className="font-serif italic text-[var(--text-dim)] text-[18px] max-w-[380px]">
            Lessons, trends, and tutorials I've committed to the page.
          </p>
        </div>
      </Fade>

      {/* Table-of-contents header */}
      <div className="flex items-baseline justify-between mt-12 mb-3">
        <span className="mono-label !text-[10px]">Table of Contents</span>
        <span className="mono-label !text-[10px]">Issue · Spring 2026</span>
      </div>
      <div className="masthead-rule" />

      <div>
        {publications.map((p, i) => (
          <Fade key={i} delay={i * 80} triggerOnce>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="toc-row">
                <span className="toc-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="toc-title group-hover:text-[var(--accent)] transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-serif italic text-[15px] text-[var(--text-dim)] mt-2 max-w-[520px]">
                    {p.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="mono-label !text-[10px]">{p.category}</span>
                    <span className="text-[var(--text-muted)] text-xs">·</span>
                    <span className="mono-label !text-[10px]">{p.readTime}</span>
                    <span className="text-[var(--text-muted)] text-xs">·</span>
                    <span className="mono-label !text-[10px]">{p.date}</span>
                  </div>
                </div>
                <div className="toc-meta flex items-center gap-2">
                  Read
                  <span className="w-9 h-9 rounded-full border border-[var(--border-bright)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-[#0A0A0B] transition-all">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          </Fade>
        ))}
      </div>
    </section>
  );
}
