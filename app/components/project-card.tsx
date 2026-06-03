'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { ArrowUpRight } from 'lucide-react';

interface CardProps {
  index: number;
  img?: string;
  title: string;
  description: string;
  link: string;
  stacks?: string[];
  featured?: boolean;
}

const Card: React.FC<CardProps> = ({ index, link, img, title, description, stacks = [], featured }) => {
  const openLink = () => {
    if (!link) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Fade delay={index * 60} triggerOnce>
      <div
        onClick={openLink}
        className={`project-card group cursor-pointer ${
          featured ? 'p-6 sm:p-5' : 'p-5'
        }`}
        style={featured ? { gridColumn: 'span 2' } : undefined}
      >
        <div className="project-img-wrap">
          <img
            src={img}
            alt={title}
            className={`w-full object-cover ${featured ? 'h-[260px]' : 'h-[180px]'}`}
          />
        </div>

        <div className="arrow-corner">
          <ArrowUpRight size={16} />
        </div>

        <div className="pt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="mono-label">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-[var(--text-muted)] text-xs">·</span>
            <span className="mono-label !text-[var(--accent)]">Live</span>
          </div>
          <h3 className={`font-bold leading-tight ${featured ? 'text-[24px]' : 'text-[18px]'}`}>
            {title}
          </h3>
          <p className="text-[13px] text-[var(--text-dim)] mt-2 leading-relaxed line-clamp-3">
            {description}
          </p>

          {stacks.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {stacks.slice(0, featured ? 6 : 4).map((stack, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono px-2 py-1 rounded-md border border-[var(--border-bright)] text-[var(--text-dim)]"
                >
                  {stack}
                </span>
              ))}
              {stacks.length > (featured ? 6 : 4) && (
                <span className="text-[10px] font-mono px-2 py-1 text-[var(--text-muted)]">
                  +{stacks.length - (featured ? 6 : 4)}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default Card;
