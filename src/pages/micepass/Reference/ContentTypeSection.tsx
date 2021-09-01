import React from "react";
import { makeStyles, Tab, Tabs } from "@material-ui/core";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import useTab from "@e-group/hooks/useTab";

import CustomTogglePanel from "./CustomTogglePanel";
import PhotoModal from "./PhotoModal";
import VideoModal from "./VideoModal";

const useStyles = makeStyles((theme) => ({
  contentTypeSection: {
    background: "#f0fcff",
    padding: "5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "5rem 0",
    },
  },
  sectonTitle: {
    fontSize: "1.57rem",
    color: "#2074a6 !important",
    marginBottom: "3rem",
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "unset",
    },
    "& .MuiButtonBase-root": {
      width: "50%",
      maxWidth: "unset",
      padding: "20px",
      fontSize: "15px",
      borderRadius: "50px",
    },
    "& .MuiTabs-flexContainer": {
      border: "1px solid #dee2e6",
      borderRadius: "50px",
    },
    "& .Mui-selected": {
      backgroundColor: "#5fd3f3 !important",
      color: "white",
      fontSize: "16px",
    },
  },
  tabSection: {
    marginTop: "3rem",
    "& .tab-pane:not(.show)": {
      opacity: "0",
    },
  },
  loadMoreBtn: {
    marginTop: "130px",
    "& button": {
      color: "#2178AB",
      borderColor: "#2178AB",
    },
  },
}));

const ContentTypeSection: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const { value, handleChange } = useTab("tab");

  const panelTestData = [
    {
      id: 1,
      title: "Event held",
      description: "MICEPass │ Easy to organize professional activities",
    },
    {
      id: 2,
      title: "Event held",
      description: "MICEPass │ Easy to organize professional activities",
    },
    {
      id: 3,
      title: "Event held",
      description: "MICEPass │ Easy to organize professional activities",
    },
    {
      id: 4,
      title: "Event held",
      description: "MICEPass │ Easy to organize professional activities",
    },
  ];

  const [openPhotoModal, setOpenPhotoModal] = React.useState(false);
  const [openVideoModal, setOpenVideoModal] = React.useState(false);

  const handleOpenPhotoModal = () => {
    setOpenPhotoModal(true);
  };

  const handleClosePhotoModal = () => {
    setOpenPhotoModal(false);
  };

  const handleOpenVideoModal = () => {
    setOpenVideoModal(true);
  };

  const handleCloseVideoModal = () => {
    setOpenVideoModal(false);
  };

  return (
    <Box className={classes.contentTypeSection}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Box px={2}>
              <Typography
                variant="h3"
                fontWeight={700}
                align="center"
                className={classes.sectonTitle}
              >
                CONTENT TYPE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className={classes.tabs} px={2}>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={(_, value) => handleChange(value)}
                centered
              >
                <Tab label="Event Video" />
                <Tab label="Event Photo" />
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.tabSection} px={2}>
              <CustomTogglePanel
                index={0}
                value={value}
                panelData={panelTestData}
                openModal={handleOpenVideoModal}
              />
              <CustomTogglePanel
                index={1}
                value={value}
                panelData={panelTestData}
                openModal={handleOpenPhotoModal}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              className={classes.loadMoreBtn}
              display="flex"
              justifyContent="center"
            >
              <Button variant="outlined" rounded>
                Load More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <PhotoModal open={openPhotoModal} handleClose={handleClosePhotoModal} />
      <VideoModal open={openVideoModal} handleClose={handleCloseVideoModal} />
    </Box>
  );
};

export default ContentTypeSection;
