/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          senai: {
            primary:   "#164194",
            secondary: "#1f8ece",
          },
          text: {
            DEFAULT: "#333333",
          },
        },
        fontFamily: {
          neo: ["'Neo Sans Pro'", "sans-serif"],
        },
      },
    },
    plugins: []
  };
  