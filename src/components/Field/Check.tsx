import { CheckboxGroup } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { usePoll } from "../../services";
import { StaggerContainer, StaggerItem } from "../Stagger";
import { Wrapper, Checkbox } from "./Item.styles.web";

export function Check(): JSX.Element {
  const { activeQuestion, currentQuestion } = usePoll();
  const { properties } = currentQuestion;
  const { register } = useFormContext();

  return (
    <CheckboxGroup>
      <StaggerContainer>
        <Wrapper alignItems="start" justify="stretch">
          {properties?.choices?.map(({ id, label }) => (
            <StaggerItem key={`${activeQuestion}_${id}`}>
              <Checkbox
                value={id}
                w="100%"
                {...register(activeQuestion, {
                  required:
                    currentQuestion.validations?.required && "Can't skip this one",
                })}>
                {label}
              </Checkbox>
            </StaggerItem>
          ))}
        </Wrapper>
      </StaggerContainer>
    </CheckboxGroup>
  );
}
