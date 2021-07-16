export type schemeColorSet = { dark: string; light: string };

export interface ThemeColors {
  [colorName: string]: schemeColorSet;
}

export interface ResolvedSchemeColorSet {
  [colorName: string]: string;
}

export interface Theme {
  isDark: boolean;
  colors: ResolvedSchemeColorSet;
}
