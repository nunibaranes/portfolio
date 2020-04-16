import React from "react";
import { Link } from "react-router-dom";
import noonles from "../../../assets/images/nofarNoonles.jpg";
import { StyledWrapper, StyledButton } from "../../styles/common/common.styles";
import "../../styles/animations.scss";
import withAnimatedWrapper from "../../hoc/withAnimationWrapper";
import { IRouteComponentProps } from "../../routers/AppRouter";
import { IRefObject } from "../../interfaces/common/ui";

export default withAnimatedWrapper({
  Component: function Home(
    props: IRouteComponentProps<{ outerRef?: IRefObject<HTMLDivElement> }>
  ) {
    return (
      <StyledWrapper className="content" alignItems="center">
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

        <Link to="/guess-who-i-am">
          <StyledButton>Start</StyledButton>
        </Link>
      </StyledWrapper>
    );
  },
  data: { animationClass: "slide-from-right" },
});
