import React from "react";
import { SKILLS_ID } from "../../routers/constants";
import { StyledButton } from "../../styles/common/ui.styles";

export default function SkillsQuizLevel({
  onQuizPass,
}: {
  onQuizPass: (to: boolean) => void;
}) {
  return (
    <>
      <h2>Quiz Time!!!</h2>
      <h3>How many years of experience do I have?</h3>
      <StyledButton
        onClick={() => {
          onQuizPass(true);
        }}
      >
        Skip
      </StyledButton>
    </>
  );
}
