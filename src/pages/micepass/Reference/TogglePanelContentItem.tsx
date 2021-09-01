import React from "react";
import { makeStyles } from "@material-ui/core";

import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import Typography from "@e-group/material/Typography";

import playImg from "static/img/play-button.png";
import videoImg from "static/img/image-video.png";

interface PanelItemDatatype {
  id: number;
  title: string;
  description: string;
}

interface Props {
  itemType: "photo" | "video";
  item: PanelItemDatatype;
  onClick: VoidFunction;
}

const useStyles = makeStyles({
  contentItem: {
    "& h3": {
      fontSize: "16px",
      marginTop: "10px",
      lineHeight: "1.2",
    },
    "& p": {
      fontSize: "14px",
      color: "#444444d6",
    },
  },
  cardItem: {
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "4rem 3.5rem",
    margin: "0 auto",
    display: "block",
    "& button": {
      background: "unset !important",
      transition: "unset !important",
    },
    "& img": {
      display: "flex",
      margin: "0 auto",
      cursor: "pointer",
    },
  },
});

const TogglePanelContentItem: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const { itemType, item, onClick } = props;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box className={classes.contentItem}>
        <Box className={classes.cardItem} textAlign="center" onClick={onClick}>
          <Button>
            <img src={itemType === "photo" ? videoImg : playImg} alt="Play" />
          </Button>
        </Box>
        <Typography variant="h3" fontWeight={600}>
          {item.title}
        </Typography>
        <Typography variant="body1">{item.description}</Typography>
      </Box>
    </Grid>
  );
};

export default TogglePanelContentItem;
