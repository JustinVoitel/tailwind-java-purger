module.exports = {
  theme: {
    extend: {
      fontSize: {
        /*  xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)" */
      },
      height: {
        "2/3": "66.666%",
        "1/3": "33.333%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "80%",
        "3/20": "85%",
        "9/10": "90%",
        inherit: "inherit"
      },
      inset: {
        1: "0.5rem",
        2: "1rem",
        4: "1rem",
        8: "2rem"
      },
      spacing: {
        80: "20rem",
        96: "24rem",
        9: "2.25rem",
        11: "2.75rem"
      },
      colors: {
        inherit: {
          default: "inherit"
        },
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)"
        },

        grey: {
          100: "var(--grey-100)",
          200: "var(--grey-200)",
          300: "var(--grey-300)",
          400: "var(--grey-400)",
          500: "var(--grey-500)",
          600: "var(--grey-600)",
          700: "var(--grey-700)",
          800: "var(--grey-800)",
          900: "var(--grey-900)"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "2rem"
      },
      opacity: {
        90: ".9"
      }
    }
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "active"]
    /*    backgroundColor: ["dark", "dark-hover", "dark-group-hover"],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"] */
  },
  plugins: [
    /*  require('tailwindcss-dark-mode')(),
      require('tailwindcss-gradients')(),
      require('tailwindcss-transitions')(), */
  ]
};
