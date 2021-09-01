import React from "react";
import clsx from "clsx";
import Container from "@e-group/material/Container";
import Paper from "@e-group/material/Paper";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { makeStyles } from "@material-ui/core";
import ActivityLayout from "components/ActivityLayout";
import { Button, Icomoon, Box, TextField, Checkbox } from "@e-group/material";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(4),
  },
  subHeader: {
    borderBottom: 0,
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: 0,
  },
  map: {
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  paper: {
    boxShadow: theme.egShadows[1],
    padding: theme.spacing(3),
    color: "#898989",
  },
  iconInfo: {
    fontSize: 30,
  },
  iconBox: {
    marginRight: theme.spacing(1),
    display: "inline-flex",
    boxShadow: theme.egShadows[1],
    padding: 3,
    borderRadius: 100,
    backgroundColor: "#05C7F2",
  },
  paperInfo: {
    display: "flex",
    alignItems: "center",
    color: "#6b6b6b",
  },
  iconSend: {
    marginLeft: theme.spacing(1),
  },
  iconWhs: {
    fontSize: 12,
  },
}));

const ActivityApply = () => {
  const classes = useStyles();

  return (
    <ActivityLayout>
      <Container>
        <Paper className={classes.main}>
          <Box mb={3}>
            <Paper className={classes.paper}>
              <Box mb={1}>
                <TextField fullWidth label="Activity name" />
              </Box>
              <Box mb={1}>
                <TextField fullWidth label="Activity time" />
              </Box>
            </Paper>
          </Box>
          <Box mb={3}>
            <Paper className={classes.paper}>
              <TextField fullWidth label="Organizer" />
            </Paper>
          </Box>
          <Box mb={3}>
            <Paper className={clsx(classes.paper, classes.paperInfo)}>
              <Box className={classes.iconBox}>
                <Icomoon
                  type="people-setting_2"
                  color="white"
                  className={classes.iconInfo}
                />
              </Box>
              <Box pl={1}>
                <Typography variant="h6" fontWeight="normal">
                  Fill in basic information
                </Typography>
              </Box>
            </Paper>
          </Box>
          <Box mb={3}>
            <Paper className={classes.paper}>
              <TextField fullWidth label="name *" />
            </Paper>
          </Box>
          <Box mb={3}>
            <Paper className={classes.paper}>
              <TextField
                fullWidth
                label="Personal mobile phone *"
                helperText="Report basis, please do not share"
              />
            </Paper>
          </Box>
          <Box mb={3}>
            <Paper className={classes.paper}>
              <TextField
                fullWidth
                label="Email *"
                helperText="Non-official business is better, it is recommended to use the usual mailbox, registration confirmation and pre-departure notice"
              />
            </Paper>
          </Box>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={10}>
              <Box>
                <Checkbox label="Agree to use face recongnition to enter the venue" />{" "}
                <Icomoon
                  type="people-setting_2"
                  color="text"
                  className={classes.iconWhs}
                />
              </Box>
              <Box>
                <Checkbox label="I have read adn agree to the MICEPass terms of service and all terms of the privacy policy" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={2} style={{ flexBasis: "auto" }}>
              <Button color="primary" variant="contained" rounded>
                Send Out{" "}
                <Icomoon
                  type="people-setting_2"
                  color="white"
                  className={classes.iconSend}
                />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ActivityLayout>
  );
};

export default ActivityApply;
