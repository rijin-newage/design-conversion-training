import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c6ac4",
        secondary: "#163235",
      },
      backgroundImage: {
        banner:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url('/static/images/seeshore.png')",
      },
    },
  },
  plugins: [],
};
export default config;
