import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import StyledTextField from "components/StyledTextField";
import { Box, Button } from "@e-group/material";

const useStyles = makeStyles({
  searchForm: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    minWidth: "10rem",
    "&.MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
  popper: {
    zIndex: 2,
    width: "100%",
    left: "50% !important",
    transform: "translate3d(-50%, 50px, 0px) !important",
    "& .MuiPaper-root": {
      width: "100%",
    },
  },
  searchField: {
    "& .MuiInputBase-root": {
      borderRadius: "0",
      background: "#f8f9fc",
      fontSize: "0.85rem",
      color: "#6e707e",
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

const MobileSearchForm: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    if (!anchorRef) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "search-form" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <SearchIcon />
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        className={classes.popper}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.searchForm}>
              <ClickAwayListener onClickAway={handleClose}>
                <Paper>
                  <Box display="flex" p={2}>
                    <StyledTextField
                      fullWidth
                      variant="outlined"
                      placeholder="search for..."
                      type="text"
                      className={classes.searchField}
                    />
                    <Button variant="contained" className={classes.searchBtn}>
                      <SearchIcon />
                    </Button>
                  </Box>
                </Paper>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default MobileSearchForm;
