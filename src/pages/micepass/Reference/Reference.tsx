import React from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import Box from "@e-group/material/Box";
import Aos from "@e-group/material-module/Aos";

import MainLayout from "components/MainLayout";
import Header from "components/Header";
import Bounce from "components/Bounce";

import referenceSvg from "static/img/reference.svg";
import ContentTypeSection from "./ContentTypeSection";

const useStyles = makeStyles((theme) => ({
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
  },
  middleSection: {
    marginTop: "4rem",
  },
  referenceHeader: {
    "& h2": {
      fontSize: "2rem",
      lineHeight: "1.2",
    },
  },
}));

const Reference: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Header>
        <Typography
          variant="h2"
          fontWeight={700}
          color="inherit"
          align="center"
        >
          RERECENCE
        </Typography>
      </Header>
      <Container className={classes.middleSection}>
        <Box py={2}>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
              <Aos variant="slideInLeft" config={{ duration: 500 }}>
                <Bounce>
                  <Box textAlign="center">
                    <img src={referenceSvg} alt="Reference" width="80%" />
                  </Box>
                </Bounce>
              </Aos>
            </Grid>
            <Grid item sm={12} md={6}>
              <Aos variant="slideInRight" config={{ duration: 500 }}>
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
                    SHOW SUCCESS EVENT BY MICEPASS
                  </Typography>
                  <Typography variant="body1" className={classes.description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                    <br />
                    <br />
                    Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>
              </Aos>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ContentTypeSection />
    </MainLayout>
  );
};

export default Reference;
