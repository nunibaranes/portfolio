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

export interface IMenuItem extends IRoute {
  isActive?: boolean;
}

export enum MenuType {
  Default = "default",
  Route = "route",
}
