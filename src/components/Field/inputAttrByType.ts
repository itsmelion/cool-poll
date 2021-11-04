import { InputProps, TextareaProps } from '@chakra-ui/react';

import { preventNonNumericValues } from '@habtic/validations';

import type { fieldType } from '../../types';

const short_text: InputProps = {
  type: 'text',
  maxLength: 255,
  autoFocus: true,
};

const long_text: TextareaProps = {
  maxLength: 9999,
  autoFocus: true,
};

const numeric: InputProps = {
  type: 'number',
  autoFocus: true,
  onKeyDown: preventNonNumericValues,
};

type R = Record<string, unknown>;
/** Resolves appropriate aria and other useful field specific props for a better UX */
export function inputAttrByType(type: fieldType): Record<string, unknown> {
  switch (type) {
    case 'short_text':
      return short_text as R;

    case 'long_text':
      return long_text as R;

    case 'picture_choice':
      return short_text as R;

    case 'multiple_choice':
      return short_text as R;

    case 'statement':
      return short_text as R;

    case 'number':
      return numeric as R;

    default:
      return short_text as R;
  }
}
