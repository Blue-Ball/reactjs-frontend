import React, { ReactNode, forwardRef } from "react";
import {
  Paper,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
} from "@e-group/material";
import clsx from "clsx";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0.2, 0),
    },
  });

export type Ref = HTMLDivElement;

export interface SurveyHeaderProps extends WithStyles<typeof styles> {
  children?: ReactNode;
  className?: string;
}

const SurveyHeader = forwardRef<Ref, SurveyHeaderProps>((props, ref) => {
  const { classes, className, ...other } = props;
  return (
    <Paper ref={ref} className={clsx(className, classes.root)} {...other} />
  );
});

export default withStyles(styles)(SurveyHeader);
