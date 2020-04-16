import styled from "styled-components";
import {
  StyledWrapper,
  StyledLink,
  StyledSVGIcon,
  StyledButton,
} from "./common.styles";

export const getStyledButton = ({
  isDarkMode,
  lightColor = "white",
  darkColor = "black",
}: {
  isDarkMode: boolean;
  lightColor?: string;
  darkColor?: string;
}) => {
  return `
  ${StyledButton} {
    border: 1px solid ${isDarkMode ? lightColor : darkColor};
    color: ${isDarkMode ? lightColor : darkColor};

    &:hover{
        color: ${isDarkMode ? darkColor : lightColor};
        background-color: ${isDarkMode ? lightColor : darkColor};
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
  padding: 0 20px;

  ${(props: { isDarkMode?: boolean }) => {
    const { isDarkMode } = props;
    return `
      .logo {
        margin-bottom: 10px;
        margin-block-start: 0;
        color: ${isDarkMode ? "white" : "black"};
      }
    `;
  }}
`;

export const StyledMainContainer = styled("section")`
  position: relative;
  min-height: 100vh;
  padding: 50px 0;
  && {
    ${(props: { isDarkMode?: boolean }) => {
      const { isDarkMode } = props;
      return `
        background-color: ${isDarkMode ? "black" : "white"};
        color: ${isDarkMode ? "white" : "black"};

        ${getStyledButton({ isDarkMode })}
    `;
    }}
  }

  .noonles {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 50%;
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

  ${StyledSVGIcon} {
    margin-right: 10px;
    margin-left: 0;
  }
`;
