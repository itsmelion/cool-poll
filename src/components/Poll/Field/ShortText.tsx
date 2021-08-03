import { useFormContext } from "react-hook-form";

import { InputItem } from "./Item.styles.web";
import type { QuestionFieldProps } from "./QuestionField.types";

export function ShortText({
  htmlProps,
  field,
  ...props
}: QuestionFieldProps): JSX.Element {
  const { register } = useFormContext();

  const reg = register(field.ref, {
    required: field.validations?.required && "Can't skip this one",
  });

  return <InputItem {...htmlProps} {...props} {...reg} />;
}
