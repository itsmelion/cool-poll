import { InputItem } from "./Item.styles.web";

type Props = Record<string, never>;

export function LongText(props: Props): JSX.Element {
  return <InputItem {...props} />;
}
