import React, { useRef, useEffect, MouseEventHandler, useState } from "react";
import styled from "styled-components";
import { getPathLineInAnimation } from "../../../styles/common/utils.styles";

export const MainPath = ({
  onClickedBtn,
  selectedBtnId,
}: {
  onClickedBtn?: (selected?: string) => void;
  selectedBtnId?: string;
}) => {
  const [hovering, setHovering] = useState("");
  const personalInfoBtn = useRef<SVGSVGElement | null>(null);
  const educationBtn = useRef<SVGSVGElement | null>(null);
  const professionBtn = useRef<SVGSVGElement | null>(null);
  const moreInfoBtn = useRef<SVGSVGElement | null>(null);
  const continueBtn = useRef<SVGSVGElement | null>(null);
  const buttons = [
    personalInfoBtn,
    educationBtn,
    professionBtn,
    moreInfoBtn,
    continueBtn,
  ];

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const clickedBtn = e.target as Element;
    const selected = Array.from(clickedBtn.classList).find((className) =>
      buttons.find((button) => className === button.current.id)
    );
    //TODO call to prop callback
    if (selected) {
      onClickedBtn(selected);
    }
  };

  const handleMouse = (e: MouseEvent) => {
    const clickedBtn = e.target as Element;
    if (e.type === "mouseenter") {
      setHovering(clickedBtn.id);
    } else {
      setHovering("");
    }
  };

  useEffect(() => {
    buttons.map((button) => {
      button.current.addEventListener("click", handleClick);
      button.current.addEventListener("mouseenter", handleMouse);
      button.current.addEventListener("mouseleave", handleMouse);

      if (button.current.id === selectedBtnId) {
        button.current.classList.add("selected");
      }
    });
    return () => {
      buttons.map((button) => {
        button.current.removeEventListener("click", handleClick);
        button.current.removeEventListener("mouseenter", handleMouse);
        button.current.removeEventListener("mouseleave", handleMouse);
      });
    };
  }, []);

  useEffect(() => {
    buttons.forEach((button) => {
      if (button.current.id === selectedBtnId) {
        button.current.classList.add("selected");
      } else {
        button.current.classList.remove("selected");
      }
    });
  }, [selectedBtnId]);

  useEffect(() => {
    buttons.forEach((button) => {
      if (button.current.id === hovering) {
        button.current.classList.add("hovering");
      } else {
        button.current.classList.remove("hovering");
      }
    });
  }, [hovering]);

  return (
    <StyledSVGMainPath
      id="main-path-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-170.962 77.231 2310.209 784.735"
    >
      <g id="defined-svg">
        <path
          d="M2136.25 79.82c-284.15-8.45-396.65 33.39-482.65 86.39s-126 56-239 7c-75.34-32.67-130.67-26-166 20-50.87 75.33-95.74 118.67-134.6 130-58.29 17-109.7-30-142.7-33-33-3-124-17-105 139s-76 147-123 156-118.34-54.18-219-24.92c-100.67 29.26-153.1 137.47-166.58 190.98-13.49 53.52-107.58 110.09-190.73 49.09-83.15-61.01-251.2-15.52-336.45 49.48"
          id="main-path"
        />
        <g ref={personalInfoBtn} className="button" id="personal-info">
          <g className="text">
            <g className="tooltip">
              <rect
                x="250.92"
                y="710.77"
                width="120"
                height="40"
                transform="translate(-4.675 8.08)"
                rx="8"
              />
              <rect
                x="250.92"
                y="745.77"
                width="15"
                height="20"
                transform="translate(-4.675 8.08)"
              />
            </g>
            <text
              id="b89NP5EA2w"
              x="246.92"
              y="720.77"
              transform="translate(-4.675 8.08)"
            >
              <tspan x="260.92" dy="1em">
                Personal Info
              </tspan>
            </text>
          </g>
          <path
            d="M291.8 821.08c0 22.56-18.32 40.89-40.89 40.89s-40.89-18.33-40.89-40.89c0-22.57 18.32-40.89 40.89-40.89s40.89 18.32 40.89 40.89z"
            className="circle personal-info"
            id="cENw8RosL"
          />
          <g className="icon" id="personal-info">
            <path
              d="M270 838.05c2.27 0 4.1-1.84 4.1-4.11v-26.69c0-1.74-1.4-3.15-3.14-3.15h-40.25c-1.56 0-2.83 1.27-2.83 2.82v27.13c0 2.21 1.8 4 4 4H270z"
              id="d1Te4ZpKS"
            />
            <path d="M274.1 811.23h-46.22" id="aODUZr0v6" />
            <path
              d="M248.25 822.48c0 2.98-2.42 5.4-5.4 5.4-2.98 0-5.41-2.42-5.41-5.4 0-2.99 2.43-5.41 5.41-5.41s5.4 2.42 5.4 5.41z"
              id="a4D8DkAU5"
            />
            <path
              d="M250.34 830.67c.86 0 1.56.7 1.56 1.56v4.16c0 .86-.7 1.56-1.56 1.56h-14.98c-.87 0-1.57-.7-1.57-1.56v-4.16c0-.86.7-1.56 1.57-1.56h14.98z"
              id="i2IjdKdtv"
            />
            <path
              d="M269.23 817.89c.27 0 .49.22.49.49v1.3c0 .27-.22.48-.49.48h-12.02c-.27 0-.49-.21-.49-.48v-1.3c0-.27.22-.49.49-.49h12.02z"
              id="a4wmw9l75n"
            />
            <path
              d="M269.23 823.3c.27 0 .49.22.49.49v1.29c0 .27-.22.49-.49.49h-12.02a.49.49 0 01-.49-.49v-1.29c0-.27.22-.49.49-.49h12.02z"
              id="aj76I4614"
            />
            <path
              d="M269.23 828.4c.27 0 .49.22.49.49v1.29c0 .27-.22.49-.49.49h-12.02a.49.49 0 01-.49-.49v-1.29c0-.27.22-.49.49-.49h12.02z"
              id="bzyAUZaWd"
            />
          </g>
        </g>
        <g ref={educationBtn} className="button" id="education">
          <g className="text">
            <g className="tooltip">
              <rect
                x="250.92"
                y="710.77"
                width="100"
                height="40"
                transform="translate(515.91 -239.608)"
                rx="8"
              />
              <rect
                x="250.92"
                y="745.77"
                width="15"
                height="20"
                transform="translate(515.91 -239.608)"
              />
            </g>
            <text
              id="b89NP5EA2w"
              x="246.92"
              y="720.77"
              transform="translate(515.91 -239.608)"
            >
              <tspan x="260.92" dy="1em">
                Education
              </tspan>
            </text>
          </g>
          <path
            d="M812.38 573.39c0 22.57-18.32 40.89-40.89 40.89s-40.89-18.32-40.89-40.89 18.32-40.89 40.89-40.89 40.89 18.32 40.89 40.89z"
            className="circle education"
          />
          <g className="icon" id="education-icon">
            <path
              d="M742.04 567.77l29.45 7.74 29.45-7.74-29.45-7.73-29.45 7.73z"
              id="bzQku9eor"
            />
            <path d="M796.99 581.8V568.9" id="bNrSPLHNN" />
            <path d="M799.25 585.67l-2.26-3.87-2.27 3.87" id="b2VfHbNuAI" />
            <path
              d="M787.79 571.31v9.08c-3.98 2.97-9.65 4.4-16.99 4.29-7.35-.11-13.01-1.54-16.99-4.29v-9.58"
              id="b1qlgIojZ2"
            />
          </g>
        </g>
        <g ref={professionBtn} className="button" id="profession">
          <g className="text">
            <g className="tooltip">
              <rect
                x="250.92"
                y="710.77"
                width="100"
                height="40"
                transform="translate(851.827 -494.63)"
                rx="8"
              />
              <rect
                x="250.92"
                y="745.77"
                width="15"
                height="20"
                transform="translate(851.827 -494.63)"
              />
            </g>
            <text
              id="f3RNiezNiF"
              x="246.92"
              y="720.77"
              transform="translate(851.827 -494.63)"
            >
              <tspan x="260.92" dy="1em">
                Profession
              </tspan>
            </text>
          </g>
          <path
            d="M1148.3 318.36c0 22.57-18.32 40.9-40.89 40.9s-40.89-18.33-40.89-40.9c0-22.56 18.32-40.89 40.89-40.89s40.89 18.33 40.89 40.89z"
            id="h7KFn2TbD"
            className="circle profession"
          />
          <g className="icon">
            <path
              d="M1084.3 312.62c.08 2.37 0 18.34 0 20.13a3.54 3.54 0 003.54 3.54h39.14a3.54 3.54 0 003.54-3.54c0-1.79-.05-16.64 0-20.47-.95 2.86-.75 4.12-3.85 7.43-3.1 3.3-9.34 7.22-19.26 7.28-15.5.08-22.27-9.22-23.11-14.37z"
              id="a1MrZctViO"
            />
            <path
              d="M1130.52 314.64v-6.88c0-.69-.56-1.25-1.25-1.25h-43.86c-.61 0-1.11.5-1.11 1.11v5.06"
              id="b27yhnEQTm"
            />
            <path
              d="M1111.95 300.53c2.61.03 4.71 2.15 4.71 4.76v1.36c-.13 1.18-.59 1.7-1.37 1.57-.78-.13-1.14-.66-1.08-1.57v-1.36c0-1.2-.96-2.16-2.16-2.16h-9.14c-1.14 0-2.08.87-2.18 2-.01.2-.05.71-.12 1.52-.2 1.04-.65 1.57-1.37 1.57-.72 0-1.08-.53-1.08-1.57v-1.09c0-2.85 2.33-5.15 5.18-5.12 2.66.03 5.85.06 8.61.09z"
              id="d5gPsSLby"
            />
            <path
              d="M1090.54 315.53c.27.4.18.94-.22 1.21-.15.11.23-.16.11-.07-.47.33-1.12.21-1.45-.26-.26-.39-.59-.86-.89-1.29a.77.77 0 01.2-1.07c.16-.11.08-.06.26-.19.31-.21.74-.13.95.18.31.44.75 1.08 1.04 1.49z"
              id="e49u68OEP4"
            />
            <path
              d="M1093.84 318.86c.34.34.34.89 0 1.23-.13.13.2-.19.09-.09-.4.41-1.06.41-1.46 0-.34-.33-.74-.73-1.11-1.1-.3-.3-.3-.79 0-1.09.14-.14.07-.08.23-.23a.67.67 0 01.96 0c.38.38.94.93 1.29 1.28z"
              id="d3VOyUXawL"
            />
            <path
              d="M1097.99 321.31c.42.24.56.77.32 1.18-.09.16.14-.24.07-.11-.29.5-.93.67-1.42.38-.41-.23-.9-.52-1.35-.78a.77.77 0 01-.29-1.05c.1-.18.06-.09.16-.28.19-.33.61-.44.94-.25.46.27 1.14.66 1.57.91z"
              id="i1iN8DW9Ra"
            />
            <path
              d="M1102.42 322.66c.47.08.78.54.69 1.01-.03.18.05-.27.03-.13-.11.57-.65.94-1.21.83-.46-.08-1.03-.19-1.54-.28a.78.78 0 01-.62-.9c.04-.2.02-.11.06-.32a.69.69 0 01.8-.55c.53.1 1.29.24 1.79.34z"
              id="jFWIoTxE8"
            />
            <path
              d="M1107.53 322.97c.48.01.86.42.84.9 0 .18.01-.28.01-.13-.02.57-.5 1.02-1.08 1-.46-.02-1.04-.04-1.56-.06a.765.765 0 01-.74-.8c.01-.2 0-.1.01-.32a.68.68 0 01.7-.66l1.82.07z"
              id="bcHIatRC"
            />
            <path
              d="M1123.38 315.53c-.27.4-.17.94.22 1.21.15.11-.23-.16-.1-.07.47.33 1.11.21 1.44-.26.27-.39.59-.86.89-1.29.24-.35.16-.83-.19-1.07-.17-.11-.09-.06-.27-.19a.69.69 0 00-.95.18c-.31.44-.75 1.08-1.04 1.49z"
              id="b6uaI1EQ"
            />
            <path
              d="M1120.52 318.86a.87.87 0 000 1.23c.13.13-.2-.19-.09-.09.4.41 1.06.41 1.47 0l1.1-1.1c.3-.3.3-.79 0-1.09-.14-.14-.07-.08-.23-.23a.67.67 0 00-.96 0c-.38.38-.93.93-1.29 1.28z"
              id="cmMbc9cCr"
            />
            <path
              d="M1115.93 321.31c-.41.24-.56.77-.32 1.18.09.16-.14-.24-.06-.11.28.5.92.67 1.42.38l1.35-.78c.37-.21.49-.68.28-1.05-.1-.18-.05-.09-.16-.28a.677.677 0 00-.93-.25c-.47.27-1.14.66-1.58.91z"
              id="daSVZcOs0"
            />
            <path
              d="M1111.51 322.66c-.48.08-.79.54-.7 1.01.03.18-.05-.27-.02-.13.1.57.64.94 1.21.83.46-.08 1.02-.19 1.53-.28.42-.08.7-.48.62-.9-.04-.2-.02-.11-.06-.32a.68.68 0 00-.79-.55c-.53.1-1.3.24-1.79.34z"
              id="b76dB44d3"
            />
            <path
              d="M1106.39 322.97c-.48.01-.86.42-.84.9.01.18-.01-.28 0-.13.02.57.5 1.02 1.07 1 .47-.02 1.04-.04 1.56-.06.43-.01.76-.37.75-.8-.01-.2-.01-.1-.02-.32a.675.675 0 00-.7-.66l-1.82.07z"
              id="a3AT6nFwa1"
            />
          </g>
        </g>
        <g ref={moreInfoBtn} className="button" id="more-information">
          <g className="text">
            <g className="tooltip">
              <rect
                x="250.92"
                y="710.77"
                width="155"
                height="40"
                transform="translate(1256.225 -614.646)"
                rx="8"
              />
              <rect
                x="250.92"
                y="745.77"
                width="15"
                height="20"
                transform="translate(1256.225 -614.646)"
              />
            </g>
            <text
              id="f3RNiezNiF"
              x="246.92"
              y="720.77"
              transform="translate(1256.225 -614.646)"
            >
              <tspan x="260.92" dy="1em">
                More Information
              </tspan>
            </text>
          </g>
          <path
            d="M1552.7 198.35c0 22.57-18.32 40.89-40.89 40.89s-40.89-18.32-40.89-40.89 18.32-40.89 40.89-40.89 40.89 18.32 40.89 40.89z"
            id="a19Bnh1Uz"
            className="circle more-information"
          />
          <g className="icon">
            <path
              d="M1492.69 213.73c-3.91 0-5.79-2.41-5.64-7.21.15-4.81-1.42-7.49-4.73-8.05v-.29c3.31-.75 4.88-3.3 4.73-7.66-.15-4.35 1.73-6.3 5.64-5.85"
              id="J"
            />
            <path
              d="M1530.44 213.73c3.91 0 5.79-2.41 5.64-7.21-.15-4.81 1.42-7.49 4.73-8.05v-.29c-3.31-.75-4.88-3.3-4.73-7.66.15-4.35-1.73-6.3-5.64-5.85"
              id="K"
            />
            <path
              d="M1503.94 204.68a3.47 3.47 0 01-3.46 3.47 3.47 3.47 0 01-3.46-3.47 3.461 3.461 0 016.92 0z"
              id="L"
            />
            <path
              d="M1514.97 204.68c0 1.91-1.55 3.47-3.47 3.47a3.47 3.47 0 01-3.46-3.47c0-1.91 1.55-3.46 3.46-3.46 1.92 0 3.47 1.55 3.47 3.46z"
              id="M"
            />
            <path
              d="M1525.65 204.68a3.47 3.47 0 01-3.46 3.47 3.47 3.47 0 01-3.46-3.47 3.461 3.461 0 016.92 0z"
              id="N"
            />
          </g>
        </g>
        <g ref={continueBtn} className="button" id="continue">
          <g className="text">
            <g className="tooltip">
              <rect
                x="250.92"
                y="710.77"
                width="100"
                height="40"
                transform="translate(1508.416 -693.096)"
                rx="8"
              />
              <rect
                x="250.92"
                y="745.77"
                width="15"
                height="20"
                transform="translate(1508.416 -693.096)"
              />
            </g>
            <text
              id="f3RNiezNiF"
              x="246.92"
              y="720.77"
              transform="translate(1508.416 -693.096)"
            >
              <tspan x="260.92" dy="1em">
                Next Level
              </tspan>
            </text>
          </g>
          <path
            d="M1804.89 119.62c0 22.57-18.32 40.89-40.89 40.89s-40.89-18.32-40.89-40.89 18.32-40.89 40.89-40.89 40.89 18.32 40.89 40.89z"
            className="circle continue"
            id="bagXoVP5fm"
          />
          <g className="icon" id="next-icon">
            <path
              d="M1763 135.49c-.78.81-2.1.75-2.79-.14-4.16-5.32-15.25-19.5-19.39-24.79-.59-.75-.08-1.85.87-1.89 9.7-.36 36.21-1.37 45.83-1.73.97-.04 1.49 1.12.82 1.82-5.36 5.66-19.91 21-25.34 26.73z"
              id="awwPLOyn"
            />
            <path
              d="M1755.92 129.82c-5.5 1.58-8.94 2.56-10.31 2.95-.3.08-.54-.23-.4-.49.74-1.4 2.61-4.9 5.6-10.51"
              id="b2V7m9dbJ"
            />
            <path
              d="M1752.28 123.54c13.42-5.47 21.81-8.9 25.17-10.26.18-.08.09-.35-.1-.31-3.78.83-13.24 2.91-28.38 6.23"
              id="d1jvihwIna"
            />
          </g>
        </g>
      </g>
    </StyledSVGMainPath>
  );
};

