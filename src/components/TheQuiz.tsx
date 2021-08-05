import { usePoll } from "../services";
import { QuestionStack } from "./QuestionStack/QuestionStack";
import { ResultsPage } from "./ResultsPage";
import { ThankYou } from "./ThankYou";

export function TheQuiz(): JSX.Element {
  const { mode, activeQuestion, isClosed } = usePoll();

  if (isClosed) {
    if (mode === "survey") return <ThankYou />;
    return <ResultsPage />;
  }

  switch (activeQuestion) {
    case "thankyou":
      return <ThankYou />;

    case "results":
      return <ResultsPage />;

    default:
      return <QuestionStack />;
  }
}
