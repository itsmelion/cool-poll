import type { Results } from "../../types";
import { Choice, View } from "./Result.styles";
import { VStack, HStack, Box, Text, useColorModeValue } from "@chakra-ui/react";

export function SurveyResponse({
  field,
}: {
  field: Results.Question;
}): JSX.Element {
  const gray = useColorModeValue("gray.300", "gray.600");
  const grey = useColorModeValue("gray.400", "teal.600");

  return (
    <View>
      <Text isTruncated mb="0.5em" mx="0.5em" w="100%">
        {field.title}
      </Text>

      <VStack as="ol" spacing="3pt">
        {field.choices?.map((choice) => (
          <Choice
            fontSize={choice.isChosen ? "1em" : "0.9em"}
            key={choice.field.ref}
          >
            <Box
              backgroundColor={choice.isChosen ? grey : gray}
              borderRadius={6}
              height="100%"
              position="absolute"
              width={`${choice.chosenCount}%`}
            />

            <HStack align="center" h="100%" position="absolute" w="100%">
              <Text
                fontWeight={choice.correct ? "bold" : "normal"}
                isTruncated
                mx="0.5em"
                w="100%"
              >
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
