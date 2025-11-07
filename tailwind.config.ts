import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      serif: ["var(--font-cormorant)"],
    },
    fontSize: {
      'heading-one': '2.05rem', // formerly '33'
      'heading-two': '2rem',    // formerly '32'
      'heading-three': '1.75rem', // formerly '28'
      'xl-2': '1.5rem',         // formerly '24'
      'xl': '1.25rem',          // formerly '20'
      'base': '1rem',           // formerly '16'
      'sm': '0.75rem',          // formerly '8'
      'xs': '0.5rem',           // formerly '8'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mella: {
          'primary': '#FFCB74',
          'primary-content': '#111111',
          'secondary': '#2F2F2F',
          'secondary-content': '#F6F6F6',
          'accent': '#FFCB74',
          'accent-content': '#111111',
          'base-100': '#F6F6F6',
          'base-200': '#2F2F2F',
          'base-content': '#111111',
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
