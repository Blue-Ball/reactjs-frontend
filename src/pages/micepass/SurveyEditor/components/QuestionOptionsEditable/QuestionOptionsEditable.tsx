import React, { FC, ChangeEvent, MouseEvent } from 'react';

import { makeStyles } from '@e-group/material';
import clsx from 'clsx';

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import Button from '@e-group/material/Button';
import Typography from '@e-group/material/Typography';
import { Question, Option, QuestionOption as QuestionOptionType } from 'typings';
import QuestionOptionDecorated from '../QuestionOptionDecorated';
import QuestionOptionEditable from '../QuestionOptionEditable';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  optionCreator: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(3),
  },
  optionCreatorGapFix: {
    marginTop: theme.spacing(1),
  },
  addOption: {
    marginRight: theme.spacing(),
    cursor: 'pointer',
    color: '#05C7F2',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  textBtn: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    '& button span': {
      fontWeight: 'bold'
    }
  },
  optionDragging: {
    background: '#fff',
    boxShadow: theme.shadows[2],
  },
}));
export interface QuestionOptionsEditableProps {
  type: QuestionOptionType;
  question: Question;
  onChange?: (
    e: ChangeEvent<HTMLInputElement>,
    question: Question,
    option: Option
  ) => void;
  onCreate?: (
    e: MouseEvent<HTMLSpanElement>,
    question: Question,
    index: number
  ) => void;
  onCreateOther?: (
    e: MouseEvent<HTMLButtonElement>,
    question: Question
  ) => void;
  onDelete?: (
    e: MouseEvent<HTMLButtonElement>,
    question: Question,
    deletedOption: Option
  ) => void;
  onDragEnd?: (
    result: DropResult,
    question: Question,
    nextOptions: Option[]
  ) => void;
}

const QuestionOptionsEditable: FC<QuestionOptionsEditableProps> = ({
  type = 'radio',
  question,
  onChange,
  onCreate,
  onCreateOther,
  onDelete,
  onDragEnd,
}) => {
  const classes = useStyles();
  const [controledOptions, setControledOptions] = React.useState<Option[]>(
    question.optionList || []
  );
  const otherIndex = controledOptions.findIndex((option) => option.isOther);
  const hasOther = otherIndex !== -1;
  const other = hasOther ? controledOptions[otherIndex] : undefined;

  React.useEffect(() => {
    if (type === 'select') {
      setControledOptions((options) =>
        options.filter((option) => !option.isOther)
      );
    }
  }, [type]);

  React.useEffect(() => {
    if (question.optionList) {
      setControledOptions(question.optionList.filter(Boolean));
    }
  }, [question.optionList]);

  const handleCreate = (e: MouseEvent<HTMLSpanElement>) => {
    if (onCreate) {
      onCreate(
        e,
        question,
        hasOther ? controledOptions.length : controledOptions.length + 1
      );
    }
  };

  const handleCreateOther = (e: MouseEvent<HTMLButtonElement>) => {
    if (onCreateOther) {
      onCreateOther(e, question);
    }
  };

  const handleChange = (option: Option) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (onChange) {
      onChange(e, question, option);
    }
  };

  const [selectedValue, setSelectedValue] = React.useState<string>('');
  const handleRadioChange = () => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedValue(e.target.value);
  };

  

  const handleDelete = (index: number) => (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    setControledOptions((options) =>
      options.filter((_el, curIndex) => index !== curIndex)
    );
    const deletedOption = controledOptions[index]

    if (!deletedOption) return
    
    if (onDelete) {
      onDelete(e, question, deletedOption);
    }
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const sourceOption = controledOptions[source.index];

    if (!sourceOption) return

    const nextOptions = [...controledOptions];
    nextOptions.splice(source.index, 1);
    nextOptions.splice(destination.index, 0, sourceOption);
    setControledOptions(nextOptions);
    if (onDragEnd) {
      onDragEnd(result, question, nextOptions);
    }
  };

  const renderOptionCreator = () => {
    // if (type === 'select' || hasOther) {
    //   return (
    //     <div
    //       className={clsx(classes.optionCreator, classes.optionCreatorGapFix)}
    //     >
    //       <QuestionOptionDecorated
    //         type={type}
    //         index={controledOptions.length}
    //       />
    //       <Typography
    //         onClick={handleCreate}
    //         color="primary"
    //         className={classes.addOption}
    //       >
    //         新增選項
    //       </Typography>
    //     </div>
    //   );
    // }
    if (type === 'radio' || hasOther) {
      return (
        <div className={clsx(classes.optionCreator)}>
          <QuestionOptionDecorated type={type} />
          <Typography
            onClick={handleCreate}
            color="primary"
            className={classes.addOption}
          >
            New option
          </Typography>
          <Typography>or</Typography>
          <Button
            variant="text"
            className={classes.textBtn}
            onClick={handleCreateOther}
          >
            ADD Other
          </Button>
        </div>
      );
    }
    return (
      <></>
    );
    
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={classes.root}>
        <Droppable droppableId={question.questionId}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {controledOptions
                .filter((option) => !option.isOther)
                .map((option, index) => (
                  <Draggable
                    draggableId={option.optionId}
                    key={option.optionId}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <QuestionOptionEditable
                        index={index}
                        className={clsx({
                          [classes.optionDragging]: snapshot.isDragging,
                        })}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        DragHandleProps={provided.dragHandleProps}
                        type={type}
                        MuiTextFieldProps={{
                          fullWidth: true,
                          autoFocus: hasOther
                            ? index === controledOptions.length - 2
                            : index === controledOptions.length - 1,
                          defaultValue: option.optionName,
                          onChange: handleChange(option),
                        }}
                        MuiRadioProps={{
                          onChange: handleRadioChange(),
                        }}
                        selectedValue = {selectedValue}
                        MuiIconButtonProps={{
                          onClick: handleDelete(index),
                        }}
                        hideCloseIconButton={controledOptions.length === 1}
                      />
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {hasOther && (
          <QuestionOptionEditable
            index={otherIndex}
            type={type}
            MuiTextFieldProps={{
              fullWidth: true,
              disabled: true,
              value: other?.optionName,
            }}
            MuiIconButtonProps={{
              onClick: handleDelete(otherIndex),
            }}
            hideCloseIconButton={controledOptions.length === 1}
            hideDragIcon
          />
        )}
        {renderOptionCreator()}
      </div>
    </DragDropContext>
  );
};

export default QuestionOptionsEditable;
