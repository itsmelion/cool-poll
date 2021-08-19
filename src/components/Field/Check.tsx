import { CheckboxGroup } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { usePoll } from "../../services";
import { Wrapper, Checkbox } from "./Item.styles.web";

export function Check(): JSX.Element {
  const { activeQuestion, currentQuestion } = usePoll();
  const { properties } = currentQuestion;
  const { register } = useFormContext();

  return (
    <CheckboxGroup>
      <Wrapper alignItems="start" justify="stretch">
        {properties?.choices?.map(({ id, label }) => (
          <Checkbox
            key={`${activeQuestion}_${id}`}
            value={id}
            w="100%"
            {...register(activeQuestion, {
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
