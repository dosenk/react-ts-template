import { createTheme } from "@mui/material";
import { Theme } from "@mui/material/styles/createTheme";
import BhuTukaExpandedOne from "../assets/fonts/BhuTukaExpandedOne-Regular.ttf";

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

  typography: {
    fontFamily: [
      // "-apple-system",
      // "BlinkMacSystemFont",
      // '"Segoe UI"',
      // "Roboto",
      // '"Helvetica Neue"',
      // "Arial",
      "BhuTukaExpandedOne",
      // "sans-serif",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'BhuTukaExpandedOne';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('BhuTukaExpandedOne'), local('BhuTukaExpandedOne-Regular'), url(${BhuTukaExpandedOne}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: "BhuTukaExpandedOne",
      },
      styleOverrides: {
        h1: `
        @font-face {
          font-family: 'BhuTukaExpandedOne';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('BhuTukaExpandedOne'), local('BhuTukaExpandedOne-Regular'), url(${BhuTukaExpandedOne}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
      },
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
