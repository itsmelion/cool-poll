import { ReactChild } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import type { PollState, Response, Results } from '../types';

import { PollActionsContext } from './usePoll/poll-actions/usePollActions';
import { PollContext } from './usePoll/usePoll';

interface Props {
  children: ReactChild;
  value?: Partial<PollState>;
  submit: Response.OnSubmit;
  fetchResults: Results.FetchResults;
}

export const PollProvider = (props: Props): JSX.Element => {
  const { children, ...rest } = props;
  const formMethods = useForm({ mode: 'onSubmit' });

  return (
    <PollContext {...rest}>
      <FormProvider {...formMethods}>
        <PollActionsContext>{children}</PollActionsContext>
      </FormProvider>
    </PollContext>
  );
};

PollProvider.defaultProps = {
  value: {
    mode: 'survey',
    isClosed: false,
    activeQuestion: '',
    score: 0,
    scoreHandlers: null,
    price: 0,
    poll: undefined,
    currentQuestion: {
      type: '',
      ref: '',
      id: '',
    },
    results: null,
    setResults: () => undefined,
    setPoll: () => undefined,
    fetchResults: () => undefined,
  },
};
