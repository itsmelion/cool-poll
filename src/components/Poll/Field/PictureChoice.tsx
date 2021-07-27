import type { InputProps } from "@chakra-ui/react";

import { InputItem } from "./Item.styles.web";

type Props = {
  htmlProps: InputProps;
};

export function PictureChoice({ htmlProps, ...props }: Props): JSX.Element {
  return <InputItem {...htmlProps} {...props} />;
}
