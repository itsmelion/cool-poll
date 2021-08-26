import { Text, Spinner } from "@chakra-ui/react";

import { AnimatedCard } from "../../components";
import { usePoll } from "../../services";
import { Center } from "../Card";
import { Metadata } from "../Metadata";
import { PollClosed } from "../PollClosed";
import { MultipleChoice } from "../Response/MultipleChoice";

/** Poll thankyou page */
export function PollStats(): JSX.Element | null {
  const { isClosed, results } = usePoll();

  return (
    <Center>
      <AnimatedCard active onSubmit={() => void 0}>
        {results ? (
          <>
            {isClosed && <PollClosed />}

            {results.title && (
              <Text fontSize="2xl" mb={6} textAlign="center">
                {results.title}
              </Text>
            )}

            <ol>
              {results.questions?.map((question) => (
                <MultipleChoice field={question} key={question.ref} />
              ))}
            </ol>

            <Metadata data={results.meta} />
          </>
        ) : (
          <Spinner alignSelf="center" justifySelf="center" size="xl" />
        )}
      </AnimatedCard>
    </Center>
  );
}
