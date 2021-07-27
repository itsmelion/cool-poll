import { RadioGroup, VStack, Radio as ChakraRadio } from "@chakra-ui/react";

// import { InputItem } from "./Item.styles.web";

type Props = {
  htmlProps: React.HTMLProps<HTMLInputElement>;
};

export function Radio(props: Props): JSX.Element {
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
