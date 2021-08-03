import { createContext, useContext, ReactChild } from "react";
import { useMap } from "react-use";

import type { Response } from "../../types";

interface Props {
  children: ReactChild;
  value?: Partial<Response.PollResponses>;
}

const initialState: Response.PollResponses = {
  responses: {},
  get: (key) => key,
  set: () => undefined,
  setAll: (newObj) => void 0,
  remove: () => undefined,
  reset: () => undefined,
};

const Context = createContext<Response.PollResponses>(initialState);
export const usePollResponses = (): Response.PollResponses => useContext(Context);

export const PollResponsesContext = (props: Props): JSX.Element => {
  const { children } = props;
  const [responses, methods] = useMap<Response.Responses>({});

  return (
    <Context.Provider
      value={{
        ...methods,
        responses,
      }}>
      {children}
    </Context.Provider>
  );
};
