import React, { useState, memo } from "react";
import { GAMES } from "../../routers/routes";
import { Link } from "react-router-dom";
import { findRouteById } from "../../routers/routeUtils";
import { StyledWrapper } from "../../styles/common/common.styles";

import GameOfLife from "../../components/game-of-life/GameOfLife";
import Sudoku from "../../components/sudoku/Sudoku";
import Paint from "../../components/paint/Paint";
import { IMenuItem, MenuType } from "../../interfaces/common/ui";
import { Menu } from "../../components/common/menu/Menu";

export const GAME_OF_LIFE: IMenuItem = {
  id: "game-of-life",
  title: "Game Of Life",
  isActive: true,
  component: GameOfLife,
};
export const SUDOKU: IMenuItem = {
  id: "sudoku",
  title: "Sudoku",
  component: Sudoku,
};

export const PAINT: IMenuItem = {
  id: "paint",
  title: "Paint",
  component: Paint,
};

export default function Games() {
  const gamesRoute = findRouteById(GAMES.id);
  const games = [GAME_OF_LIFE, SUDOKU, PAINT];
  const [activeGame, setActiveGame] = useState(GAME_OF_LIFE);

  const activeItemChanged = (item: IMenuItem) => {
    console.log("activeItemChanged item", item);
    setActiveGame(item);
  };

  return (
    <StyledWrapper className="animated-page games">
      <Link to={gamesRoute.path}>
        <h2>{gamesRoute.title}</h2>
      </Link>
      <Menu
        items={games}
        type={MenuType.Default}
        activeItemChanged={activeItemChanged}
      />
    </StyledWrapper>
  );
}
