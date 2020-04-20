import { StyledButton, StyledToggleButton } from "./ui.styles";
import { Alignment } from "../../interfaces/common/ui";

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

export const getDashedAnimation = () => `
  @keyframes dash {
    to {
      stroke-dashoffset: 1000;
    }
  }
  @-webkit-keyframes dash {
    to {
      stroke-dashoffset: 1000;
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
        ${addAnimationDelay && `animation-delay: 0.${colors.length - index}s;`}
      }`;
  });

  return nthStyles;
};
