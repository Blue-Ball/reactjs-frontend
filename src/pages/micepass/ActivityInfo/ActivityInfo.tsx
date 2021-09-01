import React from "react";
import clsx from "clsx";
import ResponsiveEmbed from "@e-group/material-module/ResponsiveEmbed";
import Container from "@e-group/material/Container";
import Paper from "@e-group/material/Paper";
import Segment from "@e-group/material/Segment";
import SegmentContent from "@e-group/material/SegmentContent";
import SegmentHeader from "@e-group/material/SegmentHeader";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import RatioImage from "@e-group/material/RatioImage";
import Tabs from "@e-group/material/Tabs";
import Tab from "@e-group/material/Tab";
import { makeStyles } from "@material-ui/core";
import useTab from "@e-group/hooks/useTab";
import ActivityLayout from "components/ActivityLayout";
import Logo from "components/Logo";
import { Button, Icomoon, Box } from "@e-group/material";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(4),
  },
  subHeader: {
    borderBottom: 0,
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: 0,
  },
  map: {
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  paper: {
    boxShadow: theme.egShadows[1],
    padding: theme.spacing(3),
    color: "#898989",
  },
  topBoxButton: {
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "flex-end",
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
  logo: {
    width: 55,
    height: 55,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  paperOrg: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  iconInfo: {
    fontSize: 50,
  },
  paperInfo: {
    display: "flex",
  },
  logoBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(3),
    },
  },
  titleHeadIconBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  titleHeadIconText: {
    paddingLeft: theme.spacing(1),
    "& span": {
      color: "#898989",
      fontSize: 12,
    },
  },
  datelist: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  gridIforBox: {
    display: "flex",
    flexDirection: "column",
  },
  paperFlex1: {
    flex: 1,
  },
  buttonFull: {
    "& button": {
      padding: "10px 20px",
      width: 220,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  attachedList: {
    display: "flex",
    marginBottom: theme.spacing(1),
    alignItems: "center",
  },
  attachedIconBox: {
    marginRight: theme.spacing(1),
    display: "inline-flex",
    boxShadow: theme.egShadows[1],
    padding: 3,
    borderRadius: 100,
    backgroundColor: "#dadada",
  },
  attachedIcon: {
    fontSize: 30,
  },
}));

