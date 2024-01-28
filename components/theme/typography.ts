import type {TypographyOptions} from "@components/interface";

export function remToPx(value: string): number {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({sm, md, lg}: {
  sm: number,
  md: number,
  lg: number
}): {
  "@media (min-width:600px)": { fontSize: string },
  "@media (min-width:900px)": { fontSize: string },
  "@media (min-width:1200px)": { fontSize: string }
} {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

export const primaryFont = 'Roboto, sans-serif';
export const secondaryFont = 'Barlow, sans-serif';


export const typography: TypographyOptions = {
  fontFamily: primaryFont,
  fontSecondaryFamily: secondaryFont,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 300,
    fontSize: pxToRem(96),
    letterSpacing: '-0.0083em',
    lineHeight: pxToRem(96),
    color: "white",
    ...responsiveFontSizes({sm: 48, md: 72, lg: 96}),
  },
  h2: {
    fontWeight: 300,
    fontSize: pxToRem(60),
    lineHeight: pxToRem(60),
    color: "white",
    ...responsiveFontSizes({sm: 40, md: 50, lg: 60}),
  },
  h3: {
    fontWeight: 400,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({sm: 26, md: 30, lg: 32}),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({sm: 20, md: 24, lg: 24}),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({sm: 19, md: 20, lg: 20}),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({sm: 18, md: 18, lg: 18}),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset',
  }
};
