import styled from "styled-components";
import { Alignment } from "../../interfaces/common/ui";

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
      align-items: ${alignItems || ""}
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

export const StyledSVGIcon = styled("svg")`
  ${(props: { width?: string; height?: string; margin?: string }) => {
    const { width = "30px", height = "30px", margin = "0 auto" } = props;

    return `
      width: ${width};
      height: ${height};
      margin: ${margin};
    `;
  }}
`;

export const getAlignmentStyles = (property: string, alignment: Alignment) => {
  return `
    ${property}: ${alignment};
  `;
};
