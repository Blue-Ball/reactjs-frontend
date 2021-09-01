import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { Box, Button } from "@e-group/material";
import Typography from "@e-group/material/Typography";
import IconButton from "@e-group/material/IconButton";
import Textarea from "@e-group/material/Textarea";

import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    maxWidth: "300px",
  },
  modalHeader: {
    "& p": {
      fontWeight: "600",
      color: "#5a5c69 !important",
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
  radioGroup: {
    "& .MuiFormControl-root": {
      margin: "0",
    },
    "& .MuiFormGroup-root": {
      flexDirection: "row",
      "& .MuiFormControlLabel-root:last-child": {
        marginRight: "0",
      },
    },
    "& .MuiFormControlLabel-root:last-child": {
      marginRight: "0",
    },
  },
}));

const LeaveCommentModal: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { open, handleClose } = props;

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
            <Typography variant="body1">File Name</Typography>
            <IconButton onClick={handleClose}>
              <HighlightOffIcon />
            </IconButton>
          </Box>
          <Box p={2} className={classes.textarea}>
            <Textarea rowsMin={5} placeholder="Leave a comment..." />
          </Box>
          <Box px={2} className={classes.radioGroup}>
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="Approve"
            />
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="Request Changes"
            />
          </Box>
          <Box p={2}>
            <Button
              rounded
              variant="contained"
              className={classes.blueContainedBtn}
              onClick={handleClose}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default LeaveCommentModal;
