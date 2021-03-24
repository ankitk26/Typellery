import { createMuiTheme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700],
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

export default theme;
