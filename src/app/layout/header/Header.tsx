import React, { useContext } from "react";

/** Styles */
import { StyledHeader } from "../../styles/common/layout.styles";
import Settings from "../../components/settings/Settings";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDarkMode = (to: boolean) => {
    const label = `Set ${to ? "Light" : "Dark"} Mode`;

    setTheme({
      isDarkMode: to,
      toggleLabel: label,
    });
  };

  return (
    <StyledHeader className="header" isDarkMode={theme.isDarkMode}>
      <Link to="/">
        <span className="logo">Nofar Baranes</span>
      </Link>
      <Settings theme={theme} toggleDarkMode={toggleDarkMode} />
    </StyledHeader>
  );
}
