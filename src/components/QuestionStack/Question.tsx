import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import { Field } from "types";

import { usePoll } from "services";

import * as Poll from "../Poll";
import { fieldResolver } from "../Poll/Field/fieldResolver";

type Props = { question: Field };

export function Question({ question }: Props): JSX.Element {
  const Field = fieldResolver(question.type, question.properties);
  const { score, activeQuestion } = usePoll();

  return (
    <Poll.View active={activeQuestion === question.id} key={question.id}>
      <Poll.Heading title={question.title} />
      <Poll.Description title={question.properties?.description} />
      <Poll.Description title={`${score}`} />

      {Field}

      <ButtonGroup alignItems="center" mt="8">
        <Button>{question.properties?.button_text || "Confirm"}</Button>
        <Text>press</Text>
        <Text fontWeight={500}>Enter ↵</Text>
      </ButtonGroup>
    </Poll.View>
  );
}
