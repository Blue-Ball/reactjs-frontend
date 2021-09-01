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
import TextField from "@e-group/material/TextField";

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
  colorTextFieldWrapper: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    "& p": {
      color: "#858796",
    },
  },
  colorTextField: {
    "& .MuiOutlinedInput-root": {
      marginLeft: theme.spacing(1),
    },
    "& .MuiInputBase-input": {
      padding: "5px",
      fontSize: "1rem",
      minHeight: "34px",
      paddingLeft: "30px",
    },
  },
  colorField: {
    position: "absolute",
    left: "60px",
    opacity: "0",
    width: "184px",
    "& .MuiInputBase-input": {
      padding: "0",
      height: "44px",
    },
  },
  colorMak: {
    width: "15px",
    height: "15px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "70px",
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
  multiSelectForm: {
    "& .MuiChip-root": {
      background: "#DEF6DD",
      border: "1px solid #8ED58C",
      color: "#96B995",
    },
  },
}));

const EditTagModal: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { open, handleClose } = props;
  const [color, setColor] = useState("");

  const [multiValue, setMultiValue] =
    useState<ValueType<OptionType, boolean>>();
  const [, setSelectedValues] = useState<string[]>();
  const handleMultiChange = (value: ValueType<OptionType, boolean>) => {
    setMultiValue(value);
    if (!!value && value instanceof Array) {
      setSelectedValues(value.map((el) => el.value));
    }
  };

  const handleClickColorField = () => {
    document.getElementById("colorTextField")?.click();
  };

  const handleChangeColor = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setColor(e.target.value);
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
            <Typography variant="body1">
              Edit Tag &quot;My Tag 1&quot;
            </Typography>
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
          <Box className={classes.colorTextFieldWrapper} px={2}>
            <Typography>Color</Typography>
            <TextField
              variant="outlined"
              type="color"
              onChange={(e) => handleChangeColor(e)}
              id="colorTextField"
              className={classes.colorField}
            />
            <TextField
              variant="outlined"
              inputProps={{ readOnly: true }}
              className={classes.colorTextField}
              onClick={handleClickColorField}
              value={color}
            />
            <Box
              className={classes.colorMak}
              style={{ backgroundColor: `${color}` }}
            />
          </Box>
          <Box p={2}>
            <Button
              rounded
              variant="contained"
              className={classes.blueContainedBtn}
              onClick={handleClose}
            >
              Save
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

export default EditTagModal;
