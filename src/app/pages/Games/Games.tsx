import React from "react";
import { GAMES } from "../../routers/routes";
import { RouteMenu } from "../../routers/AppRouter";
import { Link, Switch, Route } from "react-router-dom";
import { findRouteById, getSubRoutesByRootId } from "../../routers/routeUtils";
import { StyledWrapper } from "../../styles/common/common.styles";

export default function Games() {
  const games = findRouteById(GAMES.id);
  const gamesSubRoutes = getSubRoutesByRootId(GAMES.id);

  return (
    <StyledWrapper className="animated-page games">
      <Link to={GAMES.path}>
        <h2>{games.title}</h2>
      </Link>
      <RouteMenu routes={gamesSubRoutes} />
      <Switch>
        {gamesSubRoutes.map((route) => {
          return <Route key={route.id} {...route} />;
        })}
      </Switch>
    </StyledWrapper>
  );
}
