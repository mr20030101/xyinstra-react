/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
      screens: {
        ssm: "640px",
        sm: "768px",
        xmd: "980px",
        md: "1190px",
        lg: "1280px",
        xl: "1440px",
        "2xl": "1520px",
      },
      padding: {
        DEFAULT: "20px",
        ssm: "20px",
        sm: "60px",
        xmd: "20px",
        md: "60px",
        lg: "100px",
        xl: "160px",
        "2xl": "40px",
      },
    },

    extend: {
      scale: ['print'],
      /* ----------------------------------------------
       * FONTS
       * ---------------------------------------------- */
      fontFamily: {
        primary: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },

      /* ----------------------------------------------
       * COLORS
       * ---------------------------------------------- */
      colors: {
        text: "#191E30",
        title: "#000",
        primary: "#891a10",
        "color-1": "#FFEB97",
        "color-2": "#1D296D",
        "color-3": "#1A297C",
        "color-4": "#28326F",
        "color-5": "#3875B1",
        "color-6": "#E7EBEF",
        "color-7": "#000000",
        "color-8": "#FFFFFF",
        "color-9": "#4F60C1",
        "color-10": "#7B62DE",
        "success": "#007a9d",
        "warning": "#ffc106",
        "danger": "#891a10",
      },

      /* ----------------------------------------------
       * FONT SIZES
       * ---------------------------------------------- */
      fontSize: {
        body: ["18px", { lineHeight: "160%", fontWeight: "400" }],
        xl: ["24px"],
        lg: ["20px"],
        base: ["18px"],
        sm: ["16px"],
        xs: ["14px"],
        xxs: ["12px"],
        "3xs": ["10px"],
        "4xs": ["8px", { lineHeight: "170%", fontWeight: "400" }],

        outlined: [
          "18px",
          {
            lineHeight: "140%",
            fontWeight: "700",
            letterSpacing: "2.16px",
            textTransform: "uppercase",
          },
        ],

        body_2xl: ["14px"],
        body_sm: ["12px"],

        "heading-1": [
          "72px",
          { lineHeight: "110%", fontWeight: "700", letterSpacing: "-1.44px" },
        ],
        "heading-2": [
          "56px",
          { lineHeight: "110%", fontWeight: "700", letterSpacing: "-1.12px" },
        ],
        "heading-3": [
          "48px",
          { lineHeight: "110%", fontWeight: "700", letterSpacing: "-0.96px" },
        ],
        "heading-4": [
          "36px",
          { lineHeight: "110%", fontWeight: "700", letterSpacing: "-0.72px" },
        ],
        "heading-5": [
          "28px",
          { lineHeight: "110%", fontWeight: "700", letterSpacing: "-0.56px" },
        ],
        "heading-6": [
          "24px",
          { lineHeight: "110%", fontWeight: "700", letterSpacing: "-0.48px" },
        ],
        "heading-7": ["20px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-8": ["18px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-9": ["16px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-10": ["14px", { lineHeight: "120%", fontWeight: "700" }],
      },

      /* ----------------------------------------------
       * SCREENS (CUSTOM BREAKPOINTS)
       * ---------------------------------------------- */
      screens: {
        desktop_down: { max: "1920px" },
        "2xl_down": { max: "1520px" },
        "xl_down": { max: "1400px" },
        "lg_down": { max: "1190px" },
        "md_down": { max: "980px" },
        "sm_down": { max: "767px" },
        "xs_down": { max: "420px" },
      },

      /* ----------------------------------------------
       * SIZES & SPACING
       * ---------------------------------------------- */
      maxWidth: {
        "8xl": "1440px",
        "9xl": "1760px",
      },

      spacing: {
        s140: "8.75rem",
        s120: "7.5rem",
        s100: "6.25rem",
        s90: "5.625rem",
        s80: "5rem",
        s70: "4.375rem",
        s60: "3.75rem",
        s56: "3.5rem",
        s50: "3.125rem",
        s48: "3rem",
        s42: "2.625rem",
        s40: "2.5rem",
        s36: "2.25rem",
        s32: "2rem",
        s30: "1.875rem",
        s28: "1.75rem",
        s24: "1.5rem",
        s20: "1.25rem",
        s18: "1.125rem",
        s16: "1rem",
        s15: "0.938rem",
        s12: "0.75rem",
        s10: "0.625rem",
        s8: "0.5rem",
        s6: "0.375rem",
      },

      /* ---------------------------------------------- */
      zIndex: {
        999: "999",
      },
    },
  },

  plugins: [],
};
