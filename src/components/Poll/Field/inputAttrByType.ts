import { fieldType } from "types";

const short_text = {
  type: "text",
  maxLength: 255,
  autoFocus: true,
};

const long_text = {
  type: "text",
  maxLenght: 9999,
  autoFocus: true,
};

/** Resolves appropriate aria and other useful field specific props for a better UX */
export function inputAttrByType(type: fieldType): Record<string, unknown> {
  switch (type) {
    case "short_text":
      return short_text;

    case "long_text":
      return long_text;

    case "picture_choice":
      return short_text;

    case "multiple_choice":
      return short_text;

    case "statement":
      return short_text;

    default:
      return short_text;
  }
}
