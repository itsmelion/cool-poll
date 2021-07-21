import { colorModeResolver } from "../DarkMode/colorModeResolver";
import { useDarkModeWatcher } from "../DarkMode/useDarkModeWatcher";
import { colors as themeColors } from "./colors";
import * as font from "./font";
import { Theme } from "./theme.types";

export function useTheme(): Theme {
  const colorMode = useDarkModeWatcher();

  return {
    isDark: colorMode === "dark",
    font,
    colors: colorModeResolver(themeColors, colorMode),
  };
}
