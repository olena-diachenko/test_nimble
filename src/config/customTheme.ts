import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
} from "@mui/material/styles";
import { createStyles } from "@mui/material";
import { fonts, fontSize } from "./fonts";
import colors from "./themeColors";

const themeColors = () =>
  createStyles({
    palette: colors,
  }) as PaletteOptions;

const theme = () =>
  createStyles({
    breakpoints: {
      values: {
        xs: 0,
        sm: 400,
        md: 768,
        lg: 1280,
        xl: 1280,
      },
    },
    typography: {
      h2: {
        fontFamily: fonts.text,
        fontSize: fontSize.l,
        fontWeight: 500,
        lineHeight: "30px",
        letterSpacing: "1px",
      },
      h3: {
        fontFamily: fonts.text,
        letterSpacing: "1px",
      },
      body1: {
        fontFamily: fonts.text,
        fontWeight: 400,
        fontSize: fontSize.m,
      },
      buttonText: {
        fontFamily: fonts.text,
        fontWeight: 500,
        fontSize: fontSize.m,
        lineHeight: "24px",
        letterSpacing: "1px",
      },
      tagText: {
        fontFamily: fonts.text,
        fontWeight: 500,
        fontSize: fontSize.s,
        lineHeight: "19.5px",
        letterSpacing: "1px",
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            width: "100%",
            height: "44px",
            padding: "0",
            borderRadius: "4px",
            fontFamily: fonts.text,
            fontWeight: 500,
            fontSize: fontSize.m,
            lineHeight: "24px",
            textTransform: "none",
            border: "1px solid",
            "&.MuiButton-outlinedPrimary": {
              backgroundColor: colors.background.default,
              borderColor: colors.background.input,
              color: colors.text.primary,
              "&:hover": {
                backgroundColor: colors.background.contact,
                borderColor: colors.background.input,
              },
            },
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            width: "100%",
            marginTop: "6px",
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            width: "100%",
            height: "48px",
            padding: "14px 12px",
            border: "1px solid",
            borderColor: colors.background.input,
            color: colors.text.primary,
            lineHeight: "normal",
            "& .MuiInputBase-input": {
              padding: "14px 0",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "unset",
              borderStyle: "unset",
              borderWidth: "unset",
              borderColor: "unset",
            },
            "&.Mui-focused": {
              border: "2px solid",
              borderColor: colors.background.input,
            },
            "&.Mui-error": {
              border: "2px solid",
              borderColor: colors.error.main,
            },
            "& .MuiInput-input": {
              "&::placeholder": {
                color: colors.background.input,
              },
            },
            "& .MuiFormHelperText-root": {
              marginTop: "4px",
              padding: "0 16px",
              fontFamily: fonts.text,
              fontWeight: 400,
              fontSize: fontSize.xs,
              lineHeight: "normal",
              color: colors.error.main,
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: colors.text.primary,
            lineHeight: "normal",
            fontSize: fontSize.xs,
            "&.Mui-focused": {
              color: colors.text.primary,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            "&.primaryCard": {
              minWidth: "340px",
              borderRadius: "10px",
              padding: "20px",
              "@media (min-width:768px)": {
                minWidth: "380px",
                padding: "30px 20px",
              },
              "@media (min-width:1920px)": {
                minWidth: "505px",
                padding: "30px 40px",
              },
            },
          },
        },
      },
    },
  }) as ThemeOptions;

const customTheme = createTheme({ ...theme(), ...themeColors() });

export default customTheme;
