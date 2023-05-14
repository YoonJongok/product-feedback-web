import { createTheme } from '@mui/material';
import { colors, themeColors } from './colors';

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
		'large-00-light': true;
		'large-00-regular': true;
		'large-00-bold': true;
		'large-01-light': true;
		'large-01-regular': true;
		'large-01-bold': true;
		'large-02-light': true;
		'large-02-regular': true;
		'large-02-bold': true;
	}
}

export const theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'small-00-light': { fontSize: '10px', lineHeight: '15px', fontWeight: 300 },
		'small-00-regular': {
			fontSize: '10px',
			lineHeight: '15px',
			fontWeight: 400,
		},
		'small-00-bold': { fontSize: '10px', lineHeight: '15px', fontWeight: 700 },
		'small-01-light': { fontSize: '12px', lineHeight: '18px', fontWeight: 300 },
		'small-01-regular': {
			fontSize: '12px',
			lineHeight: '18px',
			fontWeight: 400,
		},
		'small-01-bold': { fontSize: '12px', lineHeight: '18px', fontWeight: 700 },
		'small-02-light': { fontSize: '14px', lineHeight: '21px', fontWeight: 300 },
		'small-02-regular': {
			fontSize: '14px',
			lineHeight: '21px',
			fontWeight: 400,
		},
		'small-02-bold': { fontSize: '14px', lineHeight: '21px', fontWeight: 700 },
		'medium-00-light': {
			fontSize: '22px',
			lineHeight: '30px',
			fontWeight: 300,
		},
		'medium-00-regular': {
			fontSize: '22px',
			lineHeight: '30px',
			fontWeight: 400,
		},
		'medium-00-bold': { fontSize: '22px', lineHeight: '30px', fontWeight: 700 },
		'medium-01-light': {
			fontSize: '26px',
			lineHeight: '32px',
			fontWeight: 300,
		},
		'medium-01-regular': {
			fontSize: '26px',
			lineHeight: '32px',
			fontWeight: 400,
		},
		'medium-01-bold': { fontSize: '26px', lineHeight: '32px', fontWeight: 700 },
		'medium-02-light': {
			fontSize: '28px',
			lineHeight: '34px',
			fontWeight: 300,
		},
		'medium-02-regular': {
			fontSize: '28px',
			lineHeight: '34px',
			fontWeight: 400,
		},
		'medium-02-bold': { fontSize: '28px', lineHeight: '34px', fontWeight: 700 },
		'large-00-light': { fontSize: '42px', lineHeight: '50px', fontWeight: 300 },
		'large-00-regular': {
			fontSize: '42px',
			lineHeight: '50px',
			fontWeight: 400,
		},
		'large-00-bold': { fontSize: '42px', lineHeight: '50px', fontWeight: 700 },
		'large-01-light': { fontSize: '46px', lineHeight: '60px', fontWeight: 300 },
		'large-01-regular': {
			fontSize: '46px',
			lineHeight: '60px',
			fontWeight: 400,
		},
		'large-01-bold': { fontSize: '46px', lineHeight: '60px', fontWeight: 700 },
		'large-02-light': { fontSize: '52px', lineHeight: '60px', fontWeight: 300 },
		'large-02-regular': {
			fontSize: '52px',
			lineHeight: '60px',
			fontWeight: 400,
		},
		'large-02-bold': { fontSize: '52px', lineHeight: '60px', fontWeight: 700 },
	},
	spacing: 4,
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				// ":root": `
				// @font-face {
				//     font-family:'Interstate';
				//     font-weight: normal;
				//     font-style: normal;
				//     src: local('Interstate'), url(${InterstateRegular}) format('woff');
				// }
				// @font-face {
				//     font-family:'Interstate';
				//     font-weight: 300
				//     font-style: normal;
				//     src: local('InterstateLight'), url(${InterstateLight}) format('woff');
				// }
				// @font-face {
				//     font-family:'Interstate';
				//     font-weight: bold;
				//     font-style: normal;
				//     src: local('InterstateBold'), url(${InterstateBold}) format('woff');
				// }
				// `,
				overflowY: 'scroll',
				color: themeColors.textDark,
			},
		},
		MuiSkeleton: {
			styleOverrides: {
				root: {
					backgroundColor: colors['neutral-100'],
				},
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
					backgroundColor: colors['slate-50'],
				},
				input: {
					'&::placeholder': {
						color: colors['zinc-300'],
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
					color: colors['blue-500'],
					padding: 0,
					borderColor: colors['blue-500'],
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
					color: themeColors.textDark,
					cursor: 'pointer',
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					'& .MuiChip-label': {
						fontSize: '12px',
						lineHeight: '16px',
						fontWeight: 400,
					},
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
						'&.Mui-active': {
							color: colors['neutral-600'],
						},
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
