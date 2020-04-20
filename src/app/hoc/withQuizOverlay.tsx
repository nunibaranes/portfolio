import React, { ComponentType, useState } from "react";
import { QuizOverlay } from "../components/quiz-overlay/QuizOverlay";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import "../styles/animations/zoom-animations.scss";
import { StyledWrapper } from "../styles/common/layout.styles";
import styled from "styled-components";

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
    return (
      <StyledOverlayWrapper className="animated-page quiz-overlay-screen">
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={quizPassed ? "page" : "quiz"}
            timeout={300}
            classNames="zoom"
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
