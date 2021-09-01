import React, { FC } from 'react';

import clsx from 'clsx';
import { 
  makeStyles, 
  Theme,
  Icomoon 
} from '@e-group/material';

import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
// import { Question} from 'typings';
// import DragIcon from '../DragIcon';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    // cursor: (props: QuestionDragHandleProps) =>
    //   !props.disabled ? 'move' : undefined,
    
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 1.5),
    flexDirection: 'row-reverse',
  },
  
}));

export interface QuestionDragHandleProps {
  className?: string;
  disabled?: boolean;
  DragHandleProps?: DraggableProvidedDragHandleProps;
}

const QuestionDragHandle: FC<QuestionDragHandleProps> = (props) => {
  const classes = useStyles(props);
  const { className, disabled, DragHandleProps, ...other } = props;
  // console.log("disabled = ", disabled);
  if (disabled) {
    return (
      <div
        className={clsx(className, classes.root)}
        {...DragHandleProps}
        {...other}
      />
    );
  }

  return (
    <div
      className={clsx(className, classes.root)}
      {...DragHandleProps}
      {...other}
    >
      <Icomoon type="move" />
    </div>
  );
};

export default QuestionDragHandle;
