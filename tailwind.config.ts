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
        yellow: "#FFBB38",
        border: "#252525"
      },
      fontFamily: {
        "Inter" : "Inter",
        "Poppins" : "Poppins"
      }
    },
  },
  plugins: [],
} satisfies Config

