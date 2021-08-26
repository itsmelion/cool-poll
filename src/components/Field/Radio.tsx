import { Radio as RadioItem, RadioGroup, useColorModeValue } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { StaggerItem, StaggerContainer } from "../../components";
import { usePoll } from "../../services";
import { Wrapper } from "./Item.styles.web";

export function Radio(): JSX.Element {
  const { activeQuestion, currentQuestion } = usePoll();
  const { properties } = currentQuestion;
  const { register } = useFormContext();
  const borderColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");

  return (
    <RadioGroup>
      <StaggerContainer>
        <Wrapper alignItems="start">
          {properties?.choices?.map(({ id, label }) => (
            <StaggerItem key={`${activeQuestion}_${id}`}>
              <RadioItem
                borderColor={borderColor}
                value={id}
                width="full"
                {...register(activeQuestion, {
                  required:
                    currentQuestion.validations?.required && "Can't skip this one",
                })}>
                {label}
              </RadioItem>
            </StaggerItem>
          ))}
        </Wrapper>
      </StaggerContainer>
    </RadioGroup>
  );
}
