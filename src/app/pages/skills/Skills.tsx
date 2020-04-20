import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";
import withQuizOverlay from "../../hoc/withQuizOverlay";
import { SKILLS_ID } from "../../routers/constants";
import { findEntityInArrayById } from "../../utils/utils";

export default withQuizOverlay({
  routeId: SKILLS_ID,
  Component: function Skills() {
    const rootRoute: IRoute = findEntityInArrayById(SKILLS_ID, routes);

    return (
      <StyledWrapper className={`page ${SKILLS_ID}`}>
        <h2>{rootRoute.title}</h2>
      </StyledWrapper>
    );
  },
});
