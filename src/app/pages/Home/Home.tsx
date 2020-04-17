import React from "react";
import { Link, useHistory } from "react-router-dom";
import noonles from "../../../assets/images/nofarNoonles.jpg";
import { StyledWrapper, StyledButton } from "../../styles/common/common.styles";
import "../../styles/animations.scss";
import { RESUME } from "../../routers/routes";
import { IRouteComponentProps } from "../../routers/AppRouter";
import { IRefObject } from "../../interfaces/common/ui";

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
