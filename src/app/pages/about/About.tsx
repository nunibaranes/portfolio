import React, { useState } from "react";

import { IRoute } from "../../interfaces/common/router";
import { routes } from "../../routers/routes";
import { StyledWrapper } from "../../styles/common/layout.styles";
import { ABOUT_ID } from "../../routers/constants";
import withQuizOverlay from "../../hoc/withQuizOverlay";
import { findEntityInArrayById } from "../../utils/utils";
import { StyledButton } from "../../styles/common/ui.styles";
import { Link } from "react-router-dom";
import { AboutBg } from "./svgs/svgs";
const sections = [
  {
    id: "personal-info",
    title: "Personal Info",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "profession",
    title: "Profession",
  },
  {
    id: "more-information",
    title: "More Info",
  },
  {
    id: "continue",
    title: "Continue",
  },
];

export default withQuizOverlay({
  routeId: ABOUT_ID,
  Component: function About() {
    const rootRoute: IRoute = findEntityInArrayById(ABOUT_ID, routes);
    const [selectedSection, setSelectedSection] = useState(sections[0]);

    const onClickedBgButton = (selected?: string) => {
      const selection = sections.find((section) => selected === section.id);
      if (selection) {
        setSelectedSection(selection);
      }
    };

    return (
      <StyledWrapper className={`animated-page ${ABOUT_ID}`}>
        <AboutBg
          onClickedBtn={onClickedBgButton}
          selectedBtnId={selectedSection.id}
        />
        <div className="content">
          <h2>{rootRoute.title}</h2>
          <h3>// This page shows information about me</h3>
          <p>// {selectedSection.title}</p>
          <br />
          <h4>Want to continue?</h4>
          <Link className="btn" to="/job-experience">
            <StyledButton type="button">Next level</StyledButton>
          </Link>
        </div>
      </StyledWrapper>
    );
  },
});
