import { useCallback } from "react";

import { usePoll } from "../usePoll";

export function useNextQuestion(): () => void {
  const { poll, activeQuestion, setPoll } = usePoll();
  const { fields } = poll || {};

  return useCallback(() => {
    if (!fields || !Array.isArray(fields)) return;
    const currentIndex = fields.findIndex((q) => activeQuestion === q.ref) ?? 0;

    const nextQuestion = fields[currentIndex + 1];

    if (nextQuestion) setPoll({ type: "next", payload: nextQuestion });

    /* TODO: is Final question? submit & thankyoupage */
    if (currentIndex === fields.length - 1) setPoll({ type: "thankyou" });
  }, [setPoll, fields, activeQuestion]);
}
