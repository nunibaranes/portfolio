import React, { useState } from "react";
import styled from "styled-components";

import { IRoute } from "../../interfaces/common/router";
import { routes } from "../../routers/routes";
import {
  StyledWrapper,
  StyledContent,
  fontFamily,
} from "../../styles/common/layout.styles";
import { ABOUT_ID } from "../../routers/constants";
import withQuizOverlay from "../../hoc/withQuizOverlay";
import { findEntityInArrayById } from "../../utils/utils";
import { StyledButton } from "../../styles/common/ui.styles";
import { Link } from "react-router-dom";
import { AboutBg } from "./svgs/svgs";
import { getBounceInAnimation } from "../../styles/common/utils.styles";

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
      <StyledAboutWrapper className={`animated-page ${ABOUT_ID}`}>
        <AboutBg
          onClickedBtn={onClickedBgButton}
          selectedBtnId={selectedSection.id}
        />
        <StyledContent className="about-content">
          <div className="title">
            <h2>{rootRoute.title}</h2>
          </div>
          <div className="intro">
            <p>{selectedSection.title}</p>
          </div>
          <div className="content">
            <h3>// This page shows information about me</h3>
          </div>
          {/* <h4>Want to continue?</h4>
          <Link className="btn" to="/job-experience">
            <StyledButton type="button">Next level</StyledButton>
          </Link> */}
        </StyledContent>
      </StyledAboutWrapper>
    );
  },
});

const StyledAboutWrapper = styled(StyledWrapper)`
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffc800;
    opacity: 0.85;
  }
  && {
    ${StyledContent} {
      max-width: 1400px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 0.5fr) 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;

      .title {
        opacity: 0;
        grid-area: 1 / 1 / 2 / 2;
        -webkit-animation: bounceIn 0.75s both;
        animation: bounceIn 0.75s both;
        animation-delay: 1s;

        h2 {
          font-size: 70px;
          font-family: ${fontFamily.righteous};
        }
      }

      .intro {
        grid-area: 2 / 1 / 3 / 2;
      }

      .content {
        grid-area: 3 / 2 / 4 / 3;
      }

      .intro,
      .content {
        -webkit-animation: bounceIn 0.75s both;
        animation: bounceIn 0.75s both;
        animation-delay: 5s;
      }

      ${getBounceInAnimation()}
    }
  }
`;
