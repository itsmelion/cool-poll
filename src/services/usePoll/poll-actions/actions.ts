import type { PollDispatcher, Action } from "../../../types";

// ACTION LOGIC
export function addAction(action: Action, dispatch: PollDispatcher): Action {
  return action;
}
export function subtractAction(action: Action, dispatch: PollDispatcher): Action {
  return action;
}
export function jumpToAction(action: Action, dispatch: PollDispatcher): Action {
  // dispatch({ type: "next", payload });
  return action;
}
