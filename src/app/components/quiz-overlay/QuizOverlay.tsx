import React from "react";
import { findEntityInArrayById } from "../../utils/utils";
import {
  ABOUT_ID,
  JOB_EXPERIENCE_ID,
  SKILLS_ID,
  PORTFOLIO_ID,
} from "../../routers/constants";
import AboutQuizLevel from "../../pages/about/AboutQuizOverlay";
import JobExperienceQuizLevel from "../../pages/job-experience/JobExperienceQuizLevel";
import PortfolioQuizLevel from "../../pages/portfolio/PortfolioQuizOverlay";
import SkillsQuizLevel from "../../pages/skills/SkillsQuizOverlay";
import { StyledWrapper } from "../../styles/common/layout.styles";

const quizzes = [
  {
    id: ABOUT_ID,
    quizOverlay: AboutQuizLevel,
  },
  {
    id: JOB_EXPERIENCE_ID,
    quizOverlay: JobExperienceQuizLevel,
  },
  {
    id: SKILLS_ID,
    quizOverlay: SkillsQuizLevel,
  },
  {
    id: PORTFOLIO_ID,
    quizOverlay: PortfolioQuizLevel,
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
  return (
    <StyledWrapper className={`animated-screen ${routeId}-quiz-overlay`}>
      {quiz.quizOverlay({ onQuizPass: onQuizPass })}
    </StyledWrapper>
  );
}
