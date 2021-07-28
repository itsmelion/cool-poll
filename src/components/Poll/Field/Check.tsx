import { CheckboxProps, CheckboxGroup } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { usePoll } from "services";

import { Wrapper, Checkbox } from "./Item.styles.web";
import type { QuestionFieldProps } from "./QuestionField.types";

export function Check(props: QuestionFieldProps<CheckboxProps>): JSX.Element {
  const { currentQuestion } = usePoll();
  const { properties } = currentQuestion;
  const { register } = useFormContext();

  return (
    <CheckboxGroup>
      <Wrapper alignItems="start" justify="stretch">
        {properties?.choices?.map(({ ref, label }) => (
          <Checkbox
            key={ref}
            value={ref}
            w="100%"
            {...register(currentQuestion.ref, {
              required:
                currentQuestion.validations?.required && "Can't skip this one",
            })}>
            {label}
          </Checkbox>
        ))}
      </Wrapper>
    </CheckboxGroup>
  );
}
