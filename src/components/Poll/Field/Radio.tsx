import {
  RadioGroup,
  VStack,
  Radio as ChakraRadio,
  RadioProps,
} from "@chakra-ui/react";

import type { QuestionFieldProps } from "./QuestionField.types";

export function Radio(props: QuestionFieldProps<RadioProps>): JSX.Element {
  return (
    <RadioGroup defaultValue="1">
      <VStack>
        <ChakraRadio value="1">Checked</ChakraRadio>
        <ChakraRadio value="2">Unchecked</ChakraRadio>
        <ChakraRadio value="3">Unchecked</ChakraRadio>
      </VStack>
    </RadioGroup>
  );
}
