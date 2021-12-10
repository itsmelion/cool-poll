import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import { TextAreaField } from '@habtic/input';
import { VStack } from '@habtic/layout';
import { habtic } from '@habtic/styled';

export const Checkbox = habtic(ChakraCheckbox, {
  baseStyle: {
    padding: '0.75em 1.25em',
    height: 'auto',
    backgroundColor: 'inherit',
    color: 'inherit',
    border: '1pt solid currentColor',
    borderRadius: '0.5em',
    lineHeight: 1.2,
    marginTop: '0.25em',
    marginBottom: '0.25em',
    fontSize: '1em',
    width: '100%',
  },
});

export const Wrapper = habtic(VStack, {
  baseStyle: {
    marginTop: '0.5em',
    marginBottom: '0.5em',
    flex: 1,
    alignItems: 'start',
  },
});

export const InputItem = habtic(habtic.input, {
  baseStyle: {
    padding: '0.75em 1.25em',
    height: 'auto',
    backgroundColor: 'inherit',
    color: 'inherit',
    border: '1pt solid currentColor',
    borderRadius: '0.5em',
    lineHeight: 1.2,
    marginTop: '0.5em',
    marginBottom: '0.5em',
    fontSize: '1em',
  },
});

export const TextArea = habtic(TextAreaField, {
  baseStyle: {
    padding: '0.75em 1.25em',
    height: 'auto',
    backgroundColor: 'inherit',
    color: 'inherit',
    border: '1pt solid currentColor',
    borderRadius: '0.5em',
    lineHeight: 1.2,
    marginTop: '0.5em',
    marginBottom: '0.5em',
    fontSize: '1em',
  },
});
