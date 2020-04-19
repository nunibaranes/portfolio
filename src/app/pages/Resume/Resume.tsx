import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes, RESUME } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";

export default function Resume() {
  const rootRoute: IRoute = routes.find(({ id }) => id === RESUME.id);

  return (
    <StyledWrapper className="animated-page resume">
      <h2>{rootRoute.title}</h2>
    </StyledWrapper>
  );
}
