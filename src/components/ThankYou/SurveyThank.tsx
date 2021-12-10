import { Text } from '@chakra-ui/react';
import { Flex } from '@habtic/layout';
import { Spinner } from '@habtic/spinner';

import { usePoll } from '../../services';
import { Center } from '../Card';
import { PollClosed } from '../PollClosed';
import { AnimatedCard } from '../Stagger';

/** Survey thankyou page */
export function SurveyThank(): JSX.Element | null {
  const { isClosed, results } = usePoll();

  return (
    <Center>
      <AnimatedCard active onSubmit={() => undefined}>
        {results ? (
          <>
            {isClosed && <PollClosed />}

            <Flex flex={1} my={6}>
              {results.title && (
                <Text fontSize="2xl" textAlign="center">
                  {results.title}
                </Text>
              )}
            </Flex>
          </>
        ) : (
          <Spinner alignSelf="center" justifySelf="center" size="xl" />
        )}
      </AnimatedCard>
    </Center>
  );
}
