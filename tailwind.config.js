/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        50: "#f5faff",
        100: "#eaf2ff",
        200: "#cbe0ff",
        300: "#a9ceff",
        400: "#6daaff",
        500: "#0b2f76",
        600: "#384e79",
        700: "#2b3e5c",
        800: "#1e2a44",
        900: "#111e2b"
      },
      gray: {
        50: "#f9fafb",
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
        400: "#9fa6b2",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#252f3f",
        900: "#161e2e"
      }
    },
    extend: {},
  },
  plugins: [],
}