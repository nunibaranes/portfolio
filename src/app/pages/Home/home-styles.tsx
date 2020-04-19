import styled from "styled-components";
import { StyledSVGWrapper } from "../../styles/common/common.styles";
import { StyledButton } from "../../styles/common/ui.styles";
import { StyledWrapper } from "../../styles/common/layout.styles";

// preparations for styling home page
export const StyledHomeWrapper = styled(StyledWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 100%;

  .half {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    z-index: 1;

    &.first {
      pointer-events: none;
      h1 {
        font-size: 50px;
      }
    }

    &.second {
      .paragraph-wrapper {
        max-width: 550px;
        font-size: 30px;
        text-align: left;
        pointer-events: none;
      }
      .start-btn {
        ${StyledButton} {
          min-width: 125px;
          height: 50px;
          font-size: 25px;
          border-radius: 30px;
        }
      }
    }
  }

  ${StyledSVGWrapper} {
    svg {
      g {
        stroke: currentColor;
      }
    }

    &.morph-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      left: -10px;
      bottom: 0;
      z-index: 0;
    }
  }
`;
