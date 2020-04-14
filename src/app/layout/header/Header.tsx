import React from "react";

/** Styles */
import { StyledHeader } from "../../styles/common/layout.styles";
import Settings from "../../components/settings/Settings";

export default function Header() {
  return (
    <StyledHeader className="header">
      <span>Nofar Baranes</span>
      {<Settings />}
    </StyledHeader>
  );
}
