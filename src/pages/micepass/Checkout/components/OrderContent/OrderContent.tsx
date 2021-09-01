import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Paper from "@e-group/material/Paper";

import OrderItem from "./OrderItem";

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
  totalSection: {
    background: "#F1FFFA",
    borderRadius: "8px",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  },
}));

const OrderContent: VFC = () => {
  const classes = useStyles();

  const order = {
    name: "MICEPoint 3000 points",
    price: "TWD 2,850",
    quantity: ["1", "2", "3"],
  };

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Box className={classes.header}>
          <Typography variant="h3" fontWeight={400}>
            Order Content
          </Typography>
        </Box>
        <Box>
          <OrderItem order={order} />
          <Box
            className={classes.totalSection}
            m={3}
            p={3}
            display="flex"
            justifyContent="space-between"
          >
            <Typography variant="body1">Total</Typography>
            <Typography variant="body1">TWD 2,850</Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default OrderContent;
