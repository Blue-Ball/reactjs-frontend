import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";

import Typography from "@e-group/material/Typography";
import { Box } from "@e-group/material";

const useStyles = makeStyles((theme) => ({
  mpPriceItem: {
    "& h4": {
      fontSize: "17px",
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
    "& p": {
      marginBottom: theme.spacing(2),
    },
  },
}));

interface Props {
  mp: string;
  twd: string;
}

const MPPriceItem: FC<Props> = (props) => {
  const classes = useStyles();

  const { mp, twd } = props;

  return (
    <Box className={classes.mpPriceItem}>
      <Typography variant="h4" fontWeight={700}>
        {`MP ${mp}`}
      </Typography>
      <Typography variant="body1">{`TWD ${twd}`}</Typography>
    </Box>
  );
};

export default MPPriceItem;
