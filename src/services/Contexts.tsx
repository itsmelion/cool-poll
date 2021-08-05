import { ReactChild } from "react";

import type { PollState, Response, Results } from "../types";
import { PollActionsContext } from "./usePoll/poll-actions/usePollActions";
import { PollContext } from "./usePoll/usePoll";
import { PollResponsesContext } from "./usePoll/usePollResponses";

interface Props {
  children: ReactChild;
  value?: Partial<PollState>;
  submit: Response.OnSubmit;
  fetchResults: Results.FetchResults;
}

export const PollProvider = (props: Props): JSX.Element => {
  const { children, ...rest } = props;

  return (
    <PollContext {...rest}>
      <PollActionsContext>
        <PollResponsesContext>{children}</PollResponsesContext>
      </PollActionsContext>
    </PollContext>
  );
};
