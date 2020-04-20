import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";
import withQuizOverlay from "../../hoc/withQuizOverlay";
import { PORTFOLIO_ID } from "../../routers/constants";
import { findEntityInArrayById } from "../../utils/utils";

export default withQuizOverlay({
  routeId: PORTFOLIO_ID,
  Component: function Portfolio() {
    const rootRoute: IRoute = findEntityInArrayById(PORTFOLIO_ID, routes);

    return (
      <StyledWrapper className={`animated-page ${PORTFOLIO_ID}`}>
        <h2>{rootRoute.title}</h2>
        <h3>Thank you</h3>
      </StyledWrapper>
    );
  },
});
