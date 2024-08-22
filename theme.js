import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecundary: "#586069",
    primary: "#0366d6",
    white: "white",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    android: {
      main: "Roboto",
    },
    ios: {
      main: "Arial",
    },
    default: {
      main: "System",
    },
  }),
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};
export default theme;
