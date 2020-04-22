import styled from "styled-components";
import { IStyledSVGWrapper } from "../../interfaces/common/ui";

export const StyledLink = styled("a")`
  color: ${(props) => props.color || "#acaeaf"};
`;

export const StyledSVGWrapper = styled("div")`
  ${(props: IStyledSVGWrapper) => {
    const {
      fill = "#fff",
      stroke = "#000",
      strokeWidth = "5px",
      strokeLinecap = "round",
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
          stroke-linecap: ${strokeLinecap};
        }
      }
    `;
  }}
`;
