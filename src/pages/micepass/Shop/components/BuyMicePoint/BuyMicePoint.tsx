import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Paper from "@e-group/material/Paper";

import BuyMicePointItem from "./BuyMicePointItem";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(3),
    "& h3": {
      fontSize: "1.75rem",
      lineHeight: "1.2",
    },
  },
  paper: {
    border: "1px solid #C0C3CE",
    boxShadow: "0 3px 16px rgba(10, 75, 109, 0.08)",
    borderRadius: "8px 8px 0 0",
  },
}));

const BuyMicePoint: VFC = () => {
  const classes = useStyles();

  const micePointList = [
    {
      title: "MICEPoint 3000 points",
      value: "2,850",
      quantity: ["0", "1", "2", "3", "4", "5"],
    },
    {
      title: "MICEPoint 5000 points",
      value: "4,500",
      quantity: ["0", "1", "2", "3", "4", "5"],
    },
    {
      title: "MICEPoint 10000 points",
      value: "8,000",
      quantity: ["0", "1", "2", "3", "4", "5"],
    },
  ];

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Box className={classes.header}>
          <Typography variant="h3" fontWeight={400}>
            Buy MICEPoint
          </Typography>
        </Box>
        <Box>
          {micePointList.map((item) => (
            <BuyMicePointItem key={item.title} micePoint={item} />
          ))}
        </Box>
      </Paper>
    </Grid>
  );
};

export default BuyMicePoint;
