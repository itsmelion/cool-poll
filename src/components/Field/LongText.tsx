import { TextareaProps } from "@chakra-ui/react";

import { TextArea } from "./Item.styles.web";
import type { QuestionFieldProps } from "./QuestionField.types";

export function LongText({
  htmlProps,
  ...props
}: QuestionFieldProps<TextareaProps>): JSX.Element {
  return <TextArea {...htmlProps} {...props} />;
}
