import React from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Aos from "@e-group/material-module/Aos";
import Bounce from "components/Bounce";

import MainLayout from "components/MainLayout";
import Header from "components/Header";
import ContactUsSection from "components/ContactUsSection";

import pricingSvg from "static/img/pricing-image.svg";
import ServicePlanSection from "./ServicePlanSection";
import MPPriceItem from "./MPPriceItem";

const useStyles = makeStyles((theme) => ({
  middleSection: {
    marginTop: "4rem",
  },
  textContents: {
    marginTop: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
    "& h2": {
      fontSize: "31px",
      marginBottom: "0.5rem",
      lineHeight: "1.2",
      color: theme.egPalette.primary[1],
    },
    "& h6": {
      fontSize: "18px",
      color: "#444",
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
    "& h3": {
      fontSize: "20px",
      color: theme.egPalette.info[2],
      lineHeight: "1.2",
      marginBottom: "0.5rem",
      margin: "15px 0",
    },
  },
}));

const Pricing: React.VoidFunctionComponent = () => {
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
          PRICING
        </Typography>
      </Header>
      <Box>
        <Container className={classes.middleSection}>
          <Box py={2}>
            <Grid container spacing={3}>
              <Grid item sm={12} md={6}>
                <Aos variant="slideInLeft" config={{ duration: 500 }}>
                  <Bounce>
                    <Box textAlign="center">
                      <img src={pricingSvg} alt="Reference" width="80%" />
                    </Box>
                  </Bounce>
                </Aos>
              </Grid>
              <Grid item sm={12} md={6}>
                <Aos variant="slideInRight" config={{ duration: 500 }}>
                  <Box className={classes.textContents}>
                    <Typography variant="h2" fontWeight={700}>
                      START YOUR EVENT BY MICEPOINT
                    </Typography>
                    <Typography variant="h6" fontWeight={700}>
                      MICEPoint is the payment method on MICEPass that be used
                      to pay event service fee
                    </Typography>
                    <ul>
                      <li>
                        <Typography
                          variant="body1"
                          paragraph
                          color="textSecondary"
                        >
                          Hereinafter referred to as MP.
                        </Typography>
                      </li>
                    </ul>
                    <Typography variant="h3" fontWeight={700}>
                      MICEPoint Pricing
                    </Typography>
                    <Grid container>
                      <Grid item xs={12} sm={4}>
                        <MPPriceItem mp="3,000" twd="2,850" />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <MPPriceItem mp="5,000" twd="4,550" />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <MPPriceItem mp="20,000" twd="8,000" />
                      </Grid>
                    </Grid>
                  </Box>
                </Aos>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <ServicePlanSection />
        <ContactUsSection />
      </Box>
    </MainLayout>
  );
};

export default Pricing;
