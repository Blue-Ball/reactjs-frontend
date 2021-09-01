import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { useLocation, useHistory } from 'react-router';
import {
  makeStyles,
  IconButton,
  Tooltip,
  Icomoon,
  Divider,
} from '@e-group/material';
import BackAppbar from '@e-group/material-module/BackAppbar';
import ScrollableTypography from './components/ScrollableTypography'
import SurveyHeader from './components/SurveyHeader'

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    '& .MuiInput-root': theme.typography.h3,
  },
  toolbar: {
    color: 'black',
    background: 'transparent',
    '& div':{
      marginRight: 0,
    },
    '& div button span svg':{
      fontSize: '38px',
      color: '#0474AD',
    },
  },
  grow: {
    flexGrow: 1,
  },
  contentBody: {
    padding: theme.spacing(2, 3),
  },
  toolbarIcon: {
    fontSize: '48px',
  }
}));

export type Ref = HTMLDivElement;
export interface SurveyEditorBodyProps {
  className?: string;
  children?: ReactNode;
}

const SurveyEditorBody = React.forwardRef<Ref, SurveyEditorBodyProps>(
  (props, ref) => {
    const {
      className,
      children,
      ...other
    } = props;
    
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  return (
    <div className={clsx(className, classes.root)} ref={ref} {...other}>
    <SurveyHeader>
      <BackAppbar
        push={history.push}
        go={history.go}
        pointerTrigger={location}
        position="relative"
        className={classes.toolbar}
        elevation={0}
        >
        <ScrollableTypography variant="h4">
          surveyName
        </ScrollableTypography>
        <div className={classes.grow} />
        <Tooltip title="取得問卷連結">
          <IconButton
            size="small">
            <Icomoon 
              className={classes.toolbarIcon}
              type="settings-circle" />
          </IconButton>
          
        </Tooltip>
        <Tooltip title="問卷設定">
          <IconButton
          size="small">
            <Icomoon
              className={classes.toolbarIcon}
              type="link" />
          </IconButton>
        </Tooltip>
      </BackAppbar>
      <Divider />
      {children}
    </SurveyHeader>
    </div>
  )
});

export default SurveyEditorBody;
