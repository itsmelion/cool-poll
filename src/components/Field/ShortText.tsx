import { useFormContext } from 'react-hook-form';

import type { QuestionFieldProps } from './QuestionField.types';

import { InputItem } from './Item.styles.web';

export function ShortText({
  htmlProps,
  field,
  ...props
}: QuestionFieldProps): JSX.Element {
  const { register } = useFormContext();

  const reg = register(field.ref, {
    required: field.validations?.required && "Can't skip this one",
  });

  return <InputItem {...htmlProps} {...props} {...reg} />;
}
