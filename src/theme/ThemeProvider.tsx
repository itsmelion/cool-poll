import { ChakraProvider, ChakraProviderProps, extendTheme } from "@chakra-ui/react";

import { PageContainer } from "../components";
import { theme as defaultTheme } from "./theme";

export const ThemeProvider: React.FC<ChakraProviderProps & { wrapper?: boolean }> = (
  p,
) => {
  const { theme = defaultTheme, resetCSS = true, wrapper, children, ...props } = p;
  const extendedTheme = extendTheme(theme, defaultTheme);

  return (
    <ChakraProvider resetCSS={resetCSS} theme={extendedTheme} {...props}>
      <PageContainer wrapper={wrapper}>{children}</PageContainer>
    </ChakraProvider>
  );
};
