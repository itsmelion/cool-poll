import { InputProps } from "@chakra-ui/react";
import { Field } from "types";

export interface QuestionFieldProps<FieldType = InputProps> {
  // onSubmit: (value: FieldResponse) => void;
  htmlProps: FieldType;
  field: Field;
}
