import { Box, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

import type { Results } from "../types";

interface MetadataProps {
  data: Results.Metadata;
}

export function Metadata({ data }: MetadataProps): JSX.Element {
  return (
    <Box my={6}>
      {!!data.user.total && (
        <Table size="sm">
          <Thead>
            <Tr>
              <Th colSpan={2}>User</Th>
            </Tr>
          </Thead>

          <Tbody>
            {!!data.user.correct && (
              <Tr>
                <Td>correct:</Td>
                <Td isNumeric>{data.user.correct}</Td>
              </Tr>
            )}

            {!!data.user.wrong && (
              <Tr>
                <Td>wrong:</Td>
                <Td isNumeric>{data.user.wrong}</Td>
              </Tr>
            )}

            {!!data.user.score && (
              <Tr>
                <Td>score:</Td>
                <Td isNumeric>{data.user.score}</Td>
              </Tr>
            )}

            {!!data.user.price && (
              <Tr>
                <Td>price:</Td>
                <Td isNumeric>{data.user.price}</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      )}

      <Table size="sm">
        <Thead>
          <Tr>
            <Th colSpan={2}>Global stats</Th>
          </Tr>
        </Thead>

        <Tbody>
          {!!data.global.correct && (
            <Tr>
              <Td>correct:</Td>
              <Td isNumeric>{data.global.correct}</Td>
            </Tr>
          )}

          {!!data.global.wrong && (
            <Tr>
              <Td>wrong:</Td>
              <Td isNumeric>{data.global.wrong}</Td>
            </Tr>
          )}

          <Tr>
            <Td>total responses:</Td>
            <Td isNumeric>{data.global.totalSubmissions}</Td>
          </Tr>

          {!!data.global.responseRate && (
            <Tr>
              <Td>response rate:</Td>
              <Td isNumeric>{data.global.responseRate}%</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
}
