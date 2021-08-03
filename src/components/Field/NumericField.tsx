import { InputItem } from "./Item.styles.web";
import type { QuestionFieldProps } from "./QuestionField.types";

export function NumericField({
  htmlProps,
  ...props
}: QuestionFieldProps): JSX.Element {
  return <InputItem {...htmlProps} {...props} />;
}
