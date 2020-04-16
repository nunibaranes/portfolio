import React from "react";
import { GAMES } from "../../routers/routes";
import { RouteMenu } from "../../routers/AppRouter";
import { Link } from "react-router-dom";
import { findRouteById, getSubRoutesByRootId } from "../../routers/routeUtils";
import { StyledWrapper } from "../../styles/common/common.styles";
import withAnimatedWrapper from "../../hoc/withAnimationWrapper";

export default withAnimatedWrapper({
  Component: function Games() {
    const games = findRouteById(GAMES.id);
    const gamesSubRoutes = getSubRoutesByRootId(GAMES.id);

    return (
      <StyledWrapper className="games">
        <Link to={GAMES.path}>
          <h2>{games.title}</h2>
        </Link>
        <RouteMenu routes={gamesSubRoutes} />
      </StyledWrapper>
    );
  },
  data: { className: "games-section" },
});
