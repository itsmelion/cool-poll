import { ReactChild } from "react";

import type { PollState, Response } from "../types";
import { PollActionsContext } from "./usePoll/poll-actions/usePollActions";
import { PollContext } from "./usePoll/usePoll";
import { PollResponsesContext } from "./usePoll/usePollResponses";

interface Props {
  children: ReactChild;
  value?: Partial<PollState>;
  submit?: Response.OnSubmit;
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
