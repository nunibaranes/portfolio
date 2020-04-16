import React, {
  ComponentType,
  useEffect,
  useState,
  useRef,
  ReactElement,
} from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import noonles from "../../../assets/images/nofarNoonles.jpg";
import { StyledWrapper, StyledButton } from "../../styles/common/common.styles";
import "../../styles/animations.scss";
import { IRouteComponentProps } from "../../routers/AppRouter";

export default withAnimationWrapper(function Home({
  show,
  outerRef,
}: IRouteComponentProps) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (isVisible) outerRef.current.classList.add("show");
    else outerRef.current.classList.remove("show");
  }, [isVisible]);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

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
});

function withAnimationWrapper<P extends object>(Component: ComponentType<P>) {
  return function WithAnimationWrapper(props: P) {
    const ref = useRef();
    return (
      <div ref={ref} className="animated slide-from-right">
        <Component {...props} show={false} outerRef={ref} />
      </div>
    );
  };
}
