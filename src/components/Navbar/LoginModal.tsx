import React, { FunctionComponent, useState } from "react";
import { makeStyles } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@e-group/material/Button";
import Box from "@e-group/material/Box";
import Paper from "@e-group/material/Paper";
import Typography from "@e-group/material/Typography";
import IconButton from "@e-group/material/IconButton";
import TextField from "@e-group/material/TextField";
import Grid from "@e-group/material/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

interface Props {
  open: boolean;
  handleClose: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalContent: {
    width: "100%",
    maxWidth: "500px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  modalHeader: {
    padding: theme.spacing(2),
    borderBottom: "1px solid #dee2e6",
  },
  modalHeaderTitle: {
    width: "100%",
    fontSize: "1.5rem",
    lineHeight: "1.5",
  },
  modalBody: {},
  loginForm: {
    "&>.MuiFormControl-root": {
      paddingTop: "27px",
      width: "100%",
    },
    "& label": {
      marginBottom: theme.spacing(1),
      fontSize: "1rem",
      display: "block",
      color: "#212529",
      top: "-20px",
    },
  },
  forgotPassword: {
    display: "flex",
    "& a": {
      fontSize: "1rem",
      marginLeft: "auto",
    },
  },
  modalFooter: {
    borderTop: "1px solid #dee2e6",
    "& button": {
      background: "#5fd3f3 !important",
    },
  },
}));

const LoginModal: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const { open, handleClose } = props;

  const [checked, setChecked] = useState(false);

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
        <Paper elevation={0} className={classes.modalContent}>
          <Box
            className={classes.modalHeader}
            display="flex"
            alignItems="center"
          >
            <Typography
              variant="h4"
              fontWeight={500}
              color="inherit"
              align="center"
              className={classes.modalHeaderTitle}
            >
              Login to Your Account
            </Typography>
            <IconButton color="inherit" onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className={classes.modalBody} p={2}>
            <Grid container>
              <Grid item xs={12}>
                <Box p={2} pb={0} className={classes.loginForm}>
                  <FormControl>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <TextField
                      fullWidth
                      placeholder="Username"
                      variant="outlined"
                      id="username"
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box p={2} pb={0} className={classes.loginForm}>
                  <FormControl>
                    <InputLabel htmlFor="username">Password</InputLabel>
                    <TextField
                      fullWidth
                      placeholder="Password"
                      variant="outlined"
                      id="password"
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box p={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        name="remember"
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} className={classes.forgotPassword}>
                <Box
                  p={2}
                  alignItems="center"
                  textAlign="right"
                  display="flex"
                  width="100%"
                >
                  <Link href="/" color="inherit">
                    Forgot Password?
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.modalFooter} p={2} textAlign="right">
            <Button color="white">Submit</Button>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default LoginModal;
