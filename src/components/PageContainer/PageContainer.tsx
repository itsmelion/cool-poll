import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Backdrop, Main } from "./PageContainer.styled.web";
import bgDark from "./backdrop-dark.jpg";
import bgLight from "./backdrop-light.jpg";

type ComponentType = React.FC<React.ComponentPropsWithoutRef<"main">>;

export const PageContainer: ComponentType = (props) => {
  const bgColor = useColorModeValue("#ef9aff", "#220552");
  const { colorMode } = useColorMode();
  const [bgImage, setBgReady] = useState<string>();
  const isDark = colorMode === "dark";

  /* delayed/async load BG image */
  useEffect(() => {
    const src = isDark ? bgDark : bgLight;
    const bgImg = new Image();
    bgImg.src = src;
    bgImg.onload = () => setTimeout(() => setBgReady(`url(${src})`), 50);
  }, [isDark]);

  return (
    <Backdrop bgColor={bgColor} bgImage={bgImage}>
      <Main {...props} />
    </Backdrop>
  );
};
