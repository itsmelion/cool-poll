import { createContext, useContext, ReactChild } from "react";
import { useCounter } from "react-use";
import { PollState } from "types";

interface Props {
  children: ReactChild;
  value?: PollState;
}

const initialState: PollState = {
  activeQuestion: "",
  score: 0,
  price: 0,
  poll: undefined,
  skip: () => undefined,
  previous: () => undefined,
  next: () => undefined,
};

const Context = createContext<PollState>(initialState);
export const usePoll = (): PollState => useContext(Context);

export const PollContext = (props: Props): JSX.Element => {
  const { children, value } = props;
  const [currentScore, scoreHandlers] = useCounter(initialState.score);

  const next = () => {
    scoreHandlers.inc();
  };

  return (
    <Context.Provider
      value={{
        ...value,
        score: currentScore,
        next,
        previous(this: PollState): void {
          console.log("previous", this.activeQuestion);
        },
      }}>
      {children}
    </Context.Provider>
  );
};
