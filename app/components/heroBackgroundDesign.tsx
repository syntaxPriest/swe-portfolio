import React from 'react';

export default function HeroBackgroundDesign() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg radial-fade" />

      {/* Top spotlight */}
      <div className="hero-spotlight" />

      {/* Orbiting rings */}
      <div className="sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[900px] h-[900px]">
          <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.04)]" />
          <div className="absolute inset-[80px] rounded-full border border-[rgba(255,255,255,0.04)]" />
          <div className="absolute inset-[180px] rounded-full border border-[rgba(255,255,255,0.04)]" />
          <div className="absolute inset-[280px] rounded-full border border-[rgba(255,255,255,0.04)]" />

          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-orbit">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent-glow)]" />
          </div>
          <div className="absolute inset-[80px] animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-[#A7FCEE]" />
          </div>
        </div>
      </div>

      {/* Floating accent dots */}
      <div className="absolute top-[20%] left-[15%] w-1 h-1 rounded-full bg-[var(--accent)] animate-float" />
      <div className="absolute top-[30%] right-[18%] w-1.5 h-1.5 rounded-full bg-[#A7FCEE] animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[20%] left-[20%] w-1 h-1 rounded-full bg-[var(--accent)] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[30%] right-[22%] w-2 h-2 rounded-full bg-[#FFB68A] opacity-50 animate-float" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}
