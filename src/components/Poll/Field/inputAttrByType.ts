const short_text = {
  type: "text",
  maxLenght: 255,
};

const long_text = {
  type: "text",
  maxLenght: 9999,
};

export function inputAttrByType(type: string) {
  switch (type) {
    case "short_text":
      return short_text;

    case "long_text":
      return long_text;

    case "picture_choice":
      return short_text;

    case "multiple_choice":
      return short_text;

    default:
      return short_text;
  }
}
