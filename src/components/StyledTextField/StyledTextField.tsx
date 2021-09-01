import React from "react";
import { makeStyles, TextField, TextFieldProps } from "@e-group/material";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      fontSize: "0.8rem",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#bac8f3",
      boxShadow: "0 0 0 0.2rem rgb(78 115 223 / 25%)",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#bac8f3",
    },
    "& .MuiInputBase-input": {
      paddingLeft: theme.spacing(2),
    },
  },
}));

const StyledTextField: React.FC<TextFieldProps> = (props) => {
  const classes = useStyles();

  return <TextField className={classes.root} {...props} />;
};

export default StyledTextField;
