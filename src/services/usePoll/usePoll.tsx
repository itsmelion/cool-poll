import { createContext, useContext, ReactChild, useReducer } from "react";
import { useCounter } from "react-use";
import type { PollState, PollReducer, Field } from "types";

interface Props {
  children: ReactChild;
  value?: Partial<PollState>;
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
  const { children, value } = props;
  const [currentScore, scoreHandlers] = useCounter(initialState.score);
  const [poll, setPoll] = useReducer(reducer, { ...initialState, ...value });

  return (
    <Context.Provider
      value={{
        ...poll,
        score: currentScore,
        scoreHandlers,
        setPoll,
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
    case "respond":
    default:
      return state;
  }
};
