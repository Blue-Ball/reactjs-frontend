import React, { ReactNode } from 'react';

import clsx from 'clsx';
import { makeStyles, Typography, TypographyProps } from '@e-group/material';
import { QuestionOption as QuestionOptionType } from 'typings';
import QuestionOptionDecorated from '../QuestionOptionDecorated';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export type Ref = HTMLDivElement;
export interface QuestionOptionProps {
  className?: string;
  type: QuestionOptionType;
  index: number;
  MuiTypographyProps?: TypographyProps;
  children?: ReactNode;
  label: string;
}

const QuestionOption = React.forwardRef<Ref, QuestionOptionProps>(
  (props, ref) => {
    const {
      className,
      type,
      index,
      label,
      MuiTypographyProps,
      children,
      ...other
    } = props;
    const classes = useStyles();

    return (
      <div className={clsx(className, classes.root)} ref={ref} {...other}>
        <QuestionOptionDecorated type={type} index={index} label={label}/>
        <Typography variant="body1" {...MuiTypographyProps}>
          { children}
        </Typography>
      </div>
    );
  }
);

QuestionOption.defaultProps = {
  type: 'radio',
};

export default QuestionOption;
