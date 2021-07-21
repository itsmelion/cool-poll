import { useLayoutEffect } from "react";

import { usePoll } from "services";
import mock from "services/usePoll/mock.json";

import * as Poll from "../Poll";
import { View } from "./QuestionStack.styled.web";

export const QuestionStack: React.FC = (props) => {
  const [{ activeQuestion, poll }, setPoll] = usePoll();

  useLayoutEffect(() => {
    setPoll({ activeQuestion: mock.fields[0].id, poll: mock });
  }, [setPoll]);

  return (
    <View {...props}>
      {poll?.fields?.map((question) => (
        <Poll.View $active={activeQuestion === question.id} key={question.id}>
          <Poll.Heading title={question.title} />
          <Poll.List options={question.properties?.choices ?? []} />
        </Poll.View>
      ))}
    </View>
  );
};
