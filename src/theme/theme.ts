import { ChakraTheme, ThemeConfig, ThemeDirection } from "@chakra-ui/react";

import { colors } from "./colors";
import { typography } from "./typography";

const direction = "ltr" as ThemeDirection;

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "light",
  cssVarPrefix: "chakra",
};

export { global } from "./global";

export const theme: Partial<ChakraTheme> = {
  direction,
  colors,
  ...typography,
  config,
};

export type Theme = typeof theme;
