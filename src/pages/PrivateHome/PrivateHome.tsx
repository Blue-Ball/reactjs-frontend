import React from "react";

import FixedCenter from "@e-group/material-layout/FixedCenter";
import { CircularProgress } from "@material-ui/core";
import usePosts from "utils/usePosts";

const PrivateHome = () => {
  const { data: posts } = usePosts();

  if (!posts) {
    return (
      <FixedCenter>
        <CircularProgress />
      </FixedCenter>
    );
  }

  return (
    <div>
      Posts:
      <br />
      {JSON.stringify(posts, undefined, 4)}
    </div>
  );
};

export default PrivateHome;
