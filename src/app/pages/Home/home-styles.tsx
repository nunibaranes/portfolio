import styled from "styled-components";
import { StyledSVGWrapper } from "../../styles/common/common.styles";
import { StyledButton } from "../../styles/common/ui.styles";
import { StyledWrapper } from "../../styles/common/layout.styles";

const contentStyles = `
.content-boxes {
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    z-index: 1;
    pointer-events: none;
  
    &:nth-child(1) {
      align-items: flex-end;
    }
  
    &:nth-child(3) {
      max-width: 320px;
    }
  
    h1, h2, h3 {
      font-size: 1em;
      margin-block-end: 0;
      margin-block-start: 0;
    }
    h1 {
      font-size: 3.5em;
    }
  
    h2 {
      font-size: 2.5em;
    }
  
    .paragraph-wrapper {
      max-width: 300px;
      font-size: 1.8em;
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

export const StyledHomeWrapper = styled(StyledWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 100%;

  ${contentStyles}

  ${StyledSVGWrapper} {
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
