import type { QuestionFieldProps } from './QuestionField.types';
import type { TextareaProps } from '@chakra-ui/react';

import { TextArea } from './Item.styles.web';

export function LongText({
  htmlProps,
  ...props
}: QuestionFieldProps<TextareaProps>): JSX.Element {
  return <TextArea {...htmlProps} {...props} />;
}
