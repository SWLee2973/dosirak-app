module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        content: "#333333",
        primary: "#145044",
        secondary: "#ff613c",
        tertiary: "#ffc01e",
        gray50: "#fefefe",
        gray100: "#f2f2f2",
        gray200: "#eaeaea",
        gray300: "#dfdfdf",
        gray400: "#bfbfbf",
        gray500: "#a3a3a3",
        gray600: "#878787",
        gray700: "#666666",
        gray800: "#4c4c4c",
      },
    },
  },
  plugins: [],
};
