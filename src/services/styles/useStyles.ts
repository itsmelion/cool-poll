import { Theme } from "./theme/theme.types";
import { useTheme } from "./theme/useTheme";

type styleFn = (theme: Theme) => React.CSSProperties;

export function useStyles(styleFunction: styleFn): React.CSSProperties {
  const theme = useTheme();

  return styleFunction(theme);
}
