import { FormProvider, useForm } from "react-hook-form";
import { useKeyPressEvent } from "react-use";

import { usePoll, usePollActions, usePollResponses } from "services";

import { Question } from "./Question";
import { View } from "./QuestionStack.styled.web";

export const QuestionStack: React.FC = (props) => {
  const { poll, activeQuestion } = usePoll();
  const formMethods = useForm({ mode: "onSubmit" });
  const { setAll } = usePollResponses();
  const { next } = usePollActions();
  const { handleSubmit, clearErrors } = formMethods;

  const onSubmit = handleSubmit((data) => {
    setAll(data);
    clearErrors();
    next(data[activeQuestion]);
  });

  useKeyPressEvent("Enter", (e) => {
    e.stopPropagation();
    onSubmit();
  });

  if (!poll) return null;

  return (
    <View {...props}>
      <FormProvider {...formMethods}>
        {poll.fields?.map((question) => (
          <Question key={question.id} onSubmit={onSubmit} question={question} />
        ))}
      </FormProvider>
    </View>
  );
};
