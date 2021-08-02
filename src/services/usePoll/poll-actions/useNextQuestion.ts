import { useCallback } from "react";

import { usePoll } from "../usePoll";
import { usePollResponses } from "../usePollResponses";

export function useNextQuestion(): () => void {
  const { poll, activeQuestion, setPoll, onSubmit } = usePoll();
  const { responses, setResults } = usePollResponses();
  const { fields } = poll || {};

  const goToThankYouPage = useCallback(() => {
    onSubmit?.(responses).then((r) => {
      setPoll({ type: "thankyou" });
      return setResults(r);
    });
  }, [onSubmit, responses, setPoll, setResults]);

  return useCallback(() => {
    if (!fields || !Array.isArray(fields)) return;
    const currentIndex = fields.findIndex((q) => activeQuestion === q.ref) ?? 0;

    const nextQuestion = fields[currentIndex + 1];

    if (nextQuestion) setPoll({ type: "next", payload: nextQuestion });

    /* TODO: is Final question? submit & thankyoupage */
    if (currentIndex === fields.length - 1) goToThankYouPage();
  }, [setPoll, fields, activeQuestion, goToThankYouPage]);
}
