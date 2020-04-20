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
}
