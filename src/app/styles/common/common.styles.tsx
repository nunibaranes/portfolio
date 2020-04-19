import styled from "styled-components";
import { Alignment, IStyledSVGWrapper } from "../../interfaces/common/ui";
import { getStyledButton } from "./layout.styles";
import { ReactNode } from "react";

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

export const StyledWrapper = styled("section")`
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

      &.animated-page {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }
    `;
  }}
`;

export const StyledLink = styled("a")`
  color: ${(props) => props.color || "#acaeaf"};
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

  ${(props) => {
    if (props.disabled) {
      return `    
        cursor: default;
        pointer-events: none;
        opacity: 0.5;
        border: 1px solid #bbb;
      `;
    }
  }}
`;

export const StyledToggleButton = styled(StyledButton)`
  ${({ isActive }: { isActive: boolean }) => {
    return `
    min-width: 55px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    
    .label {
      width: 25px;
      height: 25px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      left: 2px;
      top: 50%;
      transform: translateY(-50%);
      transition: left 0.2s cubic-bezier(0.68, -0.55, 0.27, 01.55) 200ms;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.8em;

      ${
        isActive
          ? `
            position: absolute;
            left: 27px;
          `
          : ""
      }

    }

      ${getStyledButton({ isDarkMode: isActive })}
    `;
  }}
`;

export const StyledSVGWrapper = styled("div")`
  ${(props: IStyledSVGWrapper) => {
    const {
      stroke = "#000",
      fill = "#fff",
      strokeWidth = "5px",
      width = "100px",
      height = "100px",
      margin = "0 auto",
    } = props;

    return `
      width: ${width};
      height: ${height};
      margin: ${margin};

      svg {
        width: 100%;
        height: 100%;

        g {
          stroke: ${stroke};
          fill: ${fill};
          stroke-width: ${strokeWidth};
        }
      }
    `;
  }}
`;

export const getAlignmentStyles = (property: string, alignment: Alignment) => {
  return `
    ${property}: ${alignment};
  `;
};
