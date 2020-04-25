import React, { useRef, useState, useEffect, MouseEventHandler } from "react";

import styled from "styled-components";
import { IStyledSVGWrapper } from "../../../interfaces/common/ui";
import { StyledSVGWrapper } from "../../../styles/common/common.styles";
import { LogoHandIsWavingHi } from "./logoHandIsWavingHi";
import { MainPath } from "./mainPath";

export const AboutBg = ({
  svgWrapperProps,
  onClickedBtn,
  selectedBtnId,
}: {
  svgWrapperProps?: IStyledSVGWrapper;
  onClickedBtn?: (selected?: string) => void;
  selectedBtnId: string;
}) => {
  return (
    <StyledAboutSvgBG width="100%" height="100%" {...svgWrapperProps}>
      <LogoHandIsWavingHi />
      <MainPath onClickedBtn={onClickedBtn} selectedBtnId={selectedBtnId} />
    </StyledAboutSvgBG>
  );
};

const StyledAboutSvgBG = styled(StyledSVGWrapper)`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
