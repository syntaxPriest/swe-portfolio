/* ===================================================================
 * Portfolio Data — single source of truth for all content.
 * Import these constants in page.tsx, works/page.tsx, etc.
 * =================================================================== */

// ---- Types ----

export type NavSection = 'home' | 'about' | 'works' | 'projects' | 'articles' | 'experience';

export type Category = 'All' | 'Platform' | 'Web app' | 'Marketing site';

export interface Project {
  name: string;
  img: string;
  link?: string;
  /** Display-friendly duration e.g. "2025", "Personal build", "6 weeks" */
  duration: string;
  /** Sortable year for the works page */
  year: string;
  /** Category for filter on works page */
  category: Category;
  /** Short description */
  desc: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
}

export interface JournalEntry {
  title: string;
  link: string;
  date: string;
  img: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Stat {
  num: string;
  lbl: string;
}

export interface Outcome {
  kicker: string;
  title: string;
  desc: string;
}

export interface Service {
  title: string;
  desc: string;
  tags: string[];
  img: string;
}

export interface HeroStackItem {
  name: string;
  file: string;
}

// ---- Data ----

export const myEmail = 'adewaled03@gmail.com';

export const heroStack: HeroStackItem[] = [
  { name: 'React', file: 'react.png' },
  { name: 'Next.js', file: 'next-dark.svg' },
  { name: 'TypeScript', file: 'ts.png' },
  { name: 'JavaScript', file: 'js.png' },
  { name: 'Tailwind CSS', file: 'tailwind.png' },
  { name: 'Redux', file: 'redux.png' },
  { name: 'GraphQL', file: 'GraphQL.png' },
  { name: 'Node.js', file: 'nodejs.png' },
  { name: 'React Query', file: 'Reactquery.png' },
  { name: 'React Native', file: 'Reactnative.png' },
  { name: 'Figma', file: 'figma.png' },
];

export const stats: Stat[] = [
  { num: '20+', lbl: 'Projects shipped end-to-end with care' },
  { num: '1M+', lbl: 'Users served across platforms built' },
  { num: '6+', lbl: 'Years building production interfaces' },
  { num: '4', lbl: 'Companies and teams partnered with' },
];

export const outcomes: Outcome[] = [
  {
    kicker: 'Engineering at scale',
    title: 'Interfaces engineered for scale, not screenshots',
    desc: 'Production systems built to onboard tens of thousands without buckling.',
  },
  {
    kicker: 'Design systems',
    title: 'Components that compound across teams',
    desc: 'Reusable systems that cut cycles and keep velocity without quality drift.',
  },
];

export const services: Service[] = [
  {
    title: 'Web engineering',
    desc: 'Production React, Next.js, and TypeScript — built to scale and built to last.',
    tags: ['Next.js', 'React', 'TypeScript', 'GraphQL'],
    img: '/works/services/web.svg',
  },
  {
    title: 'Design systems',
    desc: 'Reusable component libraries with strong primitives and tight DX.',
    tags: ['Tokens', 'Tailwind', 'Storybook', 'Accessibility'],
    img: '/works/services/design.svg',
  },
  {
    title: 'Performance',
    desc: 'Core Web Vitals, bundle diet, hydration strategy, perceived speed.',
    tags: ['Profiling', 'CWV', 'Caching', 'RSC'],
    img: '/works/services/performance.svg',
  },
  {
    title: 'Product partnership',
    desc: 'Embedded with PM and design, end-to-end ownership, weekly demos.',
    tags: ['Discovery', 'Specs', 'QA', 'Reviews'],
    img: '/works/services/partnership.svg',
  },
];

export const experience: Experience[] = [
  {
    role: 'Senior Front End Engineer',
    company: 'Fatbeehive',
    location: 'London, UK',
    period: 'Jan 2025 — Present',
    summary:
      'At Fatbeehive I build for purpose-driven teams — charities and ethical organizations — translating intricate briefs into accessible, high-performing websites. My days move between pixel-perfect Figma builds, reusable design systems, and keeping clients unblocked by resolving support tickets quickly.',
    points: [
      'Lead development of accessible, user-centric platforms for charities and ethical organizations, turning complex briefs into performant, responsive frontends.',
      'Build custom UI components and reusable design systems with pixel-perfect fidelity to Figma, championing semantic HTML, SCSS and WCAG 2.1 AA compliance.',
    ],
  },
  {
    role: 'Senior Front End Developer',
    company: 'Qshelter Limited',
    location: 'Lagos, Nigeria',
    period: 'Sep 2023 — Present',
    summary:
      'Qshelter is where I earned a senior role within two weeks. I led frontend work across their housing products — building Contribuild, shipping the MoFI Housing MVP in 15 days, and partnering with the Federal Government of Nigeria on the Renewed Hope platform, which drove 50,000+ registrations and over ₦1B in sales.',
    points: [
      'Built Contribuild in React and TypeScript, earning a senior role within two weeks; delivered Qshelter features driving 100,000 visits and 90% retention in a month.',
      'Shipped the MoFI Housing MVP in 15 days and built the Renewed Hope platform with the Federal Government of Nigeria — 50,000+ registrations and ₦1B+ in sales.',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Mage Inc',
    location: 'Lagos, Nigeria',
    period: 'Dec 2021 — Oct 2023',
    summary:
      'At Mage I helped a creator-economy product find its footing — building the Creator Store from scratch to 6,000+ users, a data-rich Creator Dashboard, and the payment rails (wallets, checkout, virtual cards) that let creators monetize securely.',
    points: [
      'Built the Creator Store from scratch, attracting 6,000+ users at an 80% retention rate through an intuitive purchase experience.',
      'Developed the Creator Dashboard and payment infrastructure — wallets, checkouts, and a Virtual Card system for secure, seamless monetization.',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Kpie Technologies',
    location: 'Lagos, Nigeria',
    period: 'Nov 2019 — Oct 2021',
    summary:
      'Kpie was a fast-paced agency chapter: I delivered client sites ahead of deadline, applied UX best practices to lift engagement, and built products like SellMega end-to-end while collaborating closely with backend teams.',
    points: [
      'Delivered the PPMI website ahead of schedule and improved MultiGrid Limited with UX best practices for a more engaging experience.',
      'Built SellMega, a user-friendly e-commerce platform, and collaborated on the Hua Ou Brick site and SafeScout.',
    ],
  },
  {
    role: 'Freelance Frontend Engineer',
    company: 'Independent',
    location: 'Remote',
    period: 'Jun 2018 — Present',
    summary:
      'Across freelance engagements since 2018 I\'ve shipped responsive apps, dashboards, e-commerce platforms and secure payment systems in React and TypeScript — owning the frontend end-to-end and collaborating with cross-functional teams to deliver on time and in scope.',
    points: [
      'Build responsive websites and apps in React, TypeScript and modern tooling — e-commerce platforms, dashboards, and secure payment systems.',
      'Partner with cross-functional teams to ship high-quality, performant, user-centric products on time and in scope.',
    ],
  },
];

export const faqs: FAQ[] = [
  {
    q: 'Do you take on small projects?',
    a: 'Yes — small, well-scoped projects are some of my favorite. If the brief is sharp and the timeline is honest, I am interested.',
  },
  {
    q: 'Can you work with an existing codebase?',
    a: 'Absolutely. I will audit before I refactor, and I prefer evolution to rewrites.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Contract engagements typically run 4–12 weeks. Full-time engagements run quarter-by-quarter with milestones we agree on upfront.',
  },
  {
    q: 'What happens after I reach out?',
    a: 'You get a reply within 24 hours, we book a 20-minute intro call, and within 48 hours I send a scoped proposal.',
  },
  {
    q: 'Do you offer free intro calls?',
    a: 'Yes — 20 minutes, no slides, no pitch. Just a conversation about your product and whether I am the right fit.',
  },
  {
    q: 'Can I reach out if I am not sure what I need yet?',
    a: 'Please do. Half the value of the intro call is figuring that out together.',
  },
];

export const journalEntries: JournalEntry[] = [
  {
    title: 'Understanding styled components with React, Next and Vue.',
    link: 'https://dev.to/syntaxpriest/understanding-styled-components-a-basic-guide-on-styled-components-usage-with-reactnextvue-45a4',
    date: 'Aug 3, 2025',
    img: '/works/journal/styled.svg',
  },
  {
    title: 'Image upload and file preview with ReactJS.',
    link: 'https://dev.to/syntaxpriest/image-file-previewing-with-reactjs-883',
    date: 'Jun 6, 2025',
    img: '/works/journal/upload.svg',
  },
  {
    title: 'Rethinking the frontend engineering process.',
    link: 'https://dev.to/syntaxpriest',
    date: 'Jul 3, 2025',
    img: '/works/journal/process.svg',
  },
];

/** Merged project list — single source for both the home page HuePanels and the works page filter/grid.
 *  Rich shape includes `duration` (display) and `year` (sortable) + `category` for filtering. */
export const projectList: Project[] = [
  {
    name: 'Openvisio',
    img: '/works/openvisio.png',
    link: 'https://openvisio.io',
    duration: '2025',
    year: '2025',
    category: 'Web app',
    desc: 'A code-intelligence tool that turns a repository into a navigable knowledge graph — trace call chains, map dependencies, and surface structure so AI agents and engineers can understand large codebases at a glance.',
  },
  {
    name: '2004 Estate',
    img: '/works/2004estate.png',
    link: 'https://2004estate.ng',
    duration: '2025',
    year: '2025',
    category: 'Platform',
    desc: 'A property platform for a coastal residential estate — browse residences, explore floor plans, and choose flexible installment or mortgage plans in a fast, trust-building interface.',
  },
  {
    name: 'Song Explainer',
    img: '/works/lyrist.png',
    link: 'https://lyrist.netlify.app',
    duration: 'Personal build',
    year: '2025',
    category: 'Web app',
    desc: 'Paste a Spotify link, an ISRC, or just a song and artist, and Lyrist unpacks what the track is really about — themes, line-by-line meaning, and the references hiding in the lyrics — in a calm, focused reading view.',
  },
  {
    name: 'BrimAI',
    img: '/works/brim.png',
    link: 'https://trybrim.app',
    duration: 'Personal build',
    year: '2025',
    category: 'Web app',
    desc: 'A prompt-engineering app that turns rough ideas into expert-level prompts. Brim refines and structures your input so any AI model returns sharper, more accurate results — with a browser extension to use it anywhere.',
  },
  {
    name: 'MoFI Housing',
    img: '/works/mofi2.png',
    link: 'https://mreif.com.ng',
    duration: '6 weeks',
    year: '2024',
    category: 'Platform',
    desc: 'A housing-finance platform that turns a dense mortgage and property catalogue into a calm, guided search — fast listings, clear flows, and a frontend tuned to feel trustworthy from the first click.',
  },
  {
    name: 'Renewed Hope Homes',
    img: '/works/rh.png',
    link: 'https://renewedhopehomes.fmhud.gov.ng/properties/search',
    duration: '8 weeks',
    year: '2024',
    category: 'Platform',
    desc: 'The public property-search experience for a national housing initiative. Built to stay quick and accessible under heavy traffic and large inventories, even on modest devices and patchy connections.',
  },
  {
    name: 'Mage',
    img: '/works/mage.png',
    link: 'https://trymage.com',
    duration: 'Ongoing',
    year: '2023',
    category: 'Platform',
    desc: 'An ongoing product partnership shaping the core interface from the ground up — a component system and considered flows that let the team ship new surfaces fast without the UI drifting.',
  },
  {
    name: 'Contribuild',
    img: '/works/contribuild.png',
    link: 'https://contribuild.ng',
    duration: '5 weeks',
    year: '2023',
    category: 'Platform',
    desc: 'A platform that brings structure to construction projects and contributions, pairing heavy data with an interface that stays readable, scannable, and easy to act on.',
  },
  {
    name: 'Metropolitan Club',
    img: '/works/tmc.png',
    link: '',
    duration: '4 weeks',
    year: '2023',
    category: 'Marketing site',
    desc: 'A members\' club presence with a refined, editorial feel — typography-led and image-forward, tuned so every page reads as deliberate and quietly premium.',
  },
  {
    name: 'Stream UI',
    img: '/works/video.png',
    link: 'https://vid-react.netlify.app',
    duration: '3 weeks',
    year: '2023',
    category: 'Web app',
    desc: 'A streaming interface exploration in React — fluid playback controls, a responsive content grid, and motion that makes browsing the catalogue feel effortless.',
  },
  {
    name: 'Multigrid Limited',
    img: '/works/multigrid.png',
    link: '',
    duration: '2021',
    year: '2021',
    category: 'Marketing site',
    desc: 'A marketing site for a firm specializing in architecture, construction, and engineering.',
  },
  {
    name: 'Otayemi Law Firm',
    img: '/works/law.jpg',
    link: '',
    duration: '2021',
    year: '2021',
    category: 'Marketing site',
    desc: 'A polished presence for a team of lawyers with expertise across diverse fields of practice.',
  },
  {
    name: 'Hua Ou Clay Bricks',
    img: '/works/huaoy.png',
    link: '',
    duration: '2020',
    year: '2020',
    category: 'Marketing site',
    desc: 'A site for a construction company that evaluates and sells clay bricks to clients.',
  },
];

/** Stats for the works page hero */
export const heroStats: Stat[] = [
  { num: '12', lbl: 'Projects shipped' },
  { num: '6+', lbl: 'Years building' },
  { num: '1M+', lbl: 'Users reached' },
  { num: '4', lbl: 'Teams partnered' },
];
