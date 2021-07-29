import { Button, ButtonGroup, Text, FormControl } from "@chakra-ui/react";
import { memo } from "react";
import { useFormContext } from "react-hook-form";
import { Field } from "types";

import { usePoll, usePollResponses } from "services";

import { ErrorMessage } from "components";

import * as Poll from "../Poll";
import { useFieldResolver as field } from "../Poll/Field/fieldResolver";

type Props = { question: Field; onSubmit: () => void };

function Q({ question, onSubmit }: Props): JSX.Element {
  const { activeQuestion, currentQuestion } = usePoll();
  const { formState } = useFormContext();
  const { responses } = usePollResponses();

  return (
    <Poll.View
      active={activeQuestion === question.ref}
      key={question.id}
      onSubmit={onSubmit}>
      <FormControl
        isInvalid={!formState.isValid}
        isRequired={currentQuestion.validations?.required}>
        <Poll.Heading title={question.title} />
        <Poll.Description title={question.properties?.description} />

        {field(question.type)}

        <ErrorMessage errors={formState.errors} name={currentQuestion.ref} />
      </FormControl>

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

export const Question = memo(Q);
