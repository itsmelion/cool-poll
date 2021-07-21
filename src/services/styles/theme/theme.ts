// import components from "./components";
import { ThemeConfig, ThemeDirection } from "@chakra-ui/react";

import { colors } from "./foundations/colors";
import { typography } from "./foundations/typography";
import { global } from "./global";

const direction = "ltr" as ThemeDirection;

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "light",
  cssVarPrefix: "chakra",
};

export const theme = {
  direction,
  colors,
  ...typography,
  // components,
  styles: global,
  config,
};

export type Theme = typeof theme;
