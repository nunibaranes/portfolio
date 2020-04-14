import React, { ReactElement } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import Games, { Game } from "../pages/Games/Games";
import Home from "../pages/Home/Home";

export type TParams = { id?: string };
interface IRoute {
  id: string;
  path: string;
  exact?: boolean;
  component: (props?: RouteComponentProps<TParams>) => ReactElement;
  routes?: IRoute[];
}

const routes: IRoute[] = [
  {
    id: "home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    id: "games",
    path: "/games",
    exact: true,
    component: Games,
  },
  {
    id: "gamesID",
    path: "/games/:id",
    component: Game,
  },
];

export default function AppRouter() {
  return (
    <div>
      {routes.map((route) => {
        return <Route key={route.id} {...route} />;
      })}
    </div>
  );
}
