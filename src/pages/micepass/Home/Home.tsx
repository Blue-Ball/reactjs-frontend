import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import Aos from "@e-group/material-module/Aos";
import Bounce from "components/Bounce";

import MainLayout from "components/MainLayout";
import ContactUsSection from "components/ContactUsSection";
import adminImg from "static/img/admin-image.svg";
import printImg from "static/img/print-image.svg";
import HeaderSection from "./HeaderSection";
import MiceValueSection from "./MiceValueSection";
import MiceFeatureSection from "./MiceFeatureSection";
import TestimonialsSection from "./TestimonialsSection";

const useStyles = makeStyles((theme) => ({
  sectionRow: {
    marginTop: "4rem",
  },
  textContents: {
    marginTop: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
  },
  subTitle: {
    color: theme.egPalette.primary[1],
    marginBottom: "0",
    fontSize: "20px",
  },
  title: {
    color: "#42495b",
    fontSize: "31px",
    marginBottom: "0.5rem",
    lineHeight: "1.2",
  },
  description: {
    color: "#444444",
    marginBottom: theme.spacing(2),
  },
  requestBtn: {
    "& button": {
      background: "#104c74 !important",
      color: "white",
      outline: "none !important",
      padding: "0.75rem 3rem",
      fontSize: "1rem",
    },
    "& button:hover": {
      background: "white !important",
      color: "#104c74",
      border: "1px solid #104c74",
    },
  },
  btnMarginBottom: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4rem",
    },
  },
}));

const Home: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <HeaderSection />
      <Container className={classes.sectionRow}>
        <Aos variant="slideInDown" config={{ duration: 900 }}>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
              <Bounce>
                <Box textAlign="center">
                  <img src={adminImg} alt="Admin" width="100%" />
                </Box>
              </Bounce>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box className={classes.textContents}>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  className={classes.subTitle}
                >
                  LOREM IPSUM IS SIMPLY
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight={700}
                  className={classes.title}
                >
                  LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING &
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
                <Button rounded className={classes.requestBtn}>
                  Request a demo
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Aos>
      </Container>
      <Container className={classes.sectionRow}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Aos variant="slideInLeft" config={{ duration: 500 }}>
              <Box className={classes.textContents}>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  className={classes.subTitle}
                >
                  REFRENCE
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight={700}
                  className={classes.title}
                >
                  LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING &
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  Meetings, Incentives, Conventions, Exhibitions, Event
                </Typography>
                <Button
                  rounded
                  className={clsx({
                    [classes.requestBtn]: true,
                    [classes.btnMarginBottom]: true,
                  })}
                >
                  Request a demo
                </Button>
              </Box>
            </Aos>
          </Grid>
          <Grid item sm={12} md={6}>
            <Aos variant="slideInRight" config={{ duration: 500 }}>
              <Bounce>
                <Box textAlign="center">
                  <img src={printImg} alt="Admin" width="100%" />
                </Box>
              </Bounce>
            </Aos>
          </Grid>
        </Grid>
      </Container>
      <MiceValueSection />
      <MiceFeatureSection />
      <TestimonialsSection />
      <ContactUsSection />
    </MainLayout>
  );
};

export default Home;
