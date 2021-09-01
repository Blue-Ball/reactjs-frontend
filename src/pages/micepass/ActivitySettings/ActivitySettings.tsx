import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import Paper from "@e-group/material/Paper";

import ServiceItem from "./components/ServiceItem";
import TeachIcon from "../../../static/img/teachIcon.png";

const useStyles = makeStyles((theme) => ({
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
        width: "20px",
      },
    },
  },
  pageHeader: {
    flexWrap: "wrap",
    "& h3": {
      fontSize: "1.75rem",
    },
  },
  headerSection: {
    padding: theme.spacing(3),
    borderBottom: "1px solid #DBDDE3",
    "& h4": {
      fontSize: "1.5rem",
      lineHeight: "1.2",
    },
  },
  contentSection: {
    "& h4": {
      fontSize: "1.5rem",
      lineHeight: "1.2",
    },
  },
}));

const ActivitySettings: VFC = () => {
  const classes = useStyles();

  const serviceList = [
    {
      title: "Face recognition service",
      description:
        "Face recognition sign-in and exit system. Hardware-free construction, no-load APP, cross-platform support",
      enableValue: "15",
      disableValue: "30",
      btnType: "Activated",
    },
    {
      title: "Questionnaire service",
      description:
        "Online questionnaire and statistical analysis. Questionnaires automatically generate statistical reports and easily produce results reports",
      enableValue: "10",
      disableValue: "15",
      btnType: "Enable",
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container className={classes.containerFluid}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={classes.pageHeader}
            >
              <Typography variant="h3" fontWeight={700}>
                Activity settings
              </Typography>
              <Button
                rounded
                className={classes.styledBtn}
                startIcon={<img src={TeachIcon} alt="Payment" />}
                variant="contained"
              >
                Use Teaching
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Box className={classes.headerSection}>
                <Typography variant="h4" fontWeight={500}>
                  Activity settings
                </Typography>
                <Typography variant="body1">
                  You can set up your event related functions.
                </Typography>
              </Box>
              <Box className={classes.contentSection} p={3}>
                <Typography variant="h4" fontWeight={500}>
                  Services that can be purchased
                </Typography>
                <Box py={3}>
                  <Grid container spacing={3}>
                    {serviceList.map((service) => (
                      <ServiceItem service={service} key={service.title} />
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ActivitySettings;
