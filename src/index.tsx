import { ChakraProvider as ThemeProvider, extendTheme } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Quiz } from "./Quiz";
import { PageContainer } from "./components";
import mock from "./services/usePoll/mock.json";
import results from "./services/usePoll/results.json";
import { theme as defaultTheme } from "./theme/theme";
import type { Form, Results } from "./types";

const theme = extendTheme(defaultTheme);

const submit = () => {
  alert("FORM SUBMITED!");
  return Promise.resolve(results as Results.Results);
};

const fetchResults = () => Promise.resolve(results as Results.Results);

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <PageContainer wrapper>
        <Quiz
          fetchResults={fetchResults}
          poll={mock as Form}
          submit={submit}
          wrapper
        />
      </PageContainer>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root"),
);
