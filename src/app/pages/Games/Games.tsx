import React from "react";
import { routes } from "../../routers/routes";
import { IRoute, RouteMenu } from "../../routers/AppRouter";

export default function Games() {
  const games: IRoute = routes.find(({ id }) => id === "games");
  return (
    <div>
      <h2>{games.title}</h2>
      <RouteMenu routes={games.routes} />
    </div>
  );
}
