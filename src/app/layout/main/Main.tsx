import React, { useContext } from "react";

/** Styles */
import { StyledMainContainer } from "../../styles/common/layout.styles";
import AppRouter from "../../routers/AppRouter";
import { ThemeContext } from "../../App";

export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledMainContainer
      className="main"
      id="main"
      isDarkMode={theme.isDarkMode}
    >
      <AppRouter />
    </StyledMainContainer>
  );
}
