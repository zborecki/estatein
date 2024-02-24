import '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    'xl+': true;
    xxl: true;
  }

  interface Palette {
    purple: Palette['grey'];
  }

  interface PaletteOptions {
    purple?: PaletteOptions['grey'];
  }

  interface TypographyVariants {
    curvedText: TypographyStyleOptions;
    logotype: TypographyStyleOptions;
    section: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    curvedText?: TypographyStyleOptions;
    logotype?: TypographyStyleOptions;
    section?: TypographyStyleOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    purple: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    curvedText: true;
    logotype: true;
    section: true;
  }
}
