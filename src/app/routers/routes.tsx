import React from "react";
import Home from "../pages/Home/Home";
import Games from "../pages/Games/Games";
import GameOfLife from "../components/game-of-life/GameOfLife";
import Sudoku from "../components/sudoku/Sudoku";
import Paint from "../components/paint/Paint";
import { IRoute } from "./AppRouter";
import Resume from "../pages/Resume/Resume";

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
export const GAME_OF_LIFE: IRoute = {
  id: "game-of-life",
  parentId: GAMES.id,
  title: "Game Of Life",
  exact: true,
  path: "/games/game-of-life",
  component: GameOfLife,
};
export const SUDOKU: IRoute = {
  id: "sudoku",
  parentId: GAMES.id,
  title: "Sudoku",
  exact: true,
  path: "/games/sudoku",
  component: Sudoku,
};

export const PAINT: IRoute = {
  id: "paint",
  parentId: GAMES.id,
  title: "Paint",
  exact: true,
  path: "/games/paint",
  component: Paint,
};

export const routes: IRoute[] = [
  HOME,
  RESUME,
  GAMES,
  GAME_OF_LIFE,
  SUDOKU,
  PAINT,
];
