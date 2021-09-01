import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

import TogglePanel from "@e-group/material/TogglePanel";
import Grid from "@e-group/material/Grid";
import Fade from "@material-ui/core/Fade";

import TogglePanelContentItem from "./TogglePanelContentItem";

interface PanelItemDatatype {
  id: number;
  title: string;
  description: string;
}

interface Props {
  index: number;
  value: number;
  panelData: PanelItemDatatype[];
  openModal: VoidFunction;
}

const useStyles = makeStyles({
  togglePanel: {
    transition: "opacity .15s linear",
  },
});

const CustomTogglePanel: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const { index, value, panelData, openModal } = props;

  const classnames = clsx({
    [classes.togglePanel]: true,
    "tab-pane": true,
    show: value === index,
  });

  return (
    <Fade in={value === index} timeout={1500}>
      <TogglePanel index={index} value={value} className={classnames}>
        <Grid container spacing={4}>
          {panelData.map((item) => (
            <TogglePanelContentItem
              itemType={value === 0 ? "video" : "photo"}
              item={item}
              key={item.id}
              onClick={openModal}
            />
          ))}
        </Grid>
      </TogglePanel>
    </Fade>
  );
};

export default CustomTogglePanel;
