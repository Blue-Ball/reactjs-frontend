import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SearchIcon from "@material-ui/icons/Search";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import { Box, Button } from "@e-group/material";
import StyledTextField from "components/StyledTextField";

import UserMenu from "./UserMenu";
import NotificationButton from "./NotificationButton";
import AllMenuButton from "./AllMenuButton";
import OrgNameButton from "./OrgNameButton";
import MobileSearchForm from "./MobileSearchForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAppBar-root": {
      backgroundColor: theme.palette.common.white,
      height: "4.375rem",
      boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
      marginBottom: "1.5rem",
      padding: "0.5rem 1rem",
    },
    "& .MuiToolbar-root": {
      paddingRight: "0",
      paddingLeft: "0",
      minHeight: "unset",
    },
  },
  sidebarToggleBtn: {
    color: "#4e73df",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
    },
  },

  searchWrapper: {
    width: "25rem",
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
  divider: {
    height: "2.375rem",
    margin: "auto 1rem",
    "@media screen and (max-width: 400px)": {
      margin: "auto 4px",
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

interface Props {
  toggleSidebar: VoidFunction;
  openSidebar: boolean;
}

const KmsNavbar: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { toggleSidebar, openSidebar } = props;

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.sidebarToggleBtn}
            color="primary"
            aria-label="open drawer"
            onClick={toggleSidebar}
          >
            {openSidebar ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <OrgNameButton />
          <div className={classes.grow} />
          <Hidden xsDown>
            <Box className={classes.searchWrapper} display="flex">
              <AllMenuButton />
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
          </Hidden>
          <Hidden smUp>
            <MobileSearchForm />
          </Hidden>
          <NotificationButton />
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default KmsNavbar;
