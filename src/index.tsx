import { ChakraProvider as ThemeProvider, extendTheme } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { theme as defaultTheme } from "theme/theme";
import { Form } from "types";

import { PollContext } from "services";
import mock from "services/usePoll/mock.json";

import { QuestionStack, PageContainer } from "components";

const theme = extendTheme(defaultTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <PollContext
          value={{
            activeQuestion: mock.fields[0].ref,
            poll: mock as Form,
          }}>
          <QuestionStack />
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
