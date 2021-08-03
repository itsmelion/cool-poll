import { createContext, useContext, ReactChild, useReducer, useState } from "react";
import { useCounter } from "react-use";

import type { PollState, PollReducer, Field, Response, Results } from "../../types";

interface Props {
  children: ReactChild;
  value?: Partial<PollState>;
  submit?: Response.OnSubmit;
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
  results: null,
  setResults: () => undefined,
  setPoll: () => undefined,
};

const Context = createContext<PollState>(initialState);
export const usePoll = (): PollState => useContext(Context);

export const PollContext = (props: Props): JSX.Element => {
  const { children, value, submit } = props;
  const [currentScore, scoreHandlers] = useCounter(initialState.score);
  const [poll, setPoll] = useReducer(reducer, { ...initialState, ...value });
  const [results, setResults] = useState<Results.Results | null>(null);

  return (
    <Context.Provider
      value={{
        ...poll,
        score: currentScore,
        scoreHandlers,
        setPoll,
        submit,
        results,
        setResults,
      }}>
      {children}
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
