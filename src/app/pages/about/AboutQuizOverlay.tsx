import React from "react";
import { ABOUT_ID } from "../../routers/constants";
import { StyledButton } from "../../styles/common/ui.styles";

export default function AboutQuizLevel({
  onQuizPass,
}: {
  onQuizPass: (to: boolean) => void;
}) {
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
}
