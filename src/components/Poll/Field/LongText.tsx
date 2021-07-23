import { InputItem } from "./Item.styles.web";

type Props = {
  htmlProps: React.HTMLProps<HTMLInputElement>;
};

export function LongText(props: Props): JSX.Element {
  return <InputItem {...props} />;
}
