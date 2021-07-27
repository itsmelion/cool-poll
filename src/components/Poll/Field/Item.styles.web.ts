import {
  chakra,
  HStack,
  Input,
  Checkbox as ChakraCheckbox,
  Textarea as ChakraTextarea,
} from "@chakra-ui/react";

export const Checkbox = chakra(ChakraCheckbox, {
  baseStyle: {
    padding: "0.75em 1.25em",
    height: "auto",
    backgroundColor: "inherit",
    color: "inherit",
    border: "0.75pt solid #757575",
    borderRadius: "0.5em",
    lineHeight: 1.2,
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
});

export const Wrapper = chakra(HStack, {
  baseStyle: {
    padding: "0.75em 1.25em",
    height: "auto",
    backgroundColor: "inherit",
    color: "inherit",
    border: "0.75pt solid #757575",
    borderRadius: "0.5em",
    lineHeight: 1.2,
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
});

export const InputItem = chakra(Input, {
  baseStyle: {
    padding: "0.75em 1.25em",
    height: "auto",
    backgroundColor: "inherit",
    color: "inherit",
    border: "0.75pt solid #757575",
    borderRadius: "0.5em",
    lineHeight: 1.2,
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
});

export const TextArea = chakra(ChakraTextarea, {
  baseStyle: {
    padding: "0.75em 1.25em",
    height: "auto",
    backgroundColor: "inherit",
    color: "inherit",
    border: "0.75pt solid #757575",
    borderRadius: "0.5em",
    lineHeight: 1.2,
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
});
