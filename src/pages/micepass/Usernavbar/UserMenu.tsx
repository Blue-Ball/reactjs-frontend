import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@e-group/material";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Hidden from "@material-ui/core/Hidden";

import userAvatar from "./profile.png";

const useStyles = makeStyles((theme) => ({
  userDropdown: {
    "& .MuiButtonBase-root": {
      color: "#858796",
      background: "unset",
      fontSize: "13px",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "0",
        paddingRight: "0",
        minWidth: "unset",
        "& .MuiButton-endIcon": {
          marginLeft: "0",
        },
      },
    },
    "& img": {
      width: "2rem",
      height: "2rem",
    },
  },
  menuItem: {
    "& .MuiListItemIcon-root": {
      minWidth: "unset",
      marginRight: theme.spacing(1),
      color: "#d1d3e2!important",
    },
  },
  menuPaper: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    minWidth: "10rem",
  },
  popper: {
    zIndex: 2,
  },
}));

const UserMenu: React.VoidFunctionComponent = () => {
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
      <Button
        className={classes.userDropdown}
        endIcon={<Avatar alt="Remy Sharp" src={userAvatar}  variant="square" />}
        ref={anchorRef}
        aria-controls={open ? "user-menu-list" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Hidden smDown>
          <span>...</span>
        </Hidden>
      </Button>

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
            <Paper className={classes.menuPaper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="user-menu-list">
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    <ListItemIcon>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    <ListItemIcon>
                      <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default UserMenu;
