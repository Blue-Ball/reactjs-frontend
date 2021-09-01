import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import Container from "@e-group/material/Container";
import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@e-group/material/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Badge from "@material-ui/core/Badge";
import Pagination from "@material-ui/lab/Pagination";
import MenuItem from "@material-ui/core/MenuItem";

import SearchFormGroup from "components/SearchFormGroup";
import FilterDorpdownBtn from "components/FilterDorpdownBtn";
import FilePreviewModal from "components/Modals/FilePreviewModal";
import EditTagModal from "components/Modals/EditTagModal";
import MultipleFilesModal from "components/Modals/MultipleFilesModal";
import FileInfoModal from "components/Modals/FileInfoModal";
import StyledHeaderMenu from "components/StyledCard/StyledHeaderMenu";

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    maxWidth: "unset",
  },
  pageTitle: {
    "& h5": {
      fontSize: "1.25rem",
      lineHeight: "1.2",
      color: "#5a5c69!important",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  shadow: {
    borderRadius: "0.35rem",
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
  },
  actionGroup: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "block !important",
    },
  },
  card: {
    borderRadius: "0.35rem",
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    "& .MuiCardHeader-avatar": {
      marginRight: "10px",
      "& .MuiBadge-badge": {
        position: "unset",
        transform: "unset",
        fontSize: "9px",
        padding: "5px 15px",
      },
    },
    "& .MuiCardHeader-title": {
      fontSize: "1.25rem",
      color: "#444",
      lineHeight: "1.2",
      fontWeight: "bold",
    },
  },
  blueOutlinedBtn: {
    margin: "2px",
    "& .MuiButtonBase-root": {
      borderColor: "#4e73df",
      color: "#4e73df",
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "#4e73df",
      color: "white !important",
    },
  },
  greenOutlinedBtn: {
    margin: "2px",
    "& .MuiButtonBase-root": {
      borderColor: "#48BA6A",
      color: "#48BA6A",
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "#48BA6A",
      color: "white !important",
    },
  },
  greyOutlinedBtn: {
    margin: "2px",
    "& .MuiButtonBase-root": {
      borderColor: "#5a5c69",
      color: "#5a5c69",
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "#5a5c69",
      color: "white !important",
    },
  },
  fileInfoTxt: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
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
  checkIcon: {
    marginRight: "50px",
    color: "#858796",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
    },
  },
  checkedIcon: {
    color: "#41A922",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media screen and (max-width: 320px)": {
      flexWrap: "wrap",
      flexDirection: "column",
      "& svg": {
        marginTop: "1rem !important",
      },
    },
  },
  txtBadge: {
    color: "white",
    borderRadius: "10px",
    backgroundColor: "#959595",
  },
  xlsBadge: {
    color: "white",
    borderRadius: "10px",
    backgroundColor: "#259b44",
  },
}));

