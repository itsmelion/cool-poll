import { createContext, useContext, ReactChild, useReducer } from "react";
import { useCounter } from "react-use";
import type { PollState, PollReducer, Field, Response } from "types";

import { PollActionsContext } from "./poll-actions/usePollActions";
import { PollResponsesContext } from "./usePollResponses";

interface Props {
  children: ReactChild;
  value?: Partial<PollState>;
  onSubmit?: Response.OnSubmit;
}

const initialState: PollState = {
  activeQuestion: "",
  score: 0,
  scoreHandlers: null,
  price: 0,
  poll: undefined,
  currentQuestion: {
    type: "",
    ref: "",
    id: "",
  },
  setPoll: () => undefined,
};

const Context = createContext<PollState>(initialState);
export const usePoll = (): PollState => useContext(Context);

export const PollContext = (props: Props): JSX.Element => {
  const { children, value, onSubmit } = props;
  const [currentScore, scoreHandlers] = useCounter(initialState.score);
  const [poll, setPoll] = useReducer(reducer, { ...initialState, ...value });

  return (
    <Context.Provider
      value={{
        ...poll,
        score: currentScore,
        scoreHandlers,
        setPoll,
        onSubmit,
      }}>
      <PollActionsContext>
        <PollResponsesContext>{children}</PollResponsesContext>
      </PollActionsContext>
    </Context.Provider>
  );
};

const reducer = (
  state = initialState,
  { type: actionType, payload }: PollReducer,
): PollState => {
  switch (actionType) {
    case "next":
    case "previous":
      return {
        ...state,
        activeQuestion: (payload as Field).ref,
        currentQuestion: payload as Field,
      };
    case "data":
      return Object.assign(state, payload);
    case "thankyou":
      return {
        ...state,
        activeQuestion: "thankyou",
        currentQuestion: {
          type: "",
          ref: "",
          id: "",
        },
      };
    case "respond":
    default:
      return state;
  }
};
