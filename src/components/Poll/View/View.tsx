import { Container } from "./View.styles.web";

interface PollViewProps {
  $active: boolean;
}

export const View: React.FC<PollViewProps> = (props) => {
  return <Container {...props} />;
};
