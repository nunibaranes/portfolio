import React from "react";
import { JOB_EXPERIENCE_ID } from "../../routers/constants";
import { StyledButton } from "../../styles/common/ui.styles";

export default function JobExperienceQuizLevel({
  onQuizPass,
}: {
  onQuizPass: (to: boolean) => void;
}) {
  return (
    <>
      <h2>Quiz Time!!!</h2>
      <h3>Guess three skills I have?</h3>
      or
      <h3>Guess the name of the company I work for: _ _ _ _ _ _ _ _ _ _ </h3>
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
