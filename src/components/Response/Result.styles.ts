import { chakra } from "@chakra-ui/react";

export const View = chakra("li", {
  baseStyle: {
    padding: "0.5em 0.75em",
    flex: "0 0 auto",
    width: "100%",
    color: "inherit",
    mb: 2,
  },
});

export const Choice = chakra("li", {
  baseStyle: {
    flex: "0 1 auto",
    width: "100%",
    color: "inherit",
    flexDirection: "row",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexWrap: "no-wrap",
    lineHeight: "1em",
    height: "1.75em",
  },
});
