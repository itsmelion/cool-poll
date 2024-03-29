import { Text } from '@chakra-ui/react';
import { VStack, HStack } from '@habtic/layout';
import { habtic } from '@habtic/styled';
import { ColorMode } from '@habtic/system';

import type { Results } from '../../types';

import { Choice, View } from './Result.styles';

export function SurveyResponse({
  field,
}: {
  field: Results.Question;
}): JSX.Element {
  const gray = ColorMode.useDarkValue('#CBD5E0', '#4A5568');
  const grey = ColorMode.useDarkValue('#A0AEC0', '#2F855A');

  return (
    <View>
      <Text isTruncated mb="0.5em" mx="0.5em" w="100%">
        {field.title}
      </Text>

      <VStack as="ol" spacing="3pt">
        {field.choices?.map((choice) => (
          <Choice
            key={choice.field.ref}
            fontSize={choice.isChosen ? '1em' : '0.9em'}>
            <habtic.div
              backgroundColor={choice.isChosen ? grey : gray}
              borderRadius={6}
              height="100%"
              position="absolute"
              width={`${choice.chosenCount}%`}
            />

            <HStack align="center" h="100%" position="absolute" w="100%">
              <Text
                fontWeight={choice.correct ? 'bold' : 'normal'}
                isTruncated
                mx="0.5em"
                w="100%">
                {choice.field.label}
              </Text>

              <Text fontWeight="bold" mx="0.5em">
                {`${choice.chosenCount}%`}
              </Text>
            </HStack>
          </Choice>
        ))}
      </VStack>
    </View>
  );
}
