'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ q, a }: { q: string; a: string }) {
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
