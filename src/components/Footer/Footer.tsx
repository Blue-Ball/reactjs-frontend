import React from "react";
import { makeStyles } from "@material-ui/core";

import { Box } from "@e-group/material";
import Container from "@e-group/material/Container";
import Grid from "@e-group/material/Grid";
import Link from "@material-ui/core/Link";
import Divider from "@e-group/material-lab/Divider";

import LogoSvg from "static/img/logo-svg.svg";
import facebook from "static/img/facebook.png";
import youtube from "static/img/youtube.png";
import Typography from "@e-group/material/Typography";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    backgroundColor: "#111111",
    color: "white",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    "& ul": {
      listStyle: "none",
      padding: theme.spacing(0),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0),
      "& li": {
        display: "contents",
        "& a": {
          marginLeft: "4px",
          marginRight: "4px",
        },
      },
    },
  },
  divider: {
    borderColor: "#dee2e6",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  copyInfoText: {
    fontSize: "12px",
  },
}));

const Footer: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footerSection}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box textAlign="center">
              <img src={LogoSvg} alt="Logo" width="70" />
              <ul>
                <li>
                  <Link href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook" width="30" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/">
                    <img src={youtube} alt="Youtube" width="30" />
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.copyInfoText}
            >
              © 2020 - 2021 MICEPass, All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
