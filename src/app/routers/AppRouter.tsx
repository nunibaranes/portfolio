import React, { ReactElement } from "react";
import {
  Route,
  RouteComponentProps,
  Link,
  useLocation,
} from "react-router-dom";
import { routes } from "./routes";

export type TParams = { id?: string; subId?: string };
export type SRoutes = { routes?: IRoute[] };

export interface IRoute {
  id: string;
  path: string;
  exact?: boolean;
  component: (props?: RouteComponentProps<TParams>) => ReactElement;
  routes?: IRoute[];
  title?: string;
}

export function RouteMenu(props: { routes: IRoute[] }) {
  const { routes } = props;
  const location = useLocation();

  return (
    <nav>
      <ul>
        {routes.map(({ title, path, id }) => (
          <Link key={id} to={`${location.pathname}${path}`}>
            {title}
          </Link>
        ))}
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

export function RenderSubRoute({ match }: RouteComponentProps<TParams>) {
  const { params, url } = match;
  const urlArr = url.split("/").filter((s: string) => Boolean(s));
  const [rootRouteId] = urlArr;
  const subRoute = routes
    .find(({ id }) => id === rootRouteId)
    .routes.find(({ id }) => id === params.id);

  return subRoute.component();
}
