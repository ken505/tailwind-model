module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-at-t":
          "radial-gradient(50% 80% at 50% -10%, var(--tw-gradient-stops))",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

// Customizing Background Images
// https://tailwindcss.com/docs/background-image#background-images
// 1:左右幅 2:上下幅 3:左右位置 4:上下位置

// extend: {
//   backgroundImage: () => ({
//     "gradient-radial-to-tr":
//       "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
//     "gradient-radial-to-tl":
//       "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
//     "gradient-radial-to-br":
//       "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
//     "gradient-radial-to-bl":
//       "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
//     "gradient-radial-at-t":
//       "radial-gradient(50% 80% at 50% -10%, var(--tw-gradient-stops))",
//   }),
// },

// backgroundImage: {
//   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
// }
