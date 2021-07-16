import { mapValues, get } from "lodash";

import { ThemeColors, ResolvedSchemeColorSet } from "../theme/theme.types";
import { ColorMode } from "./darkMode.types";

export const colorModeResolver = (
  colors: ThemeColors,
  colorMode: ColorMode,
): ResolvedSchemeColorSet => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return mapValues(colors, (color) => get(color, colorMode || "light", color));
};
