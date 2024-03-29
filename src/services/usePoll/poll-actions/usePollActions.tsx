import {
  createContext, useContext, ReactChild, useCallback, useMemo,
} from 'react';

import type { FieldResponse } from '../../../types';

import { useActionsResolver } from './useActionsResolver';
import { useNextQuestion } from './useNextQuestion';

interface PollActions {
  activeQuestion: string;
  skip: () => void;
  previous: () => void;
  next: (r: FieldResponse) => void;
}

interface Props {
  children: ReactChild;
}

const initialState: PollActions = {
  activeQuestion: '',
  skip: () => undefined,
  previous: () => undefined,
  next: () => undefined,
};

const Context = createContext<PollActions>(initialState);
export const usePollActions = (): PollActions => useContext(Context);

export const PollActionsContext = (props: Props): JSX.Element => {
  const { children } = props;
  const resolveActions = useActionsResolver();
  const nextQuestion = useNextQuestion();

  const next = useCallback((r: FieldResponse) => {
    const isJump = resolveActions(r);
    if (!isJump) nextQuestion();
  }, [resolveActions, nextQuestion]);

  const context = useMemo(() => ({
    ...initialState,
    next,
  }), [next]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};
