import React, { FC, ChangeEvent } from 'react';

import { makeStyles, Typography, Grid } from '@e-group/material';
import { Question } from 'typings';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import { FormControlLabel, Radio, Checkbox } from '@material-ui/core';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0),
    "& label": {
      margin: theme.spacing(0)
    },
    [theme.breakpoints.down("lg")]: {
      "& label span": {
        padding: theme.spacing(0.3)
      },
    },
    [theme.breakpoints.down("md")]: {
      "& label span": {
        padding: theme.spacing(0.2)
      },
    },
    [theme.breakpoints.down("xs")]: {
      "& label span": {
        padding: theme.spacing(0)
      },
    },
    
  },
  label: {
    marginBottom: theme.spacing(3),
  },
  edgeLabel: {
    marginBottom: 4,
    [theme.breakpoints.down("xs")]: {
        display: "none"
    },
  },
  radioIcon: {
    color: '#0474AD',
  },
}));
export interface QuestionRatingEditableProps {
  question: Question;
}

const QuestionRating: FC<QuestionRatingEditableProps> = ({ question }) => {
  const classes = useStyles();
  const start = question?.questionRatingStartValue ?? 1;
  const end = question?.questionRatingEndValue ?? 5;
  // const [selectedValue, setSelectedValue] = React.useState<any>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedValue, setSelectedValue] = React.useState<any>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log("dddddddddddd",event.target.checked);
    setSelectedValue(event.target.value);}

  return (
    <div className={classes.root}>
      <Grid container alignItems="flex-end" justifyContent="center">
        <Grid item>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.edgeLabel}
          >
            {question.questionRatingStartName}
          </Typography>
        </Grid>
        {/* {end > start &&
          Array.from(Array(end - start + 1).keys()).map((num) => {
            const sNum = num + start;
            return (
              <Grid key={sNum} item>
                <Typography
                  align="center"
                  variant="body2"
                  className={classes.label}
                >
                  {sNum}
                </Typography>
                <Radio />
              </Grid>
            );
          })} */}
          {end > start &&
          Array.from(Array(end - start + 1).keys()).map((num) => {
            const sNum = num + start;
            return (
              <FormControlLabel
                value="top"
                key={sNum}
                control={
                <Checkbox checked={(selectedValue >= sNum)}
                          onChange={handleChange}
                          color="primary"
                          className={classes.radioIcon}
                          icon={<RadioButtonUncheckedIcon/>}
                          checkedIcon={<RadioButtonChecked/>}
                          name = "Rating"
                          value = {sNum} />}
                label={sNum}
                labelPlacement="top"
              />
            );
          })}
        <Grid item>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.edgeLabel}
          >
            {question.questionRatingEndName}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionRating;
