import React, { FC } from "react";

import Theme, { ThemeProps } from "@e-group/material/Theme";
import theme from "./theme";

/**
 * Customized Mui Theme Provider.
 */
const MuiThemeProvider: FC<Omit<ThemeProps, "theme">> = (props) => (
  <Theme theme={theme} {...props} />
);

export default MuiThemeProvider;
