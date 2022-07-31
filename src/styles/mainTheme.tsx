import { createTheme } from "@mui/material";
import { Theme } from "@mui/material/styles/createTheme";

export interface ITheme {
  theme: Theme;
}

const theme: Theme = createTheme({
  palette: {
    myColor: {
      main: "#000",
      myColor: "#123212",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 868,
      lg: 992,
      xl: 1200,
      xxl: 1400,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    myColor: Palette["primary"];
  }
  interface PaletteOptions {
    myColor: PaletteOptions["primary"];
  }

  interface PaletteColor {
    myColor?: string;
  }
  interface SimplePaletteColorOptions {
    myColor?: string;
  }
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    mobile?: true; // adds the `mobile` breakpoint
    tablet?: true;
    laptop?: true;
    desktop?: true;
  }
}

export default theme;
