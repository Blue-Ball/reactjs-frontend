import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import IconButton from "@e-group/material/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";

interface Props {
  actionList: Array<string>;
}

const useStyles = makeStyles({
  shadow: {
    borderRadius: "0.35rem",
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
  },
  zIndex: {
    zIndex: 2,
  },
});

const StyledHeaderAction: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { actionList } = props;

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
        aria-label="settings"
        ref={anchorRef}
        aria-controls={open ? "user-menu-list" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MoreVertIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement="bottom-end"
        className={classes.zIndex}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.shadow}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="user-menu-list">
                  {actionList.map((action) => (
                    <MenuItem onClick={handleClose} key={action}>
                      {action}
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

export default StyledHeaderAction;
