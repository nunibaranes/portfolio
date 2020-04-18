import React, { useContext } from "react";

/** Styles */
import { StyledHeader } from "../../styles/common/layout.styles";
import Settings from "../../components/settings/Settings";
import { ThemeContext } from "../../App";
import { Link, useLocation } from "react-router-dom";
import { themeLabel } from "../../components/common/toggle-button/ToggleButton";
import { StyledSVGWrapper } from "../../styles/common/common.styles";
import Logo from "../../components/common/svg/logo";
import { HOME } from "../../routers/routes";

export default function Header() {
  const { pathname } = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const isHomePage = pathname === HOME.path;
  const logo = (
    <span className="logo">
      <StyledSVGWrapper height="50px" width="50px" strokeWidth="8px">
        <Logo />
      </StyledSVGWrapper>
      <span className="label"> Nofar Baranes </span>
    </span>
  );
  const toggleDarkMode = (to: boolean) => {
    const label = to ? themeLabel.on : themeLabel.off;

    setTheme({
      isDarkMode: to,
      toggleLabel: label,
    });
  };

  return (
    <StyledHeader className="header" isDarkMode={theme.isDarkMode}>
      {isHomePage ? logo : <Link to="/">{logo}</Link>}
      <Settings theme={theme} toggleDarkMode={toggleDarkMode} />
    </StyledHeader>
  );
}
