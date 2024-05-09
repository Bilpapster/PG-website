/** @type {import('tailwindcss').Config} */

const usedColorsForBorders = ["secondary-normal", "trietary-light", "gold"];

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: usedColorsForBorders.map((color) => `border-${color}`),
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: {
          normal: "#377F7F",
          light: "#c9dbdb",
        },
        trietary: {
          light: "#BBBBBB",
          dark: "#6C6C6C",
        },
        whiteSmoke: "#F0F0F0",
        vintageWhite: "#E5E5DB",
        blueGray: "#6699CC",
        dustyRose: "#DCAE96",
        lightGray: "#D3D3D3",
        testGreen: "#8fbfbf",
        gold: "#EEB930",
        silver: "#C0C0C0",
        bronze: "#CD7F32",
      },
      fontFamily: {
        calligraphy: ["Fredericka the Great"],
        body: ["Lato"],
        dancingScript: ["Dancing Script"],
        satisfy: ["Satisfy"],
        firaSans: ["Fira Sans"],
        sedgwick: ["Sedgwick Ave Display"],
        kalam: ["Kalam", "cursive"],
        specialElite: ["Special Elite", "cursive"],
        playBall: ["Playball", "cursive"],
        loveYa: ["Love Ya Like A Sister", "cursive"],
        niconne: ["Niconne", "cursive"],
      },

      screens: {
        "620px": "620px",
        "1180px": "1180px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        beat: {
          "25%, 50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slow-once": "spin 3s linear 1",
        wiggle: "wiggle 1s ease-in-out infinite",
        wiggle5: "wiggle 1s ease-in-out 5",
        "heart-beat": "beat 0.8s ease-in-out infinite",
      },
      transitionDuration: {
        2000: "2000ms",
        2500: "2500ms",
      },
    },
  },

  plugins: [],
};
