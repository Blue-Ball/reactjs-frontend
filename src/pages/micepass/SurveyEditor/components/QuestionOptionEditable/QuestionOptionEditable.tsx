import React, { forwardRef, useEffect, useState } from "react";

import isLength from "validator/lib/isLength";
import clsx from "clsx";
import useInputActions from "@e-group/hooks/useInputActions";

import {
  makeStyles,
  IconButton,
  IconButtonProps,
  TextFieldProps,
  Icomoon,
  Divider,
  FormControlLabel,
} from "@e-group/material";
// import CloseIcon from '@material-ui/icons/Close';
import { QuestionOption as QuestionOptionType } from "typings";
import { DraggableProvidedDragHandleProps } from "react-beautiful-dnd";
import { Radio, RadioProps } from "@material-ui/core";
import QuestionTextField from "../QuestionTextField";
// import QuestionOptionDecorated from '../QuestionOptionDecorated';
import DragIcon from "../DragIcon";

const useStyles = makeStyles((theme) => ({
  option: {
    display: "flex",
    alignItems: "center",

    "& $dragIcon": {
      visibility: "hidden",
    },

    "&:hover": {
      "& $dragIcon": {
        visibility: "visible",
      },
    },
  },
  hideDragIcon: {
    "&:hover": {
      "& $dragIcon": {
        visibility: "hidden",
      },
    },
  },
  hide: {
    visibility: "hidden",
  },
  dragIcon: {
    paddingLeft: 4,
  },
  // inputWidth: {
  //   width: '50%',
  // },
  btnDelete: {
    color: "red",
  },
  halfWidth: {
    width: "58%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  radioIcon: {
    color: '#0474AD',
  },
}));
export interface QuestionOptionEditableProps {
  className?: string;
  type: QuestionOptionType;
  index: number;
  MuiIconButtonProps?: IconButtonProps;
  hideCloseIconButton?: boolean;
  hideDragIcon?: boolean;
  DragHandleProps?: DraggableProvidedDragHandleProps;
  MuiTextFieldProps?: TextFieldProps;
  MuiRadioProps?: RadioProps;
  selectedValue?: string;
}

const MAX_OPTION = 50;

const QuestionOptionEditable = forwardRef<
  HTMLDivElement,
  QuestionOptionEditableProps
>((props, ref) => {
  const {
    className,
    // type = 'radio',
    index,
    hideDragIcon,
    hideCloseIconButton,
    DragHandleProps,
    MuiTextFieldProps = {},
    MuiIconButtonProps = {},
    MuiRadioProps  = {},
    selectedValue,
    ...other
  } = props;
  const classes = useStyles();
  const { onClick, autoFocus, ...otherMuiTextFieldProps } =
    MuiTextFieldProps;
  const [value, setValue] = useState<string>();
  const { inputEl, select } = useInputActions();
  const isError = !isLength(value || "", {
    min: 0,
    max: MAX_OPTION,
  });

  useEffect(() => {
    if (autoFocus) {
      select();
    }
  }, [autoFocus, select]);

  return (
    <div className={classes.halfWidth}>
      <div
        className={clsx(className, classes.option, {
          [classes.hideDragIcon]: hideDragIcon,
        })}
        ref={ref}
        {...other}
      >
        <div {...DragHandleProps}>
          <DragIcon className={classes.dragIcon} color="action" />
        </div>
        <FormControlLabel
          control={
            <Radio
              color="primary"
              className={classes.radioIcon}
              onChange={(e) => {
                const { onChange } = MuiRadioProps;
                if (onChange) {
                  onChange(e, true);
                }
              }}
              value = {index}
              checked = {selectedValue === String(index)}
            />
          }
          label={value}
        />
        <QuestionTextField
          // className={classes.inputWidth}
          inputRef={inputEl}
          onChange={(e) => {
            const { onChange } = MuiTextFieldProps;
            setValue(e.target.value);
            if (
              onChange &&
              isLength(e.target.value, {
                min: 0,
                max: MAX_OPTION,
              })
            ) {
              onChange(e);
            }
          }}
          onClick={(e) => {
            select();
            if (onClick) {
              onClick(e);
            }
          }}
          value={value}
          error={isError}
          helperText={isError ? `選項請勿超過 ${MAX_OPTION} 個字元` : undefined}
          autoFocus={autoFocus}
          {...otherMuiTextFieldProps}
        />

        <IconButton
          {...MuiIconButtonProps}
          className={clsx(MuiIconButtonProps.className, {
            [classes.hide]: hideCloseIconButton,
          })}
        >
          <Icomoon
            fontSize="large"
            className={classes.btnDelete}
            type="delete_1"
          />
        </IconButton>
      </div>
      <Divider />
    </div>
  );
});

export default QuestionOptionEditable;
