import React, { useState, useEffect, VFC } from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Switch } from "react-router-dom";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

import { Box } from "@e-group/material";

import Sidebar, { RouteItemPropsType } from "components/Sidebar";

import Footer from "./Footer";
import KmsNavbar from "./KmsNavbar";

const drawerWidth = 224;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
  },
  mainPanel: {
    width: `calc(100% - 104px)`,
    float: "right",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  mainPanelShift: {
    marginLeft: "0",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - 104px)`,
    },
  },
  contentWrapper: {
    minHeight: "calc(100vh - 100px)",
  },
}));

const KmsLayout: VFC<RouteConfigComponentProps> = ({ route }) => {
  const classes = useStyles();

  const [openSidebar, setOpenSidebar] = useState(true);
  const [isMobile, setIsMobile] = React.useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

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
    <Box className={classes.wrapper}>
      <Sidebar
        openSidebar={openSidebar}
        routes={route?.routes as RouteItemPropsType[]}
        isMobile={isMobile}
      />
      <Box
        className={clsx(
          { [classes.mainPanelShift]: openSidebar },
          classes.mainPanel
        )}
      >
        <Box className={classes.contentWrapper}>
          <KmsNavbar toggleSidebar={toggleSidebar} openSidebar={openSidebar} />
          <Switch>{renderRoutes(route?.routes)}</Switch>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default KmsLayout;
