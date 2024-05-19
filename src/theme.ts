import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#E0E0E0",
    },
    secondary: {
      main: "#ce93d8",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
