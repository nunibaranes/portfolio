import styled from "styled-components";

import { StyledLink, StyledSVGWrapper } from "./common.styles";
import { getStyledButton } from "./utils.styles";
import { StyledButton } from "./ui.styles";

export interface IStyledWrapper {
  noPadding?: boolean;
  withBorder?: boolean;
  withCustomBorder?: string;
  withBorderTop?: boolean;
  withCustomBorderTop?: string;
  withBorderBottom?: boolean;
  withCustomBorderBottom?: string;
  alignItems?: string;
  flexDirection?: string;
  margin?: string;
}

export const fontFamily = {
  openSans: "'Open Sans', sans-serif",
  righteous: "'Righteous', cursive",
};

export const StyledWrapper = styled("section")`
  /* TODO, remove it after test */
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 980px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    background-color: transparent;
  }

  ${(props: IStyledWrapper) => {
    const {
      noPadding,
      withBorder,
      withCustomBorder,
      withBorderTop,
      withCustomBorderTop,
      withBorderBottom,
      withCustomBorderBottom,
      alignItems,
      flexDirection,
      margin,
    } = props;

    const defaultBorder = "1px solid #ccc";

    return `  
      background-color: inherit;
      position: relative;
      display: flex;
      width: 100%;
      max-width: 980px;
      margin: ${margin || "0 auto 20px"};
      flex-direction: ${flexDirection || "column"};
      padding: ${noPadding ? 0 : "20px"};
      border: ${
        withBorder || withCustomBorder
          ? withCustomBorder || defaultBorder
          : "none"
      };
      border-top: ${
        withBorderTop || withCustomBorderTop
          ? withCustomBorderTop || defaultBorder
          : ""
      };
      border-bottom: ${
        withBorderBottom || withCustomBorderBottom
          ? withCustomBorderBottom || defaultBorder
          : ""
      };
      align-items: ${alignItems || ""};

      &.animated-page, &.animated-screen {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }
    `;
  }}
`;

export const StyledHeader = styled("header")`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  min-height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 10px 20px;

  ${(props: { isDarkMode?: boolean }) => {
    const { isDarkMode } = props;
    return `
      .logo {
        opacity: 1;
        visibility: visible;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        margin-block-start: 0;
        color: ${isDarkMode ? "white" : "black"};
        cursor: auto;
        transition: opacity 0.5s;

        &.home{
          opacity: 0;
          visibility: hidden;
        }
        
        &:not(.home) {
          cursor: pointer;

          ${StyledSVGWrapper} {
            &:hover {
            &+ .label {
              visibility: visible;
              opacity: 1;
            }
          }
          }
        }
        ${StyledSVGWrapper} {
          background-color: ${isDarkMode ? "white" : "black"};
          border-radius: 50%;
          overflow: hidden;
          padding: 2px;
          margin-right: 10px;
          transition: background-color 0.3s;
        }

        .label {
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.5s;
        }
      }
    `;
  }}
`;

export const StyledMainContainer = styled("section")`
  font-family: ${fontFamily.openSans};
  position: relative;
  min-height: 100vh;
  padding: 50px 0;
  transition: background-color 0.5s, color 0.5s;

  && {
    ${(props: {
      isDarkMode?: boolean;
      darkColor?: string;
      lightColor?: string;
    }) => {
      const { isDarkMode, darkColor = "black", lightColor = "white" } = props;

      return `

        .page-transition-group {
          background-color: inherit;
        }
        background-color: ${isDarkMode ? darkColor : lightColor};
        color: ${isDarkMode ? lightColor : darkColor};

        ${getStyledButton({ isDarkMode })}
    `;
    }}
  }
`;

export const StyledFooter = styled("footer")`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 50px;
  background-color: #282c34;
  color: #fff;
  display: flex;

  ${StyledWrapper} {
    flex-direction: row;
    margin: 0 auto;
  }

  ${StyledLink} {
    flex: 1;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  ${StyledSVGWrapper} {
    margin-right: 10px;
    margin-left: 0;
    height: 30px;
    width: 20px;
  }
`;
