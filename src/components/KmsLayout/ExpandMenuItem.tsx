import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";

interface MenuItemType {
  id: string;
  title: string;
}

interface Props {
  key: string;
  menuListData: MenuItemType[];
}

const useStyles = makeStyles((theme) => ({
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

const ExpandMenuItem: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { menuListData } = props;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLLIElement>(null);

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
      <MenuItem
        ref={anchorRef}
        aria-controls={open ? "expand-org-name-btn" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        My Org Name
        <ChevronRightIcon />
      </MenuItem>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        className={classes.popper}
        role={undefined}
        transition
        disablePortal
        placement="right-start"
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
                <MenuList autoFocusItem={open} id="expand-org-name-btn">
                  {menuListData.map((menu) => (
                    <MenuItem
                      onClick={handleClose}
                      className={classes.menuItem}
                      key={`${menu.title}-expand-${menu.id}`}
                    >
                      {menu.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default ExpandMenuItem;
