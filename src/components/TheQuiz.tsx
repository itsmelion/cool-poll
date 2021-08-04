import { usePoll } from "../services";
import { QuestionStack } from "./QuestionStack/QuestionStack";
import { ThankYou } from "./Thankyou";

export function TheQuiz(): JSX.Element {
  const { activeQuestion } = usePoll();

  switch (activeQuestion) {
    case "thankyou":
      return <ThankYou />;

    case "results":
      return <ThankYou />;

    default:
      return <QuestionStack />;
  }
}
