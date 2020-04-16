import React from "react";
import Home from "../pages/Home/Home";
import Games from "../pages/Games/Games";
import GameOfLife from "../components/game-of-life/GameOfLife";
import Sudoku from "../components/sudoku/Sudoku";
import Paint from "../components/paint/Paint";
import { IRoute } from "./AppRouter";
import GuessWhoIAm from "../pages/GuessWhoIAm/GuessWhoIAm";

export const HOME = "home";
export const GUESS_WHO_I_AM = "guess-who-i-am";
export const GAMES = "games";
export const GAME_OF_LIFE = "game-of-life";
export const SUDOKU = "sudoku";
export const PAINT = "paint";

export const routes: IRoute[] = [
  {
    id: "home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    title: "Guess who I am",
    id: "guess-who-i-am",
    path: "/guess-who-i-am",
    component: GuessWhoIAm,
  },
  {
    id: "games",
    title: "Games",
    path: "/games",
    component: Games,
  },
  {
    id: GAME_OF_LIFE,
    parentId: GAMES,
    title: "Game Of Life",
    path: "/games/game-of-life",
    component: GameOfLife,
  },
  {
    id: SUDOKU,
    parentId: GAMES,
    title: "Sudoku",
    path: "/games/sudoku",
    component: Sudoku,
  },
  {
    id: PAINT,
    parentId: GAMES,
    title: "Paint",
    path: "/games/paint",
    component: Paint,
  },
];
