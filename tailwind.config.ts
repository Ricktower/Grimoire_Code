import { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Emigre Eight", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        home: "url('/home-bg.png')",
        paper: "url('/paper-bg.png')",
        shownBattlename: "url('/white-battlename.svg')",
        hiddenBattlename: "url('/white-battlename-hidden.svg')"
      },
      width: {
        phone: "calc(100vh * 0.56221889055)"
      },
      maxWidth: {
        phone: "calc(100vh * 0.56221889055)"
      },
      screens: {
        notphone: "calc(100vh * 0.56221889055)"
      }
    }
  },
  plugins: []
} satisfies Config
