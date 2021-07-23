import { InputItem } from "./Item.styles.web";

type Props = {
  htmlProps: unknown;
};

export function ShortText({ htmlProps, ...props }: Props): JSX.Element {
  return <InputItem {...htmlProps} {...props} />;
}
