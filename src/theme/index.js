// import { createMuiTheme, responsiveFontSizes } from "@mui/core";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import createBreakpoints from "@mui/core/styles/createBreakpoints";

import palette from "./palette";
import typography from "./typography";
import fontFamily from "./fontFamily";

// const breakpoints = createBreakpoints({});

const theme = responsiveFontSizes(
  createTheme({
    palette,
    layout: {
      contentWidth: 1350,
    },
    typography: {
      fontFamily: ["Roboto", "Arial"].join(","),
      ...typography,
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      // MuiCssBaseline: {
      //   "@global": {
      //     "@font-face": fontFamily,
      //   },
      // },
      // MuiButton: {
      //   contained: {
      //     borderRadius: 50,
      //     borderWidth: "0.15rem !important",
      //     color: palette.primary.main,
      //     boxShadow: "none",
      //     backgroundColor: palette.common.white,
      //     "&:hover": {
      //       backgroundColor: `${palette.common.white}BF`,
      //       boxShadow: "none",
      //       color: palette.common.white,
      //     },
      //   },
      //   containedPrimary: {
      //     color: palette.common.white,
      //     "&:hover": {
      //       backgroundColor: `${palette.primary.main}BF !important`,
      //     },
      //   },
      //   containedSecondary: {
      //     color: palette.common.white,
      //     "&:hover": {
      //       backgroundColor: `${palette.secondary.main}BF !important`,
      //     },
      //   },
      //   outlined: {
      //     borderRadius: 50,
      //     borderWidth: "0.15rem !important",
      //     "&:hover": {
      //       backgroundColor: `${palette.secondary.main}26 !important`,
      //       borderColor: "transparent !important",
      //     },
      //   },
      //   containedSizeLarge: {
      //     padding: "0.8rem 2rem",
      //   },
      //   outlinedSizeLarge: {
      //     padding: "0.8rem 2rem",
      //   },
      //   sizeSmall: {
      //     padding: "0.55rem 1.5rem",
      //   },
      //   label: {
      //     fontSize: "1.125rem",
      //   },
      // },
      // MuiCheckbox: {
      //   root: {
      //     color: palette.common.white,
      //   },
      // },
      // MuiTypography: typography,
      // MuiStepIcon: {
      //   root: {
      //     "&$active": {
      //       color: "blue",
      //     },
      //     "&$completed": {
      //       color: "white",
      //     },
      //   },
      // },
      // MuiTableCell: {
      //   root: {
      //     fontFamily: "Roboto",
      //     // borderLeft: `1px ${palette.grey.A100}`,
      //     borderLeft: `1px solid ${palette.grey.A100}`,
      //     [breakpoints.up("md")]: {
      //       fontSize: "1rem",
      //       padding: "13px",
      //     },
      //     [breakpoints.down("md")]: {
      //       fontSize: "0.9rem",
      //       padding: "10px",
      //     },
      //   },
      //   head: {
      //     fontWeight: 900,
      //     [breakpoints.up("md")]: {
      //       fontSize: "1.3rem",
      //     },
      //     [breakpoints.down("md")]: {
      //       fontSize: "1.1rem",
      //     },
      //   },
      // },
      // MuiTableHead: {
      //   root: {
      //     borderBottom: `3px solid ${palette.grey.A100}`,
      //   },
      // },
    },
  })
);

export default theme;
