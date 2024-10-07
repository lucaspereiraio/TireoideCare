import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      primary: "var(--font-poppins)",
    },
    extend: {
      colors: {
        neuters: {
          gray: {
            10: "#F4F7FB",
            20: "#EAEEF5",
            30: "#D7DEEA",
            40: "#B7BECD",
            50: "#9DA5B4",
            60: "#8690A2",
            70: "#646E82",
            80: "#4B5362",
            90: "#383D48",
            100: "#21242C",
          },
          white: "#ffffff",
          black: "#000000"
        },

        primary: {
          10: "#05A7661A",
          20: "#05A76633",
          30: "#05A7664D",
          40: "#05A76666",
          50: "#05A76680",
          60: "#05A76699",
          70: "#05A766B2",
          80: "#05A766CC",
          90: "#05A766E5",
          100: "#05A766",
        },
        secondary: {
          10: "#FF88941A",
          20: "#FF889433",
          30: "#FF88944D",
          40: "#FF889466",
          50: "#FF889480",
          60: "#FF889499",
          70: "#FF8894B2",
          80: "#FF8894CC",
          90: "#FF8894E5",
          100: "#FF8894",
        },
        system: {
          warning: {
            10: "#FFEB3C1A",
            20: "#FFEB3C33",
            30: "#FFEB3C4D",
            40: "#FFEB3C66",
            50: "#FFEB3C80",
            60: "#FFEB3C99",
            70: "#FFEB3CB2",
            80: "#FFEB3CCC",
            90: "#FFEB3CE5",
            100: "#FFEB3C",
          },
          danger: {
            10: "#E0215A1A",
            20: "#E0215A33",
            30: "#E0215A4D",
            40: "#E0215A66",
            50: "#E0215A80",
            60: "#E0215A99",
            70: "#E0215AB2",
            80: "#E0215ACC",
            90: "#E0215AE5",
            100: "#E0215A",

          },
          info: {
            10: "#1664F41A",
            20: "#1664F433",
            30: "#1664F44D",
            40: "#1664F466",
            50: "#1664F480",
            60: "#1664F499",
            70: "#1664F4B2",
            80: "#1664F4CC",
            90: "#1664F4E5",
            100: "#1664F4",

          },
          success: {
            10: "#3FBC311A",
            20: "#3FBC3133",
            30: "#3FBC314D",
            40: "#3FBC3166",
            50: "#3FBC3180",
            60: "#3FBC3199",
            70: "#3FBC31B2",
            80: "#3FBC31CC",
            90: "#3FBC31E5",
            100: "#3FBC31",

          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
