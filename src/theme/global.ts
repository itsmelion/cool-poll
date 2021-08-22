import { mode, Styles } from "@chakra-ui/theme-tools";

export const global: Styles = {
  global: (props) => {
    return {
      "body": {
        color: mode("gray.800", "whiteAlpha.900")(props),
        background: mode("gray.50", "gray.900")(props),
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
    };
  },
};
