import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { Box, IconButton, Button } from "@e-group/material";
import Textarea from "@e-group/material/Textarea";
import Typography from "@e-group/material/Typography";

import BorderReviewModel from "./BorderReviewModel";
import ReviewModel from "./ReviewModel";

interface Props {
  open: boolean;
  toggleDrawer: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    "& .MuiDrawer-paper": {
      width: "400px",
      [theme.breakpoints.down("xs")]: {
        width: "60%",
        minWidth: "300px",
      },
    },
  },
  textarea: {
    "& textarea": {
      border: "1px solid #d1d3e2",
      "&:hover": {
        borderColor: "#bac8f3",
        boxShadow: "0 0 0 0.2rem rgb(78 115 223 / 25%)",
      },
      "&:focus": {
        borderColor: "#bac8f3",
        boxShadow: "0 0 0 0.2rem rgb(78 115 223 / 25%)",
      },
    },
  },
  blueContainedBtn: {
    margin: "2px",
    "& .MuiButtonBase-root": {
      borderColor: "#4e73df",
      backgroundColor: "#4e73df",
      color: "white",
      fontWeight: "normal",
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  drawerTitle: {
    fontSize: "1rem",
    lineHeight: "1.2",
  },
  reviewModel: {
    "& h6": {
      lineHeight: "1.2",
      fontSize: "1rem",
      color: "#000",
    },
    "& p": {
      fontSize: "11px",
      marginBottom: theme.spacing(2),
      color: "#858796",
      lineHeight: "1.5",
    },
    "& a": {
      fontSize: "11px",
      color: "#4e73df",
      textDecoration: "none !important",
    },
  },
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
  closeBtn: {
    padding: theme.spacing(2),
    position: "relative",
    top: "-1rem",
    right: "-1rem",
  },
  contentWrapper: {
    paddingRight: "2rem",
  },
}));

const ReviewDrawer: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { open, toggleDrawer } = props;

  const firstReview = {
    name: "Cathy",
    timeInfo: "about 2min ago",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n;  has been the industry's standard dummy text ever since the 1500s, when an unknown",
  };
  const secondReview = {
    name: "Cathy",
    timeInfo: "about 2min ago",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n;  has been the industry's standard dummy text ever since the 1500s, when an unknown",
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        className={classes.drawer}
      >
        <Box p={2} className={classes.contentWrapper}>
          <Box textAlign="right">
            <IconButton onClick={toggleDrawer} className={classes.closeBtn}>
              <HighlightOffIcon />
            </IconButton>
          </Box>
          <Box>
            <Box className={classes.textarea}>
              <Textarea rowsMin={5} placeholder="What are you thought..." />
            </Box>
            <Box my={2} textAlign="right">
              <Button rounded>Cancel</Button>
              <Button className={classes.blueContainedBtn} rounded>
                Submit
              </Button>
            </Box>
          </Box>
          <Typography
            variant="h3"
            fontWeight={700}
            className={classes.drawerTitle}
          >
            Responses (4)
          </Typography>
          <Divider className={classes.divider} />

          <ReviewModel review={firstReview} />

          <Box my={2}>
            <BorderReviewModel />
            <BorderReviewModel />
          </Box>
          <ReviewModel review={secondReview} />
        </Box>
      </Drawer>
    </>
  );
};

export default ReviewDrawer;
