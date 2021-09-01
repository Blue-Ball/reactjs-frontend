import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import Paper from "@e-group/material/Paper";
import Link from "@material-ui/core/Link";
import Divider from "@e-group/material-lab/Divider";

import checkIcon from "static/img/checkIcon.png";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(3),
    borderBottom: "1px solid #DBDDE3",
    "& h3": {
      fontSize: "1.75rem",
      lineHeight: "1.2",
    },
  },
  paper: {
    border: "1px solid #C0C3CE",
    boxShadow: "0 3px 16px rgba(10, 75, 109, 0.08)",
    borderRadius: "8px 8px 0 0",
  },
  totalSection: {
    background: "#F1FFFA",
    borderRadius: "8px",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  },
  contents: {
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
    padding: theme.spacing(3, 2, 2),
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
  divider: {
    paddingTop: "0 !important",
    "& div": {
      margin: "0",
    },
  },
  totalPrice: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0 !important",
      "& h6": {
        textAlign: "left !important",
      },
    },
  },
  note: {
    "& p:first-child": {
      fontWeight: "500",
    },
    "& p:nth-child(2)": {
      fontSize: "14px",
    },
    "& a": {
      fontSize: "14px",
      color: "#4F4FF3",
    },
  },
  confirmBtn: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
}));

const ExpenseItem: VFC = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Box className={classes.header}>
          <Typography variant="h3" fontWeight={400}>
            Expense item
          </Typography>
        </Box>
        <Box p={3}>
          <Paper className={classes.contents}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" fontWeight={500}>
                      Total payment amount
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.totalPrice}>
                    <Typography align="right" variant="h6" fontWeight={500}>
                      TWD 2,850
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.divider}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} className={classes.note}>
                    <Typography variant="body1" fontWeight={500}>
                      Currently, only credit card payment methods are available.
                    </Typography>
                    <Typography variant="body1">
                      After completing the transaction, you agree to our &nbsp;
                      <Link href="/" variant="body1">
                        terms
                      </Link>
                      &nbsp; of &nbsp;
                      <Link href="/" variant="body1">
                        service
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.confirmBtn}
                  >
                    <Button
                      rounded
                      variant="contained"
                      startIcon={<img src={checkIcon} alt="Check" />}
                      className={classes.styledBtn}
                    >
                      Go To Payment
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ExpenseItem;
