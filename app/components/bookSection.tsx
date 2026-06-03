import React from 'react';
import { BookOpen } from 'lucide-react';

export default function BookSection() {
  return (
    <div className="surface surface-hover p-6 box-grad h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--accent-soft)] flex items-center justify-center">
            <BookOpen size={14} className="text-[var(--accent)]" />
          </div>
          <span className="mono-label">Now Reading</span>
        </div>
      </div>

      <div className="flex-1 flex items-end gap-4 mt-8">
        <img
          src="/user/Pyschology-of-Intelligence-Analysis-1.jpg"
          alt="Book cover"
          className="w-[88px] rounded-md shadow-[0_12px_28px_rgba(0,0,0,0.4)] shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-[15px] leading-snug font-medium">
            Psychology of Intelligence Analysis
          </p>
          <p className="text-[12px] text-[var(--text-muted)] mt-1">
            Richards J. Heuer Jr.
          </p>
          <div className="flex items-center gap-1 mt-3">
            <div className="h-1 w-12 rounded-full bg-[var(--accent)]" />
            <div className="h-1 w-6 rounded-full bg-[var(--border-bright)]" />
            <span className="text-[10px] text-[var(--text-muted)] ml-1 font-mono">68%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
