import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    myColor: {
      main: '#000',
      myColor: '#123212',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    myColor: Palette['primary'];
  }
  interface PaletteOptions {
    myColor: PaletteOptions['primary'];
  }

  interface PaletteColor {
    myColor?: string;
  }
  interface SimplePaletteColorOptions {
    myColor?: string;
  }
}

export default theme;
