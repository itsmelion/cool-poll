import { memo } from 'react';

import type { Form, Response, Results } from './types';

import { QuizComponent } from './components/QuizComponent';
import { PollProvider } from './services';

interface PollProps {
  poll: Form;
  submit: Response.OnSubmit;
  fetchResults: Results.FetchResults;
}

export const Quiz = memo(({ poll, submit, fetchResults }: PollProps) => {
  if (!poll) return null;

  return (
    <PollProvider
      fetchResults={fetchResults}
      submit={submit}
      value={{
        mode: poll.mode,
        isClosed: poll.isClosed,
        activeQuestion: poll.fields?.[0].ref,
        currentQuestion: poll.fields?.[0],
        poll: poll,
      }}>
      <QuizComponent />
    </PollProvider>
  );
});

Quiz.displayName = 'Quiz';