const ActivityInfo = () => {
  const classes = useStyles();
  const { value, handleChange } = useTab("ActivityInfo");

  return (
    <ActivityLayout>
      <Container>
        <Paper className={classes.main}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <RatioImage
                src="https://placeimg.com/840/620/any"
                ratio="840:620"
                alt="thumb"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Grid
                container
                item
                direction="column"
                justifyContent="space-between"
                style={{ height: "100%" }}
              >
                <Grid item>
                  <Box className={classes.topBoxButton}>
                    <Button
                      variant="contained"
                      rounded
                      color="primary"
                      startIcon={<Icomoon type="people-setting_2" />}
                    >
                      Sharing Activities
                    </Button>
                    <Button
                      variant="contained"
                      rounded
                      color="warning"
                      startIcon={<Icomoon type="people-setting_2" />}
                    >
                      Cantact the orgonizer
                    </Button>
                  </Box>
                  <Box mb={1}>
                    <Typography variant="h5" fontWeight={700}>
                      Video Game Show
                    </Typography>
                  </Box>
                  <Box mb={1}>
                    <Paper className={clsx(classes.paper, classes.paperInfo)}>
                      <Icomoon
                        type="people-setting_2"
                        color="info"
                        className={classes.iconInfo}
                      />
                      <Box pl={1}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages Lorem Ipsum.
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item>
                  <Box mb={1}>
                    <Paper className={clsx(classes.paper, classes.paperOrg)}>
                      <Box className={classes.logoBox}>
                        <Logo
                          variant="rounded"
                          size="small"
                          className={classes.logo}
                        />
                        <span>Test org</span>
                      </Box>
                      <Box>
                        <Button
                          className={classes.buttonFull}
                          size="large"
                          variant="contained"
                          rounded
                          color="info"
                        >
                          Full
                        </Button>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Tabs
                indicatorColor="primary"
                textColor="primary"
                value={value}
                variant="scrollable"
                scrollButtons="auto"
                onChange={(_, v) => handleChange(v)}
              >
                <Tab label="場次1" />
                <Tab label="場次2" />
                <Tab label="場次3" />
              </Tabs>
            </Grid>
            {value === 0 && (
              <>
                <Grid item xs={12} sm={6} className={classes.gridIforBox}>
                  <Box className={classes.titleHeadIconBox}>
                    <Icomoon
                      type="people-setting_2"
                      className={classes.iconInfo}
                    />
                    <Box className={classes.titleHeadIconText}>
                      <Typography variant="h6" fontWeight={700}>
                        Scene narration
                      </Typography>
                      <span />
                    </Box>
                  </Box>
                  <Paper className={clsx(classes.paper, classes.paperFlex1)}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages Lorem Ipsum.
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.gridIforBox}>
                  <Box className={classes.titleHeadIconBox}>
                    <Icomoon
                      type="people-setting_2"
                      className={classes.iconInfo}
                    />
                    <Box className={classes.titleHeadIconText}>
                      <Typography variant="h6" fontWeight={700}>
                        Show time
                      </Typography>
                      <span />
                    </Box>
                  </Box>
                  <Paper className={clsx(classes.paper, classes.paperFlex1)}>
                    <ul className={classes.datelist}>
                      <li>2021-10-10 10:20:00 AM ~ 12:00:00 PM</li>
                      <li>2021-10-10 10:20:00 AM ~ 12:00:00 PM</li>
                    </ul>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  {/*
                      Icon 請使用元件開發，請參考
                      https://egroupai.github.io/egroup-material/?path=/story/components-icomoon--default
                    */}
                  <Box className={classes.titleHeadIconBox}>
                    <Icomoon
                      type="people-setting_2"
                      className={classes.iconInfo}
                    />
                    <Box className={classes.titleHeadIconText}>
                      <Typography variant="h6" fontWeight={700}>
                        Event location
                      </Typography>
                      <span>110台北市信義區信義路五段7號</span>
                    </Box>
                  </Box>
                  <ResponsiveEmbed ratio="1700:550" className={classes.map}>
                    <iframe
                      className={classes.iframe}
                      frameBorder="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0024776506575!2d121.56235031548083!3d25.033989983972383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e90233d5%3A0xf872050c112645cb!2zQXBwbGUg5Y-w5YyXMTAx!5e0!3m2!1szh-TW!2stw!4v1627718384110!5m2!1szh-TW!2stw"
                      allowFullScreen
                      title="google map address"
                    />
                  </ResponsiveEmbed>
                </Grid>
                <Grid item xs={12}>
                  <Segment>
                    <SegmentHeader>
                      <Typography variant="h5" fontWeight={700}>
                        Activity description
                      </Typography>
                    </SegmentHeader>
                    <SegmentContent>
                      這裡不用寫樣式因為是從 API 撈資料
                    </SegmentContent>
                  </Segment>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.titleHeadIconBox}>
                    <Icomoon
                      type="people-setting_2"
                      className={classes.iconInfo}
                    />
                    <Box className={classes.titleHeadIconText}>
                      <Typography variant="h6" fontWeight={700}>
                        File download
                      </Typography>
                      <span />
                    </Box>
                  </Box>
                  <Paper className={classes.paper}>
                    <Grid container>
                      {[
                        { id: 1, name: "file23.png" },
                        { id: 2, name: "file24.png" },
                        { id: 3, name: "file25.png" },
                        { id: 4, name: "file23.png" },
                        { id: 5, name: "file23.png" },
                        { id: 6, name: "file23.png" },
                      ].map((item) => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={2}
                          key={item.id}
                          className={classes.attachedList}
                        >
                          <Box className={classes.attachedIconBox}>
                            <Icomoon
                              type="people-setting_2"
                              className={classes.attachedIcon}
                            />
                          </Box>
                          {item.name}
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Grid>
              </>
            )}
          </Grid>
        </Paper>
      </Container>
    </ActivityLayout>
  );
};

export default ActivityInfo;
