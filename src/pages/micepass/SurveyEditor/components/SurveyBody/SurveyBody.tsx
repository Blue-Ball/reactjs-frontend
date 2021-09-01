import React, { ReactNode, forwardRef } from 'react';
import {
  Paper,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
} from '@e-group/material';
import clsx from 'clsx';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 3),
    },
  });

export type Ref = HTMLDivElement;

export interface SurveyBodyProps extends WithStyles<typeof styles> {
  children?: ReactNode;
  className?: string;
}

const SurveyBody = forwardRef<Ref, SurveyBodyProps>((props, ref) => {
  const { classes, className, ...other } = props;
  return (
    <Paper ref={ref} className={clsx(className, classes.root)} {...other} />
  );
});

export default withStyles(styles)(SurveyBody);
