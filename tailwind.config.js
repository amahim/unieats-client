/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7ff",
          100: "#ebf0ff",
          200: "#d6e0ff",
          300: "#b8c9ff",
          400: "#94a8ff",
          500: "#667eea",
          600: "#5568d3",
          700: "#4451b8",
          800: "#333b94",
          900: "#252b6b",
        },
        secondary: {
          50: "#fef5f9",
          100: "#fde9f3",
          200: "#fbd4e7",
          300: "#f9bed9",
          400: "#f5a1c9",
          500: "#f093fb",
          600: "#d97ae0",
          700: "#c263c5",
          800: "#9e4d9d",
          900: "#783a76",
        },
        accent: {
          50: "#e6f9ff",
          100: "#ccf3ff",
          200: "#99e7ff",
          300: "#66dbff",
          400: "#4facfe",
          500: "#3b9aeb",
          600: "#2a87d6",
          700: "#1c6eb8",
          800: "#11548f",
          900: "#083b66",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "gradient-tertiary":
          "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "gradient-rainbow":
          "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        strong: "0 20px 60px rgba(0, 0, 0, 0.15)",
        "glow-purple": "0 0 40px rgba(102, 126, 234, 0.5)",
        "glow-pink": "0 0 40px rgba(240, 147, 251, 0.5)",
        "glow-blue": "0 0 40px rgba(79, 172, 254, 0.5)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
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
          primary: "#667eea",
          secondary: "#f093fb",
          accent: "#4facfe",
          neutral: "#2a2e37",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
