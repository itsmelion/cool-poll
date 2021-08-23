import type { fieldType } from "./field.types";
import type { Form } from "./typeform.types";

export type FetchResults = () => Promise<Results>;

export interface UserMeta {
  wrong: number;
  correct: number;
  score: number;
  price: number;
  total: number;
}

export interface GlobalMeta {
  wrong: number;
  correct: number;
  score: number;
  totalSubmissions: number;
  responseRate: number;
}

export interface Metadata {
  user: UserMeta;
  global: GlobalMeta;
}

export interface Results {
  poll_id: string;
  title?: string;
  meta: Metadata;
  questions: Question[];
}

export interface Question {
  ref: string;
  type: fieldType;
  title: string;
  repliesCount: number;
  variables: Form["variables"];
  choices: QuestionChoice[];
}

export interface QuestionChoice {
  field: {
    ref: string;
    label: string;
  };
  correct: boolean;
  isChosen: boolean;
  chosenCount: number;
}

export type NullableResults = Results | null;