const Files: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const [openFilePreviewModal, setOpenFilePreviewModal] = React.useState(false);
  const [openEditTagModal, setOpenEditTagModal] = React.useState(false);
  const [openMultiFileModal, setOpenMultiFileModal] = React.useState(false);
  const [openFileInfoModal, setOpenFileInfoModal] = React.useState(false);

  const [checkedList, setCheckedList] = useState([""]);

  const handleOpenFilePreviewModal = () => {
    setOpenFilePreviewModal(true);
  };
  const handleCloseFilePreviewModal = () => {
    setOpenFilePreviewModal(false);
  };

  const handleOpenEditTagModal = () => {
    setOpenEditTagModal(true);
  };
  const handleCloseEditTagModal = () => {
    setOpenEditTagModal(false);
  };

  const handleOpenMultiFileModal = () => {
    setOpenMultiFileModal(true);
  };
  const handleCloseMultiFileModal = () => {
    setOpenMultiFileModal(false);
  };

  const handleOpenFileInfoModal = () => {
    setOpenFileInfoModal(true);
  };
  const handleCloseFileInfoModal = () => {
    setOpenFileInfoModal(false);
  };

  const handleClickCheck = (id: string) => {
    if (checkedList.includes(id)) {
      setCheckedList(checkedList.filter((item) => item !== id));
    } else {
      setCheckedList([...checkedList, id]);
    }
  };

  return (
    <Box>
      <Container className={classes.containerFluid}>
        <Box mb={3} className={classes.pageTitle}>
          <Typography variant="h5" fontWeight={700}>
            Files
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Hidden smDown>
            <Grid item xs={12} md={6} lg={7} />
          </Hidden>
          <Grid item xs={12} md={2} lg={2} className={classes.actionGroup}>
            <IconButton onClick={handleOpenMultiFileModal}>
              <LocalOfferIcon />
            </IconButton>
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SearchFormGroup />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Hidden smDown>
            <Grid item xs={12} md={8} lg={9} />
          </Hidden>
          <Grid item xs={12} md={4} lg={3}>
            <FilterDorpdownBtn />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="File Name"
                avatar={<Badge badgeContent="PPT" color="secondary" />}
                action={
                  <StyledHeaderMenu>
                    <MenuItem onClick={handleOpenFileInfoModal}>
                      File Info
                    </MenuItem>
                    <MenuItem>ReUpload File</MenuItem>
                    <MenuItem>Delete File</MenuItem>
                  </StyledHeaderMenu>
                }
              />
              <CardContent className={classes.cardContent}>
                <Box>
                  <Box>
                    <Button
                      variant="outlined"
                      rounded
                      className={classes.blueOutlinedBtn}
                    >
                      Casework
                    </Button>
                    <Button
                      variant="outlined"
                      rounded
                      className={classes.greenOutlinedBtn}
                    >
                      Administration
                    </Button>
                    <Button
                      variant="outlined"
                      rounded
                      onClick={handleOpenEditTagModal}
                      className={classes.greyOutlinedBtn}
                    >
                      My Tag1
                    </Button>
                  </Box>
                  <Typography variant="body1" className={classes.fileInfoTxt}>
                    <span>56 MB</span>
                    <span>27-08-21</span>
                    <span>12:00:00</span>
                  </Typography>
                  <Box>
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
                </Box>
                <CheckCircleOutlineIcon
                  className={clsx({
                    [classes.checkIcon]: true,
                    [classes.checkedIcon]: checkedList.includes("ppt"),
                  })}
                  onClick={() => handleClickCheck("ppt")}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="File Name"
                avatar={
                  <Badge badgeContent="XLS" className={classes.xlsBadge} />
                }
                action={
                  <StyledHeaderMenu>
                    <MenuItem onClick={handleOpenFileInfoModal}>
                      File Info
                    </MenuItem>
                    <MenuItem>ReUpload File</MenuItem>
                    <MenuItem>Delete File</MenuItem>
                  </StyledHeaderMenu>
                }
              />
              <CardContent className={classes.cardContent}>
                <Box>
                  <Box>
                    <Button
                      variant="outlined"
                      rounded
                      className={classes.blueOutlinedBtn}
                    >
                      Casework
                    </Button>
                    <Button
                      variant="outlined"
                      rounded
                      onClick={handleOpenEditTagModal}
                      className={classes.greyOutlinedBtn}
                    >
                      My Tag1
                    </Button>
                  </Box>
                  <Typography variant="body1" className={classes.fileInfoTxt}>
                    <span>56 MB</span>
                    <span>27-08-21</span>
                    <span>12:00:00</span>
                  </Typography>
                  <Box>
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
                </Box>
                <CheckCircleOutlineIcon
                  className={clsx({
                    [classes.checkIcon]: true,
                    [classes.checkedIcon]: checkedList.includes("xls"),
                  })}
                  onClick={() => handleClickCheck("xls")}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="File Name"
                avatar={
                  <Badge badgeContent="TXT" className={classes.txtBadge} />
                }
                action={
                  <StyledHeaderMenu>
                    <MenuItem onClick={handleOpenFileInfoModal}>
                      File Info
                    </MenuItem>
                    <MenuItem>ReUpload File</MenuItem>
                    <MenuItem>Delete File</MenuItem>
                  </StyledHeaderMenu>
                }
              />
              <CardContent className={classes.cardContent}>
                <Box>
                  <Box>
                    <Button
                      variant="outlined"
                      rounded
                      onClick={handleOpenEditTagModal}
                      className={classes.greyOutlinedBtn}
                    >
                      My Tag1
                    </Button>
                    <Button
                      variant="outlined"
                      rounded
                      onClick={handleOpenEditTagModal}
                      className={classes.greyOutlinedBtn}
                    >
                      My Tag2
                    </Button>
                  </Box>
                  <Typography variant="body1" className={classes.fileInfoTxt}>
                    <span>56 MB</span>
                    <span>27-08-21</span>
                    <span>12:00:00</span>
                  </Typography>
                  <Box>
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
                </Box>
                <CheckCircleOutlineIcon
                  className={clsx({
                    [classes.checkIcon]: true,
                    [classes.checkedIcon]: checkedList.includes("txt"),
                  })}
                  onClick={() => handleClickCheck("txt")}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Pagination count={4} variant="outlined" shape="rounded" />
            </Box>
          </Grid>
        </Grid>
        <FilePreviewModal
          open={openFilePreviewModal}
          handleClose={handleCloseFilePreviewModal}
        />
        <EditTagModal
          open={openEditTagModal}
          handleClose={handleCloseEditTagModal}
        />
        <MultipleFilesModal
          open={openMultiFileModal}
          handleClose={handleCloseMultiFileModal}
        />
        <FileInfoModal
          open={openFileInfoModal}
          handleClose={handleCloseFileInfoModal}
        />
      </Container>
    </Box>
  );
};

export default Files;
