import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightgray-1": "#3D3D3D",
        "lightgray-2": "#171717",
        yellow: "#FFBB38"
      }
    },
  },
  plugins: [],
} satisfies Config

