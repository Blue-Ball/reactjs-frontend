import React from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";

import crmImg from "static/img/crm.svg";
import notificationImg from "static/img/notification.svg";
import multiCheckImg from "static/img/multi-check.svg";
import realTimeImg from "static/img/real-time.svg";
import onlineSurvayImg from "static/img/online-survay.svg";
import MiceFeatureItem from "./MiceFeatureItem";

const useStyles = makeStyles((theme) => ({
  featureSection: {
    backgroundImage:
      "linear-gradient(to bottom, #2176a8, #1d6995, #195c83, #154f71, #12435f)",
    padding: "1rem",
  },
  sectionHeader: {
    marginBottom: "2rem",
    "& h2": {
      fontSize: "23px",
      color: theme.palette.common.white,
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
    "& p": {
      fontSize: "15px",
      color: theme.palette.common.white,
    },
  },
}));

const MiceFeatureSection: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const featureList = [
    {
      title: "CRM",
      img: <img src={crmImg} alt="CRM" decoding="async" />,
      firstLine: "Know your VIP customer",
      secondLine: "Increase event attendance",
    },
    {
      title: "Notification",
      img: <img src={notificationImg} alt="Notification" decoding="async" />,
      firstLine:
        "Send large number of email and not be banned by Email Server Provider",
      secondLine: "Monitor the opens, clicks, and bounces from emails",
    },
    {
      title: "Multi-Check-In methods",
      img: <img src={multiCheckImg} alt="Multi-Check" decoding="async" />,
      firstLine: "Check-in by face , QRCode, personal information",
      secondLine: "Suitable for various event check-in situations",
    },
    {
      title: "Real-time dashboard",
      img: <img src={realTimeImg} alt="Real-time" decoding="async" />,
      firstLine: "Get real-time information on mobile",
      secondLine:
        "Real-time information , e.g. event status , check-in/check-out rate",
    },
    {
      title: "Online survay and statistical analysis",
      img: <img src={onlineSurvayImg} alt="Online survay" decoding="async" />,
      firstLine: "Automatically generate survey report",
      secondLine: "Easily complete the event report",
    },
  ];

  return (
    <Box className={classes.featureSection}>
      <Container>
        <div className={classes.sectionHeader}>
          <Typography variant="h2" fontWeight={700} align="center">
            MICEPass feature
          </Typography>
          <Typography variant="body1" align="center" fontWeight={700}>
            LOREM IPSUM SIMPLE DUMMY CONTENT
          </Typography>
        </div>
        <Grid container spacing={3}>
          {featureList.map((feature) => (
            <MiceFeatureItem feature={feature} key={feature.title} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MiceFeatureSection;
