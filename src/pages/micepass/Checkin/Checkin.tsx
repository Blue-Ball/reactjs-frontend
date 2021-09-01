import React, { VFC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import { Box, Button } from "@e-group/material";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@e-group/material/Typography";
import IconButton from "@material-ui/core/IconButton";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import TopLevelIcon from "static/img/rightSidebarIcon.png";
import CityIcon from "static/img/cityIcon.png";
import TestActivityIcon from "static/img/testActivityIcon.png";
import playIcon from "static/img/playerIcon.png";
import MenuItem from "./components/MenuItem";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "& .MuiDrawer-paper": {
      width: "400px",
      borderTopLeftRadius: "30px",
      borderBottomLeftRadius: "30px",
      [theme.breakpoints.down("xs")]: {
        width: "300px",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
      },
    },
  },
  topLevelMenu: {
    background: "#05C7F2",
    padding: theme.spacing(2),
    color: "white",
    borderTopLeftRadius: "26px",
    "& svg": {
      color: "white",
    },
    [theme.breakpoints.down("xs")]: {
      borderTopLeftRadius: "18px",
      "& h6": {
        fontSize: "14px",
        lineHeight: "1.2",
      },
    },
  },
  topLevelIcon: {
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    background: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
    height: "60px",
    [theme.breakpoints.down("xs")]: {
      width: "50px",
      height: "50px",
      [theme.breakpoints.down("xs")]: {
        "& img": {
          width: "70%",
        },
      },
    },
  },
  collpaseMenu: {
    marginTop: "1rem !important",
    boxShadow: "none",
    borderRadius: "0",
    "& .MuiAccordionSummary-root": {
      background: "#05C7F2",
      color: "white",
      "& svg": {
        color: "white",
      },
      "& .MuiAccordionSummary-content": {
        alignItems: "center",
        margin: "1rem 0 !important",
        [theme.breakpoints.down("xs")]: {
          "& h6": {
            fontSize: "14px",
            lineHeight: "1.2",
          },
        },
      },
    },
    "& .MuiAccordionDetails-root": {
      padding: "0",
      "& ul": {
        width: "100%",
      },
    },
  },
  smW35: {
    [theme.breakpoints.down("xs")]: {
      width: "35px !important",
    },
  },
}));

const Checkin: VFC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleOpenMenu = () => {
    setExpanded(!expanded);
  };

  const videoMenuList = [
    {
      id: 1,
      icon: <img src={playIcon} alt="Icon" />,
      title: "Event held",
      description:
        "MICEPass (Tutorial)│ Easy to organize…MICEPass (Tutorial)│ Easy to organize…",
    },
    {
      id: 2,
      icon: <img src={playIcon} alt="Icon" />,
      title: "Event held",
      description:
        "MICEPass (Tutorial)│ Easy to organize…MICEPass (Tutorial)│ Easy to organize…",
    },
    {
      id: 3,
      icon: <img src={playIcon} alt="Icon" />,
      title: "Event held",
      description:
        "MICEPass (Tutorial)│ Easy to organize…MICEPass (Tutorial)│ Easy to organize…",
    },
    {
      id: 4,
      icon: <img src={playIcon} alt="Icon" />,
      title: "Event held",
      description:
        "MICEPass (Tutorial)│ Easy to organize…MICEPass (Tutorial)│ Easy to organize…",
    },
    {
      id: 5,
      icon: <img src={playIcon} alt="Icon" />,
      title: "Event held",
      description:
        "MICEPass (Tutorial)│ Easy to organize…MICEPass (Tutorial)│ Easy to organize…",
    },
    {
      id: 6,
      icon: <img src={playIcon} alt="Icon" />,
      title: "Event held",
      description:
        "MICEPass (Tutorial)│ Easy to organize…MICEPass (Tutorial)│ Easy to organize…",
    },
  ];

  const sessionMenuList = [
    {
      id: 1,
      icon: <img src={TestActivityIcon} alt="Icon" className={classes.smW35} />,
      title: "Test activity two",
    },
    {
      id: 2,
      icon: <img src={CityIcon} alt="Icon" className={classes.smW35} />,
      title: "Taipei City",
    },
  ];

  return (
    <Box>
      <Button rounded color="success" variant="outlined" onClick={toggleDrawer}>
        open right sidebar
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        className={classes.drawer}
      >
        <Box p={1} pr={0}>
          <Box>
            <Box
              className={classes.topLevelMenu}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <Box className={classes.topLevelIcon} mr={2}>
                  <img src={TopLevelIcon} alt="Top" />
                </Box>
                <Typography variant="h6" fontWeight={500}>
                  Use Instructional vidoes
                </Typography>
              </Box>
              <IconButton onClick={toggleDrawer}>
                <CloseOutlinedIcon />
              </IconButton>
            </Box>
            <List>
              {videoMenuList.map((menu) => (
                <MenuItem key={menu.id} menu={menu} />
              ))}
            </List>
          </Box>

          <Accordion
            expanded={expanded}
            onChange={handleOpenMenu}
            className={classes.collpaseMenu}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="all-sessions-conttent"
              id="all-session-header"
            >
              <Box className={classes.topLevelIcon} mr={2}>
                <img src={TopLevelIcon} alt="Top" />
              </Box>
              <Typography variant="h6" fontWeight={500}>
                All Sessions
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {sessionMenuList.map((menu) => (
                  <MenuItem key={menu.id} menu={menu} />
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Checkin;
