import { ChakraTheme, ThemeConfig, ThemeDirection } from "@chakra-ui/react";

import { colors } from "./colors";
import { global } from "./global";
import { typography } from "./typography";

const direction = "ltr" as ThemeDirection;

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "quiz",
};

export const theme: Partial<ChakraTheme> = {
  direction,
  colors,
  ...typography,
  styles: global,
  config,
};

export type Theme = typeof theme;
