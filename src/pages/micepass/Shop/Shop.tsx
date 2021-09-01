import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import Paper from "@e-group/material/Paper";

import paymentIcon from "static/img/paymentIcon.png";
import BuyMicePoint from "./components/BuyMicePoint";
import PaymentInformation from "./components/PaymentInformation";
import InvoiceInformation from "./components/InvoiceInformation";

const useStyles = makeStyles({
  wrapper: {
    padding: "100px 0px 50px",
  },
  containerFluid: {
    maxWidth: "unset",
  },
  paper: {
    border: "1px solid #C0C3CE",
    boxShadow: "0 3px 16px rgba(10, 75, 109, 0.08)",
    borderRadius: "8px 8px 0 0",
  },
  subTotalSection: {
    background: "#F1FFFA",
    borderRadius: "8px",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  },
  styledBtn: {
    "& .MuiButtonBase-root": {
      background: "#05C7F2",
      color: "white",
      paddingTop: "10px",
      paddingBottom: "10px",
      boxShadow: "0px 3px 24px rgba(0, 0, 0, 0.16)",
      "& img": {
        width: "24px",
      },
    },
  },
});

const Shop: VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Container className={classes.containerFluid}>
        <Grid container spacing={4}>
          <BuyMicePoint />
          <PaymentInformation />
          <InvoiceInformation />
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Box
                className={classes.subTotalSection}
                m={3}
                p={3}
                display="flex"
                justifyContent="space-between"
              >
                <Typography variant="body1">Subtotal</Typography>
                <Typography variant="body1">TWD 8,000</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="right">
              <Button
                rounded
                variant="contained"
                startIcon={<img src={paymentIcon} alt="Payment" />}
                className={classes.styledBtn}
              >
                Go To Payment
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Shop;
