import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Logo, { NoonlesLogo } from "../../components/common/svg/logo";
import { routesNavigation } from "../../routers/routes";

import ShapeMorph from "../../components/common/svg/shape-morph";
import { StyledHomeWrapper, StyledLinkStartCTA } from "./home-styles";
import { StyledButton } from "../../styles/common/ui.styles";

/**
 * TODO:
 * Add state for set userLevelsIdPass ['about', 'job-description', 'skills', 'portfolio'],
 * save levelsPass to localStorage - userLevelsIdPass: ['about', 'job-description', 'skills', 'portfolio'],
 * on load check user levels state:
 * --------------------------------
 * - If userLevelsIdPass is empty
 *   show the initial welcome page + 'Start' button to the first level
 * - If userLevelsIdPass is partial
 *   show the initial  welcome page + some content changer + 'Continue' button
 * - if userLevelsIdPass complete
 *   show Welcome version fo user that play already
 *
 **********************************
 * - level's pages:
 *   should check if the current level pass before:
 *   - if current level visited and pass: show page content
 *   - if current level not visited and pass: show level question overlay
 **/

export default function Home() {
  const currentPage = routesNavigation[0];
  return (
    <StyledHomeWrapper className="animated-page home" alignItems="center">
      <ShapeMorph />
      <div className="content-boxes">
        <div className="box">
          <article className="paragraph-wrapper">
            <div className="headings animate-fade-in animate-from-left">
              <h1>Hi,</h1>
              <h2>I'm Nofar Baranes</h2>
            </div>
            <div className="intro animate-fade-in animate-from-left">
              <p>I wanted to introduce my self in a sightly different way...</p>
            </div>
          </article>
        </div>
        <div className="box">
          <NoonlesLogo
            width="500px"
            height="500px"
            fill="transparent"
            animateLine
            animateCurlsPulse
          >
            <Logo />
          </NoonlesLogo>
        </div>
        <div className="box">
          <article className="paragraph-wrapper">
            <div className="intro animate-fade-in animate-from-right">
              <p>
                We are going to play little game in which each level exposes{" "}
                <br />a piece of information about me.
              </p>
            </div>
            <StyledLinkStartCTA
              className="start-btn animate-fade-in animate-from-right"
              to={currentPage.path}
            >
              <span className="label">
                Start <br />
                Here
              </span>
              <span className="icon">
                <FontAwesomeIcon className="fas" icon={faChevronRight} />
                <FontAwesomeIcon className="fas" icon={faChevronRight} />
              </span>
              {/* <StyledButton type="button">Start Here</StyledButton> */}
            </StyledLinkStartCTA>
          </article>
        </div>
      </div>
    </StyledHomeWrapper>
  );
}
