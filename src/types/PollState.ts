import type { Form, Field } from "./typeform.types";

export type FieldResponse =
  | string
  | number
  | undefined
  | (string | number | undefined)[];

export type CurrentQuestion = Pick<Field, "id" | "ref" | "type"> & {
  response?: FieldResponse;
};

export type stateActions = "next" | "previous" | "data";
export type PollReducer =
  | { type: "next"; payload?: Field }
  | { type: "previous"; payload?: Field }
  | { type: "data"; payload?: Partial<PollState> };

export type PollDispatcher = React.Dispatch<PollReducer>;

export interface PollState {
  activeQuestion?: string;
  score?: number;
  price?: number;
  skip: () => void;
  previous: () => void;
  next: (r: FieldResponse) => void;
  poll?: Form;
  currentQuestion: CurrentQuestion;
  setPoll: PollDispatcher;
}
