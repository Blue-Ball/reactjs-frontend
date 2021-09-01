import React, { FC } from "react";

import Typography from "@e-group/material/Typography";

import CheckImg from "static/img/check.png";

interface Props {
  text: string;
}

const BasicServiceItem: FC<Props> = (props) => {
  const { text } = props;

  return (
    <Typography variant="body1">
      <img src={CheckImg} alt="Check" decoding="async" />
      {text}
    </Typography>
  );
};

export default BasicServiceItem;
