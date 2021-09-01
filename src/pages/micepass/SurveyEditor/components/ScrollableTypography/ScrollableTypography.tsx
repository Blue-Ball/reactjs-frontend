import { Typography, withStyles } from "@material-ui/core";

export default withStyles(() => ({
  root: {
    whiteSpace: "nowrap",
    WebkitOverflowScrolling: "touch",
    overflowX: "scroll",
    scrollbarWidth: "none", // Firefox
    "&::-webkit-scrollbar": {
      display: "none", // Safari + Chrome
    },
  },
}))(Typography);
