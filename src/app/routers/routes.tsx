import React from "react";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Games from "../pages/Games/Games";
import GameOfLife from "../components/game-of-life/GameOfLife";
import Sudoku from "../components/sudoku/Sudoku";
import Paint from "../components/paint/Paint";
import { IRoute, RenderSubRoute } from "./AppRouter";

export const routes: IRoute[] = [
  {
    id: "home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    title: "Portfolio",
    id: "portfolio",
    path: "/portfolio",
    exact: true,
    component: Portfolio,
    routes: [
      {
        title: "About",
        id: "about",
        path: "portfolio/about",
        component: () => <h2>About</h2>,
      },
      {
        title: "Professional",
        id: "professional",
        path: "portfolio/professional",
        component: () => <h2>Professional</h2>,
      },
      {
        title: "Hobbies",
        id: "hobbies",
        path: "portfolio/hobbies",
        component: () => <h2>Hobbies</h2>,
      },
    ],
  },
  {
    id: "portfolio-index",
    path: "/portfolio/:id",
    component: RenderSubRoute,
  },
  {
    title: "Games",
    id: "games",
    path: "/games",
    exact: true,
    component: Games,
    routes: [
      {
        id: "game-of-life",
        path: "/games/game-of-life",
        title: "Game Of Life",
        component: GameOfLife,
      },
      {
        path: "/games/sudoku",
        id: "sudoku",
        title: "Sudoku",
        component: Sudoku,
      },
      {
        path: "/games/paint",
        id: "paint",
        title: "Paint",
        component: Paint,
      },
    ],
  },
  {
    id: "games-index",
    path: "/games/:id",
    component: RenderSubRoute,
  },
];
