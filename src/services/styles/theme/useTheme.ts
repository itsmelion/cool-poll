import { colorModeResolver } from "../DarkMode/colorModeResolver";
import { useDarkModeWatcher } from "../DarkMode/useDarkModeWatcher";
import { colors as themeColors } from "./colors";
import { Theme } from "./theme.types";

export function useTheme(): Theme {
  const colorMode = useDarkModeWatcher();

  return {
    isDark: colorMode === "dark",
    colors: colorModeResolver(themeColors, colorMode),
  };
}
