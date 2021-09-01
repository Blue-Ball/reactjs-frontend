import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import Divider from "@material-ui/core/Divider";
import { Box } from "@e-group/material";
import Typography from "@e-group/material/Typography";
import Link from "@material-ui/core/Link";

interface ReviewModelPropsType {
  name: string;
  timeInfo: string;
  text: string;
}

interface Props {
  review: ReviewModelPropsType;
}

const useStyles = makeStyles((theme) => ({
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
}));

const ReviewModel: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { review } = props;

  return (
    <Box className={classes.reviewModel}>
      <Typography variant="h6" fontWeight={400}>
        {review.name}
      </Typography>
      <Box className={classes.timeInfo}>
        <Typography variant="body1" fontWeight={400}>
          {review.timeInfo}
        </Typography>
      </Box>
      <Typography variant="body1" fontWeight={400}>
        {review.text}
      </Typography>
      <Box mt={3}>
        <Link href="/">Read More</Link>
      </Box>
      <Box display="flex" mb={1} justifyContent="space-between">
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
      <Divider />
    </Box>
  );
};

export default ReviewModel;
