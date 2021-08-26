import { Badge } from "@chakra-ui/react";

export function PollClosed(): JSX.Element {
  return (
    <Badge colorScheme="red" fontSize="1.25rem">
      Poll closed
    </Badge>
  );
}
