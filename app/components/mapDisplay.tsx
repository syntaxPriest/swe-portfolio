import React from 'react';
import { MapPin } from 'lucide-react';

export default function LocationDisplay() {
  return (
    <div className="surface surface-hover relative overflow-hidden h-[260px]">
      <img
        src="/user/map.png"
        alt="Map showing Lagos, Nigeria"
        className="w-full h-full object-cover opacity-80 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />

      {/* Pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-[var(--accent)] opacity-20 animate-ping" />
          <div className="relative w-16 h-16 rounded-full bg-[rgba(10,10,11,0.7)] backdrop-blur-md border border-[var(--accent)] flex items-center justify-center">
            <img src="/user/avatar.png" alt="Avatar" className="w-11 h-11 rounded-full" />
          </div>
        </div>
      </div>

      {/* Location badge */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[rgba(10,10,11,0.7)] backdrop-blur-md border border-[var(--border-bright)]">
          <MapPin size={12} className="text-[var(--accent)]" />
          <span className="text-[12px]">Lagos, Nigeria</span>
        </div>
        <span className="mono-label">GMT+1</span>
      </div>
    </div>
  );
}
