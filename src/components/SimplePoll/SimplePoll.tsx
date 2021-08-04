import { Button, ButtonGroup, Text, FormControl } from "@chakra-ui/react";
import { memo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useKeyPressEvent } from "react-use";

import { usePoll, usePollResponses, usePollActions } from "../../services";
import { View } from "../AnimatedView";
import { Center } from "../Card";
import { ErrorMessage } from "../ErrorMessage";
import { Check } from "../Field/Check";
import { Description } from "../Heading/Description";
import { Heading } from "../Heading/Heading";

function Q(): JSX.Element | null {
  const { poll, activeQuestion, currentQuestion } = usePoll();
  const formMethods = useForm({ mode: "onSubmit" });
  const { setAll } = usePollResponses();
  const { next } = usePollActions();
  const { handleSubmit, formState, clearErrors } = formMethods;

  const onSubmit = handleSubmit((data) => {
    clearErrors();
    setAll(data);
    next(data[activeQuestion]);
  });

  useKeyPressEvent("Enter", (e) => {
    e.stopPropagation();
    onSubmit();
  });

  if (!poll) return null;

  return (
    <Center>
      <FormProvider {...formMethods}>
        {poll.fields?.map((question) => (
          <View
            active={activeQuestion === question.ref}
            key={question.id}
            onSubmit={onSubmit}>
            <FormControl
              isInvalid={!formState.isValid}
              isRequired={currentQuestion.validations?.required}>
              <Heading title={question.title} />
              <Description title={question.properties?.description} />

              <Check />

              <ErrorMessage errors={formState.errors} name={currentQuestion.ref} />
            </FormControl>

            <ButtonGroup
              alignItems="center"
              isDisabled={formState.isSubmitting}
              mt="8">
              <Button type="submit">
                {question.properties?.button_text || "Confirm"}
              </Button>
              <Text>press</Text>
              <Text fontWeight={500}>Enter ↵</Text>
            </ButtonGroup>
          </View>
        ))}
      </FormProvider>
    </Center>
  );
}

export const Question = memo(Q);
