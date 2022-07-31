import { ITheme } from "./mainTheme";

// breakpoints
export const upMd = ({ theme }: ITheme) => theme.breakpoints.down("md");

// colors
export const myColorMain = ({ theme }: ITheme) => theme.palette.myColor.main;
export const myColorMyColor = ({ theme }: ITheme) =>
  theme.palette.myColor.myColor;
