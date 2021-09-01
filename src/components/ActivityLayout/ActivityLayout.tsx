import React, { FC } from "react";

import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  Icomoon,
} from "@e-group/material";

import NavbarBrick from "@e-group/material-layout/NavbarBrick";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  navbar: {
    background: "transparent",
    borderBottom: "solid 1px #dbdde3",
  },
}));

const ActivityLayout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar elevation={0} position="static" className={classes.navbar}>
        <Toolbar>
          <div className={classes.grow} />
          <Button
            variant="contained"
            rounded
            color="success"
            startIcon={<Icomoon type="people-setting_2" />}
          >
            Service fee
          </Button>
        </Toolbar>
      </AppBar>
      <NavbarBrick />
      {children}
    </div>
  );
};

export default ActivityLayout;
