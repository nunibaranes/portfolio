import styled from "styled-components";
import { StyledButton } from "../../styles/common/common.styles";

export const StyledSettings = styled("div")`
  width: auto;
  max-width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: auto;

  .title {
    margin-bottom: 10px;
    margin-block-start: 0;
  }

  ${StyledButton} {
    max-width: fit-content;
    margin-right: 0;
    border: #fff 1px solid;
    color: #fff;
  }
`;
