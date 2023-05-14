import { createTheme } from '@mui/material';
import { themeColors } from './colors';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    containdPurple: true;
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    'small-00-light': React.CSSProperties;
    'small-00-regular': React.CSSProperties;
    'small-00-bold': React.CSSProperties;
    'small-01-light': React.CSSProperties;
    'small-01-regular': React.CSSProperties;
    'small-01-bold': React.CSSProperties;
    'small-02-light': React.CSSProperties;
    'small-02-regular': React.CSSProperties;
    'small-02-bold': React.CSSProperties;
    'medium-00-light': React.CSSProperties;
    'medium-00-regular': React.CSSProperties;
    'medium-00-bold': React.CSSProperties;
    'medium-01-light': React.CSSProperties;
    'medium-01-regular': React.CSSProperties;
    'medium-01-bold': React.CSSProperties;
    'medium-02-light': React.CSSProperties;
    'medium-02-regular': React.CSSProperties;
    'medium-02-bold': React.CSSProperties;
    'large-00-light': React.CSSProperties;
    'large-00-regular': React.CSSProperties;
    'large-00-bold': React.CSSProperties;
    'large-01-light': React.CSSProperties;
    'large-01-regular': React.CSSProperties;
    'large-01-bold': React.CSSProperties;
    'large-02-light': React.CSSProperties;
    'large-02-regular': React.CSSProperties;
    'large-02-bold': React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    'small-00-light': React.CSSProperties;
    'small-00-regular': React.CSSProperties;
    'small-00-bold': React.CSSProperties;
    'small-01-light': React.CSSProperties;
    'small-01-regular': React.CSSProperties;
    'small-01-bold': React.CSSProperties;
    'small-02-light': React.CSSProperties;
    'small-02-regular': React.CSSProperties;
    'small-02-bold': React.CSSProperties;
    'medium-00-light': React.CSSProperties;
    'medium-00-regular': React.CSSProperties;
    'medium-00-bold': React.CSSProperties;
    'medium-01-light': React.CSSProperties;
    'medium-01-regular': React.CSSProperties;
    'medium-01-bold': React.CSSProperties;
    'medium-02-light': React.CSSProperties;
    'medium-02-regular': React.CSSProperties;
    'medium-02-bold': React.CSSProperties;
    'medium-03-light': React.CSSProperties;
    'medium-03-regular': React.CSSProperties;
    'medium-03-bold': React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'small-00-light': true;
    'small-00-regular': true;
    'small-00-bold': true;
    'small-01-light': true;
    'small-01-regular': true;
    'small-01-bold': true;
    'small-02-light': true;
    'small-02-regular': true;
    'small-02-bold': true;
    'medium-00-light': true;
    'medium-00-regular': true;
    'medium-00-bold': true;
    'medium-01-light': true;
    'medium-01-regular': true;
    'medium-01-bold': true;
    'medium-02-light': true;
    'medium-02-regular': true;
    'medium-02-bold': true;
    'medium-03-light': true;
    'medium-03-regular': true;
    'medium-03-bold': true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ['Jost', 'sans-serif'].join(','),
    'small-00-light': { fontSize: '13px', lineHeight: '18px', fontWeight: 300 },
    'small-00-regular': {
      fontSize: '13px',
      lineHeight: '18px',
      fontWeight: 400,
    },
    'small-00-bold': { fontSize: '13px', lineHeight: '18px', fontWeight: 700 },
    'small-01-light': { fontSize: '14px', lineHeight: '20px', fontWeight: 300 },
    'small-01-regular': {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    'small-01-bold': { fontSize: '14px', lineHeight: '20px', fontWeight: 700 },
    'small-02-light': { fontSize: '15px', lineHeight: '22px', fontWeight: 300 },
    'small-02-regular': {
      fontSize: '15px',
      lineHeight: '22px',
      fontWeight: 400,
    },
    'small-02-bold': { fontSize: '15px', lineHeight: '22px', fontWeight: 700 },
    'medium-00-light': {
      fontSize: '16px',
      lineHeight: '23px',
      fontWeight: 300,
    },
    'medium-00-regular': {
      fontSize: '16px',
      lineHeight: '23px',
      fontWeight: 400,
    },
    'medium-00-bold': { fontSize: '16px', lineHeight: '23px', fontWeight: 700 },
    'medium-01-light': {
      fontSize: '18px',
      letterSpacing: '-0.25px',
      lineHeight: '26px',
      fontWeight: 300,
    },
    'medium-01-regular': {
      fontSize: '18px',
      letterSpacing: '-0.25px',
      lineHeight: '26px',
      fontWeight: 400,
    },
    'medium-01-bold': {
      fontSize: '18px',
      letterSpacing: '-0.25px',
      lineHeight: '26px',
      fontWeight: 700,
    },
    'medium-02-light': {
      fontSize: '20px',
      letterSpacing: '-0.25px',
      lineHeight: '29px',
      fontWeight: 300,
    },
    'medium-02-regular': {
      fontSize: '20px',
      letterSpacing: '-0.25px',
      lineHeight: '29px',
      fontWeight: 400,
    },
    'medium-02-bold': {
      fontSize: '20px',
      letterSpacing: '-0.25px',
      lineHeight: '29px',
      fontWeight: 700,
    },
    'medium-03-light': {
      fontSize: '24px',
      letterSpacing: '-0.33px',
      lineHeight: '35px',
      fontWeight: 300,
    },
    'medium-03-regular': {
      fontSize: '24px',
      letterSpacing: '-0.33px',
      lineHeight: '35px',
      fontWeight: 400,
    },
    'medium-03-bold': {
      fontSize: '24px',
      letterSpacing: '-0.33px',
      lineHeight: '35px',
      fontWeight: 700,
    },
  },
  spacing: 4,
  breakpoints: {
    values: {
      mobile: 375,
      tablet: 768,
      desktop: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        overflowY: 'scroll',
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          border: 'none',
          borderRadius: '10px',
          textTransform: 'capitalize',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: themeColors.blue200,
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: themeColors.blue300,
          },
        },
        {
          props: { variant: 'contained', color: 'error' },
          style: {
            backgroundColor: themeColors.red,
          },
        },
        {
          props: { variant: 'containdPurple' },
          style: {
            backgroundColor: themeColors.purple200,
            '&:hover': {
              backgroundColor: themeColors.purple100,
            },
          },
        },
      ],
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {},
        rectangular: {
          borderRadius: '4px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          lineHeight: '18px',
          fontWeight: 400,
          borderRadius: 2,
          '& .MuiInputBase-inputSizeSmall': {
            padding: 8.5,
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          translate: 'translate(14px, 14px) scale(1)',
        },
        shrink: {
          transform: 'translate(14px, -9px) scale(0.75)',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          root: {
            maxHeight: '48px',
          },
        },
        outlined: {
          padding: '15px 14px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: '0 14px 0 10px',
          '& .MuiSvgIcon-root': {
            fontSize: 26,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          cursor: 'pointer',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: themeColors.greyBlue200,
          padding: '6px 12px',
          fontSize: '14px',
          color: themeColors.blue200,
          fontWeight: 700,
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
            borderBottomWidth: '1px',
            padding: '20px 8px',
          },
          '& .MuiTableSortLabel-root': {
            fontWeight: 400,
            '&.Mui-active': {},
          },
          '& .MuiTableCell-head': {
            fontSize: '14px',
            lineHeight: '21px',
            fontWeight: 300,
            padding: '10px 8px',
          },
        },
      },
    },
  },
});

