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
      primary: "var(--font-workSans)",
    },
    extend: {
      colors: {
        light: {
          mainbgc: "#fff",
          textcolor: "#000",
        },
        dark: {
          mainbgc: "#000",
          textcolor: "#fff",
        },
      },
    },
  },
  plugins: [],
};
export default config;
