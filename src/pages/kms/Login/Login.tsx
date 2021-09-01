import React from "react";
import { makeStyles } from "@material-ui/core";

import Divider from "@e-group/material-lab/Divider";
import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import Paper from "@e-group/material/Paper";
import Link from "@material-ui/core/Link";

import StyledTextField from "components/StyledTextField";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "#4867bc",
    minHeight: "100vh",
    color: "#858796",
  },
  formBody: {
    padding: theme.spacing(6),
    maxWdith: "535px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle: {
    "& h1": {
      fontSize: "1.5rem",
      lineHeight: "1.2",
    },
  },
  loginBtn: {
    padding: "0.75rem 1rem",
    fontSize: "0.8rem",
    backgroundColor: "#4e73df !important",
    borderColor: "#4e73df",
    color: "white",
  },
  linkWrapper: {
    "& p": {
      color: "#858796",
      fontSize: "13px",
    },
    "& a": {
      color: "#4e73df",
      fontSize: "13px",
    },
  },
  contentWrapper: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Login: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} display="flex" alignItems="center">
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={6}>
            <Box px={2} py={6} className={classes.contentWrapper}>
              <Paper className={classes.formBody}>
                <Box mb={3} className={classes.cardTitle}>
                  <Typography variant="h1" align="center" fontWeight={400}>
                    NPO KMS
                  </Typography>
                </Box>
                <Box mb={2}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Name"
                    rounded
                  />
                </Box>
                <Box mb={2}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Email"
                    rounded
                    type="email"
                  />
                </Box>
                <Box mb={2}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Password"
                    rounded
                    type="password"
                  />
                </Box>
                <Box>
                  <Button
                    fullWidth
                    rounded
                    muiButtonClassName={classes.loginBtn}
                    variant="contained"
                  >
                    Login
                  </Button>
                </Box>
                <Box mt={2} className={classes.linkWrapper}>
                  <Typography variant="body1" align="center">
                    When you register, you agree to
                  </Typography>
                  <Box textAlign="center">
                    <Link href="/">NPO Km&apos;s terms of service</Link>
                  </Box>
                </Box>
                <Divider className={classes.divider} />
                <Box className={classes.linkWrapper}>
                  <Typography variant="body1" align="center">
                    Have already an account ?
                  </Typography>
                  <Box textAlign="center">
                    <Link href="/">Login here</Link>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
