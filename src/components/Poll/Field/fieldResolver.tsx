import { fieldType } from "types";

import { Check } from "./Check";
import { LongText } from "./LongText";
import { NumericField } from "./NumericField";
import { Radio } from "./Radio";
import { ShortText } from "./ShortText";
import { inputAttrByType } from "./inputAttrByType";

export function fieldResolver(type?: fieldType): JSX.Element | null {
  if (!type) return null;
  const htmlProps = inputAttrByType(type);

  switch (type) {
    case "short_text":
      return <ShortText htmlProps={htmlProps} />;

    case "long_text":
      return <LongText htmlProps={htmlProps} />;

    case "statement":
      return <ShortText htmlProps={htmlProps} />;

    case "multiple_choice":
      return <Check htmlProps={htmlProps} />;

    case "picture_choice":
      return <ShortText htmlProps={htmlProps} />;

    case "number":
      return <NumericField htmlProps={htmlProps} />;

    case "rating":
      return <Radio htmlProps={htmlProps} />;

    default:
      return <ShortText htmlProps={htmlProps} />;
  }
}
