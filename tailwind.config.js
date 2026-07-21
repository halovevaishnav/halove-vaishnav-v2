/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
colors: {
  paper: "#09090B",
  fog: "#111114",
  mist: "#17171B",
  line: "#2A2A31",
  ink: "#F4F4F6",
  graphite: "#A6A6B0",
  smoke: "#7C7C86",
  panel: "#141417",
  titanium: "#1C1C21",
  titaniumDeep: "#131316",
  silver: "#202026",
  lensA: "#3E63FF",
  lensB: "#8B5CF6",
  lensC: "#5B8CFF",
  skyGlass: "#4C6FFF",
  violetGlass: "#9B6BFF",
  amber: "#6D6AFF",
},
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
      },
      boxShadow: {
        glass: "0 1px 1px rgba(0,0,0,0.02), 0 8px 30px rgba(0,0,0,0.06)",
        card: "0 20px 60px -15px rgba(0,0,0,0.15)",
        soft: "0 2px 20px rgba(0,0,0,0.04)",
        glow: "0 0 60px -10px rgba(150,170,255,0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "float 9s ease-in-out infinite",
        floatSlower: "floatDrift 14s ease-in-out infinite",
        drift: "drift 20s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        gradientShift: "gradientShift 12s ease infinite",
        particle: "particle 16s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatDrift: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "33%": { transform: "translate(18px, -22px)" },
          "66%": { transform: "translate(-14px, 12px)" },
        },
        drift: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        particle: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(30px, -40px) scale(1.15)", opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
