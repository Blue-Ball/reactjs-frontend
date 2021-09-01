import React from "react";
import { makeStyles } from "@material-ui/core";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box } from "@e-group/material";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    maxWidth: "500px",
    width: "100%",
    outline: "unset !important",
    "& img": {
      width: "100%",
      outline: "unset !important",
    },
    "& iframe": {
      width: "100%",
    },
  },
}));

interface Props {
  open: boolean;
  handleClose: VoidFunction;
}

const PhotoModal: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const { open, handleClose } = props;

  return (
    <Modal
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
        <Box className={classes.modalContent} m={1}>
          <img
            src="https://cdn.kenzie.academy/wp-content/uploads/prod/2020/11/02155935/AdobeStock_241083104-1400x934.jpg"
            alt="Event held"
            decoding="async"
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default PhotoModal;
