import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Quiz } from "./Quiz";
import mock from "./services/usePoll/mock.json";
import results from "./services/usePoll/results.json";
import type { Form, Results } from "./types";

const submit = () => {
  alert("WOW!");
  return Promise.resolve(results as Results.Results);
};

ReactDOM.render(
  <StrictMode>
    <Quiz poll={mock as Form} submit={submit} wrapper />
  </StrictMode>,
  document.getElementById("root"),
);
