import React, { ComponentType, FC } from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { compose } from "redux";
import { RouteComponentProps, withRouter } from "react-router";
import { ReactCookieProps, withCookies } from "react-cookie";
import privateRoutes from "private-routes";
import publicRoutes from "public-routes";

interface RouterRootProps extends ReactCookieProps, RouteComponentProps {}

const RouterRoot: FC<RouterRootProps> = ({ allCookies }) => {
  if (allCookies && allCookies.hasLoginCookie) {
    return (
      <>{renderRoutes(privateRoutes as RouteConfig[], { publicRoutes })}</>
    );
  }

  return <>{renderRoutes(publicRoutes as RouteConfig[], { publicRoutes })}</>;
};

export default compose<ComponentType>(withRouter, withCookies)(RouterRoot);
