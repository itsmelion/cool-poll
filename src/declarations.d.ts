import '@emotion/react';
import type { ColorMode } from '@habtic/system';

// import type { Theme as EmotionTheme } from '@emotion/react';

// type MergeTheme = EmotionTheme & ColorMode.ColorModeObject;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ColorMode.ColorModeObject {}
}
