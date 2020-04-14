import React from "react";

import ToggleButton from "../common/toggle-button/ToggleButton";
import { StyledSettings } from "./settings.styles";
import { ITheme } from "../../App";

export default function Settings({
  theme,
  toggleDarkMode,
}: {
  theme: ITheme;
  toggleDarkMode: (to: boolean) => void;
}) {
  return (
    <StyledSettings className="main-settings" theme={theme}>
      <ToggleButton
        toggleButtonClicked={() => toggleDarkMode(!theme.isDarkMode)}
        label={theme.toggleLabel}
      />
    </StyledSettings>
  );
}
