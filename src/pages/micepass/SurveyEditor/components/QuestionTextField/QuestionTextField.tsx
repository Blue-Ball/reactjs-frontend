import { withStyles } from "@e-group/material";
import TextField from "@e-group/material/TextField";

export default withStyles((theme) => {
  const light = theme.palette.type === "light";
  const bottomLineColor = light
    ? "rgba(0, 0, 0, 0.42)"
    : "rgba(255, 255, 255, 0.7)";
  return {
    root: {
      "& .MuiInput:hover": {
        color: "red",
      },
      "& .MuiInput-underline:before": {
        opacity: 0,
        transition: theme.transitions.create("opacity", {
          duration: theme.transitions.duration.shorter,
        }),
      },
      "& .MuiInput-underline:hover:not($disabled):before": {
        opacity: 1,
        borderBottom: `1px solid ${theme.palette.text.secondary}`,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          borderBottom: `1px solid ${bottomLineColor}`,
        },
      },
    },
  };
})(TextField);
