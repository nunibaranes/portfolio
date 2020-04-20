import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { routes } from "./routes";
import "../styles/animations/fade-animations.scss";

export default function AppRouter() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup className="page-transition-group">
          <CSSTransition
            key={location.key}
            timeout={5000}
            classNames="fade-in-left"
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
