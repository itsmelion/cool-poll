import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { Field } from "types";

import { usePoll, usePollResponses } from "services";

import { ErrorMessage } from "components";

import * as Poll from "../Poll";
import { useFieldResolver } from "../Poll/Field/fieldResolver";

type Props = { question: Field; onSubmit: () => void };

export function Question({ question, onSubmit }: Props): JSX.Element {
  const Field = useFieldResolver(question.type);
  const { activeQuestion, currentQuestion } = usePoll();
  const { responses } = usePollResponses();
  const { formState } = useFormContext();

  return (
    <Poll.View
      active={activeQuestion === question.ref}
      key={question.id}
      onSubmit={onSubmit}>
      <Poll.Heading title={question.title} />
      <Poll.Description title={question.properties?.description} />

      <Field />

      <ErrorMessage errors={formState.errors} name={currentQuestion.ref} />

      <ButtonGroup alignItems="center" isDisabled={formState.isSubmitting} mt="8">
        <Button type="submit">
          {question.properties?.button_text || "Confirm"}
        </Button>
        <Text>press</Text>
        <Text fontWeight={500}>Enter ↵</Text>
      </ButtonGroup>
      <pre>{JSON.stringify(responses, null, 2)}</pre>
    </Poll.View>
  );
}
