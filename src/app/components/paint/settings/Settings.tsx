import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import randomColor from "randomcolor";
import Name from "../name/Name";
import ColorPicker from "../color-picker/ColorPicker";

import { StyledButton } from "../../../styles/common/ui.styles";
import { StyledWrapper } from "../../../styles/common/layout.styles";
import { StyledColorsWrapper } from "../paint.styles";

const Settings = (props: {
  lineWidth?: number;
  onSetLineWidth: (lineWidth: number) => void;
  onSetActiveColor: (color: string) => void;
}) => {
  const lineWidthRef = useRef();

  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const [lineWidth, setLineWidth] = useState(props.lineWidth || 5);

  useEffect(() => {
    getColors();
    props.onSetLineWidth(lineWidth);
  }, []);

  const getColors = useCallback(() => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then((res) => res.json())
      .then((res) => {
        setColors(
          res.colors.map((color: { hex: { value: string } }) => color.hex.value)
        );
        setActiveColor(res.colors[0].hex.value);
        props.onSetActiveColor(res.colors[0].hex.value);
      });
  }, []);

  const handleLineWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setLineWidth(value);
    props.onSetLineWidth(value);
  };

  const handleChangeColor = (color: string) => {
    setActiveColor(color);
    props.onSetActiveColor(color);
  };

  return (
    <StyledWrapper
      className="settings"
      withCustomBorderTop={`10px solid ${activeColor}`}
      withBorderBottom
      alignItems={"start"}
    >
      <Name />
      <StyledColorsWrapper>
        <ColorPicker
          colors={colors}
          activeColor={activeColor}
          changeColor={handleChangeColor}
        />
        <StyledButton onClick={() => getColors()}>Change Color</StyledButton>
      </StyledColorsWrapper>
      <div className="line-width-wrapper">
        <label htmlFor="lineWidth">Line: {lineWidth}</label>
        <input
          id="lineWidth"
          ref={lineWidthRef}
          type="range"
          onChange={(e) => handleLineWidthChange(e)}
          value={lineWidth}
        />
      </div>
    </StyledWrapper>
  );
};

export default memo(Settings);
