import { chakra } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Card = chakra("section", {
  baseStyle: (props) => ({
    padding: "3rem",
    borderRadius: "1.5rem",
    minHeight: "30%",
    minW: "40%",
    position: "absolute",
    margin: "auto",
    backgroundColor: mode("gray.800", "whiteAlpha.900")(props),
    color: "inherit",
    maxHeight: "100%",
    overflowY: "auto",
  }),
});

export const Center = chakra("section", {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 100%",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
});
