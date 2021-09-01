import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Icomoon,
  DropDown,
  Grid,
} from '@e-group/material';

import Toolbar from "@material-ui/core/Toolbar";
import UserMenu from "./UserMenu";
import NotificationButton from "./NotificationButton";

const useStyles = makeStyles(() => ({
  root: {
  },
  organizerDropdown: {
    boxShadow: "none",
    "& .MuiButtonGroup-root": {
      height: "auto",
      minWidth: "117px",
    },
    "& .MuiButtonBase-root": {
      fontSize: "0.875rem",
      borderColor: "white",
      padding: "6.4px 20px",
    },
    "& .MuiButtonGroup-grouped": {
      borderRadius: "20px",
      backgroundColor: "white",
    },
    "& .MuiButton-label": {
      color: "#8c8c90",
    },
  },
  divider: {
    height: "2.375rem",
    margin: "auto 1rem",
    "@media screen and (max-width: 400px)": {
      margin: "auto 4px",
    },
  },
  show: {
    display: "flex",
    width: "auto"
  },
  hide: {
    display: "none",
  },
}));

const UserNavbar = () => {
  const classes = useStyles();
  const options1 = ["Member1", "Member2", "Member3"];
  const [isMobile, setIsMobile] = React.useState(false);
  const resizeFunction = () => {
    if (window.innerWidth < 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    resizeFunction();
    window.addEventListener("resize", resizeFunction);

    return function cleanup() {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);  

  return (
    <Toolbar className={classes.root}>
      <DropDown
        options={options1}
        select
        className={classes.organizerDropdown}
      >
        Member1
      </DropDown>
    
      <Button
        variant="contained"
        rounded
        color="success"
        startIcon={<Icomoon type="calendar" />}
        style={{marginLeft:'10px'}}
      >
        Organise Event
      </Button> 
      <Grid container className={isMobile?classes.hide:classes.show} >
        <NotificationButton />
        <UserMenu />
      </Grid>
    </Toolbar>
  );
};

export default UserNavbar;
