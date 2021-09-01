import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Paper from "@e-group/material/Paper";

const useStyles = makeStyles({
  statisticsCard: {
    padding: "1.75rem 1.25rem",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.35rem",
    alignItems: "center",
    "& h5": {
      lineHeight: "1.2",
      fontSize: "1.25rem",
      color: "#5a5c69!important",
    },
    "& p": {
      color: "#858796",
    },
    "& img": {
      "@media screen and (max-width: 320px)": {
        width: "50px",
      },
    },
  },
});

interface Props {
  point: number;
  title: string;
  children: React.ReactNode;
}

const StatisticsCard: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { point, title, children } = props;

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Paper variant="outlined" className={classes.statisticsCard}>
        <Box>
          <Typography variant="h5">{point}</Typography>
          <Typography variant="body1">{title}</Typography>
        </Box>
        {children}
      </Paper>
    </Grid>
  );
};

export default StatisticsCard;
