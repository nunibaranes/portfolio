import React, { useState, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

import { StyledToggleButton } from "../../../styles/common/ui.styles";

export type ILabelToggle = string | ReactNode;

export const themeLabel = {
  on: <FontAwesomeIcon className="far" icon={faLightbulb} />,
  off: <FontAwesomeIcon className="fas" icon={faLightbulb} />,
};

interface IToggleButtonProps {
  label: ILabelToggle;
  toggleButtonClicked: (to: boolean) => void;
}

export default function ToggleButton(props: IToggleButtonProps) {
  const { label, toggleButtonClicked } = props;
  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = (to: boolean): void => {
    setIsClicked(to);
    toggleButtonClicked(to);
  };

  return (
    <StyledToggleButton
      isActive={isClicked}
      className="btn"
      type="button"
      onClick={() => toggleClicked(!isClicked)}
    >
      <span className="label">{label}</span>
    </StyledToggleButton>
  );
}
