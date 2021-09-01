import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@e-group/material/Typography";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    paddingRight: theme.spacing(3),
    minHeight: "70px",
    borderBottom: "1px solid rgba(112,112,112, 0.1)",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1),
    },
    "& .MuiListItemIcon-root": {
      paddingLeft: "4px",
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        "& img": {
          width: "45px",
        },
      },
    },
    "& .MuiListItemText-root .MuiTypography-root p": {
      overflowX: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
        lineHeight: "1.2",
        overflow: "hidden",
      },
    },
    "&:hover": {
      background: "#EFFCFF",
    },
  },
}));

interface MenuItemTypeProps {
  id: number;
  title: string;
  description?: string;
  icon: React.ReactNode;
}

interface Props {
  menu: MenuItemTypeProps;
}

const MenuItem: FC<Props> = (props) => {
  const classes = useStyles();

  const { menu } = props;

  return (
    <ListItem button className={classes.menuItem}>
      <ListItemIcon>{menu.icon}</ListItemIcon>
      <ListItemText>
        <Typography variant="body1">{menu.title}</Typography>
        {menu.description && (
          <Typography variant="body1">{menu.description}</Typography>
        )}
      </ListItemText>
    </ListItem>
  );
};

export default MenuItem;
