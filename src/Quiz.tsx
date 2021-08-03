import { ChakraProvider as ThemeProvider, extendTheme } from "@chakra-ui/react";
import { memo } from "react";

import { TheQuiz, PageContainer } from "./components";
import { PollProvider } from "./services";
import { theme as defaultTheme } from "./theme/theme";
import type { Form, Response } from "./types";

const theme = extendTheme(defaultTheme);

interface PollProps {
  poll: Form;
  wrapper: boolean;
  submit?: Response.OnSubmit;
}

export const Quiz = memo(({ poll, wrapper, submit }: PollProps) => {
  if (!poll) return null;

  return (
    <ThemeProvider theme={theme}>
      <PageContainer wrapper={wrapper}>
        <PollProvider
          submit={submit}
          value={{
            activeQuestion: poll.fields?.[0].ref,
            currentQuestion: poll.fields?.[0],
            poll,
          }}>
          <TheQuiz />
        </PollProvider>
      </PageContainer>
    </ThemeProvider>
  );
});

Quiz.displayName = "Quiz";
