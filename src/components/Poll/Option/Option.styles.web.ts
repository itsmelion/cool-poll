import { chakra } from "@chakra-ui/react";

export const View = chakra("fieldset", {
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    flex: "0 0 auto",
  },
});

export const Label = chakra("label", {
  baseStyle: {
    fontSize: "h1",
    fontWeight: 200,
    marginBottom: "1.5rem",
    display: "flex",
  },
});
