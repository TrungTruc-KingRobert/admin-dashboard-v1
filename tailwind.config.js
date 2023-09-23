/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      },
      animation: {
        showMenu: "showMenu 0.4s ease forwards"
      },
      keyframes: {
        showMenu: {
          to: { left: 0 }
        }
      }
    },
    screens: {
      "xl": { "max": "1200px" },
      // => @media (max-width: 1200px) { ... }

      "lg": { "max": "992px" },
      // => @media (max-width: 992px) { ... }

      "md": { "max": "768px" },
      // => @media (max-width: 768px) { ... }

      "sm": { "max": "480px" }
      // => @media (max-width: 480px) { ... }
    }
  },
  plugins: []
};
