import React, { useState, ReactNode } from "react";
import { StyledToggleButton } from "../../../styles/common/common.styles";

export type ILabelToggle = string | ReactNode;

export const themeLabel = {
  on: "Light",
  off: "Dark",
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
      onClick={() => toggleClicked(!isClicked)}
    >
      <span className="label">{label}</span>
    </StyledToggleButton>
  );
}
