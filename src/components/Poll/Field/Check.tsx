import { InputItem } from "./Item.styles.web";

type Props = Record<string, never>;

export function Check(props: Props): JSX.Element {
  return <InputItem {...props} />;
}
