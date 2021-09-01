// import React, { ChangeEvent, ReactNode } from 'react';
import React, { ReactNode } from 'react';

import clsx from 'clsx';
// import { makeStyles, Typography, TypographyProps, Radio, Checkbox, FormControlLabel } from '@e-group/material';
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
export interface QuestionOptionGridProps {
  className?: string;
  type: QuestionOptionType;
  index: number;
  label: string;
  MuiTypographyProps?: TypographyProps;
  children?: ReactNode;
}

const QuestionOptionGrid = React.forwardRef<Ref, QuestionOptionGridProps>(
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

    // const [selectedValue, setSelectedValue] = React.useState('index');

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //   setSelectedValue(event.target.value);
    // };
    return (
      <div className={clsx(className, classes.root)} ref={ref} {...other}>
        <QuestionOptionDecorated type={type} index={index} label={label}/>
        <Typography variant="body1" {...MuiTypographyProps}>
          {children}
        </Typography>
      </div>
    );
  }
);

QuestionOptionGrid.defaultProps = {
  type: 'radio',
};

export default QuestionOptionGrid;
