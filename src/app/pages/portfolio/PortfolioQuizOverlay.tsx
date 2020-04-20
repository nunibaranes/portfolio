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
}
