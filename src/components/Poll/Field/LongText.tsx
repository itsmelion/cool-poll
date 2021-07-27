import { TextareaProps } from "@chakra-ui/react";

import { TextArea } from "./Item.styles.web";

type Props = {
  htmlProps: TextareaProps;
};

export function LongText({ htmlProps, ...props }: Props): JSX.Element {
  return <TextArea {...htmlProps} {...props} />;
}
