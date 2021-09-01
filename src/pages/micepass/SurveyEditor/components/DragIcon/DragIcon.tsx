import React, { FC } from "react";

import {
  withStyles,
  createStyles,
  Theme,
  SvgIconProps,
  WithStyles,
} from "@e-group/material";
import clsx from "clsx";

import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      outline: "none",
    },
  });

export type DragIconProps = SvgIconProps & WithStyles<typeof styles>;

const DragIcon: FC<DragIconProps> = ({ className, classes, ...other }) => (
  <DragIndicatorIcon className={clsx(className, classes.root)} {...other} />
);

export default withStyles(styles)(DragIcon);
