import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom styles for your themes here if necessary
    },
  },
  daisyui: {
    themes: [
      // Define your custom darkMode theme
      {
        darkMode: {
          "primary": "#04a658",
          "primary-content": "oklch(96% 0.018 272.314)",
          "secondary": "oklch(26% 0.065 152.934)",
          "secondary-content": "oklch(25% 0.09 281.288)",
          "accent": "oklch(55% 0 0)",
          "accent-content": "oklch(96% 0.018 272.314)",
          "neutral": "oklch(14% 0.005 285.823)",
          "neutral-content": "oklch(96% 0.018 272.314)",
          "info": "oklch(62% 0.214 259.815)",
          "info-content": "oklch(28% 0.091 267.935)",
          "success": "oklch(69% 0.17 162.48)",
          "success-content": "oklch(37% 0.077 168.94)",
          "warning": "oklch(76% 0.188 70.08)",
          "warning-content": "oklch(28% 0.066 53.813)",
          "error": "oklch(58% 0.253 17.585)",
          "error-content": "oklch(27% 0.105 12.094)",
          "base-100": "oklch(25.33% 0.016 252.42)",
          "base-200": "oklch(23.26% 0.014 253.1)",
          "base-300": "oklch(21.15% 0.012 254.09)",
          "base-content": "oklch(96% 0.018 272.314)",
          // Border, radius, etc. can be adjusted as well
          "radius-selector": "0.25rem",
          "radius-field": "0.25rem",
          "radius-box": "0.25rem",
          "size-selector": "0.25rem",
          "size-field": "0.25rem",
          "border": "1px",
          "depth": "1",
          "noise": "0",
        },
      },
      // Define your custom lightMode theme
      {
        lightMode: {
          "primary": "#04a658",
          "primary-content": "oklch(100% 0 0)",
          "secondary": "oklch(26% 0.065 152.934)",
          "secondary-content": "oklch(100% 0 0)",
          "accent": "oklch(55% 0 0)",
          "accent-content": "oklch(100% 0 0)",
          "neutral": "oklch(14% 0.005 285.823)",
          "neutral-content": "oklch(100% 0 0)",
          "info": "oklch(62% 0.214 259.815)",
          "info-content": "oklch(100% 0 0)",
          "success": "oklch(69% 0.17 162.48)",
          "success-content": "oklch(100% 0 0)",
          "warning": "oklch(76% 0.188 70.08)",
          "warning-content": "oklch(100% 0 0)",
          "error": "oklch(58% 0.253 17.585)",
          "error-content": "oklch(100% 0 0)",
          "base-100": "oklch(98% 0.001 106.423)",
          "base-200": "oklch(97% 0.001 106.424)",
          "base-300": "oklch(92% 0.003 48.717)",
          "base-content": "oklch(21% 0.006 56.043)",
          // Border, radius, etc. can be adjusted as well
          "radius-selector": "0.25rem",
          "radius-field": "0.25rem",
          "radius-box": "0.25rem",
          "size-selector": "0.25rem",
          "size-field": "0.25rem",
          "border": "1px",
          "depth": "1",
          "noise": "0",
        },
      },
    ],
  },
  plugins: [daisyui],
}
