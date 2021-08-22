import { Text, Spinner } from "@chakra-ui/react";

import { usePoll } from "../services";
import { View } from "./AnimatedView";
import { Center } from "./Card";
import { Metadata } from "./Metadata";
import { PollClosed } from "./PollClosed";
import { MultipleChoice } from "./Response/MultipleChoice";

export function ResultsPage(): JSX.Element | null {
  const { isClosed, results } = usePoll();

  return (
    <Center>
      <View active onSubmit={() => void 0}>
        {results ? (
          <>
            {isClosed && <PollClosed />}

            <Text fontSize="2xl" mb={6} textAlign="center">
              {results.title}
            </Text>

            <ol>
              {results.questions?.map((question) => (
                <MultipleChoice field={question} key={question.ref} />
              ))}
            </ol>

            <Metadata data={results.meta} />
          </>
        ) : (
          <Spinner size="xl" />
        )}
      </View>
    </Center>
  );
}
