import { chakra } from "@chakra-ui/react";

export const View = chakra("section", {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 100%",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    position: "relative",
  },
});
