import { preventNonNumericValues } from '@habtic/validations';

import type { fieldType } from '../../types';

const ShortText: React.HTMLProps<HTMLInputElement> = {
  type: 'text',
  maxLength: 255,
  autoFocus: true,
};

const LongText: React.HTMLProps<HTMLTextAreaElement> = {
  maxLength: 9999,
  autoFocus: true,
};

const numeric: React.HTMLProps<HTMLInputElement> = {
  type: 'number',
  autoFocus: true,
  onKeyDown: preventNonNumericValues,
};

type R = Record<string, unknown>;
/** Resolves appropriate aria and other useful field specific props for a better UX */
export function inputAttrByType(type: fieldType): Record<string, unknown> {
  switch (type) {
    case 'short_text':
      return ShortText as R;

    case 'long_text':
      return LongText as R;

    case 'picture_choice':
      return ShortText as R;

    case 'multiple_choice':
      return ShortText as R;

    case 'statement':
      return ShortText as R;

    case 'number':
      return numeric as R;

    default:
      return ShortText as R;
  }
}
