import React from "react";
import { PORTFOLIO_ID } from "../../routers/constants";
import { StyledButton } from "../../styles/common/ui.styles";

export default function PortfolioQuizLevel({
  onQuizPass,
}: {
  onQuizPass: (to: boolean) => void;
}) {
  return (
    <>
      <h2>Quiz Time!!!</h2>
      <h3>What is my hobby?</h3>
      or
      <h3>What was my profession before I became a developer?</h3>
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
