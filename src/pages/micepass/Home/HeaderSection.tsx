import React from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import Box from "@e-group/material/Box";
import Aos from "@e-group/material-module/Aos";
import Header from "components/Header";

import bannerImage from "static/img/banner-first-image.png";
import StyledButton from "components/StyledButton";

const useStyles = makeStyles((theme) => ({
  landingHeader: {
    height: "630px",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      height: "770px",
    },
    "& .MuiContainer-maxWidthLg": {
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "540px",
      },
    },
    "& img": {
      maxWidth: "540px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "2rem",
      },
    },
  },
  contentRow: {
    paddingTop: "10.5rem",
    height: "100%",
    "& .MuiGrid-item": {
      paddingTop: "0",
      paddingBottom: "0",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "7rem",
      paddingBottom: "2rem",
    },
  },
  bannerContent: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    "& h2": {
      fontSize: "2rem",
      color: theme.palette.common.white,
      lineHeight: "1.2",
      marginBottom: "0.5rem",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    "& p": {
      fontSize: "27px",
      lineHeight: "1.5",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
}));

const HeaderSection: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Header className={classes.landingHeader}>
      <Container>
        <Grid container spacing={2} className={classes.contentRow}>
          <Grid item xs={12} sm={12} md={6} className={classes.bannerContent}>
            <Aos variant="slideInLeft" config={{ duration: 500 }}>
              <Box>
                <Typography variant="h2" fontWeight={700}>
                  Simple activities, easy management of customers,
                </Typography>
                <Typography variant="body1">
                  make your activities more exciting
                </Typography>
                <StyledButton rounded>Do An Event Now</StyledButton>
              </Box>
            </Aos>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Aos variant="slideInRight" config={{ duration: 500 }}>
              <Box textAlign="center">
                <img
                  src={bannerImage}
                  width="100%"
                  alt="Banner"
                  decoding="async"
                />
              </Box>
            </Aos>
          </Grid>
        </Grid>
      </Container>
    </Header>
  );
};

export default HeaderSection;
