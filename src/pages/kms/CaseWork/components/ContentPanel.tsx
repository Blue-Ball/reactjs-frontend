import React, { FC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import TogglePanel from "@e-group/material/TogglePanel";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Box, Button } from "@e-group/material";
import MenuItem from "@material-ui/core/MenuItem";

import pictureIcon from "static/img/picture-icon.svg";
import StyledHeaderMenu from "components/StyledCard/StyledHeaderMenu";
import AnchorItem from "./AnchorItem";
import ReviewDrawer from "./ReviewDrawer";

interface Props {
  index: number;
  value: number;
  handleOpenLeaveCommentModal: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "0.35rem",
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    "& .MuiCardHeader-title": {
      fontSize: "1.25rem",
      color: "#444",
      lineHeight: "1.2",
      fontWeight: "bold",
    },
    "& .MuiCardHeader-root": {
      paddingBottom: "0",
      "& .MuiCardHeader-action": {
        display: "flex",
        alignItems: "center",
      },
    },
    "& .MuiCardContent-root": {
      paddingTop: "0",
    },
  },
  shadow: {
    borderRadius: "0.35rem",
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
  },
  fileInfoTxt: {
    color: "#858796",
    fontSize: "1rem",
    "& span: nth-child(2)": {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
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
  anchorItem: {
    "& h6": {
      color: "#000",
      fontSize: "12px",
      lineHeight: "1.2",
      marginBottom: theme.spacing(1),
    },
    "& ul": {
      paddingLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    "& ul li p": {
      marginBottom: "0",
      lineHeight: "2",
      fontSize: "12px",
      color: "#858796",
    },
  },
  articleContent: {
    "& p": {
      marginBottom: theme.spacing(2),
      color: "#858796",
    },
  },
  greyBox: {
    background: "#ebebeb",
    padding: "30%",
    borderRadius: "15px",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      "& img": {
        width: "100%",
        maxWidth: "64px",
      },
    },
  },
  reviewBtn: {
    "& p": {
      color: "#2E2E2E",
      fontWeight: "bold",
    },
  },
}));

const ContentPanel: FC<Props> = (props) => {
  const { index, value, handleOpenLeaveCommentModal } = props;

  const classes = useStyles();

  const [openReviewDrawer, setOpenReviewDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenReviewDrawer(!openReviewDrawer);
  };

  const anchorList = [
    {
      id: 1,
      title: "H1 Anchor",
      list: [
        {
          id: 1,
          text: "H2 Anchor",
        },
        {
          id: 2,
          text: "H2 Anchor",
        },
        {
          id: 3,
          text: "H2 Anchor",
        },
      ],
    },
    {
      id: 2,
      title: "H1 Anchor",
      list: [
        {
          id: 1,
          text: "H2 Anchor",
        },
        {
          id: 2,
          text: "H2 Anchor",
        },
        {
          id: 3,
          text: "H2 Anchor",
        },
      ],
    },
    {
      id: 3,
      title: "H1 Anchor",
      list: [
        {
          id: 1,
          text: "H2 Anchor",
        },
        {
          id: 2,
          text: "H2 Anchor",
        },
        {
          id: 3,
          text: "H2 Anchor",
        },
        {
          id: 4,
          text: "H2 Anchor",
        },
        {
          id: 5,
          text: "H2 Anchor",
        },
        {
          id: 6,
          text: "H2 Anchor",
        },
      ],
    },
  ];

  return (
    <Grid item xs={12}>
      <TogglePanel index={index} value={value}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <Card className={classes.shadow}>
              <CardContent>
                {anchorList.map((anchor) => (
                  <AnchorItem anchor={anchor} key={anchor.id} />
                ))}
              </CardContent>
            </Card>
            <Box my={2} className={classes.reviewBtn}>
              <Button
                variant="outlined"
                rounded
                color="primary"
                startIcon={<ChatBubbleOutlineIcon />}
                onClick={toggleDrawer}
              >
                <Typography variant="body1">168</Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Card className={classes.card}>
              <CardHeader
                title="Article Title"
                action={
                  <StyledHeaderMenu>
                    <MenuItem onClick={handleOpenLeaveCommentModal}>
                      Audit
                    </MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </StyledHeaderMenu>
                }
              />
              <CardContent className={classes.articleContent}>
                <Typography variant="body1" fontWeight={700}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries,
                </Typography>
                <Typography variant="body1" fontWeight={700}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries,
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Box className={classes.greyBox} textAlign="center">
                      <img src={pictureIcon} alt="Article" decoding="async" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <Box className={classes.greyBox} textAlign="center">
                      <img src={pictureIcon} alt="Article" decoding="async" />
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  <Button
                    rounded
                    variant="contained"
                    className={classes.blueContainedBtn}
                  >
                    File Name 1
                  </Button>
                  <Button
                    rounded
                    variant="contained"
                    className={classes.blueContainedBtn}
                  >
                    File Name 2
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <ReviewDrawer open={openReviewDrawer} toggleDrawer={toggleDrawer} />
      </TogglePanel>
    </Grid>
  );
};

export default ContentPanel;
