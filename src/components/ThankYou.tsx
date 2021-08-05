import { Text, Spinner } from "@chakra-ui/react";

import { usePoll } from "../services";
import { View } from "./AnimatedView";
import { Center } from "./Card";
import { Metadata } from "./Metadata";
import { PollClosed } from "./PollClosed";
import { SurveyResponse } from "./Response/SurveyResponse";

export function ThankYou(): JSX.Element | null {
  const { results, isClosed } = usePoll();

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
              {results.questions.map((question) => (
                <SurveyResponse field={question} key={question.ref} />
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
