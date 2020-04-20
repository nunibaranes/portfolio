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
}
