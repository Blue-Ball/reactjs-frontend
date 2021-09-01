import React, { ReactNode, MouseEvent, FC } from "react";

import { Grid, IconButton, Tooltip } from "@e-group/material";

export interface ToolButtonProps {
  title: string;
  icon: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ToolButton: FC<ToolButtonProps> = ({
  title,
  icon,
  onClick,
  ...other
}) => (
  <Grid item {...other}>
    <Tooltip title={title}>
      <IconButton size="small" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  </Grid>
);

export default ToolButton;
