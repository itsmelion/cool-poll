import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { usePoll } from '../usePoll';

export function useNextQuestion(): () => void {
  const {
    mode,
    poll,
    activeQuestion,
    setPoll,
    submit: onSubmit,
    setResults,
  } = usePoll();
  const { getValues } = useFormContext();
  const { fields } = poll || {};

  const submit = useCallback(() => {
    if (!onSubmit) return Promise.resolve(null);
    const responses = getValues();

    setPoll({ type: mode === 'survey' ? 'thankyou' : 'results' });

    return onSubmit(responses).then((r) => {
      setResults(r);
      return r;
    });
  }, [onSubmit, setPoll, getValues, setResults, mode]);

  return useCallback(() => {
    if (!fields || !Array.isArray(fields)) return;
    const currentIndex = fields.findIndex((q) => activeQuestion === q.ref) ?? 0;

    const nextQuestion = fields[currentIndex + 1];

    if (nextQuestion) setPoll({ type: 'next', payload: nextQuestion });

    /* TODO: is Final question? submit & thankyoupage */
    if (currentIndex === fields.length - 1) submit();
  }, [setPoll, fields, activeQuestion, submit]);
}
