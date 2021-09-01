import React from "react";
import { makeStyles } from "@material-ui/core";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import TestimonialItem from "./TestimonialItem";

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
}));

const TestimonialsSection: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const testimonialList = [
    {
      avatar:
        "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      name: "Lorem Ipsum ",
      dummyText: "Simply dummy text",
    },
  ];

  return (
    <Box className={classes.testimonialSection}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.sectionHeader}>
            <Typography variant="body1" fontWeight={700} align="center">
              OUR TESTIMONIAL
            </Typography>
            <Typography variant="h2" fontWeight={700} align="center">
              WHAT SOME OF OUR HAPPY CLIENTS SAY
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              {testimonialList.map((testimonial) => (
                <Grid item xs={12} sm={6} md={4} key={testimonial.name}>
                  <TestimonialItem testimonial={testimonial} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
