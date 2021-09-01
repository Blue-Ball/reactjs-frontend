import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

import { Box } from "@e-group/material";

interface Props {
  className?: string;
}

const useStyles = makeStyles({
  headerSection: {
    backgroundImage:
      "linear-gradient(to bottom, #2176a8, #1d6995, #195c83, #154f71, #12435f)",
    height: "250px",
    padding: "7rem",
    color: "white",
    "& h2": {
      fontSize: "2rem",
      lineHeight: "1.2",
    },
  },
});

const Header: React.FunctionComponent<Props> = (props) => {
  const { children, className = "" } = props;

  const classes = useStyles();

  const classnames = clsx({
    [classes.headerSection]: true,
    [className]: className,
  });

  return <Box className={classnames}>{children}</Box>;
};

export default Header;
