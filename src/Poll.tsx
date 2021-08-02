import { ChakraProvider as ThemeProvider, extendTheme } from "@chakra-ui/react";
import { memo } from "react";
import { theme as defaultTheme } from "theme/theme";
import { Form, Response } from "types";

import { PollContext } from "services";

import { TheQuiz, PageContainer } from "components";

const theme = extendTheme(defaultTheme);
interface PollProps {
  poll: Form;
  wrapper: boolean;
  onSubmit?: Response.OnSubmit;
}
export const Poll = memo(({ poll, wrapper, onSubmit }: PollProps) => {
  if (!poll) return null;

  return (
    <ThemeProvider theme={theme}>
      <PageContainer wrapper={wrapper}>
        <PollContext
          onSubmit={onSubmit}
          value={{
            activeQuestion: poll.fields?.[0].ref,
            currentQuestion: poll.fields?.[0],
            poll,
          }}>
          <TheQuiz />
        </PollContext>
      </PageContainer>
    </ThemeProvider>
  );
});

Poll.displayName = "Poll";
