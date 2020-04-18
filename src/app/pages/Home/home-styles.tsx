import styled from "styled-components";
import {
  StyledWrapper,
  StyledSVGWrapper,
} from "../../styles/common/common.styles";

// preparations for styling home page
export const StyledHomeWrapper = styled(StyledWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;

  ${StyledSVGWrapper} {
    svg {
      g {
        stroke: currentColor;
      }
    }
  }
`;
