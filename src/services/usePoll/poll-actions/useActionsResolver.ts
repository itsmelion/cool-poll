import { useCallback, useMemo } from "react";
import { FieldResponse, Action } from "types";

import { usePoll } from "../usePoll";
import { jumpToAction, addAction, subtractAction } from "./actions";
import { isConditionMet } from "./isConditionMet";

export function useActionsResolver(): (r: FieldResponse) => boolean {
  const { activeQuestion, poll = {}, setPoll: dispatch } = usePoll();
  const { logic = [] } = poll;

  const resolveAction = useMemo(
    () => (action: Action) => {
      switch (action.action) {
        case "jump":
          return () => jumpToAction(action, dispatch);
        case "add":
          return () => addAction(action, dispatch);
        case "subtract":
          return () => subtractAction(action, dispatch);
        default:
          return () => undefined;
      }
    },
    [dispatch],
  );

  return useCallback(
    (r: FieldResponse): boolean => {
      if (!r) return false;
      const questionLogic = logic.find(({ ref }) => ref === activeQuestion);
      let isJump = false;

      if (questionLogic) {
        questionLogic.actions?.forEach((action) => {
          if (action?.action === "jump") isJump = true;
          if (!action?.condition) return;
          if (!isConditionMet(action.condition, r)) return;
          resolveAction(action);
        });
      }

      return isJump;
    },
    [logic, activeQuestion, resolveAction],
  );
}
