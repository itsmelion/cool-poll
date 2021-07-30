import { Text } from "@chakra-ui/react";
import { Results } from "types";

import results from "services/usePoll/results.json";

import { View } from "./AnimatedView";
import { Center } from "./Card";
import { Metadata } from "./Metadata";
import { MultipleChoice } from "./Response/MultipleChoice";

export function ThankYou(): JSX.Element {
  return (
    <Center>
      <View active onSubmit={() => void 0}>
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
      </View>
    </Center>
  );
}
