import React from "react";
import { routesNavigation } from "../../routers/routes";
import Menu from "../../components/common/menu/Menu";
import { MenuType } from "../../interfaces/common/ui";
import styled from "styled-components";
import { StyledNav, StyledButton } from "../../styles/common/ui.styles";

export default function PageNavigation() {
  return (
    <StyledMenu
      className="pages-navigation"
      items={routesNavigation}
      type={MenuType.Route}
    />
  );
}

const StyledMenu = styled(Menu)`
  && {
    position: absolute;
    top: 50%;
    left: 0;
    bottom: 0;
    transform: translateY(-50%);
    z-index: 9999;
    max-width: 200px;
    align-items: flex-start;

    ${StyledNav} {
      flex-direction: column;

      li {
        margin-bottom: 30px;
        margin-right: 0;

        ${StyledButton} {
          position: relative;
          height: 20px;
          min-width: 20px;
          border-radius: 50%;

          .label {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 30px;
            text-align: left;
            color: #000;
          }
        }
      }
    }
  }
`;
