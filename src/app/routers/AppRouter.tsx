import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { routes } from "./routes";
import "../styles/animations/fade-in-animations.scss";

export default function AppRouter() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup className="pages">
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="fade-page"
          >
            <Switch location={location}>
              {routes.map((route) => {
                return <Route key={route.id} {...route} />;
              })}
              <Route path="*" component={() => <Redirect to="/404" />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
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
