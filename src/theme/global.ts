import { mode, Styles } from "@chakra-ui/theme-tools";

export const global: Styles = {
  global: (props) => {
    return {
      "body": {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
        lineHeight: "base",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
      "html, body, #root": {
        display: "flex",
        flexDirection: "column",
        flex: "0 1 100%",
        h: "100%",
      },
    };
  },
};
