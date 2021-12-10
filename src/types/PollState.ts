import { Dispatch, SetStateAction } from 'react';
import { useCounter } from 'react-use';

import type { OnSubmit } from './Responses';
import type { NullableResults } from './Results';
import type { Form, Field } from './typeform.types';

export type FieldResponse =
  | string
  | number
  | undefined
  | (string | number | undefined)[];

export type CurrentQuestion = Field & {
  response?: FieldResponse;
};

export type StateActions =
  | 'next'
  | 'previous'
  | 'data'
  | 'respond'
  | 'thankyou'
  | 'results';

export type PollReducer =
  | { type: 'next'; payload?: Field }
  | { type: 'previous'; payload?: Field }
  | { type: 'data'; payload?: Partial<PollState> }
  | { type: 'respond'; payload?: FieldResponse }
  | { type: 'thankyou'; payload?: unknown }
  | { type: 'results'; payload?: unknown };

export type PollDispatcher = React.Dispatch<PollReducer>;

export interface PollState {
  mode: Form['mode'];
  isClosed: Form['isClosed'];
  activeQuestion: 'thankyou' | 'results' | string;
  score?: number;
  scoreHandlers: ReturnType<typeof useCounter>[1] | null;
  price?: number;
  poll?: Form;
  currentQuestion: CurrentQuestion;
  setPoll: PollDispatcher;
  submit?: OnSubmit;
  results: NullableResults;
  setResults: Dispatch<SetStateAction<NullableResults>>;
  fetchResults: () => void;
}
