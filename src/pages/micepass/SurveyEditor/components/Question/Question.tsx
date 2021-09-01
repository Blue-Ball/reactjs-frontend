import React, { FC } from 'react';

import clsx from 'clsx';
import {
  makeStyles,
  Paper,
  Typography,
  TextField,
  // InputAdornment,
  Grid,
} from '@e-group/material';
import { Question as QuestionType } from 'typings';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

// import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';
import QuestionOptions from '../QuestionOptions';
import QuestionRating from '../QuestionRating';
import QuestionDragHandle from '../QuestionDragHandle';
import QuestionOptionsGrid from '../QuestionOptionsGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1.5, 0),
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.35rem",

    // '& $dragHandle': {
    //   visibility: 'hidden',
    // },

    // '&:hover': {
    //   '& $dragHandle': {
    //     visibility: 'visible',
    //   },
    // },
  },
  main: {
    padding: theme.spacing(0, 3),
    paddingBottom: theme.spacing(3),
  },
  disabled: {
    backgroundColor: theme.palette.action.disabledBackground,
  },
  text: {
    width: '100%',
  },
  textarea: {
    width: '85%',
  },
  dragHandle: {},
  required: {
    color: 'red',
  }
}));

export interface QuestionProps {
  className?: string;
  question: QuestionType;
  disabled?: boolean;
  DragHandleProps?: DraggableProvidedDragHandleProps;
  onClick?: () => void;
}



const Question: FC<QuestionProps> = ({
  className,
  question,
  disabled,
  DragHandleProps,
  ...other
}) => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const renderContent = () => {
    switch (question.questionType) {
      case 'titleBlock':
        return (
          <TextField
            className={classes.textarea}
            label="區塊描述"
            disabled
            value={question.questionDescription}
            multiline
          />
        );
      case 'text':
        return <TextField className={classes.text} label="簡答文字" disabled />;
      case 'textarea':
        return (
          <TextField className={classes.textarea} label="詳答文字" disabled />
        );
      case 'choiceone':
        return <QuestionOptions type="radio" question={question}/>;
      case 'radiogroup':
        return <QuestionOptionsGrid type="radio" question={question}/>;
      case 'choicemulti':
        return <QuestionOptionsGrid type="checkbox" question={question} />;
      case 'select':
        return <QuestionOptions type="select" question={question} />;
      case 'email':
        return <TextField className={classes.text} label="電子郵件" disabled />;
      case 'rating':
        return <QuestionRating question={question} />;
      case 'date':
        return (
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Question with date"
            format="yyyy/MM/dd"
            fullWidth
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        );
      default:
        return undefined;
    }
  };

  return (
    <Paper
      className={clsx(className, classes.root, disabled && classes.disabled)}
      {...other}
    >
      <QuestionDragHandle
        className={classes.dragHandle}
        disabled={disabled}
        DragHandleProps={DragHandleProps}
      />
      <div className={classes.main}>
        <Grid container spacing={1} alignItems="flex-start">
          <Grid item xs={12}>
            <Typography variant="body1">
              {question.questionName}{' '}
              {Boolean(question.isRequired) && (
                <span className={classes.required}>*</span>
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {renderContent()}
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default Question;
