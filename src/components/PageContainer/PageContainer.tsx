import { useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Backdrop, Main } from "./PageContainer.styled.web";
import bgDark from "./backdrop-dark.jpg";
import bgLight from "./backdrop-light.jpg";

interface ComponentType extends React.ComponentPropsWithoutRef<"main"> {
  wrapper?: boolean;
}

export const PageContainer = ({ wrapper, ...props }: ComponentType): JSX.Element => {
  const bgColor = useColorModeValue("#ef9aff", "#220552");
  const src = useColorModeValue(bgLight, bgDark);
  const [bgImage, setBgReady] = useState<string>();

  /* delayed/async load BG image */
  useEffect(() => {
    const bgImg = new Image();
    bgImg.src = src;
    bgImg.onload = () => setTimeout(() => setBgReady(`url(${src})`), 50);
  }, [src]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!wrapper) return <>{props.children}</>;

  return (
    <Backdrop bgColor={bgColor} bgImage={bgImage}>
      <Main {...props} />
    </Backdrop>
  );
};
