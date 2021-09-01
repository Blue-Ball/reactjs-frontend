import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Link from "@material-ui/core/Link";
import Typography from "@e-group/material/Typography";

import MenuItemWithChildren from "./MenuItemWithChildren";

const drawerWidth = 224;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    "& .MuiDrawer-paper": {
      background: "#4867bc",
      position: "unset !important",
    },
  },
  drawerPaper: {
    borderRight: "0",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerOpen: {
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      width: "104px",
    },
  },
  miniDrawer: {
    overflowX: "hidden",
    width: "104px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hideDrawer: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      width: "0px",
    },
  },
  sidebarBrand: {
    color: "white",
    textDecoration: "none !important",
    padding: "1.5rem 1rem",
    "& p": {
      fontSize: "1.5rem",
      lineHeight: "1.5",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  miniSidebarBrand: {
    "& p": {
      display: "none",
    },
  },
  routeItem: {
    position: "relative",
    padding: "0.75rem 1rem",
    "& a": {
      display: "flex",
      alignItems: "center",
      textDecoration: "none !important",
      color: "white",
      "& .MuiListItemIcon-root": {
        minWidth: "unset",
        marginRight: theme.spacing(1),
        "& img": {
          width: "15px",
        },
        "& .MuiSvgIcon-root": {
          color: "white",
          width: "20px",
        },
      },
      "& .MuiTypography-root": {
        fontSize: "1rem",
        lineHeight: "1.5",
      },
    },
    "&:after": {
      position: "absolute",
      width: "calc(100% - 2rem)",
      height: "1px",
      content: `''`,
      backgroundColor: "rgba(255, 255, 255, .15)",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: "0",
    },
  },
  miniRouteItem: {
    justifyContent: "center",
    "& a": {
      flexDirection: "column",

      "& .MuiListItemIcon-root": {
        marginRight: "0",
      },
      "& .MuiTypography-root": {
        fontSize: "0.65rem",
      },
    },
  },
}));

interface RouteChildrenPropsType {
  component: React.ReactNode;
  path: string;
  breadcrumbName: string;
  exact: boolean;
}

export interface RouteItemPropsType {
  path: string;
  breadcrumbName?: string;
  component?: React.ReactNode;
  exact?: boolean;
  menuIcon?: React.ReactNode;
  collapse?: boolean | false;
  routes?: RouteChildrenPropsType[];
}

interface Props {
  openSidebar: boolean;
  routes?: RouteItemPropsType[];
  isMobile: boolean;
}

const Sidebar: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { openSidebar, routes, isMobile } = props;

  const drawerClassnames = clsx(classes.drawer, {
    [classes.drawerOpen]: openSidebar,
    [classes.miniDrawer]: !isMobile && !openSidebar,
    [classes.hideDrawer]: isMobile && !openSidebar,
  });

  const drawerPaperClassnames = clsx({
    [classes.drawerPaper]: true,
    [classes.drawerOpen]: openSidebar,
    [classes.miniDrawer]: !isMobile && !openSidebar,
    [classes.hideDrawer]: isMobile && !openSidebar,
  });

  const miniItem = (isMobile && openSidebar) || (!isMobile && !openSidebar);

  return (
    <Drawer
      variant="permanent"
      className={drawerClassnames}
      classes={{
        paper: drawerPaperClassnames,
      }}
    >
      <Link
        href="/"
        component="button"
        variant="body1"
        className={clsx({
          [classes.sidebarBrand]: true,
          [classes.miniSidebarBrand]: miniItem,
        })}
      >
        <Typography variant="body1">NPO KMS</Typography>
      </Link>
      {routes?.map((item) =>
        item.collapse ? (
          <MenuItemWithChildren
            key={item.breadcrumbName}
            openSidebar={openSidebar}
            routeItem={item}
            miniItem={miniItem}
          />
        ) : (
          <ListItem
            key={item.breadcrumbName}
            className={clsx({
              [classes.routeItem]: true,
              [classes.miniRouteItem]: miniItem,
            })}
          >
            <NavLink to={item.path}>
              <ListItemIcon>{item.menuIcon}</ListItemIcon>
              <ListItemText primary={item.breadcrumbName} />
            </NavLink>
          </ListItem>
        )
      )}
    </Drawer>
  );
};

export default Sidebar;
