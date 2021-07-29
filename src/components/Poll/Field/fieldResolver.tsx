import { Field } from "types";

import { Check } from "./Check";
import { LongText } from "./LongText";
import { NumericField } from "./NumericField";
import { Radio } from "./Radio";
import { ShortText } from "./ShortText";
import { inputAttrByType } from "./inputAttrByType";

export function useFieldResolver(field: Field): JSX.Element | null {
  const htmlProps = inputAttrByType(field.type);

  switch (field.type) {
    case "long_text":
      return <LongText field={field} htmlProps={htmlProps} />;

    case "multiple_choice":
      return <Check field={field} htmlProps={htmlProps} />;

    case "number":
      return <NumericField field={field} htmlProps={htmlProps} />;

    case "picture_choice":
    case "rating":
      return <Radio field={field} htmlProps={htmlProps} />;

    case "short_text":
      return <ShortText field={field} htmlProps={htmlProps} />;

    case "statement":
    default:
      return null;
  }
}
