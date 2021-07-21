export interface RootObject {
  id: string;
  title: string;
  variables: Variables;
  theme: Theme;
  settings: Settings;
  welcome_screens: Welcomescreen[];
  thankyou_screens: Thankyouscreen[];
  fields: Field[];
  logic: Logic[];
}

export interface Logic {
  actions: Action[];
  type: string;
  ref: string;
}

export interface Action {
  action: string;
  details: Details;
  condition: Condition;
}

export interface Condition {
  op: string;
  vars: (Var | Vars2 | Target)[];
}

export interface Vars2 {
  type: string;
  value: number | string;
}

export interface Var {
  type: string;
  value: number | string | string;
}

export interface Details {
  target?: Target;
  value?: Value;
  to?: Target;
}

export interface Value {
  type: string;
  value: number;
}

export interface Target {
  type: string;
  value: string;
}

export interface Field {
  id: string;
  title: string;
  ref: string;
  properties?: Properties3;
  validations?: Validations;
  type: string;
  attachment?: Attachment;
}

export interface Validations {
  required: boolean;
}

export interface Properties3 {
  description?: string;
  hide_marks?: boolean;
  button_text?: string;
  randomize?: boolean;
  allow_multiple_selection?: boolean;
  allow_other_choice?: boolean;
  vertical_alignment?: boolean;
  choices?: Choice[];
  supersized?: boolean;
  show_labels?: boolean;
  steps?: number;
  shape?: string;
}

export interface Choice {
  id: string;
  ref: string;
  label: string;
  attachment?: Attachment;
}

export interface Thankyouscreen {
  ref: string;
  title: string;
  properties: Properties2;
  attachment: Attachment;
}

export interface Properties2 {
  show_button: boolean;
  share_icons: boolean;
  button_mode: string;
  button_text: string;
}

export interface Welcomescreen {
  ref: string;
  title: string;
  properties: Properties;
  attachment: Attachment;
}

export interface Attachment {
  type: string;
  href: string;
}

export interface Properties {
  show_button: boolean;
  description: string;
  button_text: string;
}

export interface Settings {
  language: string;
  is_public: boolean;
  progress_bar: string;
  show_progress_bar: boolean;
  show_typeform_branding: boolean;
  meta: Meta;
}

export interface Meta {
  allow_indexing: boolean;
}

export interface Theme {
  href: string;
}

export interface Variables {
  score: number;
}
