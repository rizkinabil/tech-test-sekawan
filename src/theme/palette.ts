import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

/*
 * from minimal UI
 */
// export const primary = {
//   lighter: '#E7F4F9',
//   light: '#42A7D1',
//   main: '#875BF7',
//   dark: '#0A4863',
//   darker: '#041D2',
//   contrastText: '#FFFFFF',
// };

/*
 * primary color legion
 */

export const primary = {
  lighter: '#B2DDFF',
  light: '#84CAFF',
  main: '#2E90FA',
  dark: '#175CD3',
  darker: '#1849A9',
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#FAEBF3',
  light: '#DB5EA3',
  main: '#D3378D',
  dark: '#A82C70',
  darker: '#3F102A',
  contrastText: '#FFFFFF',
};

/*
 * tertiary color legion
 */
export const tertiary = {
  lighter: '#EAECF0',
  light: '#D0D5DD',
  main: '#667085',
  dark: '#344054',
  darker: '#1D2939',
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#EAF2FD',
  light: '#82B2F4',
  main: '#2F80ED',
  dark: '#2059A5',
  darker: '#0E2647',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#D6F0E1',
  light: '#5BC387',
  main: '#33B469',
  dark: '#237D49',
  darker: '#14482A',
  contrastText: '#ffffff',
};

export const warning = {
  lighter: '#F7E4A',
  light: '#EFC957',
  main: '#EBBC2E',
  dark: '#BC9624',
  darker: '#8D701B',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FDEBEB',
  light: '#F06161',
  main: '#ED3A3A',
  dark: '#F06161',
  darker: '#5E1717',
  contrastText: '#FFFFFF',
};

export const blue = {
  0: '#E8F5FA',
  100: '#D0E9F4',
  200: '#A1D3E8',
  300: '#72BDDD',
  400: '#43A7D1',
  500: '#1491C6',
  600: '#0F6D95',
  700: '#0A4963',
  800: '#052432',
  900: '#020F14',
  500_8: alpha('#1491C6', 0.08),
  500_12: alpha('#1491C6', 0.12),
  500_16: alpha('#1491C6', 0.16),
  500_24: alpha('#1491C6', 0.24),
  500_32: alpha('#1491C6', 0.32),
  500_48: alpha('#1491C6', 0.48),
  500_56: alpha('#1491C6', 0.56),
  500_80: alpha('#1491C6', 0.8),
};

export const magenta = {
  0: '#FBEC4',
  100: '#F6D7E8',
  200: '#EDAFD1',
  300: '#E587BB',
  400: '#DC5FA4',
  500: '#D3378D',
  600: '#9E296A',
  700: '#6A1C47',
  800: '#350E23',
  900: '#15060E',
  500_8: alpha('#D3378D', 0.08),
  500_12: alpha('#D3378D', 0.12),
  500_16: alpha('#D3378D', 0.16),
  500_24: alpha('#D3378D', 0.24),
  500_32: alpha('#D3378D', 0.32),
  500_48: alpha('#D3378D', 0.48),
  500_56: alpha('#D3378D', 0.56),
  500_80: alpha('#D3378D', 0.8),
};

export const green = {
  0: '#E8F3F6',
  100: '#CFE6EB',
  200: '#9FCDD7',
  300: '#6FB4C4',
  400: '#3F9BB0',
  500: '#0F829C',
  600: '#0B6275',
  700: '#08414E',
  800: '#042127',
  900: '#020D10',
  500_8: alpha('#0F829C', 0.08),
  500_12: alpha('#0F829C', 0.12),
  500_16: alpha('#0F829C', 0.16),
  500_24: alpha('#0F829C', 0.24),
  500_32: alpha('#0F829C', 0.32),
  500_48: alpha('#0F829C', 0.48),
  500_56: alpha('#0F829C', 0.56),
  500_80: alpha('#0F829C', 0.8),
};

export const purple = {
  0: '#F3EDF8',
  100: '#E5D9F0',
  200: '#CBB4E1',
  300: '#B18ED1',
  400: '#9769C2',
  500: '#7D43B3',
  600: '#5E3286',
  700: '#3F225A',
  800: '#1F112D',
  900: '#0D0712',
  500_8: alpha('#7D43B3', 0.08),
  500_12: alpha('#7D43B3', 0.12),
  500_16: alpha('#7D43B3', 0.16),
  500_24: alpha('#7D43B3', 0.24),
  500_32: alpha('#7D43B3', 0.32),
  500_48: alpha('#7D43B3', 0.48),
  500_56: alpha('#7D43B3', 0.56),
  500_80: alpha('#7D43B3', 0.8),
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };

  const dark = {
    ...base,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: grey[500],
      disabled: grey[600],
    },
    background: {
      paper: grey[800],
      default: grey[900],
      neutral: alpha(grey[500], 0.12),
    },
    action: {
      ...base.action,
      active: grey[500],
    },
  };

  return mode === 'light' ? light : dark;
}
