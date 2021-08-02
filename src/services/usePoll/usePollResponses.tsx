import { createContext, useContext, useState, ReactChild } from "react";
import { useMap } from "react-use";
import { Response, Results } from "types";

interface Props {
  children: ReactChild;
  value?: Partial<Response.PollResponses>;
}

const initialState: Response.PollResponses = {
  responses: {},
  results: null,
  setResults: () => null,
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
  const [results, setResults] = useState<Results.NullableResults>(null);

  return (
    <Context.Provider
      value={{
        ...methods,
        responses,
        results,
        setResults,
      }}>
      {children}
    </Context.Provider>
  );
};
