import { ChakraProvider as ThemeProvider, extendTheme } from "@chakra-ui/react";
import { memo } from "react";

import { TheQuiz, PageContainer } from "./components";
import { PollProvider } from "./services";
import { theme as defaultTheme } from "./theme/theme";
import type { Form, Response, Results } from "./types";

const theme = extendTheme(defaultTheme);

interface PollProps {
  poll: Form;
  wrapper?: boolean;
  submit: Response.OnSubmit;
  fetchResults: Results.FetchResults;
}

export const Quiz = memo(({ poll, wrapper, submit, fetchResults }: PollProps) => {
  if (!poll) return null;

  return (
    <ThemeProvider theme={theme}>
      <PageContainer wrapper={wrapper}>
        <PollProvider
          fetchResults={fetchResults}
          submit={submit}
          value={{
            mode: poll.mode,
            isClosed: poll.isClosed,
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
