import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes, ABOUT } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";

export default function About() {
  const rootRoute: IRoute = routes.find(({ id }) => id === ABOUT.id);

  return (
    <StyledWrapper className="animated-page about">
      <h2>{rootRoute.title}</h2>
    </StyledWrapper>
  );
}
