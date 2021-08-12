import { Radio as RadioItem, RadioGroup, useColorModeValue } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { usePoll } from "../../services";
import { Wrapper } from "./Item.styles.web";

export function Radio(): JSX.Element {
  const { currentQuestion } = usePoll();
  const { properties } = currentQuestion;
  const { register } = useFormContext();
  const reg = register(currentQuestion.ref);
  const borderColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");

  return (
    <RadioGroup>
      <Wrapper>
        {properties?.choices?.map((o) => (
          <RadioItem
            borderColor={borderColor}
            key={o.id}
            value={o.id}
            width="full"
            {...reg}>
            {o.label}
          </RadioItem>
        ))}
      </Wrapper>
    </RadioGroup>
  );
}
