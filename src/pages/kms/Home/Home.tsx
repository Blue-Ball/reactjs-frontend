import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import orderSvg from "static/img/orders.svg";
import productSvg from "static/img/product-view.svg";
import messageSvg from "static/img/new-message.svg";
import requestSvg from "static/img/pending-request.svg";
import BulletinBoard from "./components/BulletinBoard";
import StatisticsCard from "./components/StatisticsCard";

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    maxWidth: "unset",
  },
  pageTitle: {
    "& h1": {
      fontSize: "1.75rem",
      lineHeight: "1.2",
      color: "#5a5c69!important",
    },
  },
  card: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.35rem",
    marginBottom: theme.spacing(6),
    "& .MuiCardHeader-root": {
      background: "#f8f9fc",
      borderBottom: "1px solid #e3e6f0",
    },
    "& .MuiCardHeader-content": {
      "& .MuiTypography-root": {
        color: "#5a5c69!important",
        fontSize: "1rem",
        lineHeight: "1.2",
      },
    },
  },
}));

const Home: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.containerFluid}>
        <Box mb={3} className={classes.pageTitle}>
          <Typography variant="h1" fontWeight={400}>
            Dashboard
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <StatisticsCard point={24} title="Unfulfilled orders">
            <img src={orderSvg} alt="order" />
          </StatisticsCard>
          <StatisticsCard point={810} title="Products Views">
            <img src={productSvg} alt="product" />
          </StatisticsCard>
          <StatisticsCard point={40} title="New Messages">
            <img src={messageSvg} alt="message" />
          </StatisticsCard>
          <StatisticsCard point={18} title="Pending Requests">
            <img src={requestSvg} alt="request" />
          </StatisticsCard>
          <BulletinBoard />

          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader title="Calandar" />
              <CardContent>
                <Typography variant="body1" fontWeight={400}>
                  Coming Soon
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
