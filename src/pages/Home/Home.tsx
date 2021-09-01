import React, { FC } from "react";

import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/configureAppStore";
import Container from "@e-group/material/Container";
import Grid from "@e-group/material/Grid";
import Typography from "@e-group/material/Typography";
import { useHistory } from "react-router";
import { EgRouteConfig } from "typings";
import { increment, decrement } from "./redux";
import { getCounts } from "./selectors";

interface HomeProps {
  publicRoutes: EgRouteConfig[];
}

const Home: FC<HomeProps> = ({ publicRoutes }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [, setCookie] = useCookies();
  const counts = useSelector(getCounts);
  const history = useHistory();

  const handleClick = () => {
    setCookie("hasLoginCookie", "true");
    history.push("/me");
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Moneytrainer Pages</Typography>
          <Grid item xs={12} container spacing={1}>
            {publicRoutes[1]?.routes?.map((el) => (
              <Grid item>
                <button
                  onClick={() => {
                    history.push(el.path as string);
                  }}
                  type="button"
                >
                  {el.breadcrumbName}
                </button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">MICEPass Pages</Typography>
          <Grid item xs={12} container spacing={1}>
            {publicRoutes[2]?.routes?.map((el) => (
              <Grid item>
                <button
                  onClick={() => {
                    history.push(el.path as string);
                  }}
                  type="button"
                >
                  {el.breadcrumbName}
                </button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">KMS Pages</Typography>
          <Grid item xs={12} container spacing={1}>
            <Grid item>
              <button
                onClick={() => {
                  history.push(publicRoutes[3]?.path as string);
                }}
                type="button"
              >
                {publicRoutes[3]?.breadcrumbName}
              </button>
            </Grid>
            {publicRoutes[4]?.routes?.map((el) => (
              <Grid item>
                <button
                  onClick={() => {
                    history.push(el.path as string);
                  }}
                  type="button"
                >
                  {el.breadcrumbName}
                </button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Private Pages</Typography>
          <button onClick={handleClick} type="button">
            Enter private page
          </button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Redux Demo</Typography>
          Counts: {counts}
          <br />
          <button onClick={() => dispatch(increment(1))} type="button">
            increment
          </button>
          <button onClick={() => dispatch(decrement(1))} type="button">
            decrement
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
