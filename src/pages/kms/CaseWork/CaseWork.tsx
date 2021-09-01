import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useTab from "@e-group/hooks/useTab";
import clsx from "clsx";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box } from "@e-group/material";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Tab, Tabs } from "@material-ui/core";
import TogglePanel from "@e-group/material/TogglePanel";

import LeaveCommentModal from "components/Modals/LeaveCommentModal";
import ContentPanel from "./components/ContentPanel";
import CaseStudyPanel from "./components/CaseStudyPanel";

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    maxWidth: "unset",
  },
  pageTitle: {
    "& h5": {
      fontSize: "1.25rem",
      lineHeight: "1.2",
      color: "#5a5c69!important",
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

const CaseWork: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const { value, handleChange } = useTab("tab");
  const tabsList = ["Content", "Case Study", "Content Files"];

  const [openLeaveCommentModal, setOpenLeaveCommentModal] =
    React.useState(false);
  const handleOpenLeaveCommentModal = () => {
    setOpenLeaveCommentModal(true);
  };
  const handleCloseLeaveCommentModal = () => {
    setOpenLeaveCommentModal(false);
  };

  return (
    <Box>
      <Container className={classes.containerFluid}>
        <Box mb={3} className={classes.pageTitle}>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Typography variant="h5" fontWeight={400}>
              Case Work
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              Case Work Details Title
            </Typography>
          </Breadcrumbs>
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
          <ContentPanel
            index={0}
            value={value}
            handleOpenLeaveCommentModal={handleOpenLeaveCommentModal}
          />
          <CaseStudyPanel
            index={1}
            value={value}
            handleOpenLeaveCommentModal={handleOpenLeaveCommentModal}
          />
          <TogglePanel index={2} value={value}>
            <Grid item xs={12}>
              <Typography variant="body1" fontWeight={400}>
                Coming Soon
              </Typography>
            </Grid>
          </TogglePanel>
        </Grid>
      </Container>
      <LeaveCommentModal
        open={openLeaveCommentModal}
        handleClose={handleCloseLeaveCommentModal}
      />
    </Box>
  );
};

export default CaseWork;
