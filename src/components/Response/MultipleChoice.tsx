import { Text } from '@chakra-ui/react';

import { VStack } from '@habtic/layout';
import { habtic } from '@habtic/styled';
import { ColorMode } from '@habtic/system';
import { FaCheckCircle } from 'react-icons/fa';

import type { Results } from '../../types';

import { Choice, View } from './Result.styles';

const { useDarkValue } = ColorMode;

export function MultipleChoice({ field }: { field: Results.Question }): JSX.Element {
  const correctSelectionBg = useDarkValue('#2F855A', '#68D391');
  const wrongSelectionBg = useDarkValue('#F56565', '#9B2C2C');
  const neutralSelectionBg = useDarkValue('#E2E8F0', '#4A5568');
  const containerBg = useDarkValue('#F7FAFC', '#2D3748');

  const choiceBgColor = (choice: Results.QuestionChoice): string => {
    if (choice.isChosen) {
      return choice.correct ? correctSelectionBg : wrongSelectionBg;
    }
    return neutralSelectionBg;
  };

  return (
    <View bgColor={containerBg}>
      <Text isTruncated mb="0.5em" mx="0.5em" w="100%">
        {field.title}
      </Text>

      <VStack as="ol" spacing="0.25pt">
        {field.choices.map((choice) => (
          <Choice
            key={choice.field.ref}
            bgColor={choiceBgColor(choice)}
            fontSize={choice.isChosen ? '1.1em' : '0.9em'}>
            {choice.correct && (
              <habtic.div as={FaCheckCircle} color="green.500" mt="-.2em" />
            )}

            <Text
              fontWeight={choice.correct ? 600 : 'normal'}
              isTruncated
              mx="0.5em"
              w="100%">
              {choice.field.label}
            </Text>

            <Text fontWeight="bold" mx="0.5em">
              {`${choice.chosenCount}%`}
            </Text>
          </Choice>
        ))}
      </VStack>
    </View>
  );
}
