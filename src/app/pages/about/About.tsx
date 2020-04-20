import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";
import { ABOUT_ID } from "../../routers/constants";
import withQuizOverlay from "../../hoc/withQuizOverlay";
import { findEntityInArrayById } from "../../utils/utils";
import { StyledButton } from "../../styles/common/ui.styles";
import { Link } from "react-router-dom";

export default withQuizOverlay({
  routeId: ABOUT_ID,
  Component: function About() {
    const rootRoute: IRoute = findEntityInArrayById(ABOUT_ID, routes);

    return (
      <StyledWrapper className={`animated-page ${ABOUT_ID}`}>
        <h2>{rootRoute.title}</h2>
        <Link to="/job-experience">
          <StyledButton type="button">Next level</StyledButton>
        </Link>
      </StyledWrapper>
    );
  },
});
