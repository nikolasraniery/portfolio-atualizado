/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "60px",
      },
      colors: {
        base: {
          gray: {
            100: "#0D0E11",
            200: "#16181D",
            300: "#292C34",
            400: "#878EA1",
            500: "#C0C4CE",
            600: "#C0C4CE",
          },
        },
        main: {
          red: "#E3646E",
          purple: "#BB72E9",
          blue: "#3996DB",
          green: "#82BC4F",
          yellow: "#EABD5F",
        },
      },
      fontFamily: {
        asap: ["Asap", "sans-serif"],
        inconsolata: ["Inconsolata", "sans-serif"],
        mavenpro: ["Maven Pro", "sans-serif"],
      },
      fontSize: {
        "title-lg": "56px",
        "title-md": "24px",
        "title-sm": "16px",
        subtitle: "20px",
        "text-md": "16px",
        "text-sm": "14px",
      },
      fontWeight: {
        bold: "700",
        regular: "400",
      },
      lineHeight: {
        tight: "140%",
        normal: "120%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
