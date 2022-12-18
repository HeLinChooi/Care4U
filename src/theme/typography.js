import palette from "./palette";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const typography = {
  h1: {
    fontSize: "24px",
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
  },
  h2: {
    fontSize: "22px",
    [theme.breakpoints.up("md")]: {
      fontSize: "38px",
    },
  },
  h3: {
    fontSize: "20px",
    [theme.breakpoints.up("md")]: {
      fontSize: "32px",
    },
  },
  h4: {
    fontSize: "18px",
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
    },
  },
  h5: {
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
  },
  h6: {
    fontSize: "14px",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },
  subtitle1: {
    fontSize: "16px",
  },
  subtitle2: {
    fontWeight: 400,
  },
  body1: {
    fontSize: "13px",
    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
    },
  },
  body2: {
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
  },
  button: {
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
  },
  caption: {
    fontSize: "12px",
    lineHeight: 1.35,
  },
  overline: {
    fontSize: "13px",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "Roboto",
  },
};
// const typography = {
//   h1: {
//     color: palette.text.primary,
//     fontWeight: 900,
//     fontSize: "40px",
//     lineHeight: 1.1,
//     fontFamily: "ConcertOne",
//   },
//   h2: {
//     color: palette.text.primary,
//     fontWeight: 900,
//     fontSize: "38px",
//     lineHeight: 1.5,
//   },
//   h3: {
//     color: palette.text.primary,
//     fontWeight: 900,
//     fontSize: "32px",
//     lineHeight: 1.25,
//   },
//   h4: {
//     color: palette.text.primary,
//     fontWeight: 900,
//     fontSize: "24px",
//     lineHeight: 1.35,
//   },
//   h5: {
//     color: palette.text.primary,
//     fontWeight: 900,
//     fontSize: "20px",
//     lineHeight: 1.4,
//   },
//   h6: {
//     color: palette.text.primary,
//     fontWeight: 900,
//     fontSize: "18px",
//     lineHeight: 1.45,
//     fontFamily: "Roboto",
//   },
//   subtitle1: {
//     color: palette.text.primary,
//     fontSize: "16px",
//     lineHeight: 1.4,
//     fontFamily: "Roboto",
//   },
//   subtitle2: {
//     color: palette.text.secondary,
//     fontWeight: 400,
//     fontSize: "16px",
//     lineHeight: 1.4,
//   },
//   body1: {
//     color: palette.text.primary,
//     fontSize: "15px",
//     lineHeight: 1.3,
//     fontFamily: "Roboto",
//   },
//   body2: {
//     color: palette.text.secondary,
//     fontSize: "14px",
//     lineHeight: 1.3,
//   },
//   button: {
//     color: palette.text.primary,
//     fontSize: "14px",
//     fontWeight: 900,
//     lineHeight: 1.3,
//   },
//   caption: {
//     color: palette.text.secondary,
//     fontSize: "12px",
//     lineHeight: 1.35,
//   },
//   overline: {
//     fontSize: "13px",
//     fontWeight: "bold",
//     textTransform: "capitalize",
//     fontFamily: "Roboto",
//   },
// };

export default typography;
