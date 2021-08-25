import type { FieldResponse } from "./PollState";
import type { NullableResults } from "./Results";

export type Responses = Record<string, FieldResponse> | Record<string, never>;

export interface PollResponses extends Actions<Responses> {
  responses: Responses;
}

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

export type OnSubmit = (responses: Responses) => Promise<NullableResults>;
