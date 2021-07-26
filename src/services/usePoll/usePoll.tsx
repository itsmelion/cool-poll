import { createContext, useContext, ReactChild, useReducer } from "react";
import { useCounter } from "react-use";
import type {
  Action,
  Condition,
  PollState,
  PollReducer,
  PollDispatcher,
  Field,
  FieldResponse,
} from "types";

interface Props {
  children: ReactChild;
  value?: Partial<PollState>;
}

const initialState: PollState = {
  activeQuestion: "",
  score: 0,
  price: 0,
  poll: undefined,
  skip: () => undefined,
  previous: () => undefined,
  next: () => undefined,
  currentQuestion: {
    ref: "",
    response: [],
    id: "",
  },
  setPoll: () => undefined,
};

const Context = createContext<PollState>(initialState);
export const usePoll = (): PollState => useContext(Context);

export const PollContext = (props: Props): JSX.Element => {
  const { children, value } = props;
  const [currentScore, scoreHandlers] = useCounter(initialState.score);
  const [poll, setPoll] = useReducer(reducer, { ...initialState, ...value });

  const next = (r: FieldResponse) => {
    scoreHandlers.inc();
    resolveActions(poll, setPoll, r);
  };

  return (
    <Context.Provider
      value={{
        ...poll,
        next,
        score: currentScore,
        setPoll,
      }}>
      {children}
    </Context.Provider>
  );
};

function resolveActions(
  pollState: PollState,
  setPoll: PollDispatcher,
  r: FieldResponse,
) {
  const { activeQuestion, poll = {} } = pollState;
  const { logic = [] } = poll;
  const questionLogic = logic.find(({ ref }) => ref === activeQuestion);

  if (questionLogic) {
    for (const action of questionLogic?.actions ?? []) {
      if (!action?.condition) return;
      if (!isConditionMet(action.condition, r)) return;
      const runAction = actionResolver(action);
      runAction();
    }
  }

  const currentIndex = poll.fields?.findIndex((q) => activeQuestion === q.ref) ?? 0;
  if (poll.fields?.[currentIndex + 1]) {
    setPoll({ type: "next", payload: poll.fields[currentIndex + 1] });
  }
}

// ACTION LOGIC
function addAction(action: Action) {
  return action;
}
function subtractAction(action: Action) {
  return action;
}
function jumpToAction(action: Action) {
  return action;
}

// CONDITIONAL OPERATIONS
function isConditionMet(condition: Condition, response: FieldResponse): boolean {
  const value = condition?.vars?.[1].value;
  switch (condition.op) {
    case "equal":
    case "is":
      return value === response;

    case "is_not":
    case "not_equal":
      return value !== response;

    case "begins_with":
    case "ends_with":
    case "contains":
      return Array.isArray(response) && response.includes(value);
    case "not_contains":
      return Array.isArray(response) && !response.includes(value);
    case "lower_than":
      return !!value && value < (response ?? "");
    case "lower_equal_than":
      return !!value && value <= (response ?? "");
    case "greater_than":
      return !!value && value > (response ?? "");
    case "greater_equal_than":
      return !!value && value >= (response ?? "");

    default:
      return false;
  }
}

// Resolve Action
function actionResolver(action: Action): () => void {
  switch (action.action) {
    case "jump":
      return () => jumpToAction(action);
    case "add":
      return () => addAction(action);
    case "subtract":
      return () => subtractAction(action);
    default:
      return () => undefined;
  }
}

const reducer = (
  state = initialState,
  { type: actionType, payload }: PollReducer,
): PollState => {
  switch (actionType) {
    case "next":
    case "previous":
      return {
        ...state,
        activeQuestion: (payload as Field).ref,
        currentQuestion: {
          type: (payload as Field).type,
          ref: (payload as Field).ref,
          id: (payload as Field).id,
        },
      };
    case "data":
      return Object.assign(state, payload);
    default:
      return state;
  }
};
