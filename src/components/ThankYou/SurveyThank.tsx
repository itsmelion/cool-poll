import { Text, Spinner, Flex } from "@chakra-ui/react";

import { AnimatedCard } from "../../components";
import { usePoll } from "../../services";
import { Center } from "../Card";
import { PollClosed } from "../PollClosed";

/** Survey thankyou page */
export function SurveyThank(): JSX.Element | null {
  const { isClosed, results } = usePoll();

  return (
    <Center>
      <AnimatedCard active onSubmit={() => void 0}>
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
