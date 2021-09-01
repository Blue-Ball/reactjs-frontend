import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import TogglePanel from "@e-group/material/TogglePanel";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@e-group/material/Typography";
import StyledCard from "components/StyledCard";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";

import courseSvg from "static/img/course-black.svg";
import downloadFile from "static/img/download-file.svg";

interface Props {
  index: number;
  value: number;
}
const useStyles = makeStyles((theme) => ({
  containerFluid: {
    maxWidth: "unset",
  },
  pageTitle: {
    "& h1": {
      fontSize: "1.75rem",
      lineHeight: "1.2",
      color: "#5a5c69!important",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  primaryBtn: {
    marginRight: "4px",
    marginBottom: "4px",
    "& .MuiButtonBase-root": {
      color: "white",
      borderColor: "#4e73df",
      background: "#4e73df",
      "&:hover": {
        backgroundColor: "#2e59d9",
        borderColor: "#2e59d9",
      },
    },
  },
  filesFooter: {
    "& p": {
      color: "#444",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      "& img": {
        marginRight: theme.spacing(1),
      },
    },
  },
}));

const AllResult: React.FC<Props> = (props) => {
  const { value } = props;
  const classes = useStyles();

  return (
    <TogglePanel index={0} value={value}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledCard>
            <CardHeader title="Case Work" avatar={<BookmarkBorderIcon />} />
            <CardContent>
              <Typography variant="h5" fontWeight={700}>
                My Case Work Title
              </Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled..
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12}>
          <StyledCard>
            <CardHeader title="Case Work" avatar={<BookmarkBorderIcon />} />
            <CardContent>
              <Typography variant="h5" fontWeight={700}>
                My Case Work Title
              </Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled..
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12}>
          <StyledCard>
            <CardHeader
              title="Administration"
              avatar={<BookmarkBorderIcon />}
            />
            <CardContent>
              <Typography variant="h5" fontWeight={700}>
                My Case Work Title
              </Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled..
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12}>
          <StyledCard>
            <CardHeader
              title="Course"
              avatar={<img src={courseSvg} alt="course" />}
            />
            <CardContent>
              <Typography variant="h5" fontWeight={700}>
                My Course Title
              </Typography>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/LOcD1evBcSA"
                title="Result"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12}>
          <StyledCard>
            <CardHeader title="Files" avatar={<BookmarkBorderIcon />} />
            <CardContent>
              <Typography variant="h5" fontWeight={700}>
                My File Name
              </Typography>
              <Box mt={2}>
                <Button
                  rounded
                  variant="contained"
                  className={classes.primaryBtn}
                >
                  File name 1
                </Button>
                <Button
                  rounded
                  variant="contained"
                  className={classes.primaryBtn}
                >
                  File name 2
                </Button>
                <Button
                  rounded
                  variant="contained"
                  className={classes.primaryBtn}
                >
                  File name 3
                </Button>
              </Box>
              <Box mt={3} className={classes.filesFooter}>
                <Typography variant="body1" fontWeight={700}>
                  <img src={downloadFile} alt="Download" width="15px" />
                  Download File
                </Typography>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </TogglePanel>
  );
};

export default AllResult;
