import React from "react";

import { useStyles } from "services";

import bgDark from "./backdrop-dark.jpg";
import bgLight from "./backdrop-light.jpg";

type ComponentType = React.FC<React.ComponentPropsWithoutRef<"main">>;

export const PageContainer: ComponentType = ({ style, ...props }) => {
  const main = useStyles((theme) => ({
    maxWidth: "986pt",
    width: "100%",
    margin: "0 auto",
    color: theme.colors.text,
  }));

  const backdrop = useStyles((theme) => ({
    display: "flex",
    flexDirection: "column",
    flex: "1 1 0",
    backgroundColor: theme.isDark ? "#3310CE" : "#ef9aff",
    backgroundImage: `url(${theme.isDark ? bgDark : bgLight})`,
    backgroundSize: "cover",
    height: "100vh",
    overflow: "auto",
    alignItems: "center",
    justifyContent: "center",
    padding: "24pt",
    boxSizing: "border-box",
    fontFamily: "Heebo, sans-serif",
    fontWeight: 300,
  }));

  return (
    <div style={backdrop}>
      <main {...props} style={{ ...style, ...main }} />
    </div>
  );
};
