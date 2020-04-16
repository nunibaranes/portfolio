import React, { ReactElement, ComponentClass } from "react";
import {
  Route,
  RouteComponentProps,
  Link,
  useLocation,
  Redirect,
  Switch,
} from "react-router-dom";
import { routes } from "./routes";
import { parseRelativeRoutes } from "./routeUtils";

export type TParams = { id?: string; subId?: string };
export type SRoutes = { routes?: IRoute[] };

export interface IRoute {
  id: string;
  path: string;
  exact?: boolean;
  component: (props?: RouteComponentProps<TParams>) => ReactElement;
  routes?: IRoute[];
  title?: string;
  parentId?: string;
}

export function RouteMenu(props: { routes: IRoute[] }) {
  const { routes } = props;
  return (
    <nav>
      <ul>
        {routes.map(({ title, path, id }) => {
          return (
            <li key={id}>
              <Link to={`${path}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function AppRouter() {
  return (
    <div>
      {routes.map((route) => {
        return <Route key={route.id} {...route} />;
      })}
    </div>
  );
}

// TODO: Improvements
export function RenderSubRoute({ match }: RouteComponentProps<TParams>) {
  const { params, url } = match;
  const location = useLocation();
  console.log("location", location);
  const urlArr = url.split("/").filter((s: string) => Boolean(s));
  console.log("urlArr", urlArr);
  const [rootRouteId] = urlArr;
  const subRoute = routes
    .find(({ id }) => id === rootRouteId)
    .routes.find(({ id }) => id === params.id);

  return subRoute.component();
}
