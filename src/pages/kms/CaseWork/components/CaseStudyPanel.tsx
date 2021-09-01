import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TogglePanel from "@e-group/material/TogglePanel";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import FileUploadDropzone from "@e-group/material-lab/FileUploadDropzone";
import useInputRefActions from "@e-group/hooks/useInputRefActions";
import SearchFormGroup from "components/SearchFormGroup";
import Hidden from "@material-ui/core/Hidden";
import Pagination from "@material-ui/lab/Pagination";
import { Box, Button } from "@e-group/material";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import MenuItem from "@material-ui/core/MenuItem";

import FilePreviewModal from "components/Modals/FilePreviewModal";
import StyledHeaderMenu from "components/StyledCard/StyledHeaderMenu";

interface Props {
  index: number;
  value: number;
  handleOpenLeaveCommentModal: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "0.35rem",
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    "& .MuiCardHeader-title": {
      fontSize: "1.25rem",
      color: "#444",
      lineHeight: "1.2",
      fontWeight: "bold",
    },
    "& .MuiCardHeader-root": {
      paddingBottom: "0",
      "& .MuiCardHeader-action": {
        display: "flex",
        alignItems: "center",
      },
    },
    "& .MuiCardContent-root": {
      paddingTop: "0",
    },
  },
  fileInfoTxt: {
    color: "#858796",
    fontSize: "1rem",
    "& span: nth-child(2)": {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },
  blueContainedBtn: {
    margin: "2px",
    "& .MuiButtonBase-root": {
      borderColor: "#4e73df",
      backgroundColor: "#4e73df",
      color: "white",
      fontWeight: "normal",
    },
  },
  greyContainedBtn: {
    margin: "2px",
    "& .MuiButtonBase-root": {
      borderColor: "#858796",
      backgroundColor: "#858796",
      color: "white",
      fontWeight: "normal",
    },
  },
  pendingReview: {
    color: "#cb9f25",
  },
  requestChanges: {
    color: "#70be58",
  },
}));

const CaseStudyPanel: React.FC<Props> = (props) => {
  const { index, value, handleOpenLeaveCommentModal } = props;

  const classes = useStyles();

  const [isUploading, setIsUploading] = useState(false);
  const [completed, setCompleted] = useState(0);
  const { inputEl, clearValue } = useInputRefActions();

  const handleUploadFiles = useCallback(() => {
    setIsUploading(true);

    let progress = 0;
    const upload = setInterval(() => {
      if (progress < 100) {
        progress += 10;
        setCompleted(progress);
      } else {
        clearInterval(upload);
        clearValue();
        setCompleted(0);
        setIsUploading(false);
      }
    }, 500);
  }, [clearValue]);

  const [openFilePreviewModal, setOpenFilePreviewModal] = React.useState(false);
  const handleOpenFilePreviewModal = () => {
    setOpenFilePreviewModal(true);
  };
  const handleCloseFilePreviewModal = () => {
    setOpenFilePreviewModal(false);
  };

  return (
    <Grid item xs={12}>
      <TogglePanel index={index} value={value}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FileUploadDropzone
              multiple
              onDrop={handleUploadFiles}
              uploading={isUploading}
              completed={completed}
              inputRef={inputEl}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Hidden smDown>
                <Grid item xs={12} md={9} />
              </Hidden>
              <Grid item xs={12} md={3}>
                <SearchFormGroup />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="File Name"
                action={
                  <StyledHeaderMenu>
                    <MenuItem onClick={handleOpenLeaveCommentModal}>
                      Audit
                    </MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </StyledHeaderMenu>
                }
              />
              <CardContent>
                <Typography variant="body1" className={classes.fileInfoTxt}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. \
                </Typography>
                <Box mt={2} mb={1}>
                  <Button
                    rounded
                    variant="contained"
                    className={classes.blueContainedBtn}
                  >
                    Download
                  </Button>
                  <Button
                    rounded
                    variant="contained"
                    onClick={handleOpenFilePreviewModal}
                    className={classes.greyContainedBtn}
                  >
                    Preview
                  </Button>
                </Box>
                <Typography variant="body1" className={classes.fileInfoTxt}>
                  2021-08-17 11:00 Lastest Updated
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="File Name"
                action={
                  <>
                    <Typography
                      variant="body1"
                      className={classes.pendingReview}
                    >
                      Pending Review
                    </Typography>
                    <StyledHeaderMenu>
                      <MenuItem onClick={handleOpenLeaveCommentModal}>
                        Audit
                      </MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </StyledHeaderMenu>
                  </>
                }
              />
              <CardContent>
                <Typography variant="body1" className={classes.fileInfoTxt}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. \
                </Typography>
                <Box mt={2} mb={1}>
                  <Button
                    rounded
                    variant="contained"
                    className={classes.blueContainedBtn}
                  >
                    Download
                  </Button>
                  <Button
                    rounded
                    variant="contained"
                    onClick={handleOpenFilePreviewModal}
                    className={classes.greyContainedBtn}
                  >
                    Preview
                  </Button>
                </Box>
                <Typography variant="body1" className={classes.fileInfoTxt}>
                  2021-08-17 11:00 Lastest Updated
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="File Name"
                action={
                  <>
                    <Typography
                      variant="body1"
                      className={classes.requestChanges}
                    >
                      Request Changes
                    </Typography>
                    <StyledHeaderMenu>
                      <MenuItem onClick={handleOpenLeaveCommentModal}>
                        Audit
                      </MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </StyledHeaderMenu>
                  </>
                }
              />
              <CardContent>
                <Typography variant="body1" className={classes.fileInfoTxt}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. \
                </Typography>
                <Box mt={2} mb={1}>
                  <Button
                    rounded
                    variant="contained"
                    className={classes.blueContainedBtn}
                  >
                    Download
                  </Button>
                  <Button
                    rounded
                    variant="contained"
                    onClick={handleOpenFilePreviewModal}
                    className={classes.greyContainedBtn}
                  >
                    Preview
                  </Button>
                </Box>
                <Typography variant="body1" className={classes.fileInfoTxt}>
                  2021-08-17 11:00 Lastest Updated
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="File Name"
                action={
                  <StyledHeaderMenu>
                    <MenuItem onClick={handleOpenLeaveCommentModal}>
                      Audit
                    </MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </StyledHeaderMenu>
                }
              />
              <CardContent>
                <Typography variant="body1" className={classes.fileInfoTxt}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. \
                </Typography>
                <Box mt={2} mb={1}>
                  <Button
                    rounded
                    variant="contained"
                    className={classes.blueContainedBtn}
                  >
                    Download
                  </Button>
                  <Button
                    rounded
                    variant="contained"
                    onClick={handleOpenFilePreviewModal}
                    className={classes.greyContainedBtn}
                  >
                    Preview
                  </Button>
                </Box>
                <Typography variant="body1" className={classes.fileInfoTxt}>
                  2021-08-17 11:00 Lastest Updated
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Pagination count={6} variant="outlined" shape="rounded" />
            </Box>
          </Grid>
        </Grid>
      </TogglePanel>
      <FilePreviewModal
        open={openFilePreviewModal}
        handleClose={handleCloseFilePreviewModal}
      />
    </Grid>
  );
};

export default CaseStudyPanel;
