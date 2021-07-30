import { chakra } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const View = chakra("li", {
  baseStyle: (props) => ({
    padding: "0.5em 0.75em",
    flex: "0 0 auto",
    width: "100%",
    backgroundColor: mode("gray.700", "whiteAlpha.800")(props),
    color: "inherit",
    borderRadius: 12,
    mb: 2,
  }),
});

export const Choice = chakra("li", {
  baseStyle: {
    padding: "0.5em",
    flex: "0 1 auto",
    width: "100%",
    color: "inherit",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexWrap: "no-wrap",
    borderRadius: 6,
    lineHeight: 1,
    my: "1pt",
  },
});
