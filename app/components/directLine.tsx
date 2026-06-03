'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Mail, Github, Linkedin, Twitter, FileText, Phone, ArrowUpRight } from 'lucide-react';

const myEmail = 'adewaled03@gmail.com';
const resumeLink =
  'https://docs.google.com/document/d/1sCQ_9keryAYoOxwaVqu05fWl3DgkAjroKQPTLqtVFQ4/edit?tab=t.0';

const channels = [
  { Icon: Mail, cmd: '→ email', label: 'address', val: myEmail, link: `mailto:${myEmail}` },
  { Icon: Phone, cmd: '→ call', label: 'tel', val: '+234 8188 869 197', link: 'tel:+2348188869197' },
  { Icon: FileText, cmd: '→ resume', label: 'doc', val: 'open in tab', link: resumeLink },
  { Icon: Linkedin, cmd: '→ linkedin', label: 'profile', val: 'linkedin/in/syntaxpriest', link: 'https://www.linkedin.com/in/syntaxpriest/' },
  { Icon: Github, cmd: '→ github', label: 'profile', val: 'github/syntaxPriest', link: 'https://github.com/syntaxPriest' },
  { Icon: Twitter, cmd: '→ twitter', label: 'handle', val: '@syntaxPriest', link: 'https://twitter.com/syntaxPriest' },
];

export default function DirectLine() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-8 sm:px-5 pb-24">
      <Fade triggerOnce>
        <div className="flex items-end justify-between gap-6 sm:flex-col sm:items-start mb-10">
          <div>
            <span className="mono-label !text-[var(--accent)]">— Closing Note</span>
            <h2 className="font-serif text-[64px] sm:text-[40px] mt-3 leading-[0.95]">
              The <em className="italic text-[var(--accent)]">Direct Line</em>
            </h2>
          </div>
          <p className="font-serif italic text-[var(--text-dim)] text-[18px] max-w-[380px]">
            Six ways to find me. The fastest is email.
          </p>
        </div>
      </Fade>

      <Fade triggerOnce>
        <div className="direct-line">
          {/* Terminal-style header */}
          <div className="relative px-7 py-5 border-b border-[var(--border)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="widget-dots">
                <span /><span /><span />
              </div>
              <span className="mono-label">daniel ~ /contact</span>
            </div>
            <span className="flex items-center gap-2 mono-label !text-[10px]">
              <span className="dot-live !w-1.5 !h-1.5 !shadow-none" />
              Listening
            </span>
          </div>

          {/* Greeting block */}
          <div className="relative px-7 pt-8 pb-4">
            <p className="terminal-line">
              <span className="prompt">$</span>{' '}
              <span className="val">echo "Hello, world."</span>
            </p>
            <h3 className="font-serif text-[40px] sm:text-[30px] mt-4 leading-tight">
              Have an idea worth <em className="italic text-[var(--accent)]">building?</em>
            </h3>
            <p className="font-serif italic text-[var(--text-dim)] text-[17px] mt-3 max-w-[560px]">
              I'm open to senior frontend roles, focused contract work, and collaborations
              on products that deserve to feel inevitable. Pick a channel — I respond fast.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="relative px-7 pb-2">
            <a
              href={`mailto:${myEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--accent)] text-[#0A0A0B] text-[14px] font-medium hover:shadow-[0_12px_40px_-12px_var(--accent-glow)] transition-all"
            >
              <Mail size={15} />
              Start a conversation
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Channels list */}
          <div className="relative mt-4">
            {channels.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target={c.link.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="channel-row group"
              >
                <c.Icon size={15} className="text-[var(--text-dim)] group-hover:text-[var(--accent)]" />
                <span className="ch-cmd">{c.cmd}</span>
                <span className="ch-label">{c.label}: <span className="ch-val">{c.val}</span></span>
                <ArrowUpRight
                  size={14}
                  className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="relative px-7 py-5 border-t border-[var(--border)] flex sm:flex-col sm:gap-3 items-center justify-between">
            <p className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.1em]">
              © {new Date().getFullYear()} · Daniel Adewale · Lagos, Nigeria
            </p>
            <p className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.1em]">
              Built by hand · v6.0
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
