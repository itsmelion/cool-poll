import { useFormContext } from "react-hook-form";
import { useKeyPressEvent } from "react-use";

import { usePoll, usePollActions } from "../../services";
import { Center } from "../Card";
import { Question } from "./Question";

export const QuestionStack: React.FC = (props) => {
  const { poll, activeQuestion } = usePoll();
  const { next } = usePollActions();
  const { handleSubmit, clearErrors } = useFormContext();

  const onSubmit = handleSubmit((data) => {
    clearErrors();
    next(data[activeQuestion]);
  });

  useKeyPressEvent("Enter", (e) => {
    e.stopPropagation();
    onSubmit();
  });

  if (!poll) return null;

  return (
    <Center {...props}>
      {poll.fields?.map((question) => (
        <Question key={question.id} onSubmit={onSubmit} question={question} />
      ))}
    </Center>
  );
};
