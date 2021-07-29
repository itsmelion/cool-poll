import { chakra } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Container = chakra("form", {
  baseStyle: (props) => ({
    padding: "3rem",
    borderRadius: "1.5rem",
    minHeight: "30vh",
    position: "absolute",
    margin: "auto",
    backgroundColor: mode("gray.800", "whiteAlpha.900")(props),
    color: "inherit",
    maxHeight: "100%",
    overflowY: "auto",
  }),
});
