import {
  chakra,
  VStack,
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
    border: "1pt solid currentColor",
    borderRadius: "0.5em",
    lineHeight: 1.2,
    marginTop: "0.25em",
    marginBottom: "0.25em",
    fontSize: "1em",
    width: "100%",
  },
});

export const Wrapper = chakra(VStack, {
  baseStyle: {
    marginTop: "0.5em",
    marginBottom: "0.5em",
    flex: 1,
    alignItems: "start",
  },
});

export const InputItem = chakra(Input, {
  baseStyle: {
    padding: "0.75em 1.25em",
    height: "auto",
    backgroundColor: "inherit",
    color: "inherit",
    border: "1pt solid currentColor",
    borderRadius: "0.5em",
    lineHeight: 1.2,
    marginTop: "0.5em",
    marginBottom: "0.5em",
    fontSize: "1em",
  },
});

export const TextArea = chakra(ChakraTextarea, {
  baseStyle: {
    padding: "0.75em 1.25em",
    height: "auto",
    backgroundColor: "inherit",
    color: "inherit",
    border: "1pt solid currentColor",
    borderRadius: "0.5em",
    lineHeight: 1.2,
    marginTop: "0.5em",
    marginBottom: "0.5em",
    fontSize: "1em",
  },
});
