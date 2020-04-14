import styled from "styled-components";
import {
  StyledWrapper,
  StyledLink,
  StyledSVGIcon,
  StyledButton,
} from "./common.styles";

export const StyledApp = styled("div")`
  text-align: center;

  * {
    box-sizing: border-box;
  }
`;

export const StyledHeader = styled("header")`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  background-color: #282c34;
  min-height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0 20px;
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

        ${StyledButton} {
          border: 1px solid ${isDarkMode ? "#fff" : "#000"};
          color: ${isDarkMode ? "white" : "black"};

          &:hover{
              color: ${isDarkMode ? "#000" : "#fff"};
              background-color: ${isDarkMode ? "#fff" : "#000"};
          }
        }
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
