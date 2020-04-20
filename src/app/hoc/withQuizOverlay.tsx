import React, { ComponentType, useState, useEffect } from "react";

import { QuizOverlay } from "../components/quiz-overlay/QuizOverlay";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StyledWrapper } from "../styles/common/layout.styles";
import styled from "styled-components";
import "../styles/animations/bounce-animations.scss";

/**
 * This HOC Wraps the component with quiz overlay
 */
export default function withQuizOverlay<P extends object>({
  routeId,
  Component,
}: {
  routeId: string;
  Component: ComponentType<P>;
}) {
  return function WithQuizOverlay(props: P) {
    const [quizPassed, setQuizPassed] = useState(false);
    useEffect(() => {
      setQuizPassed(false);
      return () => {
        setQuizPassed(false);
      };
    }, []);
    return (
      <StyledOverlayWrapper className="animated-page quiz-overlay-screen">
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={quizPassed ? "page" : "quiz"}
            timeout={1000}
            classNames="bounce-down"
          >
            {quizPassed ? (
              <Component {...props} />
            ) : (
              <QuizOverlay
                routeId={routeId}
                onQuizPass={() => {
                  setQuizPassed(true);
                }}
              />
            )}
          </CSSTransition>
        </TransitionGroup>
      </StyledOverlayWrapper>
    );
  };
}

const StyledOverlayWrapper = styled(StyledWrapper)`
  max-width: 100%;

  ${StyledWrapper}.animated-screen {
    max-width: 100%;
  }
`;
