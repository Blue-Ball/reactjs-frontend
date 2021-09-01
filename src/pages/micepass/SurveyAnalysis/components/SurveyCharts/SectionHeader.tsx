// import React, { FC, MouseEvent } from 'react';
import React, { FC } from 'react';
// import { Typography, makeStyles, Theme, IconButton, Tooltip } from '@material-ui/core';
import { Typography, makeStyles, Theme, } from '@material-ui/core';
// import ImageIcon from '@material-ui/icons/Image';
import { Question } from './types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(2),
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  grow: {
    flexGrow: 1,
  },
  card: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "20px",
    padding: "6.4px 20px",
    fontSize: "0.875rem",
    // borderColor: "white",
  },
}));

export interface SectionHeaderProps {
  question: Question;
  totalResponses: number;
  // onDownloadImageClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  question,
  totalResponses,
  // onDownloadImageClick,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{borderBottom: "2px solid #e3e6f0",paddingBottom: "17px"}}>
      <Typography variant="h6">{question.questionName}</Typography>
      <div className={classes.grow} />
      {/* <Tooltip title="下載圖片">
        <IconButton disableRipple onClick={onDownloadImageClick} color="primary">
          <ImageIcon />
        </IconButton>
      </Tooltip> */}
      <div className={classes.card}>
        <Typography variant="body2" style={{}}>
        The number of respondents had:{question.questionCount}/{totalResponses}person
        </Typography>
      </div>      
    </div>
  );
};

export default SectionHeader;
