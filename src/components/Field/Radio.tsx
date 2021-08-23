import { Radio as RadioItem, RadioGroup, useColorModeValue } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { usePoll } from "../../services";
import { Wrapper } from "./Item.styles.web";

export function Radio(): JSX.Element {
  const { activeQuestion, currentQuestion } = usePoll();
  const { properties } = currentQuestion;
  const { register } = useFormContext();
  const borderColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");

  return (
    <RadioGroup>
      <Wrapper>
        {properties?.choices?.map(({ id, label }) => (
          <RadioItem
            borderColor={borderColor}
            key={`${activeQuestion}_${id}`}
            value={id}
            width="full"
            {...register(activeQuestion, {
              required:
                currentQuestion.validations?.required && "Can't skip this one",
            })}>
            {label}
          </RadioItem>
        ))}
      </Wrapper>
    </RadioGroup>
  );
}
