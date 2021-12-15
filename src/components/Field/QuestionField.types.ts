import type { InputProps } from '@habtic/input';

import type { Field } from '../../types';

export interface QuestionFieldProps<FieldType = InputProps> {
  // onSubmit: (value: FieldResponse) => void;
  htmlProps: FieldType;
  field: Field;
}
