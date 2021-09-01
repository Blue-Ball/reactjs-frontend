import React from "react";
import { makeStyles } from "@material-ui/core";

import { Box } from "@e-group/material";
import Typography from "@e-group/material/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "white",
    marginTop: theme.spacing(3),
    "& p": {
      fontSize: "0.8rem",
      lineHeight: "1",
      color: "#858796",
    },
  },
}));

const Footer: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer} py={4}>
      <Typography variant="body1" align="center">
        Copyright © Your Npo Kms
      </Typography>
    </Box>
  );
};

export default Footer;
