import { useCallback } from "react";

import { usePoll } from "../usePoll";
import { usePollResponses } from "../usePollResponses";

export function useNextQuestion(): () => void {
  const { poll, activeQuestion, setPoll, submit: onSubmit, setResults } = usePoll();
  const { responses } = usePollResponses();
  const { fields } = poll || {};

  const submit = useCallback(() => {
    if (!onSubmit) return Promise.resolve(null);
    setPoll({ type: "thankyou" });
    return onSubmit(responses).then((r) => {
      setResults(r);
      return r;
    });
  }, [onSubmit, responses, setPoll, setResults]);

  return useCallback(() => {
    if (!fields || !Array.isArray(fields)) return;
    const currentIndex = fields.findIndex((q) => activeQuestion === q.ref) ?? 0;

    const nextQuestion = fields[currentIndex + 1];

    if (nextQuestion) setPoll({ type: "next", payload: nextQuestion });

    /* TODO: is Final question? submit & thankyoupage */
    if (currentIndex === fields.length - 1) submit();
  }, [setPoll, fields, activeQuestion, submit]);
}
