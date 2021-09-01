import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MenuItem from "@material-ui/core/MenuItem";
import { Button, Box } from "@e-group/material";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";

import ExpandMenuItem from "./ExpandMenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "@media screen and (max-width: 1200px)": {
      display: "none",
    },
  },
  ogrNameBtn: {
    "& .MuiButtonBase-root": {
      color: "#9E9E9E",
    },
  },
  menuPaper: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.35rem",
    minWidth: "10rem",
  },
  menuItem: {
    fontSize: "0.85rem",
    "& svg": {
      marginRight: theme.spacing(1),
      fontSize: "1rem",
    },
  },
  popper: {
    zIndex: 2,
  },
}));

const OrgNameButton: React.VoidFunctionComponent = () => {
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

  const menuList = [
    {
      id: "1",
      title: "My Org Name",
      expand: true,
      expandList: [
        {
          id: "1",
          title: "My Org Name",
        },
        {
          id: "2",
          title: "My Org Name",
        },
        {
          id: "3",
          title: "My Org Name",
        },
      ],
    },
    {
      id: "2",
      title: "My Org Name",
      expand: true,
      expandList: [
        {
          id: "1",
          title: "My Org Name",
        },
        {
          id: "2",
          title: "My Org Name",
        },
        {
          id: "3",
          title: "My Org Name",
        },
      ],
    },
    {
      id: "3",
      title: "My Org Name",
      expand: false,
      expandList: [],
    },
  ];

  return (
    <Box className={classes.root}>
      <Button
        variant="outlined"
        endIcon={<ExpandMoreIcon />}
        rounded
        className={classes.ogrNameBtn}
        ref={anchorRef}
        aria-controls={open ? "org-name-btn" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        My Org Name
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        className={classes.popper}
        role={undefined}
        transition
        disablePortal
        placement="bottom-start"
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
                <MenuList autoFocusItem={open} id="org-name-btn">
                  {menuList.map((menu) =>
                    menu.expand ? (
                      <ExpandMenuItem
                        key={`${menu.title}-${menu.id}`}
                        menuListData={menu.expandList}
                      />
                    ) : (
                      <MenuItem
                        onClick={handleClose}
                        className={classes.menuItem}
                        key={`${menu.title}-${menu.id}`}
                      >
                        {menu.title}
                      </MenuItem>
                    )
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default OrgNameButton;
