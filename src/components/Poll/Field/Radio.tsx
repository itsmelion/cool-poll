import { Radio as RadioItem, RadioGroup, RadioGroupProps } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { usePoll } from "services";

import { Wrapper } from "./Item.styles.web";
import type { QuestionFieldProps } from "./QuestionField.types";

export function Radio(
  props: QuestionFieldProps<Omit<RadioGroupProps, "children">>,
): JSX.Element {
  const { currentQuestion } = usePoll();
  const { properties } = currentQuestion;
  const { register } = useFormContext();
  const reg = register(currentQuestion.ref);

  return (
    <RadioGroup>
      <Wrapper>
        {properties?.choices?.map((o) => (
          <RadioItem key={o.ref} width="full" {...reg} value={o.ref}>
            {o.label}
          </RadioItem>
        ))}
      </Wrapper>
    </RadioGroup>
  );
}
