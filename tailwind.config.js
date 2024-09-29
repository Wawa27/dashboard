import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        default: "#030229",
        background: "#FAFAFB",
        cta: "#605BFF",
      },
    },
  },
  plugins: [],
};
