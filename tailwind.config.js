/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      }
    },
    screens: {
      "sm": "480px",
      // => @media (min-width: 480px) { ... }

      "md": "768px",
      // => @media (min-width: 768px) { ... }

      "lg": "992px",
      // => @media (min-width: 992px) { ... }

      "xl": "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: []
};
