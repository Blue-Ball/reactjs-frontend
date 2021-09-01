import React from 'react';

import {
  makeStyles,
  Divider,
} from '@e-group/material';
import Typography from "@e-group/material/Typography";
import Card from "@material-ui/core/Card"

const useStyles = makeStyles((theme) => ({
  root: {},
  titlePanel: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.35rem",
    padding: theme.spacing(2, 3),
  },
  
  subTitle: {
    color: '#6B6B6B',
    fontSize: '15px',
    lineHeight: 2,
    marginTop: theme.spacing(2),
  },
  title: {
    color: "#0474AD",
    fontSize: "20px",
    lineHeight: 2,
    fontWeight: 'bold'
  },
  description: {
    color: "#505050",
    fontSize: "18px",
    lineHeight: 2,
    fontWeight: 500
  },
 

}));


const SurveyEditorTitle = () => {
  const classes = useStyles();

  return (
    <Card className={classes.titlePanel}>
      <Typography
        className={classes.subTitle}
      >
        Form Title
      </Typography>
      <Typography
        className={classes.title}
      >
        Questionnaire Name
      </Typography>
      <Divider/>
      <Typography
        className={classes.subTitle}
      >
        Questionnaire description
      </Typography>
      <Typography
        className={classes.description}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typography>
      <Divider/>
    </Card>
  )
};

export default SurveyEditorTitle;
