import { VStack, Text, useColorModeValue } from "@chakra-ui/react";

import type { Results } from "../../types";
import { Choice, View } from "./Result.styles";

export function SurveyResponse({ field }: { field: Results.Question }): JSX.Element {
  const neutralSelectionBg = useColorModeValue("gray.200", "gray.600");
  const containerBg = useColorModeValue("gray.100", "gray.700");

  return (
    <View bgColor={containerBg}>
      <Text isTruncated mb="0.5em" mx="0.5em" w="100%">
        {field.title}
      </Text>

      <VStack as="ol">
        {field.choices.map((choice) => (
          <Choice
            bgColor={neutralSelectionBg}
            fontSize={choice.isChosen ? "1.1rem" : "0.9rem"}
            key={choice.field.ref}>
            <Text
              fontWeight={choice.correct ? 600 : "normal"}
              isTruncated
              mx="0.5em"
              w="100%">
              {choice.field.label}
            </Text>

            <Text fontWeight="bold" mx="0.5em">
              {`${calculatePercent(choice.chosenCount, field.repliesCount)}%`}
            </Text>
          </Choice>
        ))}
      </VStack>
    </View>
  );
}

/**
 * Custom function that calculates the percent of a number.
 *
 * @param float percent The percent that you want to get.
 * @param float|int num The number that you want to calculate the percent of.
 * @returns {Number}
 */
function calculatePercent(percent: number, num: number) {
  return Math.round((percent / 100) * num);
}