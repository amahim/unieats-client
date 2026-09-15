/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        secondary: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        "gradient-tertiary":
          "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.25)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.35)",
        strong: "0 20px 60px rgba(0, 0, 0, 0.45)",
        "glow-orange": "0 0 30px rgba(249, 115, 22, 0.25)",
        "glow-amber": "0 0 30px rgba(245, 158, 11, 0.25)",
        "glow-emerald": "0 0 30px rgba(16, 185, 129, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f97316",
          secondary: "#f59e0b",
          accent: "#10b981",
          neutral: "#1e293b",
          "base-100": "#0b0f19",
          "base-200": "#111827",
          "base-300": "#1e293b",
          "base-content": "#f8fafc",
        },
      },
    ],
  },
};
