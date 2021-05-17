module.exports = {
  theme: {
    extend: {
      ringWidth: {
        3: "3px",
      },
      zIndex: {
        "-1": "-1",
      },
      height: {
        inherit: "inherit",
      },
      inset: {
        1: "0.5rem",
        2: "1rem",
        4: "1rem",
        8: "2rem",
        "-12": "-3rem",
      },
      spacing: {
        80: "20rem",
        96: "24rem",
        9: "2.25rem",
        11: "2.75rem",
      },
      colors: {
        inherit: {
          default: "inherit",
        },
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
        },

        grey: {
          50: "var(--grey-50)",
          100: "var(--grey-100)",
          200: "var(--grey-200)",
          300: "var(--grey-300)",
          400: "var(--grey-400)",
          500: "var(--grey-500)",
          600: "var(--grey-600)",
          700: "var(--grey-700)",
          800: "var(--grey-800)",
        },
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "active"],
    /*    backgroundColor: ["dark", "dark-hover", "dark-group-hover"],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"] */
  },
  plugins: [
    /*  require('tailwindcss-dark-mode')(),
      require('tailwindcss-gradients')(),
      require('tailwindcss-transitions')(), */
  ],
};
