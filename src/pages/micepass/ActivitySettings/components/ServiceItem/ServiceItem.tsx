import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Typography from "@e-group/material/Typography";
import Grid from "@e-group/material/Grid";
import { Box, Button } from "@e-group/material";
import Paper from "@e-group/material/Paper";

import Logo from "../../../../../static/img/circleLogo.png";

const useStyles = makeStyles((theme) => ({
  hAuto: {
    height: "auto",
  },
  paper: {
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
    height: "100%",
  },
  header: {
    "& img": {
      width: "90px",
    },
    "& p": {
      fontSize: "20px",
      fontWeight: "500",
      color: "#505050",
      marginLeft: theme.spacing(1),
    },
    borderBottom: "1px solid #DBDDE3",
    "@media screen and (max-width: 400px)": {
      flexWrap: "wrap",
      "& img": {
        width: "70px",
        marginLeft: "auto",
        marginRight: "auto",
      },
      "& p": {
        marginLeft: "0",
        textAlign: "center",
      },
    },
  },
  title: {
    fontSize: "18px",
    fontWeight: 500,
    marginBottom: theme.spacing(1),
  },
  pointCell: {
    "& div": {
      background: "#034C8C",
      width: "24px",
      height: "24px",
      color: "white",
      borderRadius: "50%",
    },
    "& div+p": {
      color: "#034C8C",
      fontWeight: "bold",
      margin: theme.spacing(0, 1),
    },
    "& p:last-child": {
      color: "#B1B1B1",
      textDecoration: "line-through",
    },
  },
  unitText: {
    color: "#B1B1B1",
    fontSize: "18px",
  },
  activatedBtn: {
    "& .MuiButtonBase-root": {
      boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.16)",
    },
  },
  enableBtn: {
    "& .MuiButtonBase-root": {
      background: "#05C7F2",
      border: "0",
      boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.16)",
      color: "white",
    },
  },
}));

interface ServiceTypeProps {
  title: string;
  description: string;
  enableValue: string;
  disableValue: string;
  btnType: string;
}

interface Props {
  service: ServiceTypeProps;
}

const ServiceItem: FC<Props> = (props) => {
  const classes = useStyles();

  const { service } = props;

  return (
    <Grid item xs={12} sm={12} md={6} className={classes.hAuto}>
      <Paper className={classes.paper}>
        <Box
          p={3}
          pb={2}
          display="flex"
          alignItems="center"
          className={classes.header}
        >
          <img src={Logo} alt="Logo" />
          <Typography variant="body1">{service.title}</Typography>
        </Box>
        <Box p={3}>
          <Typography variant="body1" className={classes.title}>
            {service.title}
          </Typography>
          <Typography variant="body1">{service.description}</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={4}
            mb={2}
          >
            <Box display="flex" className={classes.pointCell}>
              <Box display="flex" justifyContent="center" alignItems="center">
                M
              </Box>
              <Typography variant="body1">{service.enableValue}</Typography>
              <Typography variant="body1">{service.disableValue}</Typography>
            </Box>
            <Typography variant="body1" className={classes.unitText}>
              Person/day
            </Typography>
          </Box>
          <Button
            variant="outlined"
            rounded
            className={clsx({
              [classes.activatedBtn]: service.btnType === "Activated",
              [classes.enableBtn]: service.btnType === "Enable",
            })}
          >
            {service.btnType}
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ServiceItem;
