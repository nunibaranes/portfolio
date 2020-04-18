import React, { useState, useEffect } from "react";
import { GAMES } from "../../routers/routes";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { findRouteById } from "../../routers/routeUtils";

import GameOfLife from "../../components/game-of-life/GameOfLife";
import Sudoku from "../../components/sudoku/Sudoku";
import Paint from "../../components/paint/Paint";
import { IMenuItem, MenuType } from "../../interfaces/common/ui";
import { Menu } from "../../components/common/menu/Menu";
import { StyledWrapper } from "../../styles/common/common.styles";
import "../../styles/animations/zoom-animations.scss";

export const GAME_OF_LIFE: IMenuItem = {
  id: "game-of-life",
  title: "Game Of Life",
  children: <GameOfLife />,
};

export const SUDOKU: IMenuItem = {
  id: "sudoku",
  title: "Sudoku",
  children: <Sudoku />,
};

export const PAINT: IMenuItem = {
  id: "paint",
  title: "Paint",
  children: <Paint />,
};

export default function Games() {
  const gamesRoute = findRouteById(GAMES.id);
  const games: IMenuItem[] = [GAME_OF_LIFE, SUDOKU, PAINT];
  const [activeGameId, setActiveGameId] = useState(GAME_OF_LIFE.id);

  const activeItemChanged = (id: string) => {
    setActiveGameId(id);
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
      <TransitionGroup className="games">
        <CSSTransition key={activeGameId} timeout={500} classNames="zoom">
          <Game gameId={activeGameId} games={games} />
        </CSSTransition>
      </TransitionGroup>
    </StyledWrapper>
  );
}

function Game({ gameId, games }: { gameId: string; games: IMenuItem[] }) {
  const getGameById = (id: string) => games.find((game) => game.id === id);

  let game: IMenuItem = getGameById(gameId);

  useEffect(() => {
    game = getGameById(gameId);
  }, [gameId]);

  return <div className="animated-game">{game.children}</div>;
}
