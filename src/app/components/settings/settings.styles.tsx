import styled from "styled-components";
import { StyledButton } from "../../styles/common/common.styles";
import { getStyledButton } from "../../styles/common/layout.styles";
import { ITheme } from "../../App";

export const StyledSettings = styled("div")`
  width: auto;
  max-width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: auto;

  ${StyledButton} {
    max-width: fit-content;
    margin-right: 0;
  }

  ${(props: { theme?: ITheme }) => {
    const { isDarkMode } = props.theme;

    return `${getStyledButton({ isDarkMode })}`;
  }}
`;
