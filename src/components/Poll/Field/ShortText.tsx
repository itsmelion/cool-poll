import { useFormContext } from "react-hook-form";

import { usePoll } from "services";

import { InputItem } from "./Item.styles.web";
import { QuestionFieldProps } from "./QuestionField.types";

export function ShortText({ htmlProps, ...props }: QuestionFieldProps): JSX.Element {
  const { currentQuestion } = usePoll();
  const { register } = useFormContext();

  const reg = register(currentQuestion.ref, {
    required: currentQuestion.validations?.required && "Can't skip this one",
  });

  return <InputItem {...htmlProps} {...props} {...reg} />;
}
