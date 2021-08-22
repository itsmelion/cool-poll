import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Quiz } from "./Quiz";
import mock from "./services/usePoll/mock.json";
import results from "./services/usePoll/results.json";
import { ThemeProvider } from "./theme/ThemeProvider";
import type { Form, Results } from "./types";

const submit = (responses) => {
  return Promise.resolve(results as Results.Results);
};

const fetchResults = () => Promise.resolve(results as Results.Results);

ReactDOM.render(
  <StrictMode>
    <ThemeProvider wrapper>
      <Quiz fetchResults={fetchResults} poll={mock as Form} submit={submit} />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root"),
);
