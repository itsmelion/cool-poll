import { chakra } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Container = chakra("div", {
  baseStyle: (props) => ({
    padding: "3rem",
    borderRadius: "1.5rem",
    minHeight: "30vh",
    position: "absolute",
    transition: "opacity 0.2s ease-in-out",
    margin: "auto",
    backgroundColor: mode("gray.800", "whiteAlpha.900")(props),
  }),
});
