import React from "react";

import { Box } from "@e-group/material";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
