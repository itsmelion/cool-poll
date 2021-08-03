import { H1 } from "./Heading.styles.web";

type Props = {
  title?: string;
};

export function Heading(props: Props): JSX.Element {
  return <H1>{props.title ?? ""}</H1>;
}
