import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import { Box } from "@e-group/material";
import Typography from "@e-group/material/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  timeInfo: {
    "& p": {
      fontSize: "8px",
      color: "#858796",
      lineHeight: "1.5",
      marginBottom: "0.25rem",
    },
  },
  iconWrapper: {
    fontSize: "11px",
    color: "#000",
    "& svg": {
      width: "15px",
    },
    "& p": {
      display: "flex",
      alignItems: "center",
      marginBottom: "0",
    },
    "& p:nth-child(2)": {
      marginLeft: theme.spacing(1),
    },
  },
  borderReviewModel: {
    borderLeft: "3px solid rgb(92, 92, 92)",
    marginLeft: "15px",
    paddingLeft: "15px",
    borderBottom: "2px solid rgb(92, 92, 92)",
    "& p": {
      fontSize: "11px",
    },
    color: "#858796",
    "& h6": {
      color: "#000",
      lineHeight: "1.2",
      fontSize: theme.spacing(2),
    },
    "& svg": {
      width: "15px",
      color: "#858796",
    },
    "& a": {
      fontSize: "11px",
      color: "#4e73df",
      textDecoration: "none !important",
    },
  },
}));

const BorderReviewModel: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.borderReviewModel}>
      <Typography variant="h6" fontWeight={400}>
        Deniel
      </Typography>
      <Box className={classes.timeInfo}>
        <Typography variant="body1" fontWeight={400}>
          about 2min ago
        </Typography>
      </Box>
      <Typography variant="body1" fontWeight={400}>
        Good
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center" className={classes.iconWrapper}>
          <Typography variant="body1" fontWeight={400}>
            <ThumbUpAltOutlinedIcon />
            100
          </Typography>
          <Typography variant="body1" fontWeight={400}>
            <ChatBubbleOutlineIcon />2
          </Typography>
        </Box>
        <Link href="/">Reply</Link>
      </Box>
    </Box>
  );
};

export default BorderReviewModel;
