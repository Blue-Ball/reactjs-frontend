import React from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import Box from "@e-group/material/Box";

import StyledButton from "components/StyledButton";
import BasicServiceSection from "./BasicServiceSection";
import TrailEventSection from "./TrailEventSection";

const useStyles = makeStyles((theme) => ({
  servicePlanSection: {
    background: "#f0fcff",
    padding: "5rem 0 2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "3rem 0 0",
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(6),
    "& h3": {
      color: theme.egPalette.primary[1],
      fontSize: "1.75rem",
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0",
    },
  },
}));

const ServicePlanSection: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.servicePlanSection}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} className={classes.sectionTitle}>
            <Typography variant="h3" fontWeight={700} align="center">
              SERVICE PLAN AND PRICING
            </Typography>
          </Grid>
          <BasicServiceSection />
          <TrailEventSection />
          <Box pt={3} pb={2} textAlign="center" width="100%">
            <StyledButton rounded>Start Event</StyledButton>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicePlanSection;
