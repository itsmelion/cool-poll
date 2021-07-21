import { useColorModeValue } from "@chakra-ui/react";

import { Backdrop, Main } from "./PageContainer.styled.web";
import bgDark from "./backdrop-dark.jpg";
import bgLight from "./backdrop-light.jpg";

type ComponentType = React.FC<React.ComponentPropsWithoutRef<"main">>;

export const PageContainer: ComponentType = ({ style, ...props }) => {
  const bgColor = useColorModeValue("#ef9aff", "#3310CE");
  const bgImage = useColorModeValue(bgLight, bgDark);

  return (
    <Backdrop bgColor={bgColor} bgImage={`url(${bgImage})`}>
      <Main {...props} __css={style} />
    </Backdrop>
  );
};
