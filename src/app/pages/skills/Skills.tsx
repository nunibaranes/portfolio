import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes, SKILLS } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/common.styles";

export default function Skills() {
  const rootRoute: IRoute = routes.find(({ id }) => id === SKILLS.id);

  return (
    <StyledWrapper className="animated-page skills">
      <h2>{rootRoute.title}</h2>
    </StyledWrapper>
  );
}
