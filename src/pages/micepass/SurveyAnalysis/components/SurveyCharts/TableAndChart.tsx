import React, { FC, useEffect, } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Question } from './types';
import Charts from './Charts';
import Table from './Table';

const useStyles = makeStyles(() => ({
  root: {
    
  },
  card: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.6rem",
    // marginBottom: theme.spacing(6),
    paddingBottom: "15px",
    paddingTop: "15px",
  }, 
}));

export interface TableAndChartProps {
  question: Question;
  totalResponses: number;
}

const TableAndChart: FC<TableAndChartProps> = ({
  question,
  totalResponses,
}) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = React.useState(false);
  const resizeFunction = () => {
    // console.log("width:"+window.innerWidth);
    if ((window.innerWidth < 960)
    || (window.innerWidth<1410 && window.innerWidth>960)) {
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
    <>
      <Grid item xs={12} sm={7} className={classes.card} style={isMobile?{marginLeft:'0px',marginRight:'0px'}:{marginLeft:'24px'}}>
        <Table question={question} totalResponses={totalResponses} />
      </Grid>      
      <Grid item xs={12} sm={5} className={classes.card} style={isMobile?{marginLeft:'0px',marginRight:'0px'}:{maxWidth:'38%',marginRight:'24px',}}>      
         <Charts question={question} />
      </Grid>
    </>
  );
};
// }) => (
//     <>
//       <Grid item xs={12} sm={6}>
//         <Table question={question} totalResponses={totalResponses} />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Charts question={question} />
//       </Grid>
//     </>
//   );

export default TableAndChart;
