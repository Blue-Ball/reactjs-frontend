import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Link from "@material-ui/core/Link";
// import Typography from "@e-group/material/Typography";
import Logo from "components/Logo";
import { Box } from "@e-group/material";

import MenuItemWithChildren from "./MenuItemWithChildren";

const drawerWidth = 318;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      background: "#05c7f2",
      position: "unset !important",
      borderTopLeftRadius:"40px",
      borderBottomLeftRadius:"40px",
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
    padding: "2.8rem 1rem",
    marginBottom:"1.5rem",
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
  logo: {
    width: "133px",
    height: "133px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(1),
    "& img": {
      width:"85px",
      height:"81px",
    }
  },
  miniLogo: {
    width: 55,
    height: 55,
    "& img": {
      width:"35px",
      height:"31px",
    }
  },
  routeItem: {
    position: "relative",
    paddingLeft:"10px",
    paddingRight:"0",
    paddingTop:"0",
    paddingBottom:"0",
    "& a": {
      width:"100%",
      textDecoration: "none !important",
      "& .MuiBox-root": {
        padding: "1.2rem 1.5rem",
        display: "flex",
        alignItems: "center",
        color: "white",
      },
      "& .MuiListItemIcon-root": {
        minWidth: "unset",
        marginRight: "1.5rem",
        "& img": {
          width: "30px",
        },
        "& .MuiSvgIcon-root": {
          color: "white",
          width: "30px",
        },
      },
      "& .MuiTypography-root": {
        fontSize: "1.2rem",
        lineHeight: "1.5",
      },
    },
    "& a.active": {
      position:"relative",
      background:"#0474ad",
      borderTopLeftRadius:"40px",
      borderBottomLeftRadius:"40px"
    },
    "& a.active:before": {
      position:"absolute",
      background:"#0474ad",
      width: "20px",
      height: "20px",
      content: `''`,
      right: "0",
      transform: "translateY(-100%)",
      top: "0",
    },
    "& a.active .MuiBox-root:before": {
      position:"absolute",
      background:"#05c7f2",
      borderBottomRightRadius:"100%",
      width: "20px",
      height: "20px",
      content: `''`,
      right: "0",
      transform: "translateY(-100%)",
      top: "0",
    },
    "& a.active .MuiBox-root:after": {
      position:"absolute",
      background:"#0474ad",
      width: "20px",
      height: "20px",
      content: `''`,
      right: "0",
      transform: "translateY(100%)",
      bottom: "0",
    },
    "& a.active:after": {
      position:"absolute",
      background:"#05c7f2",
      borderTopRightRadius:"100%",
      width: "20px",
      height: "20px",
      content: `''`,
      right: "0",
      transform: "translateY(100%)",
      bottom: "0",
    },
  },
  miniRouteItem: {
    justifyContent: "center",
    "& a .MuiBox-root": {
      justifyContent: "center",
      flexDirection: "column",
      "& .MuiListItemIcon-root": {
        marginRight: "0",
      },
      "& .MuiTypography-root": {
        fontSize: "0.65rem",
        textAlign: "center",
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

const NewSidebar: React.FC<Props> = (props) => {
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
        <Logo
          variant="rounded"
          size="small"
          className={clsx({
            [classes.logo]: true,
            [classes.miniLogo]: miniItem,
          })}
        />
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
              <Box>
                <ListItemIcon>{item.menuIcon}</ListItemIcon>
                <ListItemText primary={item.breadcrumbName} />
              </Box>
            </NavLink>
          </ListItem>
        )
      )}
    </Drawer>
  );
};

export default NewSidebar;
