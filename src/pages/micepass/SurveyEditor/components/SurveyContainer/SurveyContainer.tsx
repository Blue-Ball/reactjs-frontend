import React, { ReactNode, forwardRef } from 'react';
import { withStyles, createStyles, WithStyles } from '@e-group/material';
import clsx from 'clsx';

const styles = () =>
  createStyles({
    root: {
      position: 'relative',
      // paddingRight: theme.spacing(8),
    },
  });

export type Ref = HTMLDivElement;

export interface SurveyContainerProps extends WithStyles<typeof styles> {
  children?: ReactNode;
  className?: string;
}

const SurveyContainer = forwardRef<Ref, SurveyContainerProps>((props, ref) => {
  const { classes, className, ...other } = props;
  return <div ref={ref} className={clsx(className, classes.root)} {...other} />;
});

export default withStyles(styles)(SurveyContainer);
