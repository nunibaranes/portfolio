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
  flex-direction: row;
  max-width: 100%;

  .half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    &.first {
    }

    &.second {
    }
  }

  ${StyledSVGWrapper} {
    svg {
      g {
        stroke: currentColor;
      }
    }
  }
`;
