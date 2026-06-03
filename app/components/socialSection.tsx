import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const myEmail = "adewaled03@gmail.com";

export default function SocialSection() {
  return (
    <div className="surface surface-hover p-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[var(--accent-soft)] flex items-center justify-center">
          <ArrowUpRight size={14} className="text-[var(--accent)]" />
        </div>
        <span className="mono-label">Elsewhere</span>
      </div>
      <p className="text-[14px] text-[var(--text-dim)] mt-2">
        Drop in. Say hi. Pick a channel.
      </p>

      <div className="grid grid-cols-2 gap-2 mt-5">
        {social.map((item, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-3 py-3 rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
          >
            <div className="flex items-center gap-2 min-w-0">
              <item.Icon size={16} className="shrink-0 text-[var(--text-dim)] group-hover:text-[var(--accent)]" />
              <span className="text-[13px] truncate">{item.name}</span>
            </div>
            <ArrowUpRight
              size={14}
              className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export const social = [
  {
    id: "1",
    name: "Github",
    Icon: Github,
    link: "https://github.com/syntaxPriest",
  },
  {
    id: "2",
    name: "LinkedIn",
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/syntaxpriest/",
  },
  {
    id: "3",
    name: "Twitter",
    Icon: Twitter,
    link: "https://twitter.com/syntaxPriest",
  },
  {
    id: "4",
    name: "Email",
    Icon: Mail,
    link: `mailto:${myEmail}`,
  },
];
