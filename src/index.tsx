import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Form, Results } from "types";

import mock from "services/usePoll/mock.json";
import results from "services/usePoll/results.json";

import { Poll } from "./Poll";

ReactDOM.render(
  <StrictMode>
    <Poll
      onSubmit={(respond) => {
        alert("WOW!");
        console.info(respond);
        return new Promise<Results.Results>((resolve, reject) => {
          resolve(results);
        });
      }}
      poll={mock as Form}
      wrapper
    />
  </StrictMode>,
  document.getElementById("root"),
);
