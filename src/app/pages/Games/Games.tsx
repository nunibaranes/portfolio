import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { GAMES } from "../../routers/routes";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { findRouteById } from "../../routers/routeUtils";

import GameOfLife from "../../components/game-of-life/GameOfLife";
import Sudoku from "../../components/sudoku/Sudoku";
import Paint from "../../components/paint/Paint";
import { IMenuItem, MenuType } from "../../interfaces/common/ui";
import Menu from "../../components/common/menu/Menu";
import { StyledWrapper } from "../../styles/common/layout.styles";
import "../../styles/animations/zoom-animations.scss";

export const GAME_OF_LIFE: IMenuItem = {
  id: "game-of-life",
  title: "Game Of Life",
  isActive: true,
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

const gamesOptions: IMenuItem[] = [GAME_OF_LIFE, SUDOKU, PAINT];

export default memo(function Games() {
  const gamesRoute = findRouteById(GAMES.id);
  const [games, setGames] = useState(gamesOptions);
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
        className="games-navigation"
        items={games}
        type={MenuType.Default}
        activeItemChanged={activeItemChanged}
      />
      <TransitionGroup className="game">
        <CSSTransition key={activeGameId} timeout={500} classNames="zoom">
          <Game gameId={activeGameId} />
        </CSSTransition>
      </TransitionGroup>
    </StyledWrapper>
  );
});

function Game({ gameId }: { gameId: string }) {
  const getGameById = (id: string) =>
    gamesOptions.find((game) => game.id === id);

  let game: IMenuItem = getGameById(gameId);

  useEffect(() => {
    game = getGameById(gameId);
  }, [gameId]);

  return <div className="animated-game">{game.children}</div>;
}
