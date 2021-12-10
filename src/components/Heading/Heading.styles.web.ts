import { FormLabel } from '@chakra-ui/react';
import { habtic } from '@habtic/styled';

export const H1 = habtic(FormLabel, {
  baseStyle: {
    fontSize: 'h1',
    fontWeight: 200,
    marginBottom: '0.75em',
  },
});
