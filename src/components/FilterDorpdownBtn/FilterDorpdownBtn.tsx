import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import DropDown from "@e-group/material/DropDown";

const useStyles = makeStyles({
  dropdownBtn: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    "& .MuiButtonGroup-root": {
      height: "54px",
    },
    "& .MuiButtonGroup-grouped": {
      border: "0",
      borderRadius: "5px",
      fontWeight: "normal",
      fontFamily: `Poppins-Light,"Segoe UI",SegoeUI,
        "Microsoft JhengHei",微軟正黑體,
        "SF Pro TC","SF Pro Display","SF Pro Icons",
        "PingFang TC","Helvetica Neue",
        "Helvetica","Arial",sans-serif !important`,
    },
  },
});

const FilterDorpdownBtn: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const sortList = [
    // 'Sort by',
    "Most Relavent",
    "Update date",
  ];

  return (
    <DropDown options={sortList} select className={classes.dropdownBtn}>
      Sort by
    </DropDown>
  );
};

export default FilterDorpdownBtn;
