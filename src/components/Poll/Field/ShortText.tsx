import { InputItem } from "./Item.styles.web";

type Props = Record<string, never>;

export function ShortText(props: Props): JSX.Element {
  return <InputItem {...props} />;
}
