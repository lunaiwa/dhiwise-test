module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f6f6f6",
          200: "#eaeaea",
          400: "#b6b6b6",
          600: "#6c6c6c",
          800: "#3a3a3a",
          "800_01": "#3c3c3c",
          "400_01": "#b1b1b1",
        },
        deep_orange: { A100: "#f5ab67" },
        blue: { A700: "#2364ff" },
        red: { 400: "#e05c5c", "400_01": "#e05d5d" },
        green: { 600: "#27a953", "600_63": "#27a95363" },
        black: { 900: "#000000", "900_14": "#00000014", "900_68": "#00000068" },
        white: { A700: "#ffffff" },
        pink: { 400: "#c63973" },
      },
      boxShadow: {
        bs: "10px 20px  50px 0px #27a95363",
        bs1: "0px 40px  200px 0px #00000014",
      },
      fontFamily: {
        altehaasgrotesk: "Alte Haas Grotesk",
        sourcesanspro: "Source Sans Pro",
        ofbarcode: "3 of 9 Barcode",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
