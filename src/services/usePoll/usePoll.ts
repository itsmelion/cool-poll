import { createReducerContext } from "react-use";
import { RootObject } from "types";

export interface PollState {
  activeQuestion?: string;
  score?: number;
  price?: number;
  skip?: () => void;
  previous?: () => void;
  next?: () => void;
  poll?: RootObject | Record<string, never>;
  // [key: string]:
  //   | string
  //   | number
  //   | (string | number)[]
  //   | (() => void)
  //   | RootObject
  //   | Record<string, never>;
}

const initialState: PollState = {
  activeQuestion: "",
  score: 0,
  price: 0,
  skip: () => undefined,
  previous: () => undefined,
  next: () => undefined,
  poll: {},
};

const reducer = (state = initialState, newState: PollState): PollState =>
  Object.assign({}, state, newState);

export const [usePoll, PollContext] = createReducerContext(reducer, initialState);
