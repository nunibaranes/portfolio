import React from "react";
import { Link } from "react-router-dom";
import noonles from "../../../assets/images/nofarNoonles.jpg";
import { StyledWrapper, StyledButton } from "../../styles/common/common.styles";
import { RESUME } from "../../routers/routes";

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
    <StyledWrapper className="animated-page home" alignItems="center">
      <img src={noonles} className="noonles" alt="Nofar Baranes" />
      <h1>Hi, I'm Nofar Baranes</h1>

      <article className="paragraph-wrapper">
        <p>
          I am 30 years old, living in Tel-Aviv, Israel <br />
          I wanted to introduce my self in a sightly different way <br />
          We are going to play little game in which each level exposes <br />a
          piece of information about me
        </p>
      </article>
      <Link to={RESUME.path}>
        <StyledButton type="button">Start</StyledButton>
      </Link>
    </StyledWrapper>
  );
}
