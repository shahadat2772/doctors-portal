module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },

      "light",
    ],
  },
  plugins: [require("daisyui")],
};

// daisyui: {
//   styled: true,
//   themes: true,
//   base: true,
//   utils: true,
//   logs: true,
//   rtl: false,
//   prefix: "",
//   darkTheme: "dark",
// },
