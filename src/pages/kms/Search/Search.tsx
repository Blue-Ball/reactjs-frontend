import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import useTab from "@e-group/hooks/useTab";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Tab, Tabs } from "@material-ui/core";
import TogglePanel from "@e-group/material/TogglePanel";
import Hidden from "@material-ui/core/Hidden";

import FilterDorpdownBtn from "components/FilterDorpdownBtn";
import AllResult from "./components/AllResult";

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    maxWidth: "unset",
  },
  pageTitle: {
    "& h1": {
      fontSize: "1.75rem",
      lineHeight: "1.2",
      color: "#5a5c69!important",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  shadow: {
    borderRadius: "0.35rem",
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
  },
  tabs: {
    background: "white",
    padding: "0 1.25rem",
    paddingTop: "0.3rem",
    "& .MuiButtonBase-root": {
      padding: "0.5rem 1rem",
      minWidth: "unset",
      "& .MuiTab-wrapper": {
        fontWeight: "400",
        lineHeight: "1.5",
        textTransform: "none",
        fontSize: "1rem",
        fontFamily: "Nunito",
      },
    },
    "& .Mui-selected": {
      color: "#4e73df",
    },
    "& .MuiTabs-indicator": {
      height: "5px",
      backgroundColor: "#4e73df",
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiTabs-flexContainer": {
        flexWrap: "wrap",
        "& .MuiButtonBase-root": {
          width: "100%",
          maxWidth: "unset",
        },
        "& .Mui-selected": {
          borderBottom: "3px solid #4e73df",
        },
      },
      "& .MuiTabs-indicator": {
        display: "none",
      },
    },
  },
}));

const Search: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const { value, handleChange } = useTab("tab");

  const tabsList = [
    "All",
    "Bulletin Board",
    "Calander",
    "Case Work",
    "Administration",
    "Course",
    "Flex",
  ];

  return (
    <Box>
      <Container className={classes.containerFluid}>
        <Box mb={3} className={classes.pageTitle}>
          <Typography variant="h1" fontWeight={400}>
            Result for <span>&quot;test input search text&quot;</span>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Tabs
              value={value}
              className={clsx(classes.tabs, classes.shadow)}
              onChange={(_, value) => handleChange(value)}
            >
              {tabsList.map((tab) => (
                <Tab label={tab} key={tab} />
              ))}
            </Tabs>
          </Grid>
          <Hidden lgUp>
            <Grid item xs={12} lg={3}>
              <FilterDorpdownBtn />
            </Grid>
          </Hidden>
          <Grid item xs={12} lg={9}>
            {tabsList.map((tab, index) =>
              tab === "All" ? (
                <AllResult index={0} value={value} key={tab} />
              ) : (
                <TogglePanel index={index} value={value} key={tab}>
                  <Card className={classes.shadow}>
                    <CardContent>
                      <Typography variant="body1" fontWeight={400}>
                        Coming Soon
                      </Typography>
                    </CardContent>
                  </Card>
                </TogglePanel>
              )
            )}
          </Grid>
          <Hidden mdDown>
            <Grid item xs={12} lg={3}>
              <FilterDorpdownBtn />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;
