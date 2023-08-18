import type { Config } from 'tailwindcss'
const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: "var(--clr-eazi-green)"
        },
        dark: {
          DEFAULT: "var(--clr-text-dark)",
          heading: "var(--clr-text-heading)"
        }
      },
      fontFamily: {
        sans: ["var(--font-base)", ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
export default config
