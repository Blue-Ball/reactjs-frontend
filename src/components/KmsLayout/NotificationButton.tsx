import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import MenuItem from "@material-ui/core/MenuItem";
import { Box } from "@e-group/material";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Typography from "@e-group/material/Typography";

const useStyles = makeStyles((theme) => ({
  notificationBtn: {
    marginLeft: "0.25rem",
    marginRight: "0.25rem",
    cursor: "pointer",
    "& svg": {
      color: "#a9a9a9",
    },
  },
  notificationMenu: {
    width: "25rem",
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    borderRadius: "0.35rem",
    "& h6": {
      fontSize: "20px",
      color: "#444",
      padding: "20px 20px 10px 20px",
      letterSpacing: "0.5px",
      lineHeight: "1.2",
    },
    "& ul li:last-child": {
      borderBottom: "0 !important",
    },
  },
  blueBg: {
    backgroundColor: "#4e73df!important",
  },
  yellowBg: {
    backgroundColor: "#f6c23e!important",
  },
  greenBg: {
    backgroundColor: "#1cc88a!important",
  },
  content: {
    width: "calc(100% - 2.5rem - 1rem)",
  },
  menuItem: {
    padding: "1rem 1.5rem",
    borderBottom: "1px solid #e3e6f0",
    "& p": {
      fontSize: "0.85rem",
      lineHeight: "1.3",
      whiteSpace: "break-spaces",
    },
    "& p:first-child": {
      fontWeight: "700",
    },
    "@media screen and (max-width: 400px)": {
      flexWrap: "wrap",
      padding: "1rem 1rem",
    },
  },
  popper: {
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      left: "50% !important",
      transform: "translate3d(-50%, 50px, 0px) !important",
      "& .MuiPaper-root": {
        width: "100%",
      },
    },
  },
}));

const NotificationButton: React.VoidFunctionComponent = () => {
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
      <Box className={classes.notificationBtn}>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "notification-list" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Badge badgeContent="3+" color="secondary">
            <NotificationsActiveOutlinedIcon />
          </Badge>
        </IconButton>
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        className={classes.popper}
        transition
        disablePortal
        placement="bottom-end"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.notificationMenu}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="notification-list">
                  <Typography
                    variant="h6"
                    onClick={handleClose}
                    fontWeight={700}
                  >
                    Notification
                  </Typography>
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    <Box
                      width="2.5rem"
                      height="2.5rem"
                      borderRadius="50%"
                      mr={2}
                      className={classes.blueBg}
                    />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      className={classes.content}
                    >
                      <Box>
                        <Typography variant="body1" fontWeight={700}>
                          Title
                        </Typography>
                        <Typography variant="body1">
                          Lorem Ipsum Simple dummy content{" "}
                        </Typography>
                      </Box>
                      <FiberManualRecordIcon fontSize="small" color="primary" />
                    </Box>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    <Box
                      width="2.5rem"
                      height="2.5rem"
                      borderRadius="50%"
                      mr={2}
                      className={classes.greenBg}
                    />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      className={classes.content}
                    >
                      <Box>
                        <Typography variant="body1" fontWeight={700}>
                          Title
                        </Typography>
                        <Typography variant="body1">
                          Lorem Ipsum Simple dummy content{" "}
                        </Typography>
                      </Box>
                      <FiberManualRecordIcon fontSize="small" color="primary" />
                    </Box>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    <Box
                      width="2.5rem"
                      height="2.5rem"
                      borderRadius="50%"
                      mr={2}
                      className={classes.yellowBg}
                    />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      className={classes.content}
                    >
                      <Box>
                        <Typography variant="body1" fontWeight={700}>
                          Title
                        </Typography>
                        <Typography variant="body1">
                          Lorem Ipsum Simple dummy content{" "}
                        </Typography>
                      </Box>
                      <FiberManualRecordIcon fontSize="small" color="primary" />
                    </Box>
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

export default NotificationButton;
