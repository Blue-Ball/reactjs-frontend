import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Box } from "@e-group/material";
import Typography from "@e-group/material/Typography";
import DropDown from "@e-group/material/DropDown";
import Grid from "@e-group/material/Grid";

const useStyles = makeStyles((theme) => ({
  pointItem: {
    padding: theme.spacing(3, 3, 2),
    borderTop: "1px solid #DBDDE3",
  },
  titleCell: {
    display: "flex",
    alignItems: "center",
  },
  valueCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "end",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
    },
  },
  quantityCell: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "end",
    },
  },
  dropdown: {
    boxShadow: "none",
    "& .MuiButtonGroup-root": {
      height: "unset",
    },
    "& .MuiButtonGroup-grouped": {
      border: "0",
      borderBottom: "1px solid #DBDDE3",
      borderRadius: "0",
    },
  },
}));

interface MicePointTypeProps {
  name: string;
  price: string;
  quantity: Array<string>;
}

interface Props {
  order: MicePointTypeProps;
}

const OrderItem: FC<Props> = (props) => {
  const classes = useStyles();

  const { order } = props;

  return (
    <Box className={classes.pointItem}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} className={classes.titleCell}>
          <Typography variant="body1">{order.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.valueCell}>
          <Typography variant="body1">{order.price}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.quantityCell}
          >
            <Box mr={2}>
              <Typography variant="body1">Quantity:</Typography>
            </Box>
            <DropDown
              options={order.quantity}
              select
              className={classes.dropdown}
            >
              0
            </DropDown>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderItem;
