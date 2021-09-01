import React from "react";

import { makeStyles } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SubtitlesOutlinedIcon from "@material-ui/icons/SubtitlesOutlined";

import Box from "@e-group/material/Box";
import Typography from "@e-group/material/Typography";
import Container from "@e-group/material/Container";
import Grid from "@e-group/material/Grid";
import TextField from "@e-group/material/TextField";
import Textarea from "@e-group/material/Textarea";
import Aos from "@e-group/material-module/Aos";
import StyledButton from "components/StyledButton";

const useStyles = makeStyles((theme) => ({
  contactSecton: {
    padding: "2rem",
    backgroundColor: theme.egPalette.primary[1],
  },
  title: {
    color: theme.palette.common.white,
    fontSize: "1.75rem",
    lineHeight: "1.2",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      color: theme.egPalette.primary[1],
    },
  },
  contactForm: {
    "& .MuiOutlinedInput-root": {
      background: theme.palette.common.white,
      border: "0 !important",
    },
    "& svg": {
      color: "#AAAAAA",
      marginRight: theme.spacing(1),
    },
    outline: "unset !important",
    border: "0 !important",
  },
}));

const ContactUsSection: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contactSecton}>
      <Aos variant="slideInDown" offset={300} config={{ duration: 500 }}>
        <>
          <Typography
            variant="h3"
            fontWeight={700}
            align="center"
            className={classes.title}
          >
            Contact us
          </Typography>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Name"
                  className={classes.contactForm}
                  InputProps={{
                    startAdornment: <PersonOutlineIcon />,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Email"
                  className={classes.contactForm}
                  InputProps={{
                    startAdornment: <MailOutlineIcon />,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Feedback Type"
                  className={classes.contactForm}
                  InputProps={{
                    startAdornment: <RateReviewOutlinedIcon />,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Title"
                  className={classes.contactForm}
                  InputProps={{
                    startAdornment: <SubtitlesOutlinedIcon />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Textarea
                  rowsMin={5}
                  placeholder="Message"
                  className={classes.contactForm}
                />
              </Grid>
              <Grid item xs={12}>
                <Box width="100%" textAlign="center">
                  <StyledButton rounded>Send</StyledButton>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </>
      </Aos>
    </Box>
  );
};

export default ContactUsSection;
