import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/common/svg/logo";
import { ShapeMorph } from "../../components/common/svg/shape-morph";

import { RESUME } from "../../routers/routes";
import { StyledSVGWrapper } from "../../styles/common/common.styles";
import { StyledButton } from "../../styles/common/ui.styles";
import { StyledHomeWrapper } from "./home-styles";

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
  return (
    <StyledHomeWrapper className="animated-page home" alignItems="center">
      <ShapeMorph width="100%" height="100%" />
      <div className="first half">
        <StyledSVGWrapper
          className="noonles"
          width="300px"
          height="300px"
          fill="transparent"
        >
          <Logo />
        </StyledSVGWrapper>
        <h1>Hi, I'm Nofar Baranes</h1>
      </div>
      <div className="second half">
        <article className="paragraph-wrapper">
          <p>
            I am 30 years old, living in Tel-Aviv, Israel <br />
            I wanted to introduce my self in a sightly different way...
            <br />
            We are going to play little game in which each level exposes <br />a
            piece of information about me.
          </p>
        </article>
        <Link className="start-btn" to={RESUME.path}>
          <StyledButton type="button">Start</StyledButton>
        </Link>
      </div>
    </StyledHomeWrapper>
  );
}
