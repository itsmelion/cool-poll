import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Quiz } from "./Quiz";
import mock from "./services/usePoll/mock.json";
import results from "./services/usePoll/results.json";
import type { Form, Results } from "./types";

const submit = () => {
  alert("FORM SUBMITED!");
  return Promise.resolve(results as Results.Results);
};

const fetchResults = () => Promise.resolve(results as Results.Results);

ReactDOM.render(
  <StrictMode>
    <Quiz fetchResults={fetchResults} poll={mock as Form} submit={submit} wrapper />
  </StrictMode>,
  document.getElementById("root"),
);
