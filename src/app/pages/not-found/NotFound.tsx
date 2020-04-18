import React from "react";
import { StyledWrapper } from "../../styles/common/common.styles";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <StyledWrapper>
      <h2>404</h2>
      <h2>Not Found</h2>
    </StyledWrapper>
  );
}
