export type gwsIconID =
  | "reset"
  | "reset-bold"
  | "inverted"
  | "focus-top"
  | "focus-bottom"
  | "apple-share";

export type gwsIconKey =
  | "Reset"
  | "ResetBold"
  | "Inverted"
  | "FocusTop"
  | "FocusBottom"
  | "AppleShare";

export enum gwsIconsEnum {
  Reset = "reset",
  ResetBold = "reset-bold",
  Inverted = "inverted",
  FocusTop = "focus-top",
  FocusBottom = "focus-bottom",
  AppleShare = "apple-share",
}

export const gwsIcons: { [key in gwsIconsEnum]: string } = {
  [gwsIconsEnum.Reset]: "61697",
  [gwsIconsEnum.ResetBold]: "61698",
  [gwsIconsEnum.Inverted]: "61699",
  [gwsIconsEnum.FocusTop]: "61700",
  [gwsIconsEnum.FocusBottom]: "61701",
  [gwsIconsEnum.AppleShare]: "61702",
};
