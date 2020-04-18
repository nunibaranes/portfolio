import styled from "styled-components";

import {
  StyledWrapper,
  StyledLink,
  StyledButton,
  StyledToggleButton,
  StyledSVGWrapper,
} from "./common.styles";

// TODO: move to ui
export const getStyledButton = ({
  isDarkMode,
  lightColor = "white",
  darkColor = "black",
}: {
  isDarkMode: boolean;
  lightColor?: string;
  darkColor?: string;
}): string => {
  return `
  ${StyledButton} {
    border: 1px solid ${isDarkMode ? lightColor : darkColor};
    color: ${isDarkMode ? lightColor : darkColor};

    &:hover{
        color: ${isDarkMode ? darkColor : lightColor};
        background-color: ${isDarkMode ? lightColor : darkColor};
    }
  }

  ${StyledToggleButton} {
    background: ${isDarkMode ? lightColor : darkColor};
    
    .label {
      background: ${isDarkMode ? darkColor : lightColor};
    }

    &: hover {
      color: ${isDarkMode ? lightColor : darkColor};
    }
  }
`;
};

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
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        margin-block-start: 0;
        color: ${isDarkMode ? "white" : "black"};
        cursor: auto;
        
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
          transition: opacity 0.3s;
        }
      }
    `;
  }}
`;

export const StyledMainContainer = styled("section")`
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
