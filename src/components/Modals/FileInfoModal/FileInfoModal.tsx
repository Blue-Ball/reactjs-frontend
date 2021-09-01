import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { Box } from "@e-group/material";
import Typography from "@e-group/material/Typography";
import IconButton from "@e-group/material/IconButton";

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
  fileInfo: {
    color: "#858796",
  },
}));

const FileInfoModal: React.FC<Props> = (props) => {
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
          <Box p={2} className={classes.fileInfo}>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries,
            </Typography>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default FileInfoModal;
