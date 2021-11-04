import { useEffect, useState } from 'react';

import type { ColorMode } from './darkMode.types';

export function useDarkModeWatcher(): ColorMode {
  const [colorMode, setColorMode] = useState<ColorMode>(null);

  useEffect(() => {
    if (window.matchMedia) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
      const toggleMode = () => setColorMode(isDarkMode.matches ? 'dark' : 'light');
      toggleMode();
      isDarkMode.addEventListener('change', toggleMode);
      return () => isDarkMode.removeEventListener('change', toggleMode);
    }
    setColorMode(null);
    return () => null;
  }, []);

  return colorMode;
}
