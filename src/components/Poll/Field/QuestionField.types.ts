import { InputProps } from "@chakra-ui/react";

// import { FieldResponse } from "types";

export interface QuestionFieldProps<FieldType = InputProps> {
  // onSubmit: (value: FieldResponse) => void;
  htmlProps: FieldType;
}
