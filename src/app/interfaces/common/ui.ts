import { IRoute } from "./router";

export enum Alignment {
  /** horizontal-alignments */
  Right = "right",
  Left = "left",
  Center = "center",

  /** vertical-alignments */
  Top = "top",
  Bottom = "bottom",
  Middle = "middle",
}

export interface IRefObject<T> {
  readonly current: T | null;
}

export enum MenuType {
  Default = "default",
  Route = "route",
}

export interface IMenuItem {
  id: string;
  title?: string;
  isActive?: boolean; // current page/item
  isVisible?: boolean; // controls visibility in navigation
  hidden?: boolean;
  disabled?: boolean;
  children?: JSX.Element;
}

export interface IStyledSVGWrapper {
  className?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: string;
  width?: string;
  height?: string;
  margin?: string;
  strokeLinecap?: string;
}
