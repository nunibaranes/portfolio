import React, { useContext } from "react";

import ToggleButton from "../common/toggle-button/ToggleButton";
import { StyledSettings } from "./settings.styles";
import { ThemeContext } from "../../App";

interface ISettingsProps {
  toggleDarkModeClicked: (to: boolean) => void;
  darkModeTogglelabel: string;
}

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDarkMode = (to: boolean) => {
    const label = `Set ${to ? "Light" : "Dark"} Mode`;

    setTheme({
      isDarkMode: to,
      toggleLabel: label,
    });
  };

  return (
    <StyledSettings className="main-settings">
      <ToggleButton
        toggleButtonClicked={toggleDarkMode}
        label={theme.toggleLabel}
      />
    </StyledSettings>
  );
}
