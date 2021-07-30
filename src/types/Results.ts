import { Variables } from "./Poll.types";
import { fieldType } from "./field.types";

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
  title: string;
  metadata: Metadata;
  questions: Question[];
}

export interface Question {
  ref: string;
  type: fieldType;
  title: string;
  variables: Variables;
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
