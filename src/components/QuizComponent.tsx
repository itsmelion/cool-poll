import { usePoll } from "../services";
import { QuestionStack } from "./QuestionStack/QuestionStack";
import { PollStats } from "./ThankYou/PollStats";
import { SurveyThank } from "./ThankYou/SurveyThank";

export function QuizComponent(): JSX.Element {
  const { mode, activeQuestion, isClosed } = usePoll();

  if (isClosed) {
    if (mode === "survey") return <SurveyThank />;
    return <PollStats />;
  }

  switch (activeQuestion) {
    case "thankyou":
      return <SurveyThank />;

    case "results":
      return <PollStats />;

    default:
      return <QuestionStack />;
  }
}
