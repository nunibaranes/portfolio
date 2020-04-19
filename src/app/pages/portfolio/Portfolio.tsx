import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes, PORTFOLIO } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";

export default function Portfolio() {
  const rootRoute: IRoute = routes.find(({ id }) => id === PORTFOLIO.id);

  return (
    <StyledWrapper className="animated-page portfolio">
      <h2>{rootRoute.title}</h2>
    </StyledWrapper>
  );
}
