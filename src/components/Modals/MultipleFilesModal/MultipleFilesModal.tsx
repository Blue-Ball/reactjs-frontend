import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import ReactSelect, { OptionType } from "@e-group/material-module/ReactSelect";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { Box, Button } from "@e-group/material";
import Typography from "@e-group/material/Typography";
import IconButton from "@e-group/material/IconButton";
import { ValueType } from "react-select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Textarea from "@e-group/material/Textarea";

interface Props {
  open: boolean;
  handleClose: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1),
  },
  modalContent: {
    width: "100%",
    maxWidth: "500px",
  },
  modalHeader: {
    "& p": {
      fontWeight: "600",
      color: "#5a5c69 !important",
    },
  },
  multiSelect: {
    border: "1px solid #CFCFCF",
    borderRadius: "6px",
  },
  formControl: {
    "&>.MuiFormControl-root": {
      paddingTop: "27px",
      width: "100%",
    },
    "& label": {
      marginBottom: theme.spacing(1),
      fontSize: "1rem",
      display: "block",
      color: "#858796",
      top: "-20px",
    },
  },
  blueContainedBtn: {
    margin: "2px",
    "& .MuiButtonBase-root": {
      borderColor: "#4e73df",
      backgroundColor: "#4e73df",
      color: "white",
      fontWeight: "normal",
    },
  },
  cancelBtn: {
    margin: "2px",
    "& .MuiButtonBase-root": {
      borderColor: "#d4daed",
      backgroundColor: "#d4daed",
      color: "#3a3b45",
      fontWeight: "normal",
    },
  },
  textarea: {
    "& textarea": {
      border: "1px solid #d1d3e2",
      "&:hover": {
        borderColor: "#bac8f3",
        boxShadow: "0 0 0 0.2rem rgb(78 115 223 / 25%)",
      },
      "&:focus": {
        borderColor: "#bac8f3",
        boxShadow: "0 0 0 0.2rem rgb(78 115 223 / 25%)",
      },
    },
  },
  multiSelectForm: {
    "& .MuiChip-root": {
      background: "#DEF6DD",
      border: "1px solid #8ED58C",
      color: "#96B995",
    },
  },
}));

const MultipleFilesModal: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { open, handleClose } = props;

  const [multiValue, setMultiValue] =
    useState<ValueType<OptionType, boolean>>();
  const [, setSelectedValues] = useState<string[]>();
  const handleMultiChange = (value: ValueType<OptionType, boolean>) => {
    setMultiValue(value);
    if (!!value && value instanceof Array) {
      setSelectedValues(value.map((el) => el.value));
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.modalContent}>
          <Box
            pl={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={classes.modalHeader}
          >
            <Typography variant="body1">Tags on multiples files</Typography>
            <IconButton onClick={handleClose}>
              <HighlightOffIcon />
            </IconButton>
          </Box>
          <Box
            p={2}
            className={clsx(classes.formControl, classes.multiSelectForm)}
          >
            <FormControl>
              <InputLabel htmlFor="tagName">Tag Name</InputLabel>
              <ReactSelect
                MuiTextFieldProps={{
                  fullWidth: true,
                  InputProps: {
                    disableUnderline: true,
                  },
                }}
                value={multiValue}
                isMulti
                options={[
                  {
                    label: "Tag1",
                    value: "tag1",
                  },
                  {
                    label: "Tag2",
                    value: "tag2",
                  },
                  {
                    label: "Tag3",
                    value: "tag3",
                  },
                  {
                    label: "Tag4",
                    value: "tag4",
                  },
                  {
                    label: "Tag5",
                    value: "tag5",
                  },
                ]}
                onChange={handleMultiChange}
                className={classes.multiSelect}
                id="tagName"
              />
            </FormControl>
          </Box>

          <Box px={2} className={classes.textarea}>
            <Textarea rowsMin={5} placeholder="Selected Files Name" />
          </Box>

          <Box p={2}>
            <Button
              rounded
              variant="contained"
              className={classes.blueContainedBtn}
              onClick={handleClose}
            >
              Sbumit
            </Button>
            <Button
              rounded
              variant="contained"
              className={classes.cancelBtn}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default MultipleFilesModal;
