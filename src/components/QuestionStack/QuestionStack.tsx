import { useKeyPressEvent } from "react-use";

import { usePoll } from "services";

import { Question } from "./Question";
import { View } from "./QuestionStack.styled.web";

export const QuestionStack: React.FC = (props) => {
  const { poll, next, previous } = usePoll();

  useKeyPressEvent("Enter", next);
  useKeyPressEvent("p", previous);

  if (!poll) return null;

  return (
    <View {...props}>
      {poll.fields.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </View>
  );
};
