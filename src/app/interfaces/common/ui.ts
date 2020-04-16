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
