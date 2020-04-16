import React from "react";
import { IRoute } from "../../routers/AppRouter";
import { routes, RESUME } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/common.styles";
import withAnimatedWrapper from "../../hoc/withAnimationWrapper";

export default withAnimatedWrapper({
  Component: function Resume() {
    const rootRoute: IRoute = routes.find(({ id }) => id === RESUME.id);

    return (
      <StyledWrapper>
        <h2>{rootRoute.title}</h2>
      </StyledWrapper>
    );
  },
  data: { className: "resume-section" },
});
