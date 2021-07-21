import { chakra } from "@chakra-ui/react";

export const Main = chakra("main", {
  baseStyle: {
    position: "relative",
    maxWidth: "986pt",
    margin: "0 auto",
    height: "100%",
    width: "100%",
    color: "current",
  },
});

export const Backdrop = chakra("div", {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 0",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "auto",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
    boxSizing: "border-box",
    fontFamily: "Heebo, sans-serif",
    fontWeight: 300,
  },
});
