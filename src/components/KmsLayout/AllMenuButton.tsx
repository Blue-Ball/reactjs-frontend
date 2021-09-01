import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import LaptopOutlinedIcon from "@material-ui/icons/LaptopOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@e-group/material";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
  allBtn: {
    "& button": {
      fontSize: "10px",
      paddingTop: "0",
      paddingBottom: "0",

      backgroundColor: "#f8f9fc",
      borderRight: "2px solid #ddd",
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0px",
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px",
      boxShadow: "none",
      padding: "15px",
      color: "#a9a9a9",
    },
    "& .MuiButton-contained:hover": {
      boxShadow: "none",
      background: "#f8f9fc",
      color: "#000",
    },
  },
  menuPaper: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.35rem",
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

const AllMenuButton: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

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

  const handleSelectOption = (title: string) => {
    setSelectedOption(title);
    return handleClose();
  };

  const menuList = [
    {
      icon: <LaptopOutlinedIcon fontSize="small" />,
      title: "Bulletin Board",
    },
    {
      icon: <DateRangeOutlinedIcon fontSize="small" />,
      title: "Calendar",
    },
    {
      icon: <BookmarkBorderOutlinedIcon fontSize="small" />,
      title: "Case Work",
    },
    {
      icon: <PersonOutlineOutlinedIcon fontSize="small" />,
      title: "Administration",
    },
    {
      icon: <ImportContactsIcon fontSize="small" />,
      title: "Course",
    },
    {
      icon: <InsertDriveFileOutlinedIcon fontSize="small" />,
      title: "Files",
    },
    {
      icon: <SearchOutlinedIcon fontSize="small" />,
      title: "Advanced Search",
    },
  ];

  return (
    <>
      <Button
        variant="contained"
        ref={anchorRef}
        aria-controls={open ? "all-menu-list" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.allBtn}
      >
        {selectedOption}
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
                <MenuList autoFocusItem={open} id="all-menu-list">
                  {menuList.map((menu) => (
                    <MenuItem
                      onClick={() => handleSelectOption(menu.title)}
                      className={classes.menuItem}
                      key={menu.title}
                    >
                      {menu.icon}
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

export default AllMenuButton;
