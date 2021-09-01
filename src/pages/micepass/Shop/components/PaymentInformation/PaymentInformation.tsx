import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Paper from "@e-group/material/Paper";
import TextField from "@e-group/material/TextField";

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
  dropdown: {
    boxShadow: "none",
    "& .MuiButtonGroup-root": {
      height: "unset",
    },
    "& .MuiButtonGroup-grouped": {
      border: "0",
      borderBottom: "1px solid #DBDDE3",
      borderRadius: "0",
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
  textField: {
    "& .MuiInput-underline:before": {
      borderColor: "#DBDDE3",
    },
  },
}));

const PaymentInformation: VFC = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Box className={classes.header}>
          <Typography variant="h3" fontWeight={400}>
            Payment Information
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
                  <TextField
                    fullWidth
                    label="Name *"
                    placeholder=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Cell phone *"
                    placeholder=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Local call (optional)"
                    placeholder=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Contact Email *"
                    placeholder=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Paper>
    </Grid>
  );
};

export default PaymentInformation;
