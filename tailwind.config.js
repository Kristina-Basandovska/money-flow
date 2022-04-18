module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      borderRadius: {
        mainRadious: "35px",
      },
      boxShadow: {
        mainShadow: "-1px 8px 25px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        main: "#7165df",
        layout: "var(--layout)",
        icon: "var(--icon)",
        secondaryLayout: "var(--secondaryLayout)",
        secondaryTextColor:'var(--secondaryTextColor)',
        textColor:'var(--textColor)',
        border:'var(--border)',
        itemLayout:'var(--itemLayout)'
      },
    },
  },
  plugins: [],
};
