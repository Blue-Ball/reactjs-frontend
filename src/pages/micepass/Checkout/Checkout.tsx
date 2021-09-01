import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@e-group/material/Container";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";

import FormSection from "./components/FormSection";
import OrderContent from "./components/OrderContent";
import ExpenseItem from "./components/ExpenseItem";

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

const Checkout: VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Container className={classes.containerFluid}>
        <Grid container spacing={4}>
          <FormSection />
          <OrderContent />
          <ExpenseItem />
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;
