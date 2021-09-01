import React, { MouseEvent, CSSProperties } from "react";

import useScrollPosition from "@e-group/hooks/useScrollPosition";

import { Paper, Box, Grid } from "@e-group/material";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ToolButton from "./ToolButton";

export type Tool = "createQuestion" | "createTitleDescription";

export type Ref = HTMLDivElement;
export interface SurveyToolbarProps {
  className?: string;
  style?: CSSProperties;
  tools?: Tool[];
  onCreateQuestionClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onCreateTitleDescription?: (e: MouseEvent<HTMLButtonElement>) => void;
  defaultTop?: number;
}

const SurveyToolbar = React.forwardRef<Ref, SurveyToolbarProps>(
  (props, ref) => {
    const {
      tools = ["createQuestion", "createTitleDescription"],
      onCreateQuestionClick,
      onCreateTitleDescription,
      style,
      defaultTop = 0,
      ...other
    } = props;
    const [top, setTop] = React.useState(defaultTop);

    useScrollPosition(({ prevPos, currPos }) => {
      const scrollDistance = prevPos.y - currPos.y;
      setTop((val) => val + scrollDistance);
    }, []);

    const renderTools = () =>
      tools.map((el) => {
        switch (el) {
          case "createQuestion":
            return (
              <ToolButton
                key={el}
                title="新增問題"
                onClick={onCreateQuestionClick}
                icon={<AddCircleOutlineIcon />}
              />
            );
          case "createTitleDescription":
            return (
              <ToolButton
                key={el}
                title="新增標題與說明"
                onClick={onCreateTitleDescription}
                icon={<TextFieldsIcon />}
              />
            );
          default:
            return undefined;
        }
      });

    return (
      <Paper
        ref={ref}
        style={{
          ...style,
          top,
        }}
        {...other}
      >
        <Box p={1}>
          <Grid container direction="column" spacing={1}>
            {renderTools()}
          </Grid>
        </Box>
      </Paper>
    );
  }
);

export default SurveyToolbar;
