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
  }, [setPoll, fields, activeQuestion]);
}
