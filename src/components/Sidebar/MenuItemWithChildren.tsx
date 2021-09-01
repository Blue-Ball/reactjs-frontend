import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  routeItem: {
    position: "relative",
    padding: "0.75rem 1rem",
    alignItems: "flex-start",
    flexDirection: "column",
    "& a": {
      display: "flex",
      alignItems: "center",
      textDecoration: "none !important",
      width: "100%",
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
          {!miniItem && open && <KeyboardArrowDownOutlinedIcon />}
          {!miniItem && !open && <ChevronRightIcon />}
        </NavLink>
        <Collapse
          in={open}
          unmountOnExit
          timeout={150}
          className={classes.menuCollapse}
        >
          <List>
            {routeItem.routes?.map((item) => (
              <ListItem key={`child-${item.breadcrumbName}`}>
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
