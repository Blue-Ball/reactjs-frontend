import React from "react";
import { makeStyles } from "@material-ui/core";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Paper from "@e-group/material/Paper";

const useStyles = makeStyles(() => ({
  featureItem: {
    padding: "1.5rem 3.5rem",
    borderRadius: "20px",
    height: "100%",
    "& img": {
      width: "70px",
      marginBottom: "10px",
    },
    "& h3": {
      fontSize: "18px",
      color: "#212529",
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
    "& p": {
      fontSize: "11px",
      lineHeight: "1.2",
    },
  },
  divider: {
    border: "1.5px solid #d9d9d9",
    background: "#d9d9d9",
    margin: "10px auto",
    width: "30px",
    borderRadius: "50px",
  },
}));

interface FeatureItemType {
  title: string;
  img: React.ReactNode;
  firstLine: string;
  secondLine: string;
}

interface Props {
  feature: FeatureItemType;
}

const MiceFeatureItem: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const { feature } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper className={classes.featureItem}>
        <Box textAlign="center">
          {/* <img src="../../assets/img/crm.svg" alt="CRM" decoding="async" /> */}
          {feature.img}
          <Typography variant="h3" fontWeight={500} align="center">
            {feature.title}
          </Typography>
          <Typography variant="body1" fontWeight={500} align="center">
            {feature.firstLine}
          </Typography>
          <Box className={classes.divider} />
          <Typography variant="body1" fontWeight={500} align="center">
            {feature.secondLine}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default MiceFeatureItem;
