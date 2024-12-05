import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'sm': {max: '640px'},
      // => @media (min-width: 640px) { ... }
  
      'md': {max: '768px'},
      // => @media (min-width: 768px) { ... }
  
      'lg': {max: '1024px'},
      // => @media (min-width: 1024px) { ... }
  
      'xl': {max: '1280px'},
      // => @media (min-width: 1280px) { ... }
  
      '2xl': {max: '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
} satisfies Config;
