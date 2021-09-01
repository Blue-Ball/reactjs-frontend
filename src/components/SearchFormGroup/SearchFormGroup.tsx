import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

import { Box, Button } from "@e-group/material";

import StyledTextField from "components/StyledTextField";

const useStyles = makeStyles({
  searchField: {
    "& .MuiInputBase-root": {
      borderRadius: "0",
      background: "#fff",
      fontSize: "1rem",
      color: "#6e707e",
      borderTopLeftRadius: "0.35rem",
      borderBottomLeftRadius: "0.35rem",
    },
    "& .MuiInputBase-input": {
      padding: "0.75rem",
      fontSize: "1rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#bac8f3",
      boxShadow: "0 0 0 0.2rem rgb(78 115 223 / 25%)",
    },
  },
  searchBtn: {
    "& .MuiButtonBase-root": {
      color: "#fff",
      backgroundColor: "#2653d4",
      borderColor: "#244ec9",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
      padding: "0.375rem 0.75rem",
      minWidth: "unset",
    },
  },
});

const SearchFormGroup: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <StyledTextField
        fullWidth
        variant="outlined"
        placeholder="Search for..."
        type="text"
        className={classes.searchField}
      />
      <Button variant="contained" className={classes.searchBtn}>
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchFormGroup;
