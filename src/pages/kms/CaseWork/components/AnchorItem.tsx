import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Box } from "@e-group/material";
import Typography from "@e-group/material/Typography";

interface AnchorChildPropsType {
  id: number;
  text: string;
}

interface AnchorItemPropsType {
  id: number;
  title: string;
  list: AnchorChildPropsType[];
}

interface Props {
  anchor: AnchorItemPropsType;
}

const useStyles = makeStyles((theme) => ({
  anchorItem: {
    "& h6": {
      color: "#000",
      fontSize: "12px",
      lineHeight: "1.2",
      marginBottom: theme.spacing(1),
    },
    "& ul": {
      paddingLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    "& ul li p": {
      marginBottom: "0",
      lineHeight: "2",
      fontSize: "12px",
      color: "#858796",
    },
  },
}));

const AnchorItem: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { anchor } = props;

  return (
    <Box className={classes.anchorItem}>
      <Typography variant="h6" fontWeight={700}>
        {anchor.title}
      </Typography>
      <ul>
        {anchor.list.map((child) => (
          <li key={`${anchor.id}-${child.id}`}>
            <Typography variant="body1" paragraph>
              {child.text}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default AnchorItem;
