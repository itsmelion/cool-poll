import { InputItem } from "./Item.styles.web";

type Props = Record<string, never>;

export function Radio(props: Props): JSX.Element {
  return <InputItem {...props} />;
}
