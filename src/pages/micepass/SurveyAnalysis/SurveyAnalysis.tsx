import React, { useRef, useEffect } from 'react';
// import { useLocation, useHistory } from 'react-router';
import {
  Container,
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  Icomoon,
  Box,
  Grid,
} from '@e-group/material';

import Main from '@e-group/material-layout/Main';
// import BackAppbar from '@e-group/material-module/BackAppbar';
import Logo from 'components/Logo';
import Divider from "@material-ui/core/Divider";
import barIcon from 'static/img/bar-icon.svg';
import SurveyCharts from './components/SurveyCharts';
import data from './data';
import UserNavbar from '../Usernavbar/UserNavbar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navbar: {
    background: "transparent",
    borderBottom: "solid 1px #dbdde3",
    paddingLeft: '20px',
  },
  logoBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    // [theme.breakpoints.down("xs")]: {
    //   marginBottom: theme.spacing(3),
    // },
  },
  logo: {
    width: 42,
    height: 42,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  backsurveyicon: {
    color: '#0dcfef',
    fontWeight: 600,
  },
  backsurvey: {
    color: '#0dcfef',
  },
  organizerDropdown: {
    boxShadow: "none",
    "& .MuiButtonGroup-root": {
      height: "auto",
      minWidth: "117px",
    },
    "& .MuiButtonBase-root": {
      fontSize: "0.875rem",
      borderColor: "white",
      padding: "6.4px 20px",
    },
    "& .MuiButtonGroup-grouped": {
      borderRadius: "20px",
      backgroundColor: "white",
    },
    "& .MuiButton-label": {
      color: "#8c8c90",
    },
  },
  divider: {
    height: "2.375rem",
    margin: "auto 1rem",
    "@media screen and (max-width: 400px)": {
      margin: "auto 4px",
    },
  },
  show: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  boxButton: {
    marginBottom: theme.spacing(3),
    display: "flex",
    flexWrap: "wrap",
    "& [class^='EgButton-root']:first-child": {
      marginRight: theme.spacing(1),
    },
    "& [class^='EgButton-root']": {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      "& [class^='EgButton-root']:first-child": {
        marginRight: 0,
      },
      "& [class^='EgButton-root']": {
        display: "block",
        marginBottom: theme.spacing(1),
      },
      "& button": {
        width: "100%",
      },
    },
  },
}));

const SurveyAnalysis = () => {
  // const location = useLocation();
  // const history = useHistory();
  const itemRefs = useRef<HTMLDivElement[]>([]);
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
    <>
      {/* <BackAppbar
        push={history.push}
        go={history.go}
        pointerTrigger={location}
        position="static"
        elevation={0}
      >
        <Typography variant="h6">SurveyName</Typography>
      </BackAppbar> */}
      <AppBar elevation={0} position="static" className={classes.navbar}>
        <Toolbar>
          <Box className={classes.logoBox}>
            <Logo
              variant="rounded"
              size="small"
              className={classes.logo}
            />
          </Box>
          <Grid direction="row" alignItems="center" className={isMobile?classes.hide:classes.show} >
            <img src={barIcon} alt="" />
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <Button 
              href="/"
              >
              <Icomoon className={classes.backsurveyicon} type="arrow-left" />
              <Typography 
                variant="h6"
                className={classes.backsurvey} 
                >
                SurveyName
              </Typography>
            </Button>
          </Grid>
          <div className={classes.grow} />          
          <UserNavbar />
        </Toolbar>
      </AppBar>
      <Main>
        <Container style={{ maxWidth: 1920,padding:'26px 50px 20px 50px' }}>
          <SurveyCharts
            data={data}
            totalResponses={1}
            GridItemProps={{
              ref: (ref) => {
                if (ref && itemRefs.current.length <= data.length) {
                  itemRefs.current.push(ref);
                }
              },
            }}
          />          
        </Container>
        <Container style={{ maxWidth: 1920,padding:'0px 50px 0px 40px' }}>
          <Grid item>
            <Box className={classes.boxButton}>
              <Button
                variant="contained"
                rounded
                color="info"
                startIcon={<Icomoon type="pdf" />}
                style={{margin:'10px'}}
              >
                Download Pdf
              </Button>
              <Button
                variant="contained"
                rounded
                color="warning"
                startIcon={<Icomoon type="save" />}
                style={{margin:'10px'}}
              >
                General Form
              </Button>
              <Button
                variant="contained"
                rounded
                color="success"
                startIcon={<Icomoon type="excel" />}
                style={{margin:'10px'}}
              >
                Download spss
              </Button>
            </Box>
          </Grid>
        </Container>
      </Main>
    </>
  );
};

export default SurveyAnalysis;
