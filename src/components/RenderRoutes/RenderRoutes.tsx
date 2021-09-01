import { FC } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

const RenderRoutes: FC<RouteConfigComponentProps> = ({ route, ...other }) => {
  if (route) {
    return renderRoutes(route.routes, other);
  }
  return null;
};

export default RenderRoutes;
