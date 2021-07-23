import { ThemeConfig, ThemeDirection } from "@chakra-ui/react";

import { colors } from "./colors";
import { global } from "./global";
import { typography } from "./typography";

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
  styles: global,
  config,
};

export type Theme = typeof theme;
