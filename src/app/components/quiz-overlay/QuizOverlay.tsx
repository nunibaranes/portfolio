import React from "react";
import { findEntityInArrayById } from "../../utils/utils";
import {
  ABOUT_ID,
  JOB_EXPERIENCE_ID,
  SKILLS_ID,
  PORTFOLIO_ID,
} from "../../routers/constants";
import { StyledButton } from "../../styles/common/ui.styles";

const quizzes = [
  {
    id: ABOUT_ID,
    quizOverlay: ({ onQuizPass }: { onQuizPass: (to: boolean) => void }) => {
      return (
        <>
          <h2>{ABOUT_ID} quiz</h2>
          <StyledButton
            onClick={() => {
              onQuizPass(true);
            }}
          >
            pass
          </StyledButton>
        </>
      );
    },
  },
  {
    id: JOB_EXPERIENCE_ID,
    quizOverlay: ({ onQuizPass }: { onQuizPass: (to: boolean) => void }) => {
      return (
        <>
          <h2>{JOB_EXPERIENCE_ID} quiz</h2>
          <StyledButton
            onClick={() => {
              onQuizPass(true);
            }}
          >
            pass
          </StyledButton>
        </>
      );
    },
  },
  {
    id: SKILLS_ID,
    quizOverlay: ({ onQuizPass }: { onQuizPass: (to: boolean) => void }) => {
      return (
        <>
          <h2>{SKILLS_ID} quiz</h2>
          <StyledButton
            onClick={() => {
              onQuizPass(true);
            }}
          >
            pass
          </StyledButton>
        </>
      );
    },
  },
  {
    id: PORTFOLIO_ID,
    quizOverlay: ({ onQuizPass }: { onQuizPass: (to: boolean) => void }) => {
      return (
        <>
          <h2>{PORTFOLIO_ID} quiz</h2>
          <StyledButton
            onClick={() => {
              onQuizPass(true);
            }}
          >
            pass
          </StyledButton>
        </>
      );
    },
  },
];

export function QuizOverlay({
  routeId,
  onQuizPass,
}: {
  routeId: string;
  onQuizPass?: (to: boolean) => void;
}): JSX.Element {
  const quiz = findEntityInArrayById(routeId, quizzes);
  return quiz.quizOverlay({ onQuizPass: onQuizPass });
}
