import React, { FC, ChangeEvent } from 'react';

// import { makeStyles, Radio, Checkbox } from '@e-group/material';
import { makeStyles, Radio } from '@e-group/material';

import { QuestionOption as QuestionOptionType, Question as QuestionType } from 'typings';
// import QuestionOption from '../QuestionOption';
import QuestionOptionGrid from '../QuestionOptionGrid';

const useStyles = makeStyles((theme) => ({
  option: {
    padding: theme.spacing(1.5, 0),
    width: '50%',
    float: 'left',
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  root: {
    width: '50%',
    float: 'left',
    marginRight:"0",
    padding: theme.spacing(1.5, 0),
    "& .MuiRadio-root":{
      color: '#0474AD'
    },
    "& .MuiCheckbox-root":{
      color: '#0474AD'
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export interface QuestionOptionsGridProps {
  type: QuestionOptionType;
  question: QuestionType;
}

const QuestionOptionsGrid: FC<QuestionOptionsGridProps> = ({
  type = 'radio',
  question,
}) => {
  const classes = useStyles();
  const options = question.optionList || [];

  const [selectedValue, setSelectedValue] = React.useState('index');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);}
  return (
    <>
      {options.map((option, index) => (
        (type === "radio")?(
          <Radio
          key={option.optionId}
          checked={selectedValue === option.optionName}
          onChange={handleChange}
          color="primary"
          className={classes.root}
          label = {option.optionName}
          name = "Radio1"
          value = {option.optionName}
        />
        ):(
          <QuestionOptionGrid
          key={option.optionId}
          className={classes.option}
          index={index}
          type={type}
          label = {option.optionName}
        />
        )
      ))}
    </>
  );
};
export default QuestionOptionsGrid;
