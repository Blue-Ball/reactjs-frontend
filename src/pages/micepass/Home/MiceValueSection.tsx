import React from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";

import oneStepImg from "static/img/one-step.svg";
import anyDeviceImg from "static/img/support-any-device.svg";
import reduceCostImg from "static/img/reduce-cost.svg";

const useStyles = makeStyles((theme) => ({
  valueSection: {
    marginTop: "4rem",
  },
  contentWrapper: {
    backgroundColor: theme.egPalette.info[2],
    borderRadius: "30px 30px 0 0",
    padding: "3rem 1rem",
    "& h2": {
      color: theme.palette.common.white,
      fontSize: "23px",
      marginBottom: "2rem",
      lineHeight: "1.2",
    },
  },
  valueItem: {
    "& img": {
      width: "100px",
      height: "100px",
      objectFit: "fill",
    },
    "& h4": {
      color: theme.palette.common.white,
      fontSize: "1.5rem",
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
    "& p": {
      fontSize: "12px",
      color: theme.palette.common.white,
    },
  },
}));

const MiceValueSection: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.valueSection}>
      <Container>
        <Box className={classes.contentWrapper}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h2" fontWeight={500} align="center">
                MICEPASS VALUE
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box textAlign="center" className={classes.valueItem}>
                <img src={oneStepImg} alt="One Step" decoding="async" />
                <Typography variant="h4" fontWeight={500} align="center">
                  One-Stop service
                </Typography>
                <Typography variant="body1" align="center">
                  From event start to finish
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box textAlign="center" className={classes.valueItem}>
                <img src={anyDeviceImg} alt="One Step" decoding="async" />
                <Typography variant="h4" fontWeight={500} align="center">
                  One-Stop service
                </Typography>
                <Typography variant="body1" align="center">
                  PC , Mobile , PAD , Kiosk
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box textAlign="center" className={classes.valueItem}>
                <img src={reduceCostImg} alt="One Step" decoding="async" />
                <Typography variant="h4" fontWeight={500} align="center">
                  One-Stop service
                </Typography>
                <Typography variant="body1" align="center">
                  administrative , labor , system
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MiceValueSection;
