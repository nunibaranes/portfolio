import React from "react";
import noonles from "../../../assets/images/nofarNoonles.jpg";
import { StyledWrapper, StyledButton } from "../../styles/common/common.styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <StyledWrapper alignItems="center">
      <img src={noonles} className="noonles" alt="Nofar Baranes" />
      <h1>Hi, I'm Nofar Baranes</h1>

      <article className="paragraph-wrapper">
        <p>
          I am 30 years old, living in Tel-Aviv, Israel <br />
          I wanted to introduce my self in a sightly different way <br />
          We going to play little game, each level exposes <br />
          pice of information about me
        </p>
      </article>

      <StyledButton>
        <Link to="/guess-who-i-am">Start</Link>
      </StyledButton>
    </StyledWrapper>
  );
}
