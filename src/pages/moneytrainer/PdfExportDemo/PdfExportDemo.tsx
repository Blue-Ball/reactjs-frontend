import React from "react";
import { format } from "@e-group/utils/dateUtils";
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import PrintIcon from "@material-ui/icons/Print";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import PdfPrintBox from "@e-group/material/PdfPrintBox";
import PdfToolsbar from "@e-group/material/PdfToolsbar";
import PdfContainer from "@e-group/material/PdfContainer";
import PdfHeader from "@e-group/material/PdfHeader";
import PdfFooter from "@e-group/material/PdfFooter";
import useMediaPrint from "@e-group/hooks/useMediaPrint";
import outline from "./outline.json";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginLeft: theme.spacing(1),
  },
  pdfContainer: {
    lineHeight: "30px",
    whiteSpace: "pre-wrap",
    "& .MuiGrid-container": {
      border: "1px solid #000",
    },
    "& $outlineList": {
      border: "none",
      padding: 10,
    },
  },
  outlineList: {},
  container: {
    padding: 10,
  },
  outlineDetailList: {
    "& .MuiGrid-item": {
      padding: 10,
      borderRight: "1px solid #000",
    },
    "& .MuiGrid-item:last-child": {
      borderRight: "none",
    },
  },
  outlineW: {
    padding: 10,
  },
  pdfHeader: {
    borderBottom: "1px solid #000",
    padding: "10px 0",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
  },
  pdfFooter: {
    height: 60,
  },
}));

const PdfExportDemo = () => {
  const classes = useStyles();
  const {
    outlineTitle,
    outlinePrecautions,
    memberName,
    memberRole,
    courseHours,
    courseExecuteHours,
    courseDatetimeString,
    courseTopic,
    courseStudentType,
    courseStudentTypeNote,
    outlineTarget,
    outlineDetailList,
  } = outline;

  const { itemRefs, handleMediaPrint, handleSavePdf } =
    useMediaPrint("pdf-print-box");

  return (
    <>
      <PdfPrintBox id="pdf-print-box" />
      <PdfToolsbar>
        <Button
          className={classes.button}
          variant="contained"
          disableElevation
          onClick={handleMediaPrint}
          startIcon={<PrintIcon />}
        >
          Print
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => handleSavePdf("test.pdf")}
          startIcon={<PictureAsPdfIcon />}
        >
          Download PDF
        </Button>
      </PdfToolsbar>
      <PdfContainer
        ref={(ref) => {
          if (ref) {
            itemRefs.current.push(ref);
          }
        }}
        className={classes.pdfContainer}
      >
        <PdfHeader className={classes.pdfHeader}>
          <img src="/logo_m.png" alt="" />
          <div style={{ flexGrow: 1 }} />

          <Box className={classes.subtitle}>???????????????????????????</Box>
        </PdfHeader>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {outlineTitle}
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="h6">???????????????</Typography>
          </Grid>
          <Grid item xs={12}>
            {outlinePrecautions}
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <b>?????????</b>
            {memberName}
          </Grid>
          <Grid item xs={12}>
            <b>???????????????</b>
            {Number(memberRole) === 1 ? "???" : "???"}??????{" "}
            {Number(memberRole) === 2 ? "???" : "???"}??????{" "}
            {Number(memberRole) === 3 ? "???" : "???"}????????????{" "}
            {Number(memberRole) === 4 ? "???" : "???"}????????????/??????/??????
          </Grid>
          <Grid item xs={12}>
            <b>????????????????????????</b>
            {courseHours}??????
          </Grid>
          <Grid item xs={12}>
            <b>??????????????????????????????</b>
            {courseExecuteHours}??????
          </Grid>
          <Grid item xs={12}>
            <b>????????????/?????????</b>
            {courseDatetimeString}
          </Grid>
          <Grid item xs={12}>
            <b>???????????????</b>
            {courseTopic}
          </Grid>
          <Grid item xs={12}>
            <b>???????????????</b>
            {courseStudentType} {courseStudentTypeNote}
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="h6">
              ???????????????????????????????????????????????????
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              ??? ?????????????????????
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.outlineW}>
            {outlineTarget}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              ??? ???????????????
            </Typography>
          </Grid>
          <Grid item container xs={12} className={classes.outlineList}>
            <Grid item container className={classes.outlineDetailList}>
              <Grid item xs={2}>
                ?????????
              </Grid>
              <Grid item xs={2}>
                ??????
              </Grid>
              <Grid item xs={6}>
                ????????????
              </Grid>
              <Grid item xs={2}>
                ????????????
              </Grid>
            </Grid>
            {outlineDetailList.map((item) => (
              <Grid
                item
                container
                key={item.outlineDetailId}
                className={classes.outlineDetailList}
              >
                <Grid item xs={2}>
                  {format(item.outlineDetailStartDateString, "hh:mm")} -{" "}
                  {format(item.outlineDetailEndDateString, "hh:mm")}
                </Grid>
                <Grid item xs={2}>
                  {item.outlineDetailTopic}
                </Grid>
                <Grid item xs={6}>
                  {item.outlineDetailContent}
                </Grid>
                <Grid item xs={2}>
                  {item.outlineDetailTypeAndTool}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <PdfFooter className={classes.pdfFooter}>
          <Typography variant="body2" className={classes.subtitle}>
            ??????????????????????????? ????????????.????????????
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Typography variant="body2" align="right" />
        </PdfFooter>
      </PdfContainer>
    </>
  );
};

export default PdfExportDemo;
