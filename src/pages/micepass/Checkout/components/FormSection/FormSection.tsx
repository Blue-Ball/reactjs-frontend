import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Paper from "@e-group/material/Paper";
import TextField from "@e-group/material/TextField";

const useStyles = makeStyles({
  paper: {
    border: "1px solid #C0C3CE",
    boxShadow: "0 3px 16px rgba(10, 75, 109, 0.08)",
    borderRadius: "8px 8px 0 0",
  },
  textField: {
    "& .MuiInput-underline:before": {
      borderColor: "#DBDDE3",
    },
  },
});

const FormSection: VFC = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Box p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Order number :"
                placeholder=""
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                defaultValue="MP202102239RC5IUZ6"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Order date:"
                placeholder=""
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                defaultValue="Feb 23, 2021 8:36:02 AM"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact person"
                placeholder=""
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                defaultValue="egroupAI egroupAI"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact phone number"
                placeholder=""
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                defaultValue="+ 090 0912 345"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Payment status"
                placeholder=""
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                defaultValue="Unpaid"
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default FormSection;
