import { Text } from "@chakra-ui/react";

export const Description: React.FC<{ title?: string | null }> = ({ title }) => {
  if (!title) return null;
  return <Text>{title}</Text>;
};
