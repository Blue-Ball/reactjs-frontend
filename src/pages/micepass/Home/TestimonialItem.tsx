import React from "react";
import { makeStyles } from "@material-ui/core";

import Paper from "@e-group/material/Paper";
import { Box } from "@e-group/material";
import Typography from "@e-group/material/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  testimonialSection: {
    marginTop: "3rem",
    paddingBottom: "1.5rem",
  },
  sectionHeader: {
    "& p": {
      color: theme.egPalette.primary[1],
      fontWeight: "700",
    },
    "& h2": {
      fontSize: "31px",
      color: "#42495b",
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
  },
  testimonialItem: {
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #f2f2f2",
    boxShadow: "0 19px 38px rgb(0 0 0 / 10%), 0 15px 12px rgb(0 0 0 / 2%)",
    "& img": {
      maxWidth: "110px",
      width: "100%",
      margin: "0 auto 10px",
      border: "6px solid #05c7f2",
      borderRadius: "50%",
    },
    "& p": {
      fontSize: "15px",
      lineHeight: "1.75",
      margin: "0 0 17px 0",
      color: "#7e92ac",
    },
    "& h3": {
      fontSize: "22px",
      lineHeight: "1.2",
      marginBottom: "0.5rem",
    },
  },
}));

interface TestimonialItemType {
  avatar: string;
  description: string;
  name: string;
  dummyText: string;
}

interface Props {
  testimonial: TestimonialItemType;
}

const TestimonialItem: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const { testimonial } = props;

  return (
    <Paper className={classes.testimonialItem}>
      <Box textAlign="center">
        <img src={`${testimonial.avatar}`} alt="User" decoding="async" />
        <Typography variant="body1" align="center">
          {testimonial.description}
        </Typography>
        <Typography variant="h3" align="center">
          {testimonial.name}
        </Typography>
        <Typography variant="body1" align="center">
          {testimonial.dummyText}
        </Typography>
        <Rating name="review" value={5} readOnly />
      </Box>
    </Paper>
  );
};

export default TestimonialItem;
