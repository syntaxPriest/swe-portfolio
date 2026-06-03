import React from 'react';
import Marquee from 'react-fast-marquee';
import { Layers } from 'lucide-react';

export default function TechStackSection() {
  return (
    <div className="surface surface-hover p-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[var(--accent-soft)] flex items-center justify-center">
          <Layers size={14} className="text-[var(--accent)]" />
        </div>
        <span className="mono-label">Tech Stack</span>
      </div>
      <p className="text-[14px] text-[var(--text-dim)] mt-2">
        Languages, frameworks and tools I reach for daily.
      </p>

      <div className="relative mt-6 -mx-6">
        <Marquee
          className="!flex !gap-3"
          pauseOnHover
          gradient
          gradientColor="rgb(19, 19, 22)"
          gradientWidth={40}
        >
          {TechList.map((item, index) => (
            <div
              key={index}
              className="mx-2 w-[58px] h-[58px] rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
              title={item.name}
            >
              <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export const TechList = [
  { id: "1", name: "HTML", icon: "/stack/html.png" },
  { id: "2", name: "CSS", icon: "/stack/css.png" },
  { id: "3", name: "Javascript", icon: "/stack/js.png" },
  { id: "12", name: "Typescript", icon: "/stack/ts.png" },
  { id: "13", name: "NextJs", icon: "/stack/next.png" },
  { id: "4", name: "React", icon: "/stack/react.png" },
  { id: "5", name: "Redux", icon: "/stack/redux.png" },
  { id: "6", name: "Tailwind", icon: "/stack/tailwind.png" },
  { id: "7", name: "Figma", icon: "/stack/figma.png" },
  { id: "8", name: "React Native", icon: "/stack/Reactnative.png" },
  { id: "9", name: "NodeJs", icon: "/stack/nodejs.png" },
  { id: "15", name: "GraphQL", icon: "/stack/GraphQL.png" },
  { id: "16", name: "Firebase", icon: "/stack/firebase.png" },
  { id: "20", name: "Jest", icon: "/stack/jest.png" },
  { id: "21", name: "Chakra UI", icon: "/stack/chakra.png" },
  { id: "10", name: "SASS", icon: "/stack/sass.png" },
  { id: "11", name: "Git & CI/CD", icon: "/stack/git.png" },
  { id: "14", name: "React Query", icon: "/stack/Reactquery.png" },
  { id: "151", name: "DSA", icon: "/stack/dsa.png" },
];
