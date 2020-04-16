import React, { ReactElement, ComponentClass } from "react";
import {
  Route,
  RouteComponentProps,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import { routes } from "./routes";

import { StyledNav } from "../styles/ui/ui.styles";
import { StyledWrapper, IStyledWrapper } from "../styles/common/common.styles";

export type TParams = {
  id?: string;
};

export type SRoutes = { routes?: IRoute[] };
export interface IRouteComponentProps<T> extends RouteComponentProps<TParams> {
  withProps: T;
}

export interface IRoute {
  id: string;
  path: string;
  exact?: boolean;
  component: (props?: IRouteComponentProps<any>) => ReactElement;
  routes?: IRoute[];
  title?: string;
  parentId?: string;
}

export function RouteMenu(props: {
  routes: IRoute[];
  wrapperStyles?: IStyledWrapper;
}) {
  const defaultStyles = {
    alignItems: "center",
  };
  const { routes, wrapperStyles = defaultStyles } = props;
  return (
    <StyledWrapper {...wrapperStyles}>
      <StyledNav>
        {routes.map(({ title, path, id }) => {
          return (
            <li key={id}>
              <Link to={`${path}`}>{title}</Link>
            </li>
          );
        })}
      </StyledNav>
    </StyledWrapper>
  );
}

export default function AppRouter() {
  return (
    <div>
      <Switch>
        {routes.map((route) => {
          return <Route key={route.id} {...route} />;
        })}
      </Switch>
    </div>
  );
}

// TODO: Improvements
// export function RenderSubRoute({ match }: RouteComponentProps<TParams>) {
//   const { params, url } = match;
//   const location = useLocation();
//   console.log("location", location);
//   const urlArr = url.split("/").filter((s: string) => Boolean(s));
//   console.log("urlArr", urlArr);
//   const [rootRouteId] = urlArr;
//   const subRoute = routes
//     .find(({ id }) => id === rootRouteId)
//     .routes.find(({ id }) => id === params.id);

//   return subRoute.component();
// }
