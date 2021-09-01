import React, { useState, useEffect, FC } from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { Button, AppBar, Toolbar } from "@e-group/material";
import Container from "@e-group/material/Container";
import Link from "@material-ui/core/Link";
import Grid from "@e-group/material/Grid";
import DropDown from "@e-group/material/DropDown";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@e-group/material/IconButton";
import Collapse from "@material-ui/core/Collapse";

import LogoSvg from "static/img/logo-svg.svg";
import { useHistory } from "react-router";
import LoginModal from "./LoginModal";

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: "all 0.3s ease-out",
    background: "transparent",
  },
  stickyBar: {
    backgroundColor: "#2176a8d6 !important",
    boxShadow: "0 0 5px -1px rgb(0 0 0 / 74%)",
  },
  navbarContainer: {
    display: "flex",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  navbarCollpase: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      backgroundColor: "#000000d9",
    },
  },
  navbar: {
    listStyle: "none",
    padding: theme.spacing(0),
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  navItem: {
    marginLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
      paddingRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
  },
  navLink: {
    color: "white",
    textDecoration: "none !important",
    fontSize: "15px",
    padding: "5px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 0 10px",
    },
  },
  navButton: {
    paddingRight: theme.spacing(0),
    margin: "0 4px",
  },
  langDropdown: {
    boxShadow: "none",
    "& .MuiButtonGroup-root": {
      height: "auto",
      minWidth: "117px",
    },
    "& .MuiButtonBase-root": {
      fontSize: "0.875rem",
      borderColor: "#5FD3F3",
      padding: "6.4px 20px",
    },
    "& .MuiButtonGroup-grouped": {
      borderRadius: "20px",
      backgroundColor: "#5FD3F3",
    },
    "& .MuiButton-label": {
      color: "white",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  show: {
    display: "block",
  },
  hide: {
    display: "none",
  },
}));

const Navbar: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const options2 = ["English", "Hindi", "Urdu"];

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    const resizeListener = () => {
      const width = window.innerWidth;
      if (width > 960) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const [openLoginModal, setOpenLoginModal] = React.useState(false);

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx({ [classes.appBar]: true, [classes.stickyBar]: trigger })}
    >
      <Toolbar>
        <Container className={classes.navbarContainer}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link
              href="/"
              component="button"
              onClick={() => {
                history.push("/landingpage-home");
              }}
            >
              <img src={LogoSvg} alt="Logo" decoding="async" width="70" />
            </Link>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                onClick={() => setShowNav(!showNav)}
                color="white"
              >
                {showNav ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
            <Collapse
              in={!isMobile ? true : showNav}
              className={classes.navbarCollpase}
            >
              <Grid
                item
                className={clsx({
                  [classes.show]: !isMobile,
                  [classes.show]: isMobile && showNav,
                  [classes.hide]: isMobile && !showNav,
                })}
              >
                <ul className={classes.navbar}>
                  <li className={classes.navItem}>
                    <Link
                      href="/"
                      onClick={() => {
                        history.push("/landingpage-home");
                      }}
                      component="button"
                      className={classes.navLink}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link
                      href="/pricing"
                      onClick={() => {
                        history.push("/pricing");
                      }}
                      component="button"
                      className={classes.navLink}
                    >
                      PRICING
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link
                      href="/"
                      onClick={() => {
                        history.push("/reference");
                      }}
                      component="button"
                      className={classes.navLink}
                    >
                      REFERENCE
                    </Link>
                  </li>
                  <li className={clsx(classes.navItem, classes.navButton)}>
                    <DropDown
                      options={options2}
                      select
                      className={classes.langDropdown}
                    >
                      English
                    </DropDown>
                  </li>
                  <li className={clsx(classes.navItem, classes.navButton)}>
                    <Button
                      variant="outlined"
                      rounded
                      color="white"
                      onClick={handleOpenLoginModal}
                    >
                      Login
                    </Button>
                  </li>
                </ul>
              </Grid>
            </Collapse>
          </Grid>
          <LoginModal
            open={openLoginModal}
            handleClose={handleCloseLoginModal}
          />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
