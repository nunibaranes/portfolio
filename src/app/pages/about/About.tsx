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
import { Link, useHistory } from "react-router-dom";
import { AboutBg } from "./svgs/svgs";
import { getBounceInAnimation } from "../../styles/common/utils.styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
];

export default withQuizOverlay({
  routeId: ABOUT_ID,
  Component: function About() {
    let history = useHistory();
    const rootRoute: IRoute = findEntityInArrayById(ABOUT_ID, routes);
    const [selectedSection, setSelectedSection] = useState(sections[0]);

    const onClickedBgButton = (selected?: string) => {
      const selection = sections.find((section) => selected === section.id);

      if (selection) {
        setSelectedSection(selection);
      } else if (selected === "continue") {
        history.push("/job-experience");
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
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={selectedSection.id}
              timeout={500}
              classNames="fade-in-left"
            >
              <div className="selection-content">
                <div className="intro">
                  <p>{selectedSection.title}</p>
                </div>
                <div className="content">
                  <h3>// This page shows information about me</h3>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
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
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 3fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      text-align: left;
      padding-left: 150px;

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

      .transition-group {
        height: 100%;
        -webkit-animation: bounceIn 0.75s both;
        animation: bounceIn 0.75s both;
        animation-delay: 5s;

        .selection-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 3fr;
          height: 100%;

          .intro {
            grid-area: 1 / 1 / 2 / 2;
          }

          .content {
            grid-area: 2 / 2 / 5 / 3;
          }
        }
      }

      ${getBounceInAnimation()}
    }
  }
`;
