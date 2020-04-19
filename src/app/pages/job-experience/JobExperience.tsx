import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes, JOB_EXPERIENCE } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";

export default function JobExperience() {
  const rootRoute: IRoute = routes.find(({ id }) => id === JOB_EXPERIENCE.id);

  return (
    <StyledWrapper className="animated-page job-experience">
      <h2>{rootRoute.title}</h2>
    </StyledWrapper>
  );
}
