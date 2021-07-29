import { fieldType } from "types";

import { Check } from "./Check";
import { LongText } from "./LongText";
import { NumericField } from "./NumericField";
// import { PictureChoice } from "./PictureChoice";
import { Radio } from "./Radio";
import { ShortText } from "./ShortText";
import { inputAttrByType } from "./inputAttrByType";

export function useFieldResolver(type: fieldType): JSX.Element {
  const htmlProps = inputAttrByType(type);

  switch (type) {
    case "long_text":
      return <LongText htmlProps={htmlProps} />;

    case "multiple_choice":
      return <Check htmlProps={htmlProps} />;

    // return <PictureChoice htmlProps={htmlProps} />;

    case "number":
      return <NumericField htmlProps={htmlProps} />;

    case "picture_choice":
    case "rating":
      return <Radio htmlProps={htmlProps} />;

    case "short_text":
    case "statement":
    default:
      return <ShortText htmlProps={htmlProps} />;
  }
}
