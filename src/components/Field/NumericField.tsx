import type { QuestionFieldProps } from './QuestionField.types';

import { InputItem } from './Item.styles.web';

export function NumericField({
  htmlProps,
  ...props
}: QuestionFieldProps): JSX.Element {
  return <InputItem {...htmlProps} {...props} />;
}
