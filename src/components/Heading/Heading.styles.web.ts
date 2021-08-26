import { chakra, FormLabel } from "@chakra-ui/react";

export const H1 = chakra(FormLabel, {
  baseStyle: {
    fontSize: "h1",
    fontWeight: 200,
    marginBottom: "0.75em",
  },
});
