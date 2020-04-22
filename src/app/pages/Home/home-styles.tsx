import styled from "styled-components";
import { Link } from "react-router-dom";

import { StyledSVGWrapper } from "../../styles/common/common.styles";
import { StyledButton } from "../../styles/common/ui.styles";
import { StyledWrapper, fontFamily } from "../../styles/common/layout.styles";

const animateFadeIn = `
  .animate-fade-in {
    opacity: 0;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    &.animate-from-right{
      transform: translateX(-400px);
      -webkit-animation-name: fadeInFromRight;
      animation-name: fadeInFromRight;
      animation-delay: 4s;

      @keyframes fadeInFromRight {
        0%,20%,40%,60% {
          opacity: 0;
          transform: translateX(-400px);
        }
        65% {
          opacity: 0.1;
        }
        80% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }

    &.animate-from-left  {
      transform: translateX(400px);
      -webkit-animation-name: fadeInFromLeft;
      animation-name: fadeInFromLeft;
      animation-delay: 3s;

      @keyframes fadeInFromLeft {
        0%,20%,40%,60% {
          opacity: 0;
          transform: translateX(400px);
        }
        65% {
          opacity: 0.1;
        }
        80% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }
`;

export const StyledLinkStartCTA = styled(Link)`
  position: relative;
  padding: 10px 20px;
  height: 220px;
  display: flex;
  margin-top: 35px;
  justify-content: flex-start;
  align-items: center;
  pointer-events: all;
  background-color: currentColor;
  border-radius: 20px 40px;
  opacity: 0.6;
  transition: opacity 0.3s;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-right: 70px solid currentColor;
    border-bottom: 80px solid transparent;
    position: absolute;
    left: -55px;
    top: 0;
  }

  .label {
    font-size: 2.4vw;
    font-family: ${fontFamily.righteous};
    filter: invert(1);
  }

  .icon,
  .label {
    transition: transform 0.3s;
  }

  &:hover {
    opacity: 1;
    .icon,
    .label {
      transform: translateX(15px);
    }
  }

  .icon {
    display: flex;
    font-size: 5.2vw;
    filter: invert(1);
    margin-left: 20px;
  }

  ${StyledButton} {
    width: 100%;
    min-width: 125px;
    height: 100%;
    font-size: 2.4vw;
    font-family: ${fontFamily.righteous};
    max-width: none;
    border-radius: 20px 40px;
  }
`;

const contentStyles = `
.content-boxes {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    z-index: 1;
    pointer-events: none;
    color: currentColor;
  
    &:nth-child(1) {
      align-items: flex-end;
      padding-top: 20px;
    }
  
    &:nth-child(3) {
      max-width: 320px;
    }

    ${animateFadeIn}

    .headings {
      padding: 10px 20px;
      background-color: currentColor;
      font-family: ${fontFamily.righteous};
      margin-bottom: 70px;
      border-radius: 20px 40px;
      position: relative;
      opacity: 0.6;
      transition: opacity 0.3s;
      
      &:after {
        content: '';
        width: 0;
        height: 0;
        border-top: 80px solid transparent;
        border-left: 70px solid currentColor;
        border-bottom: 0px solid transparent;
        position: absolute;
        right: -55px;
        bottom: 0;
      }

      h1, h2 {
        filter: invert(1);
        line-height: 1;
      }
    }
  
    h1, h2, h3 {
      font-size: 1em;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    h1 {
      font-size: 6.5vw;
    }
  
    h2 {
      font-size: 3vw;
    }
  
    .paragraph-wrapper {
      max-width: 300px;
      font-size: 1.8em;
      text-align: left;
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
