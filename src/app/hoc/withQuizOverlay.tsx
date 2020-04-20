import React, { ComponentType, useState } from "react";
import { QuizOverlay } from "../components/quiz-overlay/QuizOverlay";

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
      <div className={`animated-page ${routeId}`}>
        {!quizPassed && (
          <QuizOverlay
            routeId={routeId}
            onQuizPass={() => {
              setQuizPassed(true);
            }}
          />
        )}
        <Component {...props} />
      </div>
    );
  };
}
