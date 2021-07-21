import { ChakraProvider as ThemeProvider, extendTheme } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { PollContext } from "services";
import { theme as defaultTheme } from "services/styles/theme/theme";

import { QuestionStack, PageContainer } from "components";

const theme = extendTheme(defaultTheme);

function App() {
  // const theme = useTheme();theme

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <PollContext>
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
