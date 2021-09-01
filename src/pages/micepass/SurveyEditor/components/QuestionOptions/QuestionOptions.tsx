import React, { FC } from "react";

import { makeStyles } from "@e-group/material";

import {
  QuestionOption as QuestionOptionType,
  Question as QuestionType,
} from "typings";
import QuestionOption from "../QuestionOption";

const useStyles = makeStyles((theme) => ({
  option: {
    padding: theme.spacing(1.5, 0),
  },
}));

export interface QuestionOptionsProps {
  type: QuestionOptionType;
  question: QuestionType;
}

const QuestionOptions: FC<QuestionOptionsProps> = ({
  type = "radio",
  question,
}) => {
  const classes = useStyles();
  const options = question.optionList || [];
  return (
    <>
      {options.map((option, index) => (
        
        <QuestionOption
          key={option.optionId}
          className={classes.option}
          index={index}
          type={type}
          label = {option.optionName}
        >
          {option.optionName}
        </QuestionOption>
      ))}
    </>
  );
};

export default QuestionOptions;
