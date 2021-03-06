import React from "react";
import {
  getPathLineInAnimation,
  getPulseAnimation,
} from "../../../styles/common/utils.styles";
import styled from "styled-components";
import { StyledSVGWrapper } from "../../../styles/common/common.styles";

export default function LogoNofar() {
  return (
    <svg version="1.1" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
      <g id="head">
        <path
          id="hair"
          d="m369.3 473.59c3.26 11.95 5.17 3.26 8.43 29.33 1.34 54.54 15.95 16.78 23.07 52.14-8.12 37.71 4.34 55.4 30.41 55.4s16.29 15.2 39.1 14.12c22.82-1.09 1.09-10.86 32.59-17.38s30.41-11.95 31.5-38.02 23.9-26.07 13.04-51.05c-10.87-24.98 14.12-27.16 5.43-60.83s2.17-21.72 5.43-51.05-17.38-33.54-17.38-67.21 24.98-41.02 11.95-70.89c-13.04-29.87-15.21-9.63-11.95-51.99s-29.33-28.24-33.67-59.74c-4.35-31.5-12.52-36.93-29.9-44.53-17.38-7.61-20.07 0.51-27.38-32.56-7.69-12.17-15.08-27.01-40.7-38.74-40.86-8.21-23.26 8.08-56.96-8-47.79-22.81-37.46-5.86-59.18-5.86s-33.02-10.43-47.14 5.86c-4.62 5.33-9.08 7.99-13.38 8 0 0-30.08-0.1-30.08-0.1-11.01-0.08-18.26 2.94-21.75 9.05-8.69 15.21 2.89 24.92-25.35 37.96-28.24 13.03-42.65 4.85-44.34 38.13-1.69 33.27-27.9 28.01-20.29 63.86 7.6 35.84 16.29 18.63 0 59.9-16.3 41.28 24.67 31.55 10.55 80.43s20.95 63.84 3.52 91.67 20.17 54.09 6.22 74.09c-9.3 13.33 0.37 33.16 29.02 59.48 4.34 23.17 14.84 32.22 31.5 27.16 24.98-7.61 13.03-28.25 32.58-36.94 19.56-8.69 44.54-30.41 26.07-59.74"
        />
        <path
          id="face"
          d="m224.83 174.29c18.47 40.19-28.24 45.62-28.24 66.26s16.29 29.33 6.52 63c-9.78 33.67-2.18 24.98 6.51 56.48s-17.37 10.86-13.03 60.83 63 99.93 97.76 104.28c34.76 4.34 110.79-84.73 111.88-112.97 1.08-28.24-15.21-28.24 4.34-57.57s-3.26-27.15-10.86-51.05 9.78-22.81 6.52-53.22c-2.17-26.07-32.59-3.26-38.02-26.07 0-65.18-19.55-32.59-46.71-42.37-27.15-9.77 0-54.31-38.01-30.41-24.45 15.37-43.41 18.65-56.89 9.84-1.07-0.69-2.45-0.66-3.48 0.07-2.56 1.82-1.99 6.12 1.71 12.9z"
        />
        <g id="curls">
          <path
            id="f"
            d="m411.66 110.85c-4.35-37.66-20.28-52.14-47.79-43.45-27.52 8.69-44.9 7.6-52.14-3.26"
          />
          <path
            id="d"
            d="m483.35 327.01c-21.72-7.97-28.24-24.26-19.55-48.88s7.6-42-3.26-52.14"
          />
          <path
            id="h"
            d="m486.61 582.26c-10.05-5.43-45.62 17.38-40.19-21.72 3.62-26.07-5.75-45.62-28.12-58.65"
          />
          <path
            id="a"
            d="m137.93 193.4c-9.77-21.72 5.44-31.5 16.3-42.36 7.24-7.24 7.24-17.02 0-29.33"
          />
          <path
            id="c"
            d="m165.09 379.33c15.06-18.39 7.16-17.42 3.14-39.97-2.67-15.04 0.94-25.4 10.84-31.08"
          />
          <path
            id="b"
            d="m165.09 547.51c-18.83-5.07-23.9-15.57-15.21-31.5 8.69-15.94 8.69-28.61 0-38.02"
          />
        </g>
      </g>
    </svg>
  );
}

const curlsPulse = `
animation: curls_line 1s linear both, curls_pulse 1s infinite;
animation-delay: 4.5s, 3s;
-webkit-transform-origin: center center;
transform-origin: center center;

&:nth-child(2) {
  animation-delay: 4.5s, 3.1s;
}
&:nth-child(3) {
  animation-delay: 4.5s, 3.2s;
}
&:nth-child(4) {
  animation-delay: 4.5s, 3.3s;
}
&:nth-child(5) {
  animation-delay: 4.5s, 3.4s;
}
&:nth-child(6) {
  animation-delay: 4.5s, 3.5;
}

${getPulseAnimation({
  from: 1,
  to: 1.02,
  name: "curls_pulse",
})}
`;
export const noonlesSVGLineAnimateStyles = (
  animateCurlsPulse?: boolean
) => `svg g#head path {
  &#face {
    opacity: 0;
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    animation: face_line 3s linear both;
    animation-delay: 2s;
    ${getPathLineInAnimation("face_line", 1500)}
  }

  &#hair {
    opacity: 0;
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: hair_line 3s linear both;
    animation-delay: 2s;
    ${getPathLineInAnimation("hair_line", 2000)}
  }
}

svg g#curls path {
  opacity: 0;
  stroke-dasharray: 210;
  stroke-dashoffset: 210;
  
  animation: curls_line 1s linear both;
  animation-delay: 4.5s;
  ${getPathLineInAnimation("curls_line", 200)}
  
  ${animateCurlsPulse && curlsPulse}
}`;

export const NoonlesLogo = styled(StyledSVGWrapper)`
  ${(props: {
    width?: string;
    height?: string;
    animateLine?: boolean;
    animateCurlsPulse?: boolean;
  }) => {
    const {
      width = "300px",
      height = "300px",
      animateLine = false,
      animateCurlsPulse = false,
    } = props;
    return `
        position: relative;
        max-width: ${width};
        width: ${width};
        height: ${height};
        
        svg g path {
          stroke: currentColor;
        }

        ${animateLine && noonlesSVGLineAnimateStyles(animateCurlsPulse)}
      }
    `;
  }}
`;
