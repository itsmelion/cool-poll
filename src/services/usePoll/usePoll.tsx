import {
  createContext,
  useContext,
  ReactChild,
  useReducer,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useCounter } from 'react-use';

import type {
  PollState, PollReducer, Field, Response, Results,
} from '../../types';

interface Props {
  children: ReactChild;
  value?: Partial<PollState>;
  submit: Response.OnSubmit;
  fetchResults: Results.FetchResults;
}

const initialState: PollState = {
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
};

const Context = createContext<PollState>(initialState);
export const usePoll = (): PollState => useContext(Context);

export const PollContext = (props: Props): JSX.Element => {
  const {
    children, value, submit, fetchResults: resultsFetcher,
  } = props;
  const [currentScore, scoreHandlers] = useCounter(initialState.score);
  const [poll, setPoll] = useReducer(reducer, { ...initialState, ...value });
  const [results, setResults] = useState<Results.NullableResults>(null);
  const { isClosed } = poll;

  const fetchResults = useCallback(
    () => resultsFetcher().then((r) => setResults(r)),
    [resultsFetcher, setResults],
  );

  useEffect(() => {
    isClosed && fetchResults();
  }, [isClosed, fetchResults]);

  const context = useMemo(() => ({
    ...poll,
    score: currentScore,
    scoreHandlers: scoreHandlers,
    setPoll: setPoll,
    submit: submit,
    results: results,
    setResults: setResults,
    fetchResults: fetchResults,
  }), [poll, currentScore, scoreHandlers, submit, results, setResults, fetchResults]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

const reducer = (
  state = initialState,
  { type: actionType, payload }: PollReducer = {} as PollReducer,
): PollState => {
  switch (actionType) {
    case 'next':
    case 'previous':
      return {
        ...state,
        activeQuestion: (payload as Field).ref,
        currentQuestion: payload as Field,
      };

    case 'data':
      return Object.assign(state, payload);

    case 'thankyou':
      return {
        ...state,
        activeQuestion: 'thankyou',
        currentQuestion: {
          type: '',
          ref: '',
          id: '',
        },
      };

    case 'results':
      return {
        ...state,
        activeQuestion: 'results',
        currentQuestion: {
          type: '',
          ref: '',
          id: '',
        },
      };

    case 'respond':
    default:
      return state;
  }
};

PollContext.defaultProps = {
  value: initialState,
};
