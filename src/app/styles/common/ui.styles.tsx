import styled from "styled-components";
import { getStyledButton } from "./utils.styles";

export const StyledNav = styled("ul")`
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  display: flex;

  li {
    list-style: none;
    margin-right: 10px;
  }
`;

export const StyledButton = styled("button")`
  border: 1px solid #000;
  background: none;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 15px;
  min-width: 90px;
  height: min-content;
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: fit-content;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
    background-color: #000;
  }

  ${(props: { disabled?: boolean; isActive?: boolean; hidden?: boolean }) => {
    const disabledStyles = props.disabled
      ? `    
        cursor: default;
        pointer-events: none;
        opacity: 0.5;
        border: 1px solid #bbb;
      `
      : "";

    const activeStyles = props.isActive
      ? `    
        color: #fff;
        background-color: #000;
      `
      : "";

    return `
      ${disabledStyles}
      ${activeStyles}
    `;
  }}
`;

export const StyledToggleButton = styled(StyledButton)`
  ${({ isActive }: { isActive: boolean }) => {
    return `
    min-width: 75px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    
    .label {
      width: 35px;
      height: 35px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      left: 3px;
      top: 50%;
      transform: translateY(-50%);
      transition: left 0.2s cubic-bezier(0.68, -0.55, 0.27, 01.55) 200ms;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5em;

      ${
        isActive
          ? `
            position: absolute;
            left: 37px;
          `
          : ""
      }

    }

      ${getStyledButton({ isDarkMode: isActive })}
    `;
  }}
`;
