import { H1 } from './Heading.styles.web';

type Props = {
  title?: string;
};

export function Heading({ title }: Props): JSX.Element {
  return <H1>{title ?? ''}</H1>;
}
