import { ThemeProvider as AgnosticProvider } from '@habtic/themes';

import { PageContainer } from '../components/PageContainer/PageContainer';

export const ThemeProvider: React.FC<{ wrapper?: boolean }> = (p) => {
  const { wrapper, children, ...props } = p;

  return (
    <AgnosticProvider {...props}>
      <PageContainer wrapper={wrapper}>{children}</PageContainer>
    </AgnosticProvider>
  );
};
