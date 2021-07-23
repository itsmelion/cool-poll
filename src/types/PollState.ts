import type { RootObject } from "./Poll.types";

export interface PollState {
  activeQuestion?: string;
  score?: number;
  price?: number;
  skip?: () => void;
  previous?: () => void;
  next?: () => void;
  poll?: RootObject;
}
