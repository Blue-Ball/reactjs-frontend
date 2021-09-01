import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    animationName: "$bounce",
    animationTimingFunction: "linear",
    animationDuration: "6.5s",
    animationIterationCount: "infinite",
    transformOrigin: "bottom",
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-40px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
});

const Bounce: FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Bounce;
