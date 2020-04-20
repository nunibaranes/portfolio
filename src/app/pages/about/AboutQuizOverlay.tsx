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
      <h2>Quiz Time!!!</h2>
      <h3>What is my profession?</h3>
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
