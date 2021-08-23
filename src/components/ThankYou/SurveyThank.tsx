import { Text, Spinner } from "@chakra-ui/react";

import { usePoll } from "../../services";
import { View } from "../AnimatedView";
import { Center } from "../Card";
import { PollClosed } from "../PollClosed";

/** Survey thankyou page */
export function SurveyThank(): JSX.Element | null {
  const { isClosed, results } = usePoll();

  return (
    <Center>
      <View active onSubmit={() => void 0}>
        {results ? (
          <>
            {isClosed && <PollClosed />}

            {results.title && (
              <Text fontSize="2xl" mb={6} textAlign="center">
                {results.title}
              </Text>
            )}
          </>
        ) : (
          <Spinner alignSelf="center" justifySelf="center" size="xl" />
        )}
      </View>
    </Center>
  );
}
