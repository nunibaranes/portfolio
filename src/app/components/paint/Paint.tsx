import React, { useState, useEffect } from "react";
import Settings from "./settings/Settings";
import WindowResize from "../common/window-resize/WindowResize";
import Canvas from "./canvas/Canvas";
import withAnimatedWrapper from "../../hoc/withAnimationWrapper";

import { StyledWrapper } from "../../styles/common/common.styles";
import { PAINT } from "../../routers/routes";

export default withAnimatedWrapper({
  Component: function Paint() {
    const [activeColor, setActiveColor] = useState(null);
    const [lineWidth, setLineWidth] = useState(0);

    const handleActivatedColor = (color: string) => {
      setActiveColor(color);
    };

    const handleLineWidthChange = (value: number) => {
      setLineWidth(value);
    };

    return (
      <StyledWrapper className="paint-board" withBorder noPadding>
        <Settings
          lineWidth={lineWidth}
          onSetActiveColor={handleActivatedColor}
          onSetLineWidth={handleLineWidthChange}
        />
        {activeColor && (
          <Canvas
            color={activeColor}
            lineWidth={lineWidth}
            height={600}
            width={980}
          />
        )}
        <WindowResize />
      </StyledWrapper>
    );
  },
  data: { className: "paint-section" },
});
