import React, { FC } from 'react';

import { makeStyles, Typography, Radio, Checkbox } from '@e-group/material';
// import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { QuestionOption as QuestionOptionType } from 'typings';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(3),
    marginRight: theme.spacing(3),
    "& .MuiRadio-root":{
      color: '#0474AD'
    },
    "& .MuiCheckbox-root":{
      color: '#0474AD'
    }
  },
}));

export interface QuestionOptionDecoratedProps {
  type: QuestionOptionType;
  index?: number;
  label?: string;
}

const QuestionOptionDecorated: FC<QuestionOptionDecoratedProps> = ({
  type = 'radio',
  index = 0,
  label = '',
}) => {
  const classes = useStyles();
  if (type === 'radio') {
    return (
      <Radio
        color="primay"
        className={classes.root}
        label = {label}
        name = "radio1"
        checked = {false}
      />
    );
  }
  if (type === 'checkbox') {
    return <Checkbox color="primay" className={classes.root} label = {label} />;
  }
  if (type === 'select') {
    return <Typography >{index + 1}.?</Typography>;
  }
  return null;
};

export default QuestionOptionDecorated;
