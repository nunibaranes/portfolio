import React from "react";
import { GAMES } from "../../routers/routes";
import { RouteMenu } from "../../routers/AppRouter";
import { Link } from "react-router-dom";
import { findRouteById, getSubRoutesByRootId } from "../../routers/routeUtils";

export default function Games() {
  const games = findRouteById(GAMES);
  const gamesSubRoutes = getSubRoutesByRootId(GAMES);

  return (
    <div>
      <Link to="/games">
        <h2>{games.title}</h2>
      </Link>
      <RouteMenu routes={gamesSubRoutes} />
    </div>
  );
}
