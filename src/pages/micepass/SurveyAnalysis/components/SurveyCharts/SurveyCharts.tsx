import React, { forwardRef, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import { Grid, GridProps } from '@material-ui/core';
import Section from './Section';
import { Question } from './types';

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.35rem",
    marginBottom: theme.spacing(3),
    "& .MuiPaper-root": {
      paddingLeft:'0px',
      paddingRight:'0px',
      borderRadius: "0.7rem",
    },
  },
}));
export interface SurveyChartsProps {
  data: Question[];
  totalResponses: number;
  GridItemProps?: GridProps;
}

const SurveyCharts = forwardRef<HTMLDivElement, SurveyChartsProps>(
  (props, ref) => {
    const { data, totalResponses, GridItemProps } = props;
    const classes = useStyles();

    const [isMobile, setIsMobile] = React.useState(false);
    const resizeFunction = () => {
      if (window.innerWidth < 960) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    useEffect(() => {
      resizeFunction();
      window.addEventListener("resize", resizeFunction);

      return function cleanup() {
        window.removeEventListener("resize", resizeFunction);
      };
    }, []);

    return (
      <Grid container spacing={2} ref={ref} style={{justifyContent: 'space-between',}}>
        {data.map((question) => (
          <Grid key={question.questionId} item 
            xs={(question.questionType === "shortText" && !isMobile) ? 6 : 12} 
            {...GridItemProps} 
            className={classes.card} 
            // style={(question.questionId === "shortText1") ? {padding:0, maxWidth:'49%',marginRight:'15px'} :{padding:0}}
            // style={(question.questionType === "shortText") ? {padding:0, maxWidth:'49%'} :{padding:0}}
            style={(question.questionType === "shortText" && !isMobile) ? {padding:0, maxWidth:'49%'} :{padding:0}}
            >
            <Section question={question} totalResponses={totalResponses} />
          </Grid>
        ))}
      </Grid>
    );
  }
);

export default SurveyCharts;
