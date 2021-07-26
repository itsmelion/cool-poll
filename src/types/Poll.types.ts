import type { fieldType } from "./field.types";

export interface RootObject {
  id: string;
  title: string;
  language: string;
  fields: Field[];
  hidden: string[];
  variables: Variables;
  welcome_screens: Welcomescreen[];
  thankyou_screens: Thankyouscreen[];
  logic: Logic[];
  theme: Theme;
  workspace: Theme;
  _links?: Links;
  settings: Settings;
  cui_settings?: Cuisettings;
}

export interface Cuisettings {
  avatar: string;
  is_typing_emulation_disabled: boolean;
  typing_emulation_speed: string;
}

export interface Settings {
  language: string;
  is_public: boolean;
  progress_bar: string;
  show_progress_bar: boolean;
  show_typeform_branding: boolean;
  show_time_to_complete: boolean;
  hide_navigation: boolean;
  meta: Meta;
  redirect_after_submit_url: string;
  google_analytics: string;
  facebook_pixel: string;
  google_tag_manager: string;
  notifications: Notifications;
}

export interface Notifications {
  self: Self;
  respondent: Respondent;
}

export interface Respondent {
  enabled: boolean;
  recipient: string;
  reply_to: string[];
  subject: string;
  message: string;
}

export interface Self {
  enabled: boolean;
  recipients: string[];
  reply_to: string;
  subject: string;
  message: string;
}

export interface Meta {
  title: string;
  allow_indexing: boolean;
  description: string;
  image: Theme;
}

export interface Links {
  display: string;
}

export interface Theme {
  href: string;
}

export interface Logic {
  type: string;
  ref: string;
  actions: Action[];
}

export interface Action {
  action: string;
  details: Details;
  condition: Condition;
}

export interface Condition {
  op: string;
  vars: Var[];
}

export interface Var {
  type: string;
  value: Var;
}

export interface Details {
  to: Price;
  target: Price;
  value: Value;
}

export interface Value {
  type: string;
  value: number;
}

export interface Thankyouscreen {
  ref: string;
  title: string;
  properties: Properties5;
  attachment: Attachment2;
  layout: Layout;
}

export interface Properties5 {
  show_button: boolean;
  button_text: string;
  button_mode: string;
  redirect_url: string;
  share_icons: boolean;
}

export interface Welcomescreen {
  ref: string;
  title: string;
  properties: Properties4;
  attachment: Attachment2;
  layout: Layout;
}

export interface Properties4 {
  description: string;
  show_button: boolean;
  button_text: string;
}

export interface Variables {
  score: number;
  price: number;
}

export interface Field {
  id: string;
  ref: string;
  title: string;
  type: fieldType;
  properties: Properties2;
  validations: Validations;
  attachment: Attachment2;
  layout: Layout;
}

export interface Layout {
  type: string;
  placement: string;
  attachment: Attachment3;
}

export interface Attachment3 {
  type: string;
  href: Href;
  scale: number;
  properties: Properties3;
}

export interface Properties3 {
  brightness: number;
  description: string;
  focal_point: Focalpoint;
}

export interface Focalpoint {
  x: number;
  y: number;
}

export interface Attachment2 {
  type: string;
  href: Href;
  scale: number;
  properties: Properties;
}

export interface Href {
  image: Image;
  Pexels: Image;
  Vimeo: Image;
  YouTube: Image;
}

export interface Image {
  value: string;
}

export interface Validations {
  required: boolean;
  max_length: number;
  min_value: number;
  max_value: number;
  min_selection: number;
  max_selection: number;
}

export interface Properties2 {
  description: string;
  choices: Choice[];
  fields: null[];
  allow_multiple_selection: boolean;
  randomize: boolean;
  allow_other_choice: boolean;
  vertical_alignment: boolean;
  supersized: boolean;
  show_labels: boolean;
  alphabetical_order: boolean;
  hide_marks: boolean;
  button_text: string;
  steps: number;
  shape: string;
  labels: Labels;
  start_at_one: boolean;
  structure: string;
  separator: string;
  currency: string;
  price: Price;
  show_button: boolean;
  default_country_code: string;
}

export interface Price {
  type: string;
  value: string;
}

export interface Labels {
  left: string;
  right: string;
  center: string;
}

export interface Choice {
  ref: string;
  label: string;
  attachment: Attachment;
}

export interface Attachment {
  type: string;
  href: string;
  properties: Properties;
}

export interface Properties {
  description: string;
}
