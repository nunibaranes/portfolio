import { StyledButton, StyledToggleButton } from "./ui.styles";
import { Alignment } from "../../interfaces/common/ui";
import { createOneDimensionalArray } from "../../utils/utils";

export const getStyledButton = ({
  isDarkMode,
  lightColor = "white",
  darkColor = "black",
}: {
  isDarkMode: boolean;
  lightColor?: string;
  darkColor?: string;
}): string => {
  return `
    ${StyledButton} {
      border: 1px solid ${isDarkMode ? lightColor : darkColor};
      color: ${isDarkMode ? lightColor : darkColor};
  
      &:hover, &.active {
          color: ${isDarkMode ? darkColor : lightColor};
          background-color: ${isDarkMode ? lightColor : darkColor};
      }
    }
  
    ${StyledToggleButton} {
      background: ${isDarkMode ? lightColor : darkColor};
      
      .label {
        background: ${isDarkMode ? darkColor : lightColor};
      }
  
      &: hover {
        color: ${isDarkMode ? lightColor : darkColor};
      }
    }
  `;
};

export const getAlignmentStyles = (property: string, alignment: Alignment) => {
  return `
      ${property}: ${alignment};
    `;
};

export const getFadeInFromLeftAnimation = () => `
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-1000%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 0.2;
    }
  }

  @-webkit-keyframes slideInFromLeft {
    0% {
      transform: translateX(-1000%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 0.2;
    }
  }
`;

export const getPathLineInAnimation = (name: string, from: number) => `
  @keyframes ${name} {
    0% {
      stroke-dashoffset: ${from};
    }
    1% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
  @-webkit-keyframes ${name} {
    0% {
      stroke-dashoffset: ${from};
    }
    1% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
`;

export const getScaleAndShrinkAnimation = () => `
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
  @-webkit-keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const getChildWithColors = ({
  colors,
  property = "background",
  addAnimationDelay = false,
}: {
  colors: string[];
  property: string;
  addAnimationDelay?: boolean;
}) => {
  let nthStyles = "";
  colors.forEach((color, index) => {
    nthStyles += ` &:nth-child(${colors.length}n + ${index + 1}) {
        ${property}: ${color};
        ${addAnimationDelay && getDynamicNTHChildAnimationDelay(colors.length)}
      }`;
  });

  return nthStyles;
};

export const getDynamicNTHChildAnimationDelay = (len: number) => {
  const children = createOneDimensionalArray("", len);
  let nthStyles = "";
  children.forEach((item: any, index: number) => {
    nthStyles += ` &:nth-child(${len}n + ${index + 1}) {
        ${`animation-delay: 0.${len - index}s;`}
      }`;
  });

  return nthStyles;
};

export const getPulseAnimation = ({
  from,
  to,
  name,
}: {
  from: number;
  to: number;
  name: string;
}) => `
@-webkit-keyframes ${name} {
  from {
    -webkit-transform: scale3d(${from}, ${from}, ${from});
    transform: scale3d(${from}, ${from}, ${from});
  }

  50% {
    -webkit-transform: scale3d(${to}, ${to}, ${to});
    transform: scale3d(${to}, ${to}, ${to});
  }

  to {
    -webkit-transform: scale3d(${from}, ${from}, ${from});
    transform: scale3d(${from}, ${from}, ${from});
  }
}

@keyframes ${name} {
  from {
    -webkit-transform: scale3d(${from}, ${from}, ${from});
    transform: scale3d(${from}, ${from}, ${from});
  }

  50% {
    -webkit-transform: scale3d(${to}, ${to}, ${to});
    transform: scale3d(${to}, ${to}, ${to});
  }

  to {
    -webkit-transform: scale3d(${from}, ${from}, ${from});
    transform: scale3d(${from}, ${from}, ${from});
  }
}`;
