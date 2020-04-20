import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";
import withQuizOverlay from "../../hoc/withQuizOverlay";
import { JOB_EXPERIENCE_ID } from "../../routers/constants";
import { findEntityInArrayById } from "../../utils/utils";

export default withQuizOverlay({
  routeId: JOB_EXPERIENCE_ID,
  Component: function JobExperience() {
    const rootRoute: IRoute = findEntityInArrayById(JOB_EXPERIENCE_ID, routes);

    return (
      <StyledWrapper className={`page ${JOB_EXPERIENCE_ID}`}>
        <h2>{rootRoute.title}</h2>
      </StyledWrapper>
    );
  },
});
