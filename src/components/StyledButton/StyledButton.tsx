import React, { FC } from "react";
import { Button, ButtonBaseProps, makeStyles } from "@e-group/material";

const useStyles = makeStyles({
  root: {
    background: "#05C7F2",
    color: "white",
    padding: "0.75rem 3rem",
    fontSize: "1rem",

    "&:hover": {
      background: "#05C7F2",
    },
  },
});

const StyledButton: FC<ButtonBaseProps> = (props) => {
  const classes = useStyles();
  return <Button muiButtonClassName={classes.root} {...props} />;
};

export default StyledButton;
