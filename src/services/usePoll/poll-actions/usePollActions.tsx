import { createContext, useContext, ReactChild } from "react";
import type { FieldResponse } from "types";

import { usePoll } from "../usePoll";
import { useActionsResolver } from "./useActionsResolver";

interface PollActions {
  activeQuestion: string;
  skip: () => void;
  previous: () => void;
  next: (r: FieldResponse) => void;
}

interface Props {
  children: ReactChild;
  value?: Partial<PollActions>;
}

const initialState: PollActions = {
  activeQuestion: "",
  skip: () => undefined,
  previous: () => undefined,
  next: () => undefined,
};

const Context = createContext<PollActions>(initialState);
export const usePollActions = (): PollActions => useContext(Context);

export const PollActionsContext = (props: Props): JSX.Element => {
  const { children } = props;
  const { poll } = usePoll();
  const resolveActions = useActionsResolver();

  const next = (r: FieldResponse) => {
    if (!poll) return;
    resolveActions(r);
  };

  return (
    <Context.Provider
      value={{
        ...initialState,
        next,
      }}>
      {children}
    </Context.Provider>
  );
};
