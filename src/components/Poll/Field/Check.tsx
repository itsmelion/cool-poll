import type { CheckboxProps } from "@chakra-ui/react";

import { usePoll } from "services";

import { Wrapper, Checkbox } from "./Item.styles.web";

type Props = {
  htmlProps: CheckboxProps;
};

export function Check(props: Props): JSX.Element {
  const { currentQuestion } = usePoll();
  const { properties } = currentQuestion;

  return (
    <Wrapper>
      {properties?.choices?.map(({ ref, label }) => (
        <Checkbox key={ref}>{label}</Checkbox>
      ))}
    </Wrapper>
  );
}
