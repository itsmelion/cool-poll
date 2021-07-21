import { View, Label } from "./Option.styles.web";

type Props = {
  title: string;
};

export function Option(props: Props): JSX.Element {
  return (
    <View>
      <Label>{props.title}</Label>
    </View>
  );
}
