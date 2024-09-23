import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: 'var(--secondary)',
        blue: '#1e3a8a',
        primary: "#5d615f",
        secondary: "#a3bba6",
        tertiary: "#5eb066"
      },
    },
  },
  plugins: [],
};
export default config;
