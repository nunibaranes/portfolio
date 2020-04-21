import styled from "styled-components";
import { StyledSVGWrapper } from "../../styles/common/common.styles";
import { StyledButton } from "../../styles/common/ui.styles";
import { StyledWrapper } from "../../styles/common/layout.styles";
import { getPathLineAnimation } from "../../styles/common/utils.styles";

const noonlesLogoStyles = `
&.noonles {
  svg g#head path {
    &#face {
      stroke-dasharray: 1500;
      stroke-dashoffset: 1500;
      animation: face_line 3s linear both;
      animation-delay: 2s;
      ${getPathLineAnimation("face_line", "1500")}
    }

    &#hair {
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      animation: hair_line 3s linear both;
      animation-delay: 2s;
      ${getPathLineAnimation("hair_line", "1999")}
    }
  }

  svg g#curls path {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: curls_line 1s linear both;
    animation-delay: 4.5s;

    ${getPathLineAnimation("curls_line", "199")}
  }
}`;

const contentStyles = `
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
    pointer-events: none;
  
    .paragraph-wrapper {
      max-width: 550px;
      font-size: 30px;
      text-align: left;
    }
  
    .start-btn {
      ${StyledButton} {
        min-width: 125px;
        height: 50px;
        font-size: 25px;
        border-radius: 30px;
        pointer-events: all;
      }
    }
  }
}`;

// preparations for styling home page
export const StyledHomeWrapper = styled(StyledWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 100%;

  ${contentStyles}

  ${StyledSVGWrapper} {
    svg g {
      stroke: currentColor;
    }

    ${noonlesLogoStyles}

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
