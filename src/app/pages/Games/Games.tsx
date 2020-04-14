import React, { ReactElement } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

import GameOfLife from "../../components/game-of-life/GameOfLife";
import Sudoku from "../../components/sudoku/Sudoku";
import Paint from "../../components/paint/Paint";
import { TParams } from "../../routers/AppRouter";
interface IGame {
  id: string;
  component: ReactElement;
}

const games: IGame[] = [
  {
    id: "game-of-life",
    component: <GameOfLife />,
  },
  {
    id: "sudoku",
    component: <Sudoku />,
  },
  {
    id: "paint",
    component: <Paint />,
  },
];

export default function Games() {
  return (
    <div>
      <h2>Games</h2>
      <nav>
        <ul>
          <li>
            <Link to="/games/game-of-life">Game of Life</Link>
          </li>
          <li>
            <Link to="/games/sudoku">Sudoku</Link>
          </li>
          <li>
            <Link to="/games/paint">Paint</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function Game({ match }: RouteComponentProps<TParams>) {
  const { id } = match.params;
  const game = games.find((game) => game.id === id);

  return game.component;
}
