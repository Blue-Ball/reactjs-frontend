import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import Aos from "@e-group/material-module/Aos";
import Paper from "@e-group/material/Paper";
import TextField from "@e-group/material/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  trailEventSection: {
    padding: "3rem",
    borderRadius: "20px",
    "& h3": {
      fontSize: "1.75rem",
      color: theme.egPalette.primary[1],
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3),
    },
  },
  eventForm: {
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
  footer: {
    borderTop: "1px solid #dee2e6!important",
    paddingTop: theme.spacing(3),
    "& p:nth-child(2)": {
      marginBottom: theme.spacing(2),
    },
    "& button": {
      padding: "12px 20px",
      fontWeight: "600",
      color: theme.egPalette.text[1],
      marginTop: "26px",
      background: "#e5e5e5",
      fontSize: "1rem",

      "&:hover": {
        background: "#e5e5e5",
      },
    },
  },
}));

const TrailEventSection: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const [faceChecked, setFaceChecked] = useState(false);
  const [survayChecked, setSurvayChecked] = useState(false);

  return (
    <Grid item sm={12} md={8}>
      <Aos variant="slideInRight" config={{ duration: 500 }}>
        <Paper variant="outlined" className={classes.trailEventSection}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h3" fontWeight={700} align="center">
                TRAIL EVENT FREE
              </Typography>
            </Grid>
            <Box py={2} width="100%">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} className={classes.eventForm}>
                  <FormControl>
                    <InputLabel htmlFor="eventDay">Event Days</InputLabel>
                    <TextField fullWidth variant="outlined" id="eventDay" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.eventForm}>
                  <FormControl>
                    <InputLabel htmlFor="peoplePerDay">
                      People per day
                    </InputLabel>
                    <TextField fullWidth variant="outlined" id="peoplePerDay" />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Grid item xs={12}>
              <Typography variant="body1">Additional Function</Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={faceChecked}
                      onChange={() => setFaceChecked(!faceChecked)}
                      name="remember"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
              </Box>
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={survayChecked}
                      onChange={() => setSurvayChecked(!survayChecked)}
                      name="remember"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.footer}>
              <Typography variant="body1">Basic Fee : MP 19</Typography>
              <Typography variant="body1">
                Face Recognition fee : MP 15
              </Typography>
              <Typography variant="body1">
                Person fee per day : MP19+MP15 = MP34
              </Typography>
              <Button fullWidth>Event Fee: MP 4350</Button>
            </Grid>
          </Grid>
        </Paper>
      </Aos>
    </Grid>
  );
};

export default TrailEventSection;
