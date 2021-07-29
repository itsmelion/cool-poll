import { ChakraProvider as ThemeProvider, extendTheme } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { theme as defaultTheme } from "theme/theme";
import { Form, Field } from "types";

import { PollActionsContext, PollContext, PollResponsesContext } from "services";
import mock from "services/usePoll/mock.json";

import { TheQuiz, PageContainer } from "components";

const theme = extendTheme(defaultTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <PollContext
          value={{
            activeQuestion: mock.fields[0].ref,
            currentQuestion: mock.fields[0] as Field,
            poll: mock as Form,
          }}>
          <PollResponsesContext>
            <PollActionsContext>
              <TheQuiz />
            </PollActionsContext>
          </PollResponsesContext>
        </PollContext>
      </PageContainer>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
