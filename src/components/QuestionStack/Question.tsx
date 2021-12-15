import { ButtonGroup, Text } from '@chakra-ui/react';
import { Button } from '@habtic/button';
import { FormControl, ErrorMessage } from '@habtic/input';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import type { Field } from '../../types';

import { usePoll } from '../../services';
import { useFieldResolver as field } from '../Field/fieldResolver';
import { Description } from '../Heading/Description';
import { Heading } from '../Heading/Heading';
import { AnimatedCard } from '../Stagger';

type Props = { question: Field; onSubmit: () => void };

function Q({ question, onSubmit }: Props): JSX.Element {
  const { activeQuestion, currentQuestion } = usePoll();
  const { formState } = useFormContext();

  return (
    <AnimatedCard active={activeQuestion === question.ref} onSubmit={onSubmit}>
      <FormControl
        isInvalid={!formState.isValid && formState.errors?.[question.ref]}
        isRequired={currentQuestion.validations?.required}>
        <Heading title={question.title} />
        <Description title={question.properties?.description} />

        {field(question)}

        <ErrorMessage errors={formState.errors} name={currentQuestion.ref} />
      </FormControl>

      <ButtonGroup alignItems="center" isDisabled={formState.isSubmitting} mt="8">
        <Button type="submit">
          {question.properties?.button_text || 'Confirm'}
        </Button>
        <Text>press</Text>
        <Text fontWeight={500}>Enter ↵</Text>
      </ButtonGroup>
    </AnimatedCard>
  );
}

export const Question = memo(Q);
