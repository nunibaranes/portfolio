import React from "react";

import { IRoute } from "../interfaces/common/router";

import Home from "../pages/Home/Home";
import Games from "../pages/Games/Games";
import Resume from "../pages/Resume/Resume";
import NotFound from "../pages/NotFound/NotFound";

export const HOME: IRoute = {
  id: "home",
  path: "/",
  exact: true,
  component: Home,
};

export const RESUME: IRoute = {
  title: "Resume",
  id: "resume",
  path: "/resume",
  exact: true,
  component: Resume,
};
export const GAMES: IRoute = {
  id: "games",
  title: "Games",
  path: "/games",
  component: Games,
};

export const NOT_FOUND: IRoute = {
  id: "not-found",
  title: "Not Found 404",
  path: "/404",
  component: NotFound,
};

export const routes: IRoute[] = [HOME, RESUME, GAMES, NOT_FOUND];
