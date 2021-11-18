import { createTheme, responsiveFontSizes } from "@mui/material/styles"

const darkMuiTheme = createTheme({
  palette: {
    primary: {
      main: "#16131d",
    },
    secondary: {
      main: "#ff4365",
    },
    text: {
      primary: "#fff",
    },
    background: {
      default: "#1f1b29",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto", "sans-serif"].join(","),
  },
})

export const dark = responsiveFontSizes(darkMuiTheme)
