import React from "react";
import { makeStyles } from "@material-ui/core";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Aos from "@e-group/material-module/Aos";

import BasicImg from "static/img/basic.png";
import BasicServiceItem from "./BasicServiceItem";

const useStyles = makeStyles((theme) => ({
  basicServiceWrapper: {
    "& >div": {
      height: "100%",
    },
  },
  basicServiceSection: {
    backgroundColor: theme.egPalette.info[2],
    borderRadius: "20px",
    paddingBottom: theme.spacing(2),
    height: "100%",
  },
  header: {
    "& img": {
      marginBottom: theme.spacing(2),
      width: "25%",
    },
    "& h6": {
      fontSize: "1rem",
      color: theme.egPalette.primary[1],
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
  },
  body: {
    borderTop: "2px solid #36a0bd",
    "& h5": {
      fontSize: "13px",
      color: theme.egPalette.primary[1],
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
    "& p": {
      marginBottom: theme.spacing(2),
      color: theme.palette.common.white,
      display: "flex",
      alignItems: "center",
      "& img": {
        width: "18px",
        marginRight: theme.spacing(2),
      },
    },
  },
}));

const BasicServiceSection: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const functionList = [
    {
      text: "Customer Management System",
    },
    {
      text: "Event Management System",
    },
    {
      text: "Notification System",
    },
    {
      text: "RWD event website",
    },
    {
      text: "Basic checking system",
    },
    {
      text: "QRCode, personal information",
    },
  ];

  return (
    <Grid item xs={12} sm={12} md={4} className={classes.basicServiceWrapper}>
      <Aos variant="slideInLeft" config={{ duration: 500 }}>
        <Box className={classes.basicServiceSection}>
          <Box p={4} textAlign="center" className={classes.header}>
            <img src={BasicImg} alt="Basic" decoding="async" />
            <Typography variant="h6" align="center" fontWeight={700}>
              BASIC
            </Typography>
          </Box>
          <Box className={classes.body} pt={2} px={2}>
            <Typography variant="h5" fontWeight={700}>
              Function
            </Typography>

            {functionList.map((item) => (
              <BasicServiceItem text={item.text} key={item.text} />
            ))}
            <Typography variant="h5" fontWeight={700}>
              Fee
            </Typography>
            <BasicServiceItem text="MP 19 per person every day." />
          </Box>
        </Box>
      </Aos>
    </Grid>
  );
};

export default BasicServiceSection;
