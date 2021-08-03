import { Text, Spinner } from "@chakra-ui/react";
import { Results } from "types";

import { usePoll } from "services";

import { View } from "./AnimatedView";
import { Center } from "./Card";
import { Metadata } from "./Metadata";
import { MultipleChoice } from "./Response/MultipleChoice";

export function ThankYou(): JSX.Element | null {
  const { results } = usePoll();

  return (
    <Center>
      <View active onSubmit={() => void 0}>
        {results ? (
          <>
            <Text fontSize="2xl" mb={6} textAlign="center">
              {results.title}
            </Text>
            <ol>
              {results.questions.map((question) => (
                <MultipleChoice
                  field={question as Results.Question}
                  key={question.ref}
                />
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