export const StyledSVGMainPath = styled("svg")`
  g {
    path {
      opacity: 0;
      stroke-width: 2;
      fill: transparent;
      pointer-events: none;
      stroke: currentColor;

      &#main-path {
        stroke-dasharray: 2800;
        animation: main_line 2s linear both;
        pointer-events: none;
        animation-delay: 2s;
        ${getPathLineInAnimation("main_line", -2800)}
      }

      &.circle {
        fill: #ffb600;
      }
    }

    &.button {
      position: relative;
      opacity: 0;
      clip-path: circle(0);
      animation: fade_path_buttons 0.3s ease-in both;
      animation-delay: 3s;
      pointer-events: all;
      cursor: pointer;

      text,
      .text {
        opacity: 0;
        stroke-width: 1;
        pointer-events: none;
        fill: currentColor;
        stroke: currentColor;
        transition: opacity 0.5s;
      }

      .text {
        .tooltip {
          rect {
            fill: #ffb600;
            stroke-width: 0;

            &:nth-child(2) {
              clip-path: polygon(0 0, 0% 100%, 100% 0);
            }
          }
        }

        text {
          fill: currentColor;
          stroke: currentColor;
        }
      }

      &.hovering {
        text,
        .text {
          opacity: 1;
        }
      }

      &.selected {
        path.circle {
          fill: currentColor;
        }
        .icon path {
          stroke: #ffb600;
        }
      }

      path.circle,
      .icon path {
        opacity: 1;
        pointer-events: all;
        transition: fill 0.3s, stroke 0.3s;
      }

      .icon path {
        pointer-events: none;
      }

      &:nth-child(2) {
        animation-delay: 3.3s;
      }
      &:nth-child(3) {
        animation-delay: 3.6s;
      }
      &:nth-child(4) {
        animation-delay: 3.9s;
      }
      &:nth-child(5) {
        animation-delay: 4s;
      }
      &:nth-child(6) {
        animation-delay: 4.4s;
      }

      @keyframes fade_path_buttons {
        0% {
          opacity: 0;
          clip-path: circle(0);
        }
        100% {
          clip-path: circle(100%);
          opacity: 1;
        }
      }
    }
  }
`;
