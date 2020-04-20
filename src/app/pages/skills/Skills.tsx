import React from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";
import withQuizOverlay from "../../hoc/withQuizOverlay";
import { SKILLS_ID } from "../../routers/constants";
import { findEntityInArrayById } from "../../utils/utils";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/common/ui.styles";

export default withQuizOverlay({
  routeId: SKILLS_ID,
  Component: function Skills() {
    const rootRoute: IRoute = findEntityInArrayById(SKILLS_ID, routes);

    return (
      <StyledWrapper className={`animated-page ${SKILLS_ID}`}>
        <h2>{rootRoute.title}</h2>
        <div className="content">
          <h3>// This page shows my skills</h3>
          <h4>Want to continue?</h4>
          <Link to="/portfolio">
            <StyledButton type="button">Next level</StyledButton>
          </Link>
        </div>
      </StyledWrapper>
    );
  },
});
