import { fieldType } from "types";

import { Check } from "./Check";
import { LongText } from "./LongText";
import { NumericField } from "./NumericField";
import { PictureChoice } from "./PictureChoice";
import { Radio } from "./Radio";
import { ShortText } from "./ShortText";
import { inputAttrByType } from "./inputAttrByType";

export function useFieldResolver(type?: fieldType): React.FunctionComponent {
  const htmlProps = type ? inputAttrByType(type) : {};

  function FieldShort() {
    return <ShortText htmlProps={htmlProps} />;
  }

  switch (type) {
    case "short_text":
      return FieldShort;

    case "long_text":
      return function FieldLong() {
        return <LongText htmlProps={htmlProps} />;
      };

    case "multiple_choice":
      return function FieldCheck() {
        return <Check htmlProps={htmlProps} />;
      };

    case "picture_choice":
      return function FieldPicture() {
        return <PictureChoice htmlProps={htmlProps} />;
      };

    case "number":
      return function FieldNumeric() {
        return <NumericField htmlProps={htmlProps} />;
      };

    case "rating":
      return function FieldRadio() {
        return <Radio htmlProps={htmlProps} />;
      };

    case "statement":
    default:
      return FieldShort;
  }
}
