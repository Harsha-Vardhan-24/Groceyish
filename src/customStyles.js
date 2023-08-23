import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "#def9ec",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#3bb77e",
          },
        },
      },
    },
  },
});



export default theme;
