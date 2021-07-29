import type { Condition, FieldResponse } from "types";

// CONDITIONAL OPERATIONS
export function isConditionMet(
  condition: Condition,
  response: FieldResponse,
): boolean {
  const value = condition?.vars?.[1]?.value;
  if (!value) return false;

  switch (condition.op) {
    case "equal":
    case "is":
      return Array.isArray(response) ? response.includes(value) : value === response;

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
