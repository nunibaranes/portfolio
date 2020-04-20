import React, { ComponentType, useState } from "react";
import { QuizOverlay } from "../components/quiz-overlay/QuizOverlay";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/animations/zoom-animations.scss";

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
      <div className={`quiz-overlay-screen`}>
        <CSSTransition in={quizPassed} timeout={500} classNames="zoom">
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
      </div>
    );
  };
}
