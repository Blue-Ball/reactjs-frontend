import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";

const useStyles = makeStyles(() => ({
  routeItem: {
    position: "relative",
    padding: "0",
    paddingLeft:"10px",
    alignItems: "flex-start",
    flexDirection: "column",
    "& a": {
      display: "flex",
      padding: "1.2rem 1.5rem",
      alignItems: "center",
      textDecoration: "none !important",
      width: "100%",
      color: "white",
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
    }
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
  menuCollapse: {
    width: "100%",
    background: "transparent",
    borderRadius: "0.35rem",
    marginTop: "0",
    "& a": {
      color: "white !important",
    },
    "& .MuiSvgIcon-root": {
      color: "white !important",
    },
  },
}));

interface RouteChildrenPropsType {
  component: React.ReactNode;
  path: string;
  breadcrumbName?: string;
  exact?: boolean;
}

interface RouteItemPropsType {
  path: string;
  breadcrumbName?: string;
  component?: React.ReactNode;
  exact?: boolean;
  menuIcon?: React.ReactNode;
  collapse?: boolean | false;
  routes?: RouteChildrenPropsType[];
}

interface Props {
  routeItem: RouteItemPropsType;
  openSidebar: boolean;
  miniItem: boolean;
}

const MenuItemWithChildren: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { routeItem, miniItem } = props;

  const [open, setOpen] = useState(false);

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        key={routeItem.breadcrumbName}
        className={clsx({
          [classes.routeItem]: true,
          [classes.miniRouteItem]: miniItem,
        })}
      >
        <NavLink to="/" onClick={(e) => handleToggleMenu(e)}>
          <ListItemIcon>{routeItem.menuIcon}</ListItemIcon>
          <ListItemText primary={routeItem.breadcrumbName} />
          {!miniItem && open && <KeyboardArrowUpOutlinedIcon />}
          {!miniItem && !open && <KeyboardArrowDownOutlinedIcon />}
        </NavLink>
        <Collapse
          in={open}
          unmountOnExit
          timeout={150}
          className={classes.menuCollapse}
        >
          <List>
            {routeItem.routes?.map((item) => (
              <ListItem key={`child-${item.breadcrumbName}`}
              className={clsx({
                [classes.routeItem]: true,
                [classes.miniRouteItem]: miniItem,
              })}>
                <NavLink to={item.path}>
                  <ListItemIcon>
                    <FiberManualRecordOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.breadcrumbName} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </ListItem>
    </>
  );
};

export default MenuItemWithChildren;
