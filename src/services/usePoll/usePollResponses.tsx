import { createContext, useContext, ReactChild } from "react";
import { useMap } from "react-use";
import type { FieldResponse } from "types";

type Responses = Record<string, FieldResponse> | Record<string, never>;
interface PollResponses extends Actions<Responses> {
  responses: Responses;
}

interface Props {
  children: ReactChild;
  value?: Partial<PollResponses>;
}

const initialState: PollResponses = {
  responses: {},
  get: (key) => key,
  set: () => undefined,
  setAll: (newObj) => void 0,
  remove: () => undefined,
  reset: () => undefined,
};

const Context = createContext<PollResponses>(initialState);
export const usePollResponses = (): PollResponses => useContext(Context);

export const PollResponsesContext = (props: Props): JSX.Element => {
  const { children } = props;
  const [responses, methods] = useMap<Responses>({});

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

/** react-use/lib/useMap.d.ts */
export interface StableActions<T extends Record<string, unknown>> {
  set: <K extends keyof T>(key: K, value: T[K]) => void;
  setAll: (newMap: T) => void;
  remove: <K extends keyof T>(key: K) => void;
  reset: () => void;
}
export interface Actions<T extends Record<string, unknown>>
  extends StableActions<T> {
  get: <K extends keyof T>(key: K) => T[K];
}
