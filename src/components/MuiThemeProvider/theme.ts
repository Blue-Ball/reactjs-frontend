import { createTheme } from "@material-ui/core/styles";
import {
  egPalette,
  egShadows,
  egShape,
  palette,
  typography,
} from "@e-group/material/stylesheet";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    egPalette: typeof egPalette;
    egShadows: typeof egShadows;
    egShape: typeof egShape;
  }
  interface ThemeOptions {
    egPalette: typeof egPalette;
    egShadows: typeof egShadows;
    egShape: typeof egShape;
  }
}

const theme = createTheme({
  palette: {
    ...palette,
    background: {
      default: "#F5F6FA",
    },
  },
  typography,
  egPalette,
  egShadows,
  egShape,
});

// eslint-disable-next-line no-console
if (process.env.NODE_ENV !== "production") console.log(theme);

export default theme;
