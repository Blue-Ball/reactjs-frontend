import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Paper from "@e-group/material/Paper";
import DropDown from "@e-group/material/DropDown";

import InfoMark from "static/img/infoMark.png";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(3),
    "& h3": {
      fontSize: "1.75rem",
      lineHeight: "1.2",
    },
  },
  pointItem: {
    padding: theme.spacing(3, 5),
    borderTop: "1px solid #DBDDE3",
  },
  label: {
    height: "16px",
    "& span": {
      fontSize: "0.875rem",
      color: "#646464",
    },
  },
  dropdown: {
    boxShadow: "none",
    "& .MuiButtonGroup-root": {
      height: "unset",
    },
    "& .MuiButtonGroup-grouped": {
      border: "0",
      borderBottom: "1px solid #DBDDE3",
      borderRadius: "0",
      height: "32px",
      fontSize: "1rem",
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
  paper: {
    border: "1px solid #C0C3CE",
    boxShadow: "0 3px 16px rgba(10, 75, 109, 0.08)",
    borderRadius: "8px 8px 0 0",
  },
  contents: {
    borderTop: "1px solid #DBDDE3",
    "& h5": {
      fontSize: "1.25rem",
      lineHeight: "1.2",
    },
  },
  shadow: {
    boxShadow: "0 3px 16px rgba(10, 75, 109, 0.08)",
  },
  description: {
    display: "flex",
    "& p": {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(2),
      color: "#05C7F2",
      "& img": {
        marginRight: theme.spacing(1),
        width: "18px",
      },
    },
  },
}));

const InvoiceInformation: VFC = () => {
  const classes = useStyles();

  const invoiceType = ["Member vehicle", "Other Type"];

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Box className={classes.header}>
          <Typography variant="h3" fontWeight={400}>
            Invoice Information
          </Typography>
        </Box>
        <Box className={classes.contents} p={3}>
          <Box mb={3}>
            <Typography variant="h5" fontWeight={400}>
              Contact information
            </Typography>
          </Box>
          <Paper className={classes.shadow}>
            <Box p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box mr={2} className={classes.label}>
                      <span>Invoice Type *</span>
                    </Box>
                    <DropDown
                      options={invoiceType}
                      select
                      className={classes.dropdown}
                    >
                      Member vehicle
                    </DropDown>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.description}>
                  <Typography variant="body1">
                    <img src={InfoMark} alt="Info" />
                    Invoice type description
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Paper>
    </Grid>
  );
};

export default InvoiceInformation;
