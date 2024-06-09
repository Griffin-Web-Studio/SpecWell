export type IconsId =
  | "reset"
  | "reset-bold"
  | "inverted"
  | "focus-top"
  | "focus-bottom"
  | "apple-share";

export type IconsKey =
  | "Reset"
  | "ResetBold"
  | "Inverted"
  | "FocusTop"
  | "FocusBottom"
  | "AppleShare";

export enum Icons {
  Reset = "reset",
  ResetBold = "reset-bold",
  Inverted = "inverted",
  FocusTop = "focus-top",
  FocusBottom = "focus-bottom",
  AppleShare = "apple-share",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Reset]: "61697",
  [Icons.ResetBold]: "61698",
  [Icons.Inverted]: "61699",
  [Icons.FocusTop]: "61700",
  [Icons.FocusBottom]: "61701",
  [Icons.AppleShare]: "61702",
};
