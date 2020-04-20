import React from "react";
import {
  findEntityInArrayById,
  createOneDimensionalArray,
} from "../../utils/utils";
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
import ShapeMorph from "../../components/common/svg/shape-morph";
import styled from "styled-components";

const quizzes = [
  {
    id: ABOUT_ID,
    quizOverlay: AboutQuizLevel,
    colors: createOneDimensionalArray("#ffd400", 7),
  },
  {
    id: JOB_EXPERIENCE_ID,
    quizOverlay: JobExperienceQuizLevel,
    colors: createOneDimensionalArray("#74C18B", 7),
  },
  {
    id: SKILLS_ID,
    quizOverlay: SkillsQuizLevel,
    colors: createOneDimensionalArray("#C15381", 7),
  },
  {
    id: PORTFOLIO_ID,
    quizOverlay: PortfolioQuizLevel,
    colors: createOneDimensionalArray("#8353C1", 7),
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
    <StyledQuizOverlay className={`animated-screen ${routeId}-quiz-overlay`}>
      <ShapeMorph colors={quiz.colors} />
      <StyledWrapper>
        {quiz.quizOverlay({ onQuizPass: onQuizPass })}
      </StyledWrapper>
    </StyledQuizOverlay>
  );
}

const StyledQuizOverlay = styled(StyledWrapper)`
  ${StyledWrapper} {
    z-index: 2;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;
